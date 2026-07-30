"use client";

import { useState } from "react";
import Image from "next/image";
import { Images } from "lucide-react";

import { cn } from "@/lib/utils";

type ProjectImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
};

type ImageStatus = "loading" | "loaded" | "error";

export function ProjectImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
}: ProjectImageProps) {
  const [status, setStatus] = useState<ImageStatus>("loading");
  const [loadedSrc, setLoadedSrc] = useState(src);

  if (src !== loadedSrc) {
    setLoadedSrc(src);
    setStatus("loading");
  }

  return (
    <div className="absolute inset-0" aria-busy={status === "loading"}>
      {status === "loading" ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-muted/60"
        />
      ) : null}

      {status === "error" ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center text-muted-foreground/50"
        >
          <Images className="size-10" strokeWidth={1.5} />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={cn(
            className,
            "transition-[transform,filter,box-shadow,opacity] duration-300",
            status === "loaded" ? "opacity-100" : "opacity-0",
          )}
        />
      )}
    </div>
  );
}
