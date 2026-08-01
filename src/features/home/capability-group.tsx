import { CapabilityTechIcon } from "@/components/icons/tech-icons";
import { Badge } from "@/components/ui/badge";
import { surfaceLiftClassName } from "@/components/motion/interaction";
import type { CapabilityGroup as CapabilityGroupData } from "@/data";
import { cn } from "@/lib/utils";

type CapabilityGroupProps = {
  group: CapabilityGroupData;
};

export function CapabilityGroup({ group }: CapabilityGroupProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col gap-4 rounded-2xl border border-border bg-background/60 p-5 sm:p-6",
        surfaceLiftClassName,
      )}
    >
      <div className="space-y-2">
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          {group.title}
        </h3>
        <p className="text-sm leading-6 text-muted-foreground">
          {group.description}
        </p>
      </div>

      <ul className="mt-auto flex flex-wrap gap-2">
        {group.technologies.map((technology) => (
          <li key={technology.name}>
            <Badge
              variant="outline"
              className="gap-1.5 border-border bg-surface text-muted-foreground"
            >
              <CapabilityTechIcon name={technology.icon} />
              {technology.name}
            </Badge>
          </li>
        ))}
      </ul>
    </article>
  );
}
