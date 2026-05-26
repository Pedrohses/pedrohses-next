export function ProjectsEmptyState() {
  return (
    <div className="col-span-full flex flex-col items-center gap-4 rounded-2xl border border-dashed border-zinc-300 px-6 py-16 text-center dark:border-zinc-700">
      <svg
        viewBox="0 0 24 24"
        className="h-10 w-10 text-zinc-300 dark:text-zinc-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
      <div className="space-y-1">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Projetos em breve
        </p>
        <p className="text-xs text-zinc-400 dark:text-zinc-600">
          Confira o perfil no GitHub para ver os repositórios mais recentes.
        </p>
      </div>
      <a
        href="https://github.com/Pedrohses"
        target="_blank"
        rel="noreferrer"
        className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        Ver perfil no GitHub →
      </a>
    </div>
  )
}
