import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const wellnessPillars = [
  {
    id: "physical-vitality",
    title: "Physical Vitality",
    subtitle: "Movement, Rest & Body Care",
    description: "Energizing the body, promoting rest, and caring for physical health.",
    color: "from-[#d1c3b6] to-[#e8ddd3]",
  },
  {
    id: "nutritional-harmony",
    title: "Nutritional Harmony",
    subtitle: "Nourishing the Body",
    description: "Fueling the body effectively and mindfully.",
    color: "from-[#d1c3b6] to-[#e8ddd3]",
  },
  {
    id: "mental-emotional-clarity",
    title: "Mental & Emotional Clarity",
    subtitle: "Mind, Mood & Stress",
    description: "Cultivating inner peace, managing stress, and fostering emotional intelligence.",
    color: "from-[#d1c3b6] to-[#e8ddd3]",
  },
  {
    id: "restorative-environments",
    title: "Restorative Environments",
    subtitle: "Spaces, Nature & Travel",
    description: "Creating supportive and healthy surroundings at home, work, and during travel.",
    color: "from-[#d1c3b6] to-[#e8ddd3]",
  },
  {
    id: "social-connection",
    title: "Social Connection & Community",
    subtitle: "Relationships & Belonging",
    description: "Building and nurturing healthy relationships and a sense of community.",
    color: "from-[#d1c3b6] to-[#e8ddd3]",
  },
  {
    id: "personal-growth",
    title: "Personal Growth & Purpose",
    subtitle: "Meaning, Learning & Finances",
    description: "Aligning with values, pursuing growth, and managing life stressors like finances.",
    color: "from-[#d1c3b6] to-[#e8ddd3]",
  },
  {
    id: "conscious-consumption",
    title: "Conscious Consumption & Lifestyle",
    subtitle: "Products, Experiences & Appearance",
    description: "Making informed choices about products, services, and personal expression that support well-being.",
    color: "from-[#d1c3b6] to-[#e8ddd3]",
  },
  {
    id: "preventive-personalized",
    title: "Preventive & Personalized Wellness",
    subtitle: "Proactive Health & Longevity",
    description: "Empowering users to proactively manage health through personalized, accessible solutions.",
    color: "from-[#d1c3b6] to-[#e8ddd3]",
  },
]

export default function PillarsPage() {
  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#2d3142] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href="/">
              <ChevronLeft className="h-6 w-6" />
            </Link>
          </Button>
          <h1 className="text-3xl font-light">Select a Wellness Pillar</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wellnessPillars.map((pillar) => (
            <Link key={pillar.id} href={`/pillars/${pillar.id}`}>
              <Card className="p-6 h-full cursor-pointer hover:shadow-md transition-shadow duration-300 border-none bg-white">
                <div className="flex flex-col h-full">
                  <div
                    className="h-3 w-24 rounded-full bg-gradient-to-r mb-4"
                    style={{ backgroundImage: `linear-gradient(to right, #d1c3b6, #e8ddd3)` }}
                  />
                  <h2 className="text-2xl font-light mb-1">{pillar.title}</h2>
                  <h3 className="text-sm text-[#2d3142]/70 mb-3">{pillar.subtitle}</h3>
                  <p className="text-[#2d3142]/80 text-sm">{pillar.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
