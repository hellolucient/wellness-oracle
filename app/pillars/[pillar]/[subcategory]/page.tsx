"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

// Sample questions for sleep optimization
const sleepQuestions = [
  {
    id: 1,
    question: "How many hours of sleep do you typically get each night?",
    options: [
      { value: "less-than-5", label: "Less than 5 hours" },
      { value: "5-6", label: "5-6 hours" },
      { value: "7-8", label: "7-8 hours" },
      { value: "more-than-8", label: "More than 8 hours" },
    ],
  },
  {
    id: 2,
    question: "How would you rate your sleep quality?",
    options: [
      { value: "poor", label: "Poor - I wake up feeling tired" },
      { value: "fair", label: "Fair - I wake up feeling okay" },
      { value: "good", label: "Good - I wake up feeling rested" },
      { value: "excellent", label: "Excellent - I wake up feeling refreshed" },
    ],
  },
  {
    id: 3,
    question: "Do you have trouble falling asleep?",
    options: [
      { value: "always", label: "Always - It takes me over an hour" },
      { value: "often", label: "Often - It takes me 30-60 minutes" },
      { value: "sometimes", label: "Sometimes - It takes me 15-30 minutes" },
      { value: "never", label: "Never - I fall asleep within 15 minutes" },
    ],
  },
  {
    id: 4,
    question: "Do you wake up during the night?",
    options: [
      { value: "multiple-times", label: "Multiple times and struggle to fall back asleep" },
      { value: "few-times", label: "A few times but fall back asleep easily" },
      { value: "rarely", label: "Rarely wake up during the night" },
      { value: "never", label: "Never wake up until morning" },
    ],
  },
  {
    id: 5,
    question: "How consistent is your sleep schedule?",
    options: [
      { value: "very-inconsistent", label: "Very inconsistent - different times every day" },
      { value: "somewhat-inconsistent", label: "Somewhat inconsistent - varies by 1-2 hours" },
      { value: "mostly-consistent", label: "Mostly consistent - within an hour each day" },
      { value: "very-consistent", label: "Very consistent - same time every day" },
    ],
  },
  {
    id: 6,
    question: "Do you use electronic devices before bed?",
    options: [
      { value: "always", label: "Always - right up until I fall asleep" },
      { value: "often", label: "Often - within 30 minutes of bedtime" },
      { value: "sometimes", label: "Sometimes - I try to avoid it" },
      { value: "never", label: "Never - I avoid screens at least 1 hour before bed" },
    ],
  },
  {
    id: 7,
    question: "How is your bedroom environment?",
    options: [
      { value: "poor", label: "Poor - noisy, bright, uncomfortable" },
      { value: "fair", label: "Fair - some distractions" },
      { value: "good", label: "Good - mostly quiet and comfortable" },
      { value: "excellent", label: "Excellent - dark, quiet, comfortable temperature" },
    ],
  },
  {
    id: 8,
    question: "Do you consume caffeine or alcohol in the evening?",
    options: [
      { value: "always", label: "Always - every evening" },
      { value: "often", label: "Often - several times a week" },
      { value: "sometimes", label: "Sometimes - once a week or less" },
      { value: "never", label: "Never - I avoid them in the evening" },
    ],
  },
  {
    id: 9,
    question: "Do you feel refreshed when you wake up?",
    options: [
      { value: "never", label: "Never - always tired" },
      { value: "rarely", label: "Rarely - usually tired" },
      { value: "sometimes", label: "Sometimes - occasionally refreshed" },
      { value: "always", label: "Always - consistently refreshed" },
    ],
  },
  {
    id: 10,
    question: "Have you tried any sleep aids or techniques?",
    options: [
      { value: "none", label: "None" },
      { value: "few", label: "A few basic techniques" },
      { value: "several", label: "Several techniques or products" },
      { value: "many", label: "Many different approaches" },
    ],
  },
]

