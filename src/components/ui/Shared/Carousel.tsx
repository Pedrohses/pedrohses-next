"use client"

import { Children, useLayoutEffect, useRef, useState, type MouseEvent as ReactMouseEvent, type PointerEvent as ReactPointerEvent, type ReactNode } from "react"
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useTransform } from "motion/react"

interface CarouselProps {
  children: ReactNode[]
  /** Pixels per second the track drifts on its own. */
  speed?: number
  className?: string
  itemClassName?: string
}

const DRAG_THRESHOLD = 6

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
  const isPointerDown = useRef(false)
  const isDragging = useRef(false)
  const didDrag = useRef(false)
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

  // Drag only starts after the pointer moves past this threshold, so plain
  // clicks on buttons/links inside the cards still fire normally.
  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    isPointerDown.current = true
    didDrag.current = false
    pointerStartX.current = event.clientX
    dragStartX.current = baseX.get()
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!isPointerDown.current) return
    const deltaX = event.clientX - pointerStartX.current

    if (!isDragging.current) {
      if (Math.abs(deltaX) < DRAG_THRESHOLD) return
      isDragging.current = true
      didDrag.current = true
      setIsGrabbing(true)
      event.currentTarget.setPointerCapture(event.pointerId)
    }

    baseX.set(dragStartX.current + deltaX)
  }

  function endDrag(event: ReactPointerEvent<HTMLDivElement>) {
    isPointerDown.current = false
    if (!isDragging.current) return
    isDragging.current = false
    setIsGrabbing(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  // Swallow the click that follows a drag so a swipe never triggers a card action.
  function handleClickCapture(event: ReactMouseEvent<HTMLDivElement>) {
    if (!didDrag.current) return
    didDrag.current = false
    event.preventDefault()
    event.stopPropagation()
  }

  return (
    <div className={className} style={{ overflow: "hidden" }}>
      <motion.div
        ref={trackRef}
        className={`flex ${isGrabbing ? "cursor-grabbing" : "cursor-grab"} select-none`}
        style={{ x, touchAction: "pan-y" }}
        onClickCapture={handleClickCapture}
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
