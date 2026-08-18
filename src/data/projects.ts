export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "medical" | "restaurant" | "resort" | "law-firm";
  categoryLabel: string;
  client: string;
  year: string;
  description: string;
  longDescription: string;
  technologies: string[];
  demoUrl: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
  previewTheme: string;
  heroTagline: string;
}

export const PROJECTS: Project[] = [
  // --- MEDICAL ---
  {
    id: "med-1",
    slug: "healthcare-pro",
    title: "HealthCare Pro",
    category: "medical",
    categoryLabel: "Medical & Health",
    client: "HealthCare Pro International",
    year: "2026",
    description: "A precision-engineered portal for modern multi-specialty clinical operations and instant patient scheduling.",
    longDescription: "HealthCare Pro reimagines clinical digital touchpoints with zero friction appointment booking, HIPAA-compliant patient intake flows, and real-time medical staff synchronization.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "HIPAA API"],
    demoUrl: "https://example.com/demo/healthcare-pro",
    featured: true,
    metrics: [
      { label: "Appointment Conversion", value: "+148%" },
      { label: "Load Time", value: "0.4s" },
      { label: "Patient Satisfaction", value: "99.2%" }
    ],
    previewTheme: "from-neutral-900 to-neutral-950",
    heroTagline: "Precision Healthcare Experience"
  },
  {
    id: "med-2",
    slug: "medclinic",
    title: "MedClinic",
    category: "medical",
    categoryLabel: "Medical & Health",
    client: "MedClinic Global",
    year: "2025",
    description: "Luxury minimalist interface for private surgical centers and boutique diagnostic labs.",
    longDescription: "MedClinic provides high-touch medical branding with interactive treatment exploration, practitioner credentials spotlight, and automated telemedicine integration.",
    technologies: ["Next.js", "React", "GSAP ScrollTrigger", "Tailwind CSS"],
    demoUrl: "https://example.com/demo/medclinic",
    featured: false,
    metrics: [
      { label: "Inbound Leads", value: "+210%" },
      { label: "Mobile Engagement", value: "88%" }
    ],
    previewTheme: "from-stone-900 to-stone-950",
    heroTagline: "Boutique Medical Excellence"
  },
  {
    id: "med-3",
    slug: "dental-care",
    title: "Dental Care",
    category: "medical",
    categoryLabel: "Medical & Health",
    client: "Apex Cosmetic Dentistry",
    year: "2025",
    description: "Architectural digital showcase for premium aesthetic dentistry and smile transformation suites.",
    longDescription: "Features interactive 3D before-and-after smile simulations, virtual consultations, and smooth patient workflow automation.",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    demoUrl: "https://example.com/demo/dental-care",
    featured: true,
    metrics: [
      { label: "Consultation Requests", value: "+320%" },
      { label: "Bounce Rate", value: "-45%" }
    ],
    previewTheme: "from-zinc-900 to-zinc-950",
    heroTagline: "Aesthetic Dental Mastery"
  },

  // --- RESTAURANT ---
  {
    id: "rest-1",
    slug: "urban-kitchen",
    title: "Urban Kitchen",
    category: "restaurant",
    categoryLabel: "Restaurants & Cafés",
    client: "Urban Kitchen Hospitality Group",
    year: "2026",
    description: "Immersive culinary presentation featuring cinematic video integration and reservation management.",
    longDescription: "Designed for Michelin-starred dining, Urban Kitchen connects epicurean storytelling with effortless table reservations and seasonal tasting menu reveals.",
    technologies: ["Next.js", "GSAP", "Lenis", "Tailwind CSS", "OpenTable API"],
    demoUrl: "https://example.com/demo/urban-kitchen",
    featured: true,
    metrics: [
      { label: "Online Reservations", value: "+185%" },
      { label: "Average Session", value: "3m 45s" }
    ],
    previewTheme: "from-neutral-900 to-black",
    heroTagline: "Cinematic Gastronomy Platform"
  },
  {
    id: "rest-2",
    slug: "pasta-house",
    title: "Pasta House",
    category: "restaurant",
    categoryLabel: "Restaurants & Cafés",
    client: "Pasta House Artisanal Dining",
    year: "2025",
    description: "Warm minimalist digital storefront for artisanal pasta craftsmanship and private event bookings.",
    longDescription: "Combines tactile craftsmanship aesthetic with interactive menu filtration, wine pairing highlights, and online gift card ordering.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://example.com/demo/pasta-house",
    featured: false,
    metrics: [
      { label: "Event Inquiries", value: "+160%" },
      { label: "Page Load", value: "0.5s" }
    ],
    previewTheme: "from-neutral-950 to-neutral-900",
    heroTagline: "Artisanal Culinary Craft"
  },
  {
    id: "rest-3",
    slug: "sunset-cafe",
    title: "Sunset Cafe",
    category: "restaurant",
    categoryLabel: "Restaurants & Cafés",
    client: "Sunset Roasters & Cafe",
    year: "2025",
    description: "Sleek coffee laboratory e-commerce and cafe location finder engineered for mobile-first visitors.",
    longDescription: "Integrated coffee bean subscription box, live cafe seat density indicator, and order-ahead pickup app interface.",
    technologies: ["Next.js", "Shopify Headless", "Tailwind CSS", "GSAP"],
    demoUrl: "https://example.com/demo/sunset-cafe",
    featured: true,
    metrics: [
      { label: "Mobile Orders", value: "+290%" },
      { label: "Subscription Sales", value: "+140%" }
    ],
    previewTheme: "from-stone-900 to-neutral-950",
    heroTagline: "Specialty Roastery Interface"
  },

  // --- RESORT ---
  {
    id: "res-1",
    slug: "ocean-resort",
    title: "Ocean Resort",
    category: "resort",
    categoryLabel: "Luxury Resorts & Villas",
    client: "Oceania Hospitality Group",
    year: "2026",
    description: "Ultra-luxury coastal resort portal featuring room customizers, interactive suite tours, and booking engine.",
    longDescription: "Ocean Resort sets the gold standard for high-end hospitality digital presence with immersive full-bleed imagery, concierge booking, and spa reservation suites.",
    technologies: ["Next.js", "GSAP ScrollTrigger", "Lenis", "Tailwind CSS", "Booking API"],
    demoUrl: "https://example.com/demo/ocean-resort",
    featured: true,
    metrics: [
      { label: "Direct Bookings", value: "+215%" },
      { label: "RevPAR Lift", value: "+38%" }
    ],
    previewTheme: "from-neutral-950 to-stone-900",
    heroTagline: "Coastal Sanctuary Experience"
  },
  {
    id: "res-2",
    slug: "paradise-villas",
    title: "Paradise Villas",
    category: "resort",
    categoryLabel: "Luxury Resorts & Villas",
    client: "Paradise Collection",
    year: "2025",
    description: "Private island villa rental showcase with 360 virtual walkthroughs and personal butler service requests.",
    longDescription: "Minimal luxury portal designed for high-net-worth travellers, offering bespoke itinerary configuration and private aviation arrangements.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://example.com/demo/paradise-villas",
    featured: false,
    metrics: [
      { label: "Inquiry Value", value: "₹4.8 Cr" },
      { label: "Conversion Rate", value: "8.4%" }
    ],
    previewTheme: "from-zinc-950 to-neutral-900",
    heroTagline: "Private Sanctuary Portal"
  },
  {
    id: "res-3",
    slug: "mountain-escape",
    title: "Mountain Escape",
    category: "resort",
    categoryLabel: "Luxury Resorts & Villas",
    client: "Alpine Peak Chalets",
    year: "2025",
    description: "Alpine luxury lodge digital experience highlighting winter sports packages and wellness retreat bookings.",
    longDescription: "Seamlessly integrates seasonal weather webcams, ski pass reservations, and fireside dining bookings.",
    technologies: ["Next.js", "GSAP", "Tailwind CSS", "Lenis"],
    demoUrl: "https://example.com/demo/mountain-escape",
    featured: true,
    metrics: [
      { label: "Winter Occupancy", value: "98%" },
      { label: "Repeat Guests", value: "64%" }
    ],
    previewTheme: "from-neutral-900 to-zinc-950",
    heroTagline: "Alpine Luxury Experience"
  },

  // --- LAW FIRM ---
  {
    id: "law-1",
    slug: "elite-legal",
    title: "Elite Legal",
    category: "law-firm",
    categoryLabel: "Corporate & Law Firms",
    client: "Elite Legal Partners LLP",
    year: "2026",
    description: "Authoritative corporate law firm website designed for international dispute resolution and M&A practice groups.",
    longDescription: "Elite Legal communicates quiet confidence and institutional authority through pristine typography, attorney credentials directory, and secure client portal access.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Algolia"],
    demoUrl: "https://example.com/demo/elite-legal",
    featured: true,
    metrics: [
      { label: "Retainer Value", value: "+175%" },
      { label: "Attorney Directory Usage", value: "78%" }
    ],
    previewTheme: "from-black to-neutral-900",
    heroTagline: "Institutional Legal Authority"
  },
  {
    id: "law-2",
    slug: "justice-partners",
    title: "Justice Partners",
    category: "law-firm",
    categoryLabel: "Corporate & Law Firms",
    client: "Justice Partners Litigation",
    year: "2025",
    description: "High-stakes trial litigation practice showcase emphasizing record-setting trial verdicts and case studies.",
    longDescription: "Structured case archive, interactive practice group matrix, and confidential intake channel for major class-action proceedings.",
    technologies: ["Next.js", "GSAP", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://example.com/demo/justice-partners",
    featured: false,
    metrics: [
      { label: "High-Cap Inquiries", value: "+240%" },
      { label: "Trust Score", value: "100%" }
    ],
    previewTheme: "from-neutral-950 to-black",
    heroTagline: "High-Stakes Trial Excellence"
  },
  {
    id: "law-3",
    slug: "prime-attorneys",
    title: "Prime Attorneys",
    category: "law-firm",
    categoryLabel: "Corporate & Law Firms",
    client: "Prime Intellectual Property Group",
    year: "2025",
    description: "Intellectual property & tech counsel digital hub designed for Silicon Valley startups and global tech giants.",
    longDescription: "Clean, technical aesthetic tailored for technology patents, trademark prosecution, and venture financing counsel.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP ScrollTrigger"],
    demoUrl: "https://example.com/demo/prime-attorneys",
    featured: true,
    metrics: [
      { label: "Tech Client Signings", value: "+190%" },
      { label: "Lighthouse Score", value: "100" }
    ],
    previewTheme: "from-stone-950 to-neutral-900",
    heroTagline: "Technology Counsel Interface"
  }
];

export const CATEGORIES = [
  { id: "all", label: "All Works" },
  { id: "medical", label: "Medical" },
  { id: "restaurant", label: "Restaurant & Cafe" },
  { id: "resort", label: "Resort" },
  { id: "law-firm", label: "Law Firm" }
];
