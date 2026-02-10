import { Github, Mail } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <AnimatedSection>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Get In Touch
          </h2>
          <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-primary" />
          <p className="mx-auto mt-6 max-w-md text-muted-foreground">
            새로운 기회나 협업에 관심이 있으시다면 편하게 연락해 주세요.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              <Mail size={16} />
              이메일 보내기
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
