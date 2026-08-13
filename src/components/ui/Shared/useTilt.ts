import type { MouseEvent } from "react"
import { useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react"

const TILT_SPRING = { stiffness: 300, damping: 30 }

export function useTilt(maxTilt = 4) {
  const shouldReduceMotion = useReducedMotion()
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), TILT_SPRING)
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), TILT_SPRING)

  function onMouseMove(e: MouseEvent<HTMLElement>) {
    if (shouldReduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  function onMouseLeave() {
    px.set(0.5)
    py.set(0.5)
  }

  return {
    style: shouldReduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 600 },
    onMouseMove,
    onMouseLeave,
  }
}
