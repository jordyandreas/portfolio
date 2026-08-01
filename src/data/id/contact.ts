import { siteConfig } from "@/config/site";
import type { ContactContent, ContactCtaContent } from "@/data/types/contact";

export const contactCtaContent: ContactCtaContent = {
  headingLines: ["Siap Untuk", "Memulai?"],
  prompt: "Anda sudah mengenal saya, mari bicara tentang Anda.",
  ctaLabel: "Hubungi Saya",
  href: "/contact",
};

export const contactContent: ContactContent = {
  headingLines: ["Ceritakan apa", "yang Anda bangun."],
  lead: "Saya terbuka untuk peluang baru - proyek freelance, kemitraan produk, dan peran senior frontend di mana kerajinan dan kepemilikan penting.",
  points: [
    "UI produk freelance & sistem frontend",
    "Peluang full-time atau kontrak",
    "Brief yang jelas dan percakapan yang bijaksana selalu disambut",
  ],
  location: siteConfig.location,
  actions: [
    {
      id: "email",
      label: "Email",
      href: `mailto:${siteConfig.email}`,
      ariaLabel: `Email ${siteConfig.name} di ${siteConfig.email}`,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: siteConfig.linkedin,
      external: true,
      ariaLabel: `Profil LinkedIn ${siteConfig.name}`,
    },
    {
      id: "github",
      label: "GitHub",
      href: siteConfig.github,
      external: true,
      ariaLabel: `Profil GitHub ${siteConfig.name}`,
    },
  ],
  form: {
    nameLabel: "Nama",
    namePlaceholder: "Nama Anda",
    emailLabel: "Email",
    emailPlaceholder: "email@example.com",
    subjectLabel: "Subjek",
    subjectPlaceholder: "Subjek Proyek",
    messageLabel: "Pesan",
    messagePlaceholder: "Ceritakan tentang proyek Anda...",
    submitLabel: "Kirim Pesan",
    submitHint: "Membuka WhatsApp dengan pesan Anda siap dikirim.",
  },
};
