# 4C House of Advertising: Brand Book

> **How to use this file.** Load it into any conversation before asking for proposals, decks, emails, social posts, web pages or video scripts for 4C House. Follow every rule in it: colours, fonts, voice, layout and the network background. Where it gives exact values or exact wording, use them as written. Source: the relaunched website 4chouse.com. Version: November 2026.

## Quick reference

- **Company:** 4C House of Advertising LLC, Dubai, UAE. Managing Director: Kunal Chopra.
- **Headline / positioning:** AI as a Service. We make AI work for you.
- **Offer:** Done-for-you AI for Dubai businesses: marketing, lead generation and automation, set up and run by us.
- **Services:** Websites · Content · Marketing chatbots · Lead generation · AI automations (plus operations, finance and HR automation).
- **Method:** Diagnose → Prescribe → Implement → Monitor (the business doctor / trusted mechanic).
- **Proof:** 24 years designing and building mall activations, exhibition stands, retail interiors and kiosks for big brands.
- **Look:** dark near-black (#0c0b0a), brand cyan (#00d9ff), warm crayon yellow (#ffc94d), Montserrat headlines, Inter body, a faint animated network of cyan nodes and dashed lines behind everything, and a rainbow gradient only on "AI as a Service."
- **Main call to action:** Book a free diagnostic. Secondary: Chat on WhatsApp.
- **Contact:** +971 52 453 4410 · hello@4chouse.com · @4c.house · 4chouse.com · Dubai, UAE

## Foundations

4C House of Advertising is a Dubai company that sets up and runs AI for growing businesses: marketing, lead generation and automation, done for the client and kept running. This book is drawn from the relaunched website, 4chouse.com. Use it for anything that carries the 4C House name: web pages, social posts, reels, decks, proposals and signage.

### The idea in one line

**AI as a Service. We make AI work for you.**

That headline is the brand. Everything else supports it. The second idea is the method: 4C House works like a good doctor or a trusted mechanic. Examine first, explain clearly, fix what matters, then keep it running. Diagnose, Prescribe, Implement, Monitor.

Behind it sit 24 years of designing and building mall activations, exhibition stands, retail interiors and kiosks. That history is the proof of discipline: "24 years of building things that had to open on time."

### Name

- Write **4C House of Advertising** in full the first time, in legal lines and in the footer. The registered name is **4C House of Advertising LLC**.
- After that, **4C House** is fine. Never "4C", "4CH" or "Four C" in running text.
- The "4C" is always a capital C with no space: 4C, not 4c or 4 C.
- The Instagram handle is **@4c.house** (lower case, as the platform shows it).

### Logo

The mark is the **4C tile**: a `cyan` square with rounded corners and "4C" in Montserrat Black in `bg`. The lockup puts the tile beside the full name in Montserrat Bold, `fg`.

- Corner radius is about 26% of the tile's side (`radius-mark` 10px on the 38px header tile, 14 on the 64px favicon). Keep that ratio at every size.
- Space between tile and name: one third of the tile's width (12px at 38px).
- Put the logo on `bg` or a dark photo only. The brand has no light version: the site is dark-only by design.
- Minimum size: 24px tile on screen.
- Do not outline, recolour, stretch or add effects to the tile. The cyan glow (`glow-rest`) is allowed round the tile in motion pieces and end cards.
- Use the files under Logos: `4c-favicon.svg` (the source mark), `4c-mark.png` (tile alone, transparent), `4c-lockup.png` (horizontal), `4c-stack.png` (stacked, for square formats), `4c-neon.png` (video treatment, see Social and video).

### Colour

The page is dark: `bg` with a faint warm wash (`warm-glow` at 7% in a large radial at the top left) and two slow-floating light orbs, a `cyan` one at the top right and a `warm-glow` one lower left, each at 10–16% opacity.

- **Cyan is the brand.** Use `cyan` for the logo tile, the one primary button, links, icons, focus rings, progress and every glow. One solid cyan call to action per view.
- **Crayon yellow is the human voice.** Use `crayon-yellow` for the offer line, captions under the film and "Book your package" lines. It is warm next to the cold cyan, which is the point.
- **Text:** headlines in `fg`, paragraphs in `muted`, captions in `dim`. Text on a cyan fill is `bg`, never white.
- **Lines, not boxes:** separate rows with `line`, outline cards with `line-strong` as an inset shadow. Tint something to mark it as ours with `cyan-wash` plus a `cyan-edge` outline (the 4C House column in the comparison table, pills, badges).
- `crayon-coral` and `chalk` belong to the crayon illustrations. Do not use them for interface text.
- `danger` only for form errors, always with words. `whatsapp` green only for the floating phone button.
- `magenta` exists in the palette but is unused. Leave it out.

### The network background

The background is the brand's signature: an endless field of `cyan` nodes joined by dashed lines, fixed behind every page, with light pulses travelling down the links. It reads as "AI connecting the business" without showing a single robot or circuit. **Use it behind everything 4C House builds**: websites, landing pages, client dashboards, decks, social end cards and video backgrounds. The drop-in code is in the "Network background code" section near the end of this file.

How it is built, in back-to-front order:

1. **Ground:** `bg`, with a warm radial wash (`warm-glow` at 7%, 1200 × 800px, at the top left).
2. **Fine grid:** 1px `cyan` lines at 2.2% opacity every 48px. It moves with the page.
3. **Far network:** nodes on a 150px grid (110px on phones), lines at 7% opacity and 0.5px wide, nodes at 10%. It moves at 0.4× the scroll speed, so it feels deeper.
4. **Near network:** nodes on a 230px grid (170px on phones), lines at 17% opacity and 0.8px wide, nodes at 22% with a soft 7px halo. It moves exactly with the page.
5. **Pulses:** bright `cyan` dots (2.2px, with a 7px glow) that slide down about 40% of the near links. They always travel downwards, the way the page reads, drift gently on their own, and **speed up while the visitor scrolls**.
6. **Orbs:** two blurred `cyan` circles (640px at the top right at 16%, 560px at the bottom left at 10%) and one `warm-glow` circle (520px, left side, 10%), each floating slowly on a 12–18s loop.

Rules:

- Lines are dashed (8px dash, 5px gap), never solid. Nodes sit at random points inside each grid cell, and about 22% of cells are empty, so it never looks like graph paper.
- The pattern is fixed per position, not random on each load: the same page always shows the same network.
- It stays faint. If it competes with text, it is too strong. Never raise the line opacity above 17% or add colours to it.
- Content sits above it on `bg` or on panels; panels may be slightly see-through (`surface` at 88%, 12px blur) so the network shows faintly through.
- In still images (posts, slides, print), use a frozen frame of it: grid, both networks and a few pulses, without the orbs' motion.
- With reduced motion, stop the drifting and the pulses; the network still moves with scrolling.

### Typography

Two families, both loaded from the site's own font files.

- **Montserrat** (`display`, weights 600–900) for headlines, labels, buttons, numbers and anything short.
- **Inter** (`body`, 400–600) for paragraphs and form inputs.

Rules:

- Headlines are tight: `hero` at 900 and `section` at 800, letter-spacing -0.02em, balanced wrapping.
- Write headlines as complete sentences that end with a full stop: "Not another agency." "We start where the money is." "Questions owners ask us."
- Buttons are UPPERCASE Montserrat 700 with 0.08em tracking (`button`). Small labels are UPPERCASE with 0.1–0.14em tracking (`eyebrow`, `step-label`). Nothing else is set in capitals.
- Keep paragraphs to about 60 characters wide (`lede` 60ch, `body` 52–68ch).
- Use tabular figures for counters and results.

### The rainbow headline

"AI as a Service." is set in a rainbow gradient (`rainbow-1` to `rainbow-7`, back to `rainbow-1`), 300% wide, sliding sideways over 8 seconds, with a 16px blurred copy behind it at 80% opacity as a glow. The line below it ("We make AI work for you.") stays plain `fg`.

- Use the rainbow for **"AI as a Service."** and nothing else. One rainbow per screen, slide or video.
- It always sits on `bg`.
- With reduced motion, the gradient stops moving; it stays rainbow.

### Glow

Cyan light is the second signature. Primary buttons pulse between `glow-rest` and `glow-peak` every 2.6s. Hover lifts a button 2px and adds `glow-hover`. The check-up card has a conic cyan border that spins every 4.5s, with a `cyan-ice` highlight, inside `glow-frame`. Portraits get `glow-portrait`.

- Glow only cyan things. Never glow text in paragraphs.
- One pulsing element per view.

### Shape and space

- Everything clickable is a pill (`pill`): buttons, chips, tags, the WhatsApp pill. Buttons are at least 48px tall (40px in the header).
- Cards and frames use `radius` (16px). Fields and answer buttons use `radius-field` (12px).
- Content sits in a 1200px column (`max-width`) with 24px gutters (`space-24`). Sections breathe: `section-y` (64–108px) top and bottom.
- Two-column layouts split roughly 0.9 : 1.1 with 56–80px between (`space-56`, `space-80`) and collapse to one column under 1024px.
- Between major sections, a hand-drawn **crayon horizon** (a wavy 3px line at 50% opacity with a small doodle resting on it) replaces a plain divider.

### Illustration

The hero film is a crayon-style animation: flat characters with a grainy crayon texture, `crayon-yellow`, `crayon-coral`, `chalk` and `cyan` on a warm dark ground, thick rounded strokes. A worried owner at a desk, a friendly AI robot, and a "business doctor" with a stethoscope and toolbox. See `hero-film-still.png` and `crayon-horizon.png`.

- Keep the crayon world friendly and slightly naive; it explains, it does not decorate.
- Hands are open (waves, thumbs up). Never a single raised finger.
- The robot is the only visual for "AI". No glowing brains, circuit boards or humanoid chrome.

### Photography

- **Work photos:** our real builds (stands, kiosks, carts, store fit-outs), shown in 4:3 frames with `radius`, on dark grounds. Never stock.
- **Founder:** Kunal, in a circle with `glow-portrait`. He is the face of the business.
- **AI-generated images and video** are fine for content, but label them (see Social and video) and never present an AI person as a real customer.

### Iconography

Icons are **Phosphor** (regular weight, 256 grid, filled paths), inlined as an SVG sprite and coloured with `currentColor`. Usually `cyan`, 18–26px, often inside a `cyan-wash` badge with a `cyan-edge` outline. The SVG files under Icons are exported in `cyan` (#00d9ff) because an `<img>` cannot inherit colour. No emoji in the interface.

### Motion

- Easing: cubic-bezier(0.16, 1, 0.3, 1) for almost everything. Entrances rise 28px and fade over 0.8–0.9s, staggered 90ms.
- Rotating words in headlines slide up with a 10px blur.
- Crayon lines draw on, then doodles pop in with a small overshoot.
- Respect reduced motion: stop loops, keep everything visible.

### Accessibility

- Focus: a 2px solid `cyan` outline, 3px offset, `radius-focus` corners. It passes 3:1 on every ground.
- Body text pairs: `muted` on `bg` 7.8:1, `dim` on `bg` 5.0:1 (4.8:1 on `surface`), `fg` on `surface` 17.3:1, `bg` on `cyan` 11.6:1, `crayon-yellow` on `bg` 12.8:1.
- Touch targets 44px minimum.

### Contact block

Use exactly this order and format:

- +971 52 453 4410
- hello@4chouse.com
- @4c.house
- Dubai, UAE
- © 2026 4C House of Advertising LLC.

## Voice and copy

4C House talks like a trusted business doctor who also happens to be a builder: plain, calm, specific, a little dry. The reader is a busy owner of a 10–200 person business in Dubai who is growing but stretched. They do not want to learn AI. They want fewer missed leads and fewer late nights.

### Principles

- **Plain language.** "No jargon, no 80-page deck." If a word needs explaining, use a simpler one.
- **Outcomes, not tools.** Say what changes for the business: "Every new enquiry answered in under a minute." Not "GPT-powered omnichannel agent".
- **Specific numbers.** "60-second check-up", "six yes-or-no questions", "30 minutes", "24 years", "within a few weeks". Never "lightning fast" or "game-changing".
- **We and you.** "We" is 4C House. "You" is the owner. "I" only when Kunal speaks as founder.
- **Honest promises.** Free means free: "No sign-up, no sales call." "You leave with three things worth automating, whether you hire us or not."
- **Doctor and mechanic metaphors**, used lightly: examination, prescription, repair, regular servicing, symptoms, leaks, the engine.

### Mechanics

- British spelling: personalised, colour, organisation, enquiry.
- Headlines are full sentences with a full stop.
- Sentence case everywhere except buttons and small labels, which the design sets in capitals.
- Money is in dirhams: "every dirham of ad spend".
- Write "AI", never "A.I." or "Ai".
- No emoji in the website, proposals or decks. Social captions may use one or two.
- No exclamation marks in headlines.

### Real lines to learn from

> AI as a Service. We make AI work for you.

> Not another agency. Not another consultancy. An agency sells you posts. A consultancy sells you a report. Neither fixes the engine.

> A check-up that ends in working systems.

> We start where the money is.

> A Friday-night message becomes a booked call by morning.

> I've run the business you're running.

> Built for one client at a time. Purposefully small. Obsessively effective.

> 30 minutes on your business. You leave with three things worth automating, whether you hire us or not.

### Calls to action

Use these, in this wording:

- **Book a free diagnostic** (primary, solid cyan)
- **Chat on WhatsApp** (secondary, outline)
- **Take the 60-second business check-up** / **Start the check-up**
- **Book your package** (social and video end cards)

### Words to avoid

Revolutionary, cutting-edge, synergy, leverage, unlock, supercharge, seamless, robust, "in today's fast-paced world", "AI-powered" as an adjective on everything, and any claim we cannot show.

## Social and video

How the website's identity carries into Instagram (@4c.house), TikTok, reels and ad videos.

### Formats

- Reels and stories: 1080 × 1920 (9:16). Keep text inside the middle 1080 × 1420 so app buttons and captions do not cover it.
- Feed and carousel posts: 1080 × 1350 (4:5).
- Profile picture: the 4C tile (`4c-mark.png`) on `bg`, cropped to a circle with room round the tile.

### End card

Every reel and ad ends on a 3–4 second end card built from the website hero:

1. The network background (see Foundations and the NetworkBackground component): the fine grid, the two layers of dashed cyan links with pulses running down them, and the slow `cyan` and `warm-glow` orbs. In video, let it glide slowly upward the whole time, as if the viewer were scrolling.
2. The 4C tile with a soft pulsing glow.
3. **4C House** in Montserrat Black with a neon `cyan` glow (`4c-neon.png`), "OF ADVERTISING" small, spaced, beneath.
4. **"AI as a Service."** in the moving rainbow, then "We make AI work for you." in `fg`.
5. The services as `cyan-edge` pills that light up one after another: Websites, Content, Marketing chatbots, Lead generation, AI automations.
6. "Book your package" in `crayon-yellow`, then a glowing solid `cyan` pill with **4chouse.com** in `bg`.

Elements arrive one after another, not all at once. The neon wordmark is for video and social only; on the website the lockup is the plain tile and name.

### Captions and on-screen text

- On-screen text: Montserrat 800–900, white `fg` or `bg` on a cyan pill. Short lines, five words or fewer.
- Captions follow the voice guide: a hook in the first line, plain language, one call to action, three to five hashtags.

### AI-generated content

- Put a small "AI-GENERATED" label in a corner of any AI-made video or image (Montserrat Bold, white at 85% on a 45% black rounded box).
- AI people are presenters or characters, never customers giving testimonials.
- Only state claims the business can back up.
- Keep real places real: no other company's logos or branding in generated footage.

### Sound

Videos ship with sound effects only (wind, whooshes, clicks) so music can be added in the app from its licensed library, which also helps reach.

## Design tokens

### Colours

| Token | Value | Use |
|---|---|---|
| `bg` | `#0c0b0a` | Page ground everywhere. A warm near-black, never pure #000. Also the text colour on solid cyan fills (buttons, the 4C tile, tags). |
| `surface` | `#111111` | Raised panels: form card, stage icons, round buttons, pull quote. |
| `surface-2` | `#171717` | Answer buttons inside the check-up card; second level of raise. |
| `field-bg` | `#0c0c0c` | Inside text inputs, selects and textareas on `surface`. |
| `line` | `rgba(255, 255, 255, 0.08)` | Hairline dividers: section borders, list rows, FAQ rows, table rows. |
| `line-strong` | `rgba(255, 255, 255, 0.14)` | Outlines of cards, fields, chips and tags at rest (inset box-shadow, not border). |
| `fg` | `#f5f5f5` | Headlines and primary text on `bg`, `surface` and `surface-2`. |
| `muted` | `#a3a3a3` | Body copy, ledes and secondary text on `bg` and `surface` (7.8:1 on bg). |
| `dim` | `#808080` | Captions, placeholders, small labels and footer fine print on `bg` and `surface` (5.0:1 on bg, 4.8:1 on surface). Not for paragraphs. |
| `cyan` | `#00d9ff` | THE brand colour: the 4C tile, primary buttons, links, icons, focus rings, progress bars and every glow. Text in cyan reads on `bg` and `surface`; on a cyan fill use `bg` for text. |
| `cyan-hover` | `#33e1ff` | Hover fill of the primary cyan button only. |
| `cyan-ice` | `#b8f6ff` | The bright highlight travelling round the check-up card's spinning border. Nowhere else. |
| `cyan-wash` | `rgba(0, 217, 255, 0.08)` | Tinted fill behind cyan icons and pills (WhatsApp pill, badges, active stage icon, success tick). |
| `cyan-edge` | `rgba(0, 217, 255, 0.28)` | Thin cyan outlines: pills, badges, the 4C House column in the comparison table, pull quote, check-up band rules. |
| `crayon-yellow` | `#ffc94d` | The warm voice: the hero offer line, film captions, 'Book your package' lines and the crayon illustrations. Text in it reads on `bg`. |
| `crayon-coral` | `#ff7a59` | Crayon illustrations and horizon doodles only. Never for UI text or buttons. |
| `chalk` | `#f4efe6` | Crayon-drawing strokes, the hero film frame edge and its paper-like labels. |
| `warm-glow` | `#ffa24d` | The soft orange orb in the background (about 10% opacity) and the warm radial wash at the top of the page. |
| `magenta` | `#ff006e` | Defined in the site's palette but not used on the live page. Reserved; do not introduce it without a reason. |
| `danger` | `#ff6b8b` | Form errors: invalid field outline and error text on `surface` and `bg`. Always paired with a written message. |
| `whatsapp` | `#25d366` | The floating WhatsApp button on phones only (WhatsApp's own green, white icon). Everywhere else WhatsApp links use `cyan`. |
| `rainbow-1` | `#ff4d6d` | Rainbow headline gradient, stop 1 (and the closing stop 8). |
| `rainbow-2` | `#ff9f1c` | Rainbow headline gradient, stop 2. |
| `rainbow-3` | `#ffd60a` | Rainbow headline gradient, stop 3. |
| `rainbow-4` | `#3ddc84` | Rainbow headline gradient, stop 4. |
| `rainbow-5` | `#00d9ff` | Rainbow headline gradient, stop 5: the brand cyan. |
| `rainbow-6` | `#6c63ff` | Rainbow headline gradient, stop 6. |
| `rainbow-7` | `#c86bfa` | Rainbow headline gradient, stop 7. |

### Type styles

Fonts: **Montserrat** (display, weights 600–900) and **Inter** (body, 400–600), both free on Google Fonts. Fallback: system-ui, sans-serif.

| Style | Font | Size | Weight | Line height | Tracking | Use |
|---|---|---|---|---|---|---|
| `hero` | Montserrat | 64px | 900 | 1.06 | -0.02em | The one hero headline per page or piece. Fluid: clamp(2.4rem, 4.6vw, 4rem). |
| `section` | Montserrat | 52px | 800 | 1.08 | -0.02em | Section headlines, written as a full sentence with a full stop. Fluid: clamp(2rem, 4vw, 3.25rem). |
| `stat` | Montserrat | 38.4px | 800 | 1 | 0 | A single result number, in `cyan`, tabular figures. |
| `stage` | Montserrat | 25.6px | 800 | 1.3 | -0.01em | Step names in the method list. |
| `offer` | Montserrat | 20.8px | 700 | 1.4 | 0 | The offer line under the hero, always in `crayon-yellow`. |
| `title` | Montserrat | 20px | 700 | 1.3 | -0.01em | Card and item titles (h3). |
| `quote` | Montserrat | 18.4px | 700 | 1.45 | 0 | Pull quotes and FAQ questions (FAQ at 17.3px). |
| `button` | Montserrat | 14px | 700 | 1 | 0.08em | Button labels, set in UPPERCASE. |
| `nav` | Montserrat | 14px | 500 | 1 | 0.04em | Header navigation links in `muted`, `fg` on hover. |
| `eyebrow` | Montserrat | 12.8px | 600 | 1 | 0.14em | Small UPPERCASE labels above logo rows, table row heads and footer headings, in `dim`. |
| `step-label` | Montserrat | 12.8px | 700 | 1 | 0.1em | UPPERCASE labels for numbered journey steps, in `cyan`. |
| `lede` | Inter | 19.2px | 400 | 1.65 | 0 | Intro paragraph under a section headline, in `muted`, max 60ch. |
| `body` | Inter | 16px | 400 | 1.65 | 0 | All running text, in `muted` (or `fg` for emphasis). |
| `small` | Inter | 14.4px | 400 | 1.65 | 0 | Descriptions under list items and step cards. |
| `fine` | Inter | 13.1px | 400 | 1.5 | 0 | Form fine print and the copyright line, in `dim`. |

### Spacing

| Token | Value | Use |
|---|---|---|
| `space-8` | `8px` | Gap between chips and between a label and its field. |
| `space-12` | `12px` | Gap between icon and text in a brand lockup; gap between answer buttons. |
| `space-14` | `14px` | Gap between hero buttons. |
| `space-20` | `20px` | Gap between gallery cards. |
| `space-24` | `24px` | Page side gutter (`.wrap`), FAQ row padding. |
| `space-28` | `28px` | Button side padding; check-up card padding; gap between journey steps. |
| `space-32` | `32px` | Form card padding. |
| `space-48` | `48px` | Hero column gap; footer column gap. |
| `space-56` | `56px` | Two-column section gap; space before a comparison table. |
| `space-80` | `80px` | Wide two-column gap (method, founder). |
| `section-y` | `108px` | Vertical padding of a section at desktop. Fluid: clamp(64px, 8vw, 108px). |
| `hero-top` | `120px` | Hero top padding, leaving room for the fixed 72px header. |

### Corner radius

| Token | Value | Use |
|---|---|---|
| `radius` | `16px` | Cards, gallery frames, the comparison column, pull quote, stage icons. |
| `radius-film` | `20px` | The hero film frame only. |
| `radius-badge` | `14px` | Icon badges (band icon). |
| `radius-field` | `12px` | Inputs, answer buttons, notes inside cards. |
| `radius-mark` | `10px` | The 38px 4C tile in the header (about 26% of its side; keep that ratio when scaling). |
| `radius-focus` | `6px` | Rounding of the focus outline. |
| `pill` | `999px` | Buttons, chips, tags, the WhatsApp pill, step-number circles. The brand's default shape for anything you click. |

### Glows and shadows

| Token | Value | Use |
|---|---|---|
| `glow-rest` | `0 0 16px rgba(0, 217, 255, 0.3)` | Resting state of the pulsing cyan glow on the main call to action. |
| `glow-peak` | `0 0 32px rgba(0, 217, 255, 0.55), 0 0 64px rgba(0, 217, 255, 0.18)` | Peak of the 2.6s glow pulse. |
| `glow-hover` | `0 0 24px rgba(0, 217, 255, 0.5), 0 0 48px rgba(0, 217, 255, 0.2)` | Primary button on hover (with a 2px lift). |
| `glow-frame` | `0 0 40px rgba(0, 217, 255, 0.18), 0 0 90px rgba(0, 217, 255, 0.08)` | Halo round the check-up card and other hero widgets. |
| `glow-portrait` | `0 0 48px rgba(0, 217, 255, 0.2), 0 0 96px rgba(0, 217, 255, 0.06)` | Halo round the founder portrait and other circular photos. |
| `lift` | `0 30px 80px rgba(0, 0, 0, 0.4)` | Depth under the form card and lightbox. |

### Layout

| Token | Value | Use |
|---|---|---|
| `max-width` | `1200px` | Content width of `.wrap`, centred, with `space-24` gutters. |
| `header-height` | `72px` | Fixed header; turns solid (90% black, 16px blur) once you scroll. |

### CSS variables (copy into any web build)

```css
:root {
  --bg: #0c0b0a;
  --surface: #111111;
  --surface-2: #171717;
  --field-bg: #0c0c0c;
  --line: rgba(255, 255, 255, 0.08);
  --line-strong: rgba(255, 255, 255, 0.14);
  --fg: #f5f5f5;
  --muted: #a3a3a3;
  --dim: #808080;
  --cyan: #00d9ff;
  --cyan-hover: #33e1ff;
  --cyan-ice: #b8f6ff;
  --cyan-wash: rgba(0, 217, 255, 0.08);
  --cyan-edge: rgba(0, 217, 255, 0.28);
  --crayon-yellow: #ffc94d;
  --crayon-coral: #ff7a59;
  --chalk: #f4efe6;
  --warm-glow: #ffa24d;
  --magenta: #ff006e;
  --danger: #ff6b8b;
  --whatsapp: #25d366;
  --rainbow-1: #ff4d6d;
  --rainbow-2: #ff9f1c;
  --rainbow-3: #ffd60a;
  --rainbow-4: #3ddc84;
  --rainbow-5: #00d9ff;
  --rainbow-6: #6c63ff;
  --rainbow-7: #c86bfa;
  --font-display: "Montserrat", system-ui, sans-serif;
  --font-body: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
  --space-8: 8px;
  --space-12: 12px;
  --space-14: 14px;
  --space-20: 20px;
  --space-24: 24px;
  --space-28: 28px;
  --space-32: 32px;
  --space-48: 48px;
  --space-56: 56px;
  --space-80: 80px;
  --section-y: 108px;
  --hero-top: 120px;
  --radius: 16px;
  --radius-film: 20px;
  --radius-badge: 14px;
  --radius-field: 12px;
  --radius-mark: 10px;
  --radius-focus: 6px;
  --pill: 999px;
  --glow-rest: 0 0 16px rgba(0, 217, 255, 0.3);
  --glow-peak: 0 0 32px rgba(0, 217, 255, 0.55), 0 0 64px rgba(0, 217, 255, 0.18);
  --glow-hover: 0 0 24px rgba(0, 217, 255, 0.5), 0 0 48px rgba(0, 217, 255, 0.2);
  --glow-frame: 0 0 40px rgba(0, 217, 255, 0.18), 0 0 90px rgba(0, 217, 255, 0.08);
  --glow-portrait: 0 0 48px rgba(0, 217, 255, 0.2), 0 0 96px rgba(0, 217, 255, 0.06);
  --lift: 0 30px 80px rgba(0, 0, 0, 0.4);
  --max-width: 1200px;
  --header-height: 72px;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  color-scheme: dark;
}
```

Google Fonts link: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600;700;800;900&display=swap`

## Components

Each pattern below exists on 4chouse.com. Reuse them in web pages, proposals and slides.

### BrandLockup

The header and footer logo: the cyan 4C tile beside the full name.

#### What you provide
- A link target (usually the top of the page) and an accessible label such as "4C House of Advertising, back to top".

#### Rules
- Tile 38px, `radius-mark` corners, 12px gap to the name. Scale the three together.
- On `bg` only. For images and print use the PNG files under Logos.

### RainbowHeadline

The hero headline: "AI as a Service." in a slowly moving, glowing rainbow, with "We make AI work for you." beneath in white, and the offer line in crayon yellow.

#### What you provide
- The exact words "AI as a Service." in both the `data-text` attribute and the inner span (the attribute draws the glow).

#### Rules
- Only for "AI as a Service.", once per screen.
- Always on `bg`. The second line stays `fg`; the offer line is `crayon-yellow` in the `offer` style.

### Button

The pill-shaped call to action: solid cyan for the main action, cyan outline for the alternative.

#### When to use
- `btn-cyan` for the one main action in a view ("Book a free diagnostic"). Add `glow` to make it pulse; only one pulsing button per view.
- `btn-outline` for the second choice beside it ("Chat on WhatsApp").
- `btn-sm` (40px tall) in the header only.

#### What you provide
- A short label in sentence case; the style sets it in capitals.
- Optional Phosphor icon: an arrow after the label, or a WhatsApp logo before it.
- An `<a>` for navigation, a `<button>` for forms. Full width (`width: 100%`) inside form cards and on phones.

#### Do and don't
- Do keep labels to the standard set in the voice guide.
- Don't put two solid cyan buttons side by side.
- Don't use any colour but `cyan` for a button.

### ContactPill

A small tinted pill for direct contact links (WhatsApp in the header, email).

#### What you provide
- An icon and a one- or two-word label, or the address itself.

#### Rules
- `cyan-wash` fill with a `cyan-edge` outline, text in `cyan`. Use it beside a button, never instead of the main call to action.

### Chip

A filter toggle, used above the work gallery.

#### What you provide
- A category name and `aria-pressed` true or false. Exactly one chip is pressed.

#### Rules
- At rest: outline in `line-strong`, text `muted`. Pressed: solid `cyan` with `bg` text.

### Tag

A non-interactive label with an icon, for short facts about the business.

#### What you provide
- Two or three words and a matching Phosphor icon.

#### Rules
- Outline only (`line-strong`), text `muted`, icon `cyan`. Never clickable; use a Chip for filters.

### CheckupCard

The interactive 60-second check-up: a dark card inside a spinning cyan border, with a tag, a question, and two answers.

#### What you provide
- A tag ("Free · No sign-up"), title and subtitle, the current question with its count, and Yes and No answers.

#### Rules
- The spinning border and `glow-frame` mark this as the page's hero widget. Use it once per page.
- Answer buttons are `surface-2` with a `line-strong` outline and turn cyan on hover.

### ComparisonTable

A comparison with 4C House as the highlighted last column.

#### What you provide
- Row labels (UPPERCASE eyebrow style), competitor cells in `muted`, and our cells marked `class="us"`.

#### Rules
- Our column gets a `cyan-wash` tint, a `cyan-edge` outline and `fg` text; the header cell is `cyan`. Keep it the last column.
- Under 760px the table stacks into labelled rows.

### StageList

The method list: Diagnose, Prescribe, Implement, Monitor, each with an icon badge and a doctor-style subtitle.

#### What you provide
- Step name, the metaphor line ("The examination"), one short paragraph and a Phosphor icon.

#### Rules
- The step in view gets `active`: cyan icon, `cyan-wash` badge and glow. Others stay `dim`.

### JourneyStep

One numbered step of the five-step lead journey (Get seen, Capture, Respond, Nurture, Measure).

#### What you provide
- The number, a one-word UPPERCASE label, a title, one sentence, and an example outcome for the `eg` line.

#### Rules
- Steps sit in a row joined by a thin cyan line; under 1024px they stack with a fading vertical line.
- The example line is always a concrete result.

### FormField

A labelled input inside the booking form card.

#### What you provide
- A label (mark optional fields with a dimmed "(optional)"), an input with a stable `id`, and an error message when invalid.

#### Rules
- Inputs are `field-bg` with a `line-strong` outline; focus is a 2px `cyan` outline; errors are a 2px `danger` outline plus text that says how to fix it.

### FAQItem

A question that opens to show its answer, separated by hairlines.

#### What you provide
- The question as the owner would ask it, and a short plain answer.

#### Rules
- The cyan plus turns 45° into a cross when open. Questions use the `quote` style; answers `muted` body.

### PullQuote

A short founder quote in a raised panel with a cyan outline.

#### What you provide
- One or two sentences in Kunal's voice, with curly quotes.

#### Rules
- One per page, usually in the founder section.

### WorkCard

A portfolio card: a 4:3 photo of a real build with its name and category.

#### What you provide
- A real photo of our work, a title and a category.

#### Rules
- Only real projects, never stock or AI images. On hover the frame lifts 4px and gains a cyan outline and glow.

## Network background code

The network background used behind everything 4C House makes: cyan nodes joined by dashed lines on a near-black ground, in two depth layers, with pulses that run down the links and speed up as you scroll.

### When to use
- Behind every website, landing page, web app and dashboard we build, fixed to the viewport.
- As the backdrop of decks, social posts, end cards and video (use the still files in Imagery, or render it live and drive the scroll value yourself).

### What you provide
- Nothing but the page. Paste the block below right after `<body>`, and give your own content `position: relative; z-index: 1` so it sits above the background.
- For a video or a one-screen app with no real scrolling, change `getScroll` to return a value you increase over time; the network then glides upward and the pulses speed up with it.

### Rules
- Keep every number as it is: grid 48px at 2.2%, far layer 150px cells at 0.4x speed and 7% lines, near layer 230px cells at 1x and 17% lines, 8/5 dashes, `cyan` only.
- On phones the cells shrink to 110 and 170px automatically.
- It is fixed and decorative: `aria-hidden`, `pointer-events: none`.
- It honours reduced motion: no drift, no pulses, still follows the scroll.
- Never put it behind long paragraphs without a panel; if lines cross small text, set the text on `surface`.

### Drop-in code

```html
<!-- 4C House network background: paste right after <body>. -->
<div class="site-bg" aria-hidden="true">
  <canvas class="net"></canvas>
  <div class="orb orb-cyan"></div>
  <div class="orb orb-cyan orb-2"></div>
  <div class="orb orb-warm"></div>
</div>

<style>
  body { background: radial-gradient(1200px 800px at 15% 0%, rgba(255, 170, 90, 0.07), transparent 60%), #0c0b0a; }
  .site-bg { position: fixed; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
  .site-bg .net { position: absolute; inset: 0; width: 100%; height: 100%; }
  .orb { position: absolute; border-radius: 50%; }
  .orb-cyan { width: 640px; height: 640px; top: -140px; right: -120px; opacity: 0.16; background: radial-gradient(circle, #00d9ff 0%, transparent 70%); animation: float-orb 12s ease-in-out infinite; }
  .orb-2 { top: auto; right: auto; bottom: -220px; left: -180px; width: 560px; height: 560px; opacity: 0.1; animation-duration: 18s; }
  .orb-warm { top: 38%; left: -6%; width: 520px; height: 520px; opacity: 0.1; background: radial-gradient(circle, #ffa24d 0%, transparent 70%); animation: float-orb 16s ease-in-out infinite reverse; }
  @keyframes float-orb { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(30px, -20px) scale(1.05); } 66% { transform: translate(-20px, 10px) scale(0.95); } }
  /* Put your page content above it: */
  main, header, footer { position: relative; z-index: 1; }
  @media (prefers-reduced-motion: reduce) { .orb { animation: none; } }
</style>

<script>
// Endless field of nodes and dashed links. The near layer moves with the page,
// the far layer at 0.4x for depth; pulses travel down the links and speed up while scrolling.
(function () {
  const canvas = document.querySelector(".site-bg .net");
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  const CYAN = "0, 217, 255";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // To animate without real scrolling (a video, a slide, a one-screen app), replace this with your own value.
  const getScroll = () => window.scrollY;
  let w = 0, h = 0, dpr = 1, flow = 0, lastY = getScroll(), lastT = performance.now(), running = false;
  function rand(x, y, k) {
    let n = (x * 374761393 + y * 668265263 + k * 2147483647) | 0;
    n = (n ^ (n >>> 13)) * 1274126177 | 0;
    return ((n ^ (n >>> 16)) >>> 0) / 4294967295;
  }
  const layers = [
    { cell: 150, speed: 0.4, line: 0.07, node: 0.10, width: 0.5, pulses: false, salt: 11 },
    { cell: 230, speed: 1.0, line: 0.17, node: 0.22, width: 0.8, pulses: true, salt: 3 }
  ];
  function node(L, c, r) {
    if (rand(c, r, L.salt) < 0.22) return null;
    return { x: (c + 0.15 + 0.7 * rand(c, r, L.salt + 1)) * L.cell, y: (r + 0.15 + 0.7 * rand(c, r, L.salt + 2)) * L.cell };
  }
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    const small = w < 760;
    layers[0].cell = small ? 110 : 150;
    layers[1].cell = small ? 170 : 230;
    draw();
  }
  function drawLayer(L, scrollY) {
    const off = scrollY * L.speed;
    const r0 = Math.floor((off - L.cell) / L.cell), r1 = Math.ceil((off + h + L.cell) / L.cell);
    const c0 = -1, c1 = Math.ceil(w / L.cell) + 1;
    ctx.setLineDash([8, 5]);
    ctx.lineDashOffset = -flow * (L.pulses ? 1 : 0.4);
    ctx.lineWidth = L.width;
    ctx.strokeStyle = "rgba(" + CYAN + "," + L.line + ")";
    const pulses = [];
    ctx.beginPath();
    for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) {
      const a = node(L, c, r); if (!a) continue;
      const links = [[c + 1, r, 0.35], [c, r + 1, 0.45], [c + 1, r + 1, 0.78], [c - 1, r + 1, 0.85]];
      for (const [cc, rr, p] of links) {
        if (rand(c * 7 + cc, r * 7 + rr, L.salt + 5) < p) continue;
        const b = node(L, cc, rr); if (!b) continue;
        ctx.moveTo(a.x, a.y - off); ctx.lineTo(b.x, b.y - off);
        if (L.pulses && rand(c + cc * 3, r + rr * 5, 41) > 0.6) pulses.push([a, b, rand(c, r, 77 + cc)]);
      }
    }
    ctx.stroke();
    ctx.setLineDash([]);
    for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) {
      const a = node(L, c, r); if (!a) continue;
      const y = a.y - off;
      ctx.fillStyle = "rgba(" + CYAN + "," + (L.node * 0.35) + ")";
      ctx.beginPath(); ctx.arc(a.x, y, L.pulses ? 7 : 4, 0, 6.283); ctx.fill();
      ctx.fillStyle = "rgba(" + CYAN + "," + L.node * 2.2 + ")";
      ctx.beginPath(); ctx.arc(a.x, y, L.pulses ? 2.6 : 1.6, 0, 6.283); ctx.fill();
    }
    for (const [a, b, ph] of pulses) {
      const [top, bot] = a.y <= b.y ? [a, b] : [b, a];
      const t = ((flow / 140) + ph) % 1;
      const x = top.x + (bot.x - top.x) * t, y = top.y + (bot.y - top.y) * t - off;
      const fade = Math.sin(Math.PI * t);
      ctx.fillStyle = "rgba(" + CYAN + "," + (0.12 * fade) + ")";
      ctx.beginPath(); ctx.arc(x, y, 7, 0, 6.283); ctx.fill();
      ctx.fillStyle = "rgba(" + CYAN + "," + (0.85 * fade) + ")";
      ctx.beginPath(); ctx.arc(x, y, 2.2, 0, 6.283); ctx.fill();
    }
  }
  function draw() {
    const y = getScroll();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(" + CYAN + ",0.022)"; ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0.5; x < w; x += 48) { ctx.moveTo(x, 0); ctx.lineTo(x, h); }
    for (let gy = (48 - (y % 48)) % 48 + 0.5; gy < h; gy += 48) { ctx.moveTo(0, gy); ctx.lineTo(w, gy); }
    ctx.stroke();
    for (const L of layers) drawLayer(L, y);
  }
  function frame(now) {
    const dt = Math.min(64, now - lastT) / 1000; lastT = now;
    const y = getScroll(), dy = Math.abs(y - lastY); lastY = y;
    flow += dt * 26 + Math.min(dy, 120) * 0.6;
    draw();
    if (running) requestAnimationFrame(frame);
  }
  window.addEventListener("resize", resize);
  resize();
  if (reduceMotion) {
    let queued = false;
    window.addEventListener("scroll", () => { if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; draw(); }); } }, { passive: true });
  } else {
    running = true; requestAnimationFrame(frame);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) running = false;
      else if (!running) { running = true; lastT = performance.now(); requestAnimationFrame(frame); }
    });
  }
})();
</script>
```

## Component CSS

The exact styles for the components above, as used on the site. They rely on the CSS variables above.

```css
/* 4C House of Advertising: component styles, lifted from 4chouse.com. Colours, fonts, radii and shadows come from tokens.css. */
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--fg); font: 400 1rem/1.65 var(--font-body); -webkit-font-smoothing: antialiased; }
:focus-visible { outline: 2px solid var(--cyan); outline-offset: 3px; border-radius: var(--radius-focus); }
p { margin: 0; }
.icon { width: 1.25em; height: 1.25em; flex-shrink: 0; fill: currentColor; }
.demo { padding: 24px; display: flex; flex-wrap: wrap; gap: 14px; align-items: center; }
.demo-col { padding: 24px; display: grid; gap: 18px; }

