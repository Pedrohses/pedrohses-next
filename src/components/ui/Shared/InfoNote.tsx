interface InfoNoteProps {
  children: React.ReactNode
}

export function InfoNote({ children }: InfoNoteProps) {
  return (
    <div className="rounded-2xl border border-blue-200/70 bg-blue-50/70 p-6 text-sm leading-relaxed text-zinc-700 sm:text-base dark:border-blue-900/60 dark:bg-blue-950/30 dark:text-zinc-300">
      {children}
    </div>
  )
}
