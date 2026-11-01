# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for Hotel Landmark, Malda (West Bengal), positioned as a **business hotel**: rooms, plus "Hotel Landmark Banquet & Restaurant" (formerly "Royal Touch" — that name must not reappear). The site's goal is driving direct bookings via phone/WhatsApp and ranking in local search. There is no backend or booking system. Deployed on Vercel (`vercel.json`); Node 24 (`.nvmrc` and `engines` in `package.json` — keep them pinned to one major so Vercel does not auto-upgrade).

## Commands

```bash
npm run dev     # dev server at http://localhost:3000
npm run build   # production build — the main correctness check
npm start       # serve production build
npm run lint    # ESLint (next/core-web-vitals)
```

There is no test framework configured.

## Architecture

- **Next.js 13.5 App Router** in `app/`. Each route is a single `page.js` with hard-coded content and its own `export const metadata` (titles get the ` | Hotel Landmark Malda` suffix from the template in `app/layout.js`, so don't repeat it).
- `app/layout.js` loads self-hosted fonts from `app/fonts/` via `next/font/local` (Outfit → `--font-display`, Inter → `--font-body`). Don't switch back to `next/font/google`: on Next 13.5 it crashed Vercel builds (`Cannot read properties of null (reading '1')` in the Google font loader). It also and wraps every page in `<Navigation />`, `<main>`, and `app/footer.js`. Pages should not render their own `<main>`.
- **All contact details and external links live in `lib/site.js`** (`site.phones.booking | reception | banquet | feedback`, each with `display`, `tel`, `whatsapp`). Never hard-code phone numbers, emails, or map/review URLs in pages.
- **Rooms live in `lib/rooms.js`**: `categories` (Economy, Deluxe, Suite — the only rooms shown on the homepage) and `roomTypes` (every bookable type, shown on `/hotel-malda-wb` grouped by guest count; each `id` is an anchor). A room type without its own `image` falls back to its category photo and is labelled "Representative photo".
- Shared building blocks: `components/PageHero.js` (photo header for inner pages) and `components/CtaBand.js` (closing call/WhatsApp band, takes a `site.phones.*` entry).
- `next.config.js` permanently redirects the old `/privacy-policy-royal-touch` URL to `/privacy-policy`.
- `pages/` is the legacy Pages Router and only serves `pages/api/hello.js`; `pages/_app.jsx` (Facebook Pixel) therefore does **not** run on App Router pages. `analytics.js` (react-ga4) is not wired up anywhere.

## Design system

Palette comes from the logo (`public/HL.png` triangle mark, `public/logo.png` amber wordmark — use the wordmark only on dark backgrounds). Tailwind tokens in `tailwind.config.js` under `brand.*`: `amber` (accent/primary buttons), `ink` and `brown` (dark surfaces, headings), `rust` (eyebrows, links), `sand` (page background), `line` (borders). Don't introduce other accent colours (no green WhatsApp buttons, no gold/navy).

Component classes in `app/globals.css`: `.container-site`, `.section`, `.eyebrow`, `.heading`, `.lead`, `.btn-primary`, `.btn-dark`, `.btn-outline`, `.btn-outline-light`, `.card`, `.text-link`. Prefer these over re-composing utilities. `react-bootstrap` / `flowbite-react` are unused dependencies.

Photos in `public/site-photo/rest-*.jpg` carry a "Shot on OnePlus" watermark at the bottom; display them with `object-cover` plus a top-biased position (e.g. `object-[center_30%]`) in a landscape box so it is cropped out.

## SEO conventions (from README)

- Route slugs follow `<keyword>-<city>-<state-abbr>`, e.g. `/hotel-malda-wb`, `/banquet-malda-wb`. Keep existing slugs stable.
- Every image alt text should contain SEO keywords (e.g. "… Malda"). Use `next/image` with `sizes`.
- Each page should have two internal links and one external link to the Google Business Profile.
