// ─── All personal content lives here. Rich, modern & artistic data ─────────────

export const profile = {
  name: "Girish Lade",
  firstName: "Girish",
  role: "Mechanical Engineer → Software Engineer",
  subRole: "Solo Founder & AI-Augmented Product Builder",
  headline: "Founder of LadeStack. Directing AI tools and shipping at founder velocity.",
  location: "Pune / PCMC, Maharashtra, India",
  timezone: "Asia/Kolkata",
  origin: "Originally from Pandharpur",
  email: "admin@ladestack.in",
  github: "https://github.com/girishlade111",
  githubLabel: "github.com/girishlade111",
  linkedin: "https://linkedin.com/in/girish-lade",
  instagram: "https://instagram.com/girish_lade_",
  brand: "#E5322D",
  accentPalette: [
    { id: "crimson", name: "Crimson Blaze", primary: "#ff2a55", glow: "rgba(255, 42, 85, 0.4)" },
    { id: "violet", name: "Cyber Violet", primary: "#a855f7", glow: "rgba(168, 85, 247, 0.4)" },
    { id: "cyan", name: "Electric Cyan", primary: "#00f2fe", glow: "rgba(0, 242, 254, 0.4)" },
    { id: "emerald", name: "Neon Emerald", primary: "#10b981", glow: "rgba(16, 185, 129, 0.4)" },
  ],
  stats: [
    { label: "Products Shipped", count: 20, suffix: "+", highlight: "AI & devtools" },
    { label: "Original Compositions", count: 15, suffix: "+", highlight: "Cinematic scores" },
    { label: "Transition Roadmap", count: 6, suffix: " Phases", highlight: "Systematic execution" },
    { label: "Client-Side Speed", count: 99, suffix: "%", highlight: "Lighthouse score" },
  ],
  bioQuotes: [
    "I direct AI tools like Cursor, Claude Code, and Gemini CLI — then obsess over the last 10%: design finesse, pixel perfection, and shipping.",
    "Rooted in mechanical engineering precision; blossoming into full-stack software velocity.",
  ]
};

export interface Project {
  name: string;
  tagline: string;
  description: string;
  category: "all" | "ai" | "web" | "local" | "design";
  tags: string[];
  status: "Live" | "Shipped" | "In progress" | "Pre-launch" | "PRD drafted";
  badgeColor?: string;
  featured?: boolean;
  link?: string;
  github?: string;
  metrics?: string;
}

