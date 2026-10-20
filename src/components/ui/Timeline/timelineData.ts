import type { Experience } from "./types"

export const experiences: Experience[] = [
  {
    id: "exp-besolution",
    company: "Besolution",
    role: "Desenvolvedor Full Stack",
    period: "Set 2025 - Atual",
    location: "Remoto",
    summary:
      "Desenvolvimento de APIs e integrações de IA para plataformas do SENAI em produção, como Carreira e Empregabilidade (carreira.senai.br) e Nai, a plataforma de IA do SENAI (nai.senai.br).",
    highlights: [
      "Criei o servidor MCP responsável pela comunicação do agente de IA da plataforma Carreira e implementei RAG com busca vetorial em aplicações do SENAI, com integrações ao Google Vertex AI.",
      "Construí todo o back-end de uma plataforma de cálculo de emissões de carbono baseada em datasets de fatores de emissão.",
      "Otimizei endpoints de sistemas legados e corrigi vulnerabilidades; escrevo testes unitários e de integração, participo de code reviews e faço deploy no GCP.",
    ],
    skills: ["NestJS", "TypeScript", "MCP", "RAG", "Vertex AI", "GCP"],
  },
  {
    id: "exp-freelancer",
    company: "Freelancer · SaaS B2B de gestão para reciclagem de metais",
    role: "Desenvolvedor Back-end",
    period: "2026",
    location: "Remoto",
    summary:
      "Desenvolvimento do módulo completo de assinaturas e cobrança recorrente de um SaaS B2B (cliente confidencial).",
    highlights: [
      "Desenvolvi o módulo de assinaturas e cobrança recorrente integrado ao Asaas, com emissão de NFS-e, régua de cobrança e fluxos validados em sandbox.",
      "Modelei o esquema de faturamento (10 tabelas) e implementei regras como cobrança por assento, uma forma de pagamento por organização e bloqueio de acesso na suspensão.",
      "Construí o módulo de gestão financeira dos usuários, com dashboards, e configurei a infraestrutura com Docker, AWS e Supabase.",
    ],
    skills: ["Python", "FastAPI", "Asaas", "Supabase", "Docker", "AWS"],
  },
  {
    id: "exp-omelete",
    company: "Omelete&Company",
    role: "Estagiário de Desenvolvimento Full Stack",
    period: "Abr 2024 - Set 2025",
    location: "Remoto",
    summary:
      "Desenvolvimento de funcionalidades e correção de bugs no e-commerce de ingressos Mundo Ticket e no site e CMS da CCXP.",
    highlights: [
      "Identifiquei e corrigi uma falha na lógica de pedidos que deixava de cobrar frete em compras só com produtos: a cobrança ocorria apenas quando havia credenciais no carrinho.",
    ],
    skills: ["Next.js", "React", "NestJS"],
  },
]
