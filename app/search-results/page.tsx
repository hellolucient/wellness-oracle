"use client"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ChevronLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Recommendation as ImportedRecommendation, allRecommendations } from "@/lib/recommendations/data"

// Ensure RecommendationProps uses the explicitly imported type
interface RecommendationProps {
  recommendation: ImportedRecommendation;
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

// Wrap the main component in Suspense for useSearchParams
function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || "";
  const [filteredRecommendations, setFilteredRecommendations] = useState<ImportedRecommendation[]>([]);

  useEffect(() => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      const results = allRecommendations.filter(rec =>
        rec.title.toLowerCase().includes(lowerCaseQuery) ||
        rec.description.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredRecommendations(results);
    } else {
      setFilteredRecommendations([]); // No query, no results
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-[#f8f5f2] text-[#2d3142] p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href="/pillars"> {/* Link back to pillars page */}
              <ChevronLeft className="h-6 w-6" />
            </Link>
          </Button>
          <h1 className="text-3xl font-light truncate">
            Search Results {query ? `for "${query}"` : ""}
          </h1>
        </div>

        {filteredRecommendations.length > 0 ? (
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-[#e8ddd3]/50">
              <TabsTrigger value="all">All ({filteredRecommendations.length})</TabsTrigger>
              <TabsTrigger value="products">
                Products ({filteredRecommendations.filter(r => r.type === 'product').length})
              </TabsTrigger>
              <TabsTrigger value="services">
                 Services ({filteredRecommendations.filter(r => r.type === 'service').length})
              </TabsTrigger>
              <TabsTrigger value="experiences">
                 Experiences ({filteredRecommendations.filter(r => r.type === 'experience').length})
               </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="space-y-6">
                {filteredRecommendations.map((rec, index) => (
                  <RecommendationCard key={`all-${index}`} recommendation={rec} />
                ))}
              </div>
            </TabsContent>
            {/* Add similar TabsContent for products, services, experiences, filtering filteredRecommendations */}
            <TabsContent value="products" className="mt-6">
              <div className="space-y-6">
                {filteredRecommendations
                  .filter((rec) => rec.type === "product")
                  .map((rec, index) => (
                    <RecommendationCard key={`product-${index}`} recommendation={rec} />
                  ))}
              </div>
            </TabsContent>
             <TabsContent value="services" className="mt-6">
              <div className="space-y-6">
                {filteredRecommendations
                  .filter((rec) => rec.type === "service")
                  .map((rec, index) => (
                    <RecommendationCard key={`service-${index}`} recommendation={rec} />
                  ))}
              </div>
            </TabsContent>
             <TabsContent value="experiences" className="mt-6">
              <div className="space-y-6">
                {filteredRecommendations
                  .filter((rec) => rec.type === "experience")
                  .map((rec, index) => (
                    <RecommendationCard key={`experience-${index}`} recommendation={rec} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          <p className="text-center text-lg text-[#2d3142]/80 mt-12">
            No recommendations found matching "{query}". Try a different search term.
          </p>
        )}

        <div className="text-center mt-12">
          <Button asChild className="bg-[#2d3142] hover:bg-[#2d3142]/90 text-white rounded-full px-8 py-6">
            <Link href="/pillars">Back to Pillars</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

// Export the component wrapped in Suspense
export default function SearchResultsPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading search results...</div>}>
      <SearchResultsContent />
    </Suspense>
  )
} 