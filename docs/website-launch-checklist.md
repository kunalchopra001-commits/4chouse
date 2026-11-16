# Website Launch Essentials: SEO & Discoverability Checklist

Kunal Chopra, 4 November 2026. The standard for every site 4C House builds, starting with 4chouse.com.

## How to use
Run this on every site before launch, starting with your own. Work top to bottom: Phases 1–4 happen during the build, Phase 5 on launch day, Phase 6 never stops.
- Phase 1 is non-negotiable. If Google can't crawl the site, nothing below it matters.
- Duplicate this doc per project and tick the boxes as you go.
- Paste it into your AI coding tool as a spec at the start of a build, not after.
- Extra step added 16 Nov 2026: before each deploy, also run Google's Modern Web Guidance scan (see CLAUDE.md). It checks for outdated code; it does not replace this list.

## Phase 1 — Crawlable foundation
Goal: every bot gets real HTML and a clear map of the site.
- [ ] Server-side render or static-generate every page. View source (not Inspect) should show your actual text, not an empty `<div id="root">`.
- [ ] robots.txt allows crawling and ends with `Sitemap: https://yourdomain.com/sitemap.xml`. No leftover `Disallow: /` from staging.
- [ ] No stray noindex. Search the codebase for noindex; remove it from every page you want found. Check HTTP headers too (`X-Robots-Tag`).
- [ ] One domain version. Pick https + www or non-www; 301 the rest to it.
- [ ] Canonical tag on every page (`<link rel="canonical">`), self-referencing, absolute URL.
- [ ] No redirect chains. Every redirect goes straight to its final URL in one 301 hop.
- [ ] No broken links / 404s. Fix the link or 301 the dead URL. Keep a custom 404 page that links home.
- [ ] sitemap.xml auto-generated with only live, indexable, canonical URLs and lastmod dates.

## Phase 2 — On-page structure
Goal: each page says clearly what it is about.
- [ ] Unique `<title>` per page, roughly 50–60 characters, main keyword near the front.
- [ ] Unique meta description per page, roughly 140–160 characters, written to earn the click.
- [ ] Exactly one H1 per page, as a real `<h1>`, then H2/H3 in logical order.
- [ ] Alt text on every meaningful image; decorative images get `alt=""`.
- [ ] No orphan pages. Every page is linked from at least one other page or the nav/footer.
- [ ] Breadcrumbs on anything deeper than one level, with BreadcrumbList schema.
- [ ] Organization / LocalBusiness schema (JSON-LD) on the home page: name, logo, contact, social links.
- [ ] FAQPage schema only on real FAQ content. Google no longer shows FAQ rich results (since May 2026), but AI systems still read the markup.
- [ ] Clean, readable URLs: lowercase, hyphens, no IDs or query strings for main pages.
- [ ] `lang` attribute on `<html>` (e.g. `en`).

## Phase 3 — Speed and stability
Goal: pass Core Web Vitals on mobile. Test with PageSpeed Insights before launch.

| Metric | What it measures | Target |
|---|---|---|
| LCP | Main content visible | Under 2.5 s (aim for 2 s) |
| CLS | Layout jumping while loading | Under 0.1 |
| INP | Response to taps and clicks | Under 200 ms |

- [ ] Images in WebP or AVIF, resized to the size actually displayed.
- [ ] Width and height set on every image and video so space is reserved (fixes most CLS).
- [ ] Lazy-load below-the-fold images; never lazy-load the hero image.
- [ ] Fonts: self-host or preload, use `font-display: swap`, limit to 2 families.
- [ ] Minimal JavaScript: no unused libraries; defer third-party scripts (chat widgets, pixels).
- [ ] Served over a CDN with caching (Vercel, Netlify, Cloudflare all do this by default).
- [ ] Mobile-first check on a real phone, not just the browser resizer.

## Phase 4 — Sharing and branding
Goal: every link looks good when shared on WhatsApp, LinkedIn, Instagram or Slack.
- [ ] Open Graph tags on every page: og:title, og:description, og:image, og:url, og:type.
- [ ] OG image 1200×630 px, under ~1 MB, with the brand and a readable headline.
- [ ] Twitter/X card tags: `twitter:card` = `summary_large_image`.
- [ ] Favicon set: favicon.ico, 180×180 Apple touch icon, and a site.webmanifest.
- [ ] Test the preview with LinkedIn Post Inspector and Facebook Sharing Debugger (both also clear stale caches).

## Phase 5 — Launch day: register and submit
Goal: tell the search engines you exist. Under an hour.
- [ ] Google Search Console: add a Domain property and verify with a DNS TXT record at the registrar.
- [ ] Submit sitemap.xml in Search Console → Sitemaps.
- [ ] URL Inspection → Request indexing for the home page and 3–5 key pages.
- [ ] Bing Webmaster Tools: import the site from Search Console (covers Bing, Yahoo, DuckDuckGo and Bing-powered AI search).
- [ ] IndexNow switched on if the host or CMS supports it (Cloudflare, Shopify, most plugins). Bing, Yandex, Naver, Seznam and Yep use it; Google does not.
- [ ] Google Business Profile if the business has a physical location or serves a local area.
- [ ] Analytics installed (GA4 or a privacy-friendly alternative) and linked to Search Console.

## Phase 6 — Ongoing: trust and growth
Goal: earn rankings over months. This is where first-hand experience wins.
- [ ] Author or company bio with a real name, photo, credentials and LinkedIn link.
- [ ] About and Contact pages with real address, phone, and trade licence where relevant.
- [ ] People-first content. AI drafting is fine; generic filler is not. Add real examples, numbers, client work and opinions only you can give.
- [ ] Fact-check every AI-written page before publishing (Google's October 2026 guidance asks for this).
- [ ] Earn backlinks: client sites, directories, partner pages, podcasts, being quoted, original data.
- [ ] Monthly Search Console check: Pages report for indexing errors, Performance for queries and clicks.
- [ ] Re-run PageSpeed after every major change.
- [ ] Ping IndexNow / resubmit when you publish or change important pages.

## Myths to skip
- "Submit to Google" is not a separate step; it is Search Console plus a sitemap.
- "Remove all AI content": Google ranks quality, not authorship method.
- FAQ schema for extra search space: that display ended in May 2026.
- "Rank #1 by a date": indexing takes days to weeks, ranking takes months. Nobody can promise a date.
- Paid "Forbes" placements: usually low-value contributor posts. Earned mentions are what count.

## Sources
- Google FAQ rich results deprecation — TechWyse
- Google generative-AI content guidance summary — iTechGuides
- IndexNow without Google — Blck Alpaca
