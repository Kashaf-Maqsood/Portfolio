# Kashaf Maqsood — Portfolio

An Angular (standalone components, v17) single-page portfolio generated from your CV.

## Run it locally

```bash
npm install
npm start
```

Then open http://localhost:4200.

## Build for production

```bash
npm run build
```

Output goes to `dist/portfolio`. You can deploy that folder to Vercel, Netlify, GitHub Pages, or any static host.

## Editing content

All the text on the site — name, summary, skills, experience, projects, education, contact info —
lives in one file: `src/app/data/portfolio-data.ts`. Edit that file and the whole site updates;
you shouldn't need to touch any component template for a content change.

## Structure

```
src/app/
  data/portfolio-data.ts     ← all CV content
  directives/reveal.directive.ts  ← scroll fade-in
  components/
    navbar/    hero/    about/    skills/
    experience/ projects/ education/ contact/ footer/
```

## Design concept

The theme is "The Stack": your work spans four domains — Frontend, Backend & Data, Design,
and Docs & Process — each gets its own accent color (coral, violet, amber, teal) that repeats
consistently through the hero's fanned card stack, the skills grid, timeline, and project cards.
