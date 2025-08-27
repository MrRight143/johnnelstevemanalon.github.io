# Johnnel Steve Manalon — Portfolio (React + Tailwind, Vite)

Minimalist corporate portfolio & resume site for a Licensed Civil Engineer.
Tech: React 18, Tailwind CSS, Vite. Deployed via GitHub Pages (Actions).

## Quick Start (Local)
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to GitHub Pages (No local build needed)
1. Push this repository to GitHub (recommended repository name: `johnnelstevemanalon.github.io`).
2. On GitHub, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. The provided workflow (`.github/workflows/pages.yml`) will automatically build and publish the site to Pages after each push to `main`.
4. Your site will be available at: `https://johnnelstevemanalon.github.io`

## Editing Content
- Update text in `src/App.jsx`.
- Add project images under `public/` and reference them in `App.jsx`.
- Colors: gray/black minimalist palette via Tailwind.
