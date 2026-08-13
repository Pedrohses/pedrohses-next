"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { NavLink } from "../ui/Navbar/NavLink"
import { cn } from "@/lib/utils"

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "Sobre mim" },
  { href: "#projects", label: "Projetos" },
  { href: "#works", label: "Trabalhos" },
  { href: "#contact", label: "Contato" },
]

const getCookieTheme = (): "light" | "dark" | null => {
  const matched = document.cookie.match(/(?:^|; )theme=(light|dark)(?:;|$)/)
  if (!matched) {
    return null
  }

  return matched[1] === "light" || matched[1] === "dark" ? matched[1] : null
}

const persistTheme = (theme: "light" | "dark") => {
  localStorage.setItem("theme", theme)
  document.cookie = `theme=${theme}; path=/; max-age=31536000; samesite=lax`
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeHref, setActiveHref] = useState<string>("#hero")
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    let rafId = 0

    const syncThemeFromStorage = () => {
      const cookieTheme = getCookieTheme()
      const savedTheme = localStorage.getItem("theme")
      const preferredTheme =
        cookieTheme === "dark" || cookieTheme === "light"
          ? cookieTheme
          : savedTheme === "dark" || savedTheme === "light"
            ? savedTheme
            : "dark"

      setTheme((prevTheme) => (prevTheme === preferredTheme ? prevTheme : preferredTheme))
      persistTheme(preferredTheme)
    }

    rafId = window.requestAnimationFrame(syncThemeFromStorage)

    return () => {
      window.cancelAnimationFrame(rafId)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    document.documentElement.style.colorScheme = theme
  }, [theme])

  useEffect(() => {
    let rafId = 0
    let isTicking = false

    const getActiveSection = () => {
      const probeOffset = Math.max(190, window.innerHeight * 0.32)
      const scrollPosition = window.scrollY + probeOffset
      let nextActiveHref = "#hero"

      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 16
      if (nearBottom) {
        return "#contact"
      }

      for (const link of links) {
        const section = document.querySelector(link.href)
        if (!section) {
          continue
        }

        if (scrollPosition >= section.getBoundingClientRect().top + window.scrollY) {
          nextActiveHref = link.href
        }
      }

      return nextActiveHref
    }

    const updateActiveSection = () => {
      isTicking = false
      const nextHref = getActiveSection()
      setActiveHref((prevHref) => (prevHref === nextHref ? prevHref : nextHref))
    }

    const handleScroll = () => {
      if (isTicking) {
        return
      }

      isTicking = true
      rafId = window.requestAnimationFrame(updateActiveSection)
    }

    const handleHashChange = () => {
      const hash = window.location.hash
      if (links.some((link) => link.href === hash)) {
        setActiveHref(hash)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    window.addEventListener("hashchange", handleHashChange)
    handleScroll()

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const handleToggleTheme = () => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark"
      persistTheme(nextTheme)
      return nextTheme
    })
  }

  const handleNavClick = (href: string) => {
    setActiveHref(href)
    setIsOpen(false)
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white/62 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#hero" className="text-sm font-semibold tracking-[0.2em] text-zinc-800 uppercase dark:text-zinc-100">
          Pedro Silva
        </a>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-md border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-800 md:hidden dark:border-zinc-700 dark:text-zinc-100"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Abrir menu de navegação"
          >
            Menu
          </button>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                className="text-sm"
                isActive={activeHref === link.href}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </NavLink>
            ))}

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
              onClick={handleToggleTheme}
              aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.span
                    key="sun-icon-desktop"
                    initial={{ opacity: 0, scale: 0.75, rotate: -25 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.75, rotate: 25 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="inline-flex"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
                    </svg>
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon-icon-desktop"
                    initial={{ opacity: 0, scale: 0.75, rotate: 25 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.75, rotate: -25 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="inline-flex"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                    </svg>
                  </motion.span>
                )}
              </AnimatePresence>
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.span
                    key="theme-label-light-desktop"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    Claro
                  </motion.span>
                ) : (
                  <motion.span
                    key="theme-label-dark-desktop"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    Escuro
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
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
            <NavLink
              key={`mobile-${link.href}`}
              href={link.href}
              className="w-full py-2 text-base"
              isActive={activeHref === link.href}
              onClick={() => handleNavClick(link.href)}
              underlineId="nav-underline-mobile"
            >
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-300 px-3 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800"
            onClick={handleToggleTheme}
            aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.span
                  key="sun-icon-mobile"
                  initial={{ opacity: 0, scale: 0.75, rotate: -25 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.75, rotate: 25 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="inline-flex"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
                  </svg>
                </motion.span>
              ) : (
                <motion.span
                  key="moon-icon-mobile"
                  initial={{ opacity: 0, scale: 0.75, rotate: 25 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.75, rotate: -25 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="inline-flex"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                  </svg>
                </motion.span>
              )}
            </AnimatePresence>
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.span
                  key="theme-label-light-mobile"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  Modo claro
                </motion.span>
              ) : (
                <motion.span
                  key="theme-label-dark-mobile"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  Modo escuro
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </nav>
  )
}
