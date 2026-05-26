'use client'

import { motion, type Variants } from "motion/react"

interface HeroHeadingProps {
  itemVariants: Variants
}

export function HeroHeading({ itemVariants }: HeroHeadingProps) {
  return (
    <motion.div variants={itemVariants} className="space-y-2 sm:space-y-3">
      <h1 className="bg-gradient-to-r from-zinc-900 to-blue-800 bg-clip-text text-4xl font-extrabold tracking-tighter text-transparent sm:text-6xl md:text-7xl dark:from-white dark:to-blue-300">
        Pedro Silva
      </h1>
      <p className="text-lg font-semibold tracking-tight text-blue-600 sm:text-2xl md:text-3xl dark:text-blue-500">
        Desenvolvedor Full Stack
      </p>
    </motion.div>
  )
}
