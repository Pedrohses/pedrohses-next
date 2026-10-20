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
      Desenvolvedor full stack com ênfase em back-end. Há 2 anos e meio construindo APIs, integrações de IA (RAG e MCP) e sistemas de cobrança em produção com{" "}
      <span className="font-medium text-zinc-900 dark:text-zinc-100">Node.js, NestJS e Python.</span>
    </motion.p>
  )
}
