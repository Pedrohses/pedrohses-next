'use client'

import { motion, type Variants } from "motion/react"

interface HeroStatusBadgeProps {
  itemVariants: Variants
}

export function HeroStatusBadge({ itemVariants }: HeroStatusBadgeProps) {
  return (
    <motion.div variants={itemVariants}>
      <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700 dark:border-green-800/50 dark:bg-green-950/40 dark:text-green-400">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        Disponível para novas oportunidades
      </span>
    </motion.div>
  )
}
