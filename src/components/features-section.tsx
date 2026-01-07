import { Card } from "@/components/ui/card"
import { FileSearch, FileText, DollarSign, Users, BarChart3, Clock, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Acompanhamento em Tempo Real",
    description: "Monitore todos os seus processos com atualizações automáticas e notificações inteligentes.",
  },
  {
    icon: FileSearch,
    title: "Análise de Documentos",
    description: "O JurisTech Assist analisa contratos e documentos jurídicos em segundos com precisão de IA.",
  },
  {
    icon: FileText,
    title: "Criação Automatizada",
    description: "Gere documentos, contratos e petições personalizadas com nosso assistente inteligente.",
  },
  {
    icon: DollarSign,
    title: "Gestão Financeira",
    description: "Controle honorários, despesas e faturamento com ferramentas financeiras integradas.",
  },
  {
    icon: Users,
    title: "Fidelização de Clientes",
    description: "CRM jurídico completo para fortalecer relacionamentos e aumentar a satisfação.",
  },
  {
    icon: BarChart3,
    title: "Relatórios Inteligentes",
    description: "Dashboards e análises avançadas para decisões estratégicas baseadas em dados.",
  },
  {
    icon: Shield,
    title: "Segurança Jurídica",
    description: "Criptografia de ponta e conformidade total com LGPD para proteção de dados sensíveis.",
  },
  {
    icon: Zap,
    title: "Automação de Tarefas",
    description: "Automatize tarefas repetitivas e ganhe até 40% mais tempo para focar no que importa.",
  },
]

export function FeaturesSection() {
  return (
    <section id="recursos" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Tudo que seu escritório precisa em uma plataforma
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Recursos completos para modernizar e escalar sua prática jurídica com eficiência máxima.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10">
                  <feature.icon className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

