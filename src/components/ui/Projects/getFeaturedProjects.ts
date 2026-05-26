import type { Project } from "./types"

type GitHubPinnedRepo = {
  id: string
  name: string
  description: string | null
  url: string
  homepageUrl: string | null
  primaryLanguage: {
    name: string
  } | null
  repositoryTopics: {
    nodes: Array<{
      topic: {
        name: string
      }
    }>
  }
}

type GitHubGraphQLResponse = {
  data?: {
    user?: {
      pinnedItems?: {
        nodes?: GitHubPinnedRepo[]
      }
    }
  }
  errors?: Array<{
    message: string
  }>
}

const DEFAULT_GITHUB_USERNAME = "Pedrohses"
const PROJECT_LIMIT = 6

function mapPinnedRepoToProject(repo: GitHubPinnedRepo): Project {
  const topics = repo.repositoryTopics.nodes.map((node) => node.topic.name).slice(0, 3)
  const stack = [repo.primaryLanguage?.name, ...topics].filter(Boolean) as string[]

  return {
    id: `github-pinned-${repo.id}`,
    name: repo.name,
    description: repo.description ?? "Repositorio fixado em destaque no perfil do GitHub.",
    stack: stack.length > 0 ? stack : ["Open Source"],
    repoUrl: repo.url,
    demoUrl: repo.homepageUrl ?? undefined,
    source: "github-pinned",
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const username = process.env.GITHUB_USERNAME ?? DEFAULT_GITHUB_USERNAME
  const token = process.env.GITHUB_TOKEN

  if (!token) {
    return []
  }

  const query = `
    query UserPinnedRepositories($login: String!, $first: Int!) {
      user(login: $login) {
        pinnedItems(first: $first, types: REPOSITORY) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              homepageUrl
              primaryLanguage {
                name
              }
              repositoryTopics(first: 3) {
                nodes {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `

  try {
    const response = await fetch(
      "https://api.github.com/graphql",
      {
        method: "POST",
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables: {
            login: username,
            first: PROJECT_LIMIT,
          },
        }),
        next: {
          revalidate: 300,
        },
      }
    )

    if (!response.ok) {
      return []
    }

    const result = (await response.json()) as GitHubGraphQLResponse

    if (result.errors && result.errors.length > 0) {
      return []
    }

    const pinnedRepos = result.data?.user?.pinnedItems?.nodes

    if (!Array.isArray(pinnedRepos) || pinnedRepos.length === 0) {
      return []
    }

    return pinnedRepos.map(mapPinnedRepoToProject)
  } catch {
    return []
  }
}
