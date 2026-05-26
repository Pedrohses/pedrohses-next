import type { Project } from "./types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const sourceLabelMap: Record<Project["source"], string> = {
    "github-pinned": "GitHub Pinned",
  }

  const sourceLabel = sourceLabelMap[project.source]

  return (
    <article className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{project.name}</h3>
        <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/60 dark:text-blue-300">
          {sourceLabel}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={`${project.id}-${tech}`}
            className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 text-sm">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-zinc-900 transition-colors hover:text-blue-600 dark:text-zinc-100"
        >
          Ver codigo
        </a>
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-zinc-500 transition-colors hover:text-blue-600 dark:text-zinc-400"
          >
            Ver demo
          </a>
        ) : null}
      </div>
    </article>
  )
}
