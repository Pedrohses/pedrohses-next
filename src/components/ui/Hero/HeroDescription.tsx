'use client'

import { motion, type Variants } from "motion/react"

interface HeroDescriptionProps {
  itemVariants: Variants
}

export function HeroDescription({ itemVariants }: HeroDescriptionProps) {
  return (
    <motion.p
      variants={itemVariants}
      className="max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg md:text-xl dark:text-zinc-400"
    >
      Especializado na construcao de APIs robustas, escalaveis e de alta performance. Ha 2 anos transformando regras de negocio complexas em sistemas eficientes utilizando{" "}
      <span className="font-medium text-zinc-900 dark:text-zinc-100">Node.js, Python e arquiteturas modernas.</span>
    </motion.p>
  )
}
