"use client";

import Link from "next/link";
import { Play } from "lucide-react";
import StackIcon from "tech-stack-icons";

import { TechnologyLabelIcon } from "@/components/icons/tech-icons";
import { surfaceLiftClassName } from "@/components/motion/interaction";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import type { Project } from "@/data";
import { ProjectDetailModal } from "@/features/projects/project-detail-modal";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";

const VISIBLE_TECH_COUNT = 3;

const techBadgeClassName =
  "h-7 gap-1.5 border-border bg-background/60 text-muted-foreground";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  showPlatformBadge?: boolean;
  copy: Dictionary["projects"];
};

export function ProjectCard({
  project,
  priority = false,
  showPlatformBadge = false,
  copy,
}: ProjectCardProps) {
  const visibleTechnologies = project.technologies.slice(0, VISIBLE_TECH_COUNT);
  const remainingTechnologies = project.technologies.slice(VISIBLE_TECH_COUNT);
  const remainingTechnologyCount = remainingTechnologies.length;

  return (
    <article
      className={cn(
        "group flex h-full flex-col gap-5 rounded-3xl border border-border bg-surface/90 p-5 sm:p-6",
        surfaceLiftClassName,
      )}
    >
      <ProjectDetailModal
        project={project}
        priority={priority}
        showPlatformBadge={showPlatformBadge}
        copy={copy}
      />

      <div className="flex flex-1 flex-col gap-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <p className="text-sm leading-6 text-muted-foreground">
            {project.shortDescription}
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-2">
          {visibleTechnologies.map((technology) => (
            <li key={technology} className="flex">
              <Badge variant="outline" className={techBadgeClassName}>
                <TechnologyLabelIcon label={technology} />
                {technology}
              </Badge>
            </li>
          ))}
          {remainingTechnologyCount > 0 ? (
            <li className="flex">
              <HoverCard>
                <HoverCardTrigger
                  delay={200}
                  closeDelay={100}
                  render={
                    <button
                      type="button"
                      className={cn(
                        badgeVariants({ variant: "outline" }),
                        "h-7 cursor-default border-border bg-background/60 text-muted-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                      )}
                      aria-label={`${remainingTechnologyCount} more technologies`}
                    />
                  }
                >
                  +{remainingTechnologyCount}
                </HoverCardTrigger>
                <HoverCardContent
                  align="start"
                  className="w-auto max-w-72 space-y-2 p-3"
                >
                  <p className="text-xs font-medium text-muted-foreground">
                    {copy.alsoUsed}
                  </p>
                  <ul className="flex flex-wrap items-center gap-2">
                    {remainingTechnologies.map((technology) => (
                      <li key={technology} className="flex">
                        <Badge variant="outline" className={techBadgeClassName}>
                          <TechnologyLabelIcon label={technology} />
                          {technology}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </HoverCardContent>
              </HoverCard>
            </li>
          ) : null}
        </ul>

        {(project.githubUrl || project.liveUrl) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-1">
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
                  {copy.repository}
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
                  {copy.demo}
                </Link>
              </Button>
            ) : null}
          </div>
        )}
      </div>
    </article>
  );
}
