# Conversation index: 12 October to 16 November 2026

Everything discussed in the long Claude Code conversation on the 4chouse repo, sorted by topic, so each topic can move to its own conversation. This conversation stays for the **4C House business**.

How complete this is: from 5 November the full record is available. For 12 October to 4 November only a condensed summary survived, plus the git history, so smaller side topics from that period may be missing.

## A. Stays here: 4C House business

| Topic | When | Status | Where it lives |
|---|---|---|---|
| **Website 4chouse.com** (build, Figma merge, gallery, founder photo, Formspree, crayon GSAP hero film, "AI as a Service" headline) | 12 Oct–27 Oct | Live on Netlify | `index.html`, `assets/`, README.md |
| **Launch checklist and SEO** (schema, favicons, sitemap, 404, Search Console, Bing, PageSpeed 100/100/100/100, share previews) | 4–5 Nov, 16 Nov | Done; 16 Nov audit recorded | `docs/website-launch-checklist.md`, `docs/audit-4chouse-2026-11-16.md` |
| **Analytics and ads tracking** (GA4 + consent, Meta Pixel, domain verification, events) | 4–5 Nov | Done; Google Ads AW- tag still to add | `index.html`, `privacy.html` |
| **Brand book and design system** (network background as the standard) | 4–5 Nov | Done | `brand/4C-House-Brand-Book.md`, Design System artifact |
| **Packages and pricing** (Liftoff / Orbit / Warp Speed, Founding 25 at 50%, 12 months, 12/8/5 seats, 3-month minimum) | 13–15 Nov | Live on the site (deploy the latest zip) | `index.html` Packages section |
| **Marketing plan** (Core Four, founder-led content, target industries, cold email with source + opt-out under UAE rules) | 7–13 Nov | Agreed; email campaign starts after 10–12 posts per platform | this conversation |
| **Content pipeline and social posting** (Drive review folder, 3× frequency, weekly 5-step process, Instagram/LinkedIn/TikTok connected, scheduled posting) | 15–16 Nov | Week 1 running | `content/pipeline.md`, `content/week1-schedule.md` |
| **Content made** (skydive reel v1–v6, 24 fillers, burger, supercar, plushie, Fresh to Home, sneaker, ice cream, realism fixes) | 4–16 Nov | Week 1 posting | `content/scripts/skydive-reel.md`, `content/fillers-2026-11-13.md` |
| **AI Kunal avatar** (Soul character, approved looks, grooming and framing rules) | 10 Nov | Ready; voice recording still needed | `.claude/skills/motion-video/SKILL.md` |
| **Accounts admin** (email/SPF on GoDaddy + Microsoft 365, Google Workspace conflict, Google Ads admin access, GA properties, Google Business Profile verified) | 5–13 Nov | Mostly done; GBP photos pending | this conversation |
| **WhatsApp AI assistant** (Cloudflare Worker, lead sheet, mobile inbox) | 5–13 Nov | Built and deployed; **waiting on Meta business verification** for the second number | `whatsapp-assistant/` |

## B. Move to their own conversations

| Topic | Why separate | What to do |
|---|---|---|
| **Skyloov client (confidential, NDA)** | Different client; must stay out of this repo's git history | Start a new conversation with the Skyloov brief (sent separately, never committed). Upload your own copies of the Draft 4 proposal, the leads/spend spreadsheet and the NDA, because the `_work/` folder was lost when the cloud machine reset. |
| **Tools and skills lab** (SkillSpector, Modern Web Guidance, lemo-opuscar, GSAP, Remotion, remocn, Marketing Skills, Instagram Agent Skill, MoneyPrinterTurbo, Open Generative AI, 7 Claude Agents guide, Nick Saraev list, claude-mem, gstack and others) | Research is general, not 4C-specific | New conversation for research. Decisions that affect 4C (standing rules, installed skills) get written into this repo's `CLAUDE.md` and `docs/`, so they carry over. Scan record: `docs/skill-scans-2026-11-16.md`. |
| **WhatsApp assistant** (optional split) | A self-contained technical build, paused | Can stay here, or move once Meta verification comes through. Everything needed is in `whatsapp-assistant/SETUP.md`. |
| **Other websites** | Not visible in the surviving record | Tell me which sites, and I'll add them here. |

## C. Standing rules that apply in every conversation
These are in `CLAUDE.md` and load automatically in any new session on this repo:
- Deploy only the site files; never `_work/`, `brand/`, `.claude/`, `CLAUDE.md`.
- Skyloov stays confidential.
- Keys and secrets never go in the repo or chat.
- The motion-video skill comes first for any video.
- Web work follows the launch checklist and the Modern Web Guidance scan (telemetry off).

Other rules worth repeating:
- Label AI content; fictional brands only.
- Don't feed copyrighted reference photos into generators.
- Follow the avatar grooming and framing rules.
- Scan third-party skills with SkillSpector before installing.

## D. Open items (4C House)
1. Deploy the latest site zip to Netlify; resubmit the sitemap and request indexing for the home page.
2. Week 1 posting runs automatically; tap Post on each TikTok form.
3. Decide: install the scanned skills (selection proposed 16 Nov); watch-menu reel for week 2; turn the 7 agents into skills, starting with content-strategy.
4. Voice recording for AI Kunal's voice clone.
5. Meta business verification → WhatsApp assistant on the second number.
6. Google Business Profile photos; Google Ads conversion tag.
7. LinkedIn URL for the founder bio and schema; full address if you want it public.
8. After 10–12 posts per platform: lead research and the cold-email campaign (drafts only, source stated, opt-out).
