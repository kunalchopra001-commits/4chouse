# 4C House — Landing Page

Single-file static landing page (`index.html`). No build step: host it on Netlify, Vercel, GitHub Pages, Cloudflare Pages or any web host.

## Before going live: fill in these placeholders

All are marked with HTML comments in `index.html`.

1. **Brand name.** Search for `4C House` / `4C<span>.</span>House` if the business name differs.
2. **Lead form.** Create a free form endpoint (e.g. [Formspree](https://formspree.io)) and paste its URL into `<form id="leadForm" action="">`. Without one, the form opens an email draft to `hello@example.com`.
3. **Contact details.** Phone, email and city in the footer, and the email in the script fallback.
4. **WhatsApp number.** In the floating button link `https://wa.me/910000000000` (country code, no `+`).
5. **Ad tracking.** Uncomment the Google tag (GA4 + Google Ads) and Meta Pixel blocks in `<head>` and add your IDs. The page already fires:
   - `generate_lead` (Google) / `Lead` (Meta) on form submit, which you can use as your ad conversion
   - `checkup_complete` / `CheckupComplete` when someone finishes the symptom check-up
6. **Past work photos.** Put photos in `assets/work/` and swap the four gradient tiles in the "Our story" section for `<img>` tags.
7. **Client logos.** Replace the "Client logo" placeholders (only use brands you have permission to show).
8. **Founder quote.** Edit or attribute the quote in the "Why trust us" section.

## Hosting quick start (Netlify)

Drag the project folder onto https://app.netlify.com/drop, then connect your domain under *Domain settings*.
