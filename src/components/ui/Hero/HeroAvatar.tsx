'use client'

import Image from "next/image"
import { motion, type Variants } from "motion/react"

interface HeroAvatarProps {
  itemVariants: Variants
}

export function HeroAvatar({ itemVariants }: HeroAvatarProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative group"
      style={{ perspective: "500px" }}
    >
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />

      <motion.div
        className="pointer-events-none absolute inset-[-18px] rounded-full border border-blue-400/50 dark:border-blue-400/40"
        style={{ rotateX: "70deg" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 block h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_8px_4px_rgba(96,165,250,0.8)]" />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-[-32px] rounded-full border border-violet-400/30 dark:border-violet-400/25"
        style={{ rotateX: "62deg", rotateY: "22deg" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute left-1/2 top-0 block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400 shadow-[0_0_7px_3px_rgba(167,139,250,0.75)]" />
      </motion.div>

      <Image
        src="https://github.com/Pedrohses.png"
        alt="Foto de Pedro Silva"
        width={120}
        height={120}
        className="relative h-24 w-24 rounded-full border-4 border-white object-cover shadow-xl sm:h-28 sm:w-28 md:h-32 md:w-32 dark:border-black"
        priority
      />
    </motion.div>
  )
}
