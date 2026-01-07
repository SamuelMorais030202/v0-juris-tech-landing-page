import { Scale, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="h-7 w-7 text-secondary" />
              <span className="text-xl font-bold">JurisTech</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformando a prática jurídica com tecnologia de ponta e inteligência artificial.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Produto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#recursos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#assistente" className="text-muted-foreground hover:text-foreground transition-colors">
                  JurisTech Assist
                </a>
              </li>
              <li>
                <a href="#precos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Integrações
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>contato@juristech.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>(11) 3000-0000</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2026 JurisTech. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
