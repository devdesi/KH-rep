# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

Marketing website for Kartikeya Multispeciality Hospital (Divili, Pithapuram, Kakinada) — a single-page site presenting the hospital, its three specialities, its managing director, and contact/visit details. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility classes) + hand-written CSS custom properties in `styles.css` |
| Language | TypeScript 5.9 |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── favicon.ico
│   └── placeholder.png
├── src
│   ├── routes
│   │   ├── __root.tsx   # Root HTML shell: fonts, meta/SEO tags, grain overlay
│   │   └── index.tsx    # The entire site: nav, hero, about, specialities, director, visit/contact, footer
│   ├── router.tsx        # TanStack Router setup
│   └── styles.css        # Design tokens (CSS variables), font imports, global resets
├── netlify.toml           # Build command (vite build), publish dir (dist/client), dev server settings
├── package.json
├── tsconfig.json           # @/* path alias for src/*
└── vite.config.ts
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are defined by files in `src/routes/`:

- `__root.tsx` — root layout wrapping all pages, sets page title/description
- `index.tsx` — the single `/` route containing every section of the site

Since this is a one-page brochure site, there are no other routes or API endpoints. If new pages are added (e.g. a dedicated appointments form), create new files under `src/routes/` following TanStack Router's file-based conventions.

### Styling

- Color palette and fonts are defined as CSS variables at the top of `src/styles.css` (`--ink`, `--paper`, `--teal`, `--teal-deep`, `--terracotta`, etc.) — reuse these instead of hardcoding new colors.
- Headings use the `display` class (Fraunces serif); body copy uses the default Source Sans 3.
- Layout is done with Tailwind utility classes inline in `index.tsx`.

## Development Commands

```bash
npm run dev      # Start dev server (vite dev --port 3000)
npm run build    # Production build
```

## Content notes

- Hospital name, address, phone number, director name, and specialities are hardcoded directly in `src/routes/index.tsx` (see the `SPECIALITIES` and `HOURS` arrays plus the "Visit" section). Update those in place if hospital details change.
- Hero and director images are sourced from Unsplash as stand-ins; swap the `src` attributes for real hospital/doctor photography when available.
