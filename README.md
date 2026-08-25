# gitam.shimoni · portfolio

Source for [gitam-cv.pages.dev](https://gitam-cv.pages.dev) - a single-page CV
and project showcase.

## Stack

React 18 + Vite, one plain CSS file, zero UI frameworks. Icons from Phosphor.
Scroll reveals use a small IntersectionObserver hook; all animation is
transform/opacity only and disabled under `prefers-reduced-motion`.

Content lives in `src/data.js` - components render it and nothing else, so copy
changes never touch markup.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run lint     # eslint, zero warnings allowed
npm run build    # production build to dist/
```

## Deploy

Push to `main`. GitHub Actions (`.github/workflows/deploy.yml`) lints, builds,
and publishes `dist/` to Cloudflare Pages via wrangler.

One-time setup in the repo: Settings > Secrets and variables > Actions:

- `CLOUDFLARE_API_TOKEN` - Cloudflare API token with Cloudflare Pages: Edit permission
- `CLOUDFLARE_ACCOUNT_ID` - Cloudflare account id (`npx wrangler whoami`)
