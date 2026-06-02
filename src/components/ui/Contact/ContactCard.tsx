import type { ContactChannel, ContactChannelIcon } from "./contactData"

interface ContactCardProps {
  channel: ContactChannel
}

const icons: Record<ContactChannelIcon, React.ReactNode> = {
  email: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
}

export function ContactCard({ channel }: ContactCardProps) {
  return (
    <a
      href={channel.href}
      target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
      rel={channel.href.startsWith("mailto:") ? undefined : "noreferrer"}
      className="group block h-full w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200/60 hover:shadow-xl hover:shadow-blue-300/60 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-800/50 dark:hover:shadow-xl dark:hover:shadow-blue-500/25"
    >
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 transition-transform duration-300 group-hover:scale-110 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
        {icons[channel.icon]}
      </div>
      <p className="text-xs font-semibold tracking-[0.14em] text-zinc-500 uppercase dark:text-zinc-400">{channel.label}</p>
      <p className="mt-1 break-all text-sm font-medium text-zinc-900 dark:text-zinc-100">{channel.value}</p>
    </a>
  )
}
