import {
  featuredTechStack,
  type CapabilityTechnology,
} from "@/data/capabilities";

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

export const aboutContent: AboutContent = {
  heading: "About Me",
  paragraphs: [
    "I'm a Senior Frontend Engineer based in Jakarta, building product interfaces that are clear, scalable, and engineered to perform for real-world teams.",
    "I currently lead frontend delivery across high-traffic web and product platforms, with a focus on performance, maintainable systems, and collaboration that turns complex requirements into polished user experiences.",
  ],
  stats: [
    { value: "6+", label: "Years of experience" },
    { value: "12+", label: "Completed projects" },
    { value: "5+", label: "Clients worldwide" },
  ],
  expertiseHeading: "Expertise",
  expertise: [
    {
      title: "Web Development",
      description: "Clear, scalable product interfaces across modern web platforms.",
      icon: "globe",
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform delivery for consumer and multi-service products.",
      icon: "smartphone",
    },
    {
      title: "Scalable Product Systems",
      description:
        "Modular frontend architecture, performance optimization, and realtime product surfaces under real traffic.",
      icon: "blocks",
    },
  ],
};

export const aboutPageContent: AboutPageContent = {
  heading: "Jordy Andreas",
  paragraphs: [
    "I turn complex product requirements into clear, performant interfaces people can rely on. Whether it's shaping web platforms, shipping mobile experiences, or tightening systems under real traffic-I bring structure to the craft.",
    "Based in Jakarta, I care about maintainable frontend architecture, thoughtful collaboration, and work that still holds up long after launch.",
  ],
  techStackHeading: "What I build with",
  techStack: featuredTechStack,
  expertiseHeading: "Expertise",
  expertise: [
    {
      title: "Web Development",
      description: "Clear, scalable product interfaces across modern web platforms.",
      icon: "globe",
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform delivery for consumer and multi-service products.",
      icon: "smartphone",
    },
    {
      title: "Scalable Product Systems",
      description:
        "Modular frontend architecture, performance optimization, and realtime product surfaces under real traffic.",
      icon: "blocks",
    },
  ],
};
