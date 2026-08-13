import type { MotionValue } from "motion/react"
import { useReducedMotion, useSpring, useTransform } from "motion/react"

const PARALLAX_SPRING = { stiffness: 300, damping: 30 }
const MAX_TILT = 6
const MAX_SHIFT = 10
const BADGE_COUNTER_SHIFT = 6

export function useAvatarParallax(px: MotionValue<number>, py: MotionValue<number>) {
  const shouldReduceMotion = useReducedMotion()

  const rotateX = useSpring(useTransform(py, [0, 1], [MAX_TILT, -MAX_TILT]), PARALLAX_SPRING)
  const rotateY = useSpring(useTransform(px, [0, 1], [-MAX_TILT, MAX_TILT]), PARALLAX_SPRING)
  const avatarX = useSpring(useTransform(px, [0, 1], [-MAX_SHIFT, MAX_SHIFT]), PARALLAX_SPRING)
  const avatarY = useSpring(useTransform(py, [0, 1], [-MAX_SHIFT, MAX_SHIFT]), PARALLAX_SPRING)
  const badgeTopX = useSpring(useTransform(px, [0, 1], [BADGE_COUNTER_SHIFT, -BADGE_COUNTER_SHIFT]), PARALLAX_SPRING)
  const badgeTopY = useSpring(useTransform(py, [0, 1], [BADGE_COUNTER_SHIFT, -BADGE_COUNTER_SHIFT]), PARALLAX_SPRING)
  const badgeBottomX = useSpring(useTransform(px, [0, 1], [-BADGE_COUNTER_SHIFT, BADGE_COUNTER_SHIFT]), PARALLAX_SPRING)
  const badgeBottomY = useSpring(useTransform(py, [0, 1], [-BADGE_COUNTER_SHIFT, BADGE_COUNTER_SHIFT]), PARALLAX_SPRING)

  if (shouldReduceMotion) {
    return { avatarStyle: undefined, badgeTopStyle: undefined, badgeBottomStyle: undefined }
  }

  return {
    avatarStyle: { rotateX, rotateY, x: avatarX, y: avatarY, transformPerspective: 800 },
    badgeTopStyle: { x: badgeTopX, y: badgeTopY },
    badgeBottomStyle: { x: badgeBottomX, y: badgeBottomY },
  }
}
