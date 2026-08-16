# Mukilan S — Developer Portfolio

A modern, responsive full-stack developer portfolio built with **React + Vite**, styled with
**Bootstrap grid utilities + custom CSS** (roughly 70/30 as requested). Inspired by
tamalsen.dev as a reference for layout quality, but redesigned with an original palette,
navbar, card system and section layout.

## Tech stack

- React 19 + Vite
- Bootstrap 5 (grid/utilities) + custom CSS design system (`src/index.css`)
- Plain JavaScript — no state-management libraries needed for a static portfolio

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume-mukilan-s.pdf      # placeholder — replace with your real resume
├── src/
│   ├── components/               # Navbar, Hero, About, Skills, Experience,
│   │                              # Projects, ProjectCard, ProjectModal,
│   │                              # FeaturedProject, MobileApp, Education,
│   │                              # GithubSection, Contact, FinalCTA, Footer,
│   │                              # Icons, Reveal (scroll-reveal wrapper)
│   ├── data/
│   │   ├── projects.js           # single source of truth for every project card
│   │   └── skills.js             # skills grouped by category
│   ├── pages/
│   │   └── Home.jsx              # assembles all sections in order
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                 # design tokens + all custom styles
├── index.html                    # SEO title/meta/OG tags
└── package.json
```

Projects are **not** hardcoded per card — every project lives in `src/data/projects.js` and is
rendered through the reusable `ProjectCard.jsx` / `ProjectModal.jsx` components, with filtering
handled in `src/components/Projects.jsx`.

## Run locally

```bash
npm install
npm run dev
```

Visit the local URL Vite prints (typically `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The build output goes to `dist/`.

## Before you publish

1. Replace `public/resume-mukilan-s.pdf` with your real resume (keep the same filename, or
   update the `href` in `Navbar.jsx`, `Hero.jsx` and `FinalCTA.jsx`).
2. Update the LinkedIn URL and email address in `Hero.jsx`, `Contact.jsx`, `Footer.jsx` and
   `GithubSection.jsx` (currently placeholders since none were provided).
3. Wire the contact form in `Contact.jsx` to an email service (e.g. Formspree, EmailJS) or your
   own backend endpoint if you want it to actually deliver messages.
4. Swap the abstract project thumbnails/screenshot mock in `ProjectCard.jsx` and
   `FeaturedProject.jsx` for real project screenshots if you have them.

## Deploy

### Vercel
1. Push this project to a GitHub repo.
2. Import the repo at vercel.com → it auto-detects Vite. Build command: `npm run build`,
   output directory: `dist`.

### Netlify
1. Push to GitHub, then "New site from Git" on netlify.com.
2. Build command: `npm run build`, publish directory: `dist`.

Either platform will give you a live URL automatically on every push.
