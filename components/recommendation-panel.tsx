"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Clock, ExternalLink, Users, Calendar, DollarSign, AlertTriangle } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { Recommendation } from "@/lib/questions-data"

interface RecommendationPanelProps {
  recommendations: Recommendation[]
  questionCategory: string
  questionId: number
  subQuestionValue?: number
  selectedRecommendationId?: string
  onSelectRecommendation: (questionId: number, recommendationId: string) => void
}

export function RecommendationPanel({
  recommendations,
  questionCategory,
  questionId,
  subQuestionValue = 0,
  selectedRecommendationId,
  onSelectRecommendation,
}: RecommendationPanelProps) {
  // Safety check for empty recommendations
  if (!recommendations || recommendations.length === 0) {
    return (
      <div className="mt-6 space-y-4">
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
          <h3 className="font-medium text-amber-800">Enterprise Recommendations</h3>
          <p className="text-amber-700 text-sm mt-1">
            Based on your answer, here are enterprise-level solutions to help your organization become compliant:
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <p className="text-blue-800">No specific recommendations available for this selection.</p>
        </div>
      </div>
    )
  }

  // Get the first recommendation for timeline details
  const primaryRecommendation = recommendations.find((r) => r.id === selectedRecommendationId) || recommendations[0]

  // Calculate estimates based on sub-question value
  const calculateEstimates = (recommendation: Recommendation) => {
    if (!recommendation) {
      return {
        effort: "0",
        timeline: "Not specified",
        cost: "₹0"
      }
    }

    // Handle undefined subQuestionValue properly
    const value = typeof subQuestionValue === 'number' ? subQuestionValue : 0

    const effort =
      recommendation.calculateEffort && value > 0
        ? recommendation.calculateEffort(value)
        : recommendation.effortHours

    const timeline =
      recommendation.calculateTimeline && value > 0
        ? recommendation.calculateTimeline(value)
        : recommendation.recommendedTimeline

    const cost =
      recommendation.calculateCost && value > 0
        ? recommendation.calculateCost(value)
        : recommendation.estimatedCostRange

    return { effort, timeline, cost }
  }

  const primaryEstimates = calculateEstimates(primaryRecommendation)

  const handleRecommendationSelect = (recommendationId: string) => {
    onSelectRecommendation(questionId, recommendationId)
  }

  return (
    <div className="mt-6 space-y-4">
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
        <h3 className="font-medium text-amber-800">Enterprise Recommendations</h3>
        <p className="text-amber-700 text-sm mt-1">
          Based on your answer, here are enterprise-level solutions to help your organization become compliant:
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
        <h4 className="font-medium text-blue-800 mb-3">Select Your Preferred Solution</h4>
        <RadioGroup value={selectedRecommendationId} onValueChange={handleRecommendationSelect} className="space-y-3">
          {recommendations.map((rec) => {
            const estimates = calculateEstimates(rec)
            return (
              <div
                key={rec.id}
                className={`flex items-start space-x-2 p-3 rounded-md border ${
                  selectedRecommendationId === rec.id ? "bg-blue-100 border-blue-300" : "bg-white border-slate-200"
                }`}
              >
                <RadioGroupItem value={rec.id} id={rec.id} className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor={rec.id} className="font-medium text-slate-800 cursor-pointer">
                    {rec.name} ({rec.tier === "standard" ? "Standard" : "Premium"})
                  </Label>
                  <p className="text-sm text-slate-600 mt-1">{rec.shortDescription}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                    <div className="flex items-center gap-1 text-sm text-slate-700">
                      <Clock className="h-4 w-4 text-blue-500" />
                      <span>{estimates.effort} hours</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-700">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <span>{estimates.timeline}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-700">
                      <DollarSign className="h-4 w-4 text-blue-500" />
                      <span>{estimates.cost}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </RadioGroup>
      </div>

      {selectedRecommendationId && (
        <>
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="details">Solution Details</TabsTrigger>
              <TabsTrigger value="implementation">Implementation Plan</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4">
              <RecommendationCard recommendation={primaryRecommendation} subQuestionValue={subQuestionValue} />
            </TabsContent>

            <TabsContent value="implementation" className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                <h4 className="font-medium text-blue-800 flex items-center gap-2 mb-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  Implementation Timeline & Effort
                </h4>

                <div className="p-3 bg-white rounded-md border border-blue-100 mb-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-slate-800 font-medium">Fix Timeline</p>
                      <p className="text-slate-600 text-sm">
                        {`${questionCategory} – ${primaryEstimates.effort} hours setup time, complete ${primaryEstimates.timeline}.`}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-blue-800 font-medium text-sm">Required Resources</p>
                      <p className="text-blue-700 text-sm">{primaryRecommendation.requiredResources}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-blue-800 font-medium text-sm">Effort Required</p>
                      <p className="text-blue-700 text-sm">{primaryEstimates.effort} hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-blue-800 font-medium text-sm">Priority Level</p>
                      <p className="text-blue-700 text-sm">{primaryRecommendation.priority}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <DollarSign className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-blue-800 font-medium text-sm">Estimated Cost</p>
                      <p className="text-blue-700 text-sm">{primaryEstimates.cost}</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => window.open(primaryRecommendation.pricingPage, "_blank")}
            >
              <DollarSign className="h-4 w-4" />
              View Pricing Details
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

function RecommendationCard({
  recommendation,
  subQuestionValue = 0,
}: { recommendation: Recommendation; subQuestionValue?: number }) {
  const [isOpen, setIsOpen] = useState(false)

  // Calculate estimates based on sub-question value
  const estimates = {
    effort:
      recommendation.calculateEffort && subQuestionValue > 0
        ? recommendation.calculateEffort(subQuestionValue)
        : recommendation.effortHours,

    timeline:
      recommendation.calculateTimeline && subQuestionValue > 0
        ? recommendation.calculateTimeline(subQuestionValue)
        : recommendation.recommendedTimeline,

    cost:
      recommendation.calculateCost && subQuestionValue > 0
        ? recommendation.calculateCost(subQuestionValue)
        : recommendation.estimatedCostRange,
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border rounded-md shadow-sm">
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-2 rounded-full">
              {recommendation.icon && <recommendation.icon className="h-5 w-5 text-blue-600" />}
            </div>
            <div>
              <h4 className="font-medium text-slate-800">{recommendation.name}</h4>
              <p className="text-sm text-slate-500">{recommendation.shortDescription}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden md:block">
              <p className="text-sm font-medium text-slate-700">{estimates.cost}</p>
              <p className="text-xs text-slate-500">{recommendation.pricingModel}</p>
            </div>
            <ChevronDown
              className={`h-5 w-5 text-slate-500 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
            />
          </div>
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div className="px-4 pb-4 space-y-4 border-t pt-4">
          <p className="text-slate-600">{recommendation.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-medium text-slate-700 mb-1">Key Benefits</h5>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                {recommendation.pros.map((pro, index) => (
                  <li key={index}>{pro}</li>
                ))}
              </ul>
            </div>

            {recommendation.cons.length > 0 && (
              <div>
                <h5 className="font-medium text-slate-700 mb-1">Considerations</h5>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  {recommendation.cons.map((con, index) => (
                    <li key={index}>{con}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm bg-slate-50 p-3 rounded-md border">
            <div>
              <h5 className="font-medium text-slate-700 mb-1">Effort Required</h5>
              <div className="flex items-center gap-1 text-slate-600">
                <Clock className="h-4 w-4" />
                <span>{estimates.effort} hours</span>
              </div>
            </div>

            <div>
              <h5 className="font-medium text-slate-700 mb-1">Timeline</h5>
              <div className="flex items-center gap-1 text-slate-600">
                <Calendar className="h-4 w-4" />
                <span>{estimates.timeline}</span>
              </div>
            </div>

            <div>
              <h5 className="font-medium text-slate-700 mb-1">Estimated Cost</h5>
              <div className="flex items-center gap-1 text-slate-600">
                <DollarSign className="h-4 w-4" />
                <span>{estimates.cost}</span>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <h5 className="font-medium text-slate-700 mb-1">Pricing</h5>
            <div className="flex items-center gap-1 text-slate-600">
              <DollarSign className="h-4 w-4" />
              <span>
                {estimates.cost} ({recommendation.pricingModel})
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              className="flex-1"
              variant="outline"
              onClick={() => window.open(recommendation.officialWebsite, "_blank")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Website
            </Button>
            <Button className="flex-1" onClick={() => window.open(recommendation.pricingPage, "_blank")}>
              <DollarSign className="mr-2 h-4 w-4" />
              See Pricing
            </Button>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

