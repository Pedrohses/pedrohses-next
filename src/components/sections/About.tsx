import { HighlightCard } from "@/components/ui/About/HighlightCard"
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal"
import { SectionHeader } from "@/components/ui/Shared/SectionHeader"
import { InfoNote } from "@/components/ui/Shared/InfoNote"
import { aboutHighlights } from "@/components/ui/About/aboutData"

export function About() {
	return (
		<section id="about" className="bg-zinc-50/48 px-4 py-20 backdrop-blur-[1px] sm:px-6 md:py-28 dark:bg-zinc-950/72">
			<ScrollReveal className="mx-auto flex w-full max-w-5xl flex-col gap-10">
				<SectionHeader
					label="Sobre mim"
					heading="Construindo soluções full stack com foco em clareza e impacto real"
					description="Sou um desenvolvedor full stack apaixonado por resolver problemas de negócio com tecnologia. Nos últimos anos, trabalhei em projetos de diferentes tamanhos, desenhando APIs, automatizando processos e estruturando serviços para facilitar evolução do produto."
				/>

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{aboutHighlights.map((item, index) => (
						<ScrollReveal key={item.title} delay={index * 0.08} y={16} amount={0.1}>
							<HighlightCard item={item} />
						</ScrollReveal>
					))}
				</div>

				<InfoNote>
					Sempre em busca de evolução, meus focos atuais de estudo são Arquitetura Limpa, Domain-Driven Design (DDD) e
					Model Context Protocol (MCP). No tempo livre, dedico-me a compartilhar conhecimento técnico.
				</InfoNote>
			</ScrollReveal>
		</section>
	)
}
