'use client'

import { motion, type Variants } from "motion/react"

const techs = ["Node.js", "TypeScript", "Python", "NestJS", "Next.js", "Docker"]

interface HeroTechBadgesProps {
  itemVariants: Variants
}

export function HeroTechBadges({ itemVariants }: HeroTechBadgesProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-wrap items-center justify-center gap-2"
    >
      {techs.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-zinc-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm backdrop-blur-sm dark:border-zinc-700/80 dark:bg-zinc-800/70 dark:text-zinc-300"
        >
          {tech}
        </span>
      ))}
    </motion.div>
  )
}
