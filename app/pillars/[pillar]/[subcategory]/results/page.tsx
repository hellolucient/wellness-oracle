import Link from "next/link"
import { ChevronLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample recommendations for sleep optimization
const sleepRecommendations = [
  {
    type: "product",
    title: "Philips SmartSleep Wake-Up Light",
    description:
      "This clinically proven light therapy lamp helps you wake up more naturally with a sunrise simulation and gentle sounds.",
    link: "#",
    science:
      "Light therapy has been shown to help regulate circadian rhythms. A 2019 study in the Journal of Sleep Research found that wake-up lights improved sleep quality and morning alertness by gradually increasing light exposure before waking.",
  },
  {
    type: "product",
    title: "Weighted Blanket (15 lbs)",
    description:
      "A weighted blanket provides gentle, even pressure across your body to promote relaxation and deeper sleep.",
    link: "#",
    science:
      "Research published in the Journal of Clinical Sleep Medicine found that weighted blankets can decrease insomnia severity, improve sleep maintenance, and increase daytime activity level. The deep pressure stimulation helps increase serotonin and melatonin while decreasing cortisol levels.",
  },
  {
    type: "service",
    title: "Cognitive Behavioral Therapy for Insomnia (CBT-I)",
    description:
      "A structured program that helps you identify and replace thoughts and behaviors that cause or worsen sleep problems with habits that promote sound sleep.",
    link: "#",
    science:
      "CBT-I is considered the first-line treatment for chronic insomnia by the American Academy of Sleep Medicine. Multiple clinical trials have shown it to be more effective than sleep medications for long-term improvement, with 70-80% of patients experiencing significant benefits.",
  },
  {
    type: "experience",
    title: "Sleep Retreat Weekend",
    description:
      "A 2-day guided retreat focused on sleep hygiene, relaxation techniques, and establishing healthy sleep routines in a peaceful environment.",
    link: "#",
    science:
      "Environmental factors significantly impact sleep quality. Research from the Sleep Foundation indicates that dedicated time away from daily stressors in a sleep-optimized environment can help reset circadian rhythms and establish healthier sleep patterns.",
  },
  {
    type: "service",
    title: "Sleep Tracking App Subscription",
    description:
      "Premium subscription to a sleep tracking app that provides detailed analysis of your sleep patterns and personalized recommendations.",
    link: "#",
    science:
      "While consumer sleep trackers aren't as accurate as clinical polysomnography, studies in Sleep Health journal show they can help identify patterns and motivate behavioral changes. Regular tracking increases awareness of sleep habits and can improve sleep hygiene compliance.",
  },
]

// Sample recommendations for stress management
const stressRecommendations = [
  {
    type: "product",
    title: "Muse 2 Meditation Headband",
    description:
      "A brain-sensing headband that provides real-time feedback on your mental activity, heart rate, breathing, and body movements during meditation.",
    link: "#",
    science:
      "EEG-based neurofeedback devices have been shown to enhance meditation practice. A 2018 study in Frontiers in Human Neuroscience found that neurofeedback training improved attention and emotional regulation, key components in stress management.",
  },
  {
    type: "product",
    title: "Aromatherapy Essential Oil Diffuser Set",
    description:
      "A diffuser with a collection of stress-relieving essential oils like lavender, chamomile, and bergamot to create a calming environment.",
    link: "#",
    science:
      "Research in the Journal of Alternative and Complementary Medicine has shown that certain essential oils like lavender can reduce anxiety and stress by affecting the limbic system. A 2017 meta-analysis found significant effects on stress hormone levels and self-reported stress.",
  },
  {
    type: "service",
    title: "Mindfulness-Based Stress Reduction (MBSR) Course",
    description:
      "An 8-week structured program teaching mindfulness meditation, body awareness, and yoga to help manage stress and improve well-being.",
    link: "#",
    science:
      "MBSR is one of the most well-researched stress reduction programs. Studies published in JAMA Internal Medicine show it produces significant reductions in psychological distress and improves quality of life. MRI studies demonstrate it can actually change brain structure in regions associated with attention and emotion regulation.",
  },
  {
    type: "experience",
    title: "Forest Bathing Session",
    description:
      "A guided nature immersion experience based on the Japanese practice of shinrin-yoku, focusing on mindful presence in a forest environment.",
    link: "#",
    science:
      "Multiple studies from Japan and South Korea have documented the stress-reducing effects of forest environments. Research in the International Journal of Environmental Research and Public Health shows that forest bathing lowers cortisol levels, reduces sympathetic nervous system activity, and improves mood. The phytoncides (aromatic compounds) released by trees have been linked to increased NK cell activity, supporting immune function.",
  },
  {
    type: "service",
    title: "Biofeedback Therapy Sessions",
    description:
      "Professional sessions using instruments to measure physiological functions and teach you to control them through awareness and relaxation techniques.",
    link: "#",
    science:
      "Clinical studies published in Applied Psychophysiology and Biofeedback demonstrate that biofeedback therapy can effectively reduce stress by teaching conscious control over autonomic functions. Participants show significant improvements in heart rate variability, blood pressure, and muscle tension, with effects persisting after treatment ends.",
  },
]

// Sample recommendations for nutrition
const nutritionRecommendations = [
  {
    type: "product",
    title: "High-Quality Probiotic Supplement",
    description: "A multi-strain probiotic supplement to support gut health and improve digestion.",
    link: "#",
    science:
      "Research in the Journal of Gastroenterology shows that specific probiotic strains can improve gut barrier function and reduce inflammation. A 2020 meta-analysis found that multi-strain probiotics were more effective than single-strain products for improving digestive symptoms and overall gut health.",
  },
  {
    type: "product",
    title: "Plant-Based Meal Delivery Service",
    description:
      "A subscription service delivering nutritionally balanced, plant-focused meals to support healthy eating without the planning and preparation.",
    link: "#",
    science:
      "Studies in the American Journal of Lifestyle Medicine show that plant-predominant diets are associated with reduced inflammation and lower risk of chronic disease. Research also indicates that meal delivery services can improve dietary quality by increasing fruit and vegetable consumption and reducing reliance on processed foods.",
  },
  {
    type: "service",
    title: "Personalized Nutrition Consultation",
    description:
      "A series of sessions with a registered dietitian to create a customized nutrition plan based on your specific needs, preferences, and health goals.",
    link: "#",
    science:
      "Personalized nutrition approaches show greater efficacy than general guidelines. Research in the British Medical Journal found that individualized dietary advice leads to better adherence and improved health outcomes compared to standard recommendations, particularly for managing specific health conditions.",
  },
  {
    type: "experience",
    title: "Farm-to-Table Cooking Workshop",
    description:
      "A hands-on culinary experience teaching techniques for preparing nutritious, seasonal meals using locally sourced ingredients.",
    link: "#",
    science:
      "Culinary education improves dietary habits according to research in the Journal of Nutrition Education and Behavior. Studies show that cooking skills are associated with greater fruit and vegetable intake, less frequent fast food consumption, and better overall diet quality.",
  },
  {
    type: "service",
    title: "Mindful Eating Program",
    description:
      "A structured program teaching awareness of physical and emotional cues related to eating, helping you develop a healthier relationship with food.",
    link: "#",
    science:
      "Clinical trials published in Obesity Reviews demonstrate that mindful eating interventions can reduce emotional eating, binge eating episodes, and food cravings. Participants show improvements in body weight, glycemic control, and psychological well-being compared to traditional diet approaches.",
  },
]

// Sample recommendations for fitness
const fitnessRecommendations = [
  {
    type: "product",
    title: "Adjustable Dumbbells Set",
    description:
      "Space-saving dumbbells that can be adjusted to different weights, allowing for progressive strength training at home.",
    link: "#",
    science:
      "Progressive resistance training has been shown in the Journal of Strength and Conditioning Research to be essential for muscle development and strength gains. A 2021 meta-analysis found that progressive overload principles using adjustable resistance leads to significant improvements in muscle mass and functional strength across all age groups.",
  },
  {
    type: "product",
    title: "Smart Fitness Tracker with Heart Rate Monitoring",
    description:
      "A wearable device that tracks activity levels, exercise intensity, and recovery metrics to optimize your fitness routine.",
    link: "#",
    science:
      "Research in the International Journal of Behavioral Nutrition and Physical Activity shows that fitness trackers can increase physical activity levels by 40% through goal-setting and feedback mechanisms. Heart rate monitoring improves exercise efficiency by enabling precise intensity control, which a 2019 study linked to better cardiovascular adaptations.",
  },
  {
    type: "service",
    title: "Personalized Exercise Program",
    description:
      "A customized fitness plan designed by a certified personal trainer based on your current fitness level, goals, and any physical limitations.",
    link: "#",
    science:
      "Individualized exercise programming shows superior outcomes compared to generic plans. Research in the Journal of Sports Science & Medicine demonstrates that personalized approaches lead to 30-40% better adherence rates and significantly greater improvements in fitness parameters due to appropriate progression and exercise selection.",
  },
  {
    type: "experience",
    title: "Outdoor Adventure Fitness Retreat",
    description:
      "A weekend retreat combining various outdoor activities like hiking, kayaking, and rock climbing with expert instruction on proper technique.",
    link: "#",
    science:
      "Nature-based exercise provides additional psychological benefits beyond indoor workouts. Studies in Environmental Science & Technology show that exercising in natural environments reduces stress hormones more effectively than indoor exercise, while improving mood and self-esteem. The varied movement patterns in adventure activities engage multiple muscle groups and energy systems.",
  },
  {
    type: "service",
    title: "Movement Assessment & Corrective Exercise Program",
    description:
      "A comprehensive evaluation of your movement patterns followed by targeted exercises to address imbalances and improve functional movement.",
    link: "#",
    science:
      "Functional movement screening and corrective exercise have been validated in the Journal of Physical Therapy Science as effective approaches for injury prevention. Research shows that addressing movement compensations and muscle imbalances can reduce injury risk by up to 65% and improve performance metrics across various physical activities.",
  },
]

// Map of recommendations by pillar and subcategory
const recommendationsMap = {
  "physical-vitality": {
    sleep: sleepRecommendations,
    fitness: fitnessRecommendations,
    "body-care": sleepRecommendations, // Using sleep recommendations as placeholder
    energy: sleepRecommendations, // Using sleep recommendations as placeholder
  },
  "mental-emotional-clarity": {
    stress: stressRecommendations,
    mindfulness: stressRecommendations, // Using stress recommendations as placeholder
    emotional: stressRecommendations, // Using stress recommendations as placeholder
    cognitive: stressRecommendations, // Using stress recommendations as placeholder
  },
  "nutritional-harmony": {
    "mindful-eating": nutritionRecommendations,
    hydration: nutritionRecommendations, // Using nutrition recommendations as placeholder
    "gut-health": nutritionRecommendations, // Using nutrition recommendations as placeholder
    supplements: nutritionRecommendations, // Using nutrition recommendations as placeholder
  },
}

export default function ResultsPage({ params }: { params: { pillar: string; subcategory: string } }) {
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

  // Get the appropriate recommendations based on pillar and subcategory
  const getRecommendations = () => {
    // Try to get specific recommendations for this pillar/subcategory
    const pillarRecommendations = recommendationsMap[params.pillar as keyof typeof recommendationsMap]
    if (pillarRecommendations) {
      const subcategoryRecommendations = pillarRecommendations[params.subcategory as keyof typeof pillarRecommendations]
      if (subcategoryRecommendations) {
        return subcategoryRecommendations
      }
    }

    // Default to sleep recommendations if no specific recommendations are found
    return sleepRecommendations
  }

  const recommendations = getRecommendations()

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#2d3142] p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href={`/pillars/${params.pillar}/${params.subcategory}`}>
              <ChevronLeft className="h-6 w-6" />
            </Link>
          </Button>
          <h1 className="text-3xl font-light">Your Personalized Recommendations</h1>
        </div>

        <div className="mb-8">
          <p className="text-lg text-[#2d3142]/80">
            Based on your {getTitle().toLowerCase()} assessment, we've curated these evidence-based recommendations to
            help improve your wellness.
          </p>
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
  recommendation: {
    type: string
    title: string
    description: string
    link: string
    science: string
  }
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
