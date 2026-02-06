# msite.top — Bitrix24 Implementation Landing Page

Landing page for Bitrix24 implementation, customization, and support services in Europe (Silver Partner).

## Contents

- **index.html** — English landing (single-page: hero, services, benefits, testimonials, process, blog preview, contact form, footer).
- **index-es.html** — Spanish version (same structure, full Spanish content).
- **content/copy-es.json** — Spanish copy for all sections (for reference or CMS).
- **styles.css** — Responsive layout and styling.
- **script.js** — Mobile menu, form placeholder submit, footer year, optional GA events.
- **content/copy.json** — All copy for reuse in Bitrix24 or elsewhere.
- **assets/logo.png** — M SITE.TOP logo (magenta & black).
- **assets/icons/** — SVG icons for the 7 services.
- **docs/SETUP_BITRIX24.md** — How to replicate this structure in the Bitrix24 website constructor and connect forms to CRM.

## Languages

- **EN** — `index.html` (default)
- **ES** — `index-es.html`

Use the language switcher (EN | ES) in the header and footer to switch. For SEO, both pages include `hreflang` links; replace `https://msite.top` in the HTML with your real domain if needed.

## Running locally

Open `index.html` or `index-es.html` in a browser, or use a local server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

Then open `http://localhost:3000` (or `http://localhost:8000`). Use `index-es.html` for the Spanish version.

## Customization

1. **Logo** — Site uses `assets/logo.png` (M SITE.TOP). Brand primary: `#CA2F5D`, text: black.
2. **Analytics** — In `index.html`, replace `GA_MEASUREMENT_ID` with your Google Analytics 4 Measurement ID.
3. **Contact form** — This page uses a client-side placeholder. For production on Bitrix24, use the constructor’s web form and enable “Create CRM lead” in form settings (see `docs/SETUP_BITRIX24.md`).
4. **Testimonials** — Replace “Client Name” and “Company” in `index.html` (or in `content/copy.json`) with real names and companies when available.

## SEO

- Meta title, description, and keywords are set.
- Open Graph tags are included for sharing.
- Schema.org Organization JSON-LD is in the `<head>`.
- Section headings use semantic `h1`–`h3`; images use `alt` where needed.

## Plan reference

Structure and copy follow the Bitrix24 landing plan (hero, 7 services, why Bitrix24, why us, testimonials, 5-step process, blog preview, contact, footer). For building the same in the Bitrix24 constructor, see `docs/SETUP_BITRIX24.md`.
