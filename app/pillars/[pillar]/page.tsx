"use client"

import { use } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// This would come from your database or API in a real app
const subcategories = {
  "physical-vitality": [
    {
      id: "fitness",
      title: "Fitness & Movement",
      description: "Personalized exercise suggestions, active recovery methods, flexibility routines.",
    },
    {
      id: "sleep",
      title: "Sleep Optimization",
      description: "Sleep hygiene tips, understanding sleep cycles, relaxation techniques for sleep.",
    },
    {
      id: "body-care",
      title: "Body Care Practices",
      description: "Preventative health guidance, understanding body signals, hygiene, recommendations for therapies.",
    },
    {
      id: "energy",
      title: "Energy Management",
      description: "Tips for combating fatigue, balancing activity and rest.",
    },
  ],
  "mental-emotional-clarity": [
    {
      id: "stress",
      title: "Stress Management & Resilience",
      description: "Techniques like deep breathing, identifying stressors, building coping mechanisms.",
    },
    {
      id: "mindfulness",
      title: "Mindfulness & Meditation",
      description: "Guided practices, benefits, different types of meditation.",
    },
    {
      id: "emotional",
      title: "Emotional Awareness",
      description: "Understanding emotions, healthy expression, mood tracking insights.",
    },
    {
      id: "cognitive",
      title: "Cognitive Wellness",
      description: "Tips for focus, mental clarity, and lifelong learning.",
    },
  ],
  // Other pillars would have their subcategories here
}

// Define active subcategories for each pillar
const activeSubcategories: Record<string, string[]> = {
  "physical-vitality": ["fitness", "sleep"],
  // Add other pillars and their active subcategories here when ready
}

interface PageParams {
  pillar: string;
}

export default function PillarPage({ params }: { params: Promise<PageParams> }) {
  const resolvedParams = use(params);
  const pillarId = resolvedParams.pillar;

  // Get pillar title based on ID
  const getPillarTitle = (id: string) => {
    const titles: Record<string, string> = {
      "physical-vitality": "Physical Vitality",
      "nutritional-harmony": "Nutritional Harmony",
      "mental-emotional-clarity": "Mental & Emotional Clarity",
      "restorative-environments": "Restorative Environments",
      "social-connection": "Social Connection & Community",
      "personal-growth": "Personal Growth & Purpose",
      "conscious-consumption": "Conscious Consumption & Lifestyle",
      "preventive-personalized": "Preventive & Personalized Wellness",
    }
    return titles[id] || "Wellness Pillar"
  }

  // Get subcategories for this pillar or use a default if not found
  const pillarSubcategories =
    subcategories[resolvedParams.pillar as keyof typeof subcategories] || subcategories["physical-vitality"] // Default to physical vitality if pillar not found

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#2d3142] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href="/pillars">
              <ChevronLeft className="h-6 w-6" />
            </Link>
          </Button>
          <h1 className="text-3xl font-light">{getPillarTitle(resolvedParams.pillar)}</h1>
        </div>

        <p className="text-lg text-[#2d3142]/80 mb-8">Select a specific area to focus on:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillarSubcategories.map((subcategory) => {
            const isActive = activeSubcategories[resolvedParams.pillar]?.includes(subcategory.id) ?? false;
            const SubcategoryCardContent = (
              <Card className={`p-6 h-full transition-shadow duration-300 border-none bg-white ${isActive ? 'cursor-pointer hover:shadow-md' : 'cursor-not-allowed opacity-50'}`}>
                <div className="flex flex-col h-full">
                  <div
                    className="h-2 w-16 rounded-full bg-gradient-to-r mb-4"
                    style={{ backgroundImage: `linear-gradient(to right, #d1c3b6, #e8ddd3)` }}
                  />
                  <h2 className="text-xl font-light mb-3">{subcategory.title}</h2>
                  <p className="text-[#2d3142]/80 text-sm">{subcategory.description}</p>
                </div>
              </Card>
            );

            return isActive ? (
              <Link key={subcategory.id} href={`/pillars/${resolvedParams.pillar}/${subcategory.id}`}>
                {SubcategoryCardContent}
              </Link>
            ) : (
              <Popover key={subcategory.id}>
                <PopoverTrigger asChild>
                  <div className="block">
                    {SubcategoryCardContent}
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto bg-[#e8ddd3] border-[#d1c3b6] text-[#2d3142] rounded-lg px-3 py-1.5 text-sm shadow-md">
                  <p>Coming Soon.</p>
                </PopoverContent>
              </Popover>
            );
          })}
        </div>
      </div>
    </div>
  )
}
