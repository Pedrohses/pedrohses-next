import { ProjectCard } from "@/components/ui/Projects/ProjectCard"
import { ProjectsHeader } from "@/components/ui/Projects/ProjectsHeader"
import { getFeaturedProjects } from "@/components/ui/Projects/getFeaturedProjects"
import { ProjectsEmptyState } from "@/components/ui/Projects/ProjectsEmptyState"
import { ScrollReveal } from "@/components/ui/Shared/ScrollReveal"

export async function Projects() {
  const projects = await getFeaturedProjects()

  return (
    <section id="projects" className="bg-white/55 px-4 py-20 backdrop-blur-[1px] sm:px-6 md:py-28 dark:bg-black/70">
      <ScrollReveal className="mx-auto w-full max-w-6xl">
        <ProjectsHeader />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.length === 0 ? (
            <ProjectsEmptyState />
          ) : (
            projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.08} y={16} amount={0.1}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))
          )}
        </div>
      </ScrollReveal>
    </section>
  )
}
