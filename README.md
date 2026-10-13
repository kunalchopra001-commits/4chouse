# 4C House of Advertising: website

A static, single-page site with no build step. Files:

| File | What it is |
|---|---|
| `index.html` | The landing page (design, content and scripts in one file) |
| `privacy.html` | Privacy policy, linked from the form and footer (needed for Google and Meta ads) |
| `robots.txt` | Lets search engines index the site |
| `_headers` | Netlify caching and security settings (HTTPS-only, content security policy, anti-clickjacking) |
| `assets/fonts/` | Self-hosted Montserrat and Inter fonts (no calls to Google Fonts) |
| `assets/work/` | Put past-project photos here |
| `assets/founder.jpg` | Put your portrait here (square works best) |

## Before you publish: checklist

Everything below is marked in the files with an HTML comment, so you can search for it.

### Must do
1. ~~Contact details~~ Done: WhatsApp +971 52 453 4410, Instagram @4c.house, email hello@4chouse.com. To change the email, search for `hello@4chouse.com` in `index.html` and `privacy.html`.
2. ~~Connect the form~~ Done: leads go through Formspree (`https://formspree.io/f/xdealvkq`) to hello@4chouse.com. After launch, turn on *Restrict to domain* in the Formspree form settings.
3. ~~Your photo~~ Done: your Higgsfield studio portrait is at `assets/founder.jpg`. Replace that file to change it (square, at least 800px).
4. ~~Past-project photos~~ Done: 27 enhanced photos in `assets/work/` (large) and `assets/work/thumb/` (gallery strip). To add more, save a 1800px and a 900px WebP version and add a line to the `PROJECTS` list near the bottom of `index.html`:
   ```js
   { img: "assets/work/thumb/new-project.webp", full: "assets/work/new-project.webp", title: "Brand launch, Dubai Mall", category: "Activations" },
   ```
   Categories become the filter buttons automatically.
5. ~~Privacy policy~~ Done: names 4C House of Advertising LLC, Dubai, UAE. Worth a quick check by your legal advisor.

### Should do
6. **Client logos.** Add logos (SVG or transparent PNG) to `assets/clients/` and list them in `CLIENT_LOGOS`. The scrolling logo strip under the hero appears automatically once the list has entries. Only use brands you have permission to show.
7. **Ad tracking.** Uncomment the tracking block in the `<head>` and add your Google Analytics 4, Google Ads and Meta Pixel IDs. At the same time, update `privacy.html` (it currently says the site uses no analytics or cookies). The security policy in `_headers` already allows Google and Meta tracking scripts. The page already sends these events:
   - `generate_lead` (Google) and `Lead` (Meta) when the form is submitted. Use this as your ad conversion.
   - `checkup_complete` and `CheckupComplete` when someone finishes the 60-second check-up
   - `whatsapp_click` and `Contact` when a WhatsApp link is clicked
8. ~~Domain tags~~ Done for https://4chouse.com: canonical link, share preview image (`assets/og-image.jpg`), `sitemap.xml`.

## Publishing on GoDaddy (4chouse.com)

### If you have a GoDaddy web hosting plan (cPanel)
1. GoDaddy → My Products → Web Hosting → **Manage** → **cPanel Admin** → **File Manager**.
2. Open the `public_html` folder and delete GoDaddy's placeholder page (`index.html` or `default.html`) if there is one.
3. Upload these files and folders into `public_html`: `index.html`, `privacy.html`, `robots.txt`, `sitemap.xml` and the whole `assets` folder (keep its structure). The easiest way: zip them on your computer, upload the zip, then right-click it in File Manager → **Extract**.
4. In cPanel, open **SSL/TLS Status** and make sure 4chouse.com has a certificate (free AutoSSL), so the site loads on https.
5. Visit https://4chouse.com.

### Netlify + GoDaddy domain (the setup in use)
1. Sign up free at https://app.netlify.com (with Google or GitHub).
2. Go to https://app.netlify.com/drop and drag the `4chouse-site` folder onto the page. You get a test link like `random-name.netlify.app`.
3. **Site configuration → Change site name** to `4chouse` (test link becomes `4chouse.netlify.app`).
4. **Domain management → Add a domain** → `4chouse.com` → **Verify** → **Add domain**. Netlify adds `www.4chouse.com` too and redirects it.
5. In GoDaddy: **My Products → 4chouse.com → DNS**:
   - Edit the **A** record with name `@` → value `75.2.60.5` (delete any other `@` A records, such as GoDaddy "Parked").
   - Edit the **CNAME** record with name `www` → value `4chouse.netlify.app`.
   - Leave MX and TXT records alone (they handle email).
6. Back in Netlify, **Domain management → HTTPS → Verify DNS configuration**. The certificate is issued automatically, usually within an hour (DNS can take up to 24 hours).

To update the site later, drag the new folder onto **Deploys** in your Netlify site.

### After it is live
- Submit the booking form once to check the email arrives at hello@4chouse.com (check spam the first time).
- Formspree → your form → Settings → **Restrict to domain**: `4chouse.com`.
- Google Search Console: add 4chouse.com and submit `https://4chouse.com/sitemap.xml`.
