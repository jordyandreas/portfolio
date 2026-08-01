"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Images, X } from "lucide-react";
import { createPortal } from "react-dom";

import { focusRingClassName } from "@/components/motion/interaction";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data";
import { ProjectDetailContent } from "@/features/projects/project-detail-content";
import { ProjectImage } from "@/features/projects/project-image";
import { ProjectShowcaseCarousel } from "@/features/projects/project-showcase-carousel";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";

type ProjectDetailModalProps = {
  project: Project;
  priority?: boolean;
  showPlatformBadge?: boolean;
  copy: Dictionary["projects"];
};

export function ProjectDetailModal({
  project,
  priority = false,
  showPlatformBadge = false,
  copy,
}: ProjectDetailModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const coverImage = project.showcaseImages[0] ?? null;
  const platformLabel = copy.platformLabels[project.platform];

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {coverImage ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={`${copy.viewProject}: ${project.title}`}
          className={cn(
            "group/preview relative aspect-2/1 overflow-hidden rounded-2xl border border-border bg-background/40 text-left",
            focusRingClassName,
          )}
        >
          <ProjectImage
            src={coverImage.src}
            alt={coverImage.alt}
            priority={priority}
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
          {showPlatformBadge ? (
            <span className="absolute bottom-3 left-3 inline-flex items-center rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              {platformLabel}
            </span>
          ) : null}
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-[transform,background-color,border-color] duration-200 group-hover/preview:-translate-y-0.5 group-hover/preview:border-white/35 group-hover/preview:bg-black/60 motion-reduce:transition-none motion-reduce:group-hover/preview:translate-y-0">
            <ArrowUpRight
              className="size-3.5 transition-transform duration-200 group-hover/preview:translate-x-0.5 group-hover/preview:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover/preview:translate-x-0 motion-reduce:group-hover/preview:translate-y-0"
              aria-hidden="true"
            />
            {copy.viewProject}
          </span>
        </button>
      ) : (
        <div className="relative flex aspect-2/1 min-h-40 w-full items-center justify-center rounded-2xl border border-border bg-background/40 text-muted-foreground/50">
          <Images className="size-10" strokeWidth={1.5} />
          {showPlatformBadge ? (
            <span className="absolute bottom-3 left-3 inline-flex items-center rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              {platformLabel}
            </span>
          ) : null}
        </div>
      )}

      {isOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden overscroll-none bg-black/72 p-4 sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-label={`${project.title} ${copy.projectDetails}`}
              onClick={() => setIsOpen(false)}
            >
              <div
                className="relative max-h-[min(90vh,56rem)] w-full max-w-5xl overflow-y-auto overscroll-contain rounded-[1.75rem] border border-white/12 bg-background p-4 shadow-[0_32px_120px_-40px_rgba(0,0,0,0.5)] scrollbar-none sm:p-5"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {copy.projectDetails}
                    </p>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {project.title}
                    </h3>
                  </div>

                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    aria-label={copy.closeDetails}
                    onClick={() => setIsOpen(false)}
                    className="rounded-full"
                  >
                    <X className="size-4" aria-hidden="true" />
                  </Button>
                </div>

                <ProjectShowcaseCarousel
                  images={project.showcaseImages}
                  title={project.title}
                  controlsVisibility="always"
                />

                <ProjectDetailContent project={project} copy={copy} />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
