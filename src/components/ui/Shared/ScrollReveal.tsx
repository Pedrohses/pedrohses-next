"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  amount?: number
  once?: boolean
  y?: number
  as?: "div" | "li"
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  amount = 0.2,
  once = true,
  y = 24,
  as = "div",
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const MotionComponent = as === "li" ? motion.li : motion.div
  const StaticComponent = as

  if (shouldReduceMotion) {
    return <StaticComponent className={className}>{children}</StaticComponent>
  }

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </MotionComponent>
  )
}