/* Button */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 48px; padding: 0 var(--space-28); border-radius: var(--pill); cursor: pointer; font: 700 0.875rem/1 var(--font-display); letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; white-space: nowrap; border: 0; transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s cubic-bezier(0.16, 1, 0.3, 1); }
.btn:active { transform: translateY(1px) scale(0.98); }
.btn-cyan { background: var(--cyan); color: var(--bg); }
.btn-cyan:hover { background: var(--cyan-hover); transform: translateY(-2px); box-shadow: var(--glow-hover); }
.btn-outline { background: transparent; color: var(--cyan); box-shadow: inset 0 0 0 1.5px var(--cyan); }
.btn-outline:hover { background: var(--cyan-wash); transform: translateY(-2px); box-shadow: inset 0 0 0 1.5px var(--cyan), 0 0 20px rgba(0, 217, 255, 0.2); }
.btn-sm { min-height: 40px; padding: 0 20px; font-size: 0.78rem; }
.btn .icon { width: 18px; height: 18px; }
.glow { animation: glow-pulse 2.6s ease-in-out infinite; }
@keyframes glow-pulse { 0%, 100% { box-shadow: var(--glow-rest); } 50% { box-shadow: var(--glow-peak); } }

/* Brand lockup */
.brand { display: inline-flex; align-items: center; gap: 12px; text-decoration: none; color: var(--fg); }
.brand-mark { width: 38px; height: 38px; border-radius: var(--radius-mark); background: var(--cyan); color: var(--bg); display: grid; place-items: center; font: 900 0.9rem/1 var(--font-display); }
.brand-name { font: 700 1rem/1.15 var(--font-display); letter-spacing: -0.01em; white-space: nowrap; }

