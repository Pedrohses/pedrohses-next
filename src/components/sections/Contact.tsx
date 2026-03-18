import { ContactCard } from "@/components/ui/Contact/ContactCard"
import { ContactCta } from "@/components/ui/Contact/ContactCta"
import { ContactHeader } from "@/components/ui/Contact/ContactHeader"
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal"
import { contactChannels } from "@/components/ui/Contact/contactData"

export function Contact() {
  return (
    <section id="contact" className="bg-white/78 px-4 py-20 sm:px-6 md:py-28 dark:bg-black/70">
      <ScrollReveal className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <ContactHeader />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactChannels.map((channel, index) => (
            <ScrollReveal key={channel.id} delay={index * 0.08} y={16} amount={0.1}>
              <ContactCard channel={channel} />
            </ScrollReveal>
          ))}
        </div>

        <ContactCta />
      </ScrollReveal>
    </section>
  )
}
