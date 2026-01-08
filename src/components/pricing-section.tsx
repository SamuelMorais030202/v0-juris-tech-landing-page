import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Teste Gratuito",
    price: "Grátis",
    period: "",
    description: "Explore o JurisTech sem compromisso",
    features: [
      "Atualização automática de processos",
      "Assistente jurídico com IA",
      "Revisão de documentos",
      "Sem cartão de crédito",
    ],
    cta: "Iniciar Teste Gratuito",
    popular: true,
  },
]


export function PricingSection() {
  const accessInternalArea = () => {
    window.location.href = "https://juristack.tiflatcorporation.com/login"
  }

  return (
    <section
      id="precos"
      className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Preços justos. Sem surpresas.
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Comece com um teste gratuito e escolha um plano que faça sentido
            para a sua realidade. Sempre com o melhor custo-benefício do mercado.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative transition-all duration-300
                bg-background/60 backdrop-blur-xl border border-border/50
                hover:shadow-xl hover:-translate-y-1
                ${plan.popular ? "ring-2 ring-secondary shadow-lg scale-105" : ""}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Recomendado
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="text-4xl font-bold">{plan.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 cursor-pointer"
                onClick={() => accessInternalArea()}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Nota de confiança */}
        <p className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto">
          Nossos preços são definidos com base na realidade do mercado jurídico,
          sempre priorizando o melhor custo-benefício e transparência total.
        </p>
      </div>
    </section>
  )
}


