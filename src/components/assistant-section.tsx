import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, CheckCircle2, Sparkles } from "lucide-react"

const capabilities = [
  "Análise de contratos em minutos",
  "Identificação de cláusulas abusivas",
  "Sugestões de melhorias automáticas",
  "Geração de documentos personalizados",
  "Pesquisa jurisprudencial instantânea",
  "Resumos executivos de processos",
]

export function AssistantSection() {
  return (
    <section id="assistente" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium">Powered by Advanced AI</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              Conheça o <span className="text-secondary">JurisTech Assist</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nosso assistente de IA revolucionário que trabalha 24/7 para otimizar cada aspecto da sua prática
              jurídica. Treinado com milhões de documentos jurídicos para entregar resultados precisos e confiáveis.
            </p>

            <ul className="space-y-3">
              {capabilities.map((capability, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{capability}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Testar o Assistente
            </Button>
          </div>

          {/* Visual */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/20">
                  <Bot className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">JurisTech Assist</h3>
                  <p className="text-sm text-muted-foreground">Seu assistente jurídico IA</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground mb-2">Você perguntou:</p>
                  <p className="text-foreground">"Analise este contrato e identifique possíveis riscos"</p>
                </div>

                <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20">
                  <p className="text-sm text-secondary mb-2">JurisTech Assist respondeu:</p>
                  <p className="text-foreground text-sm leading-relaxed">
                    Análise concluída. Identifiquei 3 cláusulas que requerem atenção, incluindo uma cláusula de rescisão
                    unilateral na seção 4.2 que pode expor seu cliente a riscos...
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card" />
                  <div className="w-8 h-8 rounded-full bg-secondary/20 border-2 border-card" />
                  <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-card" />
                </div>
                <span>+2.500 advogados confiam no JurisTech Assist</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

