# TrueProfit

Simple, free E-commerce Profit Margin Calculator — built for small sellers.

This folder contains a single-page static tool to calculate true profit and profit margin by factoring sale price, cost of goods, shipping, payment processing (percentage + fixed), and marketplace fees.

## Files

- `index.html` — main page
- `styles.css` — layout & responsive styles
- `script.js` — calculator logic
- `favicon.svg`, `og-image.svg` — icons / social preview
- `CNAME` — `true-profit.sidepocketlab.com`
- `sitemap.xml`, `robots.txt` — SEO helpers

## Run locally (WSL)

```bash
# from repo root in WSL
cd /mnt/d/Code/Sandbox/_quartz/true-profit
python3 -m http.server 8000
# open http://localhost:8000 in your browser
```

## Deploy

- Netlify / Vercel: Drag-and-drop the `true-profit` folder (or connect the repo). They serve static sites automatically.
- GitHub Pages: publish the contents of the `true-profit` directory to a `gh-pages` branch (or configure Pages to serve from the `true-profit` folder) and ensure `CNAME` is included for the custom domain.

## SEO / Social

- Open Graph and Twitter Card meta tags are included in `index.html` and reference `og-image.svg`.
- `sitemap.xml` and `robots.txt` are provided.

## Notes

- The `CNAME` file contains `true-profit.sidepocketlab.com` so include it when deploying to preserve the custom domain.
- If you want PNG social-preview compatibility, convert `og-image.svg` to a 1200×630 PNG (many CDNs and social platforms prefer PNG/JPEG).

---
Made by SidePocketLab
