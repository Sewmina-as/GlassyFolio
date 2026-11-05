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
    faviconPath?: string;
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
  siteTitle: "Tharushi Senanayake — Software Engineer",
  siteDescription:
    "Portfolio of Tharushi Senanayake — a software engineer specialising in full-stack development, cloud infrastructure, and modern web technologies.",
  siteUrl: "https://achinthasewmina.com",
  ogImage: "/og-image.png",

  // ─── Personal Info ───────────────────────────────────────────────────────
  profile: {
    name: "Tharushi Senanayake",
    role: "Software Engineer",
    initials: "TS",
    email: "sewminagamage@gmail.com",
    phone: "+94 740503225",
    location: "Colombo, Sri Lanka",
    resumePath: "/resume.pdf", // Place your resume in the /public folder
    portraitPath: "/dp.png", // Place your portrait in the /public folder
    faviconPath: "/icon.svg", // Tab icon / logo — replace public/icon.svg with your logo
  },

  // ─── Hero Section ────────────────────────────────────────────────────────
  hero: {
    greeting: "Hello, I'm",
    headline: "Tharushi Senanayake",
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
      url: "https://github.com/sewmina-as",
      label: "GitHub Profile",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/sewminagamage",
      label: "LinkedIn Profile",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/achinthasewmina",
      label: "Twitter / X Profile",
    },
  ],

  // ─── Trusted-by Brands ──────────────────────────────────────────────────
  brands: ["WSO2", "Sysco LABS", "Virtusa", "PickMe", "IFS", "Dialog"],

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
    heading: "Building high-impact software from Colombo to the world",
    description:
      "I'm a software engineer based in Colombo, Sri Lanka with over five years of experience building reliable, scalable web applications. From collaborating with local tech companies to engineering digital solutions for global clients, I focus on clean architecture, modern full-stack workflows, and intuitive user experiences.",
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
      title: "RupeeFlow — LankaPay Finance",
      kind: "Full-Stack Fintech App",
      hue: "violet",
      url: "https://github.com/achinthasewmina/rupeeflow",
    },
    {
      title: "TeaLog — Plantation IoT Analytics",
      kind: "Industrial IoT + React",
      hue: "blue",
      url: "https://github.com/achinthasewmina/tealog-analytics",
    },
    {
      title: "Colombo Transit — Live Tracker",
      kind: "Realtime Web Application",
      hue: "slate",
      url: "https://github.com/achinthasewmina/colombo-transit",
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
        "Tharushi is an exceptional software engineer. Her ability to architect scalable systems while keeping code clean and maintainable made a huge impact on our delivery timeline.",
      name: "Nuwan Perera",
      role: "Engineering Manager, Sysco LABS",
    },
    {
      quote:
        "Working with Tharushi was a smooth and inspiring experience. She has a rare eye for frontend finesse paired with solid backend fundamentals.",
      name: "Kavindi Jayawardena",
      role: "Lead Product Designer, PickMe",
    },
    {
      quote:
        "Tharushi's contributions to complex APIs and microservices were outstanding. Dependable, proactive, and consistently delivers high-quality engineering.",
      name: "Dinuka Fernando",
      role: "Tech Lead, WSO2",
    },
  ],

  // ─── Footer ─────────────────────────────────────────────────────────────
  footer: {
    text: "All rights reserved.",
    showBackToTop: true,
  },
};
