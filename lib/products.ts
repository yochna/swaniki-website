export type Product = {
  slug: string;
  name: string;
  category: string;
  status?: string;
  description: string;
  url?: string;
  screenshot?: string;
  heroScreenshot?: string;
  problem: string;
  idea: string;
  howItWorks: string[];
  features: { title: string; description: string }[];
  gallery: string[];
  technology: string[];
  tags: string[];
};

export const products: Product[] = [
  {
    slug: "foundersignal",
    name: "FounderSignal",
    category: "AI & Market Research",
    status: "V2",
    description:
      "AI-powered platform for discovering business opportunities backed by real market signals.",
    url: "https://foundersignal.com",
    screenshot: "/shots/products/foundersignal.jpg",
    heroScreenshot: "/shots/products/foundersignal.jpg",
    problem:
      "Founders and product teams waste months building products based on intuition rather than validated market demand.",
    idea: "Aggregate real-time web discussions, searches, and trend signals to surface high-conviction product opportunities automatically.",
    howItWorks: [
      "Monitors multi-channel discussions and trend data continuously.",
      "Uses NLP models to cluster pain points into structured problem spaces.",
      "Scores opportunities by search velocity, sentiment, and competition gap.",
      "Delivers weekly prioritized signals with actionable product blueprints.",
    ],
    features: [
      {
        title: "Signal Intelligence Engine",
        description: "Scans communities, review sites, and social platforms for surging user frustrations.",
      },
      {
        title: "TAM & Competition Scoring",
        description: "Evaluates existing solution saturation and estimates market opportunity size.",
      },
      {
        title: "Weekly Actionable Reports",
        description: "Curated briefs with revenue model ideas, MVP features, and target audience definitions.",
      },
    ],
    gallery: ["/shots/products/foundersignal.jpg"],
    technology: ["Next.js 14", "TypeScript", "Tailwind CSS", "OpenAI API", "PostgreSQL", "Supabase"],
    tags: ["AI", "Market Research", "SaaS"],
  },
  {
    slug: "kontentos",
    name: "KontentOS",
    category: "Creator Tools",
    status: "V2",
    description:
      "All-in-one content OS for creators to plan, create, and publish better content.",
    url: "https://kontentos.com",
    screenshot: "/shots/products/kontentos.jpg",
    heroScreenshot: "/shots/products/kontentos.jpg",
    problem:
      "Modern creators juggle dozens of disconnected tools for scripting, scheduling, asset management, and analytics.",
    idea: "A unified workspace connecting idea brainstorming, script generation, production pipeline, and cross-platform publishing.",
    howItWorks: [
      "Capture raw thoughts and voice notes directly into smart topic boards.",
      "Transform ideas into scripts and hooks optimized for specific social platforms.",
      "Track production status across recording, editing, and thumbnail design.",
      "Schedule and sync posts across YouTube, LinkedIn, X, and TikTok.",
    ],
    features: [
      {
        title: "Raw-to-Reel Scripting",
        description: "Turn rough notes into high-retention video outlines and hooks in seconds.",
      },
      {
        title: "Visual Production Kanban",
        description: "Manage multiple video pipelines from ideation to final render seamlessly.",
      },
      {
        title: "Asset & Thumbnail Library",
        description: "Centralized repository for b-roll, audio stems, LUTs, and thumbnail variations.",
      },
    ],
    gallery: ["/shots/products/kontentos.jpg"],
    technology: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Prisma", "AWS S3"],
    tags: ["Content", "Creator Tools", "SaaS"],
  },
  {
    slug: "swapiki",
    name: "Swapiki WebApp",
    category: "Community & SaaS",
    status: "Active",
    description:
      "A smart platform that makes professional discovery and decision-making easier.",
    url: "https://swapiki.com",
    screenshot: "/shots/products/swapiki.jpg",
    heroScreenshot: "/shots/products/swapiki.jpg",
    problem:
      "Navigating fragmented professional networks and tool ecosystems creates friction when making business decisions.",
    idea: "A streamlined community-driven knowledge discovery and peer recommendation hub.",
    howItWorks: [
      "Members submit verified tool reviews, stack setups, and workflow recipes.",
      "Algorithmic filtering matches teams with optimal solutions based on company stage.",
      "Direct peer Q&A unlocks candid feedback before purchasing software.",
    ],
    features: [
      {
        title: "Curated Stack Discovery",
        description: "Browse software combinations used by verified fast-growing tech companies.",
      },
      {
        title: "Peer-to-Peer Recommendations",
        description: "Ask questions and get answers from verified engineers and operators.",
      },
      {
        title: "Comparison Matrices",
        description: "Side-by-side feature, pricing, and latency breakdowns for popular SaaS products.",
      },
    ],
    gallery: ["/shots/products/swapiki.jpg"],
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Redis", "PostgreSQL"],
    tags: ["SaaS", "Web App", "Community"],
  },
  {
    slug: "swaniki-academy",
    name: "Swaniki Academy",
    category: "Education & Learning",
    status: "New",
    description:
      "Learning platform with curated courses, resources and practical projects.",
    url: "https://academy.swaniki.com",
    screenshot: "",
    heroScreenshot: "",
    problem:
      "Traditional coding bootcamps focus on outdated theory rather than building production-ready SaaS and automations.",
    idea: "A project-based digital academy teaching full-stack product building, AI automation, and cloud architecture.",
    howItWorks: [
      "Interactive video lessons with synchronized code playgrounds.",
      "Ship real-world projects with automated grading and code reviews.",
      "Private developer community and weekly live office hours.",
    ],
    features: [
      {
        title: "Real-World SaaS Blueprints",
        description: "Build full multi-tenant apps from scratch with auth, payments, and background jobs.",
      },
      {
        title: "AI Integration Modules",
        description: "Learn how to build RAG pipelines, fine-tune models, and integrate agent workflows.",
      },
      {
        title: "Certificate & Portfolio System",
        description: "Verified certificates backed by GitHub repos demonstrating live deployed apps.",
      },
    ],
    gallery: [],
    technology: ["Next.js 14", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"],
    tags: ["Education", "Learning", "Web App"],
  },
  {
    slug: "swaniki-technologies",
    name: "Swaniki Technologies",
    category: "Studio & Platform",
    status: "Live",
    description:
      "The digital home of Swaniki and its products, solutions and services.",
    url: "https://swaniki.com",
    screenshot: "/shots/products/swaniki.jpg",
    heroScreenshot: "/shots/products/swaniki.jpg",
    problem:
      "Modern businesses struggle to find a single partner capable of shipping both product-grade SaaS and high-converting web experiences.",
    idea: "An integrated digital product studio blending engineering excellence, AI automation, and conversion design.",
    howItWorks: [
      "Collaborative discovery sprint to define architecture and KPI milestones.",
      "Agile 2-week delivery cycles with live staging environments.",
      "Post-launch telemetry, performance tuning, and growth optimization.",
    ],
    features: [
      {
        title: "Full Lifecycle Delivery",
        description: "From napkin sketches to enterprise cloud deployments and automated CI/CD.",
      },
      {
        title: "Modern Tech Stacks",
        description: "Built with Next.js, TypeScript, Tailwind, and serverless edge infrastructure.",
      },
      {
        title: "Conversion-Focused UX",
        description: "Every layout designed to maximize engagement, retention, and business growth.",
      },
    ],
    gallery: ["/shots/products/swaniki.jpg"],
    technology: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "DaisyUI"],
    tags: ["Company", "Technology", "Platform"],
  },
];
