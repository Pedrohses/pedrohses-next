export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200/70 bg-white/55 px-4 py-6 text-center backdrop-blur-[1px] dark:border-zinc-800 dark:bg-black/70">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        © {year} Pedro Silva · Feito com{" "}
        <span className="font-medium text-zinc-700 dark:text-zinc-300">Next.js</span>{" "}
        e{" "}
        <span className="font-medium text-zinc-700 dark:text-zinc-300">Tailwind CSS</span>
      </p>
    </footer>
  )
}