/* Rainbow headline */
.hero-h { font: 900 clamp(2.4rem, 4.6vw, 4rem)/1.06 var(--font-display); letter-spacing: -0.02em; margin: 0; text-wrap: balance; }
.rainbow { position: relative; display: inline-block; }
.rainbow > span, .rainbow::before { background: linear-gradient(90deg, var(--rainbow-1), var(--rainbow-2), var(--rainbow-3), var(--rainbow-4), var(--rainbow-5), var(--rainbow-6), var(--rainbow-7), var(--rainbow-1)) 0 50% / 300% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: rainbow-shift 8s linear infinite; }
.rainbow > span { position: relative; }
.rainbow::before { content: attr(data-text); position: absolute; inset: 0; filter: blur(16px); opacity: 0.8; pointer-events: none; }
@keyframes rainbow-shift { to { background-position: 300% 50%; } }
.h1-sub { display: block; margin-top: 0.12em; }
.offer { margin-top: 22px; font: 700 clamp(1.1rem, 1.6vw, 1.3rem)/1.4 var(--font-display); color: var(--crayon-yellow); max-width: 34ch; }

/* Contact pill, chip, tag */
.wa-pill { display: inline-flex; align-items: center; gap: 8px; min-height: 40px; padding: 0 16px; border-radius: var(--pill); background: var(--cyan-wash); color: var(--cyan); box-shadow: inset 0 0 0 1px var(--cyan-edge); font: 600 0.85rem/1 var(--font-display); letter-spacing: 0.04em; text-decoration: none; transition: background-color 0.2s; }
.wa-pill:hover { background: rgba(0, 217, 255, 0.16); }
.chip { min-height: 44px; padding: 0 18px; border-radius: var(--pill); border: 0; cursor: pointer; background: transparent; color: var(--muted); box-shadow: inset 0 0 0 1px var(--line-strong); font: 600 0.85rem/1 var(--font-display); transition: all 0.2s; }
.chip:hover { color: var(--fg); }
.chip[aria-pressed="true"] { background: var(--cyan); color: var(--bg); box-shadow: none; }
.tags { display: flex; flex-wrap: wrap; gap: 10px; }
.tags span { display: inline-flex; align-items: center; gap: 8px; min-height: 38px; padding: 0 16px; border-radius: var(--pill); color: var(--muted); font-size: 0.9rem; box-shadow: inset 0 0 0 1px var(--line-strong); }
.tags .icon { color: var(--cyan); width: 16px; height: 16px; }

