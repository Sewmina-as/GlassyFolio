// =============================================================================
// config.ts — The ONLY file you need to edit to personalize this portfolio.
//
// Every piece of text, stat, service, project, and testimonial shown on the
// site is controlled from this single file. Edit the `siteConfig` object below
// and the entire site updates automatically.
// =============================================================================

// ─── Types ───────────────────────────────────────────────────────────────────

/** A link to a social-media profile or external page. */
export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

/** A stat card shown in the About section (icon + number + label). */
export interface Stat {
  icon: string;
  value: string;
  label: string;
}

/** A service card shown in the "What I Do" section. */
export interface Service {
  title: string;
  text: string;
  tone: "amber" | "violet" | "indigo" | "teal";
  icon: string;
}

/** A tool / technology shown in the Skills section. */
export interface Tool {
  name: string;
  mark: string;
  color: string;
}

/** A featured project card. */
export interface Project {
  title: string;
  kind: string;
  hue: "violet" | "blue" | "slate";
  url?: string;
}

/** A numbered step in the design/development process. */
export interface ProcessStep {
  title: string;
  text: string;
}

/** A client testimonial. */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

// ─── Site Config Shape ───────────────────────────────────────────────────────

export interface SiteConfig {
  // Meta & SEO
  siteTitle: string;
  siteDescription: string;
  siteUrl: string;
  ogImage: string;

  // Personal info
  profile: {
    name: string;
    role: string;
    initials: string;
    email: string;
    phone: string;
    location: string;
    resumePath: string;
    portraitPath: string;
  };

  // Hero section
  hero: {
    greeting: string;
    headline: string;
    description: string;
    yearsExperience: string;
    impactLabel: string;
    impactValue: string;
  };

  // Social links
  socials: SocialLink[];

  // "Trusted by" brand names below the hero
  brands: string[];

  // Top navigation items (each scrolls to a matching section id)
  nav: readonly string[];

  // About section
  about: {
    eyebrow: string;
    heading: string;
    description: string;
    stats: Stat[];
  };

  // Services ("What I Do")
  services: Service[];

  // Tools & Skills
  tools: Tool[];

  // Featured projects
  projects: Project[];

  // Process steps
  steps: ProcessStep[];

  // Testimonials
  testimonials: Testimonial[];

  // Footer
  footer: {
    text: string;
    showBackToTop: boolean;
  };
}

// =============================================================================
// 🔧  EDIT BELOW — Fill in your own details to make this portfolio yours.
// =============================================================================

