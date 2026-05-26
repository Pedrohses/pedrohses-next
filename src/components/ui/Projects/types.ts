export type Project = {
  id: string
  name: string
  description: string
  stack: string[]
  repoUrl: string
  demoUrl?: string
  stars?: number
  source: "github-pinned"
}
