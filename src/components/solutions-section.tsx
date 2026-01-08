import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const solutions = [
  {
    title: "Atualização automática de processos",
    description:
      "Seus processos são monitorados diariamente e atualizados automaticamente, sem consultas manuais.",
  },
  {
    title: "Assistente jurídico com IA",
    description:
      "Analise processos, tire dúvidas jurídicas e obtenha respostas rápidas com um assistente treinado para o direito.",
  },
  {
    title: "Revisão inteligente de documentos",
    description:
      "Utilize IA para revisar contratos, petições e documentos, identificando riscos, inconsistências e pontos de atenção.",
  },
  {
    title: "Gestão completa da rotina jurídica",
    description:
      "Centralize processos, informações, anotações e responsáveis em um único sistema.",
  },
  {
    title: "Mais produtividade, menos tarefas operacionais",
    description:
      "Automatize atividades repetitivas e ganhe tempo para atuar de forma estratégica.",
  },
  {
    title: "Segurança jurídica e proteção de dados",
    description:
      "Informações protegidas com controle de acesso e padrões de segurança compatíveis com a LGPD.",
  },
]


export function SolutionsSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Tudo o que seu escritório precisa, em um só lugar
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            O JurisTech combina automação, inteligência artificial e gestão jurídica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {solutions.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
