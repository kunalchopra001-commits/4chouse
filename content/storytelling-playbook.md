# Storytelling playbook for AI short films and story reels (draft 1, 22 Nov 2026)

**Why this exists:** Kunal rejected the first cut of Biji (22 Nov). Every shot read as AI slop. This playbook covers how story-led pieces are planned, shot, cut and mixed from now on. It sits alongside the No-Slop Standard (`no-slop-standard.md`). Kunal is adding his own resources, which get folded in as draft 2.

Sources are listed at the end. Most are tool-vendor blogs, so their tips are **things to test, not facts**. The comedy-editing points come from working editors and are the most reliable.

## 1. What went wrong with Biji v1 (so we don't repeat it)
| Problem | What we did | What good work does |
|---|---|---|
| Takes | 1 take per shot, used as it came | 2–3 takes per shot. Choose like reviewing dailies, and keep only the best moment of each |
| Coverage | One medium-wide shot per beat | Each gag gets a wide (set-up), a close-up (the face) and a reaction. The comedy lives in faces |
| Pacing | 4–5 s clips at generator speed, like a slideshow | Cut to the joke: set-up, a held pause, the payoff, then room after the payoff |
| Runtime | 10 beats squeezed into 43 s | Fewer beats done properly. 60–90 s is fine for one clear story |
| Look | Clean, glossy faces, even light, 480p | Photographic references with real skin, grain, harsh light, imperfection |
| Sound | Music plus a few lines, no ambience, made-up SFX | Ambience bed first, then foley for every action, then dialogue, with music last and ducked |
| Approval | Storyboard stills, then straight to final video | A timed animatic (stills plus temp sound) approved **before** any video credits |
| Voices | Sent without anyone listening | A native Punjabi speaker (Kunal) signs off every line before the edit |

## 2. The pipeline (in this order)
1. **One-line premise and ending.** Know the payoff first; every beat sets it up.
2. **Beat sheet with the fewest beats that tell it.** Cut any beat that doesn't raise the stakes or set up the payoff.
3. **Visual bible.** Character sheets (one per outfit), locations, light per time of day, lens and grade. References beat extra prompt text for consistency.
4. **Shot list per beat, with coverage:** establishing or wide, action, close-up on the face, reaction, and an insert (hands, object). For each shot, note size, lens, camera move and intended screen time.
5. **Keyframe stills for every shot** (cheap). Use photographic style with imperfections and real light.
6. **Animatic:** the stills cut to time with temp music, temp voices and temp SFX. **Kunal approves the animatic.** This is where pacing gets fixed, at no video cost.
7. **Video generation:** short clips (3–8 s), 2–3 takes for each important shot, start and end frames where an action has to land. Generate only at the resolution we'll ship (720p minimum for anything we'd call a showreel).
8. **Selects:** review every take, note the best moments, reject anything with morphing, posed looks at the camera, glossy skin or logos.
9. **Edit:** picture lock against the animatic timing, then sound, then grade.
10. **Finish:** upscale → light soften → film grain → grade, in that order. No sharpening.
11. **No-Slop check** (all 10 points), then Kunal's approval.

## 3. Pacing rules for comedy and story reels
- **Pause only where the joke needs it.** Otherwise keep moving. *(Jeff Schaffer, Curb Your Enthusiasm)*
- **The pause before the payoff is the main lever.** Cut it too short and it isn't funny. A slow push-in can stretch the beat. *(editor Matt Friedman)*
- **Leave room after the punchline.** If the next beat starts too fast, the audience misses it.
- **Cut on the reaction.** The other characters' faces sell the absurd act. Reaction shots punctuate the joke.
- **Tension and release:** each gag is a small cycle. Build, release, then reset to calm before the next one.
- **Hook in the first 1–2 s,** before any title card. A title card shouldn't freeze the hook.
- **Vary shot length.** Quick 1–2 s cuts for reactions and inserts. Hold the payoff shot longer.

## 4. Look: avoiding the "AI sheen"
- **Start from photographic stills,** not illustration-like ones. A glossy reference can't be prompted out later.
- **Name imperfections in prompts:** visible pores, fine wrinkles, sun-damaged skin, unretouched, stubble, dust in the air, worn fabric, chipped paint.
- **Camera cues:** handheld, natural available light, slight motion blur, shallow depth of field, lens grain, a real lens (e.g. 35mm or 85mm).
- **Use harsh, motivated light** (a single sun source, a bare bulb) rather than even studio light.
- **Post order:** upscale → light soften → film grain → grade. Grain is the biggest single step. Never sharpen.
- **Model choice per shot:** reports differ. Seedance is said to hold characters across continuous takes, Kling to do multi-shot sequences natively, and Veo to keep skin texture in tight close-ups. **Test the same close-up on each before a big spend.**