export const projects: Project[] = [
  {
    name: "LS Build",
    tagline: "AI Full-Stack Website Builder",
    description:
      "Lovable-lane AI builder forked from bolt.new — prompt-to-production web apps with dynamic rate limiting, resilient error boundaries, Supabase persistence, and instant GitHub/ZIP export.",
    category: "ai",
    tags: ["AI Builder", "WebContainers", "Supabase", "TypeScript"],
    status: "In progress",
    featured: true,
    metrics: "Prompt to live app in seconds",
  },
  {
    name: "LadeCompile",
    tagline: "Ultra-Fast Online Code Compiler",
    description:
      "OneCompiler competitor hosted at compile.ladestack.in. Astro high-speed marketing edge paired with a responsive Next.js editor running on Cloudflare Workers edge runtime with i18n support.",
    category: "web",
    tags: ["Astro", "Cloudflare Workers", "Next.js", "i18n"],
    status: "In progress",
    featured: true,
    link: "https://compile.ladestack.in",
    metrics: "Sub-50ms TTFB edge runtime",
  },
  {
    name: "GB Coder",
    tagline: "AI Assisted Sandbox Web Editor",
    description:
      "Live at code.ladestack.in. Zero-auth, Bring-Your-Own-Key (BYOK) front-end playground featuring isolated E2B cloud sandboxing, VS Code keybindings, project branch trees, and instant preview.",
    category: "ai",
    tags: ["AI Editor", "E2B Sandbox", "BYOK", "React"],
    status: "In progress",
    featured: true,
    link: "https://code.ladestack.in",
    metrics: "Zero login required",
  },
  {
    name: "LS Companion",
    tagline: "Jarvis-Class Desktop AI Agent",
    description:
      "Autonomous desktop agent with Claude Code-inspired progressive permission model (Allow Once / Always / Always for Workspace). Built with multi-tool execution and local file-system safety checks.",
    category: "ai",
    tags: ["Desktop Agent", "Local LLM", "Tool Calling", "IPC"],
    status: "PRD drafted",
    featured: false,
    metrics: "Full workspace context",
  },
  {
    name: "Portfolio v2",
    tagline: "Glassmorphic Avant-Garde Experience",
    description:
      "Lavender-and-glass pixel-perfect one-page portfolio with fluid micro-interactions and rich typography. The flagship of an upcoming curated 100+ creative variant series.",
    category: "design",
    tags: ["Astro 5", "Creative Dev", "Vanilla CSS", "Motion"],
    status: "Shipped",
    featured: true,
    metrics: "100/100 Lighthouse Performance",
  },
  {
    name: "Voicely",
    tagline: "Voice-to-Text for Indic Languages",
    description:
      "Specialized macOS menu-bar dictation engine optimized for Indian accents, Marathi dialectics, and colloquial Hinglish speech-to-text with instant clipboard pasting.",
    category: "local",
    tags: ["macOS Native", "Speech-to-Text", "Marathi/Hindi", "Whisper"],
    status: "Pre-launch",
    featured: false,
    metrics: "Optimized for regional accents",
  },
  {
    name: "LadeVault",
    tagline: "Zero-Knowledge Local Notes",
    description:
      "CryptPad-backed client-side encrypted vault redesigned with a tranquil sage-green visual aesthetic. Zero telemetries, complete end-to-end cryptographic privacy on local storage.",
    category: "local",
    tags: ["Local-First", "E2E Encryption", "Privacy", "PWA"],
    status: "Shipped",
    featured: false,
    metrics: "100% private & client-side",
  },
  {
    name: "LS Docs",
    tagline: "Hyperlight Documentation Engine",
    description:
      "Blazing-fast documentation suite built on Astro Starlight foundations with instant full-text search, live interactive code previews, and markdown AST transformations.",
    category: "web",
    tags: ["Astro", "Starlight", "Full-text Search", "Markdown"],
    status: "Shipped",
    featured: false,
    metrics: "Instant sub-second indexing",
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects", count: 8 },
  { id: "ai", label: "AI & Agents", count: 3 },
  { id: "web", label: "Web & DevTools", count: 2 },
  { id: "local", label: "Local-First & OS", count: 2 },
  { id: "design", label: "Creative & Design", count: 1 },
];

export const stackGroups = [
  {
    title: "Frontend Engineering",
    icon: "⚡",
    description: "High-performance reactive interfaces and creative web experiences",
    items: [
      { name: "Astro", level: "Primary", tag: "SSG / SSR" },
      { name: "Next.js", level: "Advanced", tag: "React 19" },
      { name: "TypeScript", level: "Daily", tag: "Strict Mode" },
      { name: "Tailwind CSS", level: "Advanced", tag: "Utility First" },
      { name: "shadcn/ui", level: "Advanced", tag: "Radix Primitives" },
      { name: "Canvas & WebGL", level: "Creative", tag: "Artistic UI" },
      { name: "Framer Motion", level: "Advanced", tag: "Micro-interactions" },
    ],
  },
  {
    title: "Backend & Cloud Edge",
    icon: "☁️",
    description: "Resilient serverless compute and distributed edge datastores",
    items: [
      { name: "Cloudflare Workers", level: "Primary", tag: "Edge Compute" },
      { name: "Cloudflare R2 / Pages", level: "Primary", tag: "Object Storage" },
      { name: "Supabase (Self-hosted)", level: "Advanced", tag: "Postgres + Auth" },
      { name: "Neon Serverless", level: "Advanced", tag: "Branching DB" },
      { name: "Upstash Redis", level: "Advanced", tag: "Rate Limiting" },
      { name: "Docker", level: "Intermediate", tag: "Containers" },
    ],
  },
  {
    title: "AI Builder Superpowers",
    icon: "🤖",
    description: "The AI-augmented director toolkit shipping at 10x velocity",
    items: [
      { name: "Claude Code", level: "Core Tool", tag: "Terminal Agent" },
      { name: "Cursor AI", level: "Core Tool", tag: "IDE Copilot" },
      { name: "Gemini CLI", level: "Core Tool", tag: "Deep Reasoning" },
      { name: "NVIDIA NIM", level: "Model Infra", tag: "Inference Edge" },
      { name: "Llama 3.3 70B", level: "Model", tag: "Local / Hosted" },
      { name: "E2B Sandboxes", level: "Execution", tag: "Cloud Sandbox" },
    ],
  },
  {
    title: "Mechanical & Systems Roots",
    icon: "⚙️",
    description: "Physical engineering precision translated to robust software architecture",
    items: [
      { name: "Root Cause Analysis", level: "Philosophy", tag: "First Principles" },
      { name: "Process Optimization", level: "Philosophy", tag: "Lean Manufacturing" },
      { name: "CAD / Modeling", level: "Background", tag: "3D Geometry" },
      { name: "Industrial Reliability", level: "Standard", tag: "Six Sigma mindset" },
    ],
  },
];

export const journey = [
  {
    phase: "01",
    title: "Coding Foundations & Logic",
    tag: "First Principles",
    status: "Completed",
    text: "Dissected how software actually executes under the hood — memory, execution loops, and computer systems learned by relentless hands-on building.",
  },
  {
    phase: "02",
    title: "Modern Web Mastery & Shipping",
    tag: "Production Velocity",
    status: "Completed",
    text: "Mastered HTML5, modern CSS3, TypeScript, Astro, and reactive ecosystems. Built and deployed 20+ live client-side tools and products under the LadeStack banner.",
  },
  {
    phase: "03",
    title: "First High-Impact IT Role",
    tag: "Current Target",
    status: "Active",
    text: "Transitioning full-time into modern product engineering. Targeting fast-moving software startups and tier-1 product organizations that value extreme founder-level ownership.",
  },
  {
    phase: "04",
    title: "CS Fundamentals & DSA Mastery",
    tag: "Algorithmic Depth",
    status: "In Progress",
    text: "Intensive deep-dive into Data Structures, Algorithms, Graph Theory, and Concurrency to pass top-tier technical evaluations with flying colors.",
  },
  {
    phase: "05",
    title: "MAANG-Grade System Design",
    tag: "Scale & Architecture",
    status: "Upcoming",
    text: "Distributed systems, edge caching, micro-frontends, high-throughput architectures, and end-to-end interview engineering at the global bar.",
  },
  {
    phase: "06",
    title: "Tier-1 Product Leadership",
    tag: "Global Impact",
    status: "Ultimate Destination",
    text: "Referral-led positioning at elite product companies with a proven track record of autonomous AI-directed product shipping.",
  },
];

export const targets = [
  { name: "VMware", role: "Cloud & Systems" },
  { name: "SAP", role: "Enterprise Platforms" },
  { name: "Cisco", role: "Networking & Edge" },
  { name: "Microsoft", role: "AI & Developer Division" },
];

export interface MusicTrack {
  id: string;
  title: string;
  genre: string;
  mood: string;
  duration: string;
  bpm: number;
  description: string;
  frequencyHz: number[];
}

export const musicTracks: MusicTrack[] = [
  {
    id: "track-1",
    title: "Aura of Pandharpur",
    genre: "Cinematic Ambient",
    mood: "Reflective & Mystical",
    duration: "3:42",
    bpm: 86,
    description: "Atmospheric ambient textures infused with traditional devotional resonances and orchestral strings.",
    frequencyHz: [40, 75, 120, 240, 360, 480, 600, 720, 840, 960, 1100, 850, 620, 410],
  },
  {
    id: "track-2",
    title: "Neon Genesis Edge",
    genre: "Synthwave / Cyberpunk",
    mood: "Driving & Futuristic",
    duration: "4:15",
    bpm: 124,
    description: "Pulsing bass arpeggiators layered with analog saw waves and cinematic braams for late-night shipping sessions.",
    frequencyHz: [110, 220, 440, 650, 880, 1020, 1340, 1500, 1200, 980, 750, 520, 330, 180],
  },
  {
    id: "track-3",
    title: "Vibe Coder Awakening",
    genre: "Lo-Fi Orchestral",
    mood: "Deep Focus",
    duration: "2:58",
    bpm: 78,
    description: "Warm tape-saturated piano melodies accompanied by lush cello sweeps and subtle rain field recordings.",
    frequencyHz: [55, 90, 160, 290, 420, 510, 640, 780, 690, 530, 410, 310, 210, 105],
  },
  {
    id: "track-4",
    title: "Titanium Forge",
    genre: "Epic Trailer Theme",
    mood: "Triumphant & Powerful",
    duration: "3:30",
    bpm: 110,
    description: "Honoring mechanical manufacturing roots with industrial percussion, brass stabs, and ascending heroic choir.",
    frequencyHz: [95, 180, 350, 580, 820, 1150, 1420, 1680, 1350, 990, 720, 480, 290, 140],
  },
];

export const terminalCommands: Record<string, { desc: string; output: string | string[] }> = {
  help: {
    desc: "List all available interactive terminal commands",
    output: [
      "Available commands:",
      "  whoami       - View brief identity and background summary",
      "  projects     - List flagship LadeStack products and tools",
      "  stack        - Display core technical proficiencies",
      "  music        - View composed original cinematic scores",
      "  philosophy   - Learn about the 'Vibe Coding' founder approach",
      "  contact      - Get direct communication channels",
      "  hire         - Why hire Girish Lade? (Direct founder pitch)",
      "  matrix       - Trigger retro hacker matrix animation",
      "  clear        - Clear the terminal console buffer",
    ],
  },
  whoami: {
    desc: "View brief identity and background summary",
    output: [
      "Girish Lade (@girishlade111)",
      "Role: Mechanical Engineer transitioning to Full-Stack Product Engineer",
      "Venture: Solo Founder of LadeStack",
      "Location: Pune / PCMC, Maharashtra, India (Origins: Pandharpur)",
      "Approach: Directing state-of-the-art AI tooling with an engineering mindset",
    ],
  },
  projects: {
    desc: "List flagship LadeStack products",
    output: [
      "🚀 Flagship Products:",
      "  1. LS Build       - AI website builder with Supabase & GitHub sync",
      "  2. LadeCompile    - Multi-language online compiler on Cloudflare edge",
      "  3. GB Coder       - AI HTML/CSS/JS editor with E2B sandbox",
      "  4. LS Companion   - Jarvis-style desktop agent with safety permissions",
      "  5. LadeVault      - Zero-telemetry encrypted client notes",
      "  Type 'projects --all' to see all 8+ products.",
    ],
  },
  stack: {
    desc: "Display core technical proficiencies",
    output: [
      "⚡ Frontend : Astro 5, Next.js 15, TypeScript, Tailwind CSS, shadcn/ui",
      "☁️ Cloud    : Cloudflare Workers & R2, Supabase, Neon DB, Vercel",
      "🤖 AI Flow  : Claude Code, Cursor, Gemini CLI, NVIDIA NIM, E2B",
      "⚙️ Roots    : Mechanical Engineering, First-Principles Thinking",
    ],
  },
  music: {
    desc: "View composed original cinematic scores",
    output: [
      "🎵 15+ Original Compositions Hosted on Cloudflare R2:",
      "  • 'Aura of Pandharpur' (Cinematic Ambient, 86 BPM)",
      "  • 'Neon Genesis Edge'  (Synthwave Cyberpunk, 124 BPM)",
      "  • 'Vibe Coder Focus'   (Lo-Fi Orchestral, 78 BPM)",
      "  • 'Titanium Forge'     (Epic Industrial Brass, 110 BPM)",
    ],
  },
  philosophy: {
    desc: "The Vibe Coding manifesto",
    output: [
      "💡 What is a 'Vibe Coder'?",
      "It is NOT about blindly pasting code. It is about acting as the conductor",
      "of an orchestra of frontier AI models (Claude, Cursor, Gemini), guiding",
      "architecture, catching edge cases, and obsessing over the final 10%:",
      "craft, visual polish, and production deployment.",
    ],
  },
  hire: {
    desc: "Direct pitch for engineering recruiters & hiring managers",
    output: [
      "🔥 Why hire Girish Lade?",
      "• 0 to 1 Ownership: Proven track record of shipping 20+ real products",
      "• AI Native: Operates at 5x to 10x engineering velocity using frontier tools",
      "• Engineering Discipline: Mechanical background = high standards & precision",
      "• Hunger: Relentless work ethic executing a structured 6-phase growth plan",
      "Status: Immediate joiner for high-impact software engineering roles.",
    ],
  },
  contact: {
    desc: "Get direct communication channels",
    output: [
      "📫 Reach Girish Lade directly:",
      "  Email    : admin@ladestack.in",
      "  GitHub   : https://github.com/girishlade111",
      "  LinkedIn : https://linkedin.com/in/girish-lade",
      "  Location : Pune / PCMC, Maharashtra, India",
    ],
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Journey", href: "#journey" },
  { label: "Terminal", href: "#terminal" },
  { label: "Music", href: "#music" },
  { label: "Contact", href: "#contact" },
];
