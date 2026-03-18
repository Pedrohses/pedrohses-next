import { AboutFooterNote } from "@/components/ui/About/AboutFooterNote"
import { AboutHeader } from "@/components/ui/About/AboutHeader"
import { HighlightCard } from "@/components/ui/About/HighlightCard"
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal"
import { aboutHighlights } from "@/components/ui/About/aboutData"

export function About() {
	return (
		<section id="about" className="bg-zinc-50/82 px-4 py-20 sm:px-6 md:py-28 dark:bg-zinc-950/72">
			<ScrollReveal className="mx-auto flex w-full max-w-5xl flex-col gap-10">
				<AboutHeader />

				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{aboutHighlights.map((item, index) => (
						<ScrollReveal key={item.title} delay={index * 0.08} y={16} amount={0.1}>
							<HighlightCard item={item} />
						</ScrollReveal>
					))}
				</div>

				<AboutFooterNote />
			</ScrollReveal>
		</section>
	)
}
