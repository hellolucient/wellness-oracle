"use client"

import { useState, useEffect, use } from "react"
import Link from "next/link"
import { ChevronLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Question,
  QuestionOption,
  sleepQuestions,
  stressQuestions,
  nutritionQuestions,
  fitnessQuestions,
  questionnaireMap,
} from "@/lib/questionnaires/data"
import {
  Recommendation,
  recommendationsMap,
  sleepRecommendations,
} from "@/lib/recommendations/data"

interface PageParams {
  pillar: string;
  subcategory: string;
}

interface Answer {
  questionId: number | string;
  answerValue: string;
  answerLabel: string;
  questionText: string;
}

export default function ResultsPage({ params }: { params: Promise<PageParams> }) {
  const resolvedParams = use(params);
  const [answers, setAnswers] = useState<Record<string, string> | null>(null);
  const [analysisData, setAnalysisData] = useState<Answer[]>([]);

  // Fetch answers and prepare analysis data on mount
  useEffect(() => {
    const storedAnswers = localStorage.getItem('questionnaireAnswers');
    if (storedAnswers) {
      try {
        const parsedAnswers: Record<string, string> = JSON.parse(storedAnswers);
        setAnswers(parsedAnswers);

        // Get the questions for this pillar/subcategory
        const questions = getQuestions(resolvedParams.pillar, resolvedParams.subcategory);

        // Map answers to include question text and chosen label
        const detailedAnswers = Object.entries(parsedAnswers).map(([qId, answerValue]) => {
          const question = questions.find((q: Question) => q.id.toString() === qId);
          const option = question?.options.find((o: QuestionOption) => o.value === answerValue);
          return {
            questionId: qId,
            answerValue: answerValue,
            answerLabel: option?.label || 'Not found',
            questionText: question?.question || 'Question not found',
          };
        });
        setAnalysisData(detailedAnswers);

        // Optional: Clean up localStorage
        // localStorage.removeItem('questionnaireAnswers');
      } catch (error) {
        console.error("Failed to parse answers from localStorage:", error);
        setAnswers({}); // Set to empty object to avoid errors
        setAnalysisData([]);
      }
    } else {
        setAnswers({}); // Set to empty object if no answers found
        setAnalysisData([]);
    }
  }, [resolvedParams.pillar, resolvedParams.subcategory]); // Rerun if params change

  // Replicate or import getQuestions logic
  const getQuestions = (pillar: string, subcategory: string): Question[] => {
    const pillarQuestions = questionnaireMap[pillar as keyof typeof questionnaireMap];
    if (pillarQuestions) {
      const subcategoryQuestions = pillarQuestions[subcategory as keyof typeof pillarQuestions];
      if (subcategoryQuestions) {
        return subcategoryQuestions;
      }
    }
    // Return a default or handle error if questions not found
    return sleepQuestions; // Defaulting to sleep as in questionnaire page
  };

  // Function to generate analysis text based on question and answer
  const getAnalysisText = (pillarId: string, subcategoryId: string, questionId: string, answerValue: string): string => {
    // --- Start Analysis Logic ---
    if (pillarId === 'physical-vitality' && subcategoryId === 'fitness') {
      if (questionId === '1') { // Q1: How many days per week do you engage in intentional physical activity?
        if (answerValue === '0') {
          return "Regular movement, even light activity, is crucial for overall health. Small steps like taking the stairs, a short walk, or parking further away can make a difference.";
        } else if (answerValue === '1-2') {
          // TODO: Add context-aware logic based on other answers
          return "Engaging in activity 1-2 times a week is a good start! Let's look at the types of activity you enjoy to see how we can build on this.";
        } else if (answerValue === '3-4') {
          return "Great consistency! Exercising 3-4 days a week provides significant health benefits. Consider adding variety or exploring new activities to keep things interesting.";
        } else if (answerValue === '5+') {
          return "Excellent commitment! Being active 5 or more days a week is fantastic for your health. Ensure you're incorporating rest days and listening to your body.";
        }
      }
      // Add analysis for other fitness questions here...
       else if (questionId === '2') { // Q2: What types of physical activity?
         // TODO: Add analysis based on answerValue ('none', 'light', 'moderate', 'intense')
         return "Understanding the types of activity you enjoy helps tailor recommendations.";
       }
       // ... etc for fitness Q3-10
    }
    // Add analysis logic for other pillars/subcategories here...

    // Default message if no specific analysis is found
    return "Thanks for sharing! This information helps us understand your current habits.";
    // --- End Analysis Logic ---
  };

  // Get title based on pillar and subcategory
  const getTitle = (pillar: string, subcategory: string) => {
    const titles: Record<string, Record<string, string>> = {
      "physical-vitality": {
        sleep: "Sleep Optimization",
        fitness: "Fitness & Movement",
        "body-care": "Body Care Practices",
        energy: "Energy Management",
      },
      "mental-emotional-clarity": {
        stress: "Stress Management & Resilience",
        mindfulness: "Mindfulness & Meditation",
        emotional: "Emotional Awareness",
        cognitive: "Cognitive Wellness",
      },
      "nutritional-harmony": {
        "mindful-eating": "Mindful & Healthy Eating",
        hydration: "Hydration",
        "gut-health": "Gut Health",
        supplements: "Supplements & Nutrients",
      },
    }

    return titles[pillar]?.[subcategory] || "Wellness Assessment"
  }

  // Define getRecommendations using the imported map
  const getRecommendations = (pillar: string, subcategory: string): Recommendation[] => {
    const pillarRecommendations = recommendationsMap[pillar as keyof typeof recommendationsMap]
    if (pillarRecommendations) {
      const subcategoryRecommendations = pillarRecommendations[subcategory as keyof typeof pillarRecommendations]
      if (subcategoryRecommendations) {
        return subcategoryRecommendations
      }
    }
    return sleepRecommendations; // Default
  }

  const recommendations = getRecommendations(resolvedParams.pillar, resolvedParams.subcategory)
  const title = getTitle(resolvedParams.pillar, resolvedParams.subcategory)

  if (answers === null) {
    // Show loading state while fetching answers
    return <div className="p-6">Loading assessment results...</div>;
  }

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#2d3142] p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href={`/pillars/${resolvedParams.pillar}/${resolvedParams.subcategory}`}>
              <ChevronLeft className="h-6 w-6" />
            </Link>
          </Button>
          <h1 className="text-3xl font-light">Your Personalized Recommendations</h1>
        </div>

        <div className="mb-8">
          <p className="text-lg text-[#2d3142]/80">
            Let's take a look at your answers for the {title.toLowerCase()} assessment in detail so we can give you some useful suggestions for improvement...
          </p>
        </div>

        <div className="mb-12 space-y-6">
          <h2 className="text-2xl font-light border-b pb-2">Your Assessment Analysis</h2>
          {analysisData.length > 0 ? (
            analysisData.map((item) => (
              <Card key={item.questionId} className="p-6 border-none bg-white">
                <h3 className="font-medium mb-2">{item.questionText}</h3>
                <p className="text-[#2d3142]/70 mb-3 italic">Your answer: {item.answerLabel}</p>
                <p className="text-sm">
                  {getAnalysisText(resolvedParams.pillar, resolvedParams.subcategory, item.questionId.toString(), item.answerValue)}
                </p>
              </Card>
            ))
          ) : (
             <p>Could not load analysis details.</p>
          )}
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-[#e8ddd3]/50">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="experiences">Experiences</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="space-y-6">
              {recommendations.map((rec, index) => (
                <RecommendationCard key={index} recommendation={rec} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="products" className="mt-6">
            <div className="space-y-6">
              {recommendations
                .filter((rec) => rec.type === "product")
                .map((rec, index) => (
                  <RecommendationCard key={index} recommendation={rec} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="services" className="mt-6">
            <div className="space-y-6">
              {recommendations
                .filter((rec) => rec.type === "service")
                .map((rec, index) => (
                  <RecommendationCard key={index} recommendation={rec} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="experiences" className="mt-6">
            <div className="space-y-6">
              {recommendations
                .filter((rec) => rec.type === "experience")
                .map((rec, index) => (
                  <RecommendationCard key={index} recommendation={rec} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button asChild className="bg-[#2d3142] hover:bg-[#2d3142]/90 text-white rounded-full px-8 py-6">
            <Link href="/pillars">Explore Another Wellness Area</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

interface RecommendationProps {
  recommendation: Recommendation
}

function RecommendationCard({ recommendation }: RecommendationProps) {
  return (
    <Card className="p-6 border-none bg-white">
      <div className="flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="inline-block px-3 py-1 text-xs rounded-full bg-[#e8ddd3] text-[#2d3142] mb-2">
              {recommendation.type.charAt(0).toUpperCase() + recommendation.type.slice(1)}
            </div>
            <h2 className="text-xl font-light">{recommendation.title}</h2>
          </div>
          <Button variant="outline" size="icon" asChild className="rounded-full">
            <Link href={recommendation.link}>
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <p className="text-[#2d3142]/80 mb-4">{recommendation.description}</p>

        <div className="bg-[#f8f5f2] p-4 rounded-md">
          <h3 className="text-sm font-medium mb-2">The Science Behind It</h3>
          <p className="text-sm text-[#2d3142]/80">{recommendation.science}</p>
        </div>
      </div>
    </Card>
  )
}
