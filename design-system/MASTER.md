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
Courses = peach · Workflow & AI Guidance = lavender · Consulting = blush.
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
  h1 40/64 (lh 1.05/1.03, ls -0.025/-0.03em; ONE display size on
  every page including the home hero — amended twice from the
  spec's 48/72 at Amber's consistency calls: 72 broke the hero's
  3-line rule, 48 made sub-pages outweigh home on phones) ·
  long-display (`.h1-long`) 36/50 · h2 30/44, stepped down from
  the spec's 36/50 so H2s sit clearly below EVERY h1 including the
  long-display pages (Amber's ladder rule: each level visibly
  smaller than the one above) · h2-long 26/38 (lh
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
  How I Work's `.nb-label` and `.hw-q-num` join the muted
  annotation group; its section eyebrows stay coral-deep.
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
  `how-i-work.html` (what an engagement is actually like),
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
questions and outcome titles at intro, the five simplifying
questions at h3, its prose and margin notes at body, its panel
labels and question numbers at eyebrow. Expertise, after the calm
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
25 brand > 21 intro.

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

## Expertise page (renamed from Capabilities; rebuilt 4× by 2026-07)

`expertise.html`. "Capabilities" is retired from the nav, footers,
titles and sitemap; `_redirects` 301s the old URL.

REBUILT FOUR TIMES. The fourth rebuild is the one that settled it,
because it started from what the page is FOR rather than what it
could list. AMBER'S THREE-PAGE SPLIT, which now governs all three:

- **Projects** — what you have built, changed, launched, improved.
- **Expertise** — the types of business and marketing problems you
  know how to solve.
- **How I Work** — what it is like to work with you, and how you
  approach messy problems.

The page answers ONE question: *what can Amber actually help with,
and how does she think about the work?* It is NOT a portfolio, a
services menu, or a résumé. Everything that made it a second
portfolio was cut in pass four: the two work artifacts, the four
oversized result figures, the "how my expertise shows up" verb rows,
the always-visible tool line, the industries section.

THE NUMBERS ARE GONE FROM THIS PAGE. 115% / 120% / 95% / 36% all
live inside their Projects case studies, About, and the home proof
strip. Repeating them here made Expertise a proof page competing
with Projects. If a figure ever comes back it belongs in a case,
not in a row of four.

PRESERVED across all four rebuilds: the quote banner ("AI should
give teams more time to think strategically, not just more ways to
produce."). NO SECTION EYEBROWS — Expertise, Projects and How I
Work are the eyebrow-less pages.

Flow, after the fourth pass:
1. HEAD. Amber's headline, verbatim: "I know how to find what's
   getting in the way of growth." She chose it over "Marketing
   expertise built through doing the work" because it positions her
   around BUSINESS PROBLEMS, not marketing skills. Butter tab on
   "growth." — one distinctive word, the site pattern. Lede: "My
   expertise sits across marketing strategy, execution, operations,
   and team development…" No eyebrow.
2. WHAT I HELP WITH. FOUR substantial areas, never twelve equal
   cards ("that will feel like a generic agency capabilities page").
   Each `.area` is a two-column block on a hairline — name left at
   the h3/card-title grade, everything else right — and each one
   runs in a fixed order:
   a. `.area-for` — WHO IT IS FOR, first, so the reader recognises
      themselves before they read a capability list;
   b. `.area-list` — six capabilities, two columns, small/muted, on
      the site's one bullet language (a 12×2px coral rule, shared
      with `.hw-do` and `.useful`);
   c. `.area-line` — the human sentence a capability list cannot
      carry, display face at intro grade;
   d. `.area-link` — ONE real project, and FOUR DIFFERENT
      DESTINATIONS: Strategy & Growth → #scanoptics, Brand/Content/
      Digital → #robert-james, Operations → #builds, Leadership →
      #perq.
   AI LIVES IN THE OPERATIONS AREA ("practical applications of
   AI"), as one capability among six. It is part of her expertise,
   not the page's identity.
3. QUOTE BANNER (her AI line, unchanged) as the chapter seam.
4. I'M ESPECIALLY USEFUL WHEN… Amber's six lines verbatim, and per
   her own note the strongest section on the page for communicating
   real value. A LOOSE EDITORIAL LIST, never cards: one column, the
   whole measure, hairlines, coral-rule markers, display face at
   intro grade. Nothing sits beside it.
5. TOOLS I'VE WORKED IN, COLLAPSED. Her sentence first — "Tools are
   useful, but they are rarely the strategy." — then a `<details>`
   disclosure over SIX groups in a 3×2 grid: Marketing and CRM ·
   Analytics and advertising · Web and creative · Planning and
   collaboration · Sales and operations · AI and emerging tools.
   NO LOGO WALL, EVER (Amber: "it would make the page feel more
   junior and software-focused than you are"). The always-visible
   `.tool-line` is gone — the whole point is that tools are hidden.
   ANALYTICS AND ADVERTISING IS THE ONE GROUP NOT IN HER LIST: her
   five groups omitted Google Ads, Google Analytics and SEMrush
   entirely, which would be a strange gap under a marketer whose
   strongest published results are paid-media results. Flagged to
   her; cut it if she disagrees.
6. THE BRIDGE TO PROJECTS. `.work-strip` — three links across on
   hairlines, display face, coral arrow. NOT cards, and never a
   repeat of a full project card. Three different areas: demand
   generation (#scanoptics), brand and website (#robert-james),
   tools and resources (#builds). Leadership is covered by the PERQ
   link inside its own area block. The industries line survives ONLY
   as small context beneath the strip, one sentence — Amber ruled it
   does not need its own section.
7. CLOSING BAND. "Not sure what kind of help you need yet?" with
   her paragraph, `Start a conversation` primary and `See how I
   work` ghost — the first CTA on the site pointing at How I Work,
   which is correct now that the three pages have distinct jobs.

THE STANDING REMOVE LIST for this page (Amber, July 2026): company
logos · client duration or tenure · long industry lists · multiple
rows of small capability cards · a permanently visible software
grid · detailed mini case studies · "full-service", "end-to-end",
"results-driven" · anything that sounds like she offers every
marketing service to everyone.

RESIST ADDING. Built here across four passes and all removed: a
typographic word composition, four oversized statement rows, a
numbered capability index, an asymmetric platform grid, a company-
logo strip, two outcome-led work artifacts, a four-across results
row. `artifact-rjr-hero.webp` and `artifact-mfcu-campaign.webp` are
still in the repo, orphaned — they were the artifacts, and the
full-size versions they linked to are still live on Projects.

The page's central message, in Amber's words: *"Amber understands
strategy, execution, systems, and people. She can figure out what is
wrong, recommend a realistic path forward, and help make it
happen."*

## How I Work page (2026-07, Amber's brief)

`how-i-work.html`. The page answers one question — what is it
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