/* Check-up card */
@property --spin { syntax: "<angle>"; inherits: false; initial-value: 0deg; }
.checkup-frame { position: relative; padding: 1.5px; border-radius: calc(var(--radius) + 1.5px); background: conic-gradient(from var(--spin), rgba(0, 217, 255, 0.15) 0deg, rgba(0, 217, 255, 0.15) 200deg, var(--cyan) 280deg, var(--cyan-ice) 300deg, var(--cyan) 320deg, rgba(0, 217, 255, 0.15) 360deg); box-shadow: var(--glow-frame); animation: spin-border 4.5s linear infinite; }
@keyframes spin-border { to { --spin: 360deg; } }
.checkup { position: relative; background: rgba(14, 14, 14, 0.96); border-radius: var(--radius); padding: var(--space-28); }
.checkup-tag { position: absolute; z-index: 3; top: -13px; left: 24px; padding: 6px 12px; border-radius: var(--pill); background: var(--cyan); color: var(--bg); font: 800 0.72rem/1 var(--font-display); letter-spacing: 0.08em; text-transform: uppercase; box-shadow: 0 0 18px rgba(0, 217, 255, 0.45); }
.checkup-head { display: flex; align-items: center; gap: 12px; }
.badge { width: 40px; height: 40px; border-radius: 12px; display: grid; place-items: center; background: var(--cyan-wash); color: var(--cyan); box-shadow: inset 0 0 0 1px var(--cyan-edge); }
.checkup-title { font: 700 1.15rem/1.3 var(--font-display); letter-spacing: -0.01em; }
.checkup-sub { color: var(--dim); font-size: 0.85rem; }
.progress { height: 2px; margin: 22px 0 26px; position: relative; }
.progress i { position: absolute; left: 0; top: 0; height: 2px; width: 16%; background: var(--cyan); box-shadow: 0 0 12px var(--cyan); }
.q-count { font: 600 0.8rem/1 var(--font-display); color: var(--cyan); letter-spacing: 0.06em; font-variant-numeric: tabular-nums; }
.q-text { font: 700 1.3rem/1.35 var(--font-display); letter-spacing: -0.01em; margin-top: 12px; }
.answers { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 22px; }
.answer { min-height: 52px; border-radius: var(--radius-field); border: 0; cursor: pointer; background: var(--surface-2); color: var(--fg); box-shadow: inset 0 0 0 1px var(--line-strong); font: 600 1rem/1 var(--font-display); transition: box-shadow 0.2s, background-color 0.2s, transform 0.15s; }
.answer:hover { box-shadow: inset 0 0 0 1px var(--cyan); background: var(--cyan-wash); }

