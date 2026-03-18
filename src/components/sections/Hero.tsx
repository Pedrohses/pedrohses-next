'use client'

import { motion, type Variants } from "motion/react"
import { HeroActions } from "@/components/ui/Hero/HeroActions"
import { HeroAvatar } from "@/components/ui/Hero/HeroAvatar"
import { HeroDescription } from "@/components/ui/Hero/HeroDescription"
import { HeroHeading } from "@/components/ui/Hero/HeroHeading"

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 300, 
        damping: 24 
      } 
    },
  }

  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center bg-white/55 px-4 py-24 text-center backdrop-blur-[1px] sm:px-6 md:py-28 dark:bg-black/70"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex w-full max-w-3xl flex-col items-center gap-6 sm:gap-7"
      >
        <HeroAvatar itemVariants={itemVariants} />
        <HeroHeading itemVariants={itemVariants} />
        <HeroDescription itemVariants={itemVariants} />
        <HeroActions itemVariants={itemVariants} />
      </motion.div>
    </section>
  )
}