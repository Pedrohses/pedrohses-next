export type AboutHighlightIcon = "architecture" | "performance" | "collaboration"

export type AboutHighlight = {
  title: string
  description: string
  icon: AboutHighlightIcon
}

export const aboutHighlights: AboutHighlight[] = [
  {
    title: "Foco em arquitetura",
    description:
      "Experiência com APIs modulares, organização por camadas e código orientado a manutenção.",
    icon: "architecture",
  },
  {
    title: "Escalabilidade e performance",
    description:
      "Atuação em melhorias de latência, filas assíncronas e tratamento robusto de erros.",
    icon: "performance",
  },
  {
    title: "Colaboração",
    description:
      "Participação ativa com produto e design para transformar requisitos em entregas objetivas.",
    icon: "collaboration",
  },
]
