"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { fadeInTokens, motionEase } from "@/components/motion/tokens";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: fadeInTokens.y }}
      animate={{ opacity: 1, y: 0 }}
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
