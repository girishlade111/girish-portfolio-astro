// ─── All personal content lives here. Edit freely. ────────────────────────────

export const profile = {
  name: "Girish Lade",
  firstName: "Girish",
  role: "Mechanical Engineer → Software Engineer",
  headline: "Founder of LadeStack. I direct AI tools and ship like a founder.",
  location: "Pune / PCMC, Maharashtra, India",
  origin: "Originally from Pandharpur",
  email: "admin@ladestack.in",
  github: "https://github.com/girishlade111",
  githubLabel: "github.com/girishlade111",
  linkedin: "https://linkedin.com/in/girish-lade",
  instagram: "https://instagram.com/girish_lade_",
  brand: "#E5322D",
};

export interface Project {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  status: string;
  link?: string;
}

export const projects: Project[] = [
  {
    name: "LS Build",
    tagline: "AI website builder",
    description:
      "Lovable-lane AI builder forked from bolt.new — prompt-to-website with rate limiting, error boundaries, Supabase backing and GitHub / ZIP export.",
    tags: ["AI", "Web App", "Supabase"],
    status: "In progress",
  },
  {
    name: "LadeCompile",
    tagline: "Online code compiler",
    description:
      "OneCompiler competitor at compile.ladestack.in — Astro marketing plus a Next.js editor on a single Cloudflare Worker, with multi-language i18n rollout in progress.",
    tags: ["Astro", "Cloudflare Workers", "i18n"],
    status: "In progress",
    link: "https://compile.ladestack.in",
  },
  {
    name: "GB Coder",
    tagline: "AI HTML / CSS / JS editor",
    description:
      "Live at code.ladestack.in — AI-assisted front-end editor adding E2B sandboxing (BYOK, no login), VS Code mode, project workflow and history.",
    tags: ["AI", "Editor", "E2B"],
    status: "In progress",
    link: "https://code.ladestack.in",
  },
  {
    name: "LS Companion",
    tagline: "Desktop AI agent",
    description:
      "Jarvis-style desktop agent — a fork-and-skin of the Hermes agent with a Claude Code-style permission model (Allow once / Always / Always for workspace).",
    tags: ["Desktop", "AI Agent"],
    status: "PRD drafted",
  },
  {
    name: "portfolio-v2",
    tagline: "Glassmorphism one-pager series",
    description:
      "Lavender-and-glass pixel-perfect one-page portfolio. The first of a planned 100+ variant series.",
    tags: ["Astro", "Design"],
    status: "Shipped",
  },
  {
    name: "Voicely",
    tagline: "Voice-to-text for Hindi & Marathi",
    description:
      "macOS voice-to-text tuned for Hindi and Marathi dictation. Pre-launch.",
    tags: ["macOS", "Accessibility"],
    status: "Pre-launch",
  },
  {
    name: "LadeVault",
    tagline: "Encrypted local notes",
    description:
      "CryptPad-based encrypted vault with a sage-green redesign — private notes that stay yours.",
    tags: ["Privacy", "Local-first"],
    status: "Shipped",
  },
  {
    name: "LS Docs",
    tagline: "Documentation toolkit",
    description:
      "Lightweight docs engine in the LadeStack family — write once, publish fast.",
    tags: ["Astro", "Docs"],
    status: "Shipped",
  },
];

export const stackGroups = [
  {
    title: "Frontend",
    items: ["Astro", "Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "GSAP", "Three.js"],
  },
  {
    title: "Backend & Infra",
    items: ["Supabase (self-hosted)", "Neon", "Cloudflare Workers", "Cloudflare R2 / Pages", "Upstash Redis", "Vercel", "Docker"],
  },
  {
    title: "AI Workflow",
    items: ["Cursor", "Claude Code", "Gemini CLI", "NVIDIA NIM", "Llama 3.3 70B"],
  },
];

export const journey = [
  {
    phase: "01",
    title: "Coding basics",
    text: "Foundations first — how software actually works, learned by building.",
  },
  {
    phase: "02",
    title: "Web fundamentals",
    text: "HTML, CSS, JavaScript and the modern front-end stack, shipped as real sites.",
  },
  {
    phase: "03",
    title: "First IT job",
    text: "Break into the industry — product companies first, pedigree second.",
  },
  {
    phase: "04",
    title: "CS / DSA grind",
    text: "Deep computer-science fundamentals and relentless problem solving.",
  },
  {
    phase: "05",
    title: "MAANG-level prep",
    text: "System design, hard rounds, interview engineering at top-tier bar.",
  },
  {
    phase: "06",
    title: "MAANG referrals",
    text: "Referral-led applications — resume leads with the LadeStack founder identity.",
  },
];

export const targets = ["VMware", "SAP", "Cisco"];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Journey", href: "#journey" },
  { label: "Music", href: "#music" },
  { label: "Contact", href: "#contact" },
];
