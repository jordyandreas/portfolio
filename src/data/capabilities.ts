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
  | "responsiveLayout";

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
  heading: "Capabilities",
  description:
    "Engineering strengths applied across product work, with technologies as supporting evidence rather than the headline.",
  groups: [
    {
      title: "Frontend Architecture",
      description:
        "Structuring modular, maintainable interface systems that scale with product complexity.",
      technologies: [
        { name: "Next.js", icon: "nextjs" },
        { name: "React", icon: "react" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Feature modules", icon: "featureModules" },
      ],
    },
    {
      title: "Performance & UX",
      description:
        "Improving load behavior, interaction quality, and perceived speed without sacrificing clarity.",
      technologies: [
        { name: "Rendering strategy", icon: "renderingStrategy" },
        { name: "Code splitting", icon: "codeSplitting" },
        { name: "Core Web Vitals", icon: "coreWebVitals" },
      ],
    },
    {
      title: "State & Data",
      description:
        "Handling client state, server data, and async flows with predictable patterns.",
      technologies: [
        { name: "TanStack Query", icon: "tanstackQuery" },
        { name: "Zustand", icon: "zustand" },
        { name: "Redux", icon: "redux" },
        { name: "GraphQL", icon: "graphql" },
        { name: "REST", icon: "rest" },
      ],
    },
    {
      title: "Product Delivery",
      description:
        "Turning product and design intent into shippable interfaces with clear trade-offs.",
      technologies: [
        { name: "Design collaboration", icon: "designCollaboration" },
        { name: "Iteration", icon: "iteration" },
        { name: "Code review", icon: "codeReview" },
      ],
    },
    {
      title: "Interface Systems",
      description:
        "Building reusable UI foundations that keep product surfaces consistent and fast to extend.",
      technologies: [
        { name: "ShadCN UI", icon: "shadcn" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Component libraries", icon: "componentLibraries" },
      ],
    },
    {
      title: "UI Craft",
      description:
        "Obsessing over the details that make interfaces feel clear, considered, and good to use.",
      technologies: [
        { name: "Visual hierarchy", icon: "visualHierarchy" },
        { name: "Micro-interactions", icon: "microInteractions" },
        { name: "Accessibility", icon: "accessibility" },
        { name: "Responsive layout", icon: "responsiveLayout" },
      ],
    },
  ],
};

/** Flat tool list for /about "What I build with" — keep in sync with brand tools above. */
export const featuredTechStack: CapabilityTechnology[] = [
  { name: "Next.js", icon: "nextjs" },
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React Native", icon: "reactNative" },
  { name: "TanStack Query", icon: "tanstackQuery" },
  { name: "Zustand", icon: "zustand" },
  { name: "Redux", icon: "redux" },
  { name: "GraphQL", icon: "graphql" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "ShadCN UI", icon: "shadcn" },
];
