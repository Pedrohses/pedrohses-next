import { ProjectCard } from "@/components/ui/Projects/ProjectCard"
import { getFeaturedProjects } from "@/components/ui/Projects/getFeaturedProjects"
import { ProjectsEmptyState } from "@/components/ui/Projects/ProjectsEmptyState"
import { Carousel } from "@/components/ui/Shared/Carousel"
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal"
import { SectionHeader } from "@/components/ui/Shared/SectionHeader"

export async function Projects() {
  const projects = await getFeaturedProjects()

  return (
    <section id="projects" className="bg-white/55 px-4 py-20 backdrop-blur-[1px] sm:px-6 md:py-28 dark:bg-black/70">
      <ScrollReveal className="mx-auto w-full max-w-6xl">
        <SectionHeader
          label="Projetos"
          heading="Projetos em destaque"
          description="Projetos escolhidos que representam minha jornada técnica e paixão por construir software bem feito."
          className="mb-10 md:mb-12"
        />

        {projects.length === 0 ? (
          <ProjectsEmptyState />
        ) : (
          <Carousel itemClassName="w-72 px-2 sm:w-80">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Carousel>
        )}
      </ScrollReveal>
    </section>
  )
}
