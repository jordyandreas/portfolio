"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { fadeInTokens, motionEase } from "@/components/motion/tokens";
import { cn } from "@/lib/utils";

type RiseInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Entrance motion that keeps opacity at 1 so LCP candidates stay visible.
 */
export function RiseIn({ children, className, delay = 0 }: RiseInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 1, y: fadeInTokens.y, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: fadeInTokens.duration,
        delay,
        ease: motionEase,
      }}
    >
      {children}
    </motion.div>
  );
}
