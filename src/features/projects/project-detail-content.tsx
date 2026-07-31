import Link from "next/link";
import {
  Archive,
  Blocks,
  Check,
  Clock3,
  Globe,
  Play,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import StackIcon from "tech-stack-icons";

import { TechnologyLabelIcon } from "@/components/icons/tech-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project, ProjectPlatform, ProjectStatus } from "@/data/projects";
import { cn } from "@/lib/utils";

/** Case-study narrative — keep markup, hide until ready to surface again. */
const SHOW_CASE_STUDY = false;

const PLATFORM_LABEL: Record<ProjectPlatform, string> = {
  web: "Web",
  mobile: "Mobile",
  backend: "Backend",
};

const PLATFORM_ICON: Record<ProjectPlatform, LucideIcon> = {
  web: Globe,
  mobile: Smartphone,
  backend: Blocks,
};

const STATUS_LABEL: Record<ProjectStatus, string> = {
  completed: "Completed",
  "in-progress": "In progress",
  archived: "Archived",
};

const STATUS_ICON: Record<ProjectStatus, LucideIcon> = {
  completed: Check,
  "in-progress": Clock3,
  archived: Archive,
};

type ProjectDetailContentProps = {
  project: Project;
};

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const platformLabel = PLATFORM_LABEL[project.platform];
  const statusLabel = STATUS_LABEL[project.status];
  const PlatformIcon = PLATFORM_ICON[project.platform];
  const StatusIcon = STATUS_ICON[project.status];
  const hasLinks = Boolean(project.githubUrl || project.liveUrl);

  return (
    <div className="mt-5 space-y-6 border-t border-border pt-5 sm:space-y-7 sm:pt-6">
      <ul className="flex flex-wrap items-center gap-2">
        <li>
          <span className="inline-flex h-8 items-center rounded-full border border-border bg-surface px-3.5 text-xs font-medium tracking-tight text-foreground">
            {project.domain}
          </span>
        </li>
        <li>
          <span className="inline-flex h-8 items-center gap-1.5 rounded-full border border-border bg-background px-3 text-xs font-medium text-muted-foreground">
            <PlatformIcon
              aria-hidden
              className="size-3.5 text-foreground/70"
              strokeWidth={1.75}
            />
            {platformLabel}
          </span>
        </li>
        <li>
          <span
            className={cn(
              "inline-flex h-8 items-center gap-1.5 rounded-full border px-2.5 pr-3 text-xs font-medium",
              project.status === "completed" &&
                "border-emerald-200/80 bg-emerald-50 text-emerald-700",
              project.status === "in-progress" &&
                "border-amber-200/80 bg-amber-50 text-amber-800",
              project.status === "archived" &&
                "border-border bg-muted/70 text-muted-foreground",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "inline-flex size-4 shrink-0 items-center justify-center rounded-full",
                project.status === "completed" && "bg-emerald-600 text-white",
                project.status === "in-progress" && "bg-amber-500 text-white",
                project.status === "archived" &&
                  "bg-muted-foreground/80 text-background",
              )}
            >
              <StatusIcon className="size-2.5" strokeWidth={3} />
            </span>
            {statusLabel}
          </span>
        </li>
      </ul>

      <section className="space-y-3" aria-labelledby={`${project.id}-overview`}>
        <div className="flex items-center gap-3">
          <h4
            id={`${project.id}-overview`}
            className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase"
          >
            Overview
          </h4>
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-border"
          />
        </div>
        <p className="max-w-3xl text-[0.95rem] leading-7 text-foreground/80 sm:text-base sm:leading-7">
          {project.overview}
        </p>
      </section>

      {SHOW_CASE_STUDY ? (
        <>
          <div className="grid gap-5 sm:grid-cols-3">
            <section
              className="space-y-2"
              aria-labelledby={`${project.id}-context`}
            >
              <h4
                id={`${project.id}-context`}
                className="text-sm font-semibold tracking-tight text-foreground"
              >
                Context
              </h4>
              <p className="text-sm leading-6 text-muted-foreground">
                {project.context}
              </p>
            </section>

            <section
              className="space-y-2"
              aria-labelledby={`${project.id}-challenge`}
            >
              <h4
                id={`${project.id}-challenge`}
                className="text-sm font-semibold tracking-tight text-foreground"
              >
                Challenge
              </h4>
              <p className="text-sm leading-6 text-muted-foreground">
                {project.challenge}
              </p>
            </section>

            <section
              className="space-y-2"
              aria-labelledby={`${project.id}-contribution`}
            >
              <h4
                id={`${project.id}-contribution`}
                className="text-sm font-semibold tracking-tight text-foreground"
              >
                Contribution
              </h4>
              <p className="text-sm leading-6 text-muted-foreground">
                {project.contribution}
              </p>
            </section>
          </div>

          <section
            className="space-y-3"
            aria-labelledby={`${project.id}-outcomes`}
          >
            <h4
              id={`${project.id}-outcomes`}
              className="text-sm font-semibold tracking-tight text-foreground"
            >
              Outcomes
            </h4>
            <ul className="space-y-2.5">
              {project.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex gap-3 text-sm leading-6 text-muted-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                  />
                  {outcome}
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : null}

      <section className="space-y-3" aria-labelledby={`${project.id}-stack`}>
        <div className="flex items-center gap-3">
          <h4
            id={`${project.id}-stack`}
            className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase"
          >
            Tech stack
          </h4>
          <span
            aria-hidden="true"
            className="h-px flex-1 bg-border"
          />
        </div>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li key={technology}>
              <Badge
                variant="outline"
                className="h-8 gap-1.5 border-border bg-surface/80 px-2.5 text-muted-foreground transition-[border-color,background-color,color] duration-200 hover:border-foreground/15 hover:bg-surface-elevated hover:text-foreground"
              >
                <TechnologyLabelIcon label={technology} />
                {technology}
              </Badge>
            </li>
          ))}
        </ul>
      </section>

      {hasLinks ? (
        <div className="flex flex-wrap gap-3 border-t border-border pt-5">
          {project.githubUrl ? (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-border bg-surface text-foreground hover:border-foreground/15 hover:bg-surface-elevated"
            >
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StackIcon name="github" className="size-4" />
                Repository
              </Link>
            </Button>
          ) : null}
          {project.liveUrl ? (
            <Button asChild size="sm">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play aria-hidden className="size-4 fill-current" />
                Demo
              </Link>
            </Button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
