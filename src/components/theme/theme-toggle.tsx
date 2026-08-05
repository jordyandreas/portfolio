"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { focusRingClassName } from "@/components/motion/interaction";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "relative inline-flex size-9 items-center justify-center rounded-full border border-transparent bg-transparent text-foreground transition-[background-color,border-color,color] duration-200 hover:border-border hover:bg-surface",
        focusRingClassName,
        className,
      )}
    >
      <Moon
        aria-hidden="true"
        className="size-4 rotate-0 scale-100 transition-transform duration-200 dark:-rotate-90 dark:scale-0 motion-reduce:transition-none"
      />
      <Sun
        aria-hidden="true"
        className="absolute size-4 rotate-90 scale-0 transition-transform duration-200 dark:rotate-0 dark:scale-100 motion-reduce:transition-none"
      />
    </button>
  );
}
