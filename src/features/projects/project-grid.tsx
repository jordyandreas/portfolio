import type { Project } from "@/data/projects";
import { ProjectCard } from "@/features/projects/project-card";
import { cn } from "@/lib/utils";

type ProjectGridProps = {
  projects: Project[];
  className?: string;
};

export function ProjectGrid({ projects, className }: ProjectGridProps) {
  return (
    <ul
      className={cn(
        "grid list-none gap-6 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {projects.map((project) => (
        <li key={project.id} className="h-full">
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
