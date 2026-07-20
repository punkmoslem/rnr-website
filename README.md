# R&R Communications — Marketing Website

Production marketing site for **R&R Communications** (PT Komunika Pratama Reksa),
a Jakarta-based PR consultancy. Built with [Astro](https://astro.build) —
fully static output, no server required.

Live domain (planned): **https://rikadanrekan.id**

## Quick start

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

Requires Node.js 18.17+ (Node 20+ recommended).

## Project structure

```
rnr-website/
├── astro.config.mjs        # site URL, sitemap + MDX integrations
├── public/                 # served as-is at the site root
│   ├── favicon.svg
│   ├── logo.jpg            # original 2025 logo raster
│   ├── og-image.jpg        # social-share preview image
│   └── robots.txt
└── src/
    ├── components/         # Header, Footer, Logo, Stats, CtaBand
    ├── content/
    │   └── insights/       # ★ BLOG POSTS LIVE HERE (markdown)
    ├── content.config.ts   # blog frontmatter schema
    ├── data/
    │   ├── caseStudies.ts  # case-study content (edit text here)
    │   └── services.ts     # service descriptions (edit text here)
    ├── layouts/Base.astro  # <head>, SEO/OG tags, JSON-LD, header/footer
    ├── pages/              # one file per page = one URL
    │   ├── index.astro         → /            (Home)
    │   ├── about.astro         → /about       (Our Story)
    │   ├── services.astro      → /services    (Expertise)
    │   ├── case-studies.astro  → /case-studies (Purpose in Action)
    │   ├── team.astro          → /team        (Our People)
    │   ├── careers.astro       → /careers     (Join the Team)
    │   ├── contact.astro       → /contact     (Start a Conversation)
    │   ├── insights/           → /insights    (Perspectives blog)
    │   └── 404.astro
    └── styles/global.css   # brand colours, typography, shared classes
```

## Publishing a blog post (no code needed)

1. Create a new file in `src/content/insights/`, e.g. `my-article.md`.
2. Start it with this frontmatter block:

   ```markdown
   ---
   title: "Your Headline Here"
   description: "One-sentence summary shown in listings and search results."
   pubDate: 2026-08-01
   tags: ["Media Relations"]
   ---

   Your article text in plain markdown…
   ```

3. Commit/push (or redeploy). The article appears automatically at
   `/insights/my-article` and in the Perspectives listing, newest first.

## Contact form setup (one-time, required before launch)

The form on `/contact` posts to [Formspree](https://formspree.io) (free tier
is fine to start):

1. Create a Formspree account **using the dedicated business inbox** you want
   enquiries delivered to (not a personal address).
2. Create a new form; copy its endpoint (looks like `https://formspree.io/f/abcdwxyz`).
3. In `src/pages/contact.astro`, replace `YOUR_FORM_ID` in the
   `FORM_ENDPOINT` constant.

No API key is needed anywhere else on the site.

## Deploying (Vercel — recommended)

1. Push this folder to a Git repository (GitHub is easiest).
2. At [vercel.com](https://vercel.com) → **Add New → Project** → import the repo.
   Vercel auto-detects Astro; accept the defaults (`npm run build`, output `dist/`).
3. Every push to the main branch redeploys automatically.

**Pointing rikadanrekan.id at the deployment:**

1. In the Vercel project → **Settings → Domains** → add `rikadanrekan.id`
   (and `www.rikadanrekan.id`).
2. At the .id registrar (e.g. Pandi-accredited registrar dashboard), set:
   - `A` record for `@` → `76.76.21.21`
   - `CNAME` record for `www` → `cname.vercel-dns.com`
3. Wait for DNS propagation (minutes to a few hours). Vercel issues the
   HTTPS certificate automatically.

Netlify works identically (build command `npm run build`, publish dir `dist`).

## Editing brand colours / fonts

Everything lives in `src/styles/global.css` under `:root`. Brand values were
extracted from the 2025 logo: navy `#2F576E`, teal `#12A79C`.

## Outstanding placeholders before launch

Search the codebase for `PLACEHOLDER` to find them all:

- Leadership bios + photos (`src/pages/team.astro`)
- Current open roles (`src/pages/careers.astro`)
- Instagram handle (`src/pages/contact.astro`, `src/components/Footer.astro`)
- Dedicated business email address (`src/pages/contact.astro`)
- Formspree form ID (`src/pages/contact.astro`)

Also confirm with each named client (MSD, Bayer, JEC, Samsung, SKF, Bosch,
and the client-strip names on the homepage) that they may be named on a
public website before launch.
