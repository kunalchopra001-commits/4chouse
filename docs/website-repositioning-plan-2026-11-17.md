# Website repositioning plan, 17 Nov 2026 (approved and built)

## The one objective
Sell 4C House as **your own content creation department**. We make all the creative you need and post it for you.
- **We sell:** cost saving, and a steady volume of scroll-stopping creative.
- **We don't promise:** followers, leads, sales or ad results.
- **Also in the packages:** website upgrade, solid SEO setup, explainer and training videos, brand development.
- **AI automation** (WhatsApp assistant, follow-ups, dashboards) becomes the *next step* once a client trusts us, not the opening offer.

## Why the current page is unclear
- The hero says "AI as a Service. We make AI work for you." That describes a technology, not what the visitor gets.
- The page sells three different things at once: marketing, lead generation and automation.
- The check-up quiz and the doctor/mechanic film are about diagnosing automation gaps, not content.
- The packages promise ads on up to 4 channels and "steady leads", which are performance promises we now want to avoid.
- No creative work is shown near the top, so a visitor has to trust us before seeing any proof.

## New page, top to bottom

1. **Hero**
   - **Headline (draft):** "Your content department, without the payroll."
   - **Sub:** "We create and post scroll-stopping content for your business every week: reels, posts, carousels, Stories and videos. Made with AI, checked by people, and costing far less than a team."
   - **Buttons:** Book a free content call · Chat on WhatsApp · See our work.
   - "AI as a Service" moves to a small line under the logo or the footer. It stays the long-term brand line.

2. **Showreel strip.** 6–8 of our best pieces auto-playing: burger, coffee, skydive, jewellery, sneaker, perfume and others. Labelled "Made with AI by 4C House. Fictional brands." This is the proof.

3. **What your department does.** Four cards:
   - **Content:** posts, reels, carousels and Stories, written, designed and posted on Instagram, TikTok, Facebook and LinkedIn.
   - **Video:** product reels, explainer videos, and training videos for your staff.
   - **Brand:** brand development, logo refresh, colours, tone of voice and a simple brand book.
   - **Website and SEO:** a website upgrade, a solid SEO setup, and your Google Business Profile.

4. **Why it costs less.** Three columns: in-house team / traditional agency / 4C House.
   - We describe the difference in words, not salary numbers we can't source: no salaries, no shoots or studios, no models or location fees.
   - Content made with AI and finished by a designer with 24 years of brand work.

5. **How it works** (this is our own pipeline):
   1. Brand session.
   2. We plan your month.
   3. You approve everything in one shared folder and delete what you don't like.
   4. We post on schedule.
   5. A monthly report on what went out and what people engaged with.

6. **What we promise, and what we don't** (honest box):
   - We promise volume and quality, on time, every month.
   - We don't promise followers, leads or sales, because nobody honest can.

7. **Packages:** Liftoff / Orbit / Warp Speed, rescoped to content, with the Founding 25 offer kept. See the decisions below.

8. **"When you're ready: the rest of your business."** A small section: once your content runs itself, we can automate WhatsApp replies, follow-ups and reports. "Ask us when you're ready."

9. **Work and About.** Kept and reframed: "A designer first. 24 years of building for brands, now with AI."

10. **Book form and FAQ.**
    - The form's package select stays.
    - The FAQ is rewritten for content: who owns the content, how approval works, AI labelling, what if I don't like a post.

**Removed:** the check-up quiz, the doctor/mechanic film, and "Not another agency. Not another consultancy." That section is replaced by section 4.

## Packages, draft rescope (prices unchanged)

| | Liftoff | Orbit | Warp Speed |
|---|---|---|---|
| Founding / standard per month | AED 900 / 1,800 | AED 1,400 / 2,800 | AED 3,000 / 6,000 |
| Posts a month (designed and posted) | 12 | 20 | 40 |
| of which reels / short videos | 2 | 6 | 12 |
| Stories | 3 a week | daily | daily |
| Platforms | 2 | 3 | all |
| Explainer or training video | – | 1 a quarter | 1 a month |
| Brand development | brand check | brand refresh | full brand development |
| Website and SEO | Google Business Profile plus SEO basics | website upgrade plus SEO setup | website upgrade, full SEO and monthly upkeep |
| Monthly report and WhatsApp contact | yes | yes | yes, plus a monthly strategy call |

**Ads:** creatives for ads are included, but no ad management and no performance promises (see the decisions below).

## Decisions needed from Kunal
1. The headline.
2. What happens to ad management.
3. The package numbers above.
4. Whether brand development and a full website upgrade sit inside the monthly price or are one-off setup projects.

## Kunal's decisions (17 Nov) and what was built
1. **Headline:** "Your content engine." The sub-headline reads: "Scroll-stopping creative, every week. No new hires. No agency retainer."
2. **Ads:** we make the creative and send weekly updates. There is no ad management and no performance promises.
3. **Perks:** brand development, a website upgrade and SEO, explainer and training videos, and email campaigns (to customers who have opted in only) come at the same price when the client needs them. They are listed as perks, not tier features.
4. **Package numbers:** the draft numbers are used.
   - Liftoff: 12 posts (2 reels), Stories 3 times a week, 2 platforms.
   - Orbit: 20 posts (6 reels), daily Stories, 3 platforms, ad creatives.
   - Warp Speed: 40 posts (12 reels), daily Stories, all platforms, ad variations, a monthly strategy call.
   - Prices are unchanged. Weekly updates are in every tier.

**Built on 17 Nov in `index.html`:**
- The hero now has 3 live reel tiles.
- A new Showreel section has 5 more tiles. All the loops are in `assets/reel/`, about 1.7 MB in total, and play only while on screen.
- The comparison table now sets an in-house team against an agency and 4C House, with a promise / don't-promise box.
- How it works now has 4 steps: brand session, monthly plan, you approve, we post and report.
- What we make covers 5 formats, plus 6 perks.
- The packages are rescoped.
- The automation offer is now a "Later" band below the packages.
- The work, about, booking form and FAQ text were rewritten, along with the meta tags and JSON-LD.
- The check-up quiz and the crayon film were removed, and `assets/js` was deleted because nothing uses it any more.

**Still to do:**
- `assets/og-image.jpg` still says "AI as a Service" (the link preview image). Make a new one for "Your content engine".
- After deploy, re-run PageSpeed and request indexing again.
