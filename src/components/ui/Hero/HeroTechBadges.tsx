'use client'

import { motion, type Variants } from "motion/react"

const techs = ["Node.js", "TypeScript", "Python", "NestJS", "Next.js", "Docker"]

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24, staggerChildren: 0.06 },
  },
}

const badgeVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
}

export function HeroTechBadges() {
  return (
    <motion.div
      variants={containerVariants}
      className="flex flex-wrap items-center justify-center gap-2 lg:justify-start"
    >
      {techs.map((tech) => (
        <motion.span
          key={tech}
          variants={badgeVariants}
          className="inline-block rounded-full border border-zinc-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm backdrop-blur-sm dark:border-zinc-700/80 dark:bg-zinc-800/70 dark:text-zinc-300"
        >
          {tech}
        </motion.span>
      ))}
    </motion.div>
  )
}
