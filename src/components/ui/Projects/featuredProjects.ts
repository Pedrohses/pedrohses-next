export type FeaturedProject = {
  id: string
  name: string
  tagline: string
  description: string
  demoUrl: string
  stack: string[]
  /** Parágrafos exibidos no modal "Sobre o projeto". */
  about: string[]
  /** Avisos em destaque (acesso restrito, funcionalidades sob solicitação etc.). */
  notices: Array<{ title: string; text: string }>
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "financeia",
    name: "FinanceIA",
    tagline: "Projeto de TCC",
    description:
      "Plataforma de controle de finanças pessoais com funcionalidades assistidas por IA para organizar gastos, categorizar transações e gerar insights.",
    demoUrl: "https://financeia-frontend.vercel.app/",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Llama (IA)", "Docker"],
    about: [
      "O FinanceIA é o meu projeto de conclusão de curso: uma aplicação completa para controle de finanças pessoais, pensada para ir além de planilhas e oferecer ajuda inteligente na organização do dinheiro.",
      "O frontend é feito em Next.js e o backend em NestJS, com banco de dados PostgreSQL. As funcionalidades de IA usam o modelo Llama para interpretar transações, sugerir categorias e produzir análises sobre os hábitos financeiros do usuário.",
    ],
    notices: [
      {
        title: "Funcionalidades de IA sob solicitação",
        text: "Para controlar custos, o uso das funcionalidades de IA é liberado por usuário através do backoffice. Se quiser testar essa parte, entre em contato comigo que eu libero o acesso.",
      },
      {
        title: "Login com Google restrito",
        text: "O login com Google está disponível apenas para usuários selecionados. Caso queira acessar por essa via, entre em contato.",
      },
    ],
  },
]
