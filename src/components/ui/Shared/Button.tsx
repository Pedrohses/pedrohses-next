'use client'

import * as React from "react"
import Link from "next/link"
import { motion, type HTMLMotionProps } from "motion/react"
import { cn } from "@/lib/utils"

interface ButtonProps extends Omit<HTMLMotionProps<"span">, "ref"> {
  href: string
  children: React.ReactNode
  variant?: "default" | "outline"
}

const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className, href, children, variant = "default", ...props }, ref) => {

    const baseClass = "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background px-6 py-2.5"
    const defaultClass = "bg-zinc-900 text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
    const outlineClass = "border border-zinc-200 bg-transparent hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-50"

    const finalClassName = cn(
      baseClass,
      variant === "default" ? defaultClass : outlineClass,
      className
    )

    return (
      <Link href={href} ref={ref} className={finalClassName}>
        <motion.span
          className="inline-flex items-center"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          {...props}
        >
          {children}
        </motion.span>
      </Link>
    )
  }
)
Button.displayName = "Button"

export { Button }
