"use client"

import { useState, use } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Question,
  QuestionOption,
  sleepQuestions,
  questionnaireMap,
} from "@/lib/questionnaires/data" // Import from new location

interface PageParams {
  pillar: string;
  subcategory: string;
}

export default function QuestionnairePage({ params }: { params: Promise<PageParams> }) {
  const resolvedParams = use(params);
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  // Get title based on pillar and subcategory using resolvedParams
  const getTitle = () => {
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

    return titles[resolvedParams.pillar]?.[resolvedParams.subcategory] || "Wellness Assessment"
  }

  // Get the appropriate questions based on pillar and subcategory using resolvedParams
  const getQuestions = () => {
    const pillarQuestions = questionnaireMap[resolvedParams.pillar as keyof typeof questionnaireMap]
    if (pillarQuestions) {
      const subcategoryQuestions = pillarQuestions[resolvedParams.subcategory as keyof typeof pillarQuestions]
      if (subcategoryQuestions) {
        return subcategoryQuestions
      }
    }
    return sleepQuestions // Default
  }

  const questions = getQuestions()

  const handleNext = () => {
    if (selectedOption && questions[currentQuestion]) {
      const questionId = questions[currentQuestion].id.toString();
      const finalAnswers = { ...answers, [questionId]: selectedOption }
      setAnswers(finalAnswers)

      if (currentQuestion < questions.length - 1) {
        // Move to next question
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
      } else {
        // Last question answered - save answers to localStorage and navigate
        try {
          localStorage.setItem('questionnaireAnswers', JSON.stringify(finalAnswers));
        } catch (error) {
          console.error("Failed to save answers to localStorage:", error);
          // Handle error appropriately, maybe show a message to the user
        }
        router.push(`/pillars/${resolvedParams.pillar}/${resolvedParams.subcategory}/results`)
      }
    }
  }

  // NEW: Handle going back to the previous question
  const handleBack = () => {
    if (currentQuestion > 0) {
      const previousQuestionIndex = currentQuestion - 1;
      const previousQuestionId = questions[previousQuestionIndex].id.toString();
      const previousAnswer = answers[previousQuestionId];
      setCurrentQuestion(previousQuestionIndex);
      setSelectedOption(previousAnswer || null); // Set previously selected option
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#2d3142] p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href={`/pillars/${resolvedParams.pillar}`}>
              <ChevronLeft className="h-6 w-6" />
            </Link>
          </Button>
          <h1 className="text-3xl font-light">{getTitle()}</h1>
        </div>

        <>
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="p-8 border-none bg-white mb-6">
            {questions[currentQuestion] && (
              <>
                <h2 className="text-xl mb-6">{questions[currentQuestion].question}</h2>

                <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption}>
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.value} className="flex items-start space-x-2 mb-4">
                      <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                      <Label htmlFor={option.value} className="font-normal text-base">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </>
            )}
          </Card>

          {/* Updated Button Layout */}
          <div className="flex justify-between items-center">
            <Button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              variant="outline" // Use outline style for back button
              className="rounded-full px-6 py-5 border-[#2d3142]/50 text-[#2d3142] hover:bg-[#e8ddd3]"
            >
              <ChevronLeft className="mr-2 h-5 w-5" /> Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={!selectedOption}
              className="bg-[#2d3142] hover:bg-[#2d3142]/90 text-white rounded-full px-6 py-5"
            >
              {currentQuestion < questions.length - 1 ? "Next" : "See Results"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </>
      </div>
    </div>
  )
}
