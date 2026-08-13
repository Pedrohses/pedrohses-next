'use client'

import { motion, type Variants } from "motion/react"
import { Button } from "@/components/ui/Shared/Button"

interface HeroActionsProps {
  itemVariants: Variants
}

export function HeroActions({ itemVariants }: HeroActionsProps) {
  return (
    <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-x-6">
      <Button href="#projects" variant="default" className="w-full sm:w-auto">
        Ver meus projetos
      </Button>
      <motion.a
        href="/Curriculo%20Pedro%20Silva.pdf"
        download="Curriculo Pedro Silva.pdf"
        className="inline-flex w-full items-center justify-center rounded-full border border-zinc-200 px-6 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 sm:w-auto dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Baixar currículo
      </motion.a>
      <motion.a
        href="#about"
        className="text-sm font-semibold leading-6 text-zinc-900 transition-colors hover:text-blue-600 dark:text-zinc-300"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Sobre mim <span aria-hidden="true">-&gt;</span>
      </motion.a>
    </motion.div>
  )
}
 