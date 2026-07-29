export type ProjectStatus = "completed" | "in-progress" | "archived";

export type ProjectPlatform = "web" | "mobile";

export type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  domain: string;
  role: string;
  context: string;
  challenge: string;
  contribution: string;
  outcomes: string[];
  technologies: string[];
  highlights: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  status: ProjectStatus;
  platform: ProjectPlatform;
  image: string | null;
  imageAlt: string;
  order: number;
};

export const projects: Project[] = [
  {
    id: "lxscore-live-sport-website",
    slug: "lxscore-live-sport-website",
    title: "LXScore — Live Sport Website",
    shortDescription:
      "A live sports website providing real-time match scores and updates under peak traffic.",
    overview:
      "Developed a live sports website providing real-time match scores and updates. Focused on building responsive, high-performance front-end components and optimizing live data rendering to ensure a smooth experience during peak traffic.",
    domain: "Sports / Live Data",
    role: "Frontend Engineer — live interface delivery and performance under realtime load",
    context:
      "A sports audience product that needed reliable live scores and updates when traffic and refresh volume spike.",
    challenge:
      "Keep live score rendering responsive and stable while handling realtime updates at peak load.",
    contribution:
      "Built responsive, high-performance frontend components and optimized live data rendering for realtime match updates.",
    outcomes: [
      "Delivered a live sports experience with realtime match scores and updates.",
      "Improved perceived responsiveness during peak traffic through frontend rendering optimizations.",
      "Established reusable interface patterns suited to high-frequency live data surfaces.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets"],
    highlights: [
      "Built real-time match score and update surfaces for live sports viewing.",
      "Optimized live data rendering for smoother peak-traffic experiences.",
      "Shipped responsive, high-performance frontend components for sports audiences.",
    ],
    githubUrl: null,
    liveUrl: "https://lxscore.com",
    status: "completed",
    platform: "web",
    image: "/projects/lx-score-website.png",
    imageAlt: "LXScore live sports website interface screenshot",
    order: 1,
  },
  {
    id: "titantaiment-short-video-platform",
    slug: "titantaiment-short-video-platform",
    title: "Titantaiment — Short Video Streaming Platform",
    shortDescription:
      "A TikTok-like short-video web platform with vertical playback, engagement, and infinite feed flows.",
    overview:
      "Titantaiment is a modern short-video streaming platform built to replicate the experience of TikTok, featuring seamless vertical video playback, interactive engagement, and dynamic feed algorithms. The platform is designed with a focus on speed, scalability, and user experience, enabling creators to upload and share short videos while viewers can scroll infinitely, like, comment, and follow in real-time.",
    domain: "Media / Social Video",
    role: "Frontend Engineer — short-video playback and engagement interface delivery",
    context:
      "A consumer streaming product that needed TikTok-like browsing, creator publishing, and interactive engagement on the web.",
    challenge:
      "Deliver fluid vertical video playback and infinite-feed interaction without sacrificing speed or clarity.",
    contribution:
      "Built the streaming frontend around vertical playback, infinite scroll feeds, and realtime engagement surfaces.",
    outcomes: [
      "Shipped a short-video web experience with seamless vertical playback.",
      "Enabled interactive engagement flows for like, comment, and follow interactions.",
      "Structured frontend patterns for scalable feed and creator content surfaces.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI"],
    highlights: [
      "Built a TikTok-like short-video streaming experience for the web.",
      "Focused on speed, scalability, and infinite-feed user experience.",
      "Supported creator publishing alongside realtime viewer engagement.",
    ],
    githubUrl: null,
    liveUrl: null,
    status: "completed",
    platform: "web",
    image: "/projects/titantaiment-website.png",
    imageAlt: "Titantaiment short video streaming platform screenshot",
    order: 2,
  },
  {
    id: "digica-academy-lms",
    slug: "digica-academy-lms",
    title: "Digica Academy LMS",
    shortDescription:
      "A Learning Management System frontend for Digica Academy's online learning programs.",
    overview:
      "Built the frontend of a Learning Management System for Digica Academy. Focused on reusable and modular UI components, client-side data handling with mock data and local storage, and responsive interfaces designed to enhance the learning experience.",
    domain: "EdTech / Learning Platform",
    role: "Frontend Engineer — ownership of LMS UI architecture and feature delivery",
    context:
      "An online learning platform that needed a maintainable frontend foundation for course discovery, progress, and day-to-day learning flows.",
    challenge:
      "Ship a modular LMS interface that could grow with new learning features without becoming fragile or inconsistent.",
    contribution:
      "Designed and implemented a reusable UI system, client-side data handling patterns, and responsive learning interfaces for Digica Academy.",
    outcomes: [
      "Established a modular component foundation for scalable LMS feature development.",
      "Delivered responsive learning interfaces that keep course content easy to navigate across devices.",
      "Introduced client-side data patterns that support local persistence and iterative frontend delivery.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI"],
    highlights: [
      "Developed the frontend of a Learning Management System for an online learning platform.",
      "Built reusable and modular UI components to support scalable feature development.",
      "Implemented client-side data handling using mock data and local storage.",
      "Designed responsive and user-friendly interfaces to enhance the learning experience.",
    ],
    githubUrl: "https://github.com/jordyandreas/digica-academy-lms",
    liveUrl: "https://digica-academy-lms.vercel.app",
    status: "completed",
    platform: "web",
    image: "/projects/digica-academy-lms.png",
    imageAlt: "Digica Academy LMS product interface screenshot",
    order: 3,
  },
  {
    id: "ulaman-bali-hotel-website",
    slug: "ulaman-bali-hotel-website",
    title: "Ulaman Bali Hotel Website",
    shortDescription:
      "A modern, responsive hotel landing page inspired by Ulaman Eco Resort.",
    overview:
      "Developed a modern, responsive landing page inspired by Ulaman Eco Resort. Focused on elegant UI, smooth animations, and optimized performance through reusable components and clean architecture.",
    domain: "Hospitality / Marketing Site",
    role: "Frontend Engineer — end-to-end landing page implementation",
    context:
      "A hospitality brand experience that needed a premium, responsive landing page with polished motion and clean architecture.",
    challenge:
      "Balance elegant visual presentation with performant, reusable frontend patterns.",
    contribution:
      "Built the landing page UI, animation layer, and component structure with a focus on clarity and maintainability.",
    outcomes: [
      "Delivered a premium, responsive hospitality landing experience.",
      "Combined polished motion with reusable components and clean architecture.",
      "Kept the frontend structured for continued iteration without sacrificing performance.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Developed a modern, responsive landing page inspired by Ulaman Eco Resort.",
      "Focused on elegant UI and smooth animations to deliver a premium feel.",
      "Optimized performance through reusable components and clean architecture.",
    ],
    githubUrl: "https://github.com/jordyandreas/ulaman-website-project",
    liveUrl: "https://ulaman-bali-hotel.vercel.app",
    status: "completed",
    platform: "web",
    image: "/projects/ulaman-bali-hotel-website.png",
    imageAlt: "Ulaman Bali Hotel Website product interface screenshot",
    order: 4,
  },
  {
    id: "digica-finance-dashboard",
    slug: "digica-finance-dashboard",
    title: "Digica Finance Dashboard",
    shortDescription:
      "A functional prototype featuring search, sorting, and data handling with clean, modular design.",
    overview:
      "Built a functional prototype with search, sorting, and data handling features. Focused on clean UI and modular component design for long-term maintainability.",
    domain: "FinTech / Dashboard",
    role: "Frontend Engineer — dashboard prototype and data interaction patterns",
    context:
      "A finance-facing dashboard prototype that needed clean data interaction patterns and maintainable UI structure.",
    challenge:
      "Prototype search, sorting, and data handling without sacrificing modular design.",
    contribution:
      "Implemented the dashboard interface and modular component patterns for data-driven workflows.",
    outcomes: [
      "Delivered a functional dashboard prototype with search and sorting flows.",
      "Established modular UI patterns suited to ongoing product iteration.",
      "Kept data-handling interactions clear and maintainable for future expansion.",
    ],
    technologies: ["React Native", "Redux", "Axios", "REST API"],
    highlights: [
      "Built a functional prototype with search, sorting, and data handling features.",
      "Focused on clean UI and modular component design for maintainability.",
    ],
    githubUrl: "https://github.com/jordyandreas/digica-finance-dashboard",
    liveUrl: "https://digica-academy.vercel.app",
    status: "completed",
    platform: "web",
    image: "/projects/digica-finance-dashboard.png",
    imageAlt: "Digica Finance Dashboard product interface screenshot",
    order: 5,
  },
  {
    id: "maybank-finance-app-v2",
    slug: "maybank-finance-app-v2",
    title: "Maybank Finance App — Revamp to V2",
    shortDescription:
      "A V2 revamp of the Maybank Finance app, expanding delivery from Android-only to iOS as well.",
    overview:
      "Revamped Maybank Finance Apps to version 2.0 so the product could be used on iOS, after previously supporting Android only. Focused on React Native delivery and shared mobile patterns across platforms.",
    domain: "FinTech / Consumer Finance",
    role: "Mobile Developer — V2 revamp and cross-platform delivery",
    context:
      "A consumer finance app that needed a V2 rebuild and iOS support while preserving Android continuity.",
    challenge:
      "Bring a previously Android-only finance app to iOS through a shared React Native architecture.",
    contribution:
      "Contributed to the V2 revamp with React Native and Redux-based mobile patterns for iOS and Android delivery.",
    outcomes: [
      "Expanded Maybank Finance app availability from Android-only to iOS.",
      "Supported a V2 product revamp with shared React Native architecture.",
      "Strengthened cross-platform delivery consistency for consumer finance workflows.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "React Navigation",
      "REST API",
    ],
    highlights: [
      "Revamped Maybank Finance Apps to version 2.0.",
      "Extended the product from Android-only to iOS support.",
      "Delivered shared mobile interface patterns with React Native.",
    ],
    githubUrl: null,
    liveUrl: null,
    status: "completed",
    platform: "mobile",
    image: "/projects/maybank-finance-apps.png",
    imageAlt: "Maybank Finance App V2 mobile interface screenshot",
    order: 1,
  },
  {
    id: "maybank-vospay-loan-app",
    slug: "maybank-vospay-loan-app",
    title: "Vospay — Loan Apps Internal Maybank",
    shortDescription:
      "An internal installment management app for Maybank employees and customers.",
    overview:
      "An internal installment management app for Maybank employees and customers. Provides features for installment applications, loan simulations, and payment tracking.",
    domain: "FinTech / Internal Tools",
    role: "Mobile Developer — installment and loan workflow interfaces",
    context:
      "An internal Maybank product that needed clear flows for installment applications, loan simulations, and payment tracking.",
    challenge:
      "Deliver reliable internal mobile workflows for installment applications and payment tracking.",
    contribution:
      "Built React Native interfaces for loan simulation, installment applications, and payment tracking.",
    outcomes: [
      "Delivered an internal installment management experience for Maybank users.",
      "Supported loan simulations and payment tracking in a shared mobile app.",
      "Kept installment application flows clear and maintainable for internal use.",
    ],
    technologies: [
      "React Native",
      "JavaScript",
      "Redux",
      "React Navigation",
      "REST API",
    ],
    highlights: [
      "Built installment application, loan simulation, and payment tracking features.",
      "Supported internal Maybank employee and customer installment workflows.",
      "Delivered the experience with React Native and JavaScript.",
    ],
    githubUrl: null,
    liveUrl: null,
    status: "completed",
    platform: "mobile",
    image: "/projects/maybank-vospay-apps.png",
    imageAlt: "Vospay Maybank internal loan app screenshot",
    order: 2,
  },
];

export function getProjectsByPlatform(platform: ProjectPlatform): Project[] {
  return projects
    .filter((project) => project.platform === platform)
    .sort((projectA, projectB) => projectA.order - projectB.order);
}

export function getPreviewProjects(
  platform: ProjectPlatform,
  limit = 3,
): Project[] {
  return getProjectsByPlatform(platform).slice(0, limit);
}
