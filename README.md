# JurisTech Landing Page

Landing page moderna para JurisTech construída com React + Vite + TypeScript + Tailwind CSS.

## 🚀 Tecnologias

- **React 19** - Biblioteca UI
- **Vite** - Build tool e dev server
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização
- **Lucide React** - Ícones
- **Radix UI** - Componentes acessíveis

## 📦 Instalação

```bash
# Instalar dependências
pnpm install
# ou
npm install
# ou
yarn install
```

## 🛠️ Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm dev
# ou
npm run dev
# ou
yarn dev
```

Acesse: http://localhost:5173

## 🏗️ Build

```bash
# Build para produção
pnpm build
# ou
npm run build
# ou
yarn build
```

Os arquivos serão gerados na pasta `dist/`.

## 📁 Estrutura do Projeto

```
├── src/
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes UI base
│   │   └── ...           # Componentes da landing page
│   ├── lib/              # Utilitários
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Entry point
│   └── index.css         # Estilos globais
├── public/               # Assets estáticos
├── index.html            # HTML base
├── vite.config.ts        # Configuração Vite
├── tailwind.config.js    # Configuração Tailwind
└── package.json
```

## 🎨 Componentes

- **Navigation** - Navegação fixa com scroll effect
- **HeroSection** - Seção hero principal
- **FeaturesSection** - Recursos da plataforma
- **AssistantSection** - Assistente IA
- **BenefitsSection** - Benefícios e métricas
- **TestimonialsSection** - Depoimentos
- **PricingSection** - Planos e preços
- **CTASection** - Call to action
- **Footer** - Rodapé

## 📝 Notas

- O projeto usa Tailwind CSS v4 com sintaxe `@import`
- Todos os componentes são client-side (sem SSR)
- Imagens estão na pasta `public/`
- Path aliases configurados: `@/*` → `src/*`
