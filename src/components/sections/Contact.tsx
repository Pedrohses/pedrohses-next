import { ContactCard } from "@/components/ui/Contact/ContactCard"
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal"
import { SectionHeader } from "@/components/ui/Shared/SectionHeader"
import { InfoNote } from "@/components/ui/Shared/InfoNote"
import { contactChannels } from "@/components/ui/Contact/contactData"

export function Contact() {
  return (
    <section id="contact" className="bg-white/55 px-4 py-20 backdrop-blur-[1px] sm:px-6 md:py-28 dark:bg-black/70">
      <ScrollReveal className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <SectionHeader
          label="Contato"
          heading="Vamos conversar sobre seu próximo projeto"
          description="Se você busca apoio para APIs, arquitetura full stack ou evolução de plataforma, me chama. Estou aberto a oportunidades, freelas e colaborações em projetos interessantes."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactChannels.map((channel, index) => (
            <ScrollReveal key={channel.id} delay={index * 0.08} y={16} amount={0.1}>
              <ContactCard channel={channel} />
            </ScrollReveal>
          ))}
        </div>

        <InfoNote>
          Respondo geralmente em até 24h. Se preferir, me envie contexto do projeto, stack atual e objetivo da entrega para
          facilitar uma conversa mais objetiva.
        </InfoNote>
      </ScrollReveal>
    </section>
  )
}
