"use client"

import { useState, useEffect, use } from "react"
import Link from "next/link"
import { ChevronLeft, ExternalLink, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Question,
  QuestionOption,
  sleepQuestions,
  questionnaireMap,
} from "@/lib/questionnaires/data"
import {
  Recommendation as ImportedRecommendation,
  sleepRecommendations,
  recommendationsMap,
} from "@/lib/recommendations/data"

interface PageParams {
  pillar: string;
  subcategory: string;
}

interface AnalysisItem {
  questionId: string;
  feedback: string;
}

export default function ResultsPage({ params }: { params: Promise<PageParams> }) {
  const resolvedParams = use(params);
  const [analysisData, setAnalysisData] = useState<AnalysisItem[]>([]);
  const [recommendations, setRecommendations] = useState<ImportedRecommendation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getQuestions = (pillar: string, subcategory: string): Question[] => {
    const pillarQuestions = questionnaireMap[pillar as keyof typeof questionnaireMap];
    if (pillarQuestions) {
      const subcategoryQuestions = pillarQuestions[subcategory as keyof typeof pillarQuestions];
      if (subcategoryQuestions) {
        return subcategoryQuestions;
      }
    }
    return sleepQuestions;
  };
  const questions = getQuestions(resolvedParams.pillar, resolvedParams.subcategory);

  useEffect(() => {
    const fetchAnalysis = async () => {
      setIsLoading(true);
      setError(null);
      const storedAnswers = localStorage.getItem('questionnaireAnswers');

      if (!storedAnswers) {
        setError("No answers found. Please complete the questionnaire first.");
        setIsLoading(false);
        setAnalysisData([]);
        setRecommendations([]);
        return;
      }

      try {
        const parsedAnswers = JSON.parse(storedAnswers);

        const response = await fetch('/api/analyze', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            answers: parsedAnswers,
            pillar: resolvedParams.pillar,
            subcategory: resolvedParams.subcategory,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.details || `API request failed with status ${response.status}`);
        }

        const data = await response.json();

        if (!data.analysis || !Array.isArray(data.analysis) || !data.recommendations || !Array.isArray(data.recommendations)) {
           throw new Error('Invalid data structure received from API.');
        }

        setAnalysisData(data.analysis);
        setRecommendations(data.recommendations);

      } catch (err: any) {
        console.error("Failed to fetch analysis:", err);
        setError(err.message || "An error occurred while fetching results.");
        setAnalysisData([]);
        setRecommendations(sleepRecommendations);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalysis();
  }, [resolvedParams.pillar, resolvedParams.subcategory]);

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
  const title = getTitle(resolvedParams.pillar, resolvedParams.subcategory)

  const combinedAnalysisData = analysisData.map(analysisItem => {
      const question = questions.find(q => q.id.toString() === analysisItem.questionId);
      const storedAnswers = typeof window !== 'undefined' ? localStorage.getItem('questionnaireAnswers') : null;
      const parsedAnswers = storedAnswers ? JSON.parse(storedAnswers) : {};
      const answerValue = parsedAnswers[analysisItem.questionId];
      const option = question?.options.find(o => o.value === answerValue);

      return {
          ...analysisItem,
          questionText: question?.question || 'Question not found',
          answerLabel: option?.label || answerValue || 'Not answered',
      };
  });

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

        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-[#2d3142]/50" />
            <p className="ml-4 text-lg">Generating your personalized analysis...</p>
          </div>
        )}

        {error && !isLoading && (
          <Card className="p-6 border-red-500 bg-red-50 text-red-700 mb-8">
            <h2 className="text-xl font-semibold mb-2">Error</h2>
            <p>{error}</p>
            <Button asChild variant="link" className="text-red-700 px-0">
                 <Link href={`/pillars/${resolvedParams.pillar}/${resolvedParams.subcategory}`}>Try Questionnaire Again</Link>
            </Button>
          </Card>
        )}

        {!isLoading && !error && (
          <>
            <div className="mb-8">
              <p className="text-lg text-[#2d3142]/80">
                Let's take a look at your answers for the {title.toLowerCase()} assessment in detail so we can give you some useful suggestions for improvement...
              </p>
            </div>

            <div className="mb-12 space-y-6">
              <h2 className="text-2xl font-light border-b pb-2">Your Assessment Analysis</h2>
              {combinedAnalysisData.length > 0 ? (
                combinedAnalysisData.map((item) => (
                  <Card key={item.questionId} className="p-6 border-none bg-white">
                    <h3 className="font-medium mb-2">{item.questionText}</h3>
                    <p className="text-[#2d3142]/70 mb-3 italic">Your answer: {item.answerLabel}</p>
                    <p className="text-sm">{item.feedback}</p>
                  </Card>
                ))
              ) : (
                 <p>Could not load analysis details.</p>
              )}
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-light border-b pb-2 mb-6">Recommendations</h2>
              {recommendations.length > 0 ? (
                <Tabs defaultValue="all">
                   <TabsList className="bg-[#e8ddd3]/50">
                     <TabsTrigger value="all">All ({recommendations.length})</TabsTrigger>
                     <TabsTrigger value="products">
                       Products ({recommendations.filter(r => r.type === 'product').length})
                     </TabsTrigger>
                     <TabsTrigger value="services">
                       Services ({recommendations.filter(r => r.type === 'service').length})
                     </TabsTrigger>
                     <TabsTrigger value="experiences">
                       Experiences ({recommendations.filter(r => r.type === 'experience').length})
                     </TabsTrigger>
                     {recommendations.some(r => r.type === 'habit') && (
                         <TabsTrigger value="habits">
                           Habits ({recommendations.filter(r => r.type === 'habit').length})
                         </TabsTrigger>
                      )}
                   </TabsList>
                  <TabsContent value="all" className="mt-6">
                    <div className="space-y-6">
                      {recommendations.map((rec, index) => (
                        <RecommendationCard key={`all-${index}`} recommendation={rec} />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="products" className="mt-6">
                    <div className="space-y-6">
                      {recommendations
                        .filter((rec) => rec.type === "product")
                        .map((rec, index) => (
                          <RecommendationCard key={`product-${index}`} recommendation={rec} />
                        ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="services" className="mt-6">
                    <div className="space-y-6">
                      {recommendations
                        .filter((rec) => rec.type === "service")
                        .map((rec, index) => (
                          <RecommendationCard key={`service-${index}`} recommendation={rec} />
                        ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="experiences" className="mt-6">
                    <div className="space-y-6">
                      {recommendations
                        .filter((rec) => rec.type === "experience")
                        .map((rec, index) => (
                          <RecommendationCard key={`experience-${index}`} recommendation={rec} />
                        ))}
                    </div>
                  </TabsContent>
                  {recommendations.some(r => r.type === 'habit') && (
                     <TabsContent value="habits" className="mt-6">
                       <div className="space-y-6">
                         {recommendations
                           .filter((rec) => rec.type === "habit")
                           .map((rec, index) => (
                             <RecommendationCard key={`habit-${index}`} recommendation={rec} />
                           ))}
                       </div>
                     </TabsContent>
                  )}
                </Tabs>
              ) : (
                <p>No recommendations available at this time.</p>
              )}
            </div>

            <div className="text-center mt-12">
              <Button asChild className="bg-[#2d3142] hover:bg-[#2d3142]/90 text-white rounded-full px-8 py-6">
                <Link href="/pillars">Explore Another Wellness Area</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

interface RecommendationProps {
  recommendation: ImportedRecommendation
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
          {recommendation.link && (
            <Button variant="outline" size="icon" asChild className="rounded-full ml-4 flex-shrink-0">
              <Link href={recommendation.link} target="_blank">
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>

        <p className="text-[#2d3142]/80 mb-4">{recommendation.description}</p>

        <div className="bg-[#f8f5f2] p-4 rounded-md">
          <h3 className="text-sm font-medium mb-2">The Research Behind It</h3>
          <p className="text-sm text-[#2d3142]/80">{recommendation.research}</p>
        </div>
      </div>
    </Card>
  )
}