/* Comparison table */
.compare { width: 100%; border-collapse: separate; border-spacing: 0; }
.compare th, .compare td { text-align: left; vertical-align: top; padding: 18px 20px; border-bottom: 1px solid var(--line); }
.compare thead th { font: 700 0.95rem/1.3 var(--font-display); color: var(--muted); border-bottom-color: var(--line-strong); }
.compare tbody th { font: 600 0.8rem/1.4 var(--font-display); color: var(--dim); letter-spacing: 0.08em; text-transform: uppercase; width: 22%; }
.compare td { color: var(--muted); }
.compare .us { background: rgba(0, 217, 255, 0.045); color: var(--fg); box-shadow: inset 1px 0 0 var(--cyan-edge), inset -1px 0 0 var(--cyan-edge); }
.compare thead .us { color: var(--cyan); border-radius: var(--radius) var(--radius) 0 0; box-shadow: inset 1px 0 0 var(--cyan-edge), inset -1px 0 0 var(--cyan-edge), inset 0 1px 0 var(--cyan-edge); font-size: 1.05rem; }
.compare tbody tr:last-child .us { border-radius: 0 0 var(--radius) var(--radius); box-shadow: inset 1px 0 0 var(--cyan-edge), inset -1px 0 0 var(--cyan-edge), inset 0 -1px 0 var(--cyan-edge); }
.compare tbody tr:last-child th, .compare tbody tr:last-child td { border-bottom: 0; }

