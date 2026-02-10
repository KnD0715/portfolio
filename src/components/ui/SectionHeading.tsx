import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", className)}>
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
      {subtitle && (
        <p className="mt-4 text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
