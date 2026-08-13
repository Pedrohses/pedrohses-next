"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import { aboutHighlights } from "./aboutData"

const identity = "Pedro Silva — Desenvolvedor Full Stack"

const stack = ["Node.js", "TypeScript", "Python", "NestJS", "Next.js", "Docker"]

const notes =
  "Sempre em busca de evolução, meus focos atuais de estudo são Arquitetura Limpa, Domain-Driven Design (DDD) e Model Context Protocol (MCP). No tempo livre, dedico-me a compartilhar conhecimento técnico."

const tabs = ["whoami.sh", "skills.sh", "notes.md"] as const

function TypedText({ text }: { text: string }) {
  const shouldReduceMotion = useReducedMotion()
  const [shown, setShown] = useState(shouldReduceMotion ? text : "")

  useEffect(() => {
    if (shouldReduceMotion) {
      setShown(text)
      return
    }

    setShown("")
    let i = 0
    const id = setInterval(() => {
      i++
      setShown(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, 14)

    return () => clearInterval(id)
  }, [text, shouldReduceMotion])

  return (
    <span>
      {shown}
      {!shouldReduceMotion && (
        <motion.span
          aria-hidden="true"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-2 translate-y-0.5 bg-blue-500 align-middle"
          style={{ height: "1em" }}
        />
      )}
    </span>
  )
}

export function AboutTerminal() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 shadow-lg dark:border-zinc-800">
      <div role="tablist" className="flex items-center gap-0 overflow-x-auto border-b border-zinc-800 bg-zinc-900 text-xs">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={i === activeTab}
            onClick={() => setActiveTab(i)}
            className={`shrink-0 px-4 py-2.5 font-mono transition-colors ${
              i === activeTab ? "border-b-2 border-blue-500 text-zinc-100" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div role="tabpanel" className="p-5 font-mono text-sm leading-relaxed sm:p-6">
        {activeTab === 0 && (
          <>
            <p className="text-zinc-500">$ whoami</p>
            <p className="mt-1 text-zinc-200">
              <TypedText text={identity} />
            </p>
            <p className="mt-4 text-zinc-500">$ echo $STACK</p>
            <p className="mt-1 text-zinc-400">{stack.join(" · ")}</p>
          </>
        )}

        {activeTab === 1 && (
          <>
            <p className="text-zinc-500">$ ls skills/</p>
            <ul className="mt-1 space-y-2">
              {aboutHighlights.map((item) => (
                <li key={item.title}>
                  <span className="text-blue-400">{item.title}</span>
                  <span className="text-zinc-600"> — </span>
                  <span className="text-zinc-400">{item.description}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {activeTab === 2 && (
          <>
            <p className="text-zinc-500"># cat notes.md</p>
            <p className="mt-1 text-zinc-400">{notes}</p>
          </>
        )}
      </div>
    </div>
  )
}
