"use client";

import {
  Accessibility,
  BadgeCheck,
  Boxes,
  CreditCard,
  Database,
  Eye,
  FileInput,
  FlaskConical,
  Gauge,
  GitPullRequest,
  HardDrive,
  KeyRound,
  Layers,
  LayoutTemplate,
  MessageSquare,
  MousePointer2,
  Network,
  Palette,
  Play,
  Puzzle,
  Radio,
  RefreshCw,
  Server,
  Share2,
  ShieldCheck,
  Smartphone,
  Video,
  type LucideIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import StackIcon, { type IconName } from "tech-stack-icons";

import type { CapabilityTechnologyIcon } from "@/data/capabilities";
import { cn } from "@/lib/utils";

function useStackIconVariant(): "light" | "dark" {
  const { resolvedTheme } = useTheme();

  return resolvedTheme === "dark" ? "dark" : "light";
}

const brandIconNames: Partial<Record<CapabilityTechnologyIcon, IconName>> = {
  nextjs: "nextjs2",
  react: "react",
  reactNative: "reactnative",
  typescript: "typescript",
  tanstackQuery: "reactquery",
  zustand: "zustand",
  redux: "redux",
  graphql: "graphql",
  tailwind: "tailwindcss",
  shadcn: "shadcnui",
  expo: "expo",
  supabase: "supabase",
  firebase: "firebase",
  zod: "zod",
  ionic: "ionic",
  angular: "angular",
};

const lucideTechIcons: Partial<
  Record<CapabilityTechnologyIcon, LucideIcon>
> = {
  featureModules: Boxes,
  renderingStrategy: Layers,
  codeSplitting: Puzzle,
  coreWebVitals: Gauge,
  rest: Network,
  designCollaboration: Palette,
  iteration: RefreshCw,
  codeReview: GitPullRequest,
  componentLibraries: Boxes,
  visualHierarchy: Eye,
  microInteractions: MousePointer2,
  accessibility: Accessibility,
  responsiveLayout: LayoutTemplate,
  reactHookForm: FileInput,
};

/** Map experience/project technology labels → tech-stack-icons names */
const technologyLabelToStackIcon: Record<string, IconName> = {
  "Next.js": "nextjs2",
  React: "react",
  "React Native": "reactnative",
  TypeScript: "typescript",
  JavaScript: "js",
  "TanStack Query": "reactquery",
  Zustand: "zustand",
  Redux: "redux",
  GraphQL: "graphql",
  "Tailwind CSS": "tailwindcss",
  "ShadCN UI": "shadcnui",
  "shadcn/ui": "shadcnui",
  Ionic: "ionic",
  Angular: "angular",
  RxJS: "rxjs",
  GitLab: "gitlab",
  Github: "github",
  Git: "git",
  "React Navigation": "reactnavigation",
  "OAuth 2.0": "oauth",
  "Framer Motion": "framer",
  Expo: "expo",
  "Node.js": "nodejs",
  "Express.js": "expressjs",
  Go: "go",
  Supabase: "supabase",
  Firebase: "firebase",
  MUI: "materialui",
  Zod: "zod",
  Jest: "jest",
  Turborepo: "turborepo",
  "Radix UI": "radixui",
};

/** Labels without a brand mark in tech-stack-icons */
const technologyLabelToLucide: Record<string, LucideIcon> = {
  "REST API": Network,
  Axios: Network,
  JWT: KeyRound,
  Capacitor: Smartphone,
  WebSockets: Radio,
  WebSocket: Radio,
  Gin: Server,
  LowDB: Database,
  "React Hook Form": FileInput,
  NextAuth: ShieldCheck,
  "Agora RTC": Video,
  "Agora Chat": MessageSquare,
  Joi: BadgeCheck,
  AsyncStorage: HardDrive,
  "React Context": Share2,
  "Payment Gateway": CreditCard,
  Supertest: FlaskConical,
  Lottie: Play,
};

type CapabilityTechIconProps = {
  name: CapabilityTechnologyIcon;
  className?: string;
};

export function CapabilityTechIcon({
  name,
  className,
}: CapabilityTechIconProps) {
  const brandName = brandIconNames[name];
  const variant = useStackIconVariant();

  if (brandName) {
    return (
      <StackIcon
        name={brandName}
        variant={variant}
        className={cn("size-3.5 shrink-0", className)}
      />
    );
  }

  const Icon = lucideTechIcons[name];
  if (!Icon) {
    return null;
  }

  return (
    <Icon
      aria-hidden
      className={cn("size-3.5 shrink-0", className)}
      strokeWidth={1.75}
    />
  );
}

type TechnologyLabelIconProps = {
  label: string;
  className?: string;
};

export function TechnologyLabelIcon({
  label,
  className,
}: TechnologyLabelIconProps) {
  const stackName = technologyLabelToStackIcon[label];
  const variant = useStackIconVariant();

  if (stackName) {
    return (
      <StackIcon
        name={stackName}
        variant={variant}
        className={cn("size-3.5 shrink-0", className)}
      />
    );
  }

  const LucideFallback = technologyLabelToLucide[label];
  if (!LucideFallback) {
    return null;
  }

  return (
    <LucideFallback
      aria-hidden
      className={cn("size-3.5 shrink-0", className)}
      strokeWidth={1.75}
    />
  );
}
