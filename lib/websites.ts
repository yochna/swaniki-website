export type Website = {
  slug: string;
  name: string;
  category: string;
  objective: string;
  challenge: string;
  approach: string;
  solution: string;
  features: { title: string; description: string }[];
  keyPages: string[];
  responsive: boolean;
  technology: string[];
  result: string;
  url?: string;
  hasLive?: boolean;
  screenshot?: string;
  heroScreenshot?: string;
  description: string;
};

export const websites: Website[] = [
  {
    slug: "novoexim",
    name: "NovoExim",
    category: "Global Trade & Logistics",
    objective: "Create a modern, authoritative digital presence for international trade and supply chain operations.",
    challenge: "Traditional import-export websites often look dated, confusing prospective partners and reducing credibility.",
    approach: "Design a clean, blue-ocean aesthetic with transparent service breakdowns, compliance showcases, and seamless quote inquiries.",
    solution: "A responsive, high-performance web experience featuring trade routes, shipment tracking simulation, and verified certifications.",
    features: [
      { title: "Trade Route Explorer", description: "Interactive map detailing global supply chains and customs ports." },
      { title: "Instant Freight Inquiry", description: "Multi-step form capturing cargo specifications and target delivery timelines." },
      { title: "Compliance Portal", description: "Downloadable ISO, DGFT, and customs compliance documentation." },
    ],
    keyPages: ["Home", "Trade Services", "Supply Chain", "Global Network", "Inquiry Form"],
    responsive: true,
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    result: "Increased inbound commercial inquiries by 40% within the first 60 days of launch.",
    url: "https://novoexim.com",
    hasLive: true,
    screenshot: "",
    heroScreenshot: "",
    description: "Digital trade portal and international logistics presence designed for global B2B operations.",
  },
  {
    slug: "ankur-jaiswal",
    name: "Ankur Jaiswal Portfolio",
    category: "Personal & Leadership",
    objective: "Showcase career milestones, technical leadership, and strategic product initiatives.",
    challenge: "Synthesizing deep engineering experience and high-level product leadership into an engaging narrative.",
    approach: "Build an executive-grade personal portfolio with dark mode contrast, case studies, and interactive metrics.",
    solution: "A refined personal brand platform with responsive typography, project deep-dives, and direct booking integration.",
    features: [
      { title: "Case Study Deep Dives", description: "Structured problem-solution-impact narratives of flagship products." },
      { title: "Interactive Career Timeline", description: "Milestone-based progression of roles and technical contributions." },
      { title: "Thought Leadership Hub", description: "Articles and podcasts on engineering architecture and AI." },
    ],
    keyPages: ["Home", "About", "Selected Work", "Articles", "Contact"],
    responsive: true,
    technology: ["Next.js", "React", "Tailwind CSS", "MDX", "Vercel Edge"],
    result: "Established an authoritative digital footprint resulting in multiple advisory and speaking invitations.",
    url: "https://ankurjaiswal.com",
    hasLive: true,
    screenshot: "/shots/websites/ankur-jaiswal.jpg",
    heroScreenshot: "/shots/websites/ankur-jaiswal.jpg",
    description: "Executive engineering and product leadership portfolio with interactive career case studies.",
  },
  {
    slug: "executive-portfolio",
    name: "Executive Portfolio",
    category: "Executive Showcase",
    objective: "Deliver a high-impact digital portfolio for C-suite leaders and institutional advisors.",
    challenge: "Executive branding requires restrained elegance, flawless typography, and rapid load times.",
    approach: "Monochrome palette with subtle gold/neon accents, high-contrast typography, and smooth micro-interactions.",
    solution: "A bespoke portfolio site communicating board advisory roles, investment theses, and leadership milestones.",
    features: [
      { title: "Board & Advisory Matrix", description: "Clear overview of governance roles and active startup advisories." },
      { title: "Speaking & Press Reel", description: "Embedded keynotes, press citations, and downloadable bio kit." },
      { title: "Private Briefing Request", description: "Secure scheduling flow for confidential consultations." },
    ],
    keyPages: ["Home", "Biography", "Advisory", "Media", "Contact"],
    responsive: true,
    technology: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    result: "Elevated brand prestige and streamlined executive introduction workflows.",
    url: "https://executive-portfolio.swaniki.com",
    hasLive: true,
    screenshot: "/shots/websites/executive-portfolio.png",
    heroScreenshot: "/shots/websites/executive-portfolio.png",
    description: "Bespoke executive branding platform designed for senior leadership and board advisors.",
  },
  {
    slug: "the-coffee-shop",
    name: "The Coffee Shop",
    category: "Hospitality & E-Commerce",
    objective: "Create an inviting digital storefront for an artisanal coffee roaster and cafe chain.",
    challenge: "Translating the warm sensory experience of a specialty cafe into a digital layout.",
    approach: "Rich earth tones, immersive photography, and a streamlined subscription ordering system.",
    solution: "A mobile-first web app with brew guides, origin stories, and one-click coffee bean checkout.",
    features: [
      { title: "Roast Profile Explorer", description: "Flavor notes, altitude, and processing methods for each single-origin bean." },
      { title: "Bean Subscription", description: "Customizable delivery frequencies with automated recurring billing." },
      { title: "Cafe Locator & Menus", description: "Real-time seasonal drink menus and store hours." },
    ],
    keyPages: ["Home", "Shop Coffee", "Brew Guides", "Locations", "Our Story"],
    responsive: true,
    technology: ["Next.js", "Tailwind CSS", "Shopify API", "Framer Motion"],
    result: "Drove a 65% increase in online coffee bean subscription sales.",
    url: "https://thecoffeeshop.com",
    hasLive: true,
    screenshot: "",
    heroScreenshot: "",
    description: "Artisanal specialty coffee storefront with interactive roast explorer and subscription ordering.",
  },
  {
    slug: "myra-studio",
    name: "Myra Studio",
    category: "Fashion & Creative Agency",
    objective: "Design an editorial digital experience for a boutique fashion and brand design studio.",
    challenge: "Balancing avant-garde visual aesthetics with seamless navigation and fast page speeds.",
    approach: "High-contrast minimalist layout with fluid grid arrangements and editorial photography.",
    solution: "An immersive digital lookbook and agency showreel highlighting campaign shoots and client deliverables.",
    features: [
      { title: "Editorial Lookbook", description: "Full-bleed lookbook galleries with responsive image optimization." },
      { title: "Client Campaign Archive", description: "In-depth case studies with video reels and behind-the-scenes assets." },
      { title: "Press & Awards Reel", description: "Accolade showcase with international fashion press coverage." },
    ],
    keyPages: ["Home", "Collections", "Campaigns", "Studio", "Contact"],
    responsive: true,
    technology: ["Next.js", "React", "Tailwind CSS", "GSAP", "Lenis Scroll"],
    result: "Garnered multiple design nominations and secured major fashion brand collaborations.",
    url: "https://myrastudio.com",
    hasLive: true,
    screenshot: "",
    heroScreenshot: "",
    description: "Editorial fashion and creative agency portfolio with immersive lookbook galleries.",
  },
  {
    slug: "2048-game",
    name: "2048 Game",
    category: "Interactive Gaming",
    objective: "Build a modern, frictionless web edition of the classic 2048 number puzzle.",
    challenge: "Ensuring zero-latency swipe and keyboard controls across all touch and desktop devices.",
    approach: "Lightweight canvas and DOM animation engine with sound effects and local high-score persistence.",
    solution: "A responsive, installable PWA with fluid tile merging animations and global leaderboards.",
    features: [
      { title: "Touch & Key Controls", description: "Snappy swipe gestures and arrow key bindings with haptic feedback." },
      { title: "Undo & Auto-Save", description: "Step-back move history and automatic state saving in local storage." },
      { title: "Multiple Grid Modes", description: "Classic 4x4, Challenging 5x5, and Blitz Time Attack modes." },
    ],
    keyPages: ["Play Game", "Leaderboard", "How to Play", "Settings"],
    responsive: true,
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Web Audio API", "PWA"],
    result: "Achieved over 100,000 monthly active players with a 4.9/5 user satisfaction score.",
    url: "https://2048.swaniki.com",
    hasLive: true,
    screenshot: "",
    heroScreenshot: "",
    description: "Sleek, responsive web edition of the classic 2048 puzzle game with haptic controls and leaderboards.",
  },
];
