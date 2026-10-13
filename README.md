# 4C House of Advertising: website

A static, single-page site with no build step. Files:

| File | What it is |
|---|---|
| `index.html` | The landing page (design, content and scripts in one file) |
| `privacy.html` | Privacy policy, linked from the form and footer (needed for Google and Meta ads) |
| `robots.txt` | Lets search engines index the site |
| `assets/work/` | Put past-project photos here |
| `assets/founder.jpg` | Put your portrait here (square works best) |

## Before you publish: checklist

Everything below is marked in the files with an HTML comment, so you can search for it.

### Must do
1. **WhatsApp number.** Replace `971500000000` everywhere in `index.html` (country code, no `+` or spaces). It appears in the menu bar, hero, booking section, footer and floating button.
2. **Contact details.** Replace `+971 50 000 0000` and `hello@4chouse.com` in the footer, the form script, and `privacy.html`.
3. **Connect the form.** Create a free form at [formspree.io](https://formspree.io) (or similar), then paste its URL into `<form id="leadForm" action="">`. Until then, submitting opens an email draft instead.
4. **Your photo.** Save it as `assets/founder.jpg`. Until then a "K" monogram shows.
5. **Past-project photos.** Copy photos into `assets/work/`, then edit the `PROJECTS` list near the bottom of `index.html`:
   ```js
   { img: "assets/work/mall-activation-dubai-mall.jpg", title: "Brand launch, Dubai Mall", category: "Activations" },
   ```
   Add as many as you like. Categories become the filter buttons automatically. Compress photos first (about 1600px wide, under 400 KB each, for example with squoosh.app).
6. **Privacy policy.** Add your registered company name and address in `privacy.html`, and check it with your advisor.

### Should do
7. **Client logos.** Add logos (SVG or transparent PNG) to `assets/clients/` and list them in `CLIENT_LOGOS`. The scrolling logo strip under the hero appears automatically once the list has entries. Only use brands you have permission to show.
8. **Ad tracking.** Uncomment the tracking block in the `<head>` and add your Google Analytics 4, Google Ads and Meta Pixel IDs. The page already sends these events:
   - `generate_lead` (Google) and `Lead` (Meta) when the form is submitted. Use this as your ad conversion.
   - `checkup_complete` and `CheckupComplete` when someone finishes the 60-second check-up
   - `whatsapp_click` and `Contact` when a WhatsApp link is clicked
9. **Social links.** Replace `#` on the Instagram and LinkedIn icons in the footer.
10. **Domain tags.** Once your domain is live, add the canonical and `og:url` tags noted in the `<head>`, and a share image (`og:image`, 1200x630).

## Publishing (Netlify, about 5 minutes)
1. Go to https://app.netlify.com/drop and drag this project folder onto the page.
2. Under *Domain management*, add your domain and follow the DNS steps.
3. HTTPS is switched on automatically.

Cloudflare Pages, Vercel or GitHub Pages work the same way, because the site is plain HTML.

## Editing text
All wording lives in `index.html`. Search for the sentence you want to change and edit it in place. The check-up questions and their recommendations are in the `QUESTIONS` list in the script.
