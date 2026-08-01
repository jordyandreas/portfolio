import { cn } from "@/lib/utils";

/** Shared CSS-first interaction recipes for FT-020. One primary interaction per surface. */

export const surfaceLiftClassName = cn(
  "transition-[border-color,background-color,box-shadow,transform] duration-200",
  "hover:border-foreground/15 hover:bg-surface-elevated/80 hover:shadow-[0_16px_40px_-32px_rgba(34,34,34,0.18)] hover:-translate-y-px",
  "dark:hover:shadow-[0_16px_40px_-32px_rgba(0,0,0,0.55)]",
  "motion-reduce:transform-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none",
);

export const surfaceQuietClassName = cn(
  "transition-[border-color,background-color] duration-200",
  "hover:border-foreground/15 hover:bg-surface-elevated/70",
);

export const textLinkClassName = cn(
  "text-muted-foreground underline-offset-4 transition-[color,text-decoration-color] duration-200",
  "hover:text-foreground hover:underline",
  "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
);

export const focusRingClassName =
  "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50";

export const headerIdleClassName = cn(
  "border-transparent bg-background/88 shadow-none backdrop-blur-xl",
);

export const headerScrolledClassName = cn(
  "border-transparent bg-transparent pt-3 shadow-none",
);

export const headerFloatingShellClassName = cn(
  "rounded-2xl border border-border bg-background/92 shadow-[0_12px_40px_-20px_rgba(34,34,34,0.18)] backdrop-blur-xl md:rounded-full",
  "dark:shadow-[0_12px_40px_-20px_rgba(0,0,0,0.55)]",
);

export const headerIdleShellClassName = "rounded-none border-transparent bg-transparent shadow-none";

export const experienceRowClassName = cn(
  "transition-[background-color] duration-200",
  "hover:bg-background/45 focus-within:bg-background/45",
);

export const projectImageHoverClassName = cn(
  "object-cover object-top transition-[transform,filter,box-shadow] duration-200",
  "motion-reduce:transform-none motion-reduce:transition-none",
  "motion-reduce:group-hover:scale-100 motion-reduce:group-hover:brightness-100 motion-reduce:group-hover:shadow-none",
);
