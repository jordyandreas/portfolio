import type { Locale } from "@/i18n/config";
import type { ProjectPlatform, ProjectStatus } from "@/data/types/projects";

export type Dictionary = {
  navbar: {
    primaryNav: string;
    getInTouch: string;
    openMenu: string;
    closeMenu: string;
    languageSwitcher: string;
  };
  footer: {
    allRightsReserved: string;
    lastUpdated: string;
    emailAria: (name: string) => string;
    githubAria: (name: string) => string;
    linkedinAria: (name: string) => string;
  };
  projects: {
    heading: string;
    browseAll: string;
    platformTablist: string;
    tabs: Record<"all" | ProjectPlatform, string>;
    empty: Record<"all" | ProjectPlatform, { title: string; description: string }>;
    platformLabels: Record<ProjectPlatform, string>;
    statusLabels: Record<ProjectStatus, string>;
    overview: string;
    techStack: string;
    repository: string;
    demo: string;
    alsoUsed: string;
    viewProject: string;
    projectDetails: string;
    closeDetails: string;
  };
  contact: {
    formAria: string;
    validation: {
      nameRequired: string;
      nameTooLong: string;
      emailRequired: string;
      emailInvalid: string;
      subjectRequired: string;
      subjectTooLong: string;
      messageRequired: string;
      messageTooLong: string;
    };
    whatsapp: {
      greeting: string;
      name: string;
      email: string;
      subject: string;
    };
  };
  notFound: {
    title: string;
    description: string;
    hint: string;
  };
  pages: {
    aboutTitle: (name: string) => string;
    aboutDescription: (name: string, title: string) => string;
    projectsTitle: (name: string) => string;
    projectsDescription: string;
    contactTitle: (name: string) => string;
    contactDescription: (name: string, title: string) => string;
  };
};

const en: Dictionary = {
  navbar: {
    primaryNav: "Primary",
    getInTouch: "Get in Touch",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageSwitcher: "Language",
  },
  footer: {
    allRightsReserved: "All rights reserved",
    lastUpdated: "Last updated",
    emailAria: (name) => `Email ${name}`,
    githubAria: (name) => `GitHub profile for ${name}`,
    linkedinAria: (name) => `LinkedIn profile for ${name}`,
  },
  projects: {
    heading: "My Projects",
    browseAll: "Browse all projects",
    platformTablist: "Project platform",
    tabs: {
      all: "All",
      web: "Web Application",
      mobile: "Mobile Application",
      backend: "Backend",
    },
    empty: {
      all: {
        title: "No projects yet",
        description: "Selected work will appear here soon.",
      },
      web: {
        title: "No web projects yet",
        description: "Web application work will appear here soon.",
      },
      mobile: {
        title: "No mobile projects yet",
        description: "Mobile projects will appear here soon.",
      },
      backend: {
        title: "No backend projects yet",
        description: "Backend services will appear here soon.",
      },
    },
    platformLabels: {
      web: "Web",
      mobile: "Mobile",
      backend: "Backend",
    },
    statusLabels: {
      completed: "Completed",
      "in-progress": "In progress",
      archived: "Archived",
    },
    overview: "Overview",
    techStack: "Tech stack",
    repository: "Repository",
    demo: "Demo",
    alsoUsed: "Also used",
    viewProject: "View Project",
    projectDetails: "Project details",
    closeDetails: "Close project details",
  },
  contact: {
    formAria: "Contact form",
    validation: {
      nameRequired: "Please enter your name.",
      nameTooLong: "Name is too long.",
      emailRequired: "Please enter your email.",
      emailInvalid: "Please enter a valid email.",
      subjectRequired: "Please add a short subject.",
      subjectTooLong: "Subject is too long.",
      messageRequired: "Tell me a bit more about the project.",
      messageTooLong: "Message is too long.",
    },
    whatsapp: {
      greeting: "Hi Jordy - I'd like to get in touch.",
      name: "Name",
      email: "Email",
      subject: "Subject",
    },
  },
  notFound: {
    title: "Page not found",
    description:
      "This page doesn’t exist - or it moved. Use the navigation above to get back to work that’s still here.",
    hint: "No stress - home is one click away.",
  },
  pages: {
    aboutTitle: (name) => `About | ${name}`,
    aboutDescription: (name, title) =>
      `About ${name}, ${title} - background, capabilities, and experience.`,
    projectsTitle: (name) => `Projects | ${name}`,
    projectsDescription:
      "Selected web, mobile, and backend product work by Jordy Andreas - interfaces and services built for clarity, performance, and maintainable delivery.",
    contactTitle: (name) => `Contact | ${name}`,
    contactDescription: (name, title) =>
      `Get in touch with ${name}, ${title}.`,
  },
};

