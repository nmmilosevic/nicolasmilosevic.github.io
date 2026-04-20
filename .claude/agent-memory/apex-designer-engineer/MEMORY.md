# Nicolas Portfolio - Project Memory

## Stack
- React 19 + TypeScript (strict) + Vite 7
- Tailwind CSS v3 (NOT v4): use `tailwind.config.js`, not CSS-native config
- shadcn/ui: Button + Badge only (manually added, not via CLI)
- lucide-react for icons
- No additional npm packages allowed

## Design System — Dark Mode

### Palette
- Page bg: `#0a0620` | Surface: `#120b37` | Elevated: `#1c1250`
- Primary text: `#f9eef2` (blush) | Secondary: `rgba(249,238,242,0.65)` | Muted: `rgba(249,238,242,0.40)`
- CTA accent: `#ffc107` (amber) | Secondary accent: `#ff1234` (red) | Charcoal: `#212121`
- Button text on amber bg: `#120b37` | Border default: `rgba(249,238,242,0.08)`
- Navbar CTA: `bg-[#ffc107] hover:bg-[#ffca2c] text-[#120b37]`
- Focus rings everywhere: `focus-visible:ring-[#ffc107]`
- Skill badges: `bg-[rgba(255,193,7,0.12)] text-[#ffc107] hover:bg-[rgba(255,193,7,0.18)]`
- Hero/About italic accent: `text-[#ffc107]`
- Contact glow blobs: amber `rgba(255,193,7,0.18)`, red `rgba(255,18,52,0.12)`, blush `rgba(249,238,242,0.06)`
- ProjectPage CTA: `from-[#8338EC] to-[#3A86FF]` (violet-blue gradient, kept)
- Skip-to-content bg: `#ffc107` with `color: #120b37`

### Typography
- Display (italic accents): `font-display` = Playfair Display italic 600
- Headings h1/h2/h3: Figtree 800 (via global CSS rule)
- Body/UI: Inter
- Global h1/h2/h3 CSS rule: `letter-spacing: -0.02em` — do NOT add redundant tracking classes
- Hero h1 clamp: `clamp(2.75rem,7.25vw,5.1rem)` | ProjectPage h1: `clamp(1.8rem,5.1vw,3.2rem)`
- `tailwind.config.js`: `font-display` maps to Playfair Display

### Project Accent Colors (dark mode)
- amber: Somfy (`#ffc107`, cardRgb `255,193,7`) — amber-* Tailwind classes
- sky: 360Learning (`#ff1234`, cardRgb `255,18,52`) — rebased to red-* classes in dark mode
- orange: Vibe (`#FB5607`, cardRgb `251,86,7`) — orange-* classes
- rose: AXA (`#FF006E`, cardRgb `255,0,110`) — rose-* classes
- violet: available (`#8338ec`, cardRgb `131,56,236`) — violet-* classes
- `cardRgb` in accentStyles drives `.project-row` and `.next-project-card` CSS custom property `--card-rgb`

### Spacing
- 8pt grid: sections use py-20, py-24, py-28
- Section labels: `text-[11px] uppercase tracking-[0.12em] text-[rgba(249,238,242,0.4)]`
- Content max-width: `max-w-5xl` with `px-6` gutter

## Architecture
- All home components in single `App.tsx` (named function components, no default export wrappers)
- Data: `src/data/projectsData.ts` — `accentStyles` record includes `leftBorder`, `accentHex`, `cardRgb` fields
- `ProjectPage.tsx` at `src/pages/ProjectPage.tsx`
- `ScrollToTop.tsx` at `src/components/ScrollToTop.tsx`
- Section order: Navbar, Hero, About, Work, Contact, Footer
- **ClientLogos ("Trusted by") section DELETED** — do not re-add
- **About stats grid REMOVED** — right column is skill badges only

## Card Hover System
- `.project-row`: glow border via `--card-rgb` CSS custom prop on hover
- `.card-refined`: `translateY(-3px)` + shadow; arrow circle changes to `--card-accent`
- `.next-project-card`: glow shadow + border-color via `--card-rgb`
- `card-arrow` class on wrapper div (not SVG); default color `rgba(249,238,242,0.3)`; on hover: bg/border = `--card-accent`, color `#120b37`

## Button System (btn-shimmer)
- `.btn-shimmer-amber`: amber CTA glow — primary CTA style (replaces violet as primary)
- `.btn-shimmer-white`: white glow (ProjectPage gradient CTA)
- `.btn-shimmer-stone`: blush-tinted shadow (secondary/back buttons)
- `.btn-shimmer-violet`: legacy, kept for ProjectPage gradient section
- `.btn-shimmer-navy`: legacy, kept for compatibility
- Pill CTAs: `rounded-full px-4 py-3 h-auto`

## Navbar (simplified floating pill)
- Name + amber CTA only — no nav links, no scroll-collapse logic in component
- `.navbar-pill` CSS class handles the pill visual; `.navbar-pill-scrolled` for shadow on scroll
- `.navbar-links` / `.navbar-links-hidden` CSS kept for potential future use

## Interaction System (index.css)
- `--ease-spring`, `--ease-out-expo`, `--ease-out-quart`, `--ease-material` in :root
- `.link-underline` — center-outward wipe
- `.navbar-bg` + `.navbar-scrolled` — legacy CSS kept
- `.reveal` + `.is-visible` — CSS transition scroll reveal; `useScrollReveal()` in both files
- `.reveal-delay-{1-5}` — stagger at 0.08s increments
- `.animate-fade-up` + `.animation-delay-{100-600}` — hero entrance
- `.pulse-dot` — availability indicator pulse
- `html { scroll-padding-top: 96px }` — updated for pill height + 16px top offset + gap
- `.gradient-rule`: amber to blue gradient accent line
- `.contact-bg`: deep navy grid pattern background

## Watch-outs
- HARD RULE: Zero em dashes or en dashes. Use commas/colons.
- Smart/curly apostrophes in JS strings WILL break TypeScript. Use double-quotes.
- `font-display` Tailwind class maps to Playfair Display (tailwind.config.js)
- `.grain-overlay` requires `position: relative`; children need `z-index: 2` via `.grain-content`
- `!absolute` (Tailwind important prefix) needed for glow blobs inside `grain-overlay`
- Tailwind dynamic class interpolation purges classes — always use full strings in accentStyles
- `accentHex` and `cardRgb` must be hardcoded values for CSS custom property usage
- `.btn-shimmer` owns transform/transition — do NOT add Tailwind `hover:scale-*` alongside it
- `.card-arrow` class goes on the wrapper div, not the SVG
