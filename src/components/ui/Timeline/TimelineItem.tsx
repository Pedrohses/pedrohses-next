import type { Experience } from "./types"

interface TimelineItemProps {
  experience: Experience
}

export function TimelineItem({ experience }: TimelineItemProps) {
  const isCurrent = experience.period.includes("Atual")

  return (
    <>
      {isCurrent ? (
        <span className="absolute -left-8 mt-1.5 sm:-left-9" aria-hidden="true">
          <span className="relative flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-50" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-blue-600 bg-white dark:bg-zinc-950" />
          </span>
        </span>
      ) : (
        <span
          className="absolute -left-8 mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-zinc-400 bg-white sm:-left-9 dark:bg-zinc-950"
          aria-hidden="true"
        />
      )}

      <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500 sm:text-sm dark:text-zinc-400">
          <span>{experience.period}</span>
          <span aria-hidden="true">•</span>
          <span>{experience.location}</span>
          {isCurrent && (
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
              Atual
            </span>
          )}
        </div>

        <h3 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">{experience.role}</h3>
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{experience.company}</p>

        <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">{experience.summary}</p>

        <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
          {experience.skills.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}
