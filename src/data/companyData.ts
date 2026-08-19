export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
  videoUrl?: string;
  deviceType: "desktop" | "mobile" | "saas";
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Website" | "Mobile App" | "SaaS Product";
  year: string;
  client: string;
  description: string;
  impact: string;
  image: string;
  videoUrl?: string;
  deviceType: "desktop" | "mobile" | "saas";
  tags: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  architecture: string;
}

export interface SaaSProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: "Active & Operating" | "Beta" | "Scaling";
  users: string;
  image: string;
  videoUrl?: string;
  tags: string[];
  features: string[];
  link: string;
}

export interface StatItem {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  description: string;
}

export interface PillarItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export const COMPANY_INFO = {
  name: "Inlinebase Technologies Private Limited",
  shortName: "INLINEBASE",
  email: "info@inlinebase.com",
  phone: "+91 7008720822",
  whatsapp: "+917008720822",
  location: "Bhubaneswar, India",
  agencyUrl: "https://agency.inlinebase.com",
  tagline: "WE BUILD DIGITAL EXPERIENCES.",
  supportingText:
    "Inlinebase Technologies builds premium websites, mobile applications and SaaS products for ambitious businesses.",
  description:
    "Inlinebase Technologies Private Limited is a modern digital product studio and software company. We craft attractive websites, native mobile apps, and operate scalable SaaS platforms.",
  socials: [
    { name: "Agency Portal", url: "https://agency.inlinebase.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "X / Twitter", url: "https://twitter.com" },
    { name: "GitHub", url: "https://github.com" }
  ]
};

export const BRAND_MARQUEE_ITEMS = [
  "WEBSITES & DIGITAL FLAGSHIPS",
  "MOBILE APPLICATIONS",
  "SAAS PRODUCTS",
  "INLINEBASE TECHNOLOGIES",
  "EDITORIAL WEB DESIGN",
  "HIGH PERFORMANCE SYSTEMS"
];

export const STATS: StatItem[] = [
  {
    id: "stat-volume",
    value: 4.2,
    prefix: "$",
    suffix: "B+",
    decimals: 1,
    label: "Processed Volume",
    description: "Total annual transactional data processed."
  },
  {
    id: "stat-uptime",
    value: 99.99,
    suffix: "%",
    decimals: 2,
    label: "SLA Uptime",
    description: "High-availability cloud deployment."
  },
  {
    id: "stat-projects",
    value: 120,
    suffix: "+",
    label: "Deployments",
    description: "Websites, mobile apps and SaaS products shipped."
  },
  {
    id: "stat-latency",
    value: 15,
    prefix: "<",
    suffix: "ms",
    label: "Edge Latency",
    description: "Sub-millisecond global load times."
  }
];

export const PILLARS: PillarItem[] = [
  {
    number: "01",
    title: "Attractive Web Design",
    description: "Bespoke digital flagships with editorial typography.",
    highlight: "Visual storytelling supreme."
  },
  {
    number: "02",
    title: "Native Mobile Apps",
    description: "Fluid iOS and Android applications.",
    highlight: "Smooth gestures & performance."
  },
  {
    number: "03",
    title: "SaaS Ecosystem",
    description: "Proprietary in-house SaaS platforms built and operated.",
    highlight: "Multi-tenant cloud architectures."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "website-design-development",
    number: "01",
    title: "Attractive Websites",
    tagline: "Digital flagships engineered to wow visitors.",
    description:
      "We design and build bespoke, high-converting websites with editorial typography, buttery motion graphics, sub-second load times, and flawless mobile responsiveness.",
    deliverables: [
      "Custom Editorial Web Design",
      "Headless & Next.js Architectures",
      "Interactive Motion & GSAP Animations",
      "SEO & High Conversion Optimization"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    deviceType: "desktop",
    tags: ["Web Design", "Next.js", "GSAP", "Tailwind CSS", "SEO"]
  },
  {
    id: "mobile-app-development",
    number: "02",
    title: "Mobile Applications",
    tagline: "Fluid iOS & Android apps users love to launch daily.",
    description:
      "We architect intuitive, high-performance mobile applications for iOS and Android with smooth micro-interactions, offline synchronization, and instant push systems.",
    deliverables: [
      "iOS & Android Native Development",
      "React Native & Cross-Platform Apps",
      "Smooth Mobile UX/UI & Gestures",
      "App Store & Play Store Publishing"
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    deviceType: "mobile",
    tags: ["iOS", "Android", "React Native", "Swift", "Flutter"]
  },
  {
    id: "saas-product-engineering",
    number: "03",
    title: "SaaS Product Engineering",
    tagline: "Scalable cloud platforms built from zero to market leadership.",
    description:
      "We build, launch, and operate multi-tenant SaaS products with real-time data streaming, subscription billing engines, and robust security isolation.",
    deliverables: [
      "Multi-Tenant SaaS Architecture",
      "Subscription Billing & Payments",
      "Real-Time Analytics Dashboards",
      "Cloud Infrastructure & API Engines"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    deviceType: "saas",
    tags: ["SaaS Architecture", "AWS", "Stripe API", "Node.js", "Docker"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "nexus-luxury-web",
    title: "Nexus Digital Flagship",
    category: "Website",
    year: "2026",
    client: "Nexus Global Holdings",
    description:
      "An editorial website featuring dark mode glassmorphic UI, fluid scroll reveals, and 3D product previews.",
    impact: "+210% increase in qualified organic lead conversions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    deviceType: "desktop",
    tags: ["Next.js", "GSAP", "Editorial Web", "Tailwind"],
    metrics: [
      { label: "Page Speed", value: "99/100" },
      { label: "Conversion Delta", value: "+210%" },
      { label: "Avg Session", value: "4m 12s" }
    ],
    overview:
      "Nexus Global required a visually striking corporate flagship website to showcase their enterprise technology portfolio to international investors.",
    architecture:
      "Engineered with React 19, Lenis smooth scrolling, and hardware-accelerated CSS transforms."
  },
  {
    id: "pulse-fit-app",
    title: "PulseFit Mobile Application",
    category: "Mobile App",
    year: "2025",
    client: "PulseFit Labs",
    description:
      "A sleek health & biometrics iOS and Android application with real-time haptic workout guidance and dark UI aesthetics.",
    impact: "450,000+ active monthly app store downloads.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    deviceType: "mobile",
    tags: ["React Native", "iOS", "Android", "Biometrics API"],
    metrics: [
      { label: "Downloads", value: "450K+" },
      { label: "Store Rating", value: "4.9 ★" },
      { label: "Retention", value: "68%" }
    ],
    overview:
      "PulseFit wanted a minimal, high-contrast mobile app that felt light-speed responsive during workout tracking without battery drain.",
    architecture:
      "Built using React Native with native C++ threading for background sensor integration."
  },
  {
    id: "aether-analytics-saas",
    title: "Aetheria Analytics Platform",
    category: "SaaS Product",
    year: "2025",
    client: "In-House SaaS Ecosystem",
    description:
      "Real-time event processing dashboard monitoring cloud telemetry, system logs, and security audit channels.",
    impact: "Processing 2.5B+ monthly metrics for enterprise tenants.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    deviceType: "saas",
    tags: ["Multi-Tenant SaaS", "WebSockets", "ClickHouse", "React"],
    metrics: [
      { label: "Metrics / sec", value: "120K" },
      { label: "Tenant Uptime", value: "99.99%" },
      { label: "Query Speed", value: "<12ms" }
    ],
    overview:
      "An in-house SaaS platform engineered by Inlinebase Technologies for enterprise infrastructure monitoring.",
    architecture:
      "Microservice cluster powered by Go, ClickHouse vector databases, and real-time WebSocket subscriptions."
  },
  {
    id: "vogue-commerce",
    title: "Vogue Atelier Digital Store",
    category: "Website",
    year: "2025",
    client: "Vogue Atelier",
    description:
      "High-fashion luxury e-commerce experience with interactive lookbooks, fluid transitions, and sub-second instant checkout.",
    impact: "+165% mobile sales growth in first quarter.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    deviceType: "desktop",
    tags: ["E-Commerce", "Headless Shopify", "Framer Motion"],
    metrics: [
      { label: "Checkout Time", value: "<1.5s" },
      { label: "Conversion", value: "4.8%" },
      { label: "Bounce Rate", value: "-28%" }
    ],
    overview:
      "A flagship luxury fashion store built with headless e-commerce architecture and custom visual filters.",
    architecture:
      "Next.js App Router connected to Shopify GraphQL API with edge caching."
  }
];

export const SAAS_PRODUCTS: SaaSProductItem[] = [
  {
    id: "saas-inlineflow",
    name: "InlineFlow Engine",
    tagline: "Automated Workflow & Form Builder for Agencies.",
    description:
      "An intuitive SaaS platform enabling agencies to construct complex client intake workflows, signature pipelines, and automated CRM syncs in minutes.",
    status: "Active & Operating",
    users: "12,500+ Active Teams",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    tags: ["Workflow SaaS", "Automation", "CRM Sync", "React"],
    features: [
      "Visual Drag-and-Drop Workflow Canvas",
      "Stripe & Razorpay Payment Integrations",
      "White-Label Agency Client Portals",
      "Automated PDF & Document Generation"
    ],
    link: "https://agency.inlinebase.com"
  },
  {
    id: "saas-pulsemetric",
    name: "PulseMetric AI",
    tagline: "Real-time Web Analytics & User Session Replay.",
    description:
      "Privacy-first web analytics SaaS providing instant heatmaps, session replay recordings, and AI conversion recommendations for modern web products.",
    status: "Scaling",
    users: "8,400+ Websites Monitored",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    tags: ["AI Analytics", "Session Replay", "Heatmaps", "Privacy First"],
    features: [
      "Sub-5KB Lightweight Tracking Snippet",
      "GDPR & CCPA Zero-Cookie Compliance",
      "AI Funnel Drop-off Diagnostic Engine",
      "Real-time Slack & Discord Alerts"
    ],
    link: "https://agency.inlinebase.com"
  },
  {
    id: "saas-appstack",
    name: "AppStack Studio",
    tagline: "No-Code Mobile App Builder for E-Commerce Brands.",
    description:
      "Empowers Shopify and WooCommerce brands to convert their online stores into native iOS and Android apps with push notification marketing.",
    status: "Active & Operating",
    users: "350+ E-Commerce Brands",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutback2012.mp4",
    tags: ["No-Code App Builder", "Shopify API", "Mobile Push"],
    features: [
      "Instant App Store Submission Pipeline",
      "Automated Abandoned Cart Push Alerts",
      "Native Apple Pay & Google Pay Checkout",
      "Custom Brand Theme Designer"
    ],
    link: "https://agency.inlinebase.com"
  }
];

export const SHOWREEL_VIDEOS = [
  {
    title: "Websites & Digital Flagships",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Mobile App Experiences",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "SaaS Product Ecosystem",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
  }
];
