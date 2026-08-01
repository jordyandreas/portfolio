import type { Project } from "@/data/types/projects";

export const projects: Project[] = [
  {
    id: "live-sport-website",
    slug: "live-sport-website",
    title: "Live Sport Website",
    shortDescription:
      "Situs olahraga live yang menampilkan skor pertandingan dan pembaruan secara real-time di tengah traffic puncak.",
    overview:
      "Mengembangkan situs olahraga live yang menyajikan skor pertandingan dan pembaruan secara real-time. Fokus pada komponen frontend yang responsif dan berperforma tinggi, serta optimasi rendering data live agar pengalaman tetap mulus saat traffic memuncak.",
    domain: "Olahraga / Data Live",
    role: "Frontend Engineer - pengiriman antarmuka live dan performa di bawah beban realtime",
    context:
      "Produk untuk audiens olahraga yang membutuhkan skor live dan pembaruan andal saat traffic serta volume refresh melonjak.",
    challenge:
      "Menjaga rendering skor live tetap responsif dan stabil sambil menangani pembaruan realtime pada beban puncak.",
    contribution:
      "Membangun komponen frontend yang responsif dan berperforma tinggi, serta mengoptimalkan rendering data live untuk pembaruan pertandingan secara realtime.",
    outcomes: [
      "Menghadirkan pengalaman olahraga live dengan skor pertandingan dan pembaruan secara realtime.",
      "Meningkatkan responsivitas yang terasa saat traffic puncak melalui optimasi rendering frontend.",
      "Membangun pola antarmuka yang dapat digunakan ulang untuk permukaan data live berfrekuensi tinggi.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets"],
    highlights: [
      "Membangun permukaan skor pertandingan dan pembaruan real-time untuk penonton olahraga live.",
      "Mengoptimalkan rendering data live agar pengalaman tetap mulus saat traffic puncak.",
      "Mengirimkan komponen frontend yang responsif dan berperforma tinggi untuk audiens olahraga.",
    ],
    githubUrl: null,
    liveUrl: null,
    status: "completed",
    platform: "web",
    showcaseImages: [
      {
        src: "/projects/live-sport-website/01-cover.webp",
        alt: "Cuplikan showcase Live Sport Website 1",
      },
    ],
    order: 4,
  },
  {
    id: "short-video-streaming-platform",
    slug: "short-video-streaming-platform",
    title: "Short Video Streaming Platform",
    shortDescription:
      "Platform web short-video ala TikTok dengan pemutaran vertikal, engagement, dan alur infinite feed.",
    overview:
      "Platform streaming short-video modern yang meniru pengalaman TikTok, dengan pemutaran video vertikal yang mulus, interaksi engagement, dan algoritma feed dinamis. Dirancang dengan fokus pada kecepatan, skalabilitas, dan pengalaman pengguna, sehingga kreator dapat mengunggah dan membagikan video pendek, sementara penonton dapat scroll tanpa batas, like, komentar, dan follow secara real-time.",
    domain: "Media / Social Video",
    role: "Frontend Engineer - pengiriman antarmuka pemutaran short-video dan engagement",
    context:
      "Produk streaming konsumen yang membutuhkan browsing ala TikTok, publishing kreator, dan engagement interaktif di web.",
    challenge:
      "Menghadirkan pemutaran video vertikal yang cair dan interaksi infinite feed tanpa mengorbankan kecepatan atau kejelasan.",
    contribution:
      "Membangun frontend streaming di sekitar pemutaran vertikal, feed infinite scroll, dan permukaan engagement realtime.",
    outcomes: [
      "Mengirimkan pengalaman short-video di web dengan pemutaran vertikal yang mulus.",
      "Mengaktifkan alur engagement interaktif untuk like, komentar, dan follow.",
      "Menyusun pola frontend yang skalabel untuk feed dan permukaan konten kreator.",
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
      "Membangun pengalaman streaming short-video ala TikTok untuk web.",
      "Berfokus pada kecepatan, skalabilitas, dan pengalaman infinite feed.",
      "Mendukung publishing kreator sekaligus engagement penonton secara realtime.",
    ],
    githubUrl: null,
    liveUrl: null,
    status: "completed",
    platform: "web",
    showcaseImages: [
      {
        src: "/projects/short-video-streaming-platform/01-cover.webp",
        alt: "Cuplikan showcase Short Video Streaming Platform 1",
      },
    ],
    order: 10,
  },
  {
    id: "digica-academy-lms",
    slug: "digica-academy-lms",
    title: "Digica Academy LMS",
    shortDescription:
      "Frontend Learning Management System untuk program pembelajaran online Digica Academy.",
    overview:
      "Membangun frontend Learning Management System untuk Digica Academy. Fokus pada komponen UI yang reusable dan modular, penanganan data sisi klien dengan mock data serta local storage, dan antarmuka responsif yang dirancang untuk memperkaya pengalaman belajar.",
    domain: "EdTech / Platform Pembelajaran",
    role: "Frontend Engineer - kepemilikan arsitektur UI LMS dan pengiriman fitur",
    context:
      "Platform pembelajaran online yang membutuhkan fondasi frontend yang mudah dirawat untuk penemuan kursus, progres, dan alur belajar sehari-hari.",
    challenge:
      "Mengirimkan antarmuka LMS modular yang dapat berkembang seiring fitur pembelajaran baru tanpa menjadi rapuh atau tidak konsisten.",
    contribution:
      "Merancang dan mengimplementasikan sistem UI yang reusable, pola penanganan data sisi klien, serta antarmuka pembelajaran responsif untuk Digica Academy.",
    outcomes: [
      "Membangun fondasi komponen modular untuk pengembangan fitur LMS yang skalabel.",
      "Menghadirkan antarmuka pembelajaran responsif yang memudahkan navigasi konten kursus di berbagai perangkat.",
      "Memperkenalkan pola data sisi klien yang mendukung persistensi lokal dan pengiriman frontend secara iteratif.",
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
      "Mengembangkan frontend Learning Management System untuk platform pembelajaran online.",
      "Membangun komponen UI yang reusable dan modular untuk mendukung pengembangan fitur yang skalabel.",
      "Mengimplementasikan penanganan data sisi klien menggunakan mock data dan local storage.",
      "Merancang antarmuka yang responsif dan ramah pengguna untuk memperkaya pengalaman belajar.",
    ],
    githubUrl: "https://github.com/jordyandreas/digica-academy-lms",
    liveUrl: "https://digica-academy-lms.vercel.app",
    status: "completed",
    platform: "web",
    showcaseImages: [
      {
        src: "/projects/digica-academy-lms/01-cover.webp",
        alt: "Cuplikan showcase Digica Academy LMS 1",
      },
      {
        src: "/projects/digica-academy-lms/02-showcase.webp",
        alt: "Cuplikan showcase Digica Academy LMS 2",
      },
      {
        src: "/projects/digica-academy-lms/03-showcase.webp",
        alt: "Cuplikan showcase Digica Academy LMS 3",
      },
      {
        src: "/projects/digica-academy-lms/04-showcase.webp",
        alt: "Cuplikan showcase Digica Academy LMS 4",
      },
      {
        src: "/projects/digica-academy-lms/05-showcase.webp",
        alt: "Cuplikan showcase Digica Academy LMS 5",
      },
    ],
    order: 6,
  },
  {
    id: "ulaman-bali-hotel-website",
    slug: "ulaman-bali-hotel-website",
    title: "Ulaman Bali Hotel Website",
    shortDescription:
      "Landing page hotel modern dan responsif yang terinspirasi dari Ulaman Eco Resort.",
    overview:
      "Mengembangkan landing page modern dan responsif yang terinspirasi dari Ulaman Eco Resort. Fokus pada UI yang elegan, animasi yang mulus, dan performa yang dioptimalkan melalui komponen reusable serta arsitektur yang bersih.",
    domain: "Hospitality / Situs Marketing",
    role: "Frontend Engineer - implementasi landing page dari ujung ke ujung",
    context:
      "Pengalaman merek hospitality yang membutuhkan landing page premium dan responsif dengan motion yang rapi serta arsitektur yang bersih.",
    challenge:
      "Menyeimbangkan presentasi visual yang elegan dengan pola frontend yang berperforma dan dapat digunakan ulang.",
    contribution:
      "Membangun UI landing page, lapisan animasi, dan struktur komponen dengan fokus pada kejelasan serta kemudahan perawatan.",
    outcomes: [
      "Menghadirkan pengalaman landing hospitality yang premium dan responsif.",
      "Menggabungkan motion yang rapi dengan komponen reusable dan arsitektur yang bersih.",
      "Menjaga struktur frontend siap untuk iterasi berkelanjutan tanpa mengorbankan performa.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Mengembangkan landing page modern dan responsif yang terinspirasi dari Ulaman Eco Resort.",
      "Berfokus pada UI yang elegan dan animasi yang mulus untuk kesan premium.",
      "Mengoptimalkan performa melalui komponen reusable dan arsitektur yang bersih.",
    ],
    githubUrl: "https://github.com/jordyandreas/ulaman-website-project",
    liveUrl: "https://ulaman-bali-hotel.vercel.app",
    status: "completed",
    platform: "web",
    showcaseImages: [
      {
        src: "/projects/ulaman-bali-hotel-website/01-cover.webp",
        alt: "Cuplikan showcase Ulaman Bali Hotel Website 1",
      },
      {
        src: "/projects/ulaman-bali-hotel-website/02-showcase.webp",
        alt: "Cuplikan showcase Ulaman Bali Hotel Website 2",
      },
      {
        src: "/projects/ulaman-bali-hotel-website/03-showcase.webp",
        alt: "Cuplikan showcase Ulaman Bali Hotel Website 3",
      },
    ],
    order: 9,
  },
  {
    id: "digica-finance-dashboard",
    slug: "digica-finance-dashboard",
    title: "Digica Finance Dashboard",
    shortDescription:
      "Dashboard keuangan production dengan pencarian, pengurutan, dan alur data yang dirancang untuk operasional harian yang mudah dirawat.",
    overview:
      "Membangun dashboard keuangan production dengan fitur pencarian, pengurutan, dan penanganan data. Fokus pada UI yang bersih serta desain komponen modular agar mudah dirawat dalam penggunaan live jangka panjang.",
    domain: "FinTech / Dashboard",
    role: "Frontend Engineer - pengiriman dashboard production dan pola interaksi data",
    context:
      "Produk keuangan yang membutuhkan pola interaksi data yang jelas dan UI yang mudah dirawat untuk penggunaan operasional nyata.",
    challenge:
      "Mengirimkan pencarian, pengurutan, dan penanganan data yang andal tanpa mengorbankan desain modular atau kesiapan production.",
    contribution:
      "Mengimplementasikan antarmuka dashboard dan pola komponen modular untuk alur kerja keuangan berbasis data di production.",
    outcomes: [
      "Menghadirkan dashboard keuangan production dengan alur pencarian dan pengurutan.",
      "Membangun pola UI modular yang sesuai untuk iterasi produk berkelanjutan.",
      "Menjaga interaksi penanganan data tetap jelas dan mudah dirawat untuk penggunaan operasional live.",
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
      "Membangun dashboard keuangan production dengan fitur pencarian, pengurutan, dan penanganan data.",
      "Berfokus pada UI yang bersih dan desain komponen modular untuk kemudahan perawatan.",
      "Menggunakan Supabase sebagai backend dengan TanStack Query dan Zustand untuk state klien.",
    ],
    githubUrl: "https://github.com/jordyandreas/digica-finance-dashboard",
    liveUrl: "https://digica-academy.vercel.app",
    status: "completed",
    platform: "web",
    showcaseImages: [
      {
        src: "/projects/digica-finance-dashboard/01-cover.webp",
        alt: "Cuplikan showcase Digica Finance Dashboard 1",
      },
    ],
    order: 5,
  },
  {
    id: "video-call-dashboard-suite",
    slug: "video-call-dashboard-suite",
    title: "Video Call Dashboard Suite",
    shortDescription:
      "Suite dashboard Turborepo modular dengan UI dan auth bersama di aplikasi Admin, Agency, dan Referral.",
    overview:
      "Membangun arsitektur frontend modular untuk tools internal platform video-call — Admin (ops & transaksi), Agency (talent & pendapatan), dan Referral (kampanye & penarikan) — yang dikirim sebagai monorepo Turborepo dengan fondasi UI, auth, dan data-fetching bersama.",
    domain: "Media / Tools Internal",
    role: "Frontend Engineer - arsitektur monorepo modular dan pengiriman UI/auth bersama",
    context:
      "Platform video-call membutuhkan permukaan internal terpisah untuk ops, manajemen talent agency, dan kampanye referral tanpa menduplikasi sistem UI atau autentikasi.",
    challenge:
      "Menjaga tiga dashboard domain tetap dapat dikirim secara mandiri sambil berbagi satu design system, lapisan auth, dan arsitektur frontend yang mudah dirawat.",
    contribution:
      "Merancang dan mengimplementasikan struktur monorepo Turborepo/pnpm, paket UI dan auth bersama, serta aplikasi dashboard Admin, Agency, dan Referral di atas fondasi tersebut.",
    outcomes: [
      "Membangun arsitektur frontend modular di dashboard Admin, Agency, dan Referral.",
      "Fondasi UI dan auth bersama mengurangi duplikasi dan menjaga konsistensi pengiriman produk.",
      "Menyusun suite sebagai monorepo Turborepo untuk pengiriman frontend multi-aplikasi yang skalabel.",
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
      "Membangun arsitektur frontend modular dengan setup Turborepo.",
      "Berbagi UI dan auth di dashboard Admin, Agency, dan Referral.",
      "Menggunakan TanStack Query, NextAuth, serta React Hook Form/Zod untuk data dan form.",
    ],
    githubUrl: null,
    liveUrl: null,
    status: "completed",
    platform: "web",
    showcaseImages: [
      {
        src: "/projects/video-call-dashboard-suite/01-cover.webp",
        alt: "Cuplikan showcase Video Call Dashboard Suite 1",
      },
      {
        src: "/projects/video-call-dashboard-suite/02-showcase.webp",
        alt: "Cuplikan showcase Video Call Dashboard Suite 2",
      },
      {
        src: "/projects/video-call-dashboard-suite/03-showcase.webp",
        alt: "Cuplikan showcase Video Call Dashboard Suite 3",
      },
      {
        src: "/projects/video-call-dashboard-suite/04-showcase.webp",
        alt: "Cuplikan showcase Video Call Dashboard Suite 4",
      },
      {
        src: "/projects/video-call-dashboard-suite/05-showcase.webp",
        alt: "Cuplikan showcase Video Call Dashboard Suite 5",
      },
      {
        src: "/projects/video-call-dashboard-suite/06-showcase.webp",
        alt: "Cuplikan showcase Video Call Dashboard Suite 6",
      },
      {
        src: "/projects/video-call-dashboard-suite/07-showcase.webp",
        alt: "Cuplikan showcase Video Call Dashboard Suite 7",
      },
      {
        src: "/projects/video-call-dashboard-suite/08-showcase.webp",
        alt: "Cuplikan showcase Video Call Dashboard Suite 8",
      },
    ],
    order: 2,
  },
  {
    id: "1on1-video-call-website",
    slug: "1on1-video-call-website",
    title: "1-on-1 Video Call Website",
    shortDescription:
      "Platform talent berbasis browser dengan onboarding KYC multi-langkah, panggilan video real-time, chat, manajemen penghasilan, dan penarikan.",
    overview:
      "Platform talent berbasis browser dengan onboarding KYC multi-langkah, panggilan video real-time, chat, manajemen penghasilan, dan penarikan. Dibangun di atas arsitektur Next.js BFF dengan Agora dan Firebase untuk komunikasi realtime.",
    domain: "Media / Platform Talent",
    role: "Frontend Engineer - platform talent, panggilan realtime, dan alur terintegrasi BFF",
    context:
      "Host talent membutuhkan platform browser untuk onboarding, panggilan live, chat, dan alur payout pada produk video-call.",
    challenge:
      "Menggabungkan KYC multi-langkah, media/chat realtime Agora, serta alur penghasilan/penarikan di balik arsitektur Next.js BFF yang jelas.",
    contribution:
      "Membangun pengalaman web platform talent dengan onboarding KYC, video/chat Agora, pola realtime Firebase, dan permukaan penghasilan/penarikan.",
    outcomes: [
      "Mengirimkan platform talent yang mencakup KYC, panggilan live, chat, manajemen penghasilan, dan penarikan.",
      "Mengintegrasikan Agora RTC/Chat dan Firebase realtime melalui arsitektur Next.js BFF.",
      "Menjaga alur host yang kompleks tetap terstruktur dengan form bertipe, query state, dan primitif UI.",
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
      "Membangun platform talent berbasis browser dengan onboarding KYC multi-langkah.",
      "Mengintegrasikan panggilan video dan chat realtime dengan Agora dan Firebase.",
      "Mendukung manajemen penghasilan dan penarikan melalui arsitektur Next.js BFF.",
    ],
    githubUrl: null,
    liveUrl: null,
    status: "completed",
    platform: "web",
    showcaseImages: [
      {
        src: "/projects/1on1-video-call-website/01-cover.webp",
        alt: "Cuplikan showcase 1-on-1 Video Call Website 1",
      },
      {
        src: "/projects/1on1-video-call-website/02-showcase.webp",
        alt: "Cuplikan showcase 1-on-1 Video Call Website 2",
      },
      {
        src: "/projects/1on1-video-call-website/03-showcase.webp",
        alt: "Cuplikan showcase 1-on-1 Video Call Website 3",
      },
      {
        src: "/projects/1on1-video-call-website/04-showcase.webp",
        alt: "Cuplikan showcase 1-on-1 Video Call Website 4",
      },
      {
        src: "/projects/1on1-video-call-website/05-showcase.webp",
        alt: "Cuplikan showcase 1-on-1 Video Call Website 5",
      },
      {
        src: "/projects/1on1-video-call-website/06-showcase.webp",
        alt: "Cuplikan showcase 1-on-1 Video Call Website 6",
      },
      {
        src: "/projects/1on1-video-call-website/07-showcase.webp",
        alt: "Cuplikan showcase 1-on-1 Video Call Website 7",
      },
      {
        src: "/projects/1on1-video-call-website/08-showcase.webp",
        alt: "Cuplikan showcase 1-on-1 Video Call Website 8",
      },
      {
        src: "/projects/1on1-video-call-website/09-showcase.webp",
        alt: "Cuplikan showcase 1-on-1 Video Call Website 9",
      },
    ],
    order: 1,
  },
  {
    id: "baby-monitor-dashboard",
    slug: "baby-monitor-dashboard",
    title: "Baby Monitor Dashboard",
    shortDescription:
      "Dashboard pelacakan kehamilan untuk vitamin, sesi Baby Plus, tendangan, asupan air, dan pengingat.",
    overview:
      "Dashboard pelacakan kehamilan untuk vitamin, sesi Baby Plus, tendangan, asupan air, dan pengingat — dengan penyimpanan local-first dan sync Supabase opsional.",
    domain: "Kesehatan / Wellness Konsumen",
    role: "Frontend Engineer - dashboard local-first dan sync cloud opsional",
    context:
      "Calon orang tua membutuhkan dashboard sederhana untuk melacak kebiasaan kehamilan harian dengan penyimpanan lokal yang andal dan backup cloud opsional.",
    challenge:
      "Menjaga pelacakan tetap cepat dan dapat digunakan offline sambil tetap mendukung sync Supabase opsional serta pengingat.",
    contribution:
      "Membangun UI dashboard dan lapisan data local-first dengan sync Supabase opsional, i18n kustom, serta pengingat melalui web notification/service worker.",
    outcomes: [
      "Menghadirkan pengalaman pelacakan kehamilan untuk vitamin, sesi, tendangan, air, dan pengingat.",
      "Mengimplementasikan penyimpanan local-first dengan sync Supabase opsional.",
      "Menambahkan dukungan notification dan service worker untuk alur pengingat.",
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
      "Membangun dashboard pelacakan kehamilan dengan penyimpanan local-first.",
      "Mendukung sync Supabase opsional untuk backup cloud.",
      "Menambahkan pengingat melalui Web Notifications dan Service Worker.",
    ],
    githubUrl: "https://github.com/jordyandreas/monitoring-baby-dashboard",
    liveUrl: "https://monitoring-baby-dashboard.vercel.app",
    status: "completed",
    platform: "web",
    showcaseImages: [
      {
        src: "/projects/baby-monitor-dashboard/01-cover.webp",
        alt: "Cuplikan showcase Baby Monitor Dashboard 1",
      },
      {
        src: "/projects/baby-monitor-dashboard/02-showcase.webp",
        alt: "Cuplikan showcase Baby Monitor Dashboard 2",
      },
      {
        src: "/projects/baby-monitor-dashboard/03-showcase.webp",
        alt: "Cuplikan showcase Baby Monitor Dashboard 3",
      },
      {
        src: "/projects/baby-monitor-dashboard/04-showcase.webp",
        alt: "Cuplikan showcase Baby Monitor Dashboard 4",
      },
      {
        src: "/projects/baby-monitor-dashboard/05-showcase.webp",
        alt: "Cuplikan showcase Baby Monitor Dashboard 5",
      },
    ],
    order: 7,
  },
  {
    id: "personal-portfolio-website",
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    shortDescription:
      "Portofolio pribadi yang menampilkan karya frontend, pengalaman, dan craft engineering dengan struktur jelas, konten berbasis data, serta motion yang rapi.",
    overview:
      "Membangun portofolio pribadi untuk menampilkan karya frontend, pengalaman, dan prinsip engineering — dengan arsitektur informasi yang jelas, konten berbasis data yang reusable, serta motion yang rapi.",
    domain: "Personal Brand / Situs Marketing",
    role: "Frontend Engineer - pengiriman produk portofolio dari ujung ke ujung",
    context:
      "Membutuhkan situs pribadi yang rapi untuk menyajikan case study, pengalaman, dan jalur kontak kepada recruiter serta engineering leader.",
    challenge:
      "Menjaga storytelling proyek tetap jelas dan mudah dirawat sambil mengirimkan motion yang rapi, aksesibilitas, dan pengalaman kontak yang andal.",
    contribution:
      "Merancang dan membangun portofolio multi-halaman dengan konten berbasis data bertipe, motion dengan dukungan reduced-motion, serta formulir kontak yang tervalidasi.",
    outcomes: [
      "Menghadirkan portofolio multi-halaman dengan alur beranda, proyek, tentang, dan kontak.",
      "Menyusun konten sebagai data bertipe agar pembaruan proyek dan pengalaman menjadi mudah.",
      "Mengirimkan motion yang rapi dengan dukungan reduced-motion serta formulir kontak yang tervalidasi.",
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
      "Membangun portofolio pribadi untuk case study proyek, pengalaman, dan alur kontak.",
      "Menggunakan konten berbasis data bertipe agar proyek dan pengalaman mudah diperbarui.",
      "Menambahkan motion dengan dukungan reduced-motion serta formulir kontak yang tervalidasi.",
    ],
    githubUrl: "https://github.com/jordyandreas/portfolio",
    liveUrl: "https://jordyandreas-dev.vercel.app",
    status: "completed",
    platform: "web",
    showcaseImages: [
      {
        src: "/projects/personal-portfolio-website/01-cover.webp",
        alt: "Cuplikan showcase Personal Portfolio Website 1",
      },
      {
        src: "/projects/personal-portfolio-website/02-showcase.webp",
        alt: "Cuplikan showcase Personal Portfolio Website 2",
      },
      {
        src: "/projects/personal-portfolio-website/03-showcase.webp",
        alt: "Cuplikan showcase Personal Portfolio Website 3",
      },
      {
        src: "/projects/personal-portfolio-website/04-showcase.webp",
        alt: "Cuplikan showcase Personal Portfolio Website 4",
      },
      {
        src: "/projects/personal-portfolio-website/05-showcase.webp",
        alt: "Cuplikan showcase Personal Portfolio Website 5",
      },
      {
        src: "/projects/personal-portfolio-website/06-showcase.webp",
        alt: "Cuplikan showcase Personal Portfolio Website 6",
      },
    ],
    order: 8,
  },
  {
    id: "namea-company-profile-website",
    slug: "namea-company-profile-website",
    title: "Namea - Company Profile Website",
    shortDescription:
      "Situs company profile responsif yang menampilkan layanan, proyek, dan identitas merek dengan animasi interaktif serta formulir kontak.",
    overview:
      "Membangun situs company profile responsif yang menampilkan layanan, proyek, dan identitas merek dengan animasi interaktif serta formulir kontak.",
    domain: "Korporat / Situs Marketing",
    role: "Frontend Engineer - pengiriman company profile dan presentasi merek interaktif",
    context:
      "Namea membutuhkan situs company profile yang rapi untuk menyajikan layanan, menampilkan proyek, dan memperkuat kehadiran merek secara online.",
    challenge:
      "Menyeimbangkan narasi perusahaan yang jelas, motion merek yang interaktif, dan alur kontak yang andal tanpa mengorbankan responsivitas atau kemudahan perawatan.",
    contribution:
      "Membangun antarmuka situs, lapisan animasi, dan pengalaman formulir kontak yang tervalidasi menggunakan struktur komponen Next.js yang reusable.",
    outcomes: [
      "Menghadirkan situs company profile responsif untuk layanan, showcase proyek, dan storytelling merek.",
      "Menggunakan motion interaktif untuk memperkuat presentasi situs tanpa mengorbankan kejelasan.",
      "Mengimplementasikan formulir kontak yang tervalidasi untuk mendukung lead capture dan outreach.",
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
      "Membangun situs company profile responsif dengan bagian showcase layanan dan proyek.",
      "Menambahkan animasi interaktif dengan Framer Motion dan Lottie untuk mendukung presentasi merek.",
      "Mengimplementasikan formulir kontak yang tervalidasi dengan React Hook Form dan Zod.",
    ],
    githubUrl: null,
    liveUrl: "https://nkt-lp.vercel.app",
    status: "completed",
    platform: "web",
    showcaseImages: [
      {
        src: "/projects/namea-company-profile-website/01-cover.webp",
        alt: "Cuplikan showcase Namea - Company Profile Website 1",
      },
      {
        src: "/projects/namea-company-profile-website/02-showcase.webp",
        alt: "Cuplikan showcase Namea - Company Profile Website 2",
      },
      {
        src: "/projects/namea-company-profile-website/03-showcase.webp",
        alt: "Cuplikan showcase Namea - Company Profile Website 3",
      },
      {
        src: "/projects/namea-company-profile-website/04-showcase.webp",
        alt: "Cuplikan showcase Namea - Company Profile Website 4",
      },
      {
        src: "/projects/namea-company-profile-website/05-showcase.webp",
        alt: "Cuplikan showcase Company Profile Website 5",
      },
    ],
    order: 3,
  },
  {
    id: "maybank-finance-app-v2",
    slug: "maybank-finance-app-v2",
    title: "Maybank Finance App - Revamp to V2",
    shortDescription:
      "Revamp V2 aplikasi Maybank Finance, memperluas pengiriman dari hanya Android ke iOS juga.",
    overview:
      "Merevamp Maybank Finance Apps ke versi 2.0 agar produk dapat digunakan di iOS, setelah sebelumnya hanya mendukung Android. Fokus pada pengiriman React Native dan pola mobile bersama lintas platform.",
    domain: "FinTech / Keuangan Konsumen",
    role: "Mobile Developer - revamp V2 dan pengiriman lintas platform",
    context:
      "Aplikasi keuangan konsumen yang membutuhkan rebuild V2 dan dukungan iOS sambil menjaga kelangsungan di Android.",
    challenge:
      "Membawa aplikasi keuangan yang sebelumnya hanya di Android ke iOS melalui arsitektur React Native bersama.",
    contribution:
      "Berkontribusi pada revamp V2 dengan React Native dan pola mobile berbasis Redux untuk pengiriman iOS dan Android.",
    outcomes: [
      "Memperluas ketersediaan aplikasi Maybank Finance dari hanya Android ke iOS.",
      "Mendukung revamp produk V2 dengan arsitektur React Native bersama.",
      "Memperkuat konsistensi pengiriman lintas platform untuk alur kerja keuangan konsumen.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "React Navigation",
      "REST API",
    ],
    highlights: [
      "Merevamp Maybank Finance Apps ke versi 2.0.",
      "Memperluas produk dari hanya Android ke dukungan iOS.",
      "Mengirimkan pola antarmuka mobile bersama dengan React Native.",
    ],
    githubUrl: null,
    liveUrl: null,
    status: "completed",
    platform: "mobile",
    showcaseImages: [
      {
        src: "/projects/maybank-finance-app-v2/01-cover.webp",
        alt: "Cuplikan showcase Maybank Finance App - Revamp to V2 1",
      },
    ],
    order: 4,
  },
  {
    id: "maybank-vospay-loan-app",
    slug: "maybank-vospay-loan-app",
    title: "Vospay - Loan Apps Internal Maybank",
    shortDescription:
      "Aplikasi internal manajemen cicilan untuk karyawan Maybank.",
    overview:
      "Aplikasi internal manajemen cicilan untuk karyawan Maybank. Menyediakan fitur pengajuan cicilan, simulasi pinjaman, dan pelacakan pembayaran.",
    domain: "FinTech / Tools Internal",
    role: "Mobile Developer - antarmuka alur kerja cicilan dan pinjaman",
    context:
      "Produk internal Maybank yang membutuhkan alur jelas untuk pengajuan cicilan, simulasi pinjaman, dan pelacakan pembayaran.",
    challenge:
      "Mengirimkan alur kerja mobile internal yang andal untuk pengajuan cicilan dan pelacakan pembayaran.",
    contribution:
      "Membangun antarmuka React Native untuk simulasi pinjaman, pengajuan cicilan, dan pelacakan pembayaran.",
    outcomes: [
      "Menghadirkan pengalaman manajemen cicilan internal untuk pengguna Maybank.",
      "Mendukung simulasi pinjaman dan pelacakan pembayaran dalam satu aplikasi mobile bersama.",
      "Menjaga alur pengajuan cicilan tetap jelas dan mudah dirawat untuk penggunaan internal.",
    ],
    technologies: [
      "React Native",
      "JavaScript",
      "Redux",
      "React Navigation",
      "REST API",
    ],
    highlights: [
      "Membangun fitur pengajuan cicilan, simulasi pinjaman, dan pelacakan pembayaran.",
      "Mendukung alur kerja cicilan internal karyawan Maybank.",
      "Mengirimkan pengalaman dengan React Native dan JavaScript.",
    ],
    githubUrl: null,
    liveUrl: null,
    status: "completed",
    platform: "mobile",
    showcaseImages: [
      {
        src: "/projects/maybank-vospay-loan-app/01-cover.webp",
        alt: "Cuplikan showcase Vospay - Loan Apps Internal Maybank 1",
      },
    ],
    order: 5,
  },
  {
    id: "masjidqu",
    slug: "masjidqu",
    title: "Masjidqu",
    shortDescription:
      "Aplikasi companion masjid berbasis React Native untuk jadwal sholat, masjid terdekat, kiblat, infaq digital, dan aktivitas komunitas.",
    overview:
      "Masjidqu adalah aplikasi mobile lintas platform yang membantu umat Muslim memulai dan menjaga konsistensi ibadah harian. Menggabungkan jadwal sholat dan pengingat, penemuan masjid terdekat dengan rating serta ulasan, arah kiblat, infaq digital, dan permukaan aktivitas masjid dalam pengalaman React Native yang bersih.",
    domain: "Agama / Lifestyle Mobile",
    role: "Mobile Developer - alur companion ibadah dan penemuan masjid berbasis lokasi",
    context:
      "Pengguna Muslim membutuhkan satu companion mobile untuk waktu sholat, penemuan masjid, donasi, dan keterlibatan komunitas tanpa berpindah-pindah antar banyak tools.",
    challenge:
      "Menggabungkan penemuan masjid berbasis lokasi, jadwal sholat yang akurat, panduan kiblat, dan alur donasi menjadi satu pengalaman mobile yang utuh.",
    contribution:
      "Membangun aplikasi React Native di sekitar dashboard sholat, kartu penemuan masjid, kompas kiblat, CTA infaq digital, dan permukaan engagement komunitas dengan pola navigasi serta state bersama.",
    outcomes: [
      "Mengirimkan companion ibadah yang mencakup waktu sholat, pengingat, dan hitung mundur sholat berikutnya.",
      "Mengaktifkan penemuan masjid terdekat dengan sinyal jarak, rating, dan ulasan.",
      "Mendukung panduan kiblat dan jalur infaq digital untuk kontribusi ke masjid.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "React Navigation",
      "Redux",
      "Axios",
      "REST API",
      "Firebase",
      "Google Maps",
      "Push Notifications",
      "Payment Gateway",
    ],
    highlights: [
      "Membangun dashboard waktu sholat dengan pengingat dan hitung mundur sholat berikutnya.",
      "Menambahkan penemuan masjid terdekat dengan konteks rating, jarak, dan ulasan.",
      "Mendukung kompas kiblat dan alur donasi infaq digital di React Native.",
    ],
    githubUrl: null,
    liveUrl: null,
    status: "completed",
    platform: "mobile",
    showcaseImages: [
      {
        src: "/projects/masjidqu/01-cover.webp",
        alt: "Cuplikan showcase splash merek dan logo Masjidqu 1",
      },
      {
        src: "/projects/masjidqu/02-showcase.webp",
        alt: "Cuplikan showcase aplikasi waktu sholat dan penemuan masjid Masjidqu 2",
      },
    ],
    order: 1,
  },
  {
    id: "video-call-apps",
    slug: "video-call-apps",
    title: "Video Call Apps",
    shortDescription:
      "Aplikasi React Native lintas platform untuk caller dan talent host dengan video Agora, chat, dan alur top-up.",
    overview:
      "Aplikasi React Native lintas platform untuk caller dan talent host — panggilan video Agora, signaling WebSocket, chat real-time, Google Sign-In, serta top-up melalui Google Play Billing dan Midtrans.",
    domain: "Media / Mobile Konsumen",
    role: "Mobile Developer - aplikasi caller/talent, media realtime, dan pembayaran",
    context:
      "Marketplace video-call yang membutuhkan aplikasi caller dan talent host terpisah dengan media realtime, chat, dan top-up yang andal.",
    challenge:
      "Mengirimkan panggilan lintas platform, signaling, chat, dan pembayaran tanpa memecah pengalaman mobile.",
    contribution:
      "Membangun pengalaman React Native untuk caller dan talent host dengan Agora RTC/Chat, signaling WebSocket, Firebase, serta integrasi payment gateway.",
    outcomes: [
      "Mengirimkan aplikasi caller dan talent host dengan panggilan video Agora dan chat realtime.",
      "Mengintegrasikan signaling WebSocket dan Firebase untuk koordinasi sesi live.",
      "Mendukung top-up melalui Google Play Billing dan Midtrans.",
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
      "Membangun aplikasi caller dan talent host lintas platform di React Native.",
      "Mengintegrasikan panggilan video Agora, chat, dan signaling WebSocket.",
      "Mendukung Google Sign-In serta top-up melalui Play Billing dan Midtrans.",
    ],
    githubUrl: null,
    liveUrl: null,
    status: "completed",
    platform: "mobile",
    showcaseImages: [],
    order: 2,
  },
  {
    id: "master-owner-app",
    slug: "master-owner-app",
    title: "Master Owner App",
    shortDescription:
      "Aplikasi React Native Expo untuk menampilkan daftar owner dan kucing, favorit, pengurutan, serta pemilihan master owner.",
    overview:
      "Aplikasi mobile lintas platform yang dibangun dengan React Native dan Expo untuk menampilkan daftar owner beserta kucingnya, mendukung pengurutan, favorit persisten melalui AsyncStorage, dan pemilihan master owner yang tersinkron dengan REST API. UI mengikuti desain Figma dengan komponen reusable, React Navigation, dan state berbasis Context.",
    domain: "Assessment / Mobile",
    role: "Mobile Developer - aplikasi Expo, navigasi, dan state tersinkron API",
    context:
      "Produk assessment mobile yang membutuhkan pengalaman daftar owner/kucing sesuai Figma dengan favorit dan pemilihan master owner.",
    challenge:
      "Menyelaraskan design system sambil menjaga favorit tetap persisten dan pemilihan master owner tersinkron ke REST API.",
    contribution:
      "Membangun aplikasi Expo dengan komponen reusable, React Navigation, favorit AsyncStorage, state Context, dan sync REST API untuk pemilihan master owner.",
    outcomes: [
      "Menghadirkan pengalaman daftar owner/kucing lintas platform dari desain Figma.",
      "Mendukung pengurutan, favorit persisten, dan pemilihan master owner.",
      "Meliputi alur kritis dengan tes Jest di sekitar komponen reusable dan state.",
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
      "Membangun aplikasi React Native Expo dari desain Figma.",
      "Menyimpan favorit dengan AsyncStorage dan menyinkronkan master owner via REST API.",
      "Menggunakan React Navigation dan state berbasis Context dengan komponen reusable.",
    ],
    githubUrl: "https://github.com/jordyandreas/master-owner-app",
    liveUrl: null,
    status: "completed",
    platform: "mobile",
    showcaseImages: [],
    order: 3,
  },
  {
    id: "wallet-disbursement-service",
    slug: "wallet-disbursement-service",
    title: "Wallet Disbursement Service",
    shortDescription:
      "Layanan HTTP Go yang mengurangi saldo wallet dan mencatat disbursement bank secara aman.",
    overview:
      "Layanan HTTP Go yang mengurangi saldo wallet dan mencatat disbursement bank dengan penyimpanan in-memory yang thread-safe.",
    domain: "FinTech / Backend",
    role: "Backend Engineer - API potongan wallet dan disbursement",
    context:
      "Produk wallet yang membutuhkan layanan andal untuk memotong saldo dan mencatat disbursement bank.",
    challenge:
      "Menjaga potongan wallet dan catatan disbursement tetap benar di bawah akses konkuren.",
    contribution:
      "Membangun layanan REST Go berbasis Gin dengan penyimpanan in-memory yang thread-safe untuk saldo wallet dan catatan disbursement.",
    outcomes: [
      "Menghadirkan layanan HTTP untuk potongan wallet dan pencatatan disbursement bank.",
      "Menggunakan penyimpanan in-memory yang thread-safe untuk operasi yang aman secara konkuren.",
      "Menyediakan permukaan REST API yang jelas dengan Gin.",
    ],
    technologies: ["Go", "Gin", "REST API"],
    highlights: [
      "Membangun layanan HTTP Go untuk potongan wallet dan disbursement bank.",
      "Mengimplementasikan penyimpanan in-memory yang thread-safe untuk akses konkuren.",
      "Menyediakan alur kerja melalui REST API Gin.",
    ],
    githubUrl: "https://github.com/jordyandreas/wallet-disbursement-service",
    liveUrl: null,
    status: "completed",
    platform: "backend",
    showcaseImages: [],
    order: 1,
  },
  {
    id: "master-owner-api",
    slug: "master-owner-api",
    title: "Master Owner API",
    shortDescription:
      "REST API Express.js untuk owner dan kucing dengan pengurutan, pemilihan master owner, serta persistensi berbasis file.",
    overview:
      "REST API Express.js terstruktur yang dibangun untuk assessment mobile. Mengelola owner beserta kucingnya, mendukung pengurutan, pemilihan master owner, dan menyimpan data dengan database JSON berbasis file. Dilengkapi routing modular, validasi, penanganan error, serta tes unit/integrasi lengkap.",
    domain: "Assessment / Backend",
    role: "Backend Engineer - REST API, validasi, dan cakupan tes",
    context:
      "Assessment mobile membutuhkan backend yang dapat mengelola owner/kucing, pengurutan, dan pemilihan master owner dengan persistensi serta tes yang andal.",
    challenge:
      "Menjaga API tetap modular dan teruji dengan baik sambil menggunakan database JSON berbasis file yang sederhana.",
    contribution:
      "Membangun API Express dengan persistensi LowDB, validasi Joi, routing modular, penanganan error, serta cakupan Jest/Supertest.",
    outcomes: [
      "Menghadirkan REST API untuk owner, kucing, pengurutan, dan pemilihan master owner.",
      "Menyimpan data dengan database JSON berbasis file melalui LowDB.",
      "Meliputi layanan dengan tes unit dan integrasi menggunakan Jest serta Supertest.",
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
      "Membangun REST API Express.js terstruktur untuk assessment mobile.",
      "Menambahkan routing modular, validasi Joi, dan penanganan error.",
      "Meliputi jalur unit dan integrasi dengan Jest serta Supertest.",
    ],
    githubUrl: "https://github.com/jordyandreas/master-owner-api",
    liveUrl: null,
    status: "completed",
    platform: "backend",
    showcaseImages: [],
    order: 2,
  },
];
