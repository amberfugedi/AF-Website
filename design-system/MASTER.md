# Amber Fugedi — Design System (Master / Source of Truth)

Follows the ui-ux-pro-max "Master + Overrides" pattern: when building any
page, read this file first; if `design-system/pages/<page>.md` exists, its
rules override this Master. This file documents the system as ACTUALLY
implemented in `styles.css` — if the two ever disagree, `styles.css` wins
and this file should be updated.

## Brand direction

Soft pastel aura: warm cream base, slowly orbiting pastel color clouds
(blush / peach / lavender), coral accent, rounded and friendly. Confident
but warm — playful-creative, never corporate, never dark. Copy is sharp
and human; no generic marketing filler. ONE sanctioned dark moment
(2026-07): the closing CTA band is warm-dark ink (--ink as the
background, faint aura glows in the corners, cream type, coral button
with #17140F text at 6.7:1, butter tab on "comes next."). A scene
change to end the page, not a theme change — do not add other dark
surfaces.

Positioning (updated 2026-07 per Amber's second brief): Amber helps
businesses figure out what marketing they actually need, then helps
build it. Serve every starting point: blank-page businesses, teams
with active-but-unclear marketing, people who want training, and
teams deciding where AI fits. AI is ONE capability ("Workflow & AI
Guidance" — renamed from "AI & Workflow Guidance" 2026-07 so
workflow leads and AI reads as one option within the work;
"Strategy"/"advisory" naming retired earlier), courses
are one way she shares expertise, and consulting is shaped around
the business goal, not a fixed audit or packaged process. Never
present her as primarily an automation developer. Sitewide anchors:
hero "Building the marketing your business actually needs." and CTA
"Let's figure out what comes next."

Voice: conversational, direct, warm, concise, contractions. Banned in
copy: em dashes in prose, exclamation points, generic agency language,
startup cliches, productized-service language, "AI-powered", "runs
without you", "one system", "three ways in", "the exact playbook",
"hand you the keys", "hand your time back" (and the retired "AI hands
time back for strategy" framing), "the work only you can do",
"marketing engine", "lead engine", "build the system", "let it
compound", "strategy that ships", "shipping" as a virtue, "force
multipliers", "partner, not a playbook", absolute claims such as
"nothing gets lost", and overuse of "systems", "AI", or "stuck".
Year ranges may use dashes (en dashes, not em dashes).

## Color tokens (from styles.css)

| Token | Value | Role | Contrast notes |
|---|---|---|---|
| `--bg` | `#FDF9F5` | Cream page base | — |
| `--bg-raised` | `#FFFFFF` | Cards, inputs | — |
| `--ink` | `#2E2A27` | Headings, button text on coral | 13.3:1 on bg |
| `--body` | `#3E3833` | Body text | ~11:1 on bg |
| `--muted` | `#5C544B` | Secondary text (darkest allowed gray) | ~7:1 on bg |
| `--coral` | `#FF6F61` | Fills/buttons ONLY — never text on cream | pair with `--ink` text (5.2:1) |
| `--coral-deep` | `#B8354A` | Coral as TEXT (links, eyebrows) | 5.5:1 on bg |
| `--blush` | `#FBD5E4` | Consulting pastel + aura cloud | fill only |
| `--peach` | `#FCE4C4` | Courses pastel + aura cloud | fill only |
| `--lavender` | `#DAD4F5` | Workflow & AI pastel + aura cloud | fill only |
| `--courses-deep` | `#8A5A14` | Courses text tone — ONLY within peach contexts, where it reads amber; isolated on cream it reads brown (never on stats) | 5.5:1 on bg |
| `--automations-deep` | `#574AA6` | Workflow & AI text tone (token name unchanged) | 6.7:1 on bg |
| `--consulting-deep` | `#A63563` | Consulting text tone | 5.9:1 on bg |
| (tab butter) | `#FBEDBF` / `#F2DC9C` | Butter tab pair (fill only, headline tabs) | ink text on top |

**Offer color coding (used on every page the offers appear):**
Courses = peach · Workflow & AI Guidance = lavender · Consulting = blush ·
Fractional marketing leadership = sage (2026-08).
Sage `#D9EFD3` with `--fractional-deep` `#2E7529` is the fourth pastel,
added when Fractional became its own offer on Services.

It took three passes and each failure is worth keeping:
- `#D2E4DC` at S25% sat correctly on hue but read as a grey beside
  blush S83%, peach S90% and lavender S62%.
- `#CDEEDD` fixed the saturation but sat at hue 149, inside the
  150-170 mint band. Mint is cool and blue-leaning and fought the warm
  cream/peach base.
- `#D9EFD3` is hue 107, S47%, L88%. Warm-leaning green, 43 degrees
  clear of mint, in family on saturation and lightness.

A BLUE WAS CONSIDERED AND REJECTED. At any pale tint a blue lands
beside lavender: RGB distance 29 at hue 210, against 62 for this green.
They are indistinguishable as small chips, which is exactly what breaks
in a chart legend or a course worksheet. Green also leaves the larger
remaining gap (107 to 251) for a blue or teal FIFTH colour later;
taking blue first would have crowded lavender and still left green
needed.

**Recipe for any future pastel** (courses, worksheets, charts):
- Pastel: S 45-65%, L 86-91%
- Deep partner: S 38-55%, L 31-47%, and at least 4.5:1 on cream
- At least 55 degrees of hue separation from every existing pastel
- At least RGB distance 60 from every existing pastel
Current hues: peach 34, sage 107, lavender 251, blush 336.

Sage appears in three places, not one: the Fractional offer section and
anchor-nav chip on Services, the `q-sage` quote monograms on Home and
About, and `.aura-blob-4`. That fourth aura cloud is
`rgba(158,205,148,0.30)`, roughly a third of the other cores' alpha and
the smallest footprint of the four, sitting bottom-right. Keep it the
quietest cloud.
(CSS class names still say "automations"; only visible copy renamed.)
Applied as kicker chips, bullet rings, aside fills, anchor-nav active
states, card hover borders. Pastels are fills; their `-deep` partner is
the only text color allowed on top of them or as accent text on cream.
STAT NUMBERS are the exception (2026-07): ALL stats read in
`--coral-deep`, the single brand accent — home proof chips, the
About proof points, and the Expertise result figures, which were
the last ones still in ink until Amber caught it in July ("data
numbers should be in coral"). List ordinals are NOT data and stay
muted with the other annotation labels — settled after trying the
per-company deep tones (arbitrary, and the peach partner reads
brown outside peach contexts) and ink (too flat; Amber chose coral
seeing both live). The pastel washes alone differentiate result
cards.

## Typography

- Display: **Newsreader** (400/500/600 + true italics) — hero and
  section headlines at 500 (medium), project/card titles (h3) at 600.
  Italic is reserved for the occasional emphasized word (hero `<em>`);
  never italicize whole headings.
- Body: **Manrope** (400–800) — body copy, nav, buttons, labels,
  kickers. Metrics/stat numbers: Manrope 800 (`.feat-stat`).
- TYPE SCALE (2026-07, tokens in :root, fluid 390px -> 1440px;
  applied site-wide by the "Type system" layer at the end of
  styles.css — change sizes THERE, not per section):
  h1 40/50 (lh 1.1, ls -0.025em; ONE display size on every page
  including the home hero — amended three times. The spec was 48/72;
  72 broke the hero's 3-line rule and 48 made sub-pages outweigh home
  on phones, giving 40/64; then 2026-08 (Amber: "let's just update the
  desktop h1s all to 50, it's weird to have some at 64"). `.h1-long`
  IS GONE with that change — it existed because 64 was a wall for long
  headlines, which split the site into two page-title sizes for no
  reason a reader could see. Line-height and tracking are the looser
  pair .h1-long used, since at 50 every h1 runs two or three lines) · h2 28/40, stepped down TWICE —
  first from the spec's 36/50 to 30/44, then to 28/40 in 2026-08
  (Amber: "I think the H2s may be too large"). 44 did not actually
  satisfy the ladder rule it was chosen for: measured at 1440 it
  left only 6px between the long-display h1 (50) and the section
  titles beneath it on Expertise, Courses and the course page,
  while every other page had 20 to 26. At 40 those pages get 10px
  and the rest 24. Do NOT fix this per-heading — a one-off 34px
  grade for "Where I help" was tried in July and rejected as
  off-brand; the scale is the place to change it ·
  h2-long 24/35, following h2 down so it stays a grade below
  rather than 2px below (lh
  1.1/1.09, -0.02em) · h3 24/30 (lh 1.2, -0.015em; structural subheads only — CARD
  TITLES read at the intro grade 19/21, the h3 slot overwhelmed
  card bodies) · intro 19/21
  (lh 1.3; the CARD-TITLE grade only. The standfirst experiment is
  RETIRED — ledes were promoted to intro 2026-07, then Amber ruled
  "it should all be body text": every lede, the career-story
  intro, and the band credo lines read at BODY (16/17), keeping
  the heading's width and `text-wrap: pretty`. EVERY running-text
  paragraph reads at BODY, and small is strictly metadata: names,
  roles, labels, notes, footer. THE 1px-UNDER EXCEPTION IS RETIRED
  along with the nested cards it existed for: Building rows now sit
  on the real tokens, title at body (16/17) and description at small
  (14/15), lh 1.5. The hierarchy that calc() bought — title above
  description — comes from the token gap itself now) · body 16/17 (lh 1.55;
  stepped from
  the spec's 17/18 so no supporting text outranks the hero deck at
  16/17.5) · small 14/15 (lh 1.4) ·
  eyebrow 12/13 (600, 0.08em, uppercase) · buttons 17px desktop /
  16px mobile (CTA rule: coral carries the primary button's
  dominance, never bulk — pills stay calm, 44px+ targets; long
  proof pages carry ONE quiet inline "Let's talk" prompt at the
  decision moment, `.inline-cta`, never more) · nav 16px ·
  arrow-links 16px.
  HEADLINE WIDTH: MID-PAGE h1s and section titles carry NO
  max-width — headlines run toward the wrap edge so heads match
  the width of the content below them (Amber, 2026-07: title caps
  made desktop sections read squished-left; `text-wrap: balance`
  keeps any multi-line result even). HERO GROUND IS EXEMPT
  (Amber: "not for the hero sections"): the home hero keeps its
  copy column, and `.page-head` h1s keep the 800px cap with their
  ledes at BODY scale and 600px measure — page tops stay
  restrained so no page opens heavier than home. (With ledes back
  at body scale everywhere, the page-head rule now differs only in
  its 600px measure cap.)
  Deliberate exceptions, don't "fix" them: LONG HEADLINES (10+
  words) step down one grade via `.h1-long` (about/expertise
  page h1s at the h2 size) and `.h2-long` (h2s that would wrap
  3+ phone lines, ~40+ chars: home problem, home selected work,
  home about teaser, about experience — 26/38) so sentences read as sentences, not walls — apply the
  pattern to any future long heading; the hero subhead runs below body at 15 -> 17.5px so the
  headline and proof lead; and metric/metadata micro-type (proof
  chips, feat stats, tags-as-labels, case-column labels) stays
  individually tuned.
- Hero sans tracking: subhead -0.01em, chip stats -0.015em, chip
  labels -0.005em. Never positive tracking on sentence-case text —
  wider tracking belongs to uppercase eyebrows/labels only, and
  ALL of them share 0.08em (tags, tier chips, capture label, and
  case-column labels included — consolidated 2026-07).
  LABEL COLOUR IS BY ROLE, not by taste (Amber, July 2026 — "these
  are not consistent"): section EYEBROWS are coral-deep and mark
  where a section starts; everything that ANNOTATES content is
  muted — card tags, case tags, case-column labels, the capture
  label. The three offer `.tier` chips are the sanctioned
  exception: they carry their offer's own deep colour as
  colour-coding. `.eyebrow` now has exactly ONE appearance — the
  muted override on "Earlier experience" is gone, so the class
  can never render two ways. All uppercase labels sit on the
  eyebrow grade (12/13): `.capture-label` was the lone stray at
  small (14/15) because it sat in the small-text group in the type
  layer, which outranked its base rule. `.pa-label` and
  `.pa-panel-label` were tracking at 0.12em (1.56px vs everyone
  else's 1.04px) and were normalized to 0.08em in the same audit.
  How I Work's `.nb-label` joins the muted annotation group; its
  section eyebrows stay coral-deep. (`.hw-q-num` was in this group
  until the numbered question list was retired — see the length
  audit below.)
- PAGE-HEAD EYEBROWS ARE RETIRED SITEWIDE (Amber, July 2026:
  "remove all eyebrows from hero's"). No page top on any page
  carries a label above its headline; the headline leads and the
  paper tab carries the emphasis. Section eyebrows inside the
  page are untouched, and `.page-head` padding was raised from
  124/112 to 158/149 so the h1 still lands at the SAME measured
  position it always has (158 desktop / 149 phone, ~95/88 under
  the nav) instead of riding 34px higher. Related: `.head-grid`
  is now `align-items: start` with `.head-art` centring itself,
  because with shorter copy the whole row began centring and
  dragged the Services headline off that shared line.
- Header: nav bar 62px (60px on phones + safe-area inset), brand
  wordmark 1.25rem desktop / 1.5rem mobile, hamburger three 27px
  1.5px lines in a ≥44px tap target.
- Hero h1: one accent word per headline in `--coral-deep` via
  `<em>`, set in Newsreader italic.
- Loaded via preconnect + `media="print" onload` swap — never
  render-blocking. Google Fonts is the only external dependency.

### Font loading — what is actually available (2026-07 audit)

TWO FAMILIES, and the Google request is the contract:

    Newsreader: 400, 500, 600  +  italic 400, 500, 600
    Manrope:    400, 500, 600, 700, 800

**ANY WEIGHT OUTSIDE THAT LIST IS FAUX.** The browser smears the
nearest face and it reads subtly wrong — heavier, muddier, slightly
wider. `.quote-foot .monogram` was set to Newsreader 700 and had been
synthesised the whole time; it is 600 now. Before using a serif weight
above 600 anywhere, ADD IT TO THE REQUEST IN ALL EIGHT PAGES FIRST, or
do not use it.

Verified with the real binaries loaded: every visible text node on all
eight pages renders in Newsreader or Manrope, at
400/500/600/700/800 sans and 400/500/600 serif plus 400/500 italic.

TWO PLACES THAT SILENTLY FALL BACK, both found by audit:
- A `<dialog>` RESETS THE UA FONT. The lightbox close and arrow buttons
  are built in JS with no family of their own and rendered in Arial
  until `.lb-close, .lb-nav` got `font-family: var(--font-body)`.
  Anything else added inside `<dialog>` needs the same.
- `<noscript>` content reports Times New Roman to a naive DOM sweep. It
  is never painted; ignore it.

TESTING NOTE: this sandbox's Chromium fetches the Google CSS but
DOWNLOADS NO FONT FILES, so every screenshot taken with a plain page
load is showing fallbacks — a serif that is not Newsreader and a sans
that is not Manrope. To review type honestly, download the faces with a
browser User-Agent (`curl -A "Mozilla/5.0"` on the css2 URL returns
woff2 and the files fetch fine), serve them locally, and route
`**fonts.googleapis.com**` to a rewritten stylesheet. Layout and
spacing are unaffected either way; letterforms and weight are not.

## Shape & depth

- Radius scale (minimal, 2026-07): 24px for cards, pills, and
  bands; 14px for compact elements (inputs, proof chips); 8px for the phone results strip; 50% circles and the
  two organic blobs. Nothing else.
- Shadows: `--shadow-soft` (0 14px 40px -18px rgba(46,42,39,0.18)) on
  hover lift only. No permanent heavy shadows.
- Borders: 1px `--line` rgba(46,42,39,0.12).

## Custom graphics language

Hand-authored inline SVG only — never stock images, icon fonts,
emoji, or AI-generated raster clip art. The voice is PRECISE
GEOMETRIC ABSTRACTION, not doodles: concentric arcs, orbital
circles, smooth trajectories; fine 2px strokes in the offer's
`-deep` hex paired with one gradient-filled form (pastel → deep)
per mark. Stroked elements carry `pathLength="100"` and draw in on
reveal; filled forms use class `fill` and fade in after. Current
set: tapered coral gradient swash under the hero accent word,
three offer marks (growth arcs / orbital system / trajectory
curve), the bottleneck mark (home problem section: four colored threads
— many possible directions — enter scattered from the left, weigh
against each other inside a blush highlighter band — the evaluation
zone — then resolve into the one coral-deep line that fits, flowing
level off the right edge past momentum ticks; draw-in is
choreographed: scatter, evaluate, pause, clarity. The story is
"many inputs → evaluation → one appropriate path", not just blocked
ideas. No arrowheads, no upward-chart shapes),
the layered paper tabs (headline emphasis device, refined 2026-07:
two soft rounded pastel tabs behind ONE short phrase — a deeper
back tab at ~68% alpha offset slightly down-right at ~0.9deg, a
lighter front tab at ~-0.45deg directly behind the text; both tabs
are trimmed toward cap-height and baseline (front inset 0.1em top /
0.04em bottom) with small ~0.12-0.2em radii so the highlight sits
in the type, not around it — never pill-shaped, never a badge: the
phrase must still read as part of the sentence, and it must never
look like a clickable button. `.tab-em` + `.tab-blush/.tab-butter`
— a TWO-COLOR logic (2026-07, peach/lavender tab variants
retired): blush marks the tension side (problems, uncertainty,
open questions), butter marks the possibility side (collaboration,
solutions, next steps); a phrase keeps its color wherever it
repeats. Never in body copy, nav, buttons, card titles, or on
phrases longer than ~4 words; at most one per section, and NOT on
every major heading — the moment every heading has one it becomes
a template gimmick. Emphasis never depends on the color: the
phrase reads as plain words in the sentence without it. Tabs live
on cream surfaces plus the one dark CTA band (ink text on butter
holds 12:1 there); a pastel tab on the old coral band fought the
gradient and was removed 2026-07. Current placements — exactly
nine phrases: "what to build." (blush, home problem), "different
needs." (blush, work h1), "actually needs." (blush, about h1 —
needs sit on the question side), "work together." (butter,
services h1), "marketing experience." (butter, expertise h1),
"practice." (butter, expertise CTA), "businesses." (butter, how
i work h1 — the collaboration side), "a lot of questions."
(blush, how i work section 2 — literally the open-question
side), and "comes next." (butter, dark CTA bands + about
contact) —
every page-top carries emphasis (home via the coral italic em)
and every page runs exactly two tabs; 404 stays plain,
A THIRD tab on expertise ("work together." in blush on the core
h2) was removed July 2026 during the How I Work pattern audit:
it broke the two-per-page count AND the one-colour-per-phrase
rule, since services already owns that phrase in butter. Audit
the count whenever a page gains a heading.
organic blob portrait with offset coral outline, and the offer
card-art compositions (home): a pastel gradient blob backdrop, the
offer's mark enlarged over it, and small geometric accents (dot
grids, ticks, a plus, an outlined square). Layered-collage
composition borrowed from editorial card design; ingredients stay
strictly ours: no photos, no halftones, pastel palette only.
Gradient ids must be unique per page instance. (A hero butterfly and Magic UI-style headline
sparkles were both tried and removed 2026-07 — borrowed decorative
gestures read as AI tells; don't reintroduce either.)

**Services head diagram (2026-07, Amber's brief + four review
rounds).** The one page-head illustration: an abstract marketing
system on the right ~37% of the Services head, 480x272 viewBox,
markup in `services.html`, styles under "Services head" in
`styles.css`. Sixteen nodes (six outlined rings, four filled
discs, six loose dots — four connect to NOTHING, which is what
stops it reading as a diagram), eleven connectors whose weights
run 0.9 -> 2.1px, three of them skipping the centre so it is a
network rather than hub-and-spoke. The centre is five overlapping
translucent discs with visible lens overlaps plus offset (never
concentric) rings — NOT a single orb. A horizontal mask fades the
left edge to 55% toward the copy and eases the right edge out to
26% over five stops, and the composition runs past the wrap into
the gutter so one node and one line dissolve off the page.
NO LABELS — Strategy/Brand/AI/Growth were drafted and cut (Amber:
"the illustration should support the message, not explain it";
a lone AI callout was cut too, it read as random). Wide-and-short
on purpose so the row height stays driven by the copy. Accepted
costs, both hers: the h1 wraps to two lines on desktop (a 35-40%
art column leaves under the ~800px the headline needs for one
line) and the head grows 354->420 desktop, 403->512 phone.
PHONE RUNS A SECOND, PURPOSE-DRAWN SVG (`.sys-art-sm`, 480x140),
never a scaled-down desktop (Amber: scaling down "looks like a
pile of overlapping bubbles"): landscape band at full copy width,
THREE discs, FOUR connectors (one coral, one gold, one blue, one
grey), ONE floating dot, 55% opacity. It is a watermark on
purpose — the butter highlight behind "work together." is the
hero's focal point and nothing may compete with it. Watch the
specificity: the tablet rule `.head-art .glyph` (0,2,0) outranks
a bare `.sys-art-sm`, so the phone opacity must be written
`.head-art .sys-art-sm`.
TWO OVERRIDE TRAPS, both cost a debugging round — `.reveal.in-view`
sets `opacity: 1` and `transform: none` at higher specificity than
`.head-art`, so the fade-back AND the rightward nudge must ride the
inner `svg`, never the container. Related: the shared `fill-fade`
keyframe ends at `opacity: 1`, so any element that needs to stay
translucent must sit INSIDE a `<g class="fill">` rather than carry
the class itself (this is also quietly flattening the pink
evaluation band in the home problem art — fix when convenient).

## Photography

Four appearances, four DISTINCT photos: the neon studio shot
("good ideas start here", amber-fugedi-studio.jpg) in the About
blob per Amber's pick, the sunlit blazer portrait
(amber-fugedi-sunlit.jpg) at 150px in the home about teaser, the
mug photo at the contact moment, 108px, and — the one exception
to the old never-in-the-hero rule — Amber's own collage in the
How I Work hero (see that page's section). The cream portrait
serves only as the structured-data headshot (amber-fugedi.jpg).
The three small ones share the organic radius family. The hero
photograph is HERS SPECIFICALLY and stays a page of one: no other
page opens on a photograph, and no photo is used twice.

WORK ARTIFACTS ARE A SEPARATE CATEGORY and are not governed by the
photography rules above. Screenshots and photographs of real client
deliverables belong on Projects, inside the case they prove, and one
sits on Expertise. They take a plain rectangular frame — hairline
`rgba(46,42,39,.12)`, 4-5px radius, soft shadow — never the organic
blob radius, which belongs to Amber's own portraits. THE ONE HARD
RULE: an artifact must be REAL and the client must already be named
on the site, because publishing a screenshot claims the work and
naming a client is a disclosure only Amber can make. Never draw,
mock up, or invent one.

## Identity marks (the af system)

The mark is lowercase "af" in Newsreader 600, letter-spacing
-0.065em, on a rounded tile (22% radius). The name is the plain
unified serif wordmark: "Amber Fugedi" in Newsreader 500, ink,
letter-spacing -0.01em, title case, both names identical size and
weight — no coral surname, no split styling, no flourish. The mark
carries the personality; the name stays quiet. Never customize both.

Roles:
- Primary identity (site header, all six pages): aura af tile +
  name as ONE home link. Desktop: 30px mark, 25px name, 14px gap.
  Mobile ≤760: 26px mark, 22px name, 11px gap. Below 350px only,
  the name hides and the mark stands alone (responsive exception,
  never the default mobile identity).
- Formal wordmark: "Amber Fugedi" alone, same spec.
- Micro mark: af tile alone.
- Browser favicon is HIGH CONTRAST, not aura: ink af on flat cream
  (favicon-48/32/16.png, transparent rounded corners). The aura
  tile is for social/app surfaces: favicon-512.png (social
  avatar), apple-touch-icon.png (180 full-bleed, iOS masks it),
  brand-mark.png (96px source for the 30px header mark). A white-
  on-ink reversal exists as an off-site asset only.
- Color and expression stay in the aura, buttons, highlight tabs,
  and motion — not in the name.

404.html links these assets with absolute paths. Don't reuse the
tile as an in-page graphic.

## Motion (full budget — add nothing beyond this)

1. **Aura (signature — narrative, not ambient):** three pastel clouds
   on CONTINUOUS closed-loop paths, `linear` timing, breathing
   0.84-1.30 scale per loop. The two warm clouds are a phase-aligned
   21s pair (aura-drift-l/r): they wander asymmetrically, gather at
   30%, and briefly part in mirror at 30-38% — an ABSTRACT wing beat,
   aura first, wings only for a moment (the literal-butterfly ban
   stands; this is the sanctioned echo). Mobile has its own PORTRAIT
   COMPOSITION, not a scaled-down desktop: 88-96vw clouds with denser
   cores (alpha ~1, 56% falloff, blur 30px) framing the headline from
   left and upper-right with lavender anchoring the CTAs, all three
   bleeding off the edges (deliberate crop); the wing pair runs
   phone-amplitude keyframes (aura-m-l/r, 16s, up to 22vw travel). The layer tells the site's story via
   FOCUS STAGES driven by scroll position (data-aura-stage on body):
   stage 0 diffuse (hero, blur 46px), stage 1 gathering (problem/work,
   38px, first shape), stage 2 focused (why/offers, 31px, -3deg lean,
   layer steps back to 0.6 so copy leads), stage 3 momentum (quotes to
   CTA, 26px, -5deg, elongated forward, 0.92). Stages also drift the
   clouds forward-right up to 88px via the JS bias. Stage transitions
   ride 1.2-1.4s var(--ease); channels compose independently:
   keyframes own `transform`, parallax owns `translate`, stages own
   `scale`/`rotate`/`filter`/opacity var. Home aura settles in over
   2.4s on load. Sub-pages: two-step (diffuse -> focused after 360px).
   Mobile: stages are opacity/scale only (blur 30px constant, no shape
   morphs). Reduced motion: fully static gradient form,
   no stages, no settle. Desktop center velocity ~25-50px/s, mobile
   ~30-50px/s.
   The aura thread also surfaces as: a layered pastel texture behind
   case cards on hover (0.3s opacity, fine pointers only) and a faint
   standing gradient behind the quote marquees. Do not add it behind
   every section — the fade-back IS the design.
2. **Cursor/tilt parallax:** each cloud eases toward the cursor at
   depths 90/150/220px max, via CSS `translate` (composes with the
   orbit `transform`), `pointer: fine` only. On touch devices the
   same targets are driven by device tilt (gamma/beta over ±30°,
   neutral calibrated from the first reading). Android only — iOS
   requires a gesture-gated permission prompt, which an ambient
   background doesn't justify; it silently gets orbits + scroll.
3. **Scroll depth:** clouds also recede at 0.04/0.07/0.11× scroll
   distance, capped at 90/150/210px so the aura never scrolls fully
   off long pages (mobile especially — clouds are viewport-sized).
4. **Scroll reveal:** `.reveal` fade/rise 28px, 0.7s,
   IntersectionObserver; grid children auto-stagger 80ms (capped
   0.4s), delay cleared after settling so hover stays instant.
5. **Hero entrance (home):** h1 → subhead → CTAs → proof chips
   rise in at 0/0.15/0.28/0.42s. The proof column
   (three tilted result chips linking to case studies, on a soft
   lavender/blush aura glow via ::before) shows only above 1020px
   as ONE art-directed composition: a stepped descending diagonal
   with a strict size hierarchy — PERQ dominant (2.45rem stat),
   Scanoptics middle (1.52rem), StormwaterONE smallest (1.24rem) —
   tight 7/4px vertical steps, raised so the top card sits beside
   the headline's middle, and inset right (padding-left clamp) so a
   clear gutter (~130-165px, roughly a CTA button) separates copy
   from proof. Do not spread the cards or flatten the hierarchy.
   Below 1020px the chips become a compact stat strip, and on
   phones (≤760px) a concise credibility strip — three equal-width
   one-line rows (pastel washes, 8px radius, whisper tilts), stat
   in a fixed 7.8em column so labels share one starting point.
   Chip labels are concise ("+120% / Inbound leads at PERQ").
6. **Hover:** cards lift −5px + soft shadow and tilt up to 7° toward
   the cursor in 900px perspective (fine pointer only), easing back
   flat on leave; links draw a 2px underline in.
7. **Stroke draw-in:** SVG line art draws itself over ~1.1s when its
   section reveals (hero squiggle after the entrance, 0.75s delay);
   fully drawn statically under reduced motion and no-JS.
8. **Quote marquee:** testimonial cards glide in a continuous
   linear loop (38s home / 75s about), pause on hover and
   focus-within, edge-fade mask; static wrapped cards under
   reduced motion. (A hero credibility marquee of the industry
   list was tried and removed 2026-07 — the industry breadth now
   lives in the static transition band instead; don't reintroduce
   a hero ticker.)
9. **Hero depth plane:** hero content scrolls at 0.2× page speed and
   fades out by ~0.85 viewport heights; on fine pointers the whole
   plane tilts ~±1–2° against the cursor (opposite the clouds) for
   foreground/background separation.
10. **Course-assembly strip (services, Courses band):** five geometric
   marks (framework → curriculum → script → slides → learner tool)
   pop in left to right over ~2.3s with arrows sliding in between,
   triggered once by the reveal observer. Static and fully visible
   under reduced motion and no-JS. Runs once — never loops.
11. **Paper-tab entrance:** when a tabbed headline's reveal fires,
   the back tab slides up into place (0.26s, var(--ease), +0.18s
   delay, 0.2em travel) and the front tab follows (+0.34s, 0.15em);
   the text never moves.
   No bounce, no scribble, no glow. Page-head tabs (services/work
   h1) are static — page heads don't reveal. Reduced motion and
   no-JS: tabs fully visible, static.
12. **Experience career story (about, replaced the timeline
   2026-07):** two columns — sticky thesis left (position: sticky,
   pure CSS, desktop only), three featured chapters right (PERQ,
   Scanoptics, Fractional Marketing) opened by a static coral tick,
   plus an "Earlier experience" appendix of native <details> rows.
   Appendix rows sit OPEN on desktop (main.js sets it; chevron
   hidden, toggle disabled) and collapse on phones, where the
   chevron rotates 0.2s var(--ease) — the only motion; none under
   reduced motion. ONE link in the whole section (the PERQ case
   study, Amber's one-link rule). Proof points use only numbers
   already published elsewhere on the site. TIMELINE CANON: the
   Fractional Marketing chapter runs 2017–Present — consulting
   began with Robert James Restoration in 2017 (Amber, July 2026:
   the old 2019 start left an apparent 2018 resume gap, since her
   MembersFirst employee period isn't listed as a job). Named
   clients in the chapter: Robert James Restoration (2017),
   MembersFirst CT FCU (client since 2018).

Interaction timing (per review-animations STANDARDS.md, installed
in `.claude/skills/`): press feedback 160ms, hover transforms and
underline draw-ins 200ms, shadows may trail at 300ms. Long
durations (0.7–1.2s) are reserved for scroll reveals, entrances,
and stroke draw-ins — marketing moments, not UI response.

`prefers-reduced-motion`: aura static, reveals instant, no hover
transforms. Hard requirement — never ship motion outside this contract.

## Full-site audit, 2026-07 (findings and fixes)

Three REAL BUGS, all in the scroll-reveal system, all shipped and all
now fixed. Any future change to `.reveal` must keep these fixed.

1. **THE TESTIMONIAL MARQUEE HAD A FIVE-CARD HOLE.** `.quote-card` in
   the marquee also carried `.reveal`. The track is duplicated so the
   loop is seamless, and the duplicate set lives off-screen where it
   NEVER intersects the viewport, so every card in it sat at opacity 0
   forever while still taking up layout. On home, 3 of 8 cards were
   visible. On About, 1 of 8. FIX: `.quote-marquee .quote-card.reveal
   { opacity: 1; transform: none; }` — the horizontal travel IS the
   reveal; the marquee does not get a second one. NEVER put `.reveal`
   inside a horizontally-translated track.

2. **FAST SCROLL STRANDED WHOLE SECTIONS.** The observer's
   `threshold: 0.15` is what gives the reveal its staged feel and is
   also how content gets stranded: an element can travel from below
   the fold to above it inside a single frame during a fast scroll or
   an anchor jump, never registering 15% on screen. On How I Work an
   entire section head — eyebrow, headline, lede — stayed invisible.
   FIX: a SAFETY SWEEP in `main.js` reveals anything whose
   `getBoundingClientRect().top < innerHeight`, regardless of ratio,
   queued once per frame on scroll/resize and on any `toggle` event.
   THE CONDITION HAS NO LOWER BOUND ON PURPOSE — checking
   `bottom > 0` too would leave a trail of blank sections behind
   anyone who scrolls straight to the footer.

3. **OPENING A CASE COULD REVEAL NOTHING.** `.art-link` inside a
   closed `<details>` has no area to measure, so it never crossed the
   threshold; opening the disclosure showed an empty row where "See
   the website" should be. FIXED by the same sweep, hooked to `toggle`
   with capture (the event does not bubble).

Smaller fixes from the same pass:
- the lightbox's `<img>` is created empty and had NO `alt`, so screen
  readers announced the filename until one was set. Now `alt = ""` at
  creation.
- `404.html` had no meta description and no canonical. Both added.
- `.art-link` / `.more-list` links were 22-25px tall, under the 24px
  minimum target size. Padded to 30px without moving the baseline.
- ~110 lines of DEAD CSS removed: `.feat-card` (whole component),
  `.feat-grid`, `.tier-head`, `.kit-list`, `.quote-grid`,
  `.stack-note`, `.case-art`, `.case-more`, `.portrait-note`,
  `.offer-note`, `.nav-capabilities`. CAUTION LEARNED: two of those
  names sat in MULTI-SELECTOR lists alongside live ones
  (`.feat-card:hover, .quote-card:hover, .proof-chip:hover`), and
  dropping the line dropped the live selectors too. Trim the name out
  of the list; never delete the line.

VERIFIED CLEAN, and these are the checks worth repeating: detector 0 ·
no horizontal scroll at 1440/1020/760/390/320 · every `.reveal`
resolves on all six pages after a real scroll · every case discloses
its content at desktop and phone · one h1 per page and no heading-level
skips · every internal link and anchor resolves · nav and footer byte-
identical across all seven pages · JSON-LD parses on all six indexed
pages · titles, descriptions and canonicals unique · no `target=_blank`
without `rel=noopener` · no unnamed interactive element.

CONTRAST FALSE POSITIVES: an automated walker that only reads
`backgroundColor` reports 1.00:1 on the CTA-band tab words and the
lightbox chrome, because both sit on a `background-image` gradient or
on `::backdrop`. Measured by hand they are 5.64:1 and 15.07:1. Do not
"fix" them.

KNOWN AND LEFT ALONE: `full-a2-sign.webp` is the heaviest file at
411KB, but every `full-*.webp` loads only when someone opens the
lightbox, so it costs nothing on page load. ORPHANED IN THE REPO
(~592KB, never requested): `favicon-512.png` (292KB, referenced
nowhere and wildly unoptimised for an icon), the six `work-*.webp`
thumbnails from the retired preview strip, and
`artifact-{rjr-hero,mfcu-campaign}.webp` from the retired Expertise
artifacts.

## Mobile menu (2026-07, final: the lavender panel)

**A FULL-BLEED LAVENDER PANEL, `--menu-bg: #EDE9F7`.** The one
full-bleed surface on the site and the only place this colour appears,
so opening the menu is a MOMENT rather than a paler version of the page
behind it.

HOW IT GOT HERE, because the dead ends matter: cream with a soft field
read as "a pale rainbow wash"; cream with one contained oval was clean
but not enough of anything; charcoal was rejected outright. Lavender is
the third answer — saturated the way this brand is saturated, PASTEL
RATHER THAN DARK.

The structure came from a reference Amber sent (funnel.io): mark and
close in circles, edge-to-edge rules, one solid CTA. WHAT WAS CHANGED,
so it is a translation and not a copy:
- hairlines at 1px / 16%, not their heavy white rules;
- a small CORAL DOT marks the current page, not a chevron — a chevron
  promises the row expands;
- the CTA is a pill on the site's own 26px radius, in the SOFTER coral
  #E8846B, not `--coral` #FF6F61: at full width the hot fill shouts
  against the lavender.

The bar inverts with the panel. THE WORDMARK DROPS and the `af` mark
carries it alone in a cream circle — you already know whose site it is.

**COURSES SITS UNDER SHOP.** Shop keeps a full row with a caret and the
list opens beneath it, indented and a grade smaller. THE GROUP OPENS
ITSELF when the current page is inside it, or the coral dot would be
hidden behind a collapsed row.

FOUR TRAPS HIT BUILDING THIS. Every one cost a render to find:
1. **The X drifts into a chevron inside a circle.** Stacked margins do
   not centre; the bars must be placed absolutely and crossed at 50/50.
2. **Inserting `.nav-group-label` between the button and the list broke
   every `+ .nav-drop-menu` selector** — including the DESKTOP dropdown,
   silently, because `:focus-within` was still opening it. All sibling
   selectors here are `~`, not `+`.
3. **The hamburger is "outside" the Shop group,** so the outside-click
   handler closed Shop the instant the menu opened. The handler skips
   clicks on the toggle.
4. **An absolutely-positioned child that overhangs the panel extends
   its scrollable area.** An oversized blurred circle for the aura put
   Let's talk out of reach at 360x640. The aura is now `inset: 0` with
   the gradients painted inside a box that exactly fits, and the panel
   is scrollable again.

SHORT PHONES: below 720px tall the rows step from 1.6rem/16px padding
to 1.4rem/12px, so seven rows plus the closing block still fit.

The body scroll locks while the panel is open, and Escape closes it and
returns focus to the toggle.

Measured: rows 11.9:1, Courses 9.7:1, Student login and the note 6.2:1,
CTA 5.4:1 on coral. No tap target under 24px. Nothing clipped and
nothing scrolls at 390x844, 375x667, 360x640 or the 760 edge. Tab order
follows the nav order below.

## Nav order (2026-07, Amber)

**Expertise · Work · My Approach · Services · Shop · About**, then
Student login and the Let's talk CTA. Same order in the mobile panel,
and `aria-current="page"` verified on all eight pages — the home page
carries none, which is correct: the brand mark is the way home and
always has been.

- **Home was in this list for one revision and came straight back out**
  (Amber: "I don't think we need home in the menu"). Do not re-add it.
- **"Work" points at `projects.html`.** The LABEL changed, the URL did
  not — `/work.html` already 301s TO `/projects.html` from the earlier
  rename, so pointing the label back at a `work.html` file would build
  a redirect loop. The page's own title and h1 still say Projects;
  flagged to Amber as a follow-up, not assumed.
- The footer's first column head moved from "The work" to **"What I
  do"** and lists the same four in nav order. "The work" over an item
  labelled "Work" read like a mistake.
- SEVEN primary links plus Shop and the CTA is the most this row
  holds, and it needed a second tighter band under 840 to do it. At
  six it needs only the one 761-900 band. Anything beyond seven needs
  the mobile menu to take over earlier than 760. Measured one row at
  1440, 1280, 1180, 1100, 1020, 960, 900, 860, 820, 780 and 761;
  tightest brand clearance 163px at 960.
- THE STEP-DOWN THAT MADE IT FIT HAD BEEN DEAD. The 761-900 block sat
  at line 480 and set `.nav-links a { font-size: 0.8rem }`, but the
  type layer sets `.nav-links a { font-size: 1rem }` at equal
  specificity 3,000 lines later, so source order killed it. It is now
  at the END of the file under "TABLET NAV STEP-DOWN", with a second
  tighter band under 840. Leave it there.

## Shop dropdown in the nav (2026-07)

The nav item reads **Shop** and Courses lives inside it (Amber: "in
the menu it should say shop and courses is a drop down"). This
supersedes the earlier "do not add Shop to the primary navigation"
line in her Courses brief — she changed it. Templates and Products
still stay off the nav.

**"SHOP" IS A DISCLOSURE BUTTON, NOT A LINK.** There is no `/shop`
page and there should not be one until it has something to hold. It is
a real `<button>` with `aria-expanded` and `aria-controls`, so it is
announced as a menu button rather than a dead link.

ONE ITEM TODAY. A dropdown holding a single entry adds a click for no
gain right now; it earns itself the moment a second thing ships.
Flagged to Amber, kept because she asked and because the structure is
the point.

BEHAVIOUR, and every path is covered:
- hover opens it, but ONLY on a fine pointer — on touch a hover-open
  menu swallows the first tap;
- click toggles; Escape closes and returns focus to the button;
- ArrowDown from the button lands on the first item, the standard
  menu-button move;
- `focusout` on the group closes it, so tabbing past the last item does
  not leave a menu hanging open behind you;
- a click anywhere outside closes it.
- **`:focus-within` IN CSS IS THE NO-JS PATH.** Focusing the button —
  which a click also does — opens the menu with CSS alone. Without it,
  Courses had NO navigation path with scripting off. Verified by
  loading with JS disabled, clicking Shop and landing on
  `/courses.html`. Do not remove that selector.

MOBILE: inside the hamburger it is an indented sub-list, never a
floating popover — a popover inside an already-overlaid menu is a
trap. The mobile menu is CENTRED, so the button stays inline and the
sub-list centres under it behind one short coral rule; a full-width
row with a left border fought the alignment of every other item.
Button padding is 9px so the target clears 24px.

THE FOOTER STILL SAYS COURSES, not Shop. A footer lists destinations
and "Shop" has none.

## Course page: Build Your Marketing Foundation (2026-08)

`course-marketing-foundation.html`, served at
`/courses/build-your-marketing-foundation` by a 200 rewrite in
`_redirects`. That path had been a TEMPORARY 302 back to courses.html
since July; the redirect is now a real page and the note is gone.

THE PAGE SAYS "COMING SOON" BEFORE IT SAYS ANYTHING ELSE. The chip sits
above the h1, and the Courses card carries the same chip. "Available
courses" became "The first course" — one course that is not buyable yet
does not make a list of available courses.

EVERY FACT ON THE PAGE WAS ALREADY PUBLISHED: eight modules, about
three hours, self-paced, the Marketing Foundation Map, the audience
sentence, and the three stages (get found, get chosen, be remembered).
The "Who it's for" bullets are drawn from the Services panel copy, which
is hers. The three outcome lines under "What you'll be able to do" are
the one thing on the page written rather than quoted — they are honest
readings of her three stage names and are marked `{{ADJUST}}` for her
confirmation, along with the eight module titles, the price and the
launch date.

ROOT-RELATIVE PATHS ARE NOT OPTIONAL HERE, AND THIS SHIPPED BROKEN
ONCE. The page lives at a NESTED url, `/courses/build-your-marketing-
foundation`, so a relative `styles.css` resolves to
`/courses/styles.css` and 404s. It went live with relative paths and
rendered as unstyled Times New Roman with blue underlined links — no
CSS, no JS, and every nav href pointing into a `/courses/` directory
that does not exist. All 35 internal references are root-relative now,
the same rule the shared footer comment already states for 404.html.
ANY future page served from a nested path must do the same, and the
check is not "does it look right locally" — a flat local server hides
the bug completely. Serve it at the nested path and watch for 404s.

NO NEW DEVICES. Editorial hero variant A, headline-left/body-right
sections, one quote banner, hairline lists, the existing capture form.
The cover is the same real-text block as the Courses card, not a raster.

NOTE, PRE-EXISTING AND NOT INTRODUCED HERE: `main.js:402` opens the Shop
dropdown on load whenever the current page sits inside it, so the menu
renders as a permanently open panel over the hero on Courses and on this
page. Deliberate — it shows the visitor where they are — but it reads as
a stuck menu. Flagged to Amber.

### Courses hero: the learning cycle (2026-08)

A hairline ring with four quiet colour arcs behind it, four fixed
numbered labels, and ONE marker crawling a lap every 26 seconds, plus
an almost invisible 9s breath on the ring. Nothing else moves.

THREE VERSIONS WERE BUILT AND TWO WERE WRONG, and the reasons are worth
keeping. First: an 88px band with the labels inside it — a soft donut,
and round caps on a stroke that thick turned the overlaps into amoebas.
Second: the labels made to orbit with the ribbon, at Amber's request.
That one taught the real lesson — WHEN THE LABELS MOVE, THE SEQUENCE
STOPS READING. Learn, Apply, Reflect, Refine only appear in order for a
moment every 40 seconds, and the order is the entire content of a cycle
diagram. Labels stay put.

BOTH FINAL CANDIDATES CARRIED A NAMED RISK: a ring with a travelling
dot can read as a loading spinner, a horizontal four-segment track as a
business-process diagram. The ring wins because it can be executed out
of its trap — a spinner is fast, uniform, and IS the moving part, while
here the colour and the numbered labels are the graphic and the marker
is only position. A stepped marker on a horizontal bar is a progress
bar and the stepping is itself the idiom.

THE LABELS SIT INSIDE THE RING, in the negative space. Outside, they
floated at the edges of the box a long way from the arc each one names,
and the graphic read as a diagram with callouts. Inside, each word sits
against its own colour and the whole thing reads as one object.
Their x positions are tuned, not guessed: at 3 and 9 o'clock a
horizontal word runs straight at a vertical band. 292 / 110 overlapped
the ring by 2.3 and 3.9 units; 282 / 120 clears by 7.6 and 6.0.

`offset-path` IS WHAT MOVES THE MARKER. An earlier mockup animated
`offset-distance` with no `offset-path` declared, which does exactly
nothing — the dot sat still through the whole review and nobody could
have told from a screenshot. Verify travelling elements by sampling
position over time, not by looking at a frame.

## Courses page (2026-07, rebuilt as a library)

`courses.html`, `/courses` via `_redirects`. Reached from the nav's
Shop dropdown; the footer links it directly.

IT IS A COURSE LIBRARY, NOT A SALES PAGE. Amber, July 2026: "the
current page contains too much explanation about Build Your Marketing
Foundation." The first build was ten sections and 6491px; this one is
five sections and 2243px, 2525px on a phone. EVERYTHING THAT EXPLAINS
A COURSE BELONGS ON THAT COURSE'S OWN PAGE — the framework, the seven
foundations, the outcomes list, the audience columns, the instructor
biography, the workbook spreads and the lesson screen all came out and
belong at `/courses/build-your-marketing-foundation`.

The page answers four questions and stops: what kind of courses does
she make, what is available now, what is coming, where do students log
in.

1. HERO. Text-led, same shape as every other page head. No eyebrow, no
   collage, and NO FULL-WIDTH CTA BEFORE THE COURSES ARE SHOWN. The
   student login sits under the lede as a plain link.
2. AVAILABLE COURSES. `.crs-grid` is `repeat(auto-fill, minmax(300px,
   1fr))` — one card sits in one column and the next two drop in with
   NO redesign. A single card stretched across 1120px would have to be
   undone the moment a second course ships. Verified by cloning the
   card twice: three cards fill the row cleanly.

   **THE COURSE COVER** (`.crs-thumb`) is THE ONE DARK SURFACE on a
   very light site, and that is its whole job: contrast without noise.
   - **Warm plum, never black and never a jewel tone.** The gradient
     runs #3A2E3E → #2C2331 → #241D28: the site's charcoal pulled
     toward the lavender already in the palette, so it reads as the
     same family rather than a second brand.
   - **The course name leads**, in the display serif, sentence case,
     left-aligned, two lines. The Marketing Foundation Map is a tool
     inside the course, NOT the product — it never becomes the title.
   - **One track split three ways**, coral / lavender / gold, with
     "get found · get chosen · be remembered" beneath. THE SEGMENTS
     TOUCH ON PURPOSE: three separated blocks would say "three
     things", one divided track says "one system", which is the
     argument the course makes. No icons, no logo, no monogram, no
     name, no explanatory line.
   - **BUILT IN HTML AND CSS, NOT AN IMAGE.** Real text: crisp at any
     size, responsive, and the next course is a two-string swap. It
     carries `aria-hidden="true"` because every word in it repeats as
     real content directly below — the card heading is the accessible
     name, and announcing the cover too would just stutter.
   - 4:3, and it BLEEDS to the card's own rounded corners. The padded
     white sheet that used to hold the cover read as a card inside a
     card (Amber, July 2026).
   Measured on the cover: title 11.4:1 against the lightest gradient
   stop, 14.6:1 against the darkest; stage labels 7.6:1 and 9.8:1; the
   three segments 5.7-8:1 as non-text marks.

   THE METADATA IS A DEFINITION LIST, not a bullet run: label and value
   in two aligned columns, so four facts scan as a spec.
3. COMING SOON. Three topic markers on lavender hairlines —
   Marketing systems · Working smarter · Leading the work. NEVER
   placeholder cards, NEVER an invented course name. The email capture
   is included because it genuinely posts (Netlify Forms,
   `course-updates`, the same form Services uses); omit it on any page
   where it does not.
4. TEACHING PHILOSOPHY. Two sentences and a link. Not feature cards,
   not a biography.
5. STUDENT LOGIN. A compact utility close on the raised surface,
   deliberately quieter than the course above it.

NOT A SEPARATE COURSE BRAND: same cream, same serif heads, same coral
CTA, same hairlines, same container, same 134/208 rhythm. No
ecommerce styling, no gradients, no giant tiles, and handwritten
annotation appears exactly once, inside the cover.

DIVERGENCE FROM THE SITE PATTERN, and it is deliberate: Courses is the
ONLY page with no closing `.cta-band` and therefore only one tab
emphasis instead of two. Her structure ends on the student-login
utility, and a "let's talk" band on top of it would be the sales
funnel the brief rules out. `.crs-login` is the closing band in
everything but name. Flagged to her.

STILL BLOCKED: `/courses/build-your-marketing-foundation` does not
exist and two CTAs point at it (the card title and the View course
button). `_redirects` 302s it back to `/courses.html` so nothing 404s,
marked TEMPORARY. `learn.amberfugedi.com` is not live yet either.

## SEO baseline (2026-07, re-audited 2026-08 across nine pages)

2026-08 RE-AUDIT. Nine pages checked against every rule below, plus
alt text, heading order, SVG labelling, link text, internal links and
fragment targets. FOUR REAL FAILURES, all fixed:
- og:description and twitter:description were 90-100 characters on My
  Approach, Services and About. The `<meta name="description">` on
  those pages was in band, so the drift was invisible unless you
  checked the social tags separately. They are 141-146 now.
- The 404 description was 118, two under the floor. Now 145.
- Sitemap lastmod was stale on five entries. Stamped — and only on the
  five whose files actually changed; Home and Work still read
  2026-07-28 because they genuinely have not.
- The pretty course URL was added to the sitemap when that page shipped.

TWO THINGS THAT LOOK LIKE FAILURES AND ARE NOT, so nobody "fixes" them
again: the Projects lightbox `<img>` has no width/height because it is
built by JS and sized by whichever image opens, and it carries an empty
alt from creation which is replaced on open. And an audit that checks
`aria-hidden` on the `<svg>` itself reports 25 false positives — every
decorative graphic on the site inherits it from an ancestor. Walk the
ancestors.

Verified clean: 110 unique internal links all resolve, no broken
fragment targets, one h1 per page, no heading-level skips on any page,
every `<img>` carries alt, titles and descriptions all unique.

### The rules (keep every page inside these)

Verified across all seven pages. When a page is added or a headline
changes, re-check these, because they drift silently.

- **ONE h1 PER PAGE**, no heading-level skips. Confirmed on all seven.
  The h1 is the page's real headline, never the logo.
- **TITLE ≤ 60 CHARACTERS** so Google stops truncating it. Three were
  over (Services 69, How I Work 69, About 67) and were rewritten. The
  pattern is `Subject — Qualifier | Amber Fugedi`.
- **DESCRIPTION 120-160 CHARACTERS.** Five of six were over; Projects
  was 327, a keyword dump listing all six clients. All rewritten into
  the 134-152 band. Every one is unique and names Connecticut or a
  real client outcome, never both at length.
- **CANONICAL on every page**, including 404.
- **404 IS `noindex`** and carries a description and canonical anyway,
  so a shared broken link is not a blank card. It has no OG tags on
  purpose — a 404 has nothing to preview and no JSON-LD.
- **OG + TWITTER on all six indexed pages**, with `og:image:alt`,
  `og:image:width` 2400 and `og:image:height` 1260 (og-image.jpg is 2x
  the recommended 1200x630, which is correct for retina). SOCIAL
  TITLES ARE ≤ 65 CHARACTERS — separate from the `<title>` limit,
  because previews truncate shorter. Expertise was 82 and Projects
  repeated the word "Projects" twice; both fixed.
- **JSON-LD (Person + ProfessionalService) parses on all six indexed
  pages.** 404 has none, correctly.
- `lang="en"`, `charset`, `viewport` and `theme-color` on all seven.
- `robots.txt` allows everything and points at the sitemap; the
  sitemap lists the six indexed pages and excludes 404. STAMP
  `lastmod` when a page changes — it was three days stale at audit.

### Alt text rules
- **Every `<img>` carries an `alt`.** Decorative images take `alt=""`:
  the brand mark on all seven pages, and the lightbox's image before
  one is set.
- **Photographs of Amber describe the picture AND say who she is**,
  because that is what makes the alt useful to a screen reader and to
  image search at the same time. "Amber Fugedi" alone was the alt on
  two portraits and is not enough. The model: *"Amber Fugedi,
  marketing consultant in Connecticut, seated in a sunlit studio in
  front of a wall of pinned reference images."*
- **125 CHARACTERS IS THE CEILING.** The How I Work desk photo ran
  207 and was cut back.
- **NEVER open with "Image of" or "Photo of."**
- **DRAWN ARTWORK USES `role="img"` + `aria-label` ON THE SVG**, not an
  alt. The four working documents on How I Work each describe their
  own marks, because the annotations are the argument. Purely
  decorative SVG takes `aria-hidden="true"` — there are 12 on
  Services, 4 on Projects, 1 each on Home and How I Work.
- The lightbox `<img>` has no `width`/`height` and an automated check
  flags it for layout shift. IT IS NOT A CLS RISK: it lives inside a
  `<dialog>` sized by `max-height`, so nothing on the page moves. Do
  not "fix" it by hard-coding dimensions that would break the fit.

## Colour coding and the one bullet language (2026-07)

**COLOUR MEANS SOMETHING ON THIS SITE, AND IT ONLY MEANS ONE THING PER
SET.** Two coded sets exist and they do not overlap:

- **The three OFFERS** (Services, and their cards on Home): peach/gold
  = Courses, lavender = Workflow & AI, blush = Consulting. The accent
  runs through the glyph, the bullet marker and the aside tint.
- **The four EXPERTISE CHAPTERS**: gold = Strategy, blush = Digital,
  lavender = Operations, coral = Leadership. Carried by the 2px rule
  above each chapter and by its capability markers. NO NEW ELEMENTS —
  four typographically identical chapters read as a list, four coded
  ones read as four kinds of work. Operations takes lavender
  deliberately, rhyming with the Workflow & AI offer it shares subject
  matter with.

Amber, July 2026, on why Services felt resolved: it is not the leanest
page (Courses is 151 words, Services 440) — it is THE ONLY PAGE WHERE
COLOUR CARRIES MEANING. That system is the transferable thing, not the
styling.

WHAT DOES NOT TRANSFER: `.offer-aside`, the tier-chip / who-it-is-for /
next-step rail. It works because Services is SELLING. Expertise
organises knowledge, Projects proves work, How I Work explains
thinking — none has a next step per section, so an aside there would be
furniture with nothing to hold. Do not add one.

### One bullet language

**AN OPEN RING: a pale fill inside a deep 2px border, in the local
accent.** The only marker on the site. Used by the Services offer
points, the How I Work hands-on list and the Expertise chapter
capabilities.

Amber chose it over a 12x2px rule (July 2026) after seeing both. It
reads as a marker BELONGING TO its item rather than a dash sitting
beside it, and it holds its own at the start of a wrapping line where a
2px dash nearly disappears.

**BECAUSE IT IS OPEN IT DOES NOT COLLIDE** with the two places a circle
already means something: the FILLED coral dot marking the current page
in the mobile menu, and the filled terminal dots that end strokes in
the line-art glyphs. Open ring = list item. Filled dot = a mark. Keep
that distinction.

SIZE SCALES WITH ITS TEXT, the shape does not: 15px against the
Services offer points (0.98rem), 13px against the How I Work hands-on
list (body), 12px against the Expertise capabilities (small). Border
stays 2px throughout, and `box-sizing: border-box` keeps the outer
diameter honest.

COLOUR IS THE LOCAL ACCENT, pale fill + deep border:
peach/courses-deep, lavender/automations-deep, blush/consulting-deep on
Services and the matching Expertise chapters; a 30% coral fill with
coral-deep border where there is no section accent.

If a new list needs a marker it takes this one. If it genuinely will
not work, change it everywhere or not at all.

## Accessibility floor (hard requirements)

- All text ≥4.5:1 on its actual background (see token table).
- Coral/pastels never carry meaning as text — use `-deep` tones.
- Links underlined or weight-differentiated, never color alone.
- Visible `:focus-visible` rings (2px `--coral-deep`).
- Skip-to-content link on every page; single `<h1>` per page;
  semantic `<nav>/<main>/<section>/<article>`; descriptive alt text.
- Touch targets ≥44px on mobile.

## Provenance honesty rule

The site is both a consulting pitch AND a portfolio of in-house
work. Never imply an employer was a client: case studies and
teasers carry an explicit relationship tag ("Consulting client
since 2018" / "Freelance client" / "In-house · <title, years>").
The hero company-name strip was removed 2026-07 at Amber's request;
the industry breadth lives in the TRANSITION BAND (`.bridge`):
eyebrow "The work changes. The goal doesn't." + a sans line naming
the industries, on a soft white veil with hairline borders —
static, quieter than the hero. SITE-WIDE and CENTERED, at each
page's BIGGEST MID-PAGE SEAM, never stacked against the dark CTA —
home: problem -> Selected Work; services: between the guidance and
consulting offers; work: in-house -> client work; capabilities:
capability areas -> platform stack; about: career story -> kind
words. THE BANDS ARE AMBER'S CREDO LINES (her words, 2026-07 —
verbatim, exempt from mechanical rewrites), one statement per
page, NO EYEBROW anywhere (the "work changes / goal doesn't"
refrain is retired from the bands):
home "Good marketing starts with what will have the most impact."
· services "The right support depends on what the business is
trying to achieve." · work "The strongest work connects the
strategy to the details that bring it to life." · expertise
"AI should give teams more time to think strategically, not just
more ways to produce." · about "My title has changed. What I love
most is still figuring out what will move the business forward."
· how i work "If a recommendation makes the week heavier, it is
probably the wrong recommendation." (Amber chose this one in
July 2026, promoting it out of a margin annotation: "this should
be the banner quote". The placeholder line it replaced is gone,
so every band on the site is hers again.)
The statement reads at BODY scale (like all ledes, per Amber —
a brief small-scale experiment was reverted same day), 60ch
centered. When the band leads into a band-white section
the doubled hairline collapses (.bridge + .band-white).
Center-aligned like the dark CTA band; bands center, content
sections stay left-aligned. The
eyebrow is the FIXED refrain (never varies); the supporting line
is page-aware (Amber, 2026-07): home = industries breadth,
services = formats shaped around the need, work = same question
five ways, expertise = functions pointed at one outcome,
about = career arc with one constant. Keep each line one thought,
under ~140 chars, no em dashes. Company
names appear only inside case studies where the relationship tag
gives them context. Never add a "trusted by" logo strip.

## Site structure

- Six plain HTML pages, no framework/build: `index.html`,
  `services.html` (offer ladder + sticky anchor nav),
  `my-approach.html` (what an engagement is actually like),
  `projects.html` (case studies: challenge → approach → impact),
  `expertise.html` (core expertise -> results -> breadth -> platforms),
  `about.html` (bio, career story, team testimonials, education, contact
  + email capture). Home also carries a three-quote testimonial
  section; quotes are real, transcribed from the previous site and
  Amber's LinkedIn recommendations — never invent or edit beyond
  trimming whole sentences.
- Shared `styles.css` + `main.js`. Nav/footer duplicated per page inside
  `<!-- SHARED NAV/FOOTER — keep in sync -->` comment blocks; only
  `aria-current="page"` differs. NAV ORDER is the visitor's
  sequence, not alphabetical: Services (what I offer) -> How I
  Work (what it is like) -> Work (proof) -> Expertise (depth) ->
  About (who) -> Let's talk. All six navs and all six footers are
  written from one generator block; if they ever drift, rewrite
  them together rather than patching one.
- Placeholders: `{{PLACEHOLDER: …}}` = real data needed;
  `{{RESULT_n}}` = case-study outcomes; `{{ADJUST}}` (HTML comments) =
  copy Amber wants to tune. Never delete unresolved markers.

## Page overrides

None yet. Create `design-system/pages/<page>.md` only when a page must
deviate from this Master.

## 2026-07 review edit pass (reviewer brief, executed)

- Home: eyebrow "The problem" -> "Where I help"; PERQ leads the
  Selected Work cards (current role first), then Scanoptics,
  MembersFirst.
- Work builds: SIX featured (Build Your Marketing Foundation, PERQ
  Brand Book, Conference Tarot Draw, Conference Scavenger Hunt,
  MembersFirst Content Engine, The Log) then an "More things I've
  built" eyebrow divider with the remaining four — non-AI work
  leads the sequence deliberately; AI tags softened ("Product",
  "Content system"). Implementation trivia stays out of card copy
  (the atomic-counter clause is gone).
- Capabilities: "Also in the kit" -> "Additional experience. /
  Capabilities I draw on when the work requires them."; tools cut
  to four core cards + "Additional platform experience available
  on request." (.stack-note); the LLM proof line now says
  search-focused improvements "contributed to" the 27-position
  gain (no causal overclaim).
- Services: Workflow & AI bullets are parallel verbs (Review /
  Identify / Find / Improve / Create / Recommend); the course
  email capture (#updates) moved here from About's contact area
  into the Courses aside, replacing the "Get course updates"
  button.
- About: quotes curated to FIVE per set (Andy Lee and Andrei
  Severin removed, never edited); "Scan-Optics" role lines
  normalized to "Scanoptics" — SETTLED July 2026, Amber confirmed
  the unhyphenated spelling. All 12 instances stay as they are. Contact area now holds
  only the form.
- Header mark: 22px desktop / 19px mobile (was 30/26) so the tile
  reads clearly smaller than the name block, per review.
- Marquee accessibility (verified, not changed): clone sets carry
  aria-hidden="true", quotes contain no focusable elements, and
  the marquee has a pause toggle.

## Font census (2026-07 audit — keep it this clean)

Mechanical audit of every visible text node, all six pages, 390
and 1440: every element sits on a token. Fixed in the audit: the
offer-aside "who" lines and the Work impact lines were the last
SERIF paragraphs (both now Manrope 600 — serif belongs to
headings, card titles, and the brand only); inline CTAs, form
controls, and the kit list joined body; the skip link and
capability stat labels joined small; the marquee toggle and
Challenge/Approach/Impact labels joined eyebrow; dead kicker CSS
removed. SANCTIONED OFF-TOKEN SIZES (do not "fix"): the hero
subhead (15 -> 17.5), the desktop hero proof hierarchy (stats
2.45/1.52/1.24rem, labels 0.95/0.9/0.84rem — PERQ dominant by
design), the phone proof chips (0.95rem stats, 0.8rem labels),
the capability feat-stats (3.1/2.4rem), and the brand name
(25/22). Everything else must resolve to
h1/h1-long/h2/h2-long/h3/intro/body/small/eyebrow. Re-run the
census (scratchpad fontaudit) before shipping type changes.
Added July 2026 with How I Work, all on token: the notebook
questions and outcome titles at intro, its prose and margin notes
at body, its panel labels at eyebrow. Expertise, after the calm
rebuild, sits almost entirely on the shared scale: row and
category titles at intro, every descriptor at body, the tools
line and company note at small. Only two grades there are
off-token, both deliberate: the result figures and `.craft-line`,
which shares the pull-quote grade with How I Work. TWO further sanctioned
exceptions from that page: the pull-quote grade (24.8 -> 36,
between h2 and h3) and the margin note, which is the site's only
serif-ITALIC paragraph — everything else serif is still a
heading, a card title, or the brand. Verified ladder at 1440:
64 h1 > 44 h2 > 38 h2-long > 34.9 quote > 30 h3 > 28 breadth >
25 brand > 21 intro. Re-verified 2026-08 after the h2 step-down:
64 h1 > 50 h1-long > 40 h2 > 35 h2-long > 34.9 quote > 30 h3 >
28 breadth > 25 brand > 21 intro. Re-verified again after the h1
was unified at 50: 50 h1 > 40 h2 > 35 h2-long > 34.9 quote > 30 h3
> 28 breadth > 25 brand > 21 intro. Two things to watch. The quote
grade and h2-long sit 0.1px apart — harmless because they never
appear together, but separate them at the next change to either.
And the whole ladder below 17px is crowded: a sweep of nine pages
found seventeen distinct grades in use, six of them between 14.8
and 17px. Body 17 / small 15 / eyebrow 13 are the real ones;
anything landing between them is a one-off worth folding in.

## Section rhythm (2026-07 spacing audit — two values, site-wide)

Content-to-content gaps between consecutive blocks, uniform on
every page (measured, not assumed — rerun scratchpad spacingaudit
before shipping spacing changes):
- Section <-> section: 208px desktop / 96px phone (104 desktop /
  48 phone section padding; Amber tightened the phone rhythm a
  second time July 2026 — screenshots of the 128px seams around
  sparse content, "here are some big gaps"; the old
  Selected-Work->Why-Me 72px phone seam stays retired).
- Band seams: 157/89 on BOTH sides of every transition band
  (bridge padding 52px desktop / 40px phone, symmetric; bands are
  interludes and sit deliberately tighter than full section
  rhythm).
- The dark CTA card joins the section rhythm (104 desktop both
  sides; phone 48 top / 64 bottom against the footer).
- Page-head -> first section: 134/72 (capabilities, about); on
  services and work the sticky anchor bar sits in that seam, and
  the section directly under a bar takes reduced top padding
  (74/48 via `.anchor-nav + section` — Amber tightened the
  tab-to-title gap ~28% 2026-07).
- GUARD: `.wrap > :last-child` and `.page-head h1:last-child`
  carry margin-bottom 0 so trailing margins never leak into
  seams (this was skewing two seams by 20-22px).
- SANCTIONED variance: hero -> problem on home is
  viewport-proportional (the hero keeps min-height 72dvh air) —
  ~217px at 900px viewport height; do not pin it.

## Projects page framing (renamed from Work, 2026-07)

CASES ARE DISCLOSURES (July 2026, Amber: "the page is asking people
to scroll through a full case study for every tab... let someone skim
all of your work first, then choose where to go deeper"). Each case is
a native `<details>`; `<summary>` is the whole preview row, not an
icon, and carries the tag, the name, a one-line SCOPE, the IMPACT LINE
and a thumbnail strip. Her rules, all implemented:
- the impact summary stays VISIBLE while collapsed but reads at BODY
  weight in BODY ink, not coral 600 (Amber, July 2026: as the loudest
  element it was the first thing the eye landed on, ahead of the
  project name). The collapsed line is ONE SENTENCE with no metrics;
  the numbers and the full statement wait for the open view. It MOVES
  to its proper place after Approach once the case opens (Amber, July 2026), so an open
  card reads challenge, approach, impact in order. Implemented as two
  copies with the hidden one on `display: none` — that takes it out of
  the accessibility tree so nothing is announced twice, and it survives
  with JS off, which a node move would not;
- NO IMAGES IN THE COLLAPSED CARD. The thumbnail strip is retired
  (Amber, July 2026: "very small, don't communicate much, and make the
  card feel busier"). It was her own earlier rule and the lightbox is
  what changed it — the work is now one tap away at full size, so a
  row of stamps bought nothing and cost about a third of the card's
  height;
- the label reads "Read case study" / "Close case study", never a bare
  plus and never "View project" — it should invite someone into the
  story rather than describe a widget expanding. The chevron stays a
  DOWN arrow, not a right arrow: the label can be editorial but the
  affordance has to stay honest about opening in place;
- the COLLAPSED TAG carries the INDUSTRY ALONE ("Financial Services",
  "MarTech"). `.case-rel`, the first line of the open body, carries
  the ROLE AND TENURE for in-house cases only — "Director of
  Marketing · 2021-2023". THE "CLIENT SINCE" LINES ARE GONE from
  client cases entirely (Amber, July 2026), and the provenance rule
  now rests on two other things for them: the section they sit in
  ("Stepping in where growth gets stuck", whose lede is "Sometimes
  businesses need another team member. Sometimes they need another
  perspective. Often, they need someone willing to do both.") and
  their own prose. MembersFirst says "ongoing consultant", Robert
  James says "nine years into the relationship", and A2 opens on "a
  small pressure washing company" — someone else's company, plainly.
  KEEP IT THAT WAY: the risk the rule guards against is an EMPLOYER
  reading as a client, which is why the in-house role line stays and
  the client one did not need to;
- desktop opens the FIRST case in each chapter, phones start every case
  CLOSED (main.js, evaluated once at load);
- a case linked to directly (`#perq`, and every in-page anchor from
  home) opens itself, or the link would land on a closed row;
- the collapsed card is tighter than the open one — 16px radius and
  ~22-32px padding collapsed, the full 24px/40px when open, via
  `.case:has(.case-d[open])`. The hover lift is a preview affordance
  and is cancelled once the case is open.
Scope lines are CONDENSED FROM each case's own Approach copy, never
invented. PERQ is the only case whose impact runs past a preview line,
so its first sentence previews and the rest lives in the open state;
every other case shows its whole impact collapsed. The open grid
always carries the FULL impact in its third column, so `.case-cols`
stays auto-fit and simply resolves to three.
Measured: the phone page fell from 9297px to 6112px.

ASSETS OPEN IN A LIGHTBOX (July 2026, Amber's idea: "is it a
clickable asset link that shows the assets in a window pop up").
That is what solved a problem four crop treatments and three
placements could not: the client's material never has to share a
surface with the cream editorial layout. MembersFirst blue,
watermelon clip art and NCUA compliance text read as a foreign
object on this site at ANY size, and every treatment that made
them larger made the clash louder. In their own window, on the
site's warm ink backdrop, they are simply shown — full size, where
they can actually be read.
Built on native `<dialog>` + `showModal()`, which gives focus
trapping, Escape and focus restore for free. VERIFIED: `:modal`
true, focus lands inside, focus returns to the trigger on close,
backdrop click closes, arrow keys page a gallery, counter is
`aria-live`, and the page behind is scroll-locked.
EVERY TRIGGER IS A REAL `<a href>` to the full asset, so with JS
off a click opens the image and modified clicks still open a new
tab. Single-item galleries hide the arrows and the counter.
THE OPEN CASE DOES NOT PREVIEW ITS WORK. It offers a NAMED LINK
instead (Amber, July 2026: "an asset link that doesn't preview
the pics but when they click it they can see the images"). The
label says what the thing IS, AND NO MORE THAN IS TRUE. "See the
website" and "See the signage" name their artifact exactly.
MembersFirst reads "See some of the work", NOT "See the campaign
creative": those three pieces span different campaigns across
eight years, so calling them one campaign was a small lie (Amber,
July 2026). Name the artifact when you can, generalise when you
cannot. Never a count; "3 pieces" was tried and cut. A lone link carries the rest of its gallery in a
`data-more` JSON attribute, which is the second of the two ways
`collect()` builds a group. The small thumbnail strip stays in the
COLLAPSED preview only, which is a different job: it tells you a
case has work attached before you decide to open it.
The full-size files are separate from the page thumbnails
(`full-*.webp`, ~1180-1400px) so the page never downloads what it
does not show. NEW INTERACTION, added to the closed motion budget
deliberately: a 0.2s hover transition on the chrome, nothing else,
and none of it under reduced motion.
The DETECTOR reads literal `<img>` inside JS strings and even
inside code comments as a broken image — build the element with
`createElement` and describe it in prose.

CASE ARTIFACTS (added July 2026, from assets Amber supplied): each
client case can close on a `.case-art` row — a short row of small
real pieces on a hairline, plus a one-line caption. NEVER a
gallery. Images are sized by HEIGHT (200px desktop / 132px phone)
so a row of portrait flyers and a row of landscape screenshots
both line up without per-case rules. Live now: Robert James
Restoration (two site screenshots, "Brand and website, built and
maintained."), MembersFirst CT FCU (three campaign flyers,
"Campaign creative for member growth and product promotion."),
A2 Exteriors (the yard sign, "Brand applied to signage." — the
case copy already named yard signs, so the image lands on its own
sentence). Total added weight 320KB across seven webp files.
OTHER WEBSITE CLIENTS is a LABELLED LIST, not cards. `.more-sites`
closes the Consulting chapter with an h3 at card-title grade, "Other
websites I've built", over a two-up (one-up on phone) list of rows
on hairlines: the same uppercase `.case-tag` the cases above use,
then the client name as an `.art-open` trigger carrying its own
gallery in `data-more`. Live: Andrea's Bridal and Alterations
(Bridal Retail — home, about) and Nutmeg Technologies (Technology
Services — home, services). THE FIRST PASS RAN THEM INLINE in one
sentence, "Websites also built for X and Y.", and the stray "and"
and full stop broke onto their own lines (Amber, July 2026: "the
isolated 'and' and period create awkward line breaks … that will
look more intentional and make both projects feel equally
credible"). The industry tag is what buys the intention: it ties
the pair to the card pattern above without giving them cards.
This is the right weight
for a client with no case study: the work is visible, the page
does not pretend there is a narrative behind it, and no screenshot
sits on the page "only because it fills space". A client only
graduates to a real case when Amber supplies challenge, approach
and outcome — never guesses. AWAITING ASSETS: Ostara Solar, named
by Amber but with no screenshot in the repo. Nothing about it
ships until she sends one.

The page is `projects.html` (Amber, July 2026: "update work to
projects"). "Work" is retired as a PAGE NAME from the nav,
footers, title, h1 and sitemap, and `_redirects` 301s
`/work.html` alongside the older `/capabilities.html` rule. The
h1 became "Projects shaped around different needs." and keeps its
blush tab. THE WORD "WORK" STAYS IN PROSE — it is central to her
voice ("Explore selected work", "the work is where it becomes
real", "Explore the work behind the results", the home "Selected
work" section, and How I Work itself), and only the page's own
identity was renamed. Do not sweep the noun out of body copy.

Sections are organized by HOW AMBER CREATES VALUE, not employment
type — NO section eyebrows (Amber removed them 2026-07: the old
category words conflicted with the new names; the Work chapters
are the one sanctioned eyebrow-less sections, the tabs carry the
wayfinding). LEADING MARKETING IS CAPPED AT THREE CASES — PERQ,
Scanoptics, StormwaterONE, each carrying a published number
(Amber, July 2026: a longer in-house list "becomes redundant with
About"). Morris Controls was removed rather than relocated: she
confirmed it was in-house, so it could not move to the consulting
group, and it was the only leadership entry with no dates and no
metric. Its {{ADJUST}} for inbound/ranking numbers is retired with
it; the parked markup is recoverable from git history if it ever
earns a number. Titles "Leading Marketing" / "Helping Businesses
Grow" / "Things I've Built" (Amber restored the original third
name: "tangible, covers finished work") — each h2
followed by Amber's one-line philosophy as a standard section-lede
(her words, verbatim): "I enjoy building teams, brands, and
marketing functions that can grow with the business." / "Sometimes
businesses need another team member. Sometimes they need another
perspective." / "Curiosity has always shaped how I learn. These
projects are where I explore ideas, test what works, and build
something useful." The page-head lede: "Every project looks
different. The goal doesn't. From leading marketing teams to
building products of my own, the work reflects different ways of
helping businesses move forward." (Amber's final line, verbatim.) Anchor tabs read Leading /
Consulting / Building (Amber's short forms — one word each so
every anchor bar on the site shares ONE spec, no compact
variant); the bar keeps one row and swipes
horizontally on phones (scrollbar hidden); every anchor bar shares the
single base spec (small 15/14, padding 8px 18px desktop / 13px
10px mobile, gap 8px) — the compact variant is retired with the
short labels. Each tab takes its own
active color: coral wash / blush / lavender, and the first tab
starts active on load. The
MembersFirst case leads with the trust story: employee first, kept
as the consultant, working relationship in its eighth year (exact
employee-period dates pending from Amber). Consulting cases run
MembersFirst -> Robert James Restoration -> A2 Exteriors. The
Robert James case (added July 2026, client since 2017 — Amber's
scope: "Built a website and branding, manage social media and
review management, consulting on AI systems for biz"): brand +
website, then ongoing social media management, review management,
and AI-systems consulting; Impact has an {{ADJUST}} for metrics.
Because RJR dates from 2017, it — not MembersFirst — is the
longest-running client (About copy says MembersFirst "followed in
2018"; never call MembersFirst the longest). Case studies stay
visible on one page (challenge/approach/impact); separate
case-study pages wait until deliverable imagery and long-form
narratives exist. The full portfolio-redesign mock is parked in
the session scratchpad.

## Expertise page (renamed from Capabilities; rebuilt 5x by 2026-07)

`expertise.html`. "Capabilities" is retired from the nav, footers,
titles and sitemap; `_redirects` 301s the old URL.

THE PAGE STOPPED DRIFTING WHEN AMBER NAMED WHY IT KEPT FEELING OFF
(July 2026): **"Expertise: here's what I bring. How I Work: here's
what it looks like in practice. Projects: here's the evidence. Trying
to make one section do all three is why it keeps feeling off."**

- **Expertise** ORGANIZES HER KNOWLEDGE. A visitor lands here asking
  "what is she actually good at?" — NOT "how does she solve
  problems?" Those are different questions and they belong on
  different pages.
- **How I Work** shows the thinking. Anything that demonstrates
  PROCESS belongs there, including the four working documents that
  were built on this page and moved (see the How I Work section).
- **Projects** carries the proof.

Flow, after the fifth rebuild:
1. HEAD. Amber's headline verbatim: "I know how to find what's
   getting in the way of growth." She chose it over "Marketing
   expertise built through doing the work" because it positions her
   around BUSINESS PROBLEMS, not marketing skills. Butter tab on
   "growth." No eyebrow.
2. SIX CHAPTERS — the whole substance of the page.
   FOUR BECAME SIX (Amber, 2026-08): "the current categories are too
   broad and hide several important strengths." Strategy / Digital /
   Operations / Leadership became Strategy and planning · Demand
   generation · Brand and digital experience · Marketing and sales
   operations · Workflows and AI · Leadership and enablement. Demand
   generation came out from under Strategy, where it had been one word
   in a capability list; Operations split into the platform side (CRM
   migrations, lifecycle stages, pipeline reporting) and the workflow
   and AI side. Every situation line, capability list, contribution
   sentence and link label on the page is hers verbatim.
   THE NUMBERS ARE GONE. 01-04 were on this page's own standing remove
   list ("numbered items") the whole time; six rows made the conflict
   obvious enough to fix.
   TWO MEASUREMENTS DROVE THE LAYOUT. The title column went 0.62 ->
   0.86fr because the names are phrases now, not single words: at 0.62
   "Marketing and sales operations" broke three ways. Row padding came
   down 34/36 -> 28/30, which holds the section at 1067px instead of
   the ~1500px six rows would have run at the old rhythm. Content width
   is 1200px on this page only (`.page-expertise main .wrap`, her
   "approximately 1180-1240px"); nav and footer stay at the shared 1120
   so they still line up with every other page.
   SIX DESTINATIONS, NO TWO THE SAME: #perq, #scanoptics,
   #robert-james, #stormwaterone, #builds, #in-house. StormwaterONE
   carries the sales-ops link because its published case is the one
   with the MarTech migration in it.
   HISTORY — the four-chapter version. Amber, July 2026:
   "imagine four oversized words that dominate the page ... it becomes
   almost like reading chapters in a book. No cards. No icons. No
   feature grid. Just beautiful typography."
   STRATEGY · DIGITAL · OPERATIONS · LEADERSHIP, one word each. Each
   `.ch` is a full-width rule, then the name, then a two-column body:
   a short "when…" paragraph and the capabilities on the left, her
   contribution line and ONE project link on the right. That row
   anatomy survived the six-chapter rewrite unchanged.
   THE WORDS SIT AT `--fs-h3`, the card-title grade. They were built at
   `--fs-h1` and that was WRONG: 59px against a 47px h1 and a 41px
   section title INVERTED THE LADDER (Amber, July 2026: "they're too
   big"). The ladder now runs h1 47 > section h2 41 > chapter 29 >
   belief line 21 > body 17. A chapter name is a card title in
   function and takes that rung. PROMINENCE COMES FROM THE COLOURED
   RULE AND THE SPACE AROUND EACH BLOCK, not from size — that is the
   lesson: on this site, hierarchy is spacing and colour before it is
   type size.
   THE "FOR" LINE IS ONE CLAUSE, and it opens on "When", not "For".
   All four used to run "For businesses/teams that..." at 15-20 words,
   and four blocks in the same shape read as a form rather than a page
   (Amber, July 2026: "too much copy"). They are 9-11 words now and the
   page dropped from 344 words to 289.
   CAPABILITIES ARE HERS VERBATIM and deliberately short: 4/4/4/3, not
   padded to match. Sales enablement was dropped from Leadership with
   the old six-item lists; it is real and published elsewhere, and
   putting it back is a one-line change if she wants it.
   THE STAGGER: chapters 2 and 4 step right (7% / 14%), following her
   own sketch. The RULES stay full width while the CONTENT moves,
   which is what keeps the indent from reading as a broken margin. It
   goes entirely at 760px, where an indent reads as a bug.
   NO SCROLL-EXPAND. She imagined each chapter expanding on scroll;
   the motion budget is closed and a scroll-driven reveal is a new
   device, so the chapters are static and use the existing `.reveal`.
   Raise it with her before adding one.
3. QUOTE BANNER (her AI line, unchanged) as the chapter seam.
4. TOOLS I'VE WORKED IN, COLLAPSED. Her sentence first — "Tools are
   useful, but they are rarely the strategy." — then a `<details>` over
   NINE groups in a 3x3 grid (Amber supplied a full inventory 2026-08;
   it was six groups before). NO LOGO WALL, EVER (Amber: "it would make
   the page feel more junior and software-focused than you are").
   NINE, NOT EIGHT, AND THAT IS THE POINT. Her list came in eight
   groups, which resolves to 3+3+2 in the existing 3-column grid.
   Splitting ZoomInfo, ALN and CoStar out into "Data and prospecting"
   makes nine, which fills three even rows AND fixes the grouping:
   she had filed them under "Webinars and Communication", almost
   certainly because ZoomInfo reads like Zoom. They are data and
   prospecting databases. No CSS change was needed for any of this.
   HOUSE STYLE APPLIED, CONTENT UNTOUCHED: group names go sentence
   case (the site never uses Title Case), "&" becomes "and", "MS Teams"
   becomes "Microsoft Teams", and category phrasings like "Paid Social
   Ads (LinkedIn, Meta)" and "SEO Tools (SEMrush)" become the product
   names the rest of the list uses. Brand casing is the brand's:
   VBOUT, SEMrush, Business Wire.
   DROPPED WHEN HER INVENTORY REPLACED THE OLD SIX GROUPS, flagged to
   her and restorable in one line: Elementor, Storylane, Notion, Wrike,
   PandaDoc, Calendly, Microsoft Forms, Claude, and "custom workflow
   tools". Claude is the notable one.
   STILL MISSING: a SQL editor she could not name. Left out rather than
   guessed at.

5. THE BRIDGE TO PROJECTS, "See the expertise in action." over
   `.work-strip`. NO SECTION LEDE: it said "real work across different
   industries" two sentences above a coda that said "the work spans
   SaaS, financial services..." — the same idea twice. The coda stayed
   because it names the industries; the lede went. — three FULL-WIDTH ROWS on hairlines at a 60ch
   measure. Deliberately quieter: titles stay INK, coral only on the
   arrows and the closing link. The whole row is the target and
   `.ws-arrow` is a flex ITEM (`flex: none`) so it cannot strand
   itself when a title wraps. Hover is a 3.5% warm tint plus a 3px
   arrow nudge; `:active` deepens to 6%; the nudge is off under
   reduced motion. The industries line survives ONLY as small context
   beneath the strip, one sentence.
6. CLOSING BAND. "Not sure what kind of help you need yet?" with
   `Start a conversation` primary and `See how I work` ghost — the
   first CTA on the site pointing at How I Work, which is correct now
   that the three pages have distinct jobs.

THE STANDING REMOVE LIST for this page (Amber, July 2026): company
logos · client duration or tenure · long industry lists · multiple
rows of small capability cards · a permanently visible software grid ·
detailed mini case studies · numbered items · "full-service",
"end-to-end", "results-driven" · anything that sounds like she offers
every marketing service to everyone. AND: any section whose subject is
HOW SHE THINKS. That is How I Work's page now.

THE NUMBERS ARE GONE FROM THIS PAGE. 115% / 120% / 95% / 36% live in
their Projects case studies, About, and the home proof strip.

FIXED 2026-08 (Amber: "the font for Where I help and the section
beneath are not following brand guidelines, esp on desktop"). Three
values on this page existed nowhere else on the site. Found by scanning
every Newsreader element on all seven pages and grouping by size and
weight — the outliers fall out immediately and no judgement is needed:

  34px/500  "Where I help" (`.ch-title`)   -> 44px/500, the h2 grade
  30px/500  `.ch-word`, `.pr-head`         -> 30px/600, the h3 grade
                                              (`.xp-company` was the
                                              only other 30px display
                                              element, at 600)
  21px/400  `.ch-line`                     -> 21px/500, the display
                                              weight used site-wide

`.ch-title` is deleted, not just unused: it was a single-purpose 28-34
clamp on one heading. The ladder concern it was invented for was
already solved upstream — h2 was stepped down from 50 to 44 precisely
so it clears every h1 including the long-display pages, so 50 > 44 is
the sanctioned step and needs no extra grade.

RUN THE SCAN, DON'T EYEBALL IT. Reading the CSS would not have caught
any of these: each rule looked reasonable on its own, and the drift was
only visible against what the rest of the site does.

2026-08 REDESIGN, AGAINST A COMP AMBER APPROVED ("this feels closer").
Three changes, and one rule reversed:
- MARKS. Six hand-drawn glyphs in the site's line-art language, one per
  area, in pastel circles. This reverses "No cards. No icons. No
  feature grid. Just beautiful typography." (July 2026) — her call,
  made knowingly, because six rows of pure type read as a table.
- SIX TINTS, NONE REPEATED ("icon colors shouldn't repeat"). A first
  pass rotated three pastels twice; she rejected it. The six are a ramp
  through the family the site owns — butter, blush, orchid, lavender,
  sage and a pale coral — so it reads as one palette rotating rather
  than six decisions. Every stroke clears 4.5:1 on its own tint AND on
  cream; the pale coral needed #AE2F44, because --coral-deep measured
  4.40:1 on it.
  MARKETING + SALES OPS WENT GREEN (2026-08). Measured, its peach was
  the most crowded tint on the page: RGB distance 19 from Strategy and
  20 from Demand generation, three warm tints inside a 55 degree arc.
  It now uses #D7F4CF with stroke #387826, hue 107 to match the site's
  sage. The hero graphic followed: badge fill #D4F4CB, badge stroke and
  connector #4A9F32 / #4AAF2F.
  Those greens were derived by MATCHING CONTRAST RATIO, not HSL
  lightness. Green carries far more luminance than orange at the same
  L, so a straight hue swap produced a stroke at 3.08:1 on its own
  tint. Solving for contrast instead landed 4.57:1, against the peach
  original's 4.58:1. Do the same for any future recolour.
  Both ops icons were redrawn at the same time: the bar chart read as
  analytics, and the site already has analytics glyphs. It is now a
  routed flow through a panel, a process running inside a system.
- PROGRESSIVE DISCLOSURE. Only the capability list hides, behind a
  quiet "+ What this can include" / "− Hide details". The situation,
  the contribution and the proof link stay visible, so the scan pattern
  survives collapsed: what is happening, how Amber helps, proof. One
  row open at a time. Height comes from grid-template-rows 0fr -> 1fr,
  which needs no measuring, plus `visibility` so six collapsed lists do
  not sit in the accessibility tree. Row padding down 14%. Section
  1268 -> 1165 closed.
- BRIDGE TO PROJECTS is now intro-left plus three proofs across, 701px
  instead of three full-width rows. The published outcome lines stayed;
  the comp had dropped them and they are the strongest evidence here.
  `.proofs`, `.proof`, `.pr-head`, `.pr-proof` and `.pr-copy` are now
  unused site-wide — dead CSS, left in place rather than deleted.

RESIST ADDING. Built here across five rebuilds and all removed: a
typographic word composition, four oversized statement rows, a
numbered capability index, an asymmetric platform grid, a company-logo
strip, two outcome-led work artifacts, a four-across results row, a
six-item "especially useful when" list, and the four working documents
(moved, not deleted). `artifact-rjr-hero.webp` and
`artifact-mfcu-campaign.webp` remain in the repo, orphaned; the
full-size files they linked to are still live on Projects.

## Interior hero system (2026-08)

### Expertise hero: Amber's SVG, inlined (2026-08)

Her file, not a rebuild. Inlined rather than `<img>` so the groups stay
addressable: `cluster_strategy` / `_demand` / `_brand` / `_ops` /
`_workflows` / `_leadership`, one group per area, plus `orbits`,
`sparkles`, `dotGrids`, `atmosphere`. THE IDS ARE HERS — do not rename.

TWO THINGS IN THE SUPPLIED FILE HAD TO CHANGE:
- The viewBox was `0 0 1600 1000` while the artwork runs to x=1665, so
  "+ DIGITAL" was clipped off the right edge. Now `58 104 1620 884`.
- Labels were 24px on a 1600 canvas. In a hero column that renders at
  about 8px, so they are 30px now (11.3px on screen at 1440), with the
  second line of each two-line pair pushed down 9px. Font swapped from
  Arial to the Manrope stack.

PHONES ARE THE HONEST LIMIT. At 390 the graphic gets ~342px for a 1620
unit canvas, so labels land near 6px. Enlarging them is worse, not
better: at 40px they run past the viewBox and get cropped, and the brief
says never crop a label. They stay small; the six areas are spelled out
in full in "Where I help" directly below. A readable phone version needs
a different arrangement, not a CSS change.

THREE SPECIFICITY BUGS, ALL CAUGHT BY MEASURING, NONE VISIBLE IN THE CSS:
- The entrance stagger used a separate `> *` delay rule. `animation:` is
  a shorthand that resets `animation-delay` to 0, and `> text` outscores
  `> *`, so all six areas arrived at once and ahead of the orbits. The
  delay now rides in the same rule via a `--xd` custom property.
- Hover emphasis `[data-focus="demand"] #cluster_demand` (1,2,0) lost to
  the dim rule `[data-focus] #cluster circle` (1,2,1) — an element
  selector outweighed it, so every circle dimmed and none came forward.
  Fixed by adding `#cluster` to the emphasis selector: two IDs wins.
- `:has()` was the first approach for hover and is now gone. It set the
  outward nudge correctly and lost the fill-opacity duel silently.
  Hover is a `data-focus` attribute set by ~15 lines of vanilla JS.

HIT TARGETS. The area groups are stroke and text only, so hovering
"the group" meant hovering the glyph outlines. Each group carries a
transparent `.xph-hit` rect covering its label and badge.

ORDER AND TIMING, measured: cluster 0-0.7s, orbits from 0.7s, connectors
draw 0.7-1.35s, labels 1.0-1.6s, sparkles last. Ambient drift is 2-4px
per circle on independent 9.5-14s loops. Under
`prefers-reduced-motion` everything is at final state with no animation
and no transitions.


### The head -> first section joint (2026-08)

Amber, 2026-08 on About: "spacing needs to be fixed still" — roughly
180px of empty ground between the portrait and the Experience section,
with an aura blob sitting in the middle of it.

MEASURED FIRST, ALL SIX HEADS: expertise 24 · my-approach 78 ·
courses 184 · about 184 · projects 224 · services 224 (302 to first
ink). One joint, six values. Her documented ask for this joint is
60-90px, set in July 2026 when the Expertise head "was leaving a large
empty field under the paragraph" — the same complaint, on a different
page, answered on that page only. Third instance this session of a fix
applied to one instance of a shared problem (see also `.ch-title` and
the About h1).

NOT ALL SIX ARE THE SAME JOINT. Projects and Services carry an
`.anchor-nav` between the head and the first section, so their gap is
serving that nav — left alone. About and Courses share the plain
`.page-head` + `section` structure exactly, and now share one value:
the head keeps its 80px bottom padding, `.page-head + section` takes
its top padding to 0, joint = 80. Expertise keeps 24 because
`.page-head-tight` is a deliberate opt-in to a tighter joint.

TWO ORDERING TRAPS IN ONE RULE. `.page-head + section` and
`.page-head-tight + section` are both (0,2,0), so the new rule MUST sit
before the tight rules or Expertise loses its opt-in. And `.hero-band`
is also a `.page-head`, so the new rule caught My Approach and
flattened its bridge from 78 to 26; `.hero-band + section` is restated
straight after to put it back.

### About head rebalanced (2026-08, Amber: "the h1 looks squished on desktop, the container can be bigger and the picture can be moved")

MEASURED AT 1440 BEFORE: copy column 446px, portrait 312px, and 315px
of nothing between them. 29% of the hero was empty while the headline
was cramped into five lines at 44px — a size that appears nowhere else
on the site as an h1 and collides with the h2 grade.

THE CAUSE WAS THE SPLIT, NOT THE TYPE. The July fix had shrunk the h1
to fit a column that was too narrow, treating the symptom. Now:
`.page-about main .wrap` goes to 1200 (matching Expertise), the
portrait variant goes 44/56 -> 64/36, the About-only h1 step-down is
deleted so the headline sits at the shared `.h1-long` grade, the hero
lede goes 46ch -> 56ch (46 was measured against the old 446px column
and read as a narrow inset under a full-width headline), and the
portrait grows 312 -> 340.

AFTER: h1 50px over four lines, copy column 700px, head 643px, and the
gap from headline ink to portrait down to 233px — inside the six-page
range of 160-311. Nav and footer stay at 1120 and still line up with
every other page.

THE PORTRAIT CANNOT GROW MUCH FURTHER. At the 4/5 crop every extra
10px of width costs 12.5px of head height, and 643 is already the
tallest of the six heads (Services is 625). Widening the wrap alone
does not help either: the portrait is pinned to the container's right
edge, so a wider container pushes it AWAY from the copy. Only growing
it moves it closer.

SOURCE-ORDER TRAP, HIT AND FIXED. `.page-about .hero-split-portrait`
and the shared 900px collapse `.hero-split-portrait` are both (0,2,0).
The page-scoped rules sit later in the file, so they won the media
query and About stayed two-column on a phone with a 114px portrait.
The page's responsive overrides now sit AFTER its desktop rules. Same
class of bug as the tablet nav step-down and `.ch-title` itself.


SIX PAGES, ONE FRAME, TWO VARIANTS. Before this pass the interior heads
shared colour and type and nothing else. Measured at 1440 beforehand:
Services 1358px, My Approach 575, Expertise 426, Courses 386, About
357, Work 334 — and three of the six had no visual at all.

**FIRST, THE BUG.** Services was not designed badly, it was broken. The
"Quiet the Expertise map" commit deleted the whole Services head block
with a loose scripted range-replace: `.head-grid`, `.head-art`,
`.page-head-art`, `.sys-art-sm/-lg`. Unconstrained, its 480x272 diagram
rendered at the full 1072px container width WITH the phone drawing
underneath. Restored, the head is 506px. A comment sits above the block
so the symptom is recognisable. LESSON: never compute a replace range
with `s.index("\n\n", ...)`. Anchor on exact text at both ends.

**The frame.** `.page-head` gives 76px beneath the nav and 80px below.
`.hero-split` is 48/52 (editorial: Expertise, Work, Services, Courses);
`.hero-split-portrait` is 44/56 (portrait: My Approach, About). The
only difference between the variants is that ratio. `.hero-visual` is
one bounding area, max 560 wide and 336 tall, so no page's visual
outgrows another's.

**Heights after (1440 / 390):** Work 542/599, Courses 503/640,
Services 506/526, My Approach 448/637, Expertise 432/630, About
621/691. Every H1 starts at 184px on every page.

**Traps hit on the way:**
- An `<img>` `height` attribute is a presentational hint and BEATS
  `aspect-ratio`, silently. `.work-pair img` rendered 555px tall until
  `height: auto` went on. Any hero image sized by aspect-ratio needs it.
- About carries the longest headline on the site and Variant B gives
  the copy 44%. At the shared h1-long grade it wrapped to six lines and
  pushed the head to 707px. It takes one grade down, on that page only,
  and another step at 560 where the portrait also drops to 190px.
- My Approach keeps its OWN `.hero-band .band` grid rather than
  `.hero-split`. It is already 40/60 with the lede under the h1, and
  layering the shared grid on top of it moved the h1 160px right.

## Footer (2026-07: "the footer needs more structure")

It was one flat row of seven links, which gave every destination the
same weight and no grouping. Now: a brand block (mark, wordmark, one
identifying line), three labelled columns, and a bottom bar carrying
the copyright over a hairline.

- Columns are **The work** (Services, How I Work, Projects,
  Expertise), **Shop** (Courses, Student login), **Get in touch**
  (About Amber, Start a conversation, the email). They mirror the
  nav's own shape, so Shop reads as Shop in both places.
- Each column is a `<nav aria-labelledby>` pointing at its visible
  `.footer-head`, NOT an `<h2>`. Three extra h2s per page would
  dilute every outline on the site for no accessibility gain.
- 900px drops to one column of columns; 560px drops the link groups
  to two columns so "Start a conversation" is never squeezed into a
  third of a phone.
- The nav hides `.brand-name` under 350px; the footer overrides that
  back on, because it has the room.
- ALL EIGHT PAGES carry it identically and `404.html` needs a leading
  slash on every internal href. Verified with scratchpad
  `footparity.cjs` — one distinct structure across all eight.
- Retired with it: `.footer-inner`, `.footer-nav`. `.footer-inner a`
  was trimmed OUT of the body-link selector list rather than the line
  being deleted, and the phone tap-target rule was rewritten for
  `.footer-col a` rather than dropped.

## Hero parallax must not exceed the room below it (2026-07 bug)

`.hero-content` scrolls slower than the page, so it drifts DOWN the
document. The drift was `min(scrollY, innerHeight) * 0.2` — up to
140px at a 700px viewport — while the room under the phone hero is
only its 48px bottom padding plus the next section's 48px top
padding. Measured on a 393x700 phone: the gap between the proof
chips and "The hardest part is not always doing the marketing" went
from 99px at rest to **-44px** by 580px of scroll, with the chips at
29-53% opacity. That is what Amber photographed: faded chips sitting
across the heading, mid-scroll only, invisible in any still.

Desktop hid it because the hero has `min-height: 72dvh` and the
chips sit in a right-hand column; phones set `min-height: 0`, so the
hero box is exactly as tall as its content and has no slack at all.

FIX: the drift is now capped at `(hero padding-bottom + next section
padding-top) * 0.55`, measured from the live computed styles and
re-measured on resize (iOS collapses its toolbar mid-scroll and
re-lays the page out). Phone cap 52.8px, minimum gap 43px; desktop
cap 92px, minimum gap 246px. ANY future change to the hero's bottom
padding or the first section's top padding is picked up
automatically — do not replace this with a hardcoded number.

## Expertise page head and showcase (2026-07, Amber)

**HEAD: THE LAYERED EXPERTISE MAP.** It was one column of copy with an
empty right half; a numbered index fixed the spacing and Amber called
it "too simple and functional". Now `.head-split` at 55/45, copy at
the top so the h1 lands on the same line as every other page head, and
`.xmap` centred beside it.

Four translucent strata, one per area, staggered and overlapping by
13px so the areas argue for themselves: connected, not filed.

- THE BANDS ARE CSS, NOT SVG: a soft gradient in one accent, a torn
  `clip-path`, and **no outline**. An outlined rounded rectangle is a
  card whatever you put in it, and cards are the thing this replaced.
  The bands break the column on both edges via negative margins so the
  hero reads composed rather than boxed.
- THE ONLY STROKED ELEMENT is the thread: one bowed path down through
  all four, a sweep left under Leadership, then back up toward the
  butter tab behind "growth." It is **muted bronze, not coral** —
  coral means interaction everywhere else on this site and a
  decorative line must not wear it. Bronze also rhymes with the gold
  tab the thread is pointing at.
- `.xmap` and the thread SVG share the 560/468 aspect ratio, so the
  dots stay registered to the bands at every width with no hardcoded
  pixels. THE THREAD IS DRAWN INSIDE THE VIEWBOX — `overflow: visible`
  did not survive the SVG viewport, so a tail at negative x silently
  vanished. Keep every point within 0-560.
- `.xm-name` is weight **500**, not 600. At semibold in full ink the
  four words started competing with the h1.
- Phones: strata and overlap kept, stagger flattened, thread removed.
  A woven line across a phone-width column is a scribble, not a
  diagram.

**COLOUR ROLES (Amber, July 2026).** This page had drifted into a
second colour system and was pulled back onto the site's roles:
charcoal carries content, **coral means interaction and nothing
else**, gold is reserved emphasis, lavender and pink are atmosphere,
neutral lines are structure.

- The four colour-coded chapter rules are GONE. They ran gold,
  magenta, violet and coral at 46-62% — four saturated bars that were
  the loudest thing on the page, and one of them put coral on a
  divider. All five rules now share `rgba(84, 76, 112, 0.22)`.
- The category accent survives in exactly ONE place: the 12px
  capability markers, muted well below their old strength. Gold, pink,
  lavender, dusty rose. Nothing else in a row takes a category colour.
- `.sc-arrow` in the showcase plate went from coral to dusty rose for
  the same reason — it sits inside a figure, not a link.
- All four project links verified identical: `#B8354A`, weight 600,
  16px, same underline gradient and hover.
- The hero bands were pulled down a few points each. THE SHARED AURA
  WAS LEFT ALONE ON PURPOSE — it is site-wide, and dimming it here
  would change every page.
- This supersedes the old "per-chapter accents, the one system on the
  site where colour means something" note. Amber overruled it.

**CHAPTERS.** The stagger is gone (Amber: "remove the alternating
indentation from the Digital and Leadership rows"). Two and four used
to step right 7% and 14%; all four now share one left edge and one
grid, and the colour-coded rules carry the variation alone. `.ch-line`
margin dropped 18 -> 10px so each claim sits tight to its proof link.
The section heading is **"Where I make the biggest difference"** on
the h2-long grade, deliberately under the h1.

**THE MAP, THIRD PASS — one compact object.** Pass one was four
staggered strata with a winding thread; pass two tightened them into
one object; pass three shrank them. Amber on pass two: the full-width
bands "feel like a decorative list and repeat the content shown
immediately below". The strips are now sized to their OWN CONTENT
(`width: max-content`), stepped on a constant 26px offset and
overlapping by 10px. No spine, no thread, no icons — the overlap is
the whole idea, and nothing extends far past its text.

- 56/44 split, object centred against the WHOLE copy block.
- Labels down a grade to intro, notes down to eyebrow. They must read
  clearly under the h1, which runs 36-50.
- Butter runs LOWEST of the four fills: at equal alpha it reads
  brightest, and the first strip must not look like the first item.
- Under 480 the step collapses to 10px. A 78px indent on a 360px
  screen costs more than the cascade is worth.
- `.page-head-tight { padding-bottom: 0 }` plus `padding-top: 24px` on
  the following section pulls it up 64px, inside the 60-90 asked for.

**THE ROWS — one three-part grid.** Number and name, then the problem
and its capabilities, then the contribution and its proof link. Every
row identical, one neutral hairline, no cards, no stagger.

- **THE RINGED BULLETS ARE GONE FROM THIS PAGE.** Capabilities are
  editorial text on centred dots now. NOTE THE TENSION: the open ring
  is the site's one bullet language and it still holds everywhere the
  items are a LIST (`.hw-do`, `.offer-points`). Here the four items
  read as one line of metadata, which is why the ring left. Do not
  "restore consistency" by putting rings back without asking.
- The contribution is the row's focal point: display face at intro,
  full ink, against the problem copy's body at muted.
- The gutter came in hard. The old two-column split left the problem
  and the contribution reading as two distant halves.
- `.ch-title` MUST STAY AFTER the `.section-title` type block. Same
  specificity, source order decides — and the first attempt at it was
  silently dropped by a failed multi-line replace, which is why the
  heading sat at 44 against an h1 of 50 and the page read as having
  two headlines. It now lands at 34.
- Content width was already 1120, inside the 1100-1180 asked for. No
  change needed.

**THE BRIDGE TO PROJECTS: PROOF ROWS, NOT A SHOWCASE.** It was briefly
a hover preview stage with screenshots. Amber: "it feels like a
portfolio interaction dropped into the middle of the Expertise page...
it needs a confident bridge from expertise to proof." Now three
full-width rows: label, one sentence running challenge to change to
result, a quiet published figure at the right, one coral link. No
images, no interaction, no JS.

THE THIRD ROW HAS NO FIGURE ON PURPOSE. There is no published number
for the products and tools, and the row reads fine without one.
Inventing a proof point to balance a grid is not a reason.

Amber's brief wrote "still works a decade later"; the case study says
nine years and the site says nine years elsewhere, so the row says
NINE YEARS. Rounding a stated fact up in one place and not the other
is how a site starts contradicting itself. Same reason "Scanoptics"
stays as the site spells it rather than her brief's "Scan-Optics".

## My Approach page (renamed from How I Work, 2026-07)

### 2026-08 comp pass (Amber: "finish the my approach comp")

- THE DIAGNOSTIC FLOW replaced the routed map in "I solve business
  problems". The map showed that marketing sits inside the business but
  never showed the move: symptom, look deeper, real problem, what
  changes. Four steps across, copy underneath at FULL PAGE WIDTH (her
  call) rather than the 64ch measure — the paragraph is short enough to
  land on two lines. Step three is the only one that takes colour,
  because it is the whole argument; four tinted rings would have read
  as four categories rather than one line of reasoning.
  `.fl-body.hw-body p`, not `.fl-body p`: `.hw-body p` in the type layer
  is the same specificity and lands later, so it kept winning the cap.
- SECTION NUMBERS 01-05 over a short coral rule, on the five content
  sections only. The banners between them stay unnumbered: a banner is
  a seam, not a chapter.
- ALTERNATING BANDS on 02 and 04 via `.band-white`. Very subtle in
  practice — the aura sits over everything, so a stronger alternation
  would fight it. Flagged to Amber.
- MARKS on "What clients leave with", same hairline language as the
  Expertise rows at annotation scale. The comp showed a different
  heading ("I leave the team stronger") and four new lines; the
  existing six items and their copy were kept instead, and the wording
  question was put back to her rather than swapped silently.
- THE BANNER IS UNCHANGED, at her instruction. The comp restyled it as
  a left-ruled block on a lavender band with a tape graphic, which
  would have undone the standardisation she asked for an hour earlier.


RENAMED IN FULL, not just relabelled: `how-i-work.html` became
`my-approach.html` with `/how-i-work.html /my-approach.html 301` at
the top of `_redirects` (same pattern as capabilities -> expertise and
work -> projects). Nav and footer say **My Approach**; Expertise's
secondary CTA says "See my approach"; sitemap, canonical, OG, Twitter
and the JSON-LD `url` all moved. The image files keep their old names
(`amber-how-i-work.webp`) — renaming assets is churn with no benefit.

Amber's brief: "less like consulting methodology and more like a
window into how Amber thinks", and it should read for a CEO hiring a
consultant, an executive hiring a VP, a founder looking for an
advisor, and someone considering the courses.

- **H1 is now "My approach."** with the butter tab on "approach."
- **A new opening idea** carries the top of section one: "Some of the
  best work starts in a situation nobody can name yet." It replaced
  "I do not arrive with the answer already decided", which said the
  same thing as the paragraph directly under it.
- Because that idea now opens the page, the CTA band's closing line
  stopped repeating it. "I enjoy stepping into something complicated,
  finding the clearest path forward, and helping build it" became "If
  you are somewhere in the middle of one of these, I am happy to take
  a look." FLAGGED TO AMBER — that was her own line.
- The people h2 shortened to **"The people side of the work."** The
  old one ("...matters just as much as the strategy") made the exact
  argument the paragraph under it makes, and Amber's own brief titles
  the section this way.
- "Strategy only matters if it gets built" LOST ITS LEDE: the h2 says
  it. The documents row lost its supporting paragraph for the same
  reason and now runs question, rule, one line, four documents —
  `.diagnose-inline` went to 0.58fr/1fr so the documents take the
  width the paragraph used to need.
- Principles are one sentence each. Outcome lines were tightened.

**860 words, 6,739px desktop.** From the pre-brief page that is -23%
on words; counting only prose (the four documents carry ~60 words of
hand-lettering inside the artwork, which is not copy anyone reads as
copy) it is about -24%. Amber asked for 25-30%. What stops it going
further is everything the brief also asked to KEEP: the hero
photograph, notebook and its five questions, routed map, four
documents, three quote banners, the pull quote, all five principles
and all six outcomes. Those are roughly 300 words and 5,000px before
a sentence of prose. Do not cut further by deleting a visual without
asking — the visuals are the reason the page reads as a magazine
rather than an essay, which is the brief.

## How I Work section reference (history)

### Hero scale and crop (2026-07: "substantially shorter")

It ran 939px tall and behaved like a full-screen homepage hero. The
composition did not change; its SCALE and CROP did.

- **The collage is ONE FLAT IMAGE**, so "show fewer objects" can only
  be done with the crop. The box is 15/8 and `object-fit: cover` at
  `object-position: 50% 12%` pulls the frame up, dropping the laptop,
  the mug and the lower sticky notes while keeping every element Amber
  named: Campaign Roadmap, "Start with what moves the business", the
  homepage wireframe, the Content Ideas notebook, the colour swatch,
  the butterfly and the drawn arrow. NOTHING IS CROPPED HORIZONTALLY,
  so no element is half-lost at a side.
- `.band` is full-bleed but pads itself to the wrap's left edge
  (`max(24px, calc((100% - 1120px) / 2 + 24px))`), so the copy lines up
  with every other page while the photograph still runs off the right
  of the viewport. That bleed is what keeps it from reading as a boxed
  poster, and a bottom/right `mask-image` fade leads the eye down into
  the next section.
- 40/60 desktop, still TWO COLUMNS on tablet down to 761. Stacking at
  1020 pushed the head past 900px, because the photograph then gets
  the full column width and its height goes with it.
- **THE TWO HEIGHT CONSTRAINTS IN THE BRIEF FIGHT.** 560-640px tall
  AND no more than 65vh cannot both hold on an 800px-tall laptop
  (65% of 800 is 520). The px range wins — a hero that shrinks with
  the window stops being a composition. `max-height: clamp(350px,
  40vh, 400px)` on the picture lands: 1600x1000 615px/0.61vh,
  1440x900 575px/0.64vh, 1280x800 564px/0.70vh, tablet 472px, phone
  702px. Only the 800px-tall laptop misses the vh cap, by 0.05.

### Length audit (2026-07: "the how I work page is very long")

At 1,431 words and 8,468px it was the longest page on the site by
40% and five times Expertise. Trimming sentences moved the word
count 11% and the height 3% — the length was STRUCTURAL, not
verbose prose. Two structural cuts did the real work:

- **"Every business is different" was absorbed into "I ask a lot
  of questions."** Its heading repeated the hero lede word for
  word, and its paragraphs made the same argument ("I don't
  arrive with the answer decided") that the next section makes
  better. The merged section runs four paragraphs against the
  five-question notebook and balances the split.
- **The numbered `.hw-q-list` was retired.** The page carried SIX
  list-like devices — notebook, four documents, hands-on list,
  five principles, outcomes grid, and this. This one was the
  weakest against Amber's test ("could another consultant have
  written this?"): "Can this be simpler? Are we solving the right
  problem?" is generic where the notebook's "What happens in the
  first 48 hours after someone reaches out?" is not. Four of the
  five questions survive inside the prose. Simplify is now a
  short prose section — a deliberate breath between two dense
  ones. CSS removed with it: `.hw-q-list`, `.hw-q-num`, their
  media-query overrides, and `.hw-q-num` trimmed OUT of the
  eyebrow-size selector list (not deleted with the line).
- Outcomes went 8 -> 6 (Efficient workflows folded into Improved
  processes, Confidence in what's next into Clearer priorities)
  and the grid went 4 -> 3 columns so six fills two rows with no
  orphan cell. "Once I am no longer in the room" was rescued from
  the cut card into the Simplify prose.
- The CTA band's middle paragraph went; it restated the hero.
- `.hero-band-after` gained 44px of bottom padding (desktop only —
  phones already sat on the seam) because the stanza now runs
  straight into a quote band and needed the 157px band seam.

First pass result: 1,431 -> 1,240 words, 8,468 -> 7,416px, 12
sections -> 10.

### Consolidation to five sections (2026-07, Amber's brief)

The second pass, from a full restructure brief. The page now runs
FIVE content sections, and that count is the constraint to hold:

1. **I ask a lot of questions** — copy plus the notebook. Ends on
   `.hw-kicker`, a display-face line at h3 over a 44px coral rule.
   That device is deliberately a grade BELOW the pull quotes so a
   section can land on a beat without a third quote appearing.
2. **I solve business problems, not just marketing problems** —
   absorbed "Every project starts with the same question." ONE
   section, TWO rows: the argument plus the routed map, then
   `.diagnose-inline` carrying the coral question and the four
   working documents. The documents kept their own heading until
   this pass; they do not need one.
3. **Strategy only matters if it gets built** — absorbed "I look
   for ways to simplify" as a third paragraph. Its five questions
   became `.hw-check`, a paper panel in the messaging-worksheet
   language (printed label, italic lines, hairline under each, no
   bullet — the ring belongs to lists, and this is a worksheet).
   `.hw-do` went two-column, filled DOWN then across, full width
   under the split, and lost its hairlines: two stacks of rules
   read as noise where the rings alone read as a list.
4. **The people side of the work** — copy above, five principles
   in a two-column grid below, fifth spanning. Half the height,
   same hairlines and marks. Watch the borders: in two columns
   the top row is items 1 AND 2, so it is `:nth-child(1),
   :nth-child(2)`, never `:first-child`. The bottom rule came off
   entirely — the pull quote's own top hairline closes the block,
   and two lavender rules 60px apart read as a mistake. The
   "brighten the next rule" hover went too: source order stopped
   being visual order, so it lit a rule across the gutter.
5. **What clients leave with** — renamed from "Where this work
   leads", six outcomes unchanged.

Result across both passes: **1,431 -> 1,124 words (-21%), 8,468 ->
7,102px desktop (-16%), 12 sections -> 8 (five of them content).**

WHY IT DID NOT REACH 25-35% ON HEIGHT: the brief also required
keeping every visual — the hero photograph (939px), the four
working documents (~800px), the notebook, the map, both quote
banners, both pull quotes, all five principles and all six
outcomes. Those plus the site-wide 208/157px section rhythm are
roughly 5,500px before a word of copy. Word count is where the
cut landed; height is floored by the artwork, which is the point
of the page. Further height needs one of: fewer documents, a
shorter hero crop, or a tighter rhythm on this page alone (which
would break the site-wide two-value rule — do not do it quietly).

### Quote banners vs pull-quotes (2026-07)

TWO DIFFERENT THINGS, and they were being confused:

- **THE QUOTE BANNER** (`.bridge` + `.bridge-line`) is a SECTION-LEVEL
  SEAM. Full width, its own hairline-bounded band between two sections,
  157px of air either side. Every page uses it to mark a chapter break.
  "The goal isn't to force a solution. It's to find the right one."
  was a `.hw-quote` sitting inside the section above it and became a
  real banner (Amber, July 2026: "should be the quote banner
  template"). "Great marketing isn't built by one person" followed in
  the same pass — it was `.hw-people-quote`, a left-aligned block on a
  lavender hairline closing the people section, and it is a seam, not
  a margin voice. HOW I WORK NOW CARRIES THREE BANNERS, one after each
  of the first, second and fourth main sections. That is the ceiling:
  a fourth would make the band the page's rhythm rather than its
  punctuation.
  THE CEILING IS BROKEN AS OF 2026-08, DELIBERATELY AND AT AMBER'S
  INSTRUCTION: "'a recommendation without.. nicer format' text should
  be the quote banner that we standardized. same with 'the best
  ideas..get used'". Both were promoted, which takes the page to FIVE
  banners, and the order is now strictly alternating — banner, section,
  banner, section, all the way down. That is the exact outcome the
  ceiling existed to prevent, so it is her call to keep or reverse; the
  two mid-page banners are the candidates to demote if she wants four.
  AND THE PULL-QUOTE IS NOW EXTINCT. "The best ideas are the ones that
  actually get used" was the last `.hw-quote` on the site, so promoting
  it left the pull-quote grade with zero instances. `.hw-quote` and
  `.hw-quote-under` are dead CSS. Left in place rather than deleted:
  removing a documented device is her decision, not a cleanup. When `.hw-people-quote` left, the principles grid lost
  the rule that closed it, so the fifth principle took a bottom border
  back — check that pairing if either ever moves again.
- **THE PULL-QUOTE** (`.hw-quote`) sits INSIDE a column, at 17em with a
  56x2px coral rule above it. One instance survives site-wide: "The
  best ideas are the ones that actually get used", inside the
  two-column body of "Strategy only matters if it gets built". It is a
  margin voice, not a seam. Below it sits `.hw-kicker`, a third grade
  down: display face at h3 over a 44px rule, for the sentence a
  section lands on. IF A LINE DESERVES A FULL-WIDTH BAND IT IS A BANNER; if it
  belongs to the paragraph beside it, it is a pull-quote.

### The people side of the work (2026-07, Amber's brief)

`.hw-people`, placed between "Strategy only matters if it gets built"
and "What clients leave with" — the last "how" before the "so what". Amber's point:
"plenty of marketing portfolios showcase projects and skills. Very few
communicate how they influence people, build teams, and lead change."
It has to read as authentic and hands-on, NEVER as an executive résumé,
management buzzwords, generic leadership advice or a personality
assessment.

Copy left (0.62fr), five principles right (1fr), pull quote across the
bottom at 30em. Nothing is a card: hairlines only, no borders, no
shadows.

LAVENDER IS THE ACCENT HERE, not coral — the one section on How I Work
that switches, because it is about the team rather than the work. The
hairlines are `rgba(133,121,201,0.28)` and the five marks are
`#8579C9`.

THE FIVE MARKS ARE ABSTRACT LINE DRAWINGS, not pictograms. A dot
widening into two rays (context), three lines converging on a point
(clarity), a line dipping below and returning (doing the work), two
lines meeting at a peak (ideas, not people), a rising curve leaving a
baseline behind (leave the team stronger). A lightbulb, a handshake or
any stock-icon metaphor is the failure mode — that is precisely the
generic leadership look the brief bans.

HOVER, and it stays understated: the title deepens to #4A3F86 (8.5:1),
the mark steps 3px right, the rule brightens to 0.6 alpha. Colour plus
a 3px nudge is the UI-response tier the site already uses — no new
motion device, and the nudge is off under reduced motion. Scroll entry
is the existing `.reveal`.

NO EYEBROW, and this is a DELIBERATE DEVIATION from the brief, which
asked for "HOW I WORK WITH PEOPLE" above the headline. Section eyebrows
were retired site-wide days earlier, and that label over "The people
side of the work matters just as much as the strategy" is the exact
restatement pattern that retired them. Flagged to Amber; one line to
restore if she wants it back.

Measured: titles and quote 13.6:1, body 7.1:1, hover title 8.5:1.

### Working documents section (moved here from Expertise, 2026-07)

`.diagnose` sits between "I look beyond marketing" and the bridge
band, eyebrow "On paper". IT LIVES HERE BECAUSE IT SHOWS PROCESS
(Amber: "the artifact section belongs on How I Work because it's
literally showing your process"). It was built on Expertise, argued
over for three passes, and only worked once it moved.

LEFT: headline "Every project starts with the same question." at the
h2-long grade (26/38 — important, not dominating), the featured
question "What is actually getting in the way?" in CORAL ITALIC SERIF
(coral-deep; the only italic display on the site), a 34x2px coral
rule, then two sans paragraphs.

RIGHT: FOUR WORKING DOCUMENTS, DRAWN, NOT PHOTOGRAPHED. Amber, July
2026: "scrap both the triangle and the clean checklist … create 3-4
authentic strategy artifacts that look like they came straight from
your desk … this is where the site can become exceptional instead of
just beautiful." A DIAGRAM IS THE FAILURE MODE — the
People/Process/Priorities triangle and the tidy checklist that
preceded these were both correct and both dead.
NOTHING HERE IS A REAL CLIENT DELIVERABLE AND NOTHING PRETENDS TO BE.
No stock, no staged desk photo: the site's one real photograph is the
How I Work hero and it stays spent there.

- `.mat-wire` — a homepage marked up in pen: an arrow to the hero
  ("proof here"), the CTA circled ("one CTA"), the third column struck
  out ("cut"), footed HOME — PASS 2. Warm white #FFFDFA.
- `.mat-prio` — "what first?" plotted impact against effort. Fix
  follow-up is circled and arrowed "start here"; rebrand is struck
  through. Palest blush #FCF4F1.
- `.mat-flow` — "where does it stop?": ad → page → email → call, the
  email-to-call step crossed and annotated "4 days". Palest lavender
  #F5F2FB.
- `.mat-msg` — a messaging worksheet where the first answer, "faster
  marketing", is crossed out and replaced in pen with "fewer things
  done twice". Cream #FBF6EE.

WHAT MAKES THEM READ AS REAL, and what to preserve if they are redrawn:
- rules BOW. Quadratic curves, never straight lines.
- box corners DO NOT CLOSE. They overshoot or stop short.
- the pen is coral-deep #B8354A and ONLY EVER ANNOTATES. It never
  draws the document itself.
- handwriting is Newsreader ITALIC; printed labels are Manrope
  uppercase 9.5px / 1.1 tracking. NO THIRD FONT was added.
- EVERY SHEET CARRIES A SECOND THOUGHT: a strike, a circle, an arrow,
  a correction. A document with no revision in it is a graphic, not an
  artifact.

Each artifact is one self-contained inline SVG (text included, so it
scales with the sheet) carrying `role="img"` + an `aria-label`
describing its marks — the annotations are the argument, not decor.
COMPOSITION: two loose columns, EXACTLY ONE OVERLAP and it is a corner
(the prioritization page clips the sketch's paper edge, never its
drawing). No tape, pins, sticky notes or layered paper · no
dashboards, glow or futuristic UI · no icons, dotted grids or
decoration · shadows almost invisible (0 16px 34px -28px at 0.34) ·
rotations under 1.4°, written with the `rotate:` PROPERTY, NOT
`transform` — `.reveal` owns transform and a rotation written there is
wiped the instant the item enters. Verified in both motion modes.
MOBILE drops the CAMPAIGN FLOW — its boxes and arrows are the least
readable at 390px — leaving three documents in one column on a 30px
grid gap.

`my-approach.html`. The page answers one question — what is it
actually like to work with Amber — and it is written to leave a
reader with six impressions she named: she will take the time to
understand my business, she will not force a solution, she sees
the bigger picture, she can do strategy AND execution, she will
challenge assumptions, and she will leave the business better
than she found it. Her tone brief: conversational, thoughtful,
approachable, practical, editorial, confident without being
corporate. BANNED on this page beyond the sitewide list, all
hers: operational excellence, digital transformation, proven
methodology, discovery/strategy/execution as a named process,
tailored solutions, optimize your business, unlock potential.
"Speaking across a table, not giving a keynote."

STRUCTURE — an editorial feature, deliberately not another card
page. Six content sections, alternating shape, one artifact per
section at most:
1. PAGE HEAD — THE SITE'S ONE PHOTOGRAPH (2026-07, Amber's pick
   between three mocked treatments). Her own collage: a portrait
   at her desk surrounded by a campaign roadmap, a homepage
   wireframe, content notes and four sticky notes. It belongs on
   this page because the artifacts ARE the page's content; one of
   the notes reads "Strategy, then execution.", which is section
   4's heading.
   THE IMAGE IS CUT OUT OF ITS PAPER GROUND so the aura drifts
   behind it (Amber's call: "what if the image removes the
   background"). That is what solved it. A full-bleed band was
   mocked first and needed the band painted her paper cream
   (#F1ECE5) with gradients dissolving it into the page — a seam
   managed rather than removed. The cutout has no seam because it
   has no rectangle.
   HOW THE CUTOUT WAS MADE, in case it is ever regenerated: her
   ground is flat (std < 2) at #F1ECE5, so it separates by
   FLOOD-FILLING FROM THE FRAME EDGES rather than by a colour
   threshold — that keeps the collage's own cream papers opaque
   instead of punching holes in them. The whole image is then
   re-white-pointed by cream/ground so the paper maps exactly onto
   #FDF9F5; drop shadows survive as translucent darkening; the
   shadow alpha takes a 0.12 floor and is masked to a ~50px halo
   around the artwork, or the paper texture reappears as speckle;
   frame edges fade so the desk dissolves instead of stopping.
   Assets are WEBP WITH ALPHA, the first on the site: 1222x941
   desktop (197KB, cropped past the transparent third so the empty
   pixels are not shipped) and 890x941 phone (142KB, both side
   edges faded because the phone frame slices through the notes).
   LAYOUT: copy is laid into the void she composed the image
   around. It is FIRST in the source and only absolutely placed
   above 1020px, so reading order never depends on CSS. The offset
   is `padding-top: 6.64%`, which is 11.8% of the band's HEIGHT at
   this aspect ratio — percentage padding resolves against WIDTH,
   and writing it this way holds the h1 on the site's shared 158px
   line at full size while letting it scale with the collage
   instead of drifting into her notebook. Below 1020px the overlay
   stops: copy above, a tighter crop beneath, never the wide
   composition shrunk.
   The hand-drawn "work surface" SVG that used to open this page
   is retired — it was an abstraction of exactly this image, and
   running both was redundant. The `.head-art` / `.sys-art-*` CSS
   stays; Services still uses it.
   The head closes with `.hw-stanza`, the four "Sometimes it
   is ..." lines, which sits below the image and carries the
   head's own bottom padding so the seam into section 1 stays
   134/72 like every page. It is a direct `.wrap` child of the
   header for the same reason.
   The butterfly in the collage is hers and stays. The
   no-hero-butterfly rule was about a decorative SVG we added; a
   line drawing inside her own artwork is not the same thing.
2. EVERY BUSINESS IS DIFFERENT — full-width prose, closing on
   pull quote 1.
3. I ASK A LOT OF QUESTIONS — copy left, `.hw-notebook` right:
   the one boxed artifact on the page, five real opening
   questions numbered 01-05 on hairlines, questions set in the
   display face at the card-title grade.
4. I LOOK BEYOND MARKETING — REVERSED split. The tracks swap
   with the order (`.hw-reverse` sets 0.78fr/1fr) so the copy
   always keeps the wider column; putting only `order` on the
   children hands the artifact the wide track and reads as a
   bug. Carries the connection map plus margin note 1.
5. STRATEGY AND EXECUTION BELONG TOGETHER — the strongest
   section by construction: full-width h2 and lede, then copy
   left with pull quote 2 tucked under it (this closes the void
   the 7-item list opens on the right) and `.hw-do` right, the
   hands-on list on the Expertise coral-rule marker.
6. I LOOK FOR WAYS TO SIMPLIFY — carried by typography alone:
   the five questions as `.hw-q-list`, display face at the h3
   grade, numbered in the eyebrow grade on hairlines. Closes on
   margin note 2.
7. WHERE THIS WORK LEADS — eight outcomes on a hairline grid
   (4-up / 2-up / 1-up), rules alternating coral and lavender.
   NOT cards. Outcomes, never deliverables. Keep every title to
   one line so the descriptions share a baseline.

CLOSING BAND is page-specific, the site's second (expertise has
the other): "Sometimes the answer is marketing. Sometimes it
isn't." — a deliberate bookend to the head's four "Sometimes"
lines. Her closing sentence runs as a second, wider paragraph
(`.cta-band-close`, 620px, cream rather than the muted
supporting tone). Actions are ONE coral button plus a text link,
not two buttons: `.cta-band .arrow-link` flips the underline to
cream (13.6:1 on the ink band).

TWO NEW DEVICES, both documented so they do not spread:
- THE WORK SURFACE (page head, 480x272, phone gets its own
  480x140 band per the never-scale-the-desktop rule). A ruled
  page, a page wireframe, two notes, a small right-angle
  workflow, and coral annotation marks drawn over the top. The
  ruled lines are UNEVEN-LENGTH STROKES standing in for
  handwriting — never letterforms, never a scribble, which is
  what would make it read as a scrapbook. This page carries the
  site's ONE arrowhead (two short strokes on the annotation
  curve); the no-arrowheads rule still holds everywhere else.
- MARGIN ANNOTATIONS (`.hw-note`, at most two per page). A short
  hand-drawn coral gesture over one italic line in the display
  face. This is the site's ONE sanctioned serif-italic PARAGRAPH
  — the font census rule that serif belongs to headings, card
  titles and the brand still holds for everything else. The page
  now runs ONE: the second note's line was promoted to the
  transition band at Amber's call, and the flat-underline variant
  (`.hw-note-wide`) went with it rather than getting invented
  replacement copy.

THE CONNECTION MAP (`.hw-map`, 300x260) is drawn as a FLOOR
PLAN, not another orbital system: five rounded tiles routed at
right angles, marketing the only filled one, one route leaving
the frame and two loose nodes. It has to look nothing like the
Services head diagram or the two illustrations blur together.
No labels, same reason as Services.

PULL QUOTES take one new display grade, clamp 24.8 -> 36px,
deliberately set BETWEEN h2 (30/44) and h3 (24/30) so they never
outrank a section title. Quote 1 wears the short coral rule
above, quote 2 wears it below.

THE TRANSITION BAND carries Amber's own line, as every band does:
"If a recommendation makes the week heavier, it is probably the
wrong recommendation." She promoted it out of the Simplify
section's margin note in July 2026. The earlier placeholder is
retired.

## Building section (Projects page — curated collection, brief v3)

The section reads "Building" with Amber's lede ("Products,
education, and AI tools I've created to solve real problems and
explore new ideas." — "Things I've Built" title retired by her
brief). Three categories, each a two-column block (280px header
left: animated 72-box glyph above h3 + one-line description —
the glyphs reuse the services drawing language and the existing
stroke draw-on reveal, no new motion device: peach arc (Courses),
blush stacked frames (Products), lavender orbit (AI Tools);
featured project rows right with hairline dividers). Each
category sits in the SAME white card surface as the case studies
(bg-raised, var(--line) border, 24px radius — Amber: the unboxed
collection stood apart from the boxed sections above it), and the
section sits on the CREAM background like Leading and Consulting
(band-white removed — Amber: the white band didn't match; all
three Work sections share one background). FOUR categories in
Amber's order (July 2026: AI first, courses last — "to me this
one should be first and the courses and resources should be the
last block"): 1. AI Tools for GTM (Content Engine · Messaging
Agent · AI Sales Assistant — name per Amber: "ai gtm tools or AI
tools for GTM etc.") · 2. Marketing Activations ("Interactive
experiences built for conferences and campaigns.": Conference
Tarot Draw · The Secret Marketing Society — Amber: those two are
marketing assets, not products; new coral spark glyph, id wkg-m,
gradient FFD9CC→FF8F7A, strokes #B8354A — coral was the unused
brand hue) · 3. Products ("Independent apps and digital
products.": The Log · Digital Template Shop) · 4. Courses &
Resources ("Practical courses and guides built for specific
audiences.": Build Your Marketing Foundation · Youth Baseball
Parent Guide · Spain Travel Guide). ROW FORMAT: each project
is a ROW ON A HAIRLINE — no background, no border box, no radius,
padding 15px 0 desktop / 13px 0 mobile, border-top var(--line)
between rows. THE NESTED CARDS ARE RETIRED (Amber, July 2026: "each
major white container contains several smaller cards, which makes
the mobile page feel like nested boxes inside boxes … it starts to
feel more like a product directory than a personal portfolio"). ONE
SURFACE PER SECTION is the rule now: the category card holds, the
rows divide. Desktop drops the first row's rule (it opens the right
column); mobile restores it, because stacked the first row would
otherwise run straight into the category description. Title bold
with the coral ↗ pinned top-right on the title's FIRST BASELINE
(.bld-item-name is flex space-between, align-items baseline, arrow
line-height 1); description ONE concise sentence in #6F675D
(~5.2:1), no measure cap — the row IS the column, and the old 58ch
clamp broke one-sentence descriptions mid-thought. HOVER IS COLOUR
ONLY: the linked title goes coral-deep. The translateY(-2px) lift
went with the cards, and its reduced-motion reset with it — a row
with no edge has nothing to lift. Category head: glyph 56px (shrunk ~12% from
64, margin 10px), h3 intro grade, category description at SMALL/
muted so the project titles dominate (her ladder: project title
> project desc > category copy); mobile gap head-to-cards 18px
(was 6 — first card sat too close to the description). Linked
cards are fully clickable; hover = border deepens to
rgba(46,42,39,0.2) + translateY(-2px), 0.2s var(--ease), disabled
under reduced motion.
Two descriptions are Amber's verbatim (BYMF "An eight-module
marketing course for service businesses.", YBPG "A season-long
guide for parents of a 9–10U youth baseball team."); the rest
are condensations of her originals. NAMING CANON per her brief: the scavenger hunt
is publicly "The Secret Marketing Society"; the baseball project
is "Youth Baseball Parent Guide"; the tarot stat is 950 CARD DRAWS
(usage), not a 950-card deck; "Content Engine" drops the client
name in this section. LINKED ROWS (Amber-supplied live sites,
July 2026): Youth Baseball Parent Guide →
glastonbury-minors-parent-guide.netlify.app · Spain Travel Guide
→ autumn-2026-trip.netlify.app · Conference Tarot Draw →
apartmentalize.netlify.app · The Secret Marketing Society →
thesecretmarketingsociety.netlify.app. Linked rows are
`a.bld-item` with `target="_blank" rel="noopener"` and a coral ↗
(aria-hidden; hover nudges translate(3px,-3px)) — the site's
first external body links, so this IS the external-link
convention. IP RULE (Amber, July 2026): the internal AI tools —
Messaging Agent, Content Engine, AI Sales Assistant — NEVER link
out; the value inside them (personas, brand guidelines,
competitive positioning) is PERQ's and the client's IP. Messaging
Agent was briefly linked to perq-messaging-agent.netlify.app and
Amber had it removed — do not re-link it. The Template Shop never
links out either (shop name is on the withheld list). Remaining
rows stay plain divs until they gain a real destination — when
one does, same pattern; never ship an arrow to a thin page.
Mobile stacks the category header above its rows.
