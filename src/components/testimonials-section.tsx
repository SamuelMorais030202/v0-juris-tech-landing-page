import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "O JurisTech revolucionou nosso escritório. A análise automática de contratos economiza horas do nosso time e os insights são impressionantes.",
    author: "Dra. Maria Silva",
    role: "Sócia - Silva & Associados",
    image: "/professional-woman-lawyer.png",
  },
  {
    quote:
      "A gestão financeira integrada e o acompanhamento de processos em tempo real tornaram nossa operação muito mais eficiente e transparente.",
    author: "Dr. Carlos Mendes",
    role: "Advogado Autônomo",
    image: "/professional-lawyer.png",
  },
  {
    quote:
      "O JurisTech Assist é como ter um assistente júnior trabalhando 24/7. A qualidade dos documentos gerados é excepcional.",
    author: "Dra. Ana Costa",
    role: "Diretora Jurídica - TechCorp",
    image: "/professional-woman-executive.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">O que nossos clientes dizem</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Depoimentos de advogados que transformaram sua prática jurídica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300">
              <Quote className="h-8 w-8 text-secondary mb-4" />
              <p className="text-card-foreground leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

