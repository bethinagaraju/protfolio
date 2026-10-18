# Bethi Nagaraju — Freelance Full Stack Developer Portfolio

A premium, dark-themed portfolio website for a freelance Java full stack developer.
Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## Sections & Routes

The site is a multi-page React Router app with these routes:

- `/` — Home (hero, about intro, 2 featured projects, services, process, testimonials)
- `/about` — Full About page
- `/work` — All featured projects
- `/work/:id` — Project case-study detail page (e.g. `/work/ai-crm`)
- `/services` — Services
- `/process` — Development process timeline
- `/stack` — Technology stack
- `/contact` — Contact form and direct channels
- `*` — 404 page

To add a new project, add an entry to `src/data/projects.ts` and a case-study page is
automatically available at `/work/<id>`.

## Getting Started

```bash
npm install
npm run dev
```

Open the Vite dev URL printed in the terminal.

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
npm run typecheck  # TypeScript check
npm run lint       # ESLint
```

## Customizing Content

All copy and data live in small, editable TypeScript files:

- `src/data/site.ts` — name, role, tagline, location, email, phone, WhatsApp, LinkedIn, GitHub
- `src/data/projects.ts` — project entries (title, category, description, tech, links, features)
- `src/data/services.ts` — service cards
- `src/data/skills.ts` — skill groups, process steps, about highlights, hero stack, contact form options

To add a live project link, set the `liveUrl` field on the project entry in
`src/data/projects.ts`. Leave it empty (`''`) to keep the "Live Demo Coming Soon" state —
do not invent URLs.

The contact form opens the visitor's email client with a prefilled message addressed to the
email in `src/data/site.ts`. To send directly from the site without an email client, connect
a form backend (for example Formspree, Resend, or a Supabase Edge Function) in
`src/components/sections/Contact.tsx`.

## Deployment

The site is fully static after `npm run build` and deploys to any static host.

### Vercel
1. Push the repository to GitHub.
2. Import the repo in Vercel.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.

### Netlify
1. Push the repository to GitHub.
2. New site from Git → build command `npm run build`, publish directory `dist`.

### Any static host
Upload the contents of `dist/` to your hosting provider (Nginx, VPS, S3 + CloudFront, etc.).

`public/robots.txt` and `public/sitemap.xml` reference `https://bethinagaraju.dev` —
update those URLs to your real domain before deploying.

## SEO

- Unique title and meta description in `index.html`
- Open Graph and Twitter card metadata
- JSON-LD structured data for a `Person` schema
- Semantic HTML throughout, lazy-loading-friendly images, reduced-motion support,
  keyboard focus states, and responsive mobile-first layouts
