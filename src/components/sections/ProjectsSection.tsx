import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionHeading
            title="Projects"
            subtitle="참여한 프로젝트들을 소개합니다"
          />
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {sortedProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
