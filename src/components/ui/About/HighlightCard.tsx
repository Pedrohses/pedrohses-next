import type { AboutHighlight } from "./aboutData"

interface HighlightCardProps {
  item: AboutHighlight
}

export function HighlightCard({ item }: HighlightCardProps) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.description}</p>
    </article>
  )
}
