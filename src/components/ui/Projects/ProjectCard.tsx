"use client"

import { motion } from "motion/react"
import { useTilt } from "@/components/ui/Shared/useTilt"
import type { Project } from "./types"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const tilt = useTilt()

  return (
    <motion.article
      {...tilt}
      className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200/60 hover:shadow-xl hover:shadow-blue-300/60 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-800/50 dark:hover:shadow-xl dark:hover:shadow-blue-500/25">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold leading-snug text-zinc-900 dark:text-zinc-100">{project.name}</h3>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="group/gh shrink-0 text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
          aria-label={`Abrir ${project.name} no GitHub`}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-300 group-hover/gh:rotate-12" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
      </div>

      <p className="flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>

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

      <div className="mt-4 flex items-center justify-between">
        {project.stars !== undefined && project.stars > 0 ? (
          <span className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-amber-400 text-amber-400" stroke="currentColor" strokeWidth="1.8">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {project.stars}
          </span>
        ) : (
          <span />
        )}

        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Ver demo →
          </a>
        ) : null}
      </div>
    </motion.article>
  )
}
