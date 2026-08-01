export type CapabilityTechnologyIcon =
  | "nextjs"
  | "react"
  | "reactNative"
  | "typescript"
  | "featureModules"
  | "renderingStrategy"
  | "codeSplitting"
  | "coreWebVitals"
  | "tanstackQuery"
  | "zustand"
  | "redux"
  | "graphql"
  | "rest"
  | "designCollaboration"
  | "iteration"
  | "codeReview"
  | "shadcn"
  | "tailwind"
  | "componentLibraries"
  | "visualHierarchy"
  | "microInteractions"
  | "accessibility"
  | "responsiveLayout"
  | "expo"
  | "supabase"
  | "firebase"
  | "zod"
  | "reactHookForm"
  | "ionic"
  | "angular";

export type CapabilityTechnology = {
  name: string;
  icon: CapabilityTechnologyIcon;
};

export type CapabilityGroup = {
  title: string;
  description: string;
  technologies: CapabilityTechnology[];
};

export type CapabilitiesContent = {
  heading: string;
  description: string;
  groups: CapabilityGroup[];
};

export const capabilitiesContent: CapabilitiesContent = {
  heading: "Core Strengths",
  description:
    "Proven product engineering strengths drawn from the web, mobile, and realtime systems I have shipped across recent experience and portfolio work.",
  groups: [
    {
      title: "Frontend Platforms",
      description:
        "Building maintainable product interfaces across modern web stacks, from marketing surfaces to complex dashboard and app experiences.",
      technologies: [
        { name: "Next.js", icon: "nextjs" },
        { name: "React", icon: "react" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Feature modules", icon: "featureModules" },
      ],
    },
    {
      title: "State, Data & APIs",
      description:
        "Managing server data, client state, and API-heavy workflows with patterns that stay predictable as products grow.",
      technologies: [
        { name: "TanStack Query", icon: "tanstackQuery" },
        { name: "Zustand", icon: "zustand" },
        { name: "Redux", icon: "redux" },
        { name: "GraphQL", icon: "graphql" },
        { name: "REST", icon: "rest" },
      ],
    },
    {
      title: "Forms, Validation & Auth",
      description:
        "Shipping product flows that need reliable input handling, validation, and protected access across dashboards and account experiences.",
      technologies: [
        { name: "React Hook Form", icon: "reactHookForm" },
        { name: "Zod", icon: "zod" },
        { name: "ShadCN UI", icon: "shadcn" },
        { name: "Accessibility", icon: "accessibility" },
      ],
    },
    {
      title: "Realtime & Backend Integration",
      description:
        "Connecting interfaces to live product systems, from realtime media/chat experiences to backend-integrated operational dashboards.",
      technologies: [
        { name: "Firebase", icon: "firebase" },
        { name: "Supabase", icon: "supabase" },
        { name: "Rendering strategy", icon: "renderingStrategy" },
        { name: "Core Web Vitals", icon: "coreWebVitals" },
      ],
    },
    {
      title: "Mobile Delivery",
      description:
        "Delivering cross-platform product experiences across React Native, Expo, and earlier hybrid-mobile stacks.",
      technologies: [
        { name: "React Native", icon: "reactNative" },
        { name: "Expo", icon: "expo" },
        { name: "Ionic", icon: "ionic" },
        { name: "Angular", icon: "angular" },
      ],
    },
    {
      title: "Interface Quality",
      description:
        "Keeping shipped interfaces performant, consistent, and pleasant to use through reusable systems and careful product polish.",
      technologies: [
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Component libraries", icon: "componentLibraries" },
        { name: "Visual hierarchy", icon: "visualHierarchy" },
        { name: "Micro-interactions", icon: "microInteractions" },
        { name: "Responsive layout", icon: "responsiveLayout" },
      ],
    },
  ],
};

/** Flat tool list for /about "What I build with" - keep in sync with brand tools above. */
export const featuredTechStack: CapabilityTechnology[] = [
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "ShadCN UI", icon: "shadcn" },
  { name: "TanStack Query", icon: "tanstackQuery" },
  { name: "Zustand", icon: "zustand" },
  { name: "React Hook Form", icon: "reactHookForm" },
  { name: "Zod", icon: "zod" },
  { name: "Firebase", icon: "firebase" },
  { name: "React Native", icon: "reactNative" },
  { name: "Redux", icon: "redux" },
  { name: "GraphQL", icon: "graphql" },
  { name: "REST", icon: "rest" },
  { name: "Supabase", icon: "supabase" },
  { name: "Expo", icon: "expo" },
  { name: "Ionic", icon: "ionic" },
  { name: "Angular", icon: "angular" },
];
