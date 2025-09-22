import { HeroSection } from "@/components/hero-section"
import { AwarenessSection } from "@/components/awareness-section"
import { DataInsightsSection } from "@/components/data-insights-section"
import { PredictionToolSection } from "@/components/prediction-tool-section"
import { ModelExplanationSection } from "@/components/model-explanation-section"
import { RecommendationsSection } from "@/components/recommendations-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AwarenessSection />
        <DataInsightsSection />
        <PredictionToolSection />
        <ModelExplanationSection />
        <RecommendationsSection />
      </main>
    </div>
  )
}
