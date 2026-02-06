# Bitrix24 Constructor Setup Guide

This document describes how to replicate the landing page structure in the Bitrix24 website constructor.

## Structure Overview

1. **Header** – Logo, navigation (Services, About Us, Blog, Contact), CTA button "Request Demo"
2. **Hero** – Main headline, subtitle, two CTA buttons
3. **Services** – 7 service cards with icons and "Learn More"
4. **Why Bitrix24** – 6 benefit items with icons
5. **Why Choose Us** – 6 advantage items
6. **Testimonials** – 3 testimonial cards
7. **Process** – 5 steps (Consultation → Planning → Implementation → Training → Support)
8. **Blog Preview** – 3 latest posts + "View All Articles"
9. **Contact** – Form (Name, Email, Phone, Company, Message, GDPR checkbox)
10. **Footer** – Logo, link columns, contact info, partner badge, copyright

## Bitrix24 Components to Use

- **Content blocks** – For each section (text + image/icon blocks)
- **Web forms** – For contact form; connect to CRM for lead capture
- **Menu** – For header navigation
- **Button** – For CTA buttons (link to contact form or contact page)
- **Blog/News** – For blog section; add 3+ articles and show latest on main page
- **Image** – For logo, hero image, icons (upload SVG or PNG from `assets/`)

## Pages to Create

| Page        | Purpose                    |
|------------|----------------------------|
| Home       | Main landing (all sections)|
| Services   | Optional: list of services |
| About Us   | Company info               |
| Blog       | Articles list              |
| Contact    | Contact form + details     |
| Privacy    | Privacy Policy             |
| Terms      | Terms of Use               |

## CRM Integration

1. Create a web form in Bitrix24 with fields: Name, Email, Phone, Company, Message.
2. Add checkbox for consent (GDPR).
3. In form settings, enable "Create CRM lead" so each submission becomes a lead.
4. Optionally set pipeline stage and assign responsible user.

## Content Source

- All copy is in `content/copy.json` – use it when filling blocks in the constructor.
- Icons are in `assets/icons/` (SVG) – upload as images or use built-in icons.
- Logo: `assets/logo.png` (M SITE.TOP). Brand colour: `#CA2F5D`.

## Responsive and SEO

- Use constructor’s responsive preview to check mobile layout.
- Set page title and meta description (see `content/copy.json` → `meta`).
- Add alt text to all images (logo, icons, hero).
