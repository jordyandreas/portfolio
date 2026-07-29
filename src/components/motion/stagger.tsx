"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { motionEase, staggerTokens } from "@/components/motion/tokens";
import { cn } from "@/lib/utils";

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
};

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

const groupVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: staggerTokens.delayChildren,
      staggerChildren: staggerTokens.staggerChildren,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: staggerTokens.y,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: staggerTokens.duration,
      ease: motionEase,
    },
  },
};

export function StaggerGroup({ children, className }: StaggerGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <ul className={className}>{children}</ul>;
  }

  return (
    <motion.ul
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      variants={groupVariants}
    >
      {children}
    </motion.ul>
  );
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <li className={className}>{children}</li>;
  }

  return (
    <motion.li className={cn(className)} variants={itemVariants}>
      {children}
    </motion.li>
  );
}
