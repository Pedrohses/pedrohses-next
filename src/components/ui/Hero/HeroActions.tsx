'use client'

import { motion, type Variants } from "motion/react"
import { Button } from "@/components/ui/Navbar/Button"

interface HeroActionsProps {
  itemVariants: Variants
}

export function HeroActions({ itemVariants }: HeroActionsProps) {
  return (
    <motion.div variants={itemVariants} className="mt-6 flex flex-col items-center gap-4 sm:mt-8 sm:flex-row sm:gap-x-6">
      <Button href="#projects" variant="default" className="w-full sm:w-auto">
        Ver meus projetos
      </Button>
      <a
        href="#about"
        className="text-sm font-semibold leading-6 text-zinc-900 transition-colors hover:text-blue-600 dark:text-zinc-300"
      >
        Sobre mim <span aria-hidden="true">-&gt;</span>
      </a>
    </motion.div>
  )
}
 