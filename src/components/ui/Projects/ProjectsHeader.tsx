export function ProjectsHeader() {
  return (
    <header className="mb-10 text-center md:mb-12 md:text-left">
      <p className="text-sm font-semibold tracking-[0.18em] text-blue-600 uppercase">Projetos</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl dark:text-zinc-50">
        Projetos em destaque
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-400">
        Esta seção exibe apenas os repositorios fixados (pinned) no perfil do GitHub.
      </p>
    </header>
  )
}
