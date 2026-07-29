export const motionEase = [0.22, 1, 0.36, 1] as const;

export const fadeInTokens = {
  duration: 0.4,
  y: 12,
} as const;

export const staggerTokens = {
  delayChildren: 0.04,
  staggerChildren: 0.07,
  duration: 0.4,
  y: 12,
} as const;

export type RevealIntensity = "strong" | "medium" | "quiet";

export const revealTokens = {
  strong: {
    duration: 0.5,
    y: 16,
  },
  medium: {
    duration: 0.4,
    y: 12,
  },
  quiet: {
    duration: 0.35,
    y: 8,
  },
} as const satisfies Record<
  RevealIntensity,
  {
    duration: number;
    y: number;
  }
>;

export const revealViewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -8% 0px",
} as const;

export const interactionTokens = {
  durationMs: 180,
  liftPx: 1,
  scrollThresholdPx: 8,
} as const;
