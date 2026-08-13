'use client'

import Image from "next/image"
import { useState } from "react"
import { motion, type MotionValue, type Variants } from "motion/react"
import { useAvatarParallax } from "./useAvatarParallax"

interface HeroAvatarProps {
  itemVariants: Variants
  px: MotionValue<number>
  py: MotionValue<number>
}

export function HeroAvatar({ itemVariants, px, py }: HeroAvatarProps) {
  const { avatarStyle, badgeTopStyle, badgeBottomStyle } = useAvatarParallax(px, py)
  const [squishCount, setSquishCount] = useState(0)

  return (
    <motion.div variants={itemVariants} className="flex flex-col items-center gap-3">
      <motion.div style={badgeTopStyle} className="self-end mr-2">
        <motion.div
          className="flex items-center gap-2 rounded-2xl border border-zinc-200/80 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm dark:border-zinc-700/80 dark:bg-zinc-900/90"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </span>
          <div>
            <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Full Stack</p>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Back &amp; Front</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div style={avatarStyle} className="relative group">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        >
          <div className="pointer-events-none absolute -inset-8 rounded-full border border-zinc-300/20 dark:border-zinc-600/15" aria-hidden="true" />
          <div className="pointer-events-none absolute -inset-16 rounded-full border border-zinc-300/10 dark:border-zinc-600/10" aria-hidden="true" />
          <motion.button
            type="button"
            onClick={() => setSquishCount((v) => v + 1)}
            aria-label="Interagir com a foto de perfil"
            className="relative block cursor-pointer rounded-full"
            key={squishCount}
            animate={
              squishCount > 0
                ? {
                    scaleX: [1, 1.1, 0.96, 1.02, 1],
                    scaleY: [1, 0.92, 1.06, 0.98, 1],
                    rotate: [0, -3, 2, -1, 0],
                  }
                : {}
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 opacity-60 blur-xl transition duration-1000 group-hover:opacity-90 group-hover:duration-200" />
            <Image
              src="https://github.com/Pedrohses.png"
              alt="Foto de Pedro Silva"
              width={220}
              height={220}
              className="relative z-10 h-44 w-44 rounded-full border-4 border-white object-cover shadow-2xl sm:h-52 sm:w-52 md:h-56 md:w-56 dark:border-zinc-900"
              priority
            />
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div style={badgeBottomStyle} className="self-start ml-2">
        <motion.div
          className="flex items-center gap-2 rounded-2xl border border-zinc-200/80 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm dark:border-zinc-700/80 dark:bg-zinc-900/90"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600 dark:bg-violet-950/60 dark:text-violet-400">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </span>
          <div>
            <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">2+ anos</p>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Experiência</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

