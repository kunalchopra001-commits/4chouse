# 4C House of Advertising: project notes for Claude

- This repo is the 4chouse.com website. It is deployed by dragging a folder onto Netlify, not from git; only `index.html`, `privacy.html`, `robots.txt`, `sitemap.xml`, `_headers` and `assets/` go live.
- Brand rules for anything made for 4C House: `brand/4C-House-Brand-Book.md`.
- **Every motion video, animation, reel or end card:** start with the `motion-video` skill (`.claude/skills/motion-video/SKILL.md`). It checks lemo-opuscar, GSAP, Remotion and Three.js for a better result before building.
- `_work/` holds confidential client work (Skyloov, under NDA). It is excluded from git; never commit or publish it.
