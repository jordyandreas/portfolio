import type { Project } from "@/data/projects";
import { ProjectCard } from "@/features/projects/project-card";
import { cn } from "@/lib/utils";

type ProjectGridProps = {
  projects: Project[];
  className?: string;
  showPlatformBadge?: boolean;
  /** How many leading cover images may use `priority` (0 on pages with a hero LCP). */
  priorityImageCount?: number;
};

export function ProjectGrid({
  projects,
  className,
  showPlatformBadge = false,
  priorityImageCount = 0,
}: ProjectGridProps) {
  return (
    <ul
      className={cn(
        "grid list-none gap-6 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {projects.map((project, index) => (
        <li key={project.id} className="h-full">
          <ProjectCard
            project={project}
            priority={index < priorityImageCount}
            showPlatformBadge={showPlatformBadge}
          />
        </li>
      ))}
    </ul>
  );
}
