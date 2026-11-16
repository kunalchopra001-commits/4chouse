# 4chouse.com against the launch checklist (16 Nov 2026)

Checked from the site files in this repo. Live-site items (redirects, speed, Search Console) could not be tested from Claude's session and are marked **You**.

✅ pass · 🔧 fixed today · ⚠️ gap · 👤 needs Kunal · — not applicable

## Phase 1: Crawlable foundation
| Item | Result |
|---|---|
| Real HTML in view-source | ✅ Static HTML; all text is in the page source. |
| robots.txt | ✅ `Allow: /` and the sitemap line. |
| No stray noindex | ✅ Only on 404.html, which is correct. No X-Robots-Tag header in `_headers`. |
| One domain version (https, non-www) | 👤 Netlify is set up to redirect www and http to https://4chouse.com. Confirm with any redirect checker (for example httpstatus.io). |
| Canonical tags | ✅ index and privacy, absolute and self-referencing. 404 has none, which is correct. |
| No redirect chains | 👤 Same check as above: each variant should reach https://4chouse.com in one 301. |
| No broken links; custom 404 linking home | ✅ The branded 404 links home twice. |
| sitemap.xml | ✅ Only the two live, indexable pages, with lastmod dates (🔧 updated today). The site is static and deployed by drag and drop, so the sitemap is updated by hand with each change; that is fine for two pages. |

## Phase 2: On-page structure
| Item | Result |
|---|---|
| Unique titles, 50–60 chars | ✅ Home is 50 characters, keyword first. Privacy is 40, which is fine for a legal page. |
| Unique meta descriptions, 140–160 | ✅ Home is 153. 🔧 Privacy went from 80 to 147. |
| One H1, logical H2/H3 | ✅ One H1 on each page; headings run in order. |
| Alt text | ✅ The founder photo and all 27 gallery photos have alt text; decorative SVGs are hidden from screen readers. |
| No orphan pages | ✅ Privacy is linked from the footer and the form. |
| Breadcrumbs | — One-level site. |
| Organization / LocalBusiness schema | ✅ ProfessionalService with name, logo, phone, email, Dubai address, Instagram. ⚠️ Add the LinkedIn company page or Kunal's LinkedIn to `sameAs` once you share the link. |
| FAQPage schema only on real FAQ | ✅ 7 questions in the schema match the 7 visible questions. "What does it cost?" updated on 15 Nov. |
| Clean URLs | ✅ |
| `lang` attribute | ✅ `en` on all pages. |

## Phase 3: Speed and stability
| Item | Result |
|---|---|
| Core Web Vitals (LCP, CLS, INP) | 👤 Run https://pagespeed.web.dev on https://4chouse.com (mobile) after deploying, and send a screenshot. |
| WebP/AVIF, right-sized | ✅ Gallery in WebP: 900 px thumbnails and 1800 px full size. Founder photo is a 72 KB JPG at 800×800, which is fine. |
| Space reserved for images | ✅ The founder photo has width and height; gallery frames reserve space with `aspect-ratio`. |
| Lazy-loading | ✅ Gallery thumbnails and the founder photo are lazy. The hero is an inline SVG with no image to delay. |
| Fonts | ✅ Self-hosted, both preloaded, `font-display: swap`, 2 families (Montserrat, Inter). |
| Minimal JS, third parties deferred | ✅ GSAP and the film script are deferred; GA4 is async; Meta Pixel loads only after cookie consent. |
| CDN with caching | ✅ Netlify, with 30-day caching for assets in `_headers`. |
| Real phone check | 👤 Open the site on your phone after each deploy. |

## Phase 4: Sharing and branding
| Item | Result |
|---|---|
| Open Graph tags | ✅ Complete on home. 🔧 Privacy now has og:description too. |
| OG image | ✅ 1200×630, 80 KB. |
| Twitter card | ✅ `summary_large_image`. |
| Favicon set | ✅ favicon.ico, favicon.svg, 180×180 Apple icon, 192/512/maskable icons, site.webmanifest. |
| Preview test | 👤 After deploying, paste https://4chouse.com into LinkedIn Post Inspector and the Facebook Sharing Debugger. |

## Phase 5: Launch day
| Item | Result |
|---|---|
| Google Search Console (Domain property, DNS TXT) | 👤 Not confirmed yet. Tell me if it's done; if not, it's about 10 minutes in GoDaddy DNS. |
| Submit sitemap | 👤 In Search Console → Sitemaps → `sitemap.xml`. |
| Request indexing | 👤 Home page now; privacy is optional. |
| Bing Webmaster Tools (import from Search Console) | 👤 About 5 minutes once Search Console is set up. |
| IndexNow | ⚠️ Netlify drag-and-drop deploys can't ping IndexNow automatically. Use Bing Webmaster Tools → URL Submission after each update instead. |
| Google Business Profile | ✅ Verified; photos still to add. |
| Analytics linked to Search Console | ✅ GA4 is live. 👤 Link it in GA4 → Admin → Search Console links once Search Console exists. |

## Phase 6: Ongoing
| Item | Result |
|---|---|
| Author bio | ✅ Real name, photo and 24 years' experience in the founder section. ⚠️ No LinkedIn link yet; send the URL and I'll add it. |
| About and Contact | ✅ Phone, email, WhatsApp and trade licence 533880 are on the site. Address shows Dubai only; add the full address if you're happy to make it public. |
| People-first content, fact-checked | ✅ Real past projects and a real founder story. Keep adding real client results as Founding 25 members join. |
| Backlinks | 👤 Start with the Google Business Profile, LinkedIn, Instagram bio and UAE business directories. |
| Monthly Search Console check, PageSpeed after changes, IndexNow pings | Added to the monthly routine with the social audit. |

## Extra: Google Modern Web Guidance scan
✅ Run on 16 Nov: 3 findings, 2 fixed (lightbox close and click-outside), 1 false positive.
