import type { CapabilityTechnology } from "@/data/types/capabilities";

export type AboutStat = {
  value: string;
  label: string;
};

export type AboutExpertiseIcon = "globe" | "smartphone" | "blocks";

export type AboutExpertise = {
  title: string;
  description: string;
  icon: AboutExpertiseIcon;
};

/** Home page About section content */
export type AboutContent = {
  heading: string;
  paragraphs: string[];
  stats: AboutStat[];
  expertiseHeading: string;
  expertise: AboutExpertise[];
};

/** Dedicated /about page content */
export type AboutPageContent = {
  heading: string;
  paragraphs: string[];
  techStackHeading: string;
  techStack: CapabilityTechnology[];
  expertiseHeading: string;
  expertise: AboutExpertise[];
};
