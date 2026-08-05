import { siteConfig } from "@/config/site";

export type ContactAction = {
  id: "email" | "linkedin" | "github";
  label: string;
  href: string;
  external?: boolean;
  ariaLabel: string;
};

export type ContactFormCopy = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
  submitHint: string;
};

export type ContactCtaContent = {
  headingLines: [string, string];
  prompt: string;
  ctaLabel: string;
  href: string;
};

export type ContactContent = {
  headingLines: [string, string];
  lead: string;
  points: string[];
  location: string;
  actions: ContactAction[];
  form: ContactFormCopy;
};

export const contactCtaContent: ContactCtaContent = {
  headingLines: ["Ready To Get", "Started?"],
  prompt: "You Know About Me, Let's Talk About You.",
  ctaLabel: "Get In Touch",
  href: "/contact",
};

export const contactContent: ContactContent = {
  headingLines: ["Tell me what", "you’re building."],
  lead: "I’m open to freelance projects, product partnerships, and roles where craft and ownership matter-spanning polished UI and the backend pieces required to ship.",
  points: [
    "Frontend systems and fullstack product delivery (APIs, auth, integrations)",
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