// Sample questions for stress management
const stressQuestions = [
  {
    id: 1,
    question: "How often do you feel overwhelmed by stress?",
    options: [
      { value: "daily", label: "Daily - it's a constant presence" },
      { value: "frequently", label: "Frequently - several times a week" },
      { value: "occasionally", label: "Occasionally - a few times a month" },
      { value: "rarely", label: "Rarely - only in specific situations" },
    ],
  },
  {
    id: 2,
    question: "How would you rate your ability to manage stress?",
    options: [
      { value: "poor", label: "Poor - I struggle to cope" },
      { value: "fair", label: "Fair - I manage but it's difficult" },
      { value: "good", label: "Good - I have some effective strategies" },
      { value: "excellent", label: "Excellent - I handle stress well" },
    ],
  },
  {
    id: 3,
    question: "Do you experience physical symptoms of stress (headaches, tension, etc.)?",
    options: [
      { value: "severe", label: "Severe - multiple symptoms regularly" },
      { value: "moderate", label: "Moderate - noticeable symptoms often" },
      { value: "mild", label: "Mild - occasional symptoms" },
      { value: "none", label: "None - rarely experience physical symptoms" },
    ],
  },
  {
    id: 4,
    question: "How often do you practice mindfulness or relaxation techniques?",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely - a few times a month" },
      { value: "sometimes", label: "Sometimes - a few times a week" },
      { value: "regularly", label: "Regularly - daily practice" },
    ],
  },
  {
    id: 5,
    question: "How does stress affect your sleep?",
    options: [
      { value: "severely", label: "Severely - I often can't sleep due to stress" },
      { value: "moderately", label: "Moderately - I have trouble falling or staying asleep" },
      { value: "slightly", label: "Slightly - It occasionally affects my sleep" },
      { value: "not-at-all", label: "Not at all - My sleep is unaffected by stress" },
    ],
  },
  {
    id: 6,
    question: "How often do you take time for yourself to relax and recharge?",
    options: [
      { value: "never", label: "Never - I'm always busy" },
      { value: "rarely", label: "Rarely - only when absolutely necessary" },
      { value: "sometimes", label: "Sometimes - I try to make time" },
      { value: "regularly", label: "Regularly - I prioritize self-care" },
    ],
  },
  {
    id: 7,
    question: "How does stress impact your relationships?",
    options: [
      { value: "severely", label: "Severely - It causes significant conflicts" },
      { value: "moderately", label: "Moderately - It sometimes creates tension" },
      { value: "slightly", label: "Slightly - It has minor effects" },
      { value: "not-at-all", label: "Not at all - My relationships are unaffected" },
    ],
  },
  {
    id: 8,
    question: "Do you have a support system to help you manage stress?",
    options: [
      { value: "none", label: "None - I handle everything alone" },
      { value: "limited", label: "Limited - I have one or two people I can talk to" },
      { value: "moderate", label: "Moderate - I have several supportive relationships" },
      { value: "strong", label: "Strong - I have a robust support network" },
    ],
  },
  {
    id: 9,
    question: "How often do you engage in physical activity to manage stress?",
    options: [
      { value: "never", label: "Never" },
      { value: "rarely", label: "Rarely - a few times a month" },
      { value: "sometimes", label: "Sometimes - 1-2 times a week" },
      { value: "regularly", label: "Regularly - 3+ times a week" },
    ],
  },
  {
    id: 10,
    question: "How would you describe your work-life balance?",
    options: [
      { value: "poor", label: "Poor - Work dominates my life" },
      { value: "fair", label: "Fair - I struggle to maintain balance" },
      { value: "good", label: "Good - I usually maintain a reasonable balance" },
      { value: "excellent", label: "Excellent - I have a healthy work-life balance" },
    ],
  },
]

