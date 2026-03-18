"use client"

import { motion, useReducedMotion } from "motion/react"

export function BackgroundGlow() {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return null
  }

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(37,99,235,0.24),transparent_34%),radial-gradient(circle_at_86%_18%,rgba(14,165,233,0.2),transparent_32%),radial-gradient(circle_at_50%_85%,rgba(59,130,246,0.14),transparent_40%)] opacity-80 sm:opacity-100" />
      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_14%_18%,rgba(59,130,246,0.38),transparent_36%),radial-gradient(circle_at_86%_20%,rgba(34,211,238,0.28),transparent_34%),radial-gradient(circle_at_50%_86%,rgba(96,165,250,0.22),transparent_42%)]" />

      <motion.div
        className="absolute left-1/2 top-[58%] h-72 w-72 -translate-x-1/2 rounded-full bg-blue-400/22 blur-3xl sm:hidden"
        animate={{ y: [-12, 16, -12], scale: [0.95, 1.12, 0.95] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -left-14 top-16 h-64 w-64 rounded-full bg-blue-400/26 blur-3xl sm:-left-24 sm:top-24 sm:h-72 sm:w-72"
        animate={{ x: [-20, 30, -20], y: [-10, 25, -10], scale: [1, 1.14, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[-48px] top-[28%] h-72 w-72 rounded-full bg-cyan-300/22 blur-3xl sm:right-[-80px] sm:top-1/3 sm:h-80 sm:w-80"
        animate={{ x: [30, -20, 30], y: [10, -20, 10], scale: [1.08, 0.96, 1.08] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-84px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/18 blur-3xl sm:bottom-[-120px] sm:left-1/3 sm:h-96 sm:w-96 sm:translate-x-0"
        animate={{ x: [-10, 20, -10], y: [20, -15, 20], scale: [0.94, 1.08, 0.94] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
