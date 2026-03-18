"use client"

import { useState } from "react"
import { NavLink } from "../ui/Navbar/NavLink"
import { cn } from "@/lib/utils"

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "Sobre mim" },
  { href: "#projects", label: "Projetos" },
  { href: "#works", label: "Trabalhos" },
  { href: "#contact", label: "Contato" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-sm dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#hero" className="text-sm font-semibold tracking-[0.2em] text-zinc-800 uppercase dark:text-zinc-100">
          Pedro Silva
        </a>

        <button
          type="button"
          className="rounded-md border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-800 md:hidden dark:border-zinc-700 dark:text-zinc-100"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Abrir menu de navegacao"
        >
          Menu
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} className="text-sm">
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-zinc-200/80 px-4 transition-all duration-300 md:hidden dark:border-zinc-800",
          isOpen ? "max-h-80 py-3 opacity-100" : "max-h-0 py-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <NavLink key={`mobile-${link.href}`} href={link.href} className="w-full py-2 text-base" onClick={handleCloseMenu}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
