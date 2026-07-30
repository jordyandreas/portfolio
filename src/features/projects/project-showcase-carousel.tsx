"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

import { projectImageHoverClassName } from "@/components/motion/interaction";
import { ProjectImage } from "@/features/projects/project-image";
import { cn } from "@/lib/utils";

type ShowcaseImage = {
  src: string;
  alt: string;
};

type ProjectShowcaseCarouselProps = {
  images: ShowcaseImage[];
  title: string;
  controlsVisibility?: "always" | "hover";
};

export function ProjectShowcaseCarousel({
  images,
  title,
  controlsVisibility = "always",
}: ProjectShowcaseCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageCount = images.length;
  const hasMultipleImages = imageCount > 1;
  const normalizedActiveIndex =
    imageCount > 0 ? activeIndex % imageCount : 0;

  const activeImage = useMemo(
    () => images[normalizedActiveIndex] ?? null,
    [images, normalizedActiveIndex],
  );
  const controlsVisibilityClass =
    controlsVisibility === "hover"
      ? "opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
      : "opacity-100";

  function goToPrevious() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? imageCount - 1 : currentIndex - 1,
    );
  }

  function goToNext() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % imageCount);
  }

  return (
    <div className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-background/40">
      {activeImage ? (
        <>
          <ProjectImage
            key={activeImage.src}
            src={activeImage.src}
            alt={activeImage.alt}
            className={cn(
              projectImageHoverClassName,
              "object-contain p-2 group-hover:scale-[1.01]",
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {hasMultipleImages ? (
            <div
              className={cn(
                "pointer-events-none absolute inset-0 z-10",
                controlsVisibilityClass,
              )}
            >
              <button
                type="button"
                aria-label={`Show previous ${title} screenshot`}
                onClick={goToPrevious}
                className="pointer-events-auto absolute left-3 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-black/50 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <ChevronLeft aria-hidden className="size-4" />
              </button>
              <button
                type="button"
                aria-label={`Show next ${title} screenshot`}
                onClick={goToNext}
                className="pointer-events-auto absolute right-3 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-black/50 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <ChevronRight aria-hidden className="size-4" />
              </button>

              <div className="absolute inset-x-0 bottom-3 flex justify-center">
                <div className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-white/25 bg-black/30 px-2.5 py-1 backdrop-blur-sm">
                  {images.map((image, index) => {
                    const isActive = index === normalizedActiveIndex;

                    return (
                      <button
                        key={`${image.src}-${index}`}
                        type="button"
                        aria-label={`Show ${title} screenshot ${index + 1} of ${imageCount}`}
                        aria-pressed={isActive}
                        onClick={() => setActiveIndex(index)}
                        className={cn(
                          "size-2 rounded-full transition-[transform,background-color,opacity] duration-200 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                          isActive
                            ? "scale-110 bg-white"
                            : "bg-white/45 hover:bg-white/70",
                        )}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}
        </>
      ) : (
        <div
          aria-hidden="true"
          className="flex h-full min-h-[10rem] w-full items-center justify-center text-muted-foreground/50"
        >
          <Images className="size-10" strokeWidth={1.5} />
        </div>
      )}
    </div>
  );
}