## 5. Sound: what makes it feel real
- **Build order:** ambience bed (place) → foley (every visible action) → dialogue → music last.
- **Mix priority:** dialogue > foley > ambience > music.
- **One continuous ambience bed per location** runs under the cuts and hides that the clips were generated separately.
- **Foley needs** (Biji): birds, rooster, tractor engine, dust, footsteps on dirt, hay rustle, ladle, chai pour, cycle chain, thali and okra, crickets, controller clicks. Use proper SFX (ElevenLabs sound effects or a licensed library), not tones I made up.
- **Music** supports the story beats and ducks under dialogue.

## 6. Budget reality
Good work costs more per piece, so we make fewer pieces and make them properly. Example for a 60–75 s story at 720p, about 18 shots:

| Item | Credits |
|---|---|
| ~18 shots × 2 takes × 35 credits | ~1,260 |
| Stills and animatic | ~20 |
| Sound | ElevenLabs credits only |

**Cheaper route:** generate takes at 480p, choose the selects, then re-make **only the selects** at 720p. That's roughly 18 × 2 × 15 + 18 × 35 = **~1,170**, with a much better hit rate.

Every spend gets Kunal's approval first.

## 7. References to study
**Watch:** the Runway AI Film Festival 2026 winners (aif.runwayml.com):
- Grand Prix: *A Face Only A Mother Could Love* (Robert Gaudette)
- Gold: *THE WELL*
- Silver: *Where Knights Fall*

Critics singled them out for narrative cohesion and for using AI to serve emotion. Note what they do with faces, pacing and sound.

**Kunal's links:** to be added here.

## 8. Biji v2: proposed approach (not started)
- **Story:** three gags plus the reveal, about 60–75 s. Keep the strongest:
  - tractor donuts
  - haystack dive
  - chai overflow or thali drop
- **Coverage:** each gag gets a wide, Biji's deadpan close-up and a family reaction close-up.
- **Animatic first** (stills plus temp sound) for Kunal's approval, at no video cost.
- **Voices:** Kunal approves every voice line by ear before the edit.
- **Look:** Chamkila-style grit (grain, sun, dust, real skin), built into the stills.

## Sources
- AI film workflow (vendor guides; test before relying on them): [Lamina](https://uselamina.ai/blog/how-to-make-an-ai-animated-short-film-in-2026), [Envato](https://elements.envato.com/learn/how-to-create-a-short-film-using-ai), [nixm](https://nixm.ai/learn/how-to-make-a-short-film-with-ai), [Lotix](https://lotix.io/blog/how-to/how-to-make-an-ai-short-film/), [Higgsfield pipeline](https://higgsfield.ai/blog/ai-short-film-pipeline), [Astorie](https://astorie.ai/workflows/multi-shot-short-film), [Versely](https://www.versely.studio/blog/how-to-make-an-ai-short-film)
- Comedy editing: [CineMontage (Roger Nygard)](https://cinemontage.org/?p=58217), [No Film School, Palm Springs](https://nofilmschool.com/how-editing-made-Palm-Springs-most-popular-hulu), [PremiumBeat](https://www.premiumbeat.com/blog/directing-editing-comedy-short/), [Descript](https://www.descript.com/blog/article/learn-how-to-edit-a-comedy-clip-and-make-your-jokes-land), [MasterClass](https://masterclass.com/articles/guide-to-comedic-timing), [Fiveable](https://fiveable.me/directing/unit-9/comedy-direction-timing-pacing-visual-gags/study-guide/A8eV02diI4fgIt9g)
- Realism and skin (vendor guides): [invideo](https://invideo.io/faq/how-do-you-fix-plasticky-or-waxy-looking-skin-in-ai/), [Rezience on Seedance](https://andyhtu.com/seedance-2-plastic-skin-how-to-fix-it/), [videoai Kling prompts](https://videoai.me/blog/kling-ai-realistic-prompts)
- Story reels and consistency: [DEV, 90 s film](https://dev.to/who_ai/how-i-made-a-90-second-ai-short-film-with-one-consistent-character-and-fixed-its-glitches-with-58fh), [DEV, 8 s comedy](https://dev.to/ref_vid/how-we-made-an-8-second-ai-comedy-short-with-two-consistent-characters-start-to-finish-5fc5), [Creative Possible](https://creativepossible.substack.com/p/ai-filmmaking-2-easy-methods-for)
- Sound: [invideo](https://invideo.io/faq/does-sound-design-make-ai-generated-footage-feel-more/), [HackerNoon](https://hackernoon.com/ai-video-comes-out-silent-here-is-the-sound-design-workflow-i-run-on-every-shot), [Lightworks](https://lwks.com/blog/sound-effects-101-ambient-vs.-foley), [Descript](https://www.descript.com/blog/article/what-is-sound-design-the-essential-elements-of-sound-design)
- Festival: [Runway AIF 2026](https://aif.runwayml.com/), [Fast Company](https://www.fastcompany.com/91565229/runway-ai-film-festival), [Rolling Stone](https://www.rollingstone.com/culture-council/articles/why-best-ai-films-dont-feel-artificial-at-all-1235407766/)