/* Method stage */
.stages { list-style: none; margin: 0; padding: 0; }
.stage { display: grid; grid-template-columns: 56px 1fr; gap: 22px; padding: 26px 0; border-top: 1px solid var(--line); }
.stage:first-child { border-top: 0; padding-top: 0; }
.stage-icon { width: 56px; height: 56px; border-radius: var(--radius); display: grid; place-items: center; background: var(--surface); color: var(--dim); box-shadow: inset 0 0 0 1px var(--line-strong); }
.stage-icon .icon { width: 26px; height: 26px; }
.stage.active .stage-icon { color: var(--cyan); background: var(--cyan-wash); box-shadow: inset 0 0 0 1px var(--cyan-edge), 0 0 28px rgba(0, 217, 255, 0.25); }
.stage h3 { margin: 0; font: 800 1.6rem/1.3 var(--font-display); letter-spacing: -0.01em; }
.stage .like { color: var(--cyan); font-size: 0.9rem; font-weight: 500; margin-top: 4px; }
.stage p.body { color: var(--muted); margin-top: 10px; max-width: 52ch; }

/* Journey step */
.stop-num { width: 48px; height: 48px; border-radius: 50%; display: grid; place-items: center; background: var(--bg); color: var(--cyan); box-shadow: inset 0 0 0 1.5px var(--cyan), 0 0 24px rgba(0, 217, 255, 0.25); font: 800 1rem/1 var(--font-display); }
.stop-label { display: block; margin-top: 20px; color: var(--cyan); font: 700 0.8rem/1 var(--font-display); letter-spacing: 0.1em; text-transform: uppercase; }
.stop h3 { margin: 10px 0 0; font: 700 1.25rem/1.3 var(--font-display); letter-spacing: -0.01em; }
.stop p { color: var(--muted); font-size: 0.95rem; margin-top: 10px; }
.stop .eg { color: var(--fg); font-size: 0.9rem; margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--line); }

