# 🚀 Girish Lade — Personal Portfolio

<div align="center">

![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

**Mechanical Engineer → Software Engineer | Founder of LadeStack**  
*Directing AI tools, building products, and shipping like a founder.*

[Explore Projects](#-featured-projects) • [Tech Stack](#-technical-stack) • [Engineering Journey](#-engineering-journey) • [Get In Touch](#-contact--socials)

</div>

---

## 📌 Overview

This repository houses the official personal portfolio of **Girish Lade**, solo founder of **LadeStack**. Built on **Astro 5**, it is engineered as a high-performance, purely client-side static site with zero unnecessary JavaScript overhead. 

The site showcases a rich catalog of AI-first developer tools, web applications, local-first utilities, and the journey of transitioning from mechanical engineering into full-stack software development and startup building.

---

## ✨ Key Features

- ⚡ **Blazing Fast Performance**: Zero-JS static generation by default powered by Astro 5.
- 🎨 **Modern Minimalist Aesthetic**: Bespoke dark theme with crimson brand accents (`#E5322D`), glassmorphic cards, and clean typography.
- 🧩 **Component-Driven Architecture**: Modular Astro components for easy maintenance and atomic styling.
- 🗂️ **Centralized Content Store**: All project lists, timeline events, tech stack groupings, and bio information live in a single decoupled data file (`src/data/content.ts`).
- 📱 **Fully Responsive Layout**: Polished, mobile-first design tailored for mobile phones, tablets, and wide monitors.
- 🎵 **Interactive Sections**:
  - **Dynamic Hero & Marquee**: Live status indicators and ticker.
  - **Projects Bento Grid**: Real-time project status indicators (Shipped, In Progress, Pre-launch).
  - **Categorized Stack Grid**: Segmented into Frontend, Backend/Infra, and AI workflows.
  - **Journey Timeline**: 6-phase roadmap from basics to MAANG-tier engineering.
  - **Lo-Fi Focus Station**: Embedded soundtrack for ambient coding vibes.
  - **Quick Contact Section**: Direct communication links and socials.

---

## 🛠️ Technical Stack

### Core Technologies
| Category | Technologies |
| :--- | :--- |
| **Framework** | [Astro](https://astro.build/) (v5.13+) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | Custom Vanilla CSS with CSS Custom Properties / Tokens |
| **Runtime / Tooling** | Node.js, npm, Astro CLI |
| **Deployment Targets** | Cloudflare Pages / Vercel / GitHub Pages / Netlify |

### Featured Skillset & Workflow
- **Frontend**: Astro, Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, GSAP, Three.js
- **Backend & Cloud**: Supabase (self-hosted), Neon, Cloudflare Workers, Cloudflare R2 / Pages, Upstash Redis, Vercel, Docker
- **AI-Augmented Engineering**: Cursor, Claude Code, Gemini CLI, NVIDIA NIM, Llama 3.3 70B

---

## 💼 Featured Projects

A quick overview of key initiatives showcased in this portfolio:

| Project | Category | Status | Highlights |
| :--- | :--- | :--- | :--- |
| **LS Build** | AI Website Builder | 🟡 In progress | Lovable/Bolt-style prompt-to-website with rate limiting, Supabase, and GitHub/ZIP export. |
| **[LadeCompile](https://compile.ladestack.in)** | Cloud Compiler | 🟡 In progress | Multi-language online code compiler deployed on Cloudflare Workers with i18n support. |
| **[GB Coder](https://code.ladestack.in)** | AI Code Editor | 🟡 In progress | AI-assisted front-end code sandbox with E2B integration, BYOK key support, and VS Code mode. |
| **LS Companion** | Desktop AI Agent | 📝 PRD Drafted | Local-first desktop companion agent inspired by Jarvis with granular permission boundaries. |
| **portfolio-v2** | Portfolio Template | 🟢 Shipped | Glassmorphism pixel-perfect one-pager series built with Astro. |
| **Voicely** | Accessibility / Audio | 🟣 Pre-launch | macOS voice-to-text transcription engineered for Hindi & Marathi dictation. |
| **LadeVault** | Security / Privacy | 🟢 Shipped | Local-first CryptPad-based encrypted vault with redesign for secure private notes. |
| **LS Docs** | Developer Tooling | 🟢 Shipped | Lightweight, lightning-fast documentation engine for the LadeStack ecosystem. |

---

## 📂 Project Structure

```text
girish-portfolio-astro/
├── public/
│   └── favicon.svg          # Portfolio favicon & static assets
├── src/
│   ├── components/          # Reusable Astro UI components
│   │   ├── About.astro      # Background narrative & founder philosophy
│   │   ├── Contact.astro    # Direct links & communication hub
│   │   ├── Hero.astro       # Header, introduction, and CTA buttons
│   │   ├── Journey.astro    # Career milestones & 6-phase journey
│   │   ├── Marquee.astro    # Animated scrolling marquee banner
│   │   ├── Music.astro      # Ambient music / focus player widget
│   │   ├── Projects.astro   # Project showcase cards with status tags
│   │   └── Stack.astro      # Tech stack categorization cards
│   ├── data/
│   │   └── content.ts       # Central source of truth for all content & links
│   ├── layouts/
│   │   └── Layout.astro     # Global layout, HTML shell, meta tags, and scripts
│   ├── pages/
│   │   └── index.astro      # Main single-page application entry
│   └── styles/
│       └── global.css       # Global CSS design tokens, typography, and resets
├── .gitignore               # Ignored dependencies, build artifacts, and env files
├── astro.config.mjs         # Astro project configuration
├── package.json             # NPM package scripts and dependencies
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

---

## 🚦 Getting Started

### Prerequisites

Ensure you have installed:
- [Node.js](https://nodejs.org/) (version `18.17.1` or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node) or [pnpm](https://pnpm.io/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/girishlade111/girish-portfolio-astro.git
   cd girish-portfolio-astro
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   The site will be running at `http://localhost:4321`.

---

## 📜 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches local development server at `localhost:4321` with hot module reloading. |
| `npm run build` | Compiles static production build into the `./dist` directory. |
| `npm run preview` | Locally previews the production build before deployment. |

---

## ⚙️ Customization

Updating the portfolio with your own information is simple and requires no modifications to HTML markup:

1. **Personal Information & Projects**:
   - Open [`src/data/content.ts`](src/data/content.ts).
   - Update `profile`, `projects`, `stackGroups`, `journey`, or `navLinks` with your data.
2. **Brand Colors & Typography**:
   - Open [`src/styles/global.css`](src/styles/global.css).
   - Adjust the CSS variables under `:root` (e.g., `--color-brand: #E5322D`).

---

## 🚢 Deployment

Because this portfolio produces 100% static HTML, CSS, and assets, it can be deployed to any static hosting provider within seconds:

### Cloudflare Pages
```bash
npx wrangler pages deploy dist
```

### Vercel
```bash
npx vercel --prod
```

### GitHub Pages / Netlify
Simply connect your GitHub repository to Netlify or GitHub Actions, specifying:
- **Build command**: `npm run build`
- **Publish directory**: `dist`

---

## 📬 Contact & Socials

- 🌐 **Founder**: Girish Lade
- 💼 **LinkedIn**: [linkedin.com/in/girish-lade](https://linkedin.com/in/girish-lade)
- 🐙 **GitHub**: [@girishlade111](https://github.com/girishlade111)
- 📷 **Instagram**: [@girish_lade_](https://instagram.com/girish_lade_)
- 📧 **Email**: [admin@ladestack.in](mailto:admin@ladestack.in)
- 📍 **Location**: Pune / PCMC, Maharashtra, India

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
