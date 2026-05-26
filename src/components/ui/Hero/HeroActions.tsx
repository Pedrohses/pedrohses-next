'use client'

import { motion, type Variants } from "motion/react"
import { Button } from "@/components/ui/Navbar/Button"

interface HeroActionsProps {
  itemVariants: Variants
}

export function HeroActions({ itemVariants }: HeroActionsProps) {
  return (
    <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 sm:flex-row sm:gap-x-6 lg:items-start">
      <Button href="#projects" variant="default" className="w-full sm:w-auto">
        Ver meus projetos
      </Button>
      <a
        href="/Curriculo%20Pedro%20Silva.pdf"
        download="Curriculo Pedro Silva.pdf"
        className="inline-flex w-full items-center justify-center rounded-full border border-zinc-200 px-6 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 sm:w-auto dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
      >
        Baixar currículo
      </a>
      <a
        href="#about"
        className="text-sm font-semibold leading-6 text-zinc-900 transition-colors hover:text-blue-600 dark:text-zinc-300"
      >
        Sobre mim <span aria-hidden="true">-&gt;</span>
      </a>
    </motion.div>
  )
}
 