export const siteConfig: SiteConfig = {
  // ─── Meta & SEO ──────────────────────────────────────────────────────────
  siteTitle: "Achintha Sewmina — Software Engineer",
  siteDescription:
    "Portfolio of Achintha Sewmina — a software engineer specialising in full-stack development, cloud infrastructure, and modern web technologies.",
  siteUrl: "https://achinthasewmina.com",
  ogImage: "/og-image.png",

  // ─── Personal Info ───────────────────────────────────────────────────────
  profile: {
    name: "Achintha Sewmina",
    role: "Software Engineer",
    initials: "AS",
    email: "sewminagamage@gmail.com",
    phone: "+94 740503225",
    location: "Colombo, Sri Lanka",
    resumePath: "/resume.pdf", // Place your resume in the /public folder
    portraitPath: "/dp.png", // Place your portrait in the /public folder
  },

  // ─── Hero Section ────────────────────────────────────────────────────────
  hero: {
    greeting: "Hello, I'm",
    headline: "Achintha Sewmina",
    description:
      "I build performant, accessible web applications and scalable backend systems. Passionate about clean code, great UX, and shipping products that make an impact.",
    yearsExperience: "5+",
    impactLabel: "Projects Delivered",
    impactValue: "30+",
  },

  // ─── Social Links ────────────────────────────────────────────────────────
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/achinthasewmina",
      label: "GitHub Profile",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/achinthasewmina",
      label: "LinkedIn Profile",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/achinthasewmina",
      label: "Twitter / X Profile",
    },
  ],

  // ─── Trusted-by Brands ──────────────────────────────────────────────────
  brands: ["Google", "Microsoft", "airbnb", "HubSpot", "dribbble"],

  // ─── Navigation ──────────────────────────────────────────────────────────
  nav: [
    "Home",
    "About",
    "Services",
    "Work",
    "Process",
    "Testimonials",
    "Contact",
  ] as const,

  // ─── About Section ──────────────────────────────────────────────────────
  about: {
    eyebrow: "About Me",
    heading: "Building digital products that people love to use",
    description:
      "I'm a software engineer based in Colombo, Sri Lanka with over five years of experience turning ideas into reliable, well-crafted software. I specialise in full-stack web development with React, Next.js, and Node.js, and I'm equally comfortable working across the stack — from pixel-perfect UIs to cloud infrastructure and CI/CD pipelines.",
    stats: [
      { icon: "layers", value: "5+", label: "Years Experience" },
      { icon: "mail", value: "30+", label: "Projects Completed" },
      { icon: "user", value: "15+", label: "Happy Clients" },
    ],
  },

  // ─── Services ────────────────────────────────────────────────────────────
  services: [
    {
      title: "Full-Stack Development",
      text: "Building end-to-end web applications with React, Next.js, Node.js, and PostgreSQL — from responsive front-ends to robust REST & GraphQL APIs.",
      tone: "amber",
      icon: "code",
    },
    {
      title: "UI/UX Engineering",
      text: "Translating designs into pixel-perfect, accessible interfaces with smooth animations, responsive layouts, and component-driven architecture.",
      tone: "violet",
      icon: "palette",
    },
    {
      title: "Cloud & DevOps",
      text: "Deploying and managing applications on AWS, GCP, and Vercel with Docker, GitHub Actions, and infrastructure-as-code for reliable, scalable systems.",
      tone: "indigo",
      icon: "cloud",
    },
    {
      title: "API Development",
      text: "Designing and building secure, well-documented RESTful and GraphQL APIs with authentication, rate limiting, and comprehensive test coverage.",
      tone: "teal",
      icon: "server",
    },
  ],

  // ─── Tools & Skills ─────────────────────────────────────────────────────
  tools: [
    { name: "React", mark: "⚛", color: "#61DAFB" },
    { name: "TypeScript", mark: "TS", color: "#3178C6" },
    { name: "Node.js", mark: "N", color: "#339933" },
    { name: "Python", mark: "Py", color: "#3776AB" },
    { name: "Next.js", mark: "▲", color: "#000000" },
    { name: "Docker", mark: "🐳", color: "#2496ED" },
    { name: "Git", mark: "G", color: "#F05032" },
    { name: "PostgreSQL", mark: "pg", color: "#4169E1" },
  ],

  // ─── Featured Projects ──────────────────────────────────────────────────
  projects: [
    {
      title: "Finova — Finance App",
      kind: "Full-Stack Web App",
      hue: "violet",
      url: "https://github.com/achinthasewmina/finova",
    },
    {
      title: "Analytics Dashboard",
      kind: "React + Node.js",
      hue: "blue",
      url: "https://github.com/achinthasewmina/analytics-dashboard",
    },
    {
      title: "SaaS Landing Page",
      kind: "Next.js + Tailwind",
      hue: "slate",
      url: "https://github.com/achinthasewmina/saas-landing",
    },
  ],

  // ─── Process Steps ──────────────────────────────────────────────────────
  steps: [
    {
      title: "Discover",
      text: "Understanding requirements, user needs, and project goals through stakeholder interviews and research.",
    },
    {
      title: "Architect",
      text: "Defining the technical stack, data models, and system architecture for scalability and maintainability.",
    },
    {
      title: "Build",
      text: "Writing clean, tested code with CI/CD pipelines, code reviews, and iterative sprints.",
    },
    {
      title: "Polish",
      text: "Refining the UI, optimising performance, and ensuring accessibility across all devices.",
    },
    {
      title: "Ship & Iterate",
      text: "Deploying to production, monitoring metrics, and continuously improving based on user feedback.",
    },
  ],

  // ─── Testimonials ───────────────────────────────────────────────────────
  testimonials: [
    {
      quote:
        "Achintha is an exceptional engineer. He understands user needs deeply and delivers outstanding results on every project.",
      name: "Rohit Sharma",
      role: "Product Manager, Google",
    },
    {
      quote:
        "Working with Achintha was a smooth and inspiring experience. His attention to detail and code quality is truly impressive.",
      name: "Neha Verma",
      role: "Design Lead, Microsoft",
    },
    {
      quote:
        "Achintha's work not only looks amazing but also solves real user problems with solid engineering. Highly recommended!",
      name: "Karan Malhotra",
      role: "Founder, Startupx",
    },
  ],

  // ─── Footer ─────────────────────────────────────────────────────────────
  footer: {
    text: "All rights reserved.",
    showBackToTop: true,
  },
};
