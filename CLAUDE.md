# 4C House of Advertising: project notes for Claude

- This repo is the 4chouse.com website. It is deployed by dragging a folder onto Netlify, not from git; only `index.html`, `privacy.html`, `404.html`, `robots.txt`, `sitemap.xml`, `_headers`, the icon files and `site.webmanifest`, and `assets/` go live. Package them with the files listed in README.md; never include `_work/`, `brand/`, `.claude/` or `CLAUDE.md`.
- Brand rules for anything made for 4C House: `brand/4C-House-Brand-Book.md`.
- **Every motion video, animation, reel or end card:** start with the `motion-video` skill (`.claude/skills/motion-video/SKILL.md`). It checks lemo-opuscar, GSAP, Remotion and Three.js for a better result before building.
- `_work/` holds confidential client work (Skyloov, under NDA). It is excluded from git; never commit or publish it.
- `whatsapp-assistant/` is the 4C House WhatsApp AI assistant (Cloudflare Worker + Google Apps Script), set up per its SETUP.md. Keys and tokens live only in Cloudflare and Apps Script settings, never in the repo. It is not part of the website deploy.
