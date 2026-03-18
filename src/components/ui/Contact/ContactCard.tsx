import type { ContactChannel } from "./contactData"

interface ContactCardProps {
  channel: ContactChannel
}

export function ContactCard({ channel }: ContactCardProps) {
  return (
    <a
      href={channel.href}
      target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
      rel={channel.href.startsWith("mailto:") ? undefined : "noreferrer"}
      className="block h-full w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm transition-transform hover:-translate-y-1 dark:border-zinc-800 dark:bg-zinc-900"
    >
      <p className="text-xs font-semibold tracking-[0.14em] text-zinc-500 uppercase dark:text-zinc-400">{channel.label}</p>
      <p className="mt-2 break-all text-base font-medium text-zinc-900 dark:text-zinc-100">{channel.value}</p>
    </a>
  )
}
