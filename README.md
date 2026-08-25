# gitam-cv

My CV and portfolio, live at **[gitam-cv.pages.dev](https://gitam-cv.pages.dev)**.

One page that covers the whole picture: about, experience, projects, skills,
education, contact. Built with React 18 + Vite, no UI framework - all styling
is one plain CSS file.

## What is going on under the hood

- **Content is data.** Every word on the page lives in `src/data.js`.
  Components render it and nothing else, so copy changes never touch JSX.
- **Scrolling** uses Lenis for inertial feel; anchor clicks route through
  `lenis.scrollTo` with a nav-height offset.
- **Section reveals** run on a small IntersectionObserver hook and replay
  each time a section re-enters the viewport. Animation is transform/opacity
  only, and all of it switches off under `prefers-reduced-motion`.
- **Hero background** is a small WebGL fragment shader: a slow, domain-warped
  FBM field in the site palette that drifts with scroll. It renders at half
  resolution, pauses when the tab is hidden, draws a single static frame
  under reduced motion, and falls back to CSS gradient blobs if WebGL is
  unavailable.
- **Scroll spy** highlights the active section in the nav via a second
  IntersectionObserver.

## Where things live

```
src/
  data.js        # profile, experience, projects, skills, education
  App.jsx        # section order
  hooks.js       # smooth scroll, reveals, scroll spy
  components/    # one component per section
  index.css      # all styling
public/          # favicon, og image, portrait
```

## Develop

```bash
npm install
npm run dev      # local dev server
npm run lint     # eslint, zero warnings tolerated
npm run build    # production build into dist/
```

## Deploy

Merges to `main` deploy themselves: GitHub Actions
(`.github/workflows/deploy.yml`) lints, builds, and publishes `dist/` to
Cloudflare Pages with wrangler. There is no manual step.

One-time setup, in Settings > Secrets and variables > Actions:

- `CLOUDFLARE_API_TOKEN` - API token with Cloudflare Pages: Edit permission
- `CLOUDFLARE_ACCOUNT_ID` - account id (`npx wrangler whoami`)
