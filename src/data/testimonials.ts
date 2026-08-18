export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  metrics: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "INLINEBASE delivered a web platform that completely redefined our brand standing in the international luxury market. Their precision and animation craftsmanship are second to none.",
    author: "Elena Rostova",
    role: "Managing Director",
    company: "Oceania Hospitality Group",
    industry: "Resorts & Luxury Living",
    metrics: "+215% Direct Bookings"
  },
  {
    id: "test-2",
    quote: "Our new digital presence created by INLINEBASE instantly established us as the premier litigation practice in our jurisdiction. Clients routinely comment on how clean and confident the site feels.",
    author: "Arthur Vance",
    role: "Senior Partner",
    company: "Elite Legal Partners LLP",
    industry: "Law Firm",
    metrics: "+175% Retainer Inquiries"
  },
  {
    id: "test-3",
    quote: "The speed, fluidity, and attention to detail in their work blew us away. INLINEBASE built a platform that feels like an interactive piece of modern architecture.",
    author: "Dr. Marcus Thorne",
    role: "Chief Medical Officer",
    company: "HealthCare Pro International",
    industry: "Medical",
    metrics: "+148% Patient Bookings"
  },
  {
    id: "test-4",
    quote: "Working with INLINEBASE was seamless. They understood our culinary vision instantly and built a digital dining experience that converted browsers into packed tables night after night.",
    author: "Chef Laurent Blanc",
    role: "Executive Chef & Founder",
    company: "Urban Kitchen Group",
    industry: "Restaurant & Cafe",
    metrics: "+185% Table Reservations"
  }
];
