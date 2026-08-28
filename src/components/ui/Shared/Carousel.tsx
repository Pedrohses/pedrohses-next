"use client"

import { Children, useLayoutEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react"
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useTransform } from "motion/react"

interface CarouselProps {
  children: ReactNode[]
  /** Pixels per second the track drifts on its own. */
  speed?: number
  className?: string
  itemClassName?: string
}

function wrap(min: number, max: number, value: number) {
  const range = max - min
  if (range <= 0) return min
  return ((((value - min) % range) + range) % range) + min
}

export function Carousel({ children, speed = 36, className, itemClassName }: CarouselProps) {
  const items = Children.toArray(children)
  const shouldReduceMotion = useReducedMotion()

  const trackRef = useRef<HTMLDivElement>(null)
  const markerRef = useRef<HTMLDivElement>(null)

  const [setWidth, setSetWidth] = useState(0)
  const isDragging = useRef(false)
  const isHovering = useRef(false)
  const pointerStartX = useRef(0)
  const dragStartX = useRef(0)
  const [isGrabbing, setIsGrabbing] = useState(false)

  const baseX = useMotionValue(0)
  const x = useTransform(baseX, (value) => (setWidth > 0 ? wrap(-setWidth, 0, value) : value))

  useLayoutEffect(() => {
    if (!markerRef.current) return

    const measure = () => setSetWidth(markerRef.current?.offsetLeft ?? 0)
    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(trackRef.current ?? markerRef.current)
    return () => observer.disconnect()
  }, [items.length])

  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion || isDragging.current || isHovering.current || setWidth === 0) return
    baseX.set(baseX.get() - (speed * delta) / 1000)
  })

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    isDragging.current = true
    setIsGrabbing(true)
    pointerStartX.current = event.clientX
    dragStartX.current = baseX.get()
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!isDragging.current) return
    baseX.set(dragStartX.current + (event.clientX - pointerStartX.current))
  }

  function endDrag(event: ReactPointerEvent<HTMLDivElement>) {
    if (!isDragging.current) return
    isDragging.current = false
    setIsGrabbing(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  return (
    <div className={className} style={{ overflow: "hidden" }}>
      <motion.div
        ref={trackRef}
        className={`flex ${isGrabbing ? "cursor-grabbing" : "cursor-grab"} select-none`}
        style={{ x, touchAction: "pan-y" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerEnter={() => {
          isHovering.current = true
        }}
        onPointerLeave={(event) => {
          isHovering.current = false
          endDrag(event)
        }}
      >
        {[0, 1, 2].map((copy) =>
          items.map((item, index) => (
            <div
              key={`${copy}-${index}`}
              ref={copy === 1 && index === 0 ? markerRef : undefined}
              className={`shrink-0 ${itemClassName ?? ""}`}
            >
              {item}
            </div>
          ))
        )}
      </motion.div>
    </div>
  )
}
