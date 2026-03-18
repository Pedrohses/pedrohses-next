'use client'

import Link from "next/link"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  return (
    <Link href={href} className={cn("relative group py-2", className)} onClick={onClick}>
      <motion.span
        className="text-base font-medium font-mono text-zinc-600 transition-colors group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-zinc-50"
        whileHover={{ y: -1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.span>
      
      <motion.span 
        className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 origin-left scale-x-0 transition-transform group-hover:scale-x-100"
        aria-hidden="true"
      />
    </Link>
  )
}