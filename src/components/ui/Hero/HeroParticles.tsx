'use client'

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

const COUNT   = 100
const CONNECT = 130
const MOUSE_R = 160
const REPEL_R = 88

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse     = useRef({ x: -9999, y: -9999 })
  const pts       = useRef<Particle[]>([])
  const raf       = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    function init() {
      canvas!.width  = canvas!.offsetWidth
      canvas!.height = canvas!.offsetHeight
      pts.current = Array.from({ length: COUNT }, () => ({
        x:  Math.random() * canvas!.width,
        y:  Math.random() * canvas!.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r:  Math.random() * 1.3 + 0.5,
      }))
    }

    function tick() {
      const W = canvas!.width
      const H = canvas!.height
      ctx!.clearRect(0, 0, W, H)

      const dark = document.documentElement.classList.contains("dark")
      const [dr, dg, db] = dark ? [148, 163, 184] : [100, 116, 139]
      const [lr, lg, lb] = dark ? [99,  102, 241] : [59,  130, 246]
      const [mr, mg, mb] = dark ? [167, 139, 250] : [99,  102, 241]

      const { x: mx, y: my } = mouse.current

      for (let i = 0; i < pts.current.length; i++) {
        const p = pts.current[i]

        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1

        // repel from cursor
        const ddx = p.x - mx
        const ddy = p.y - my
        const dd  = Math.hypot(ddx, ddy)
        if (dd < REPEL_R && dd > 0) {
          const f = ((REPEL_R - dd) / REPEL_R) * 2.4
          p.x += (ddx / dd) * f
          p.y += (ddy / dd) * f
        }

        // dot
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, 6.283)
        ctx!.fillStyle = `rgba(${dr},${dg},${db},0.75)`
        ctx!.fill()

        // line to cursor
        if (dd < MOUSE_R) {
          const alpha = (1 - dd / MOUSE_R) * 0.55
          ctx!.beginPath()
          ctx!.moveTo(p.x, p.y)
          ctx!.lineTo(mx, my)
          ctx!.strokeStyle = `rgba(${mr},${mg},${mb},${alpha})`
          ctx!.lineWidth   = 0.8
          ctx!.stroke()
        }

        // lines between nearby particles
        for (let j = i + 1; j < pts.current.length; j++) {
          const q  = pts.current[j]
          const d2 = Math.hypot(p.x - q.x, p.y - q.y)
          if (d2 < CONNECT) {
            const alpha = (1 - d2 / CONNECT) * 0.22
            ctx!.beginPath()
            ctx!.moveTo(p.x, p.y)
            ctx!.lineTo(q.x, q.y)
            ctx!.strokeStyle = `rgba(${lr},${lg},${lb},${alpha})`
            ctx!.lineWidth   = 0.5
            ctx!.stroke()
          }
        }
      }

      raf.current = requestAnimationFrame(tick)
    }

    init()
    raf.current = requestAnimationFrame(tick)

    const ro = new ResizeObserver(init)
    ro.observe(canvas)

    function onMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      const x    = e.clientX - rect.left
      const y    = e.clientY - rect.top
      mouse.current =
        x >= 0 && x <= rect.width && y >= 0 && y <= rect.height
          ? { x, y }
          : { x: -9999, y: -9999 }
    }

    window.addEventListener("mousemove", onMove)

    return () => {
      cancelAnimationFrame(raf.current)
      ro.disconnect()
      window.removeEventListener("mousemove", onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}
