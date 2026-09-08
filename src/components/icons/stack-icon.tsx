"use client";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export const STACK_ICON_NAMES = [
  "nextjs2",
  "react",
  "reactnative",
  "typescript",
  "reactquery",
  "zustand",
  "redux",
  "graphql",
  "tailwindcss",
  "shadcnui",
  "expo",
  "supabase",
  "firebase",
  "nodejs",
  "expressjs",
  "zod",
  "ionic",
  "angular",
  "js",
  "rxjs",
  "gitlab",
  "github",
  "git",
  "reactnavigation",
  "oauth",
  "framer",
  "go",
  "materialui",
  "jest",
  "turborepo",
  "radixui",
] as const;

export type StackIconName = (typeof STACK_ICON_NAMES)[number];

type StackIconProps = {
  name: StackIconName;
  variant?: "light" | "dark";
  className?: string;
};

function useResolvedStackVariant(
  variant: "light" | "dark" | undefined,
): "light" | "dark" {
  const { resolvedTheme } = useTheme();

  if (variant) {
    return variant;
  }

  return resolvedTheme === "dark" ? "dark" : "light";
}

/**
 * Lightweight brand icon using static SVGs (subset of tech-stack-icons).
 * Avoids shipping the full ~8MB icon registry in the JS bundle.
 */
export function StackIcon({ name, variant, className }: StackIconProps) {
  const resolvedVariant = useResolvedStackVariant(variant);

  return (
    // eslint-disable-next-line @next/next/no-img-element -- small static SVG assets
    <img
      src={`/brand-icons/${name}-${resolvedVariant}.svg`}
      alt=""
      aria-hidden
      width={14}
      height={14}
      className={cn("size-3.5 shrink-0", className)}
      decoding="async"
    />
  );
}
