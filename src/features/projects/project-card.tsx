import Image from "next/image";
import Link from "next/link";
import { Images, Play } from "lucide-react";
import StackIcon from "tech-stack-icons";

import { TechnologyLabelIcon } from "@/components/icons/tech-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  projectImageHoverClassName,
  surfaceLiftClassName,
} from "@/components/motion/interaction";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const VISIBLE_TECH_COUNT = 3;

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const visibleTechnologies = project.technologies.slice(0, VISIBLE_TECH_COUNT);
  const remainingTechnologyCount =
    project.technologies.length - visibleTechnologies.length;

  return (
    <article
      className={cn(
        "group flex h-full flex-col gap-5 rounded-3xl border border-border bg-surface/90 p-5 sm:p-6",
        surfaceLiftClassName,
      )}
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-background/40">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className={cn(
              projectImageHoverClassName,
              "group-hover:scale-[1.02] group-hover:brightness-105",
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full min-h-[10rem] w-full items-center justify-center text-muted-foreground/50"
          >
            <Images className="size-10" strokeWidth={1.5} />
          </div>
        )}
      </div>

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
              <Badge
                variant="outline"
                className="h-7 gap-1.5 border-border bg-background/60 text-muted-foreground"
              >
                <TechnologyLabelIcon label={technology} />
                {technology}
              </Badge>
            </li>
          ))}
          {remainingTechnologyCount > 0 ? (
            <li className="flex">
              <Badge
                variant="outline"
                className="h-7 border-border bg-background/60 text-muted-foreground"
              >
                +{remainingTechnologyCount}
              </Badge>
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
        )}
      </div>
    </article>
  );
}
