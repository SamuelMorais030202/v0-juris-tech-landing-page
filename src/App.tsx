import { Navigation } from './components/navigation'
import { HeroSection } from './components/hero-section'
import { FeaturesSection } from './components/features-section'
import { AssistantSection } from './components/assistant-section'
import { BenefitsSection } from './components/benefits-section'
import { TestimonialsSection } from './components/testimonials-section'
import { PricingSection } from './components/pricing-section'
import { CTASection } from './components/cta-section'
import { Footer } from './components/footer'

function App() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AssistantSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}

export default App

