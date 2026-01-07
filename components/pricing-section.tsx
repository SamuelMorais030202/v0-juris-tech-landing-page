import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "R$ 297",
    period: "/mês",
    description: "Perfeito para advogados autônomos",
    features: [
      "Até 50 processos ativos",
      "100 análises com IA por mês",
      "Gestão financeira básica",
      "CRM para clientes",
      "Suporte por email",
    ],
    cta: "Começar Agora",
    popular: false,
  },
  {
    name: "Professional",
    price: "R$ 597",
    period: "/mês",
    description: "Ideal para escritórios em crescimento",
    features: [
      "Processos ilimitados",
      "Análises ilimitadas com IA",
      "Gestão financeira completa",
      "CRM avançado + automações",
      "Relatórios personalizados",
      "Suporte prioritário",
      "Integrações avançadas",
    ],
    cta: "Começar Agora",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    period: "",
    description: "Para grandes escritórios e departamentos",
    features: [
      "Tudo do Professional",
      "Usuários ilimitados",
      "Treinamento dedicado",
      "Gerente de conta",
      "SLA garantido",
      "Customizações personalizadas",
      "API completa",
    ],
    cta: "Falar com Vendas",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="precos" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Planos para todos os tamanhos</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Escolha o plano ideal para sua prática jurídica. Sem taxas ocultas, cancele quando quiser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative hover:shadow-lg transition-all duration-300 ${
                plan.popular ? "border-secondary border-2 bg-card shadow-lg scale-105" : "bg-card border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