const id: Dictionary = {
  navbar: {
    primaryNav: "Navigasi utama",
    getInTouch: "Hubungi Saya",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    languageSwitcher: "Bahasa",
  },
  footer: {
    allRightsReserved: "Hak cipta dilindungi",
    lastUpdated: "Terakhir diperbarui",
    emailAria: (name) => `Email ${name}`,
    githubAria: (name) => `Profil GitHub ${name}`,
    linkedinAria: (name) => `Profil LinkedIn ${name}`,
  },
  projects: {
    heading: "Proyek Saya",
    browseAll: "Lihat semua proyek",
    platformTablist: "Platform proyek",
    tabs: {
      all: "Semua",
      web: "Aplikasi Web",
      mobile: "Aplikasi Mobile",
      backend: "Backend",
    },
    empty: {
      all: {
        title: "Belum ada proyek",
        description: "Karya terpilih akan muncul di sini segera.",
      },
      web: {
        title: "Belum ada proyek web",
        description: "Karya aplikasi web akan muncul di sini segera.",
      },
      mobile: {
        title: "Belum ada proyek mobile",
        description: "Karya aplikasi mobile akan muncul di sini segera.",
      },
      backend: {
        title: "Belum ada proyek backend",
        description: "Layanan backend akan muncul di sini segera.",
      },
    },
    platformLabels: {
      web: "Web",
      mobile: "Mobile",
      backend: "Backend",
    },
    statusLabels: {
      completed: "Selesai",
      "in-progress": "Sedang dikerjakan",
      archived: "Diarsipkan",
    },
    overview: "Ringkasan",
    techStack: "Tech stack",
    repository: "Repositori",
    demo: "Demo",
    alsoUsed: "Juga digunakan",
    viewProject: "Lihat Proyek",
    projectDetails: "Detail proyek",
    closeDetails: "Tutup detail proyek",
  },
  contact: {
    formAria: "Formulir kontak",
    validation: {
      nameRequired: "Silakan masukkan nama Anda.",
      nameTooLong: "Nama terlalu panjang.",
      emailRequired: "Silakan masukkan email Anda.",
      emailInvalid: "Silakan masukkan email yang valid.",
      subjectRequired: "Silakan tambahkan subjek singkat.",
      subjectTooLong: "Subjek terlalu panjang.",
      messageRequired: "Ceritakan sedikit lebih banyak tentang proyeknya.",
      messageTooLong: "Pesan terlalu panjang.",
    },
    whatsapp: {
      greeting: "Hai Jordy - saya ingin menghubungi Anda.",
      name: "Nama",
      email: "Email",
      subject: "Subjek",
    },
  },
  notFound: {
    title: "Halaman tidak ditemukan",
    description:
      "Halaman ini tidak ada - atau sudah dipindahkan. Gunakan navigasi di atas untuk kembali ke karya yang masih tersedia.",
    hint: "Tenang saja - beranda hanya satu klik lagi.",
  },
  pages: {
    aboutTitle: (name) => `Tentang | ${name}`,
    aboutDescription: (name, title) =>
      `Tentang ${name}, ${title} - latar belakang, kemampuan, dan pengalaman.`,
    projectsTitle: (name) => `Proyek | ${name}`,
    projectsDescription:
      "Karya produk web, mobile, dan backend terpilih oleh Jordy Andreas - antarmuka dan layanan yang dibangun untuk kejelasan, performa, dan pengiriman yang mudah dirawat.",
    contactTitle: (name) => `Kontak | ${name}`,
    contactDescription: (name, title) =>
      `Hubungi ${name}, ${title}.`,
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, id };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
