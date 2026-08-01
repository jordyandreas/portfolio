import { featuredTechStack } from "@/data/featured-tech-stack";
import type { AboutContent, AboutPageContent } from "@/data/types/about";

export const aboutContent: AboutContent = {
  heading: "Tentang Saya",
  paragraphs: [
    "Saya seorang Senior Frontend Engineer berbasis di Jakarta, membangun antarmuka produk yang jelas, skalabel, dan dirancang untuk performa bagi tim di dunia nyata.",
    "Saat ini saya memimpin pengiriman frontend di platform web dan produk bertrafik tinggi, dengan fokus pada performa, sistem yang mudah dirawat, dan kolaborasi yang mengubah kebutuhan kompleks menjadi pengalaman pengguna yang matang.",
  ],
  stats: [
    { value: "6+", label: "Tahun pengalaman" },
    { value: "12+", label: "Proyek selesai" },
    { value: "5+", label: "Klien di seluruh dunia" },
  ],
  expertiseHeading: "Keahlian",
  expertise: [
    {
      title: "Pengembangan Web",
      description:
        "Antarmuka produk yang jelas dan skalabel di berbagai platform web modern.",
      icon: "globe",
    },
    {
      title: "Pengembangan Mobile",
      description:
        "Pengiriman lintas platform untuk produk konsumen dan multi-layanan.",
      icon: "smartphone",
    },
    {
      title: "Sistem Produk yang Skalabel",
      description:
        "Arsitektur frontend modular, optimasi performa, dan permukaan produk realtime di bawah trafik nyata.",
      icon: "blocks",
    },
  ],
};

export const aboutPageContent: AboutPageContent = {
  heading: "Jordy Andreas",
  paragraphs: [
    "Saya mengubah kebutuhan produk yang kompleks menjadi antarmuka yang jelas dan berperforma tinggi yang bisa diandalkan. Baik saat membentuk platform web, mengirim pengalaman mobile, atau merapikan sistem di bawah trafik nyata-saya membawa struktur ke dalam kerajinan.",
    "Berbasis di Jakarta, saya peduli pada arsitektur frontend yang mudah dirawat, kolaborasi yang bijaksana, dan karya yang tetap kokoh lama setelah diluncurkan.",
  ],
  techStackHeading: "Yang saya gunakan untuk membangun",
  techStack: featuredTechStack,
  expertiseHeading: "Keahlian",
  expertise: [
    {
      title: "Pengembangan Web",
      description:
        "Antarmuka produk yang jelas dan skalabel di berbagai platform web modern.",
      icon: "globe",
    },
    {
      title: "Pengembangan Mobile",
      description:
        "Pengiriman lintas platform untuk produk konsumen dan multi-layanan.",
      icon: "smartphone",
    },
    {
      title: "Sistem Produk yang Skalabel",
      description:
        "Arsitektur frontend modular, optimasi performa, dan permukaan produk realtime di bawah trafik nyata.",
      icon: "blocks",
    },
  ],
};
