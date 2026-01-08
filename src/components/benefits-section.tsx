import { Card } from "@/components/ui/card"
import { TrendingUp, Award, Clock, Users } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    metric: "40%",
    label: "Aumento de Produtividade",
    description: "Redução significativa do tempo gasto com tarefas administrativas",
  },
  {
    icon: Award,
    metric: "100%",
    label: "Segurança dos Dados",
    description: "Proteção das informações jurídicas com criptografia e controle de acesso",
  },
  {
    icon: Clock,
    metric: "10h",
    label: "Economizadas por Semana",
    description: "Tempo médio economizado com automação e assistente de IA",
  },
  {
    icon: Users,
    metric: "Diária",
    label: "Atualização Automática",
    description: "Monitoramento diário dos processos direto das fontes oficiais",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Resultados que falam por si</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Dados reais de escritórios que transformaram sua prática com JurisTech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/10 mb-4">
                <benefit.icon className="h-7 w-7 text-secondary" />
              </div>
              <div className="text-4xl font-bold text-secondary mb-2">{benefit.metric}</div>
              <div className="text-lg font-semibold mb-2 text-card-foreground">{benefit.label}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

