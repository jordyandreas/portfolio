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
