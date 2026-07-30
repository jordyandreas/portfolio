"use client";

import { useEffect, useState } from "react";
import { Images, X } from "lucide-react";
import { createPortal } from "react-dom";

import { focusRingClassName, projectImageHoverClassName } from "@/components/motion/interaction";
import { Button } from "@/components/ui/button";
import { ProjectImage } from "@/features/projects/project-image";
import { ProjectShowcaseCarousel } from "@/features/projects/project-showcase-carousel";
import { cn } from "@/lib/utils";

type ShowcaseImage = {
  src: string;
  alt: string;
};

type ProjectGalleryModalProps = {
  images: ShowcaseImage[];
  title: string;
  priority?: boolean;
};

export function ProjectGalleryModal({
  images,
  title,
  priority = false,
}: ProjectGalleryModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const coverImage = images[0] ?? null;

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
          aria-label={`Open ${title} image gallery`}
          className={cn(
            "group/preview relative aspect-video overflow-hidden rounded-2xl border border-border bg-background/40 text-left",
            focusRingClassName,
          )}
        >
          <ProjectImage
            src={coverImage.src}
            alt={coverImage.alt}
            priority={priority}
            className={cn(
              projectImageHoverClassName,
              "object-cover object-top transition-transform duration-200 group-hover/preview:scale-[1.02]",
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
            <Images className="size-3.5" aria-hidden="true" />
            Preview gallery
          </span>
        </button>
      ) : (
        <div className="flex aspect-video min-h-[10rem] w-full items-center justify-center rounded-2xl border border-border bg-background/40 text-muted-foreground/50">
          <Images className="size-10" strokeWidth={1.5} />
        </div>
      )}

      {isOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 p-4 backdrop-blur-sm sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-label={`${title} image gallery`}
              onClick={() => setIsOpen(false)}
            >
              <div
                className="relative w-full max-w-5xl rounded-[1.75rem] border border-white/12 bg-background p-4 shadow-[0_32px_120px_-40px_rgba(0,0,0,0.5)] sm:p-5"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Project Preview
                    </p>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {title}
                    </h3>
                  </div>

                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    aria-label={`Close ${title} image gallery`}
                    onClick={() => setIsOpen(false)}
                    className="rounded-full"
                  >
                    <X className="size-4" aria-hidden="true" />
                  </Button>
                </div>

                <ProjectShowcaseCarousel
                  images={images}
                  title={title}
                  controlsVisibility="always"
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
