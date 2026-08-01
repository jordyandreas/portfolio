import type { CapabilitiesContent } from "@/data/types/capabilities";

export const capabilitiesContent: CapabilitiesContent = {
  heading: "Kekuatan Inti",
  description:
    "Kekuatan rekayasa produk yang terbukti dari sistem web, mobile, dan realtime yang telah saya kirimkan di pengalaman dan portofolio terkini.",
  groups: [
    {
      title: "Platform Frontend",
      description:
        "Membangun antarmuka produk yang mudah dirawat di stack web modern, dari permukaan pemasaran hingga dashboard dan pengalaman aplikasi yang kompleks.",
      technologies: [
        { name: "Next.js", icon: "nextjs" },
        { name: "React", icon: "react" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Feature modules", icon: "featureModules" },
      ],
    },
    {
      title: "State, Data & API",
      description:
        "Mengelola data server, state klien, dan alur kerja yang padat API dengan pola yang tetap dapat diprediksi seiring pertumbuhan produk.",
      technologies: [
        { name: "TanStack Query", icon: "tanstackQuery" },
        { name: "Zustand", icon: "zustand" },
        { name: "Redux", icon: "redux" },
        { name: "GraphQL", icon: "graphql" },
        { name: "REST", icon: "rest" },
      ],
    },
    {
      title: "Form, Validasi & Auth",
      description:
        "Mengirimkan alur produk yang membutuhkan penanganan input yang andal, validasi, dan akses terlindungi di dashboard serta pengalaman akun.",
      technologies: [
        { name: "React Hook Form", icon: "reactHookForm" },
        { name: "Zod", icon: "zod" },
        { name: "ShadCN UI", icon: "shadcn" },
        { name: "Accessibility", icon: "accessibility" },
      ],
    },
    {
      title: "Realtime & Integrasi Backend",
      description:
        "Menghubungkan antarmuka ke sistem produk live, dari pengalaman media/chat realtime hingga dashboard operasional yang terintegrasi backend.",
      technologies: [
        { name: "Firebase", icon: "firebase" },
        { name: "Supabase", icon: "supabase" },
        { name: "Rendering strategy", icon: "renderingStrategy" },
        { name: "Core Web Vitals", icon: "coreWebVitals" },
      ],
    },
    {
      title: "Pengiriman Mobile",
      description:
        "Mengirimkan pengalaman produk lintas platform melalui React Native, Expo, dan stack hybrid-mobile sebelumnya.",
      technologies: [
        { name: "React Native", icon: "reactNative" },
        { name: "Expo", icon: "expo" },
        { name: "Ionic", icon: "ionic" },
        { name: "Angular", icon: "angular" },
      ],
    },
    {
      title: "Kualitas Antarmuka",
      description:
        "Menjaga antarmuka yang dikirim tetap berperforma, konsisten, dan nyaman digunakan melalui sistem yang dapat digunakan ulang dan polesan produk yang cermat.",
      technologies: [
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Component libraries", icon: "componentLibraries" },
        { name: "Visual hierarchy", icon: "visualHierarchy" },
        { name: "Micro-interactions", icon: "microInteractions" },
        { name: "Responsive layout", icon: "responsiveLayout" },
      ],
    },
  ],
};
