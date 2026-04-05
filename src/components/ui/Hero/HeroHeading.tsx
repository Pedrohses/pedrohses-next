'use client'

import { motion, type Variants } from "motion/react"

interface HeroHeadingProps {
  itemVariants: Variants
}

export function HeroHeading({ itemVariants }: HeroHeadingProps) {
  return (
    <motion.div variants={itemVariants} className="space-y-2 sm:space-y-3">
      <h1 className="text-4xl font-extrabold tracking-tighter text-zinc-900 sm:text-6xl md:text-7xl dark:text-zinc-50">
        Pedro Silva
      </h1>
      <p className="text-lg font-semibold tracking-tight text-blue-600 sm:text-2xl md:text-3xl dark:text-blue-500">
        Desenvolvedor Full Stack
      </p>
    </motion.div>
  )
}