/* Form field */
.form-card { background: var(--surface); border-radius: var(--radius); padding: var(--space-32); box-shadow: inset 0 0 0 1px var(--line-strong), var(--lift); }
.field { display: grid; gap: 8px; margin-bottom: 18px; }
.field label { font: 600 0.85rem/1.2 var(--font-display); }
.field .opt { color: var(--dim); font-weight: 500; }
.field input { width: 100%; min-height: 48px; padding: 12px 14px; border-radius: var(--radius-field); border: 0; outline: 0; background: var(--field-bg); color: var(--fg); font: 400 1rem/1.4 var(--font-body); box-shadow: inset 0 0 0 1px var(--line-strong); transition: box-shadow 0.2s; }
.field input::placeholder { color: var(--dim); }
.field input:focus-visible { box-shadow: inset 0 0 0 2px var(--cyan); }
.field[data-invalid="true"] input { box-shadow: inset 0 0 0 2px var(--danger); }
.err { color: var(--danger); font-size: 0.85rem; }

/* FAQ */
details { border-bottom: 1px solid var(--line); }
summary { list-style: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 24px; padding: 22px 0; font: 700 1.08rem/1.4 var(--font-display); }
summary::-webkit-details-marker { display: none; }
summary .icon { color: var(--cyan); transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
details[open] summary .icon { transform: rotate(45deg); }
details p { color: var(--muted); padding: 0 48px 22px 0; max-width: 68ch; }

/* Pull quote */
.pullquote { margin: 0; padding: 24px 28px; border-radius: var(--radius); background: var(--surface); box-shadow: inset 0 0 0 1px var(--cyan-edge); font: 700 1.15rem/1.45 var(--font-display); }

/* Work card */
.shot { margin: 0; width: 100%; max-width: 360px; }
.frame { aspect-ratio: 4 / 3; border-radius: var(--radius); overflow: hidden; background: radial-gradient(120% 90% at 20% 0%, #1d1d1d, #0f0f0f); box-shadow: inset 0 0 0 1px var(--line-strong); transition: box-shadow 0.3s, transform 0.3s; }
.shot:hover .frame { box-shadow: inset 0 0 0 1px var(--cyan), 0 0 32px rgba(0, 217, 255, 0.14), 0 12px 32px rgba(0, 0, 0, 0.45); transform: translateY(-4px); }
.frame img { display: block; width: 100%; height: 100%; object-fit: cover; }
.shot figcaption { margin-top: 14px; }
.shot figcaption b { display: block; font: 700 1rem/1.3 var(--font-display); }
.shot figcaption span { color: var(--dim); font-size: 0.88rem; }

@media (prefers-reduced-motion: reduce) {
  .rainbow > span, .rainbow::before, .glow, .checkup-frame { animation: none; }
}
```

## Brand kit files

Supplied alongside this file in the kit folder:

- `logos/4c-mark.png`: the cyan 4C tile, transparent, 512px.
- `logos/4c-lockup.png`: tile + "4C House of Advertising", horizontal, on dark.
- `logos/4c-stack.png`: stacked version with glow, square formats.
- `logos/4c-neon.png`: neon wordmark, video and social end cards only.
- `logos/4c-favicon.svg`: the source mark from the site.
- `backgrounds/network-bg-16x9.png`, `network-bg-9x16.png`, `network-bg-4x5.png`: still frames of the network background for slides, reels and posts.
- `fonts/`: Montserrat and Inter (open-source, SIL Open Font Licence).
- `icons/`: the website's 30 Phosphor icons in cyan SVG (MIT licence).

