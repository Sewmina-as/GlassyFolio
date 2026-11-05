# 🚀 Developer Portfolio Template

A modern, glassmorphic developer portfolio template built with **Next.js 14**, **TypeScript**, and **CSS**. Zero external UI libraries — just clean, fast, and beautiful.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- **One-file configuration** — Edit `lib/config.ts` and you're done
- **Glassmorphism design** — Frosted glass panels, ambient gradients, smooth animations
- **Fully responsive** — Looks great on desktop, tablet, and mobile
- **Accessibility-first** — Semantic HTML, ARIA labels, keyboard navigation, `prefers-reduced-motion` support
- **SEO optimized** — Open Graph, Twitter cards, semantic headings
- **Zero UI libraries** — No Tailwind, no Bootstrap — just ~160 lines of handcrafted CSS
- **TypeScript strict mode** — Fully typed, zero `any`
- **Fast** — No client-side JavaScript except for scroll reveals and the contact form

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # All styles (glassmorphism design system)
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Home page (all sections)
├── components/
│   ├── ContactForm.tsx      # Contact form with validation
│   ├── Icon.tsx             # Inline SVG icon system
│   ├── Navbar.tsx           # Sticky nav with scroll tracking
│   ├── Portrait.tsx         # Profile photo with fallback
│   └── Reveal.tsx           # Scroll-reveal animation wrapper
├── lib/
│   ├── config.ts            # ⭐ YOUR CONFIG — edit this file
│   └── data.ts              # Re-exports config for components
├── public/
│   └── dp.jpeg              # Your profile photo
├── .env.example             # Environment variable template
├── LICENSE                  # MIT License
├── CONTRIBUTING.md          # Contribution guidelines
└── README.md                # You are here
```

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/achinthasewmina/portfolio-template.git
cd portfolio-template
npm install
```

### 2. Personalize

Open `lib/config.ts` and update your details:

```typescript
export const siteConfig: SiteConfig = {
  siteTitle: "Your Name — Your Role",
  profile: {
    name: "Your Name",
    role: "Your Role",
    email: "you@example.com",
    // ... more fields
  },
  // ... services, projects, testimonials, etc.
};
```

### 3. Add Your Photo

Replace `public/dp.jpeg` with your profile photo (or update `portraitPath` in config).

### 4. Run

```bash
npm run dev        # Development → http://localhost:3000
npm run build      # Production build
npm start          # Start production server
```

## 🎨 Customization

### Colors

Edit the CSS custom properties in `app/globals.css`:

```css
:root {
  --ink: #14122b;       /* Primary text */
  --muted: #6b6a80;     /* Secondary text */
  --violet: #8b6cf0;    /* Primary accent */
  --indigo: #6366f1;    /* Secondary accent */
}
```

### Fonts

Change the Google Font in `app/layout.tsx`:

```typescript
import { Inter } from "next/font/google";
const font = Inter({ subsets: ["latin"], variable: "--font" });
```

### Contact Form

The contact form is client-side only by default. To connect it to a backend:

1. Create `app/api/contact/route.ts`
2. Add your email service (Resend, SendGrid, etc.)
3. Update `components/ContactForm.tsx` to call your API

### Adding Sections

1. Add data to `lib/config.ts`
2. Add the section in `app/page.tsx` (wrap with `<Reveal>` for animations)
3. Add the nav item to the `nav` array in config

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/achinthasewmina/portfolio-template)

### Other Platforms

Works with any platform that supports Next.js:
- **Netlify** — `npm run build` then deploy the `.next` folder
- **Docker** — Use the included Next.js standalone output
- **GitHub Pages** — Export as static: add `output: 'export'` to `next.config.mjs`

## 📄 License

MIT — use it however you want. Attribution appreciated but not required.

Built with ❤️ by [Achintha Sewmina](https://github.com/achinthasewmina)
