export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "web-design",
    number: "01",
    title: "Website Design",
    subtitle: "Custom Bespoke Visual Systems",
    description: "Architecting original digital aesthetics that command prestige, establish trust, and turn visitors into devoted advocates.",
    deliverables: ["Custom Design System", "High-Fidelity Wireframes", "Interactive Prototypes", "Micro-interaction Specs"]
  },
  {
    id: "web-development",
    number: "02",
    title: "Website Development",
    subtitle: "Engineering Excellence & Scalability",
    description: "Building lighting-fast, responsive web platforms leveraging Next.js, React, TypeScript, and modern headless infrastructure.",
    deliverables: ["Next.js App Router Architecture", "GSAP & Motion Engineering", "Clean Semantic Markup", "API Integration"]
  },
  {
    id: "ui-ux",
    number: "03",
    title: "UI/UX Design",
    subtitle: "Frictionless User Journeys",
    description: "Deep user psychology research and intuitive layout engineering designed to maximize conversion and dwell time.",
    deliverables: ["User Journey Mapping", "Information Architecture", "Usability Audit & Testing", "Design Systems"]
  },
  {
    id: "landing-pages",
    number: "04",
    title: "Landing Pages",
    subtitle: "High-Impact Conversion Engines",
    description: "Single-minded digital experiences tailored for flagship product launches, lead generation, and targeted marketing campaigns.",
    deliverables: ["Conversion Rate Optimization", "Copywriting Alignment", "A/B Testing Ready", "Fast Load Speed"]
  },
  {
    id: "website-redesign",
    number: "05",
    title: "Website Redesign",
    subtitle: "Modernizing Brand Touchpoints",
    description: "Transforming outdated web assets into sleek, modern, high-converting platforms while preserving SEO equity.",
    deliverables: ["SEO Migration Strategy", "Visual Brand Elevation", "Technical Debt Removal", "Mobile Optimization"]
  },
  {
    id: "seo-optimization",
    number: "06",
    title: "SEO Optimization",
    subtitle: "Organic Authority & Visibility",
    description: "Technical SEO architecture, structured metadata schema, and performance audits ensuring dominance on search engines.",
    deliverables: ["Technical Audit & Schema Markup", "Core Web Vitals Optimization", "Keyword Architecture", "Sitemap & Indexing"]
  },
  {
    id: "performance-optimization",
    number: "07",
    title: "Performance Optimization",
    subtitle: "Sub-Second Page Loads",
    description: "Optimizing DOM execution, image compression, code splitting, and browser caching to hit Lighthouse 95+ scores.",
    deliverables: ["Sub-500ms First Contentful Paint", "Image & Vector Compression", "Bundle Size Reduction", "CDNs & Caching"]
  },
  {
    id: "maintenance",
    number: "08",
    title: "Maintenance & SLA",
    subtitle: "Continuous Security & Updates",
    description: "Dedicated monthly care, uptime monitoring, dependency upgrades, and ongoing iterative feature refinements.",
    deliverables: ["24/7 Uptime Monitoring", "Security Patches & Updates", "Monthly Analytics Reports", "Priority Support Hours"]
  }
];
