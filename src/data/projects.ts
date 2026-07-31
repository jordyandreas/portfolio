export type ProjectStatus = "completed" | "in-progress" | "archived";

export type ProjectPlatform = "web" | "mobile" | "backend";

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
  showcaseImages: Array<{
    src: string;
    alt: string;
  }>;
  order: number;
};

export const projects: Project[] = [
  {
    id: "lxscore-live-sport-website",
    slug: "lxscore-live-sport-website",
    title: "LXScore - Live Sport Website",
    shortDescription:
      "A live sports website providing real-time match scores and updates under peak traffic.",
    overview:
      "Developed a live sports website providing real-time match scores and updates. Focused on building responsive, high-performance front-end components and optimizing live data rendering to ensure a smooth experience during peak traffic.",
    domain: "Sports / Live Data",
    role: "Frontend Engineer - live interface delivery and performance under realtime load",
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
    showcaseImages: [
      {
        src: "/projects/lxscore-live-sport-website/01-cover.png",
        alt: "LXScore - Live Sport Website showcase screenshot 1",
      },
    ],
    order: 4,
  },
  {
    id: "titantaiment-short-video-platform",
    slug: "titantaiment-short-video-platform",
    title: "Titantaiment - Short Video Streaming Platform",
    shortDescription:
      "A TikTok-like short-video web platform with vertical playback, engagement, and infinite feed flows.",
    overview:
      "Titantaiment is a modern short-video streaming platform built to replicate the experience of TikTok, featuring seamless vertical video playback, interactive engagement, and dynamic feed algorithms. The platform is designed with a focus on speed, scalability, and user experience, enabling creators to upload and share short videos while viewers can scroll infinitely, like, comment, and follow in real-time.",
    domain: "Media / Social Video",
    role: "Frontend Engineer - short-video playback and engagement interface delivery",
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
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Zustand",
    ],
    highlights: [
      "Built a TikTok-like short-video streaming experience for the web.",
      "Focused on speed, scalability, and infinite-feed user experience.",
      "Supported creator publishing alongside realtime viewer engagement.",
    ],
    githubUrl: null,
    liveUrl: null,
    status: "completed",
    platform: "web",
    showcaseImages: [
      {
        src: "/projects/titantaiment-short-video-platform/01-cover.png",
        alt: "Titantaiment - Short Video Streaming Platform showcase screenshot 1",
      },
    ],
    order: 10,
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
    role: "Frontend Engineer - ownership of LMS UI architecture and feature delivery",
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
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form",
      "Zod",
    ],
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
    showcaseImages: [
      {
        src: "/projects/digica-academy-lms/01-cover.png",
        alt: "Digica Academy LMS showcase screenshot 1",
      },
      {
        src: "/projects/digica-academy-lms/02-showcase.png",
        alt: "Digica Academy LMS showcase screenshot 2",
      },
      {
        src: "/projects/digica-academy-lms/03-showcase.png",
        alt: "Digica Academy LMS showcase screenshot 3",
      },
      {
        src: "/projects/digica-academy-lms/04-showcase.png",
        alt: "Digica Academy LMS showcase screenshot 4",
      },
      {
        src: "/projects/digica-academy-lms/05-showcase.png",
        alt: "Digica Academy LMS showcase screenshot 5",
      },
    ],
    order: 6,
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
    role: "Frontend Engineer - end-to-end landing page implementation",
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
    showcaseImages: [
      {
        src: "/projects/ulaman-bali-hotel-website/01-cover.png",
        alt: "Ulaman Bali Hotel Website showcase screenshot 1",
      },
      {
        src: "/projects/ulaman-bali-hotel-website/02-showcase.png",
        alt: "Ulaman Bali Hotel Website showcase screenshot 2",
      },
      {
        src: "/projects/ulaman-bali-hotel-website/03-showcase.png",
        alt: "Ulaman Bali Hotel Website showcase screenshot 3",
      },
    ],
    order: 9,
  },
  {
    id: "digica-finance-dashboard",
    slug: "digica-finance-dashboard",
    title: "Digica Finance Dashboard",
    shortDescription:
      "A production finance dashboard with search, sorting, and data workflows built for maintainable day-to-day ops.",
    overview:
      "Built a production finance dashboard with search, sorting, and data handling features. Focused on clean UI and modular component design for long-term maintainability in live use.",
    domain: "FinTech / Dashboard",
    role: "Frontend Engineer - production dashboard delivery and data interaction patterns",
    context:
      "A finance-facing product that needed clear data interaction patterns and a maintainable UI for real operational use.",
    challenge:
      "Ship reliable search, sorting, and data handling without sacrificing modular design or production readiness.",
    contribution:
      "Implemented the dashboard interface and modular component patterns for data-driven finance workflows in production.",
    outcomes: [
      "Delivered a production finance dashboard with search and sorting flows.",
      "Established modular UI patterns suited to ongoing product iteration.",
      "Kept data-handling interactions clear and maintainable for live operational use.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "TanStack Query",
      "Zustand",
      "Radix UI",
    ],
    highlights: [
      "Built a production finance dashboard with search, sorting, and data handling features.",
      "Focused on clean UI and modular component design for maintainability.",
      "Used Supabase as the backend with TanStack Query and Zustand for client state.",
    ],
    githubUrl: "https://github.com/jordyandreas/digica-finance-dashboard",
    liveUrl: "https://digica-academy.vercel.app",
    status: "completed",
    platform: "web",
    showcaseImages: [
      {
        src: "/projects/digica-finance-dashboard/01-cover.png",
        alt: "Digica Finance Dashboard showcase screenshot 1",
      },
    ],
    order: 5,
  },
  {
    id: "miracall-dashboard-suite",
    slug: "miracall-dashboard-suite",
    title: "Miracall Dashboard Suite",
    shortDescription:
      "Internal dashboard suite for a video-call platform - Admin, Agency, and Referral apps in one Turborepo.",
    overview:
      "Internal dashboard suite for a video-call platform - Admin (ops & transactions), Agency (talent & income), and Referral (campaigns & withdrawals) - built as a Turborepo monorepo with shared UI and auth.",
    domain: "Media / Internal Tools",
    role: "Frontend Engineer - monorepo dashboard delivery and shared UI/auth architecture",
    context:
      "A video-call platform that needed separate internal surfaces for ops, agency talent management, and referral campaigns without duplicating UI or auth.",
    challenge:
      "Ship three related dashboards with shared design and auth while keeping domain workflows clear and maintainable.",
    contribution:
      "Built the Admin, Agency, and Referral dashboard apps in a Turborepo/pnpm monorepo with shared UI, auth, and data-fetching patterns.",
    outcomes: [
      "Delivered a multi-app internal suite covering ops, talent income, and referral withdrawals.",
      "Established shared UI and auth foundations across Admin, Agency, and Referral apps.",
      "Structured the product as a Turborepo monorepo for scalable frontend delivery.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Turborepo",
      "MUI",
      "Tailwind CSS",
      "TanStack Query",
      "NextAuth",
      "React Hook Form",
      "Zod",
    ],
    highlights: [
      "Built Admin, Agency, and Referral dashboards for a video-call platform.",
      "Shared UI and auth across apps in a Turborepo monorepo.",
      "Used TanStack Query, NextAuth, and React Hook Form/Zod for data and forms.",
    ],
    githubUrl: null,
    liveUrl: null,
    status: "completed",
    platform: "web",
    showcaseImages: [
      {
        src: "/projects/miracall-dashboard-suite/01-cover.png",
        alt: "Miracall Dashboard Suite showcase screenshot 1",
      },
      {
        src: "/projects/miracall-dashboard-suite/02-showcase.png",
        alt: "Miracall Dashboard Suite showcase screenshot 2",
      },
      {
        src: "/projects/miracall-dashboard-suite/03-showcase.png",
        alt: "Miracall Dashboard Suite showcase screenshot 3",
      },
      {
        src: "/projects/miracall-dashboard-suite/04-showcase.png",
        alt: "Miracall Dashboard Suite showcase screenshot 4",
      },
      {
        src: "/projects/miracall-dashboard-suite/05-showcase.png",
        alt: "Miracall Dashboard Suite showcase screenshot 5",
      },
      {
        src: "/projects/miracall-dashboard-suite/06-showcase.png",
        alt: "Miracall Dashboard Suite showcase screenshot 6",
      },
      {
        src: "/projects/miracall-dashboard-suite/07-showcase.png",
        alt: "Miracall Dashboard Suite showcase screenshot 7",
      },
      {
        src: "/projects/miracall-dashboard-suite/08-showcase.png",
        alt: "Miracall Dashboard Suite showcase screenshot 8",
      },
    ],
    order: 2,
  },
  {
    id: "miracall-talent-web",
    slug: "miracall-talent-web",
    title: "Miracall Talent Web",
    shortDescription:
      "Browser-based talent/host portal with KYC onboarding, realtime video calls, chat, earnings, and withdrawals.",
    overview:
      "Browser-based talent/host portal with multi-step KYC onboarding, real-time video calls, chat, earnings, and withdrawals - built with a Next.js BFF gateway and Agora/Firebase realtime.",
    domain: "Media / Creator Platform",
    role: "Frontend Engineer - talent portal, realtime calling, and BFF-integrated flows",
    context:
      "Talent hosts needed a browser portal for onboarding, live calls, chat, and payout workflows on a video-call platform.",
    challenge:
      "Combine multi-step KYC, Agora realtime media/chat, and earnings/withdrawal flows behind a clear Next.js BFF gateway.",
    contribution:
      "Built the talent/host web experience with KYC onboarding, Agora video/chat, Firebase realtime patterns, and earnings/withdrawal surfaces.",
    outcomes: [
      "Shipped a talent portal covering KYC, live calls, chat, earnings, and withdrawals.",
      "Integrated Agora RTC/Chat and Firebase realtime through a Next.js BFF gateway.",
      "Kept complex host workflows structured with typed forms, query state, and UI primitives.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NextAuth",
      "Axios",
      "TanStack Query",
      "Zustand",
      "Zod",
      "React Hook Form",
      "shadcn/ui",
      "Agora RTC",
      "Agora Chat",
      "Firebase",
      "WebSocket",
    ],
    highlights: [
      "Built a browser talent/host portal with multi-step KYC onboarding.",
      "Integrated realtime video calls and chat with Agora and Firebase.",
      "Supported earnings and withdrawals through a Next.js BFF gateway.",
    ],
    githubUrl: null,
    liveUrl: "https://miracall-talent-web.vercel.app",
    status: "completed",
    platform: "web",
    showcaseImages: [
      {
        src: "/projects/miracall-talent-web/01-cover.png",
        alt: "Miracall Talent Web showcase screenshot 1",
      },
      {
        src: "/projects/miracall-talent-web/02-showcase.png",
        alt: "Miracall Talent Web showcase screenshot 2",
      },
      {
        src: "/projects/miracall-talent-web/03-showcase.png",
        alt: "Miracall Talent Web showcase screenshot 3",
      },
      {
        src: "/projects/miracall-talent-web/04-showcase.png",
        alt: "Miracall Talent Web showcase screenshot 4",
      },
      {
        src: "/projects/miracall-talent-web/05-showcase.png",
        alt: "Miracall Talent Web showcase screenshot 5",
      },
      {
        src: "/projects/miracall-talent-web/06-showcase.png",
        alt: "Miracall Talent Web showcase screenshot 6",
      },
      {
        src: "/projects/miracall-talent-web/07-showcase.png",
        alt: "Miracall Talent Web showcase screenshot 7",
      },
      {
        src: "/projects/miracall-talent-web/08-showcase.png",
        alt: "Miracall Talent Web showcase screenshot 8",
      },
      {
        src: "/projects/miracall-talent-web/09-showcase.png",
        alt: "Miracall Talent Web showcase screenshot 9",
      },
    ],
    order: 1,
  },
  {
    id: "baby-monitor-dashboard",
    slug: "baby-monitor-dashboard",
    title: "Baby Monitor Dashboard",
    shortDescription:
      "A pregnancy tracking dashboard for vitamins, Baby Plus sessions, kicks, water intake, and reminders.",
    overview:
      "A pregnancy tracking dashboard for vitamins, Baby Plus sessions, kicks, water intake, and reminders - with local-first storage and optional Supabase sync.",
    domain: "Health / Consumer Wellness",
    role: "Frontend Engineer - local-first dashboard and optional cloud sync",
    context:
      "Expecting parents needed a simple dashboard to track daily pregnancy habits with reliable local storage and optional cloud backup.",
    challenge:
      "Keep tracking fast and usable offline while still supporting optional Supabase sync and reminders.",
    contribution:
      "Built the dashboard UI and local-first data layer with optional Supabase sync, custom i18n, and web notification/service worker reminders.",
    outcomes: [
      "Delivered a pregnancy tracking experience for vitamins, sessions, kicks, water, and reminders.",
      "Implemented local-first storage with optional Supabase sync.",
      "Added notification and service worker support for reminder workflows.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Supabase",
    ],
    highlights: [
      "Built a pregnancy tracking dashboard with local-first storage.",
      "Supported optional Supabase sync for cloud backup.",
      "Added reminders via Web Notifications and a Service Worker.",
    ],
    githubUrl: "https://github.com/jordyandreas/monitoring-baby-dashboard",
    liveUrl: "https://monitoring-baby-dashboard.vercel.app",
    status: "completed",
    platform: "web",
    showcaseImages: [
      {
        src: "/projects/baby-monitor-dashboard/01-cover.png",
        alt: "Baby Monitor Dashboard showcase screenshot 1",
      },
      {
        src: "/projects/baby-monitor-dashboard/02-showcase.png",
        alt: "Baby Monitor Dashboard showcase screenshot 2",
      },
      {
        src: "/projects/baby-monitor-dashboard/03-showcase.png",
        alt: "Baby Monitor Dashboard showcase screenshot 3",
      },
      {
        src: "/projects/baby-monitor-dashboard/04-showcase.png",
        alt: "Baby Monitor Dashboard showcase screenshot 4",
      },
      {
        src: "/projects/baby-monitor-dashboard/05-showcase.png",
        alt: "Baby Monitor Dashboard showcase screenshot 5",
      },
    ],
    order: 7,
  },
  {
    id: "personal-portfolio-website",
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    shortDescription:
      "A personal portfolio showcasing frontend work, experience, and engineering craft with clear structure, data-driven content, and polished motion.",
    overview:
      "Built a personal portfolio to showcase frontend work, experience, and engineering principles - with clear information architecture, reusable data-driven content, and polished motion.",
    domain: "Personal Brand / Marketing Site",
    role: "Frontend Engineer - end-to-end portfolio product delivery",
    context:
      "Needed a polished personal site to present case studies, experience, and contact paths to recruiters and engineering leaders.",
    challenge:
      "Keep project storytelling clear and maintainable while shipping polished motion, accessibility, and a reliable contact experience.",
    contribution:
      "Designed and built the multi-page portfolio with typed data-driven content, motion with reduced-motion support, and a validated contact form.",
    outcomes: [
      "Delivered a multi-page portfolio with home, projects, about, and contact flows.",
      "Structured content as typed data for easy project and experience updates.",
      "Shipped polished motion with reduced-motion support and a validated contact form.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "React Hook Form",
      "Zod",
    ],
    highlights: [
      "Built a personal portfolio for project case studies, experience, and contact flows.",
      "Used typed data-driven content to keep projects and experience easy to update.",
      "Added motion with reduced-motion support and a validated contact form.",
    ],
    githubUrl: "https://github.com/jordyandreas/portfolio",
    liveUrl: "https://jordyandreas-dev.vercel.app",
    status: "completed",
    platform: "web",
    showcaseImages: [
      {
        src: "/projects/personal-portfolio-website/01-cover.png",
        alt: "Personal Portfolio Website showcase screenshot 1",
      },
      {
        src: "/projects/personal-portfolio-website/02-showcase.png",
        alt: "Personal Portfolio Website showcase screenshot 2",
      },
      {
        src: "/projects/personal-portfolio-website/03-showcase.png",
        alt: "Personal Portfolio Website showcase screenshot 3",
      },
      {
        src: "/projects/personal-portfolio-website/04-showcase.png",
        alt: "Personal Portfolio Website showcase screenshot 4",
      },
    ],
    order: 8,
  },
  {
    id: "namea-company-profile-website",
    slug: "namea-company-profile-website",
    title: "Namea - Company Profile Website",
    shortDescription:
      "A responsive company profile website showcasing services, projects, and brand identity with interactive animations and a contact form.",
    overview:
      "Built a responsive company profile website showcasing services, projects, and brand identity with interactive animations and a contact form.",
    domain: "Corporate / Marketing Site",
    role: "Frontend Engineer - company profile delivery and interactive brand presentation",
    context:
      "Namea needed a polished company profile website to present its services, showcase projects, and strengthen brand presence online.",
    challenge:
      "Balance a clear company narrative, interactive brand motion, and a reliable contact flow without sacrificing responsiveness or maintainability.",
    contribution:
      "Built the website interface, animation layer, and validated contact form experience using a reusable Next.js component structure.",
    outcomes: [
      "Delivered a responsive company profile website for services, project showcases, and brand storytelling.",
      "Used interactive motion to strengthen the site's presentation without compromising clarity.",
      "Implemented a validated contact form to support lead capture and outreach.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lottie",
      "React Hook Form",
      "Zod",
      "shadcn/ui",
    ],
    highlights: [
      "Built a responsive company profile website with service and project showcase sections.",
      "Added interactive animations with Framer Motion and Lottie to support brand presentation.",
      "Implemented a validated contact form with React Hook Form and Zod.",
    ],
    githubUrl: null,
    liveUrl: "https://nkt-lp.vercel.app",
    status: "completed",
    platform: "web",
    showcaseImages: [
      {
        src: "/projects/namea-company-profile-website/01-cover.png",
        alt: "Namea - Company Profile Website showcase screenshot 1",
      },
      {
        src: "/projects/namea-company-profile-website/02-showcase.png",
        alt: "Namea - Company Profile Website showcase screenshot 2",
      },
      {
        src: "/projects/namea-company-profile-website/03-showcase.png",
        alt: "Namea - Company Profile Website showcase screenshot 3",
      },
      {
        src: "/projects/namea-company-profile-website/04-showcase.png",
        alt: "Namea - Company Profile Website showcase screenshot 4",
      },
    ],
    order: 3,
  },
  {
    id: "maybank-finance-app-v2",
    slug: "maybank-finance-app-v2",
    title: "Maybank Finance App - Revamp to V2",
    shortDescription:
      "A V2 revamp of the Maybank Finance app, expanding delivery from Android-only to iOS as well.",
    overview:
      "Revamped Maybank Finance Apps to version 2.0 so the product could be used on iOS, after previously supporting Android only. Focused on React Native delivery and shared mobile patterns across platforms.",
    domain: "FinTech / Consumer Finance",
    role: "Mobile Developer - V2 revamp and cross-platform delivery",
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
    showcaseImages: [
      {
        src: "/projects/maybank-finance-app-v2/01-cover.png",
        alt: "Maybank Finance App - Revamp to V2 showcase screenshot 1",
      },
    ],
    order: 3,
  },
  {
    id: "maybank-vospay-loan-app",
    slug: "maybank-vospay-loan-app",
    title: "Vospay - Loan Apps Internal Maybank",
    shortDescription:
      "An internal installment management app for Maybank employees.",
    overview:
      "An internal installment management app for Maybank employees. Provides features for installment applications, loan simulations, and payment tracking.",
    domain: "FinTech / Internal Tools",
    role: "Mobile Developer - installment and loan workflow interfaces",
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
      "Supported internal Maybank employee installment workflows.",
      "Delivered the experience with React Native and JavaScript.",
    ],
    githubUrl: null,
    liveUrl: null,
    status: "completed",
    platform: "mobile",
    showcaseImages: [
      {
        src: "/projects/maybank-vospay-loan-app/01-cover.png",
        alt: "Vospay - Loan Apps Internal Maybank showcase screenshot 1",
      },
    ],
    order: 4,
  },
  {
    id: "video-call-apps",
    slug: "video-call-apps",
    title: "Video Call Apps",
    shortDescription:
      "Cross-platform React Native apps for callers and talent hosts with Agora video, chat, and top-up flows.",
    overview:
      "Cross-platform React Native apps for callers and talent hosts - Agora video calling, WebSocket signaling, real-time chat, Google Sign-In, and top-up via Google Play Billing and Midtrans.",
    domain: "Media / Consumer Mobile",
    role: "Mobile Developer - caller/talent apps, realtime media, and payments",
    context:
      "A video-call marketplace that needed separate caller and talent host apps with reliable realtime media, chat, and top-up.",
    challenge:
      "Deliver cross-platform calling, signaling, chat, and payments without fracturing the mobile experience.",
    contribution:
      "Built React Native experiences for callers and talent hosts with Agora RTC/Chat, WebSocket signaling, Firebase, and payment gateway integrations.",
    outcomes: [
      "Shipped caller and talent host apps with Agora video calling and realtime chat.",
      "Integrated WebSocket signaling and Firebase for live session coordination.",
      "Supported top-up via Google Play Billing and Midtrans.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Agora RTC",
      "Agora Chat",
      "WebSocket",
      "Firebase",
      "Payment Gateway",
      "React Navigation",
      "Axios",
    ],
    highlights: [
      "Built cross-platform caller and talent host apps in React Native.",
      "Integrated Agora video calling, chat, and WebSocket signaling.",
      "Supported Google Sign-In and top-up via Play Billing and Midtrans.",
    ],
    githubUrl: null,
    liveUrl: null,
    status: "completed",
    platform: "mobile",
    showcaseImages: [],
    order: 1,
  },
  {
    id: "master-owner-app",
    slug: "master-owner-app",
    title: "Master Owner App",
    shortDescription:
      "A React Native Expo app for listing owners and cats, favorites, sorting, and selecting a master owner.",
    overview:
      "A cross-platform mobile app built with React Native and Expo that lists owners and their cats, supports sorting, persistent favorites via AsyncStorage, and selecting a master owner synced with a REST API. UI follows a Figma design with reusable components, React Navigation, and Context-based state.",
    domain: "Assessment / Mobile",
    role: "Mobile Developer - Expo app, navigation, and API-synced state",
    context:
      "A mobile assessment product that needed a Figma-faithful owner/cat listing experience with favorites and master-owner selection.",
    challenge:
      "Match the design system while keeping favorites persistent and master-owner selection synced to a REST API.",
    contribution:
      "Built the Expo app with reusable components, React Navigation, AsyncStorage favorites, Context state, and REST API sync for master owner selection.",
    outcomes: [
      "Delivered a cross-platform owner/cat listing experience from a Figma design.",
      "Supported sorting, persistent favorites, and master-owner selection.",
      "Covered critical flows with Jest tests around reusable components and state.",
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "React Navigation",
      "AsyncStorage",
      "React Context",
      "Jest",
      "REST API",
    ],
    highlights: [
      "Built a React Native Expo app from a Figma design.",
      "Persisted favorites with AsyncStorage and synced master owner via REST API.",
      "Used React Navigation and Context-based state with reusable components.",
    ],
    githubUrl: "https://github.com/jordyandreas/master-owner-app",
    liveUrl: null,
    status: "completed",
    platform: "mobile",
    showcaseImages: [],
    order: 2,
  },
  {
    id: "wallet-disbursement-service",
    slug: "wallet-disbursement-service",
    title: "Wallet Disbursement Service",
    shortDescription:
      "A Go HTTP service that deducts wallet balance and records bank disbursements safely.",
    overview:
      "A Go HTTP service that deducts wallet balance and records bank disbursements with thread-safe in-memory storage.",
    domain: "FinTech / Backend",
    role: "Backend Engineer - wallet deduction and disbursement API",
    context:
      "A wallet product that needed a reliable service to deduct balances and record bank disbursements.",
    challenge:
      "Keep wallet deductions and disbursement records correct under concurrent access.",
    contribution:
      "Built a Gin-based Go REST service with thread-safe in-memory storage for wallet balance and disbursement records.",
    outcomes: [
      "Delivered an HTTP service for wallet deduction and bank disbursement recording.",
      "Used thread-safe in-memory storage for concurrent-safe operations.",
      "Exposed a clear REST API surface with Gin.",
    ],
    technologies: ["Go", "Gin", "REST API"],
    highlights: [
      "Built a Go HTTP service for wallet deductions and bank disbursements.",
      "Implemented thread-safe in-memory storage for concurrent access.",
      "Exposed the workflow through a Gin REST API.",
    ],
    githubUrl: "https://github.com/jordyandreas/wallet-disbursement-service",
    liveUrl: null,
    status: "completed",
    platform: "backend",
    showcaseImages: [],
    order: 2,
  },
  {
    id: "master-owner-api",
    slug: "master-owner-api",
    title: "Master Owner API",
    shortDescription:
      "An Express.js REST API for owners and cats with sorting, master-owner selection, and file-backed persistence.",
    overview:
      "A structured Express.js REST API built for a mobile assessment. It manages owners and their cats, supports sorting, selecting a master owner, and persists data with a file-backed JSON database. Includes modular routing, validation, error handling, and full unit/integration tests.",
    domain: "Assessment / Backend",
    role: "Backend Engineer - REST API, validation, and test coverage",
    context:
      "A mobile assessment needed a backend that could manage owners/cats, sorting, and master-owner selection with reliable persistence and tests.",
    challenge:
      "Keep the API modular and well-tested while using a simple file-backed JSON database.",
    contribution:
      "Built the Express API with LowDB persistence, Joi validation, modular routing, error handling, and Jest/Supertest coverage.",
    outcomes: [
      "Delivered a REST API for owners, cats, sorting, and master-owner selection.",
      "Persisted data with a file-backed JSON database via LowDB.",
      "Covered the service with unit and integration tests using Jest and Supertest.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "LowDB",
      "Joi",
      "Jest",
      "Supertest",
    ],
    highlights: [
      "Built a structured Express.js REST API for a mobile assessment.",
      "Added modular routing, Joi validation, and error handling.",
      "Covered unit and integration paths with Jest and Supertest.",
    ],
    githubUrl: "https://github.com/jordyandreas/master-owner-api",
    liveUrl: null,
    status: "completed",
    platform: "backend",
    showcaseImages: [],
    order: 1,
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
