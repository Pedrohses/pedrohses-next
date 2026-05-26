'use client'

import { motion } from "motion/react"

export function TimelineLine() {
  return (
    <motion.div
      className="absolute left-2 top-0 h-full w-px bg-zinc-300 sm:left-3 dark:bg-zinc-700"
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ transformOrigin: "top" }}
      aria-hidden="true"
    />
  )
}
