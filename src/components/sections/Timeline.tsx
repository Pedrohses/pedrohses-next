import { experiences } from "@/components/ui/Timeline/timelineData"
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal"
import { TimelineHeader } from "@/components/ui/Timeline/TimelineHeader"
import { TimelineItem } from "@/components/ui/Timeline/TimelineItem"
import { TimelineLine } from "@/components/ui/Timeline/TimelineLine"

export function Timeline() {
	return (
		<section id="works" className="bg-zinc-50/46 px-4 py-20 backdrop-blur-[1px] sm:px-6 md:py-28 dark:bg-zinc-950/72">
			<ScrollReveal className="mx-auto w-full max-w-5xl">
				<TimelineHeader />

				<div className="relative pl-8 sm:pl-10">
					<TimelineLine />

					<ol className="space-y-8 md:space-y-10">
						{experiences.map((experience, index) => (
							<ScrollReveal
								as="li"
								key={experience.id}
								className="relative"
								delay={index * 0.1}
								y={18}
								amount={0.12}
							>
								<TimelineItem experience={experience} />
							</ScrollReveal>
						))}
					</ol>
				</div>
			</ScrollReveal>
		</section>
	)
}
