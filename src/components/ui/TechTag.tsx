import { cn } from "@/lib/utils";

interface TechTagProps {
  name: string;
  className?: string;
}

export function TechTag({ name, className }: TechTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium",
        "bg-accent text-accent-foreground",
        className
      )}
    >
      {name}
    </span>
  );
}
