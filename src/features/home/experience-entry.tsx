import { TechnologyLabelIcon } from "@/components/icons/tech-icons";
import { Badge } from "@/components/ui/badge";
import { experienceRowClassName } from "@/components/motion/interaction";
import type { ExperienceEntry as ExperienceEntryData } from "@/data";
import { cn } from "@/lib/utils";

type ExperienceEntryProps = {
  entry: ExperienceEntryData;
};

export function ExperienceEntry({ entry }: ExperienceEntryProps) {
  const companyLine = entry.location
    ? `${entry.company} · ${entry.location}`
    : entry.company;

  return (
    <li
      className={cn(
        "group space-y-4 border-t border-border py-6 first:border-t-0 first:pt-0 md:py-8",
        experienceRowClassName,
      )}
    >
      <div className="space-y-1">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {entry.role}
          </h3>
          <p className="shrink-0 font-mono text-sm text-muted-foreground transition-colors duration-200 group-hover:text-foreground/85 group-focus-within:text-foreground/85">
            {entry.period}
          </p>
        </div>
        <p className="text-base text-muted-foreground">{companyLine}</p>
      </div>

      <ul className="space-y-2.5">
        {entry.outcomes.map((outcome) => (
          <li
            key={outcome}
            className="flex gap-3 text-sm leading-6 text-muted-foreground transition-colors duration-200 group-hover:text-foreground/80 group-focus-within:text-foreground/80"
          >
            <span
              aria-hidden="true"
              className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
            />
            {outcome}
          </li>
        ))}
      </ul>

      <ul className="flex flex-wrap gap-2">
        {entry.technologies.map((technology) => (
          <li key={technology}>
            <Badge
              variant="outline"
              className="gap-1.5 border-border bg-surface text-muted-foreground"
            >
              <TechnologyLabelIcon label={technology} />
              {technology}
            </Badge>
          </li>
        ))}
      </ul>
    </li>
  );
}
