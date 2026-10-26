# Tiny Kitchen Lab

Plain HTML + one stylesheet + one small script. No build step.

## Preview locally
Links are root-relative (`/assets/...`, `/blog/...`), so serve the folder instead of double-clicking files:

```bash
python -m http.server 8080
```

Then open http://localhost:8080

## Before launch: find & replace across all files
| Find | Replace with |
|---|---|
| `AFFILIATE_LINK_HERE` | each product's Amazon SiteStripe link (one per button) |
| `https://tinykitchenlab.vercel.app` | your custom domain, if you add one later (canonicals, OG, schema, sitemap, Pinterest links) |
| `YOUR_PINTEREST_HANDLE` | your Pinterest profile (homepage Organization schema) |
| `action="#"` on the signup form | your email provider's form URL |

Also replace the placeholder images in `/assets/img/products/` (800x600 WebP, same filenames) and the placeholder text on About, Contact, Privacy Policy and Affiliate Disclosure.

## Adding content (copy-paste, no redesign)
- **Product** → copy a block from `/templates/product-card.html` (field guide is in the comment at the top).
- **Category page** → `/templates/category-page-template.html`
- **Blog post** → `/templates/blog-post-template.html` → save as `/blog/your-slug/index.html`

Each template's top comment lists every spot to update (head tags, JSON-LD, nav, sitemap).
`/templates/` is blocked in `robots.txt` and marked `noindex`.

## Changing the look
Edit the tokens at the top of `/assets/css/styles.css` (colors, fonts, spacing, radii).

## Folder map
```
/index.html
/categories/            hub + 5 category pages
/best-sellers/  /budget-picks/   card grids with category filters
/blog/                  index + posts at /blog/<slug>/
/about/ /contact/ /privacy-policy/ /affiliate-disclosure/
/templates/             copy-paste snippets (not published)
/assets/css/styles.css  /assets/js/main.js  /assets/img/
sitemap.xml  robots.txt
```
