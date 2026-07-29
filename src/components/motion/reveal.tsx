"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import {
  motionEase,
  revealTokens,
  revealViewport,
  type RevealIntensity,
} from "@/components/motion/tokens";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  intensity?: RevealIntensity;
};

export function Reveal({
  children,
  className,
  intensity = "medium",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const tokens = revealTokens[intensity];

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: tokens.y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={revealViewport}
      transition={{
        duration: tokens.duration,
        ease: motionEase,
      }}
    >
      {children}
    </motion.div>
  );
}
