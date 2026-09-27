# Jobert Padillo Noyad — Portfolio

Built with **Angular 17 (standalone components)**, **TypeScript**, and **Tailwind CSS**.

## Run it locally

```bash
npm install
npm start
```
Then open http://localhost:4200

## Where to edit content

Almost everything you'll want to change lives in one file:

```
src/app/data/portfolio-data.ts
```

- `PROFILE` — name, role, bio, email, GitHub, LinkedIn
- `JOURNEY` — the 3-step "how I got here" timeline
- `SKILLS` — grouped tech stack chips
- `PROJECTS` — your project cards (see below)
- `EXPERIENCE` — jobs/internships
- `EDUCATION` — school info
- `ACHIEVEMENTS` — awards, certs, etc.

## Design system

| Token | Value | Use |
|---|---|---|
| `paper` | `#EFF3F6` | page background |
| `ink` | `#10151B` | body text |
| `navy` | `#123353` | headings, buttons |
| `blueprint` | `#2E6E91` | links, accents |
| `grid` | `#C7D6DF` | hairlines, borders |
| `amber` | `#D98E3E` | single CTA accent — use sparingly |

Fonts: **Space Grotesk** (headings), **Inter** (body), **JetBrains Mono** (tags/labels).

## Build for production

```bash
npm run build
```
Output goes to `dist/portfolio` — deploy that folder to Vercel, Netlify, GitHub Pages, or Firebase Hosting.
