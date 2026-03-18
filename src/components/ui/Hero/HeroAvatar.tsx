'use client'

import Image from "next/image"
import { motion, type Variants } from "motion/react"

interface HeroAvatarProps {
  itemVariants: Variants
}

export function HeroAvatar({ itemVariants }: HeroAvatarProps) {
  return (
    <motion.div variants={itemVariants} className="relative group">
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
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
