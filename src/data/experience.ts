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
      role: "Senior Frontend Engineer",
      period: "August 2023 – Present",
      location: "Tangerang Selatan, Indonesia",
      outcomes: [
        "Led frontend delivery across product lines with 2 engineers - covering live sports, short-video streaming, video-call systems, and internal ops dashboards on web and mobile.",
        "Improved page load performance by up to 60% by optimizing reusable web and mobile components and scalable UI patterns.",
        "Established modular frontend architecture across products, including a Turborepo setup with shared UI and auth for Admin, Agency, and Referral dashboards.",
        "Built realtime experiences for talent/host and caller flows using Agora RTC/Chat, WebSocket signaling, and Firebase - from KYC onboarding through live sessions, chat, and earnings/withdrawals.",
        "Mentored 2 junior engineers through code reviews and shared standards, raising code quality and keeping frontend delivery aligned across projects.",
        "Partnered with design and backend to keep UX and performance standards consistent across Namea’s web and mobile surfaces.",
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
        "WebSockets",
        "Turborepo",
        "MUI",
        "NextAuth",
        "JWT",
        "React Hook Form",
        "Zod",
        "Axios",
        "Agora RTC",
        "Agora Chat",
        "Firebase",
        "Payment Gateway",
        "React Navigation",
        "Github",
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
      location: "Tangerang Selatan, Indonesia",
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
      location: "Tangerang Selatan, Indonesia",
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
