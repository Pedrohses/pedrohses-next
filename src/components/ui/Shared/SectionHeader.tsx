import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  label: string
  heading: string
  description?: string
  className?: string
}

export function SectionHeader({ label, heading, description, className }: SectionHeaderProps) {
  return (
    <header className={cn("space-y-4 text-center md:text-left", className)}>
      <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-blue-600 uppercase">
        <span className="hidden md:block h-px w-8 flex-none bg-blue-400/50" aria-hidden="true" />
        <span>{label}</span>
        <span className="block h-px w-8 flex-none bg-blue-400/50" aria-hidden="true" />
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl dark:text-zinc-50">
        {heading}
      </h2>
      {description && (
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-zinc-600 md:mx-0 md:text-lg dark:text-zinc-400">
          {description}
        </p>
      )}
    </header>
  )
}
