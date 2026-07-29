export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  outcomes: string[];
  technologies: string[];
};

export type ExperienceContent = {
  heading: string;
  entries: ExperienceEntry[];
};

export const experienceContent: ExperienceContent = {
  heading: "Experiences",
  entries: [
    {
      company: "PT. Namea Kreasi Teknologi",
      role: "Senior Frontend Developer",
      period: "August 2023 – Present",
      location: "Jakarta, Indonesia",
      outcomes: [
        "Led frontend work for live sports, analytics dashboards, video call systems, and social-content platforms.",
        "Improved page load performance by up to 60% through component optimization and scalable UI patterns.",
        "Established modular architecture and review practices that improved long-term maintainability and delivery consistency.",
      ],
      technologies: [
        "Next.js",
        "React Native",
        "TypeScript",
        "TanStack Query",
        "Redux",
        "Zustand",
        "ShadCN UI",
        "Tailwind CSS",
      ],
    },
    {
      company: "PT. Elektronik Distribusi Otomatisasi Terkemuka (eDOT)",
      role: "Mobile Developer",
      period: "July 2022 – August 2023",
      location: "Bandung, Indonesia",
      outcomes: [
        "Contributed to eDOT SuperApp across eChat, eShop, and shared digital services.",
        "Implemented SSO authentication and centralized account management for seamless cross-service access.",
        "Reduced average load time by 30% and increased app stability by 35% through state, query, and error-handling improvements.",
      ],
      technologies: [
        "React Native",
        "TypeScript",
        "Redux",
        "GraphQL",
        "Axios",
        "OAuth 2.0",
        "JWT",
        "React Navigation",
        "Git",
      ],
    },
    {
      company: "PT. Una Darma Indonesia",
      role: "Mobile Developer",
      period: "November 2021 – July 2022",
      location: "Jakarta, Indonesia",
      outcomes: [
        "Deployed Asurisan Dewata and Asurisan Pro platforms serving 4,000+ SMEs nationwide.",
        "Integrated Zakat donation features in collaboration with Neo Bank to expand service reach.",
      ],
      technologies: [
        "Ionic",
        "Angular",
        "TypeScript",
        "RxJS",
        "REST API",
        "Capacitor",
        "GitLab",
      ],
    },
    {
      company: "PT. Maybank Indonesia Finance",
      role: "Mobile Developer",
      period: "March 2020 – September 2021",
      location: "Jakarta, Indonesia",
      outcomes: [
        "Raised the app rating from 3.0 to 4.5 stars and grew active users by 10,000+.",
        "Reduced operational costs by 70% and cut user wait times by 50% through feature optimization and process automation.",
        "Designed a component-based system that reduced development time by 30%.",
      ],
      technologies: [
        "React Native",
        "JavaScript",
        "Redux",
        "React Navigation",
        "REST API",
        "Github",
      ],
    },
  ],
};

export const experienceEntries = experienceContent.entries;
