'use client'

import { motion, useScroll, useTransform, type Variants } from "motion/react"
import { HeroActions } from "@/components/ui/Hero/HeroActions"
import { HeroAvatar } from "@/components/ui/Hero/HeroAvatar"
import { HeroDescription } from "@/components/ui/Hero/HeroDescription"
import { HeroHeading } from "@/components/ui/Hero/HeroHeading"
import { HeroTechBadges } from "@/components/ui/Hero/HeroTechBadges"
import { HeroParticles } from "@/components/ui/Hero/HeroParticles"

export function Hero() {
  const { scrollY } = useScroll()
  const chevronOpacity = useTransform(scrollY, [0, 180], [1, 0])

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
      className="relative flex min-h-screen flex-col items-center justify-center bg-white/55 px-6 py-24 backdrop-blur-[1px] sm:px-8 md:py-28 dark:bg-black/70"
    >
      <div aria-hidden="true" className="hero-dot-grid pointer-events-none absolute inset-0" />
      <HeroParticles />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20"
      >
        <div className="flex items-center justify-center lg:order-2">
          <HeroAvatar itemVariants={itemVariants} />
        </div>

        <div className="flex flex-col items-center gap-5 text-center lg:order-1 lg:items-start lg:text-left">
          <HeroHeading itemVariants={itemVariants} />
          <HeroDescription itemVariants={itemVariants} />
          <HeroTechBadges itemVariants={itemVariants} />
          <HeroActions itemVariants={itemVariants} />
        </div>
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-400 dark:text-zinc-400"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ opacity: chevronOpacity }}
        aria-label="Rolar para baixo"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </motion.a>
    </section>
  )
}