import { AboutTerminal } from "@/components/ui/About/AboutTerminal"
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal"
import { SectionHeader } from "@/components/ui/Shared/SectionHeader"

export function About() {
	return (
		<section id="about" className="bg-zinc-50/48 px-4 py-20 backdrop-blur-[1px] sm:px-6 md:py-28 dark:bg-zinc-950/72">
			<ScrollReveal className="mx-auto flex w-full max-w-5xl flex-col gap-10">
				<SectionHeader
					label="Sobre mim"
					heading="Construindo soluções full stack com foco em clareza e impacto real"
					description="Sou um desenvolvedor full stack apaixonado por resolver problemas de negócio com tecnologia. Nos últimos anos, trabalhei em projetos de diferentes tamanhos, desenhando APIs, automatizando processos e estruturando serviços para facilitar evolução do produto."
				/>

				<AboutTerminal />
			</ScrollReveal>
		</section>
	)
}
