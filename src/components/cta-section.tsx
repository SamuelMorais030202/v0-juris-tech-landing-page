import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance">
            Pronto para transformar sua prática jurídica?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
            Junte-se a milhares de advogados que já estão usando JurisTech para trabalhar de forma mais inteligente e
            eficiente.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8 h-12 group"
            >
              Começar Teste Gratuito de 14 Dias
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 h-12 bg-transparent">
              Agendar Demonstração
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Sem cartão de crédito • Cancelamento a qualquer momento • Suporte em português
          </p>
        </div>
      </div>
    </section>
  )
}

