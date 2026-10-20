export type AboutHighlightIcon = "architecture" | "performance" | "collaboration"

export type AboutHighlight = {
  title: string
  description: string
  icon: AboutHighlightIcon
}

export const aboutHighlights: AboutHighlight[] = [
  {
    title: "Back-end e arquitetura",
    description:
      "APIs REST com NestJS, FastAPI e Express, autenticação (JWT com RSA, OAuth), Clean Architecture e modelagem de dados em PostgreSQL, MySQL e MongoDB.",
    icon: "architecture",
  },
  {
    title: "IA aplicada",
    description:
      "RAG com busca vetorial, servidores MCP (Model Context Protocol), Google Vertex AI e integração de LLMs em produtos reais.",
    icon: "performance",
  },
  {
    title: "Qualidade e entrega",
    description:
      "Testes unitários e de integração, code review, deploy com Docker em AWS e GCP, Scrum/Kanban e documentação técnica (DER, C4 Model).",
    icon: "collaboration",
  },
]
