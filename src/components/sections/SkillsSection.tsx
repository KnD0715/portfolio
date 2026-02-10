import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionHeading title="Skills" subtitle="기술 스택과 숙련도" />
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((category, categoryIndex) => (
            <AnimatedSection key={category.category} delay={categoryIndex * 0.1}>
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-6 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <span className="flex gap-0.5">
                {[1, 2, 3].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 rounded-full bg-current opacity-80"
                  />
                ))}
              </span>
              Advanced
            </div>
            <div className="flex items-center gap-1.5">
              <span className="flex gap-0.5">
                {[1, 2, 3].map((d) => (
                  <span
                    key={d}
                    className={`h-1.5 w-1.5 rounded-full bg-current ${
                      d <= 2 ? "opacity-80" : "opacity-20"
                    }`}
                  />
                ))}
              </span>
              Intermediate
            </div>
            <div className="flex items-center gap-1.5">
              <span className="flex gap-0.5">
                {[1, 2, 3].map((d) => (
                  <span
                    key={d}
                    className={`h-1.5 w-1.5 rounded-full bg-current ${
                      d <= 1 ? "opacity-80" : "opacity-20"
                    }`}
                  />
                ))}
              </span>
              Beginner
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
