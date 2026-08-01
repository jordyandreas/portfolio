import { siteConfig } from "@/config/site";
import type { ContactContent, ContactCtaContent } from "@/data/types/contact";

export const contactCtaContent: ContactCtaContent = {
  headingLines: ["Ready To Get", "Started?"],
  prompt: "You Know About Me, Let's Talk About You.",
  ctaLabel: "Get In Touch",
  href: "/contact",
};

export const contactContent: ContactContent = {
  headingLines: ["Tell me what", "you’re building."],
  lead: "I’m open to new opportunities - freelance projects, product partnerships, and senior frontend roles where craft and ownership matter.",
  points: [
    "Freelance product UI & frontend systems",
    "Full-time or contract opportunities",
    "Clear briefs and thoughtful conversations welcome",
  ],
  location: siteConfig.location,
  actions: [
    {
      id: "email",
      label: "Email",
      href: `mailto:${siteConfig.email}`,
      ariaLabel: `Email ${siteConfig.name} at ${siteConfig.email}`,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: siteConfig.linkedin,
      external: true,
      ariaLabel: `LinkedIn profile for ${siteConfig.name}`,
    },
    {
      id: "github",
      label: "GitHub",
      href: siteConfig.github,
      external: true,
      ariaLabel: `GitHub profile for ${siteConfig.name}`,
    },
  ],
  form: {
    nameLabel: "Name",
    namePlaceholder: "Your Name",
    emailLabel: "Email",
    emailPlaceholder: "email@example.com",
    subjectLabel: "Subject",
    subjectPlaceholder: "Project Subject",
    messageLabel: "Message",
    messagePlaceholder: "Tell me about your project...",
    submitLabel: "Send Message",
    submitHint: "Opens WhatsApp with your message ready to send.",
  },
};
