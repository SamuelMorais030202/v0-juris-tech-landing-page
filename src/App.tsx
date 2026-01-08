import { Navigation } from './components/navigation'
import { HeroSection } from './components/hero-section'
import { FeaturesSection } from './components/features-section'
import { AssistantSection } from './components/assistant-section'
import { BenefitsSection } from './components/benefits-section'
import { PricingSection } from './components/pricing-section'
import { CTASection } from './components/cta-section'
import { Footer } from './components/footer'
import { SolutionsSection } from './components/solutions-section'

function App() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AssistantSection />
      <BenefitsSection />
      <SolutionsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}

export default App

