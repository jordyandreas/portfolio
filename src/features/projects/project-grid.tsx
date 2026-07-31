import type { Project } from "@/data/projects";
import { ProjectCard } from "@/features/projects/project-card";
import { cn } from "@/lib/utils";

type ProjectGridProps = {
  projects: Project[];
  className?: string;
  showPlatformBadge?: boolean;
};

const ABOVE_FOLD_IMAGE_COUNT = 3;

export function ProjectGrid({
  projects,
  className,
  showPlatformBadge = false,
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
            priority={index < ABOVE_FOLD_IMAGE_COUNT}
            showPlatformBadge={showPlatformBadge}
          />
        </li>
      ))}
    </ul>
  );
}
