"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { useTilt } from "@/components/ui/Shared/useTilt"
import type { FeaturedProject } from "./featuredProjects"
import { ProjectModal } from "./ProjectModal"

interface FeaturedProjectCardProps {
  project: FeaturedProject
}

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const tilt = useTilt()
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.article
        {...tilt}
        className="flex h-full flex-col rounded-2xl border border-blue-200/70 bg-gradient-to-br from-blue-50/80 to-zinc-50 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-300/60 dark:border-blue-900/60 dark:from-blue-950/40 dark:to-zinc-900 dark:hover:border-blue-800 dark:hover:shadow-xl dark:hover:shadow-blue-500/25"
      >
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">{project.tagline}</p>
            <h3 className="text-base font-semibold leading-snug text-zinc-900 dark:text-zinc-100">{project.name}</h3>
          </div>
          <span className="shrink-0 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white dark:bg-blue-500">
            Destaque
          </span>
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

        <div className="mt-4 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
          >
            Sobre o projeto
          </button>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-50 transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Acessar →
          </a>
        </div>
      </motion.article>

      <ProjectModal project={project} open={open} onClose={() => setOpen(false)} />
    </>
  )
}
