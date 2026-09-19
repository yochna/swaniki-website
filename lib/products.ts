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
    url: "https://foundersignal.swaniki.com/",
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
    url: "https://kontentos-v2.vercel.app/",
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
    slug: "vibe-by-swaniki",
    name: "Vibe by Swaniki",
    category: "Events & Community",
    status: "Live",
    description:
      "Event discovery and experiences platform from Swaniki.",
    url: "https://vibe-swaniki-events.vercel.app/",
    screenshot: "",
    heroScreenshot: "",
    problem:
      "Finding the right events and sharing them with the right people is scattered across chats, posters and social feeds.",
    idea: "One place to discover, browse and share events with a clean, social-first experience.",
    howItWorks: [
      "Browse upcoming events in a single, easy-to-scan feed.",
      "Open an event to see details at a glance.",
      "Share events with friends and communities.",
    ],
    features: [
      {
        title: "Event Discovery",
        description: "Explore events in one clean, searchable feed.",
      },
      {
        title: "Event Details",
        description: "Clear information for every event, on any device.",
      },
      {
        title: "Easy Sharing",
        description: "Pass events on to friends and communities in a tap.",
      },
    ],
    gallery: [],
    technology: [],
    tags: ["Events", "Community", "Web App"],
  },
  {
    slug: "lead-intelligence",
    name: "Lead Intelligence",
    category: "Sales & Growth",
    status: "Live",
    description:
      "A dashboard that helps teams organise, track and act on leads.",
    url: "https://dashboard.swanikilms.workers.dev/",
    screenshot: "",
    heroScreenshot: "",
    problem:
      "Leads get scattered across sheets and inboxes, so follow-ups are missed and good opportunities go cold.",
    idea: "A single dashboard that brings leads together so teams can see what needs attention next.",
    howItWorks: [
      "Bring leads into one dashboard.",
      "Review and organise them by status.",
      "Focus follow-ups where they matter most.",
    ],
    features: [
      {
        title: "Lead Dashboard",
        description: "All leads and their status in one view.",
      },
      {
        title: "Organised Pipeline",
        description: "Keep track of where each lead stands.",
      },
      {
        title: "Actionable Overview",
        description: "See at a glance what needs attention next.",
      },
    ],
    gallery: [],
    technology: [],
    tags: ["Sales", "Dashboard", "SaaS"],
  },
  {
    slug: "website-doctor",
    name: "Website Doctor",
    category: "Web Diagnostics",
    status: "V1",
    description:
      "Check up on a website and see what needs fixing.",
    url: "https://website-doctor-one.vercel.app/",
    screenshot: "",
    heroScreenshot: "",
    problem:
      "Site owners rarely know what is quietly hurting their website's performance and quality.",
    idea: "A quick diagnostic that reviews a website and points out what to improve.",
    howItWorks: [
      "Enter a website address.",
      "The tool reviews the site.",
      "Get a clear summary of what to improve.",
    ],
    features: [
      {
        title: "Quick Website Check",
        description: "Run a review of any public website in moments.",
      },
      {
        title: "Clear Findings",
        description: "Issues explained in plain language.",
      },
      {
        title: "Improvement Pointers",
        description: "Know what to fix first.",
      },
    ],
    gallery: [],
    technology: [],
    tags: ["Web", "Diagnostics", "Tools"],
  },
  {
    slug: "website-doctor-v2",
    name: "Website Doctor V2",
    category: "Web Diagnostics",
    status: "V2",
    description:
      "The next version of Website Doctor, our website check-up tool.",
    url: "https://website-doctor-v2.vercel.app/",
    screenshot: "",
    heroScreenshot: "",
    problem:
      "Site owners rarely know what is quietly hurting their website's performance and quality.",
    idea: "An updated diagnostic experience that reviews a website and points out what to improve.",
    howItWorks: [
      "Enter a website address.",
      "The tool reviews the site.",
      "Get a clear summary of what to improve.",
    ],
    features: [
      {
        title: "Refreshed Experience",
        description: "An updated interface for running website check-ups.",
      },
      {
        title: "Clear Findings",
        description: "Issues explained in plain language.",
      },
      {
        title: "Improvement Pointers",
        description: "Know what to fix first.",
      },
    ],
    gallery: [],
    technology: [],
    tags: ["Web", "Diagnostics", "Tools"],
  },
  {
    slug: "website-builder",
    name: "Website Builder",
    category: "Web Tools",
    status: "Live",
    description:
      "Build and launch a website without starting from a blank page.",
    url: "https://arc-studio-mauve.vercel.app/",
    screenshot: "",
    heroScreenshot: "",
    problem:
      "Getting a professional website live usually means starting from scratch and juggling several tools.",
    idea: "A builder that helps you go from idea to a finished website quickly.",
    howItWorks: [
      "Start with your idea.",
      "Shape the pages and content.",
      "Publish your website.",
    ],
    features: [
      {
        title: "Guided Building",
        description: "Move from idea to a finished site step by step.",
      },
      {
        title: "Polished Design",
        description: "Layouts that look professional out of the box.",
      },
      {
        title: "Fast Publishing",
        description: "Get your website online quickly.",
      },
    ],
    gallery: [],
    technology: [],
    tags: ["Web", "Builder", "SaaS"],
  },
  {
    slug: "event-aggregator",
    name: "Event Aggregator",
    category: "Events & Automation",
    status: "Live",
    description:
      "An app that gathers events from multiple sources into one place.",
    url: "https://ai-event-aggregator.vercel.app/admin",
    screenshot: "",
    heroScreenshot: "",
    problem:
      "Events are published across many sites and platforms, so keeping track of them is slow and manual.",
    idea: "Collect events from different sources and manage them in a single place.",
    howItWorks: [
      "Gather events from multiple sources.",
      "Review and manage them from an admin view.",
      "Publish a single, consolidated list.",
    ],
    features: [
      {
        title: "Multi-Source Collection",
        description: "Bring events from different places together.",
      },
      {
        title: "Admin Management",
        description: "Review and manage events from one screen.",
      },
      {
        title: "Consolidated Listing",
        description: "One tidy list instead of many scattered ones.",
      },
    ],
    gallery: [],
    technology: [],
    tags: ["Events", "Automation", "AI"],
  },
  {
    slug: "swatrack",
    name: "SwaTrack",
    category: "Productivity & Tracking",
    status: "Live",
    description:
      "A simple tracker from Swaniki to keep work and progress organised.",
    url: "https://swatrack-delta.vercel.app/",
    screenshot: "",
    heroScreenshot: "",
    problem:
      "Progress and tasks get lost when they are tracked in too many places.",
    idea: "A lightweight tracker that keeps everything visible in one place.",
    howItWorks: [
      "Add what you want to track.",
      "Update progress as you go.",
      "See where everything stands at a glance.",
    ],
    features: [
      {
        title: "Simple Tracking",
        description: "Add and update items without friction.",
      },
      {
        title: "Clear Progress View",
        description: "See where everything stands at a glance.",
      },
      {
        title: "Lightweight by Design",
        description: "Fast and focused, with no clutter.",
      },
    ],
    gallery: [],
    technology: [],
    tags: ["Productivity", "Tracking", "Web App"],
  },
  {
    slug: "invoicer-by-swaniki",
    name: "Invoicer by Swaniki",
    category: "Finance & Billing",
    status: "Live",
    description:
      "Create and manage professional invoices with ease.",
    url: "https://invoicer-by-swaniki.vercel.app/",
    screenshot: "",
    heroScreenshot: "",
    problem:
      "Freelancers and small businesses lose time creating invoices by hand and keeping track of them.",
    idea: "A simple invoicing tool for producing clean, professional invoices quickly.",
    howItWorks: [
      "Enter client and item details.",
      "Generate a professional invoice.",
      "Keep your invoices organised.",
    ],
    features: [
      {
        title: "Quick Invoice Creation",
        description: "Produce a clean invoice in minutes.",
      },
      {
        title: "Professional Layout",
        description: "Invoices that look credible to clients.",
      },
      {
        title: "Organised Records",
        description: "Keep track of what you have sent.",
      },
    ],
    gallery: [],
    technology: [],
    tags: ["Finance", "Invoicing", "SaaS"],
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
