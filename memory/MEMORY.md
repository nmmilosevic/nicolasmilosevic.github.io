# Nicolas Portfolio — Project Memory

## Stack
- React 19 + TypeScript + Vite
- Tailwind CSS v3 + shadcn/ui (Button, Badge installed)
- react-router-dom v7
- Fonts: Inter (sans) + Instrument Serif (display/italic)
- lucide-react for icons

## Key files
- `src/App.tsx` — main page (Navbar, Hero, ClientLogos, About, Work, Contact, Footer)
- `src/pages/ProjectPage.tsx` — individual project case study page
- `src/data/projectsData.ts` — all project content + accent color system
- `src/index.css` — design tokens, animations, custom CSS classes
- `src/components/ui/button.tsx`, `badge.tsx` — shadcn components

## Owner
Nicolas Milosevic — Sr. Product Designer, 9+ years
- Email: nm.milosevic@gmail.com
- LinkedIn: linkedin.com/in/nicolasmilosevic
- Based in Spain, remote worldwide

## Projects (4 total)
1. Somfy — UX + Design System (2023–present, amber accent)
2. 360Learning — Platform Redesign (2018–2022, sky accent)
3. Vibe — Product Redesign (2022–2023, violet accent)
4. AXA — Design System + Features (Aug 2017–Nov 2018, rose accent)

## Corrections applied (March 2026)
- Fixed years "8+" → "9+" in Hero and About
- Fixed email `col.milosevic@gmail.com` → `nm.milosevic@gmail.com` (typo in ProjectPage CTA)
- Fixed contact email `hello@nicolasmilosevic.com` → `nm.milosevic@gmail.com`
- Fixed all LinkedIn URLs to `https://linkedin.com/in/nicolasmilosevic`
- Fixed AXA period from "Nov 2023 – Present" → "Aug 2017 – Nov 2018"
- Fixed Vibe tag from "Zero-to-one MVP" → "Product Redesign" (MVP existed before Nicolas joined)
- Fixed Work section headline from "Five projects" → accurate copy (only 4 projects)

## UX improvements applied
- "Available now" pill now clickable → links to #contact
- Hero CTAs added: "View my work" + "Get in touch" mailto link
- "Contact" link added to navbar
- `id="contact"` added to Contact section
- Mobile hamburger menu added to both Navbar components (hidden on sm+)

## Design system
- Accent per project via `--card-accent` CSS var + `accentStyles` map
- Scroll reveal: `.reveal` + `.is-visible` via IntersectionObserver
- Hero entrance: `.animate-fade-up` + `.animation-delay-*`
- Navbar glass effect: `.navbar-bg` + `.navbar-scrolled` (JS scroll listener)
