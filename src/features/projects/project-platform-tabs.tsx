"use client";

import { useId, useState } from "react";

import type { Project, ProjectPlatform } from "@/data/projects";
import { ProjectGrid } from "@/features/projects/project-grid";
import { cn } from "@/lib/utils";

const PLATFORM_TABS: { id: ProjectPlatform; label: string }[] = [
  { id: "web", label: "Web Application" },
  { id: "mobile", label: "Mobile Application" },
];

const EMPTY_COPY: Record<
  ProjectPlatform,
  { title: string; description: string }
> = {
  web: {
    title: "No web projects yet",
    description: "Web application work will appear here soon.",
  },
  mobile: {
    title: "No mobile projects yet",
    description: "Mobile projects will appear here soon.",
  },
};

type ProjectPlatformTabsProps = {
  projects: Project[];
  limit?: number;
  className?: string;
};

export function ProjectPlatformTabs({
  projects,
  limit,
  className,
}: ProjectPlatformTabsProps) {
  const [platform, setPlatform] = useState<ProjectPlatform>("web");
  const tablistId = useId();
  const panelId = `${tablistId}-panel`;

  const filteredProjects = projects
    .filter((project) => project.platform === platform)
    .sort((projectA, projectB) => projectA.order - projectB.order);
  const visibleProjects =
    typeof limit === "number"
      ? filteredProjects.slice(0, limit)
      : filteredProjects;
  const emptyCopy = EMPTY_COPY[platform];

  return (
    <div className={cn("space-y-8", className)}>
      <div
        role="tablist"
        aria-label="Project platform"
        className="flex flex-wrap justify-center gap-3"
      >
        {PLATFORM_TABS.map((tab) => {
          const isSelected = platform === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`${tablistId}-${tab.id}`}
              aria-selected={isSelected}
              aria-controls={panelId}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setPlatform(tab.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-[background-color,border-color,color] duration-200",
                "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                isSelected
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-surface text-muted-foreground hover:border-foreground/20 hover:text-foreground",
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={panelId}
        aria-labelledby={`${tablistId}-${platform}`}
      >
        {visibleProjects.length > 0 ? (
          <ProjectGrid projects={visibleProjects} />
        ) : (
          <div className="rounded-3xl border border-dashed border-border bg-surface/60 px-6 py-16 text-center sm:px-8">
            <p className="text-lg font-semibold tracking-tight text-foreground">
              {emptyCopy.title}
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              {emptyCopy.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
