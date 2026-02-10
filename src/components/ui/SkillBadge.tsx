import { cn } from "@/lib/utils";
import type { SkillLevel } from "@/types/skill";

interface SkillBadgeProps {
  name: string;
  level: SkillLevel;
}

const levelStyles: Record<SkillLevel, string> = {
  advanced:
    "bg-primary/10 text-primary border-primary/20 dark:bg-primary/15 dark:border-primary/30",
  intermediate:
    "bg-accent text-accent-foreground border-border",
  beginner:
    "bg-muted text-muted-foreground border-border",
};

const levelDots: Record<SkillLevel, number> = {
  advanced: 3,
  intermediate: 2,
  beginner: 1,
};

export function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm",
        levelStyles[level]
      )}
    >
      <span>{name}</span>
      <span className="flex gap-0.5">
        {[1, 2, 3].map((dot) => (
          <span
            key={dot}
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              dot <= levelDots[level]
                ? "bg-current opacity-80"
                : "bg-current opacity-20"
            )}
          />
        ))}
      </span>
    </div>
  );
}
