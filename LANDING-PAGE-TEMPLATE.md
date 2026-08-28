# Estrutura de Landing Page — Template Reutilizável

Baseado na landing page pessoal (Next.js 16 + React 19 + Tailwind CSS v4 + Motion). Use este documento como referência ao montar uma nova landing page com a mesma arquitetura.

## 1. Stack

- **Next.js 16** (App Router, `src/app`)
- **React 19**
- **Tailwind CSS v4** (`@tailwindcss/postcss`, sem `tailwind.config` — tudo via CSS/`globals.css`)
- **motion** (`motion/react`, sucessor do `framer-motion`) para animações
- **clsx** + **tailwind-merge** → helper `cn()` em `src/lib/utils.ts`
- **@vercel/analytics** e **@vercel/speed-insights** (opcional, se hospedar na Vercel)
- Tema claro/escuro via classe `dark` no `<html>`, persistido em cookie + localStorage

```
src/lib/utils.ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## 2. Estrutura de pastas

```
src/
  app/
    layout.tsx          # metadata, fontes, JSON-LD, tema (cookie), Analytics
    page.tsx             # compõe as seções na ordem
    globals.css          # tokens Tailwind, dot-grid, etc.
    opengraph-image.tsx  # OG image dinâmica (opcional)
  components/
    sections/             # 1 componente por seção da página (orquestra layout + dados)
      Navbar.tsx
      Hero.tsx
      About.tsx
      Projects.tsx
      Timeline.tsx
      Contact.tsx
      Footer.tsx
    ui/                    # componentes de apresentação, organizados por seção
      Hero/
        HeroHeading.tsx
        HeroDescription.tsx
        HeroAvatar.tsx
        HeroActions.tsx
        HeroTechBadges.tsx
        HeroParticles.tsx
        useAvatarParallax.ts
      About/
        AboutTerminal.tsx
        aboutData.ts
      Projects/
        ProjectCard.tsx
        ProjectsEmptyState.tsx
        getFeaturedProjects.ts
        types.ts
      Timeline/
        TimelineItem.tsx
        TimelineLine.tsx
        timelineData.ts
        types.ts
      Contact/
        ContactCard.tsx
        contactData.ts
      Navbar/
        NavLink.tsx
      Shared/               # componentes/hook genéricos reaproveitados entre seções
        Button.tsx
        SectionHeader.tsx
        ScrollReveal.tsx
        ScrollProgress.tsx
        BackgroundGlow.tsx
        InfoNote.tsx
        useTilt.ts
  lib/
    utils.ts               # cn()
```

**Regra de organização:** cada seção (`sections/*`) é "burra" — busca/recebe dados e monta o layout com `SectionHeader` + `ScrollReveal` + componentes de `ui/<Secao>`. A lógica de apresentação (cards, badges, animações específicas) fica isolada em `ui/<Secao>/`. Dados estáticos (texto, listas) ficam em arquivos `*Data.ts` separados dos componentes, facilitando reuso em outro projeto — basta trocar o conteúdo desses arquivos.

## 3. Composição da página (`page.tsx`)

```tsx
<div className="relative isolate bg-linear-to-b from-blue-50/70 via-sky-50/60 to-zinc-50/75 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-900">
  <BackgroundGlow />
  <ScrollProgress />
  <div className="relative z-10">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Timeline />
    <Contact />
    <Footer />
  </div>
</div>
```

Ordem padrão de seções (ajustar conforme o cliente): **Navbar → Hero → About → Projects/Serviços → Timeline/Experiência → Contact → Footer**.

Cada `<section>` tem `id` correspondente ao link da navbar (`#hero`, `#about`, `#projects`, `#works`, `#contact`) e alterna fundo entre `bg-white/55 dark:bg-black/70` e `bg-zinc-50/48 dark:bg-zinc-950/72` para criar contraste sutil entre seções, todas com `backdrop-blur-[1px]`.

## 4. `layout.tsx` — o que configurar por projeto

- `title` / `description` em `metadata` (SEO + Open Graph + Twitter card)
- `metadataBase` com a URL de produção
- JSON-LD `Person` (ou `Organization`) com `name`, `jobTitle`, `url`, `email`, `sameAs` (redes sociais)
- Tema inicial lido do cookie no servidor (evita flash) e aplicado como classe `dark` no `<html>`
- Fontes via `next/font/google` (ex.: Geist Sans/Mono) com CSS vars

## 5. Componentes compartilhados (`Shared/`) — reutilizar tal como estão

- **`SectionHeader`**: label pequeno + linha decorativa, `<h2>` e descrição opcional. Único ponto de padronização de títulos de seção.
- **`ScrollReveal`**: wrapper `motion.div`/`motion.li` com fade+slide `whileInView`, respeita `prefers-reduced-motion`. Usado para animar entrada de cada seção/card, com `delay` escalonado por índice (`index * 0.08`).
- **`ScrollProgress`**: barra fixa no topo (`scaleX` ligado a `scrollYProgress`).
- **`BackgroundGlow`**: blobs radiais animados fixos atrás de tudo, com variante estática para light/dark e `useReducedMotion` desligando animação.
- **`Button`**: `Link` + `motion.span`, variantes `default` (sólido) e `outline`, com `whileHover`/`whileTap` spring.
- **`InfoNote`**: caixa de aviso/nota de contexto (usada no Contact).
- **`useTilt`**: hook de tilt 3D em hover (usado em cards, se aplicável).

## 6. Navbar — padrão

- Fixa (`fixed inset-x-0 top-0 z-50`), fundo translúcido + `backdrop-blur`
- Links de âncora com highlight de seção ativa via scroll listener (`IntersectionObserver` ou cálculo de `getBoundingClientRect` como no exemplo)
- Menu mobile colapsável com `max-h` animado
- Toggle de tema claro/escuro com ícone sol/lua animado (`AnimatePresence mode="wait"`), persistido em cookie (`theme=`) + `localStorage`

## 7. Convenções de estilo

- Paleta neutra `zinc` para texto/bordas + azul (`blue-600`/`blue-400`) como cor de destaque (label, links ativos, glow)
- Dark mode via classe `dark:` do Tailwind em todo componente, nunca `prefers-color-scheme` isolado
- `rounded-full` em botões/badges, `rounded-2xl`/`rounded-3xl` em cards
- Container padrão: `mx-auto w-full max-w-5xl` ou `max-w-6xl` conforme densidade da seção
- Espaçamento de seção: `px-4 py-20 sm:px-6 md:py-28`
- Animações spring padrão: `{ type: "spring", stiffness: 300, damping: 24 }` (entradas) e `{ stiffness: 400, damping: 17 }` (hover/tap)

## 8. Checklist para clonar em um novo projeto

1. Copiar `src/lib/utils.ts`, `Shared/*`, `Navbar/*` sem alterações.
2. Recriar `layout.tsx` trocando metadata, JSON-LD e fontes.
3. Definir as seções necessárias para o cliente (nem toda página precisa de Timeline, por ex.) e ajustar `links` da Navbar e `id`s das `<section>`.
4. Para cada seção nova, seguir o padrão: `sections/<Nome>.tsx` (layout) + `ui/<Nome>/` (apresentação) + `ui/<Nome>/<nome>Data.ts` (conteúdo).
5. Trocar paleta de destaque (`blue`) se a identidade visual do cliente exigir outra cor — o `BackgroundGlow` e o `SectionHeader` concentram a maior parte das referências de cor.
6. Ajustar `opengraph-image.tsx` e favicon/branding.
