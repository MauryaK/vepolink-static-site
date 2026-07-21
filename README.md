# Vepolink Website

Static, server-rendered HTML/CSS/JavaScript marketing website for `vepolink.com`.

![Vepolink desktop above fold](docs/above-fold-desktop.png)

## Technology

- Static server-rendered HTML in `index.html`
- Clean static pages in `/wqms/`, `/about/`, and `/product/`
- CSS-only responsive layout and visual system in `assets/site.css`
- Small vanilla JavaScript enhancement layer in `assets/site.js`
- Precompiled React bundles for richer secondary pages in `assets/about.bundle.js` and `assets/product.bundle.js`
- No build step required for local preview
- Can be hosted on any static hosting provider

## Features

- SEO-ready static content for important above-the-fold and section content
- Schema.org `Organization` and `WebSite` structured data
- Product schema on the product detail page
- Open Graph and Twitter card metadata
- `robots.txt` and `sitemap.xml`
- Responsive desktop and mobile layouts
- Lightweight dashboard visuals with client-side metric updates
- Content Security Policy and deployment headers in `_headers`
- Local assets for logos and favicon

## Run Locally

From the project folder:

```bash
cd /Users/anantmendiratta/Dev/Vepolink-website
python3 -m http.server 4173
```

Open:

```text
http://localhost:4173/
http://localhost:4173/wqms/
http://localhost:4173/about/
http://localhost:4173/product/
```

To stop the local server, press `Ctrl+C` in the terminal running the server.

## Alternative Preview

Because this is a static site, you can also open `index.html` directly in a browser:

```text
file:///Users/anantmendiratta/Dev/Vepolink-website/index.html
```

Using the local server is preferred because it behaves closer to production.

## Deploy Notes

Upload the project files as static assets. Make sure the deploy platform applies the headers in `_headers`, especially the Content Security Policy and `frame-ancestors` directive.
