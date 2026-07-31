"use client";

import { useId, useState } from "react";

import type { Project, ProjectPlatform } from "@/data/projects";
import { ProjectGrid } from "@/features/projects/project-grid";
import { cn } from "@/lib/utils";

type ProjectTab = ProjectPlatform | "all";

const PLATFORM_ORDER: Record<ProjectPlatform, number> = {
  web: 0,
  mobile: 1,
  backend: 2,
};

const ALL_TAB_ORDER: string[] = [
  "miracall-talent-web",
  "miracall-dashboard-suite",
  "namea-company-profile-website",
  "lxscore-live-sport-website",
  "digica-finance-dashboard",
  "digica-academy-lms",
  "baby-monitor-dashboard",
  "personal-portfolio-website",
  "ulaman-bali-hotel-website",
  "titantaiment-short-video-platform",
  "video-call-apps",
  "master-owner-app",
  "master-owner-api",
  "wallet-disbursement-service",
  "maybank-finance-app-v2",
  "maybank-vospay-loan-app",
];

const PLATFORM_TABS: { id: ProjectTab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Application" },
  { id: "mobile", label: "Mobile Application" },
  { id: "backend", label: "Backend" },
];

const EMPTY_COPY: Record<
  ProjectTab,
  { title: string; description: string }
> = {
  all: {
    title: "No projects yet",
    description: "Selected work will appear here soon.",
  },
  web: {
    title: "No web projects yet",
    description: "Web application work will appear here soon.",
  },
  mobile: {
    title: "No mobile projects yet",
    description: "Mobile projects will appear here soon.",
  },
  backend: {
    title: "No backend projects yet",
    description: "Backend services will appear here soon.",
  },
};

function sortProjects(projects: Project[]): Project[] {
  return [...projects].sort((projectA, projectB) => {
    const platformDiff =
      PLATFORM_ORDER[projectA.platform] - PLATFORM_ORDER[projectB.platform];

    if (platformDiff !== 0) {
      return platformDiff;
    }

    return projectA.order - projectB.order;
  });
}

function sortAllProjects(projects: Project[]): Project[] {
  return [...projects].sort((projectA, projectB) => {
    const indexA = ALL_TAB_ORDER.indexOf(projectA.id);
    const indexB = ALL_TAB_ORDER.indexOf(projectB.id);

    if (indexA !== -1 || indexB !== -1) {
      if (indexA === -1) {
        return 1;
      }

      if (indexB === -1) {
        return -1;
      }

      return indexA - indexB;
    }

    const platformDiff =
      PLATFORM_ORDER[projectA.platform] - PLATFORM_ORDER[projectB.platform];

    if (platformDiff !== 0) {
      return platformDiff;
    }

    return projectA.order - projectB.order;
  });
}

type ProjectPlatformTabsProps = {
  projects: Project[];
  limit?: number;
  className?: string;
  includeAllTab?: boolean;
  initialTab?: ProjectTab;
};

export function ProjectPlatformTabs({
  projects,
  limit,
  className,
  includeAllTab = true,
  initialTab = includeAllTab ? "all" : "web",
}: ProjectPlatformTabsProps) {
  const [platform, setPlatform] = useState<ProjectTab>(initialTab);
  const tablistId = useId();
  const panelId = `${tablistId}-panel`;

  const filteredProjects =
    platform === "all"
      ? sortAllProjects(projects)
      : sortProjects(
          projects.filter((project) => project.platform === platform),
        );
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
        {PLATFORM_TABS.filter((tab) => includeAllTab || tab.id !== "all").map((tab) => {
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
