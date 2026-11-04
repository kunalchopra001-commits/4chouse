---
name: motion-video
description: Standing workflow for every motion video, animation, reel, end card, explainer or animated graphic for 4C House or its clients. Use it whenever the user asks for any moving visual, before choosing how to build it. It checks whether lemo-opuscar, GSAP, Remotion or Three.js (the four approved toolkits) would make a better video, then applies the 4C House brand book.
---

# Motion video: standard setting

Kunal (4C House of Advertising) asked that every motion video request starts here. Before planning or building, run the toolkit check below, then tell him in one or two lines which toolkit(s) you will use and why. If none fits, say so and use the usual route (Higgsfield AI footage, or HTML/GSAP frames rendered with Playwright and ffmpeg).

## Step 1: Toolkit check

Go through all four. For each, decide "use", "use for part" or "not needed".

### 1. lemo-opuscar (github.com/lemomo-ai/lemo-opuscar, MIT)
Code-rendered films in 66 library styles (watercolour, Swiss motion graphics, Ukiyo-e, LiDAR survey and more), with directing, music, voice and mixing. It can also turn a library style into a saved custom style.
- **Use when:** an explainer or story film, a stylised brand piece, anything that should look illustrated or designed rather than filmed, or when exact text and colours matter and no AI-generation credits should be spent.
- **Not for:** photorealistic footage of people, places or products (use Higgsfield for that).
- **Setup:** `claude plugin marketplace add lemomo-ai/lemo-opuscar` then `claude plugin install lemo-opuscar@lemolab`; or clone the repo and work in it. Needs Node 20+, ffmpeg 7+, Python 3.11+. If only ffmpeg 6 is available, say so before relying on it.
- **Brand:** a saved "4C House" style built from `brand/4C-House-Brand-Book.md` is the preferred base once it exists.

### 2. GSAP skills (greensock/gsap-skills, MIT)
Official guidance for the GSAP animation library, which 4chouse.com already uses.
- **Use when:** animated titles, end cards, logo reveals, kinetic type, UI demos (WhatsApp chats, dashboards), the network background, website animation, or any HTML frame-by-frame render.
- **Default for:** every 4C House end card and text overlay.

### 3. Remotion skills (remotion-dev/skills)
Videos built from React code, good for templates and data.
- **Use when:** the same format is needed many times with different text, data or clients (property reels, monthly report videos, captioned versions of posts, batch ad variations).
- **Licence check:** free for companies of up to 3 people; above that a company licence is needed. Mention it if 4C House or the client may be larger.

### 4. Three.js skills (CloudAI-X/threejs-skills, MIT, documentation only)
3D graphics in the browser.
- **Use when:** a 3D product turntable, 3D logo, depth or particle scenes, or a 3D version of the network background.
- **Not needed for** flat motion graphics.

### Combinations that work
- AI footage (Higgsfield) for the realistic shots plus a GSAP end card and overlays.
- lemo-opuscar film with a GSAP brand end card.
- Remotion template whose scenes use GSAP-style motion and the brand tokens.

## Step 2: Brand rules (always)

Read `brand/4C-House-Brand-Book.md` and follow it. In short:
- Ground `#0c0b0a` with the network background (cyan nodes, dashed links, pulses, faint grid, slow cyan and warm orbs).
- Cyan `#00d9ff` is the brand colour; crayon yellow `#ffc94d` for warm lines; Montserrat headlines, Inter body.
- Rainbow gradient only on "AI as a Service.".
- End card: network background, glowing 4C tile, neon "4C House", rainbow "AI as a Service.", service pills lighting up one by one, "Book your package", cyan 4chouse.com button. Elements arrive one after another.
- Label AI-generated footage; AI people are never shown as real customers; only approved claims; no other company's branding.
- Sound effects only unless asked; Kunal adds music in the app.
- Vertical 1080×1920 for reels unless told otherwise; keep text in the safe area.

## Step 3: Working style

- Show stills or a storyboard for approval before spending credits or long renders.
- Check frames yourself before delivering; report problems honestly.
- Give credit costs before generating.
