import { AboutTerminal } from "@/components/ui/About/AboutTerminal"
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal"
import { SectionHeader } from "@/components/ui/Shared/SectionHeader"

export function About() {
	return (
		<section id="about" className="bg-zinc-50/48 px-4 py-20 backdrop-blur-[1px] sm:px-6 md:py-28 dark:bg-zinc-950/72">
			<ScrollReveal className="mx-auto flex w-full max-w-5xl flex-col gap-10">
				<SectionHeader
					label="Sobre mim"
					heading="Back-end sólido, IA aplicada e entregas que chegam à produção"
					description="Sou desenvolvedor full stack com ênfase em back-end e 2 anos e meio de experiência com TypeScript, NestJS, Python e Next.js. Em plataformas do SENAI, atuo no desenvolvimento de APIs e integrações de IA (RAG, MCP, Vertex AI) e construí o back-end completo de uma plataforma de cálculo de emissões de carbono. Como freelancer, entreguei o módulo de assinaturas e cobrança recorrente de um SaaS B2B."
				/>

				<AboutTerminal />
			</ScrollReveal>
		</section>
	)
}
