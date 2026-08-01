import { siteConfig } from "@/config/site";
import type { HeroContent } from "@/data/types/hero";

export const heroContent: HeroContent = {
  eyebrow: "Senior Frontend Engineer",
  headline:
    "Building product interfaces that are clear, scalable, and engineered to perform.",
  primaryCta: {
    label: "View Projects",
    href: "/projects",
  },
  secondaryCta: {
    label: "My Resume",
    href: siteConfig.resume ?? "/resume/Jordy_Andreas_Senior_Frontend_Engineer.pdf",
    external: true,
  },
  portrait: {
    src: "/profile/jordy-andreas-new.jpg",
    alt: "Portrait of Jordy Andreas",
  },
};
