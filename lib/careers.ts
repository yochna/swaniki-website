import { site } from "@/lib/site";

export type Career = {
  slug: string;
  title: string;
  type: "Full-time" | "Internship" | "Part-time" | "Contract";
  department: string;
  location: string;
  mode: "Remote" | "Hybrid" | "On-site";
  description: string;
  responsibilities: string[];
  requirements: string[];
  /** Google Form (or other) application link. Defaults to the shared Swaniki careers form. */
  applyUrl?: string;
};

/**
 * Every opening applies through the same Swaniki careers form by default.
 * To point a specific role to a different form, set its own `applyUrl`.
 */
export const CAREERS_FORM_URL = site.careersFormUrl;

export const careers: Career[] = [
  {
    slug: "frontend-engineer",
    title: "Frontend Engineer",
    type: "Full-time",
    department: "Engineering",
    location: "Remote",
    mode: "Remote",
    description:
      "Build fast, polished, production-grade interfaces for Swaniki's SaaS products and client web platforms using React and Next.js.",
    responsibilities: [
      "Ship responsive, accessible UI across our product suite",
      "Collaborate with design to translate concepts into pixel-accurate components",
      "Optimize performance and Core Web Vitals across pages",
      "Write clean, reusable, well-tested component code",
    ],
    requirements: [
      "Solid experience with React, Next.js and TypeScript",
      "Comfort with Tailwind CSS or similar utility-first styling",
      "Eye for detail and a bias toward clean, maintainable code",
      "Good communication and ownership mindset",
    ],
  },
  {
    slug: "backend-engineer",
    title: "Backend Engineer",
    type: "Full-time",
    department: "Engineering",
    location: "Remote",
    mode: "Remote",
    description:
      "Design and build scalable APIs, automation pipelines and multi-tenant architectures that power Swaniki's products and client solutions.",
    responsibilities: [
      "Architect and maintain backend services and APIs",
      "Build integrations, workflow automations and data pipelines",
      "Own database design, performance and reliability",
      "Work closely with product and frontend teams on feature delivery",
    ],
    requirements: [
      "Strong experience with Node.js or a similar backend stack",
      "Working knowledge of SQL/NoSQL databases and cloud deployment",
      "Understanding of API design, authentication and security basics",
      "Ability to work independently in a fast-moving team",
    ],
  },
  {
    slug: "software-development-intern",
    title: "Software Development Intern",
    type: "Internship",
    department: "Engineering",
    location: "Remote",
    mode: "Remote",
    description:
      "Work alongside our engineering team on real product features, automations and client projects while learning production-grade software practices.",
    responsibilities: [
      "Assist in building and testing features across live projects",
      "Fix bugs and write small, well-scoped improvements",
      "Learn our codebase, tooling and deployment workflow",
      "Participate in code reviews and team stand-ups",
    ],
    requirements: [
      "Basic knowledge of JavaScript/TypeScript, HTML and CSS",
      "Currently pursuing or recently completed a degree in CS or related field",
      "Curiosity, willingness to learn, and consistent availability",
      "Prior personal or academic projects are a plus",
    ],
  },
  {
    slug: "marketing-design-intern",
    title: "Marketing & Design Intern",
    type: "Internship",
    department: "Marketing",
    location: "Remote",
    mode: "Remote",
    description:
      "Support Swaniki's brand, content and design efforts — from social content to landing page visuals — across our products and client campaigns.",
    responsibilities: [
      "Design social posts, graphics and simple marketing assets",
      "Help draft content for the blog, site and social channels",
      "Support campaign planning and performance tracking",
      "Collaborate with the product team on visual consistency",
    ],
    requirements: [
      "Basic proficiency with a design tool (Figma, Canva, etc.)",
      "Strong writing and visual sense",
      "Interest in startups, SaaS and digital marketing",
      "Reliable, organized and proactive",
    ],
  },
];
