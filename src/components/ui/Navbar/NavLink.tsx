'use client'

import Link from "next/link"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  isActive?: boolean
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  underlineId?: string
}

export function NavLink({ href, children, className, isActive = false, onClick, underlineId = "nav-underline" }: NavLinkProps) {
  return (
    <Link href={href} className={cn("relative group py-2", className)} onClick={onClick} aria-current={isActive ? "page" : undefined}>
      <motion.span
        className={cn(
          "text-base font-medium transition-colors",
          isActive
            ? "text-zinc-900 dark:text-zinc-50"
            : "text-zinc-600 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-50"
        )}
        whileHover={{ y: -1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.span>

      {!isActive && (
        <span
          className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-blue-600 transition-transform group-hover:scale-x-100"
          aria-hidden="true"
        />
      )}

      {isActive && (
        <motion.span
          layoutId={underlineId}
          className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          aria-hidden="true"
        />
      )}
    </Link>
  )
}