// Sample questions for nutrition
const nutritionQuestions = [
  {
    id: 1,
    question: "How many servings of fruits and vegetables do you typically consume daily?",
    options: [
      { value: "0-1", label: "0-1 servings" },
      { value: "2-3", label: "2-3 servings" },
      { value: "4-5", label: "4-5 servings" },
      { value: "6+", label: "6+ servings" },
    ],
  },
  {
    id: 2,
    question: "How often do you eat processed or fast foods?",
    options: [
      { value: "daily", label: "Daily - most meals" },
      { value: "frequently", label: "Frequently - several times a week" },
      { value: "occasionally", label: "Occasionally - once a week or less" },
      { value: "rarely", label: "Rarely or never" },
    ],
  },
  {
    id: 3,
    question: "How would you describe your water intake?",
    options: [
      { value: "minimal", label: "Minimal - I rarely drink plain water" },
      { value: "low", label: "Low - 1-3 glasses daily" },
      { value: "moderate", label: "Moderate - 4-6 glasses daily" },
      { value: "optimal", label: "Optimal - 7+ glasses daily" },
    ],
  },
  {
    id: 4,
    question: "How often do you eat mindfully (paying attention to hunger cues, savoring food)?",
    options: [
      { value: "never", label: "Never - I eat quickly or while distracted" },
      { value: "rarely", label: "Rarely - I sometimes rush meals" },
      { value: "sometimes", label: "Sometimes - I try to be mindful" },
      { value: "always", label: "Always - I practice mindful eating regularly" },
    ],
  },
  {
    id: 5,
    question: "How diverse is your diet in terms of different food groups and colors?",
    options: [
      { value: "very-limited", label: "Very limited - I eat the same foods regularly" },
      { value: "somewhat-limited", label: "Somewhat limited - I have a few go-to meals" },
      { value: "moderately-diverse", label: "Moderately diverse - I incorporate variety" },
      { value: "very-diverse", label: "Very diverse - I eat a wide range of foods" },
    ],
  },
  {
    id: 6,
    question: "How often do you experience digestive issues (bloating, discomfort, etc.)?",
    options: [
      { value: "daily", label: "Daily - after most meals" },
      { value: "frequently", label: "Frequently - several times a week" },
      { value: "occasionally", label: "Occasionally - a few times a month" },
      { value: "rarely", label: "Rarely or never" },
    ],
  },
  {
    id: 7,
    question: "Do you take any nutritional supplements?",
    options: [
      { value: "none", label: "None" },
      { value: "basic", label: "Basic - multivitamin only" },
      { value: "several", label: "Several - targeted supplements" },
      { value: "comprehensive", label: "Comprehensive - personalized regimen" },
    ],
  },
  {
    id: 8,
    question: "How often do you prepare meals at home vs. eating out?",
    options: [
      { value: "rarely-home", label: "Rarely cook - mostly eat out/takeout" },
      { value: "sometimes-home", label: "Sometimes cook - eat out frequently" },
      { value: "mostly-home", label: "Mostly cook - eat out occasionally" },
      { value: "almost-always-home", label: "Almost always cook at home" },
    ],
  },
  {
    id: 9,
    question: "How would you rate your energy levels throughout the day?",
    options: [
      { value: "very-low", label: "Very low - constantly fatigued" },
      { value: "fluctuating", label: "Fluctuating - energy crashes after meals" },
      { value: "moderate", label: "Moderate - occasional dips in energy" },
      { value: "high", label: "High - consistent energy throughout the day" },
    ],
  },
  {
    id: 10,
    question: "How would you describe your relationship with food?",
    options: [
      { value: "negative", label: "Negative - anxiety, guilt, or strict rules" },
      { value: "complicated", label: "Complicated - occasional struggles" },
      { value: "neutral", label: "Neutral - food is just fuel" },
      { value: "positive", label: "Positive - enjoyment with balance" },
    ],
  },
]

// Sample questions for fitness
const fitnessQuestions = [
  {
    id: 1,
    question: "How many days per week do you engage in intentional physical activity?",
    options: [
      { value: "0", label: "0 days - I'm currently inactive" },
      { value: "1-2", label: "1-2 days per week" },
      { value: "3-4", label: "3-4 days per week" },
      { value: "5+", label: "5+ days per week" },
    ],
  },
  {
    id: 2,
    question: "What types of physical activity do you currently enjoy? (Select the closest match)",
    options: [
      { value: "none", label: "None currently" },
      { value: "light", label: "Light activity (walking, gentle yoga)" },
      { value: "moderate", label: "Moderate activity (jogging, cycling, swimming)" },
      { value: "intense", label: "Intense activity (HIIT, weight training, sports)" },
    ],
  },
  {
    id: 3,
    question: "How would you rate your current strength level?",
    options: [
      { value: "beginner", label: "Beginner - I struggle with basic strength tasks" },
      { value: "novice", label: "Novice - I can perform basic strength activities" },
      { value: "intermediate", label: "Intermediate - I have decent strength" },
      { value: "advanced", label: "Advanced - I have above-average strength" },
    ],
  },
  {
    id: 4,
    question: "How would you rate your current flexibility?",
    options: [
      { value: "poor", label: "Poor - I'm very inflexible" },
      { value: "fair", label: "Fair - I have limited range of motion" },
      { value: "good", label: "Good - I have average flexibility" },
      { value: "excellent", label: "Excellent - I'm very flexible" },
    ],
  },
  {
    id: 5,
    question: "How would you describe your cardiovascular endurance?",
    options: [
      { value: "poor", label: "Poor - I get winded easily" },
      { value: "fair", label: "Fair - I can sustain light activity" },
      { value: "good", label: "Good - I can maintain moderate activity" },
      { value: "excellent", label: "Excellent - I have strong endurance" },
    ],
  },
  {
    id: 6,
    question: "Do you experience pain or discomfort during physical activity?",
    options: [
      { value: "severe", label: "Severe - It prevents me from being active" },
      { value: "moderate", label: "Moderate - It limits what I can do" },
      { value: "mild", label: "Mild - Occasional discomfort" },
      { value: "none", label: "None - I exercise pain-free" },
    ],
  },
  {
    id: 7,
    question: "What is your primary motivation for physical activity?",
    options: [
      { value: "appearance", label: "Appearance/weight management" },
      { value: "health", label: "Health benefits/disease prevention" },
      { value: "performance", label: "Performance/athletic goals" },
      { value: "enjoyment", label: "Enjoyment/stress relief" },
    ],
  },
  {
    id: 8,
    question: "How consistent have you been with physical activity over the past year?",
    options: [
      { value: "inconsistent", label: "Very inconsistent - long breaks between activity" },
      { value: "somewhat-inconsistent", label: "Somewhat inconsistent - occasional breaks" },
      { value: "mostly-consistent", label: "Mostly consistent - few interruptions" },
      { value: "very-consistent", label: "Very consistent - regular routine" },
    ],
  },
  {
    id: 9,
    question: "How do you feel after physical activity?",
    options: [
      { value: "exhausted", label: "Exhausted - drained and depleted" },
      { value: "tired", label: "Tired - but in a satisfactory way" },
      { value: "energized", label: "Energized - with increased vitality" },
      { value: "euphoric", label: "Euphoric - significant mood boost" },
    ],
  },
  {
    id: 10,
    question: "What barriers do you face to regular physical activity?",
    options: [
      { value: "time", label: "Time constraints" },
      { value: "motivation", label: "Lack of motivation/enjoyment" },
      { value: "knowledge", label: "Lack of knowledge/guidance" },
      { value: "minimal", label: "Minimal barriers" },
    ],
  },
]

