import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { TechTag } from "@/components/ui/TechTag";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* Back Button */}
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} />
        프로젝트 목록으로
      </Link>

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{project.subtitle}</p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span>{project.period}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground" />
          <span>{project.role}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground" />
          <span>팀 {project.teamSize}명</span>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </header>

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="mb-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-border bg-card p-4 text-center"
              >
                <p className="text-2xl font-bold text-primary">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Description */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          프로젝트 소개
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </section>

      {/* Features */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          주요 기능
        </h2>
        <ul className="space-y-3">
          {project.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* Challenges */}
      {project.challenges.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            기술적 챌린지
          </h2>
          <div className="space-y-6">
            {project.challenges.map((challenge, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {challenge.title}
                </h3>
                <div className="mt-3 space-y-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-red-500 dark:text-red-400">
                      Problem
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {challenge.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">
                      Solution
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {challenge.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
