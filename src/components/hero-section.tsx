import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const accessInternalArea = () => {
    window.location.href = "https://juristack.tiflatcorporation.com/login"
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 animate-fade-in-up">
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-foreground">Tecnologia Jurídica de Nova Geração</span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Transforme sua prática jurídica com <span className="text-secondary">Inteligência Artificial</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Automatize processos, analise documentos em segundos e gerencie seu escritório com a solução mais avançada
            do mercado jurídico.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8 h-12 group cursor-pointer"
              onClick={() => accessInternalArea()}
            >
              Começar Gratuitamente
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Social Proof */}
          <p className="text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Automação jurídica para quem valoriza tempo e precisão.
          </p>
        </div>
      </div>
    </section>
  )
}