// Map of questionnaires by pillar and subcategory
const questionnaireMap = {
  "physical-vitality": {
    sleep: sleepQuestions,
    fitness: fitnessQuestions,
    "body-care": sleepQuestions, // Using sleep questions as placeholder
    energy: sleepQuestions, // Using sleep questions as placeholder
  },
  "mental-emotional-clarity": {
    stress: stressQuestions,
    mindfulness: stressQuestions, // Using stress questions as placeholder
    emotional: stressQuestions, // Using stress questions as placeholder
    cognitive: stressQuestions, // Using stress questions as placeholder
  },
  "nutritional-harmony": {
    "mindful-eating": nutritionQuestions,
    hydration: nutritionQuestions, // Using nutrition questions as placeholder
    "gut-health": nutritionQuestions, // Using nutrition questions as placeholder
    supplements: nutritionQuestions, // Using nutrition questions as placeholder
  },
}

export default function QuestionnairePage({ params }: { params: { pillar: string; subcategory: string } }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isComplete, setIsComplete] = useState(false)

  // Get title based on pillar and subcategory
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

    return titles[params.pillar]?.[params.subcategory] || "Wellness Assessment"
  }

  // Get the appropriate questions based on pillar and subcategory
  const getQuestions = () => {
    // Try to get specific questions for this pillar/subcategory
    const pillarQuestions = questionnaireMap[params.pillar as keyof typeof questionnaireMap]
    if (pillarQuestions) {
      const subcategoryQuestions = pillarQuestions[params.subcategory as keyof typeof pillarQuestions]
      if (subcategoryQuestions) {
        return subcategoryQuestions
      }
    }

    // Default to sleep questions if no specific questions are found
    return sleepQuestions
  }

  const questions = getQuestions()

  const handleNext = () => {
    if (selectedOption) {
      // Save the answer
      setAnswers({ ...answers, [currentQuestion]: selectedOption })

      if (currentQuestion < questions.length - 1) {
        // Move to next question
        setCurrentQuestion(currentQuestion + 1)
        setSelectedOption(null)
      } else {
        // Questionnaire complete
        setIsComplete(true)
      }
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#2d3142] p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href={`/pillars/${params.pillar}`}>
              <ChevronLeft className="h-6 w-6" />
            </Link>
          </Button>
          <h1 className="text-3xl font-light">{getTitle()}</h1>
        </div>

        {!isComplete ? (
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
            </Card>

            <div className="flex justify-end">
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
        ) : (
          <Link href={`/pillars/${params.pillar}/${params.subcategory}/results`}>
            <Button className="bg-[#2d3142] hover:bg-[#2d3142]/90 text-white rounded-full px-6 py-5 w-full">
              View Your Personalized Recommendations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}
