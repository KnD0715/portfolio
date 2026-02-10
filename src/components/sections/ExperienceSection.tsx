import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionHeading title="Experience" subtitle="교육 및 경력" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-2xl">
            {experiences.map((experience) => (
              <TimelineItem key={experience.id} experience={experience} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
