# Lumina Landing Page

A polished startup landing page for **Lumina**, built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

The site is a single-page marketing experience focused on:

- a large product hero
- feature highlights
- immersive showcase cards
- product detail and spatial computing sections
- privacy messaging
- a closing CTA and footer

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 8+

### Install

```bash
pnpm install
```

### Run locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
pnpm dev     # start the development server
pnpm build   # create a production build
pnpm start   # serve the production build
pnpm lint    # run ESLint
```

## Project Structure

```text
src/app/
  globals.css   # global theme, surfaces, spacing, motion
  layout.tsx    # app shell + metadata
  page.tsx      # full landing page content and sections

public/
  *.png         # product renders, lifestyle imagery, CTA/banner assets
```

## Editing the Page

### Update copy and sections

Edit:

- `src/app/page.tsx`

This file contains the navigation, hero content, highlights, showcase cards, specs, privacy section, CTA, and footer.

### Update styling

Edit:

- `src/app/globals.css`

This file controls the global background, color system, motion, and shared presentation styles.

### Replace imagery

Swap image files in:

- `public/`

Then update the referenced paths in `src/app/page.tsx` if needed.

## Deployment

This project is ready to deploy on any platform that supports Next.js, including:

- Vercel
- Netlify
- Render
- self-hosted Node environments

For a standard production deployment:

```bash
pnpm build
pnpm start
```

## Notes

- The app currently uses `next dev --webpack` and `next build --webpack` in `package.json`.
- Metadata is defined in `src/app/layout.tsx`.
- The page is designed as a marketing landing page, not a multi-route application.
