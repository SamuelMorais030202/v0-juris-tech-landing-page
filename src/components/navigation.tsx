import { Button } from "@/components/ui/button"
import { Scale } from "lucide-react"
import { useState, useEffect } from "react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <Scale className="h-7 w-7 md:h-8 md:w-8 text-secondary" />
            <span className="text-xl md:text-2xl font-bold text-foreground">JurisTech</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#recursos"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Recursos
            </a>
            <a
              href="#assistente"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Assistente
            </a>
            <a
              href="#beneficios"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefícios
            </a>
            <a
              href="#precos"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Preços
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Entrar
            </Button>
            <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Começar Agora
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

