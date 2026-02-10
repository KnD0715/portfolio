import { cn } from "@/lib/utils";
import type { Experience } from "@/types/experience";

interface TimelineItemProps {
  experience: Experience;
}

export function TimelineItem({ experience }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Connector line */}
      <div className="absolute left-[7px] top-2 h-full w-px bg-border last:hidden" />

      {/* Dot */}
      <div
        className={cn(
          "absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2",
          experience.current
            ? "border-primary bg-primary/20"
            : "border-border bg-card"
        )}
      />

      <div>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
          <h3 className="font-semibold text-foreground">{experience.title}</h3>
          {experience.current && (
            <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              Current
            </span>
          )}
        </div>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {experience.organization}
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {experience.period}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {experience.description}
        </p>
        {experience.details && (
          <ul className="mt-2 space-y-1">
            {experience.details.map((detail, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground" />
                {detail}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
