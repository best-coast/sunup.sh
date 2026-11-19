# sunup.sh

The landing page for [sunup](https://github.com/briancorbin/sunup), async daily check-ins for Slack. A [Best Coast Software LLC](https://bestcoast.dev) project.

One static page in `public/`, served by a Cloudflare Worker (`worker/index.ts` folds `www` onto the apex and adds headers). No build step.

- `social/og.svg` → `public/og.png` is the link-preview image, derived from sunup's own `assets/social-preview.svg`.
- `public/favicon.svg` is sunup's app icon; `apple-touch-icon.png` is rendered from it.

```sh
npm install
npm run dev      # http://localhost:8787
npm run deploy   # needs wrangler login or CLOUDFLARE_API_TOKEN
```

Regenerate images: `rsvg-convert -w 1200 -h 630 -o public/og.png social/og.svg` and `rsvg-convert -w 180 -h 180 -o public/apple-touch-icon.png public/favicon.svg`.
- `design/mocks/` — the four direction mocks (a = the page as shipped; b, c, d were the alternatives).
