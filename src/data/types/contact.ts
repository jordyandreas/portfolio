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
