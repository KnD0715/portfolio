"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TechTag } from "./TechTag";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          "group block rounded-xl border border-border bg-card p-6",
          "transition-all duration-300",
          "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
          "hover:-translate-y-1"
        )}
      >
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-card-foreground">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {project.subtitle}
            </p>
          </div>
          <ArrowRight
            size={18}
            className="mt-1 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
          />
        </div>

        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {project.description}
        </p>

        {project.metrics && (
          <div className="mb-4 flex flex-wrap gap-x-4 gap-y-1">
            {project.metrics.slice(0, 3).map((metric) => (
              <span
                key={metric.label}
                className="text-xs text-muted-foreground"
              >
                <span className="font-semibold text-foreground">
                  {metric.value}
                </span>{" "}
                {metric.label}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 6).map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
          {project.techStack.length > 6 && (
            <TechTag name={`+${project.techStack.length - 6}`} />
          )}
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>{project.period}</span>
          <span>
            {project.role} &middot; {project.teamSize}명
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
