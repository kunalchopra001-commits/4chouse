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
1. ~~Contact details~~ Done: WhatsApp +971 52 453 4410, Instagram @4c.house, email hello@4chouse.com. To change the email, search for `hello@4chouse.com` in `index.html` and `privacy.html`.
2. **Connect the form.** Create a free form at [formspree.io](https://formspree.io) (or similar), then paste its URL into `<form id="leadForm" action="">`. Until then, submitting opens an email draft instead.
3. ~~Your photo~~ Done: your Higgsfield studio portrait is at `assets/founder.jpg`. Replace that file to change it (square, at least 800px).
4. ~~Past-project photos~~ Done: 27 enhanced photos in `assets/work/` (large) and `assets/work/thumb/` (gallery strip). To add more, save a 1800px and a 900px WebP version and add a line to the `PROJECTS` list near the bottom of `index.html`:
   ```js
   { img: "assets/work/thumb/new-project.webp", full: "assets/work/new-project.webp", title: "Brand launch, Dubai Mall", category: "Activations" },
   ```
   Categories become the filter buttons automatically.
5. **Privacy policy.** Add your registered company name and address in `privacy.html`, and check it with your advisor.

### Should do
6. **Client logos.** Add logos (SVG or transparent PNG) to `assets/clients/` and list them in `CLIENT_LOGOS`. The scrolling logo strip under the hero appears automatically once the list has entries. Only use brands you have permission to show.
7. **Ad tracking.** Uncomment the tracking block in the `<head>` and add your Google Analytics 4, Google Ads and Meta Pixel IDs. The page already sends these events:
   - `generate_lead` (Google) and `Lead` (Meta) when the form is submitted. Use this as your ad conversion.
   - `checkup_complete` and `CheckupComplete` when someone finishes the 60-second check-up
   - `whatsapp_click` and `Contact` when a WhatsApp link is clicked
8. **Domain tags.** Once your domain is live, add the canonical and `og:url` tags noted in the `<head>`, and a share image (`og:image`, 1200x630).

## Publishing (Netlify, about 5 minutes)
1. Go to https://app.netlify.com/drop and drag this project folder onto the page.
2. Under *Domain management*, add your domain and follow the DNS steps.
3. HTTPS is switched on automatically.

Cloudflare Pages, Vercel or GitHub Pages work the same way, because the site is plain HTML.

## Editing text
All wording lives in `index.html`. Search for the sentence you want to change and edit it in place. The check-up questions and their recommendations are in the `QUESTIONS` list in the script.
