export type Experience = {
  id: string
  company: string
  role: string
  period: string
  location: string
  summary: string
  /** Conquistas e entregas, exibidas como lista. */
  highlights: string[]
  /** Tecnologias usadas, exibidas como tags. */
  skills: string[]
}
