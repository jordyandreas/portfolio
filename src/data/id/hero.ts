import { siteConfig } from "@/config/site";
import type { HeroContent } from "@/data/types/hero";

export const heroContent: HeroContent = {
  eyebrow: "Senior Frontend Engineer",
  headline:
    "Membangun antarmuka produk yang jelas, skalabel, dan dirancang untuk performa.",
  primaryCta: {
    label: "Lihat Proyek",
    href: "/projects",
  },
  secondaryCta: {
    label: "Resume Saya",
    href: siteConfig.resume ?? "/resume/Jordy_Andreas_Senior_Frontend_Engineer.pdf",
    external: true,
  },
  portrait: {
    src: "/profile/jordy-andreas-new.jpg",
    alt: "Potret Jordy Andreas",
  },
};
