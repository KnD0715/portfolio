import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  const main = experiences.filter((e) => e.type !== "award");
  const awards = experiences.filter((e) => e.type === "award");

  return (
    <section id="experience" className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionHeading title="Experience" subtitle="교육 및 경력" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-2xl">
            {main.map((experience) => (
              <TimelineItem key={experience.id} experience={experience} />
            ))}
          </div>
        </AnimatedSection>

        {awards.length > 0 && (
          <>
            <AnimatedSection delay={0.2}>
              <h3 className="mt-12 mb-6 text-lg font-semibold text-foreground">
                Awards & Certification
              </h3>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <ul className="max-w-2xl space-y-2">
                {awards.map((award) => (
                  <li
                    key={award.id}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="font-medium text-foreground">{award.title}</span>
                    <span>—</span>
                    <span>{award.description}</span>
                    <span className="text-xs">({award.period})</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </>
        )}
      </div>
    </section>
  );
}
