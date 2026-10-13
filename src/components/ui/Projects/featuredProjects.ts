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
  /** Repositórios públicos do projeto, exibidos no modal. */
  repos?: Array<{ label: string; url: string }>
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
  {
    id: "arvores-bst-avl",
    name: "Árvores BST e AVL em C",
    tagline: "Paradigmas de Linguagens de Programação",
    description:
      "Visualizador interativo de Árvores Binárias de Busca e AVL implementadas em C com alocação dinâmica, animando cada operação passo a passo.",
    demoUrl: "https://alocacao-dinamica-arvore-frontend.vercel.app/",
    stack: ["C", "JavaScript", "Vite", "SVG", "Docker"],
    about: [
      "Projeto da disciplina de Paradigmas de Linguagens de Programação: uma Árvore Binária de Busca e uma Árvore AVL implementadas em C com malloc/free, expostas por um servidor HTTP minimalista escrito também em C, sem bibliotecas externas.",
      "O frontend, feito com Vite, JavaScript puro e SVG, desenha a árvore ao vivo e anima cada operação: inserir, buscar, remover, percursos em profundidade e em largura, altura, mínimo, máximo e espelhamento. Na AVL, o fator de balanceamento aparece em cada nó e a árvore desbalanceada é mostrada antes da rotação.",
      "Cada operação tem um slide com explicação, complexidade e o código C real lido do próprio servidor, com as linhas de malloc e free destacadas.",
    ],
    notices: [
      {
        title: "Primeiro acesso pode demorar",
        text: "O servidor em C roda no plano gratuito do Render e dorme após alguns minutos sem uso. Se o indicador de conexão demorar a ficar verde, aguarde alguns segundos enquanto ele acorda.",
      },
      {
        title: "Árvore compartilhada",
        text: "As árvores ficam apenas na memória do servidor e são compartilhadas por todos os visitantes, então você pode encontrar valores inseridos por outra pessoa.",
      },
    ],
    repos: [
      { label: "Backend (C)", url: "https://github.com/Pedrohses/alocacao-dinamica-arvore-backend" },
      { label: "Frontend", url: "https://github.com/Pedrohses/alocacao-dinamica-arvore-frontend" },
    ],
  },
]
