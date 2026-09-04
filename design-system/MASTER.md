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
- TYPE SCALE at a glance (mobile 390 / desktop 1440, measured, not
  nominal — h2 and h2-long were 0.7px short of their stated caps until
  2026-08 because the clamp slopes were rounded; both hit exactly now):

      h1                  40 / 50
      h2                  28 / 40
      h2-long             24 / 35
      h3                  24 / 30
      brand wordmark      22 / 25
      intro / card title  19 / 21
      body                16 / 17
      interactive         15.2 / 16   nav links, nav CTA, arrow links
      small               14 / 15
      eyebrow             12 / 13

  AUDITED 2026-08 across twelve pages at 390 and 1440, every element
  that renders its own text, tolerance 0.6px. Result: the site matches.
  Four families sit off the ladder and all four are deliberate —

    proof chips   .proof-stat 39.2 / 24.3 / 19.8 and .proof-label 12.8
                  step down across the three stacked home cards on
                  purpose. Micro-type, already sanctioned below.
    .ct-title     31.2 / 24.6, inside an aria-hidden thumbnail. It is
                  artwork, not content type, so the ladder does not
                  apply — same status as text inside an SVG.
    mobile menu   25.6px links in the full-screen nav. Tap targets.
    .ch-sign      15.75px, the "+" glyph at 1.05em of its own label.
                  Optical sizing of a symbol.

  One real drift was found and fixed: .sp-t, the Services situation-card
  titles, carried a private 17->19 clamp when card titles read at the
  intro grade. Re-run the audit after any type change; it is cheap and
  it caught two things eyeballing had missed.

  Desktop steps: 1.25 h1>h2, 1.14 h2>h2-long, 1.17 h2-long>h3,
  1.43 h3>intro, 1.24 intro>body, 1.13 body>small, 1.15 small>eyebrow.
  The bottom four are all under 1.2, which is where two sizes stop
  reading as different — see the note on the crowded sub-17px band.

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
set: tapered coral gradient swash under the hero accent word (and,
since 2026-09, under About's four level-one statements),
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
needs." (blush, work h1), "the marketing box." (blush, about h1 —
the box is the constraint, so it sits on the tension side; this
replaced "leader and consultant." in the 2026-09 About rebuild),
"touch the work." (butter, about section 03 — getting into the
work with the team is the collaboration side; About needed a
second tab once its contact heading lost "comes next."),
"work together." (butter, services h1), "marketing experience."
(butter, expertise h1), "practice." (butter, expertise CTA),
"businesses." (butter, how i work h1 — the collaboration side),
"a lot of questions." (blush, how i work section 2 — literally
the open-question side), and "comes next." (butter, dark CTA
bands) —
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

UPDATE 2026-09 (second): Amber raised the cap herself. Photography is
SEVEN appearances now, still one photo each and still no page opening on
one. The three additions: the linen-blazer desk shot on the course page
(below), the moodboard shot beside Fractional's "Some of it is just
being in the room" — the copy there is about presence, so the photo
argues the same point — and the cafe-and-laptop shot beside Work's
"Leading marketing", which is the recruiter-facing pillar and benefits
from showing her at work. All three share `.pf-split`, the same
photo-and-copy pair the course page already used, so three placements
grew one treatment rather than three. New photographs ship as WebP
(71-97K against 131-168K as JPEG); the structured-data headshot stays
JPEG for crawler compatibility. `amber-fugedi-sofa.webp` is prepared but
unplaced.

UPDATE 2026-09: the course page had been reusing the sunlit portrait
from the home teaser, which was both a fifth appearance and a second use
of one photo — two breaches of the rule below. It has its own now
(amber-fugedi-desk.jpg, the linen-blazer desk shot whose moodboard reads
"Strategy Creates Impact", which sits well beside "Who's teaching it").
Four appearances again, each photo used once. Amber supplied five new
photographs the same day; the four not placed are held rather than
scattered, because the count here is a deliberate cap, not an oversight.

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
13. **Diagnostic sweep (My Approach, section 02, 2026-09):** a
   highlight travels once across the six possible causes under "what
   looks like the problem" when the row scrolls in, then clears,
   leaving every cause at full contrast. Colour only (border-top and
   text; nothing moves or resizes). Attention passes over all six
   without settling on one, and the resting state says the same thing
   statically. 600ms per step, 400ms `ease` colour transitions (the
   "hover / colour change" case in the easing table, not a
   UI-response animation, so outside the 300ms UI cap).
   ONCE, NEVER A LOOP — and that is the accessibility design, not a
   detail. The first version cycled continuously, which put it over
   WCAG 2.2.2's 5s threshold for auto-updating content and therefore
   required a visible pause control; the button ended up the loudest
   element in the block (Amber: "what if we remove the pause
   button"). Six steps at 600ms is 3.6s, under the threshold, so no
   mechanism is needed and no button exists — the same shape as item
   10, the course-assembly strip. If anyone lengthens the dwell,
   check the total against 5s before shipping. Reduced
   motion: the JS never adds `.dx-sweeping` and no timer starts, so
   the row renders in its resting state from the first paint — every
   cause at full contrast, a correct static reading with no
   muted/dimmed items to explain.

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

## Expertise hero graphic — colour assignment (2026-08)

Six areas, and the palette has five hue families, so two areas must
share one. Rule: the two that share are the FARTHEST APART in the
composition, and no two neighbours ever share a family. Measured
centre-to-centre, the closest pairs are workflows/ops at 119px,
leadership/ops at 151 and leadership/workflows at 153 — those must be
maximally different. The farthest is strategy/brand at 340, so the pink
family is the one that doubles.

  strategy + planning    rose    #F7CFCB / deep #A25C6E   direction
  demand generation      butter  #F8EDBD / deep #B8891F   attention
  leadership + enablement sand   #F3E6D7 / deep #8F6236   people
  marketing + sales ops  sage    #D9EFD3 / deep #4A9F32   systems
  workflows + AI         lavender #DDD5F4 / deep #8F63E5  technology
  brand + digital        pink    #F6CFE3 / deep #A83E71   expression

Each badge ring matches its own circle — that is the whole point of the
badge, and two of them did not. Ops had a green badge over a salmon
circle; leadership had a rose badge over a sand circle. Brand and
workflows were both purple and 235px apart, which is what made two
different capabilities read as one thing (Amber: "the purposes are on
top of each other").

Fill opacities are tuned for EQUAL PERCEIVED WEIGHT, not equal number:
(1 - relative luminance) x opacity, held between 0.107 and 0.172. They
were 0.082 to 0.183, so density was doing distinguishing work that hue
should do. Recompute this if any fill changes.

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
  ~217px at 900px viewport height. CAPPED 2026-09 at
  `min(72dvh, 660px)`, Amber overriding the earlier "do not pin it".
  The reason: above 900px the proof chips leave the flow for the
  right-hand column, so the hero's content collapses from 599px on a
  phone (where they stack) to 289px, while the box stays tied to the
  viewport. Measured gap at rest before the cap: 233px at an 800px
  window, 305 at 900, 377 at 1000, 463 at 1120, 521 at 1200. After:
  800 and 900 unchanged, everything taller holds at 317. The parallax
  keeps its full 92.4px of drift either way (phone 52.8px), so the
  July 2026 collision bug stays fixed.

## Homepage identity hierarchy (2026-09, Amber)

The hero said what Amber does FOR you and never said who she is or what
level she works at. Copy only — no layout, spacing, animation or section
changes, and the h1, CTAs, proof chips and hero graphic are untouched.

THE DECK IS TWO PARAGRAPHS NOW. Who she is, then what she does today:
"I'm a marketing leader, strategist, and builder. More than ten years
spent turning messy business problems into clearer marketing, stronger
systems, and work a team can actually use." / "Today I lead growth
marketing, advise businesses, build practical systems and tools, and
teach what I've learned along the way." The second line does three jobs
her brief asked for separately: it puts the current leadership role in
the first screen, and it names the four seats — leading, building,
advising, teaching — without a new section or four cards.
`.hero .subhead:not(:last-of-type)` takes a 14px gap so the pair reads
as one block; only the last keeps the 42px drop to the buttons, and the
second gets a 0.24s entrance delay so they stagger.

THE SEATS ARE NAMED ONCE MORE, in the offers lede, where the engagement
types are introduced: "Leading, building, advising, and teaching are the
same work from different seats." That is the sentence that explains why
leadership, consulting and courses sit on one site, which is the
question the homepage could not answer before.

A MEASUREMENT NOTE THAT MATTERS FOR EVERY SWEEP IN THIS FILE: the
homepage reports `documentElement.scrollWidth` 1064 against a 1024
viewport, and it is NOT a horizontal overflow. `body` carries
`overflow-x: hidden`, so scrollX stays 0 and nothing scrolls; the
oversize elements are aura blobs and the quote marquee, both inside
clipping parents. Identical before and after this change. When the
overflow check fires, confirm with scrollX before calling it a bug.

Homepage detector holds at 20.

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

### About: restoring the mockup's editorial qualities (2026-09)

Amber's note after the previous pass: the content structure was right
but the page had become "a generic About page with alternating
background colors." She supplied the approved mockup. This pass was
design only — copy and section order untouched, testimonials and the
timeline untouched and verified.

ANNOTATION MARKS: the pass added four — a hand-drawn underline, a
coral asterisk, an oversized quote mark, a dot connector — and two of
them (asterisk, quote mark) were removed later the same day for having
no counterpart anywhere else on the site. See the revert entry below. Budget is 1-2 per section: the personality is meant to
register before the decoration does.

COMPOSITIONS ARE NOW ASYMMETRIC, which was the actual complaint. Every
section had drifted to the same near-even two columns. Now: 60/40 for
How I think and How I lead, 70/30 with a margin note for the strategy
section, three columns for the beliefs, a single narrow measure for the
reflective section, and 60/40 again for Outside the work.

BACKGROUNDS: the page ran cream/white/cream/white down its whole
length. Only the testimonials keep a band now. Separation comes from
spacing, rules and composition. This also dropped the detector from 17
findings to 14 — three pre-existing ones lived in the removed bands.

THE UNDERLINE IS AN ANNOTATION, NOT A TAB. `.tab-em` is blush and
butter only (peach and lavender were retired in July 2026), and a
lavender h1 highlight was declined once on those grounds. Amber asked
twice and supplied a mockup showing an underline, so About runs
`.ab-uline` as a separate device; the page still carries exactly one
`.tab-em` ("touch the work.", butter). Its first colour was wrong and
was corrected the same day — see the next entry. Do not generalise the
underline to other pages without deciding what it means there.

TWO BUGS FOUND BY MEASURING:
- `.ab-pull` carried `max-width: 15ch`, sized for a wide column. Inside
  a 40% column it wrapped the pullout into a ten-character tower six
  lines deep. The cap is 34ch now and the pull-line clamp came down
  from 2.6rem to 2.15rem.
- `.ab-ast` used `--coral`, which MASTER reserves for fills and
  buttons. It measured 2.60:1 as text on cream. Now `--coral-deep`.
  Decorative marks still have to be visible.

Page 8,246px to 7,959px. 38 text styles with zero contrast failures,
zero banned phrases, zero em dashes, no overflow 320-1920, every
asymmetric split collapsing to one column at 900.

### The underline was already in the design system (2026-09)

Amber, one line: "Use the on brand colors and underlines." She was
right on both counts, and the second half is the more useful lesson.

WRONG COLOUR. `.ab-uline` was drawn in `#8579C9`, which is not a token.
It sits between `--lavender` (#DAD4F5, a fill) and `--automations-deep`
(#574AA6, that fill's text partner) and belongs to neither. It reached
About because `#8579C9` already appears on My Approach, in the
`.hw-principles` hairlines and the `.pr-mark` SVGs — so it looked
precedented. It is not; it is an undocumented third lavender that
predates this pass, still live on My Approach, and left there rather
than changed on a page nobody asked about. Worth cleaning up.

WRONG DEVICE, which is the real point. The site already owns a
hand-drawn underline: the tapered coral-gradient swash under the
homepage h1 accent word, catalogued in the Marks section above. Rather
than reach for it, this pass invented a second underline — an even
2.4px stroke with a wobble — and gave it a colour to match. `.ab-uline`
now carries the homepage swash's own path and gradient (`--coral`
#FF6F61 to `--coral-deep` #B8354A) as a background image so it wraps
with the text. Coral text over a coral swash is exactly the homepage h1
treatment, so About's h1 and the homepage h1 are now the same device.
The remaining lavender marks (quote mark, dot connector) moved to
`--automations-deep` at 0.5/0.3/0.75 alpha, written as literal rgba to
match the rest of the sheet rather than the `color-mix()` this pass
briefly introduced and nothing else uses.

FIVE MARKS BECAME FOUR. The swash is hero-weight — it stops meaning
anything if every heading has one. It now sits on the four statements
Amber herself ranked level one: the h1, "the problem underneath the
problem," "more capable than when we started," and "leave things better
than I found them." The Level-2 pullout ("making it better") and the
"isn't really marketing" headline lost theirs.

WRAPPING. A background swash draws once per line fragment, so a marked
phrase that wraps gets two. Measured 320-1920: fine everywhere it
happens — "more" at the end of one line and "capable" at the start of
the next reads like real annotation. The one bad case was the h1 at
320-390, where "the" wrapped alone and compressed the taper into a
stray dash; "the " is now outside the mark, so the h1 swash is always
one fragment. Detector holds at 14, unchanged.

### About: hierarchy and air (2026-09, Amber's layout brief)

Design only — no copy, no reordering, no new sections, testimonials and
the timeline untouched. Amber's brief described the top of My Approach
("I ask a lot of questions", the What I'm listening for card) as if it
were About's; that came from an unlabelled comparison screenshot, and
those two items were left out. My Approach was verified unchanged by
pixel diff: 0 differing pixels across 5,809px.

THE REAL FINDING WAS FOUR SERIF SIZES INSIDE FIVE PIXELS. Measured at
1440: h2 40, .h2-long 35, .ab-pull-line 34, .ab-quiet-close 31,
.ab-quiet-open 30. That is why the page read flat — "too many serif
headlines are similar in scale" was exactly right. The three non-heading
display statements are now one size, the scale's own h3 step (30px).
The clamp is custom rather than var(--fs-h3) because --fs-h3 bottoms out
at 24px, which is .h2-long's mobile size — using it would just move the
collision to the phone. Ladder at 1440: 50 h1 / 40 h2 (35 long) / 30
pull and quiet / 24 principle / 17 body / 13 eyebrow.

PRINCIPLE HEADLINES went 21 to 24px, the h3 step's lower end, so they
are the strongest thing in their column. Mobile stays 19 — the brief
asked for "slightly", and at 390 everything else is compressed too.

THE BELIEFS STOPPED BEING A TABLE. The full-width hairline over each
column is now the site's own 26x2 coral dash, the same mark .sec-n puts
above a section numeral on My Approach. Gutters widened (34-62px), which
is the honest way to bring a three-up's measure down; body capped at
34ch, leading 1.55 to 1.7, and the heading gets 44-76px before the
columns start.

ONE MARK PER SECTION. The How I think headline gave up its swash so the
pullout could take the coral dash — the same dash as the beliefs, so the
page repeats a device instead of collecting new ones. Two swashes remain
on the page, on the h1 and the two later payoff statements.

SECTION TRANSITIONS: About was the ONLY interior page whose sections
butted straight into each other. Every other page separates them with a
.bridge, which adds 52 + 52 on top of the 104/104 rhythm — a real gap of
312px against About's 208. A bridge carries a line of copy and this pass
adds none, so About takes the spacing alone: .ab-air adds one rhythm
unit at the two transitions Amber named, landing on the same 312px the
rest of the site already uses. Page 7,959px to 8,245px.

AURA: `body.page-about .aura` drops to 0.3 desktop / 0.22 mobile against
page-sub's 0.55 / 0.45. At 0.55 the wash covered the whole upper half
evenly, which reads as a background rather than atmosphere. Sampled
after: the ground is clean #FDF9F5 away from the blob centres. About
carries more long-form reading than any other page and needs the
quieter ground; the phone blobs are 88-96vw, so the same wash turns into
flat colour fields on a 390px column.

Detector holds at 14. No overflow 320-1920. How I think's column
imbalance 23px, beliefs grid 0px.

### About's hero rejoins the interior hero system (2026-09)

Amber: the hero isn't on brand with the rest of the site. Measured
across all six page heads, and it was two things, both already ruled on
here.

NO PAPER TAB. Every other page opens with one — butter on Expertise, My
Approach, Services and Courses, blush on Projects — and MASTER's
page-head rule says why: eyebrows are retired sitewide, "the headline
leads and the paper tab carries the emphasis." About's h1 was running a
coral swash on coral text instead, and the swash is the HOMEPAGE h1's
device. The h1 now carries `.tab-em .tab-blush` on "the marketing box."
Blush is the right half of the pair on its own terms — blush is tension,
and that line is the page's tension — and it closes the standing census
gap: About had one tab where every other page has two. It is now one
blush and one butter, the same pair as Home, My Approach and Projects.

This also woke up CSS that had been sitting dormant since the About
rebuild. The below-480 treatment written for the old head tab — inline
background with box-decoration-break: clone, so a phrase too long for
one line breaks into a mark per line instead of stretching both pseudo
tabs into a solid banner — had lost its element when the swash replaced
the tab. Measured 320-1920: one line at every width from 430 up, two
clean marks at 320-390, no banner anywhere.

THE HEAD JOINT WAS BACK TO 184px, the exact number the 2026-08 pass
fixed. That was self-inflicted, same day: the section-transition air
added for Amber's layout brief put a rhythm unit on the head joint,
which has its own documented value (60-90px, July 2026) and is not a
section transition. `.ab-air` is off the head joint now — 80px at
desktop, inside spec — and stays on the in-page transition it was meant
for. Joints across the site: expertise 24 · services 35 · about 80 ·
courses 82 · projects 94 · my-approach 157.

The swash now appears twice on About, on the two payoff statements in
the lower half, which is where an editorial mark earns its place.

Detector holds at 14. No overflow 320-1920.

### About becomes a story, not a method (2026-09, third brief)

TWO SECTIONS REMOVED, and the removals are the point of the pass. "How I
think" ("I usually start with the problem underneath the problem") was
About explaining method, which is the other page's job — Amber's brief
calls the removal "intentional and important". "What keeps me
interested" went too, its best parts woven into the two story sections:
the variety is now why she stayed, and the blank-page moment sits in
How my view changed, where it belongs to a professional evolution
rather than to a list of things she enjoys.

"WHY I STARTED DOING THIS ON MY OWN" BECAME "HOW MY VIEW CHANGED", which
is a better frame for the same material. The founder-story framing spoke
to consulting prospects only; the new one reads to a recruiter, a hiring
manager and a course buyer as well, and consulting and courses arrive as
a consequence of the point of view rather than the subject of it.

FINAL ORDER, nine sections: hero · how I got here · how my view changed ·
what I believe · how I lead · outside the work · testimonials · the
short version · the timeline.

THE BUTTER TAB MOVED AGAIN, for the second time in two passes, because
it keeps living on headlines that get cut. It is on "the right
marketing." now — butter is possibility and that is the page's
resolution, against the h1's blush tension. If it moves a third time,
the lesson is to put it on a headline the page is unlikely to lose.

A CLEANUP SCRIPT BROKE A RULE, worth recording. The
remove-orphaned-selectors regex matches selector text on the same line
as the `{`, so given

    .ab-pull-line,
    .ab-quiet-open,
    .ab-quiet-close { font-size: ...; }

it read the selector as `.ab-quiet-close` alone, judged it dead, and
deleted from that line to the closing brace — merging the two surviving
selectors into the NEXT rule and dropping the pull quotes from 30px to
17px. The all-dead test was correct; the parse was not. Caught by
reading the type ladder back (50/40/30/21/21/17/13), not by looking at
the page. Never regex multi-line selector lists.

Detector 16 -> 14 — the two `tight-leading` instances and the long
uppercase eyebrow left with the sections that carried them. Page 9,596
to 7,907px at 1440. No overflow 320-1920. Testimonials, the short
version and the timeline verified byte-identical.

### About gains its two story sections (2026-09, Amber's brief)

The page explained how Amber works and never said how she got here. Two
new sections at the top, both story rather than method, and the hero
descriptor swaps "Always asking why" for "Teacher" — the courses were
not represented anywhere in the hero.

HOW I GOT HERE is the PATTERN behind the career, not the chronology; the
timeline at the foot of the page owns dates and roles. Its eyebrow is
"How I got here" against the timeline's "Curious how I got here?" —
both Amber's wording, both named in the same brief, so the echo is
deliberate.

REWRITTEN THE SAME DAY with Amber's own version, which is better than
the direction it replaced because it is specific: she got the internship
without realising she had applied for a marketing internship. The
first draft argued that the career had a through-line; hers shows the
accident and lets the through-line emerge. Headline changed with it,
"I didn't have a perfectly mapped-out plan" to "Marketing was a little
bit of an accident."

Its closing line — "what started somewhat accidentally turned into a
career I've spent more than a decade continuing to make my own" — sits
in the aside rather than at the foot of the prose, which is where How I
lead and Outside the work put theirs. 193 words against a 120-160
target: her copy, and the copy wins over the number, same call as
Outside the work.

WHY I STARTED DOING THIS ON MY OWN is the advice-quality argument and
the closest this site comes to a critique. The brief is explicit that it
must not read as an attack on agencies, so the subject is always the
business on the receiving end and whether it can evaluate what it is
being sold. Built on devices already here: the "post more / send more
emails" run is `.ab-beats`, the alternatives are the site's one bullet.
208 words against 150-200.

`.ab-dots` IS BACK. It was deleted when the last list left the page;
this section needs it, and it returns as the same rule — the 13px open
coral ring with the connector drawn per item.

WORD COUNTS against her targets: origin 136 (120-160) OK · own 208
(150-200) · how 115 (70-100) · believe 39 · lead 98 (100-130) · keeps
125 (100-140) OK · outside 365 (250-300). Two are over and both for a
reason worth keeping: How I think carries the "I like strategy, I just
don't want to get so far away from the work" line she has now asked to
preserve twice — without it the section is 89 words, inside the target.
Outside the work is her own supplied copy, sentence for sentence; the
overage is the brief's word target disagreeing with the brief's copy,
and the copy wins.

DETECTOR 14 -> 16, and the delta is worth stating rather than hiding.
Removed one: `.ab-beats` was bordered, and cramped-padding fires on any
wrapper with a visible boundary however much padding sits beside it, so
the coral rule is painted now like the section rules and the belief
dividers. Added three: two `tight-leading` from the two NEW pull quotes
at line-height 1.16, and one `all-caps-body` from the 33-character
eyebrow "Why I started doing this on my own", which is her wording.
The leading was tested at 1.3 and rejected on sight — at 30px the quote
stops reading as a quote and starts reading as large body copy. The rule
is calibrated for body text; these are display.

Head joint measured before and after at 172px from the copy column and
122px from the portrait — IDENTICAL, so nothing regressed there. It is
over MASTER's documented 60-90 and predates this pass.

Protected sections verified byte-identical again. Page 7,362 to 9,520px
at 1440. No overflow 320-1920.

### About refinement pass: audited, one change (2026-09)

A second brief arrived covering copy rhythm, redundancy and visual
emphasis. Audited every point against the page rather than assuming, and
almost all of it had landed in the rewrite an hour earlier: flow, How I
think's length, the three one-line beliefs, the mentoring section, What
keeps me interested, the personal story, the closing block, the compact
short version. Two things were genuinely outstanding.

THE BURNOUT LINE NOW STANDS UP. "I'm ambitious, but I don't think
burnout is a personality trait" was buried mid-paragraph. It is its own
line: display face at intro size (21px at 1440, 19 on a phone) with
40px of air either side. Above the 17px body, below the 30px pull
quotes, so the three lines Amber wanted emphasised now sit at two
levels rather than three sizes competing. No new mark — the brief says
typography and whitespace. The other two lines she named were already
pull quotes with the mark and underline.

THE REDUNDANCY AUDIT WAS RUN, NOT ASSUMED. Sentence-set comparison
against My Approach (Jaccard on normalised word sets, threshold 0.34,
82 About sentences against 61). Everything that scored was shared nav
and footer chrome except ONE real hit at 1.0: "Strategy only matters if
it gets built." is About's belief 02 AND My Approach's section 03
heading, word for word. Amber's brief names that belief verbatim as one
to keep, so About keeps it and the duplication is flagged rather than
resolved — it is a decision about which page owns the line, not a
cleanup. Nothing else crossed the threshold; the two near-misses (0.42,
0.36) were incidental word overlap.

MOBILE SCAN, MEASURED AT 390: no paragraph runs past six lines, most are
two to four. Outside the work is 15 paragraphs and 52 lines, the longest
on the page and deliberately so — it is the section that does the job
nothing else on the site does.

SIXTH SPECIFICITY LOSS. `.ab-stand` set font-size and margins and did
nothing: `.hw-body p` declares both at (0,1,1). `.hw-body p.ab-stand`,
at the end of the sheet. This page has now lost six rules to the same
pattern and it is worth a structural pass on the sheet rather than
another patch.

### About rewritten to separate it from My Approach (2026-09, Amber's brief)

Her framing, which is the useful part to keep: ABOUT is who she is, what
shaped her, what she cares about and what she is like to work with. MY
APPROACH is how she diagnoses, prioritises and executes. The page had
drifted into being a second My Approach.

THE STRATEGY SECTION IS GONE. "I'm a strategy person who still wants to
touch the work." — landing pages, CRM, twelve-step workflows — was the
clearest overlap, and it also restated belief 02. Amber's fallback line
survives as one sentence in How I think: "I like strategy. I just don't
want to get so far away from the work that I stop knowing whether it
actually works."

THE BELIEFS ARE ONE LINE EACH now. Three paragraphs apiece was teaching
the method, which is the other page's job. These state a point of view;
the method lives elsewhere.

WHAT KEEPS ME INTERESTED GAINED ITS CREATIVE HALF — the blank-page
moment, an idea becoming a campaign or a tool. Without it the section
argued that she likes analysis, which is half the answer to why she is
still doing this after a decade.

OUTSIDE THE WORK IS NOW THE LONGEST SECTION ON THE PAGE and reads as one
continuous story rather than a list of traits: ideas and side hustles,
making things, learning for its own sake, growth, caring deeply, health
and burnout, travel and food and dogs, and a closing paragraph. The
payoff pulls out beside it.

ITS LAST PARAGRAPH WAS REWRITTEN THE SAME DAY. "Underneath all of it, I
think I'm someone who wants to keep learning, keep creating, keep
investing in people, and leave things a little better than I found them"
said what the pull quote beside it says, in weaker words — the reader
met the same idea twice in a row. It is now "I think a lot of that comes
down to what I choose to invest in: the things I'm learning, the ideas
I'm building, the people I care about, and the kind of person I'm trying
to become", which hands off to the payoff instead of pre-empting it. The
ending reads interests, then what she invests in, then the statement.

WHAT CAME OUT THAT WAS NOT IN HER BRIEF, all flagged rather than dropped
quietly:
- the pull-quote notes under "I like figuring out what is actually going
  on" ("sometimes that answer is a campaign...") — more examples, which
  the brief rules out for this section
- the four prose paragraphs opening The short version, which were a
  capability list; the brief asks for resume shorthand only
- the third How I think example ("show me a process everyone hates"),
  merged away by her own copy

"Business, people, behavior, and systems." IS BACK under Education. It
came off this morning at her request and the brief puts it back as the
supporting line — noting it here so the next removal is deliberate.

TWO DEVICE CONSEQUENCES:
- the butter tab lived on "touch the work." and left with the section,
  which would have put About back to one tab against every other page's
  two. It moved to "isn't really marketing." — butter is possibility,
  and that headline is the page's turn.
- `.ab-uline` is retired. Both pull quotes carried an inline swash AND
  the whole-quote underline added last week, so a wrapping quote drew
  three coral marks stacked. The whole-quote rule uses the same
  hand-drawn stroke, so the mark language is unchanged.
- `.ab-dots`, `.ab-note`, `.ab-honest`, `.ab-think-out` and `.ab-7030`
  are removed from the sheet: 15 rules, all orphaned by the rewrite and
  all About-only.

Protected sections verified byte-identical: testimonials (5,704 chars)
and the timeline (5,519). Meta description brought in sync — it was
still listing demand gen, CRM and go-to-market, which is now the other
pages' content. Page 8,324px to 7,225px at 1440. Detector holds at 14,
no overflow 320-1920.

### Desktop caps left on when the columns went away (2026-09)

Amber, from a phone: "we waste so much space." Measured every text block
at 390 against the 342px a phone actually has, and two were wearing a
measure cut for a desktop column they no longer sit in.

`.ab-note`, the strategy margin note, carried `max-width: 22ch` — right
for a 30% column at 1440, and still 199px of 342 once the page stacked.
Released below 900; it keeps the cap at desktop, where it IS a margin
note. Five lines to three on a phone.

`.ab-cred` held two columns down to 320, which is 119px each, and ran
the education entry to NINE lines. One column below 640 — two columns
only once each clears about 280px. Nine lines to four at 320, six to
three at 390.

BOTH OVERRIDES LIVE AT THE END OF THE SHEET, and that is deliberate.
Written next to the rest of the About CSS they did nothing: both
properties are set again in the responsive blocks further down at equal
specificity, so source order decides, and earlier loses. That is the
FIFTH rule on this page to go that way — `.hw-do-tall`, `.ab-think-key`,
the note leading, `.h2-long`, and now these. When a declaration has no
effect, look below it before changing the value.

The timeline's proof chips also measure narrow at 390 but they are
inline chips sizing to their own text, in a protected section. Left
alone.

### Cleaning the lines out of How I think (2026-09)

Amber asked whether the transparency line should be a quote banner, and
for the lines in this section to be cleaned up. The section was carrying
four line devices: the bullet connector, a hairline over the
transparency line, the column divider, and the underline under the pull
quote.

THE CONNECTOR WAS ENDING IN MID-AIR. Drawn as one line down the `<ul>`
with `bottom: 1.6em`, it stopped part-way through the last bullet's
second line — the inset is a guess about how tall the last item is, and
it is wrong whenever that item wraps. It is drawn per item now:
`li:not(:last-child)::after` with `height: 100%` from the ring centre.
Consecutive items differ in top by exactly one item height (padding, no
margin), so each segment lands on the next ring and the last item draws
nothing. Measured at 390, 900 and 1440: the connector ends 0px from the
last ring centre, on both lists.

THE HAIRLINE OVER THE TRANSPARENCY LINE IS GONE. It was doing least of
the four — separating that line from the examples it belongs to, and
leaving it stranded under a floating rule. Space carries it now,
34-52px.

NO QUOTE BANNER, and this is a recommendation rather than a change. The
section already has its display moment on the right; a second one in the
left column gives it two focal points, which is the thing Amber's own
layout brief said to avoid ("one dominant visual idea per section"). The
line is a working norm, not a headline. If it should be louder, the move
is weight or colour on the same body size, not a second quote.

### The belief headlines were 9px out of line (2026-09)

The star over the middle belief is 15px tall, the dashes over the other
two are 4px. Laid out as plain blocks with their own margins, that put
the middle headline 9px below its neighbours — measured, not eyeballed:
h3 tops at +34 / +43 / +34 inside their columns.

`.ab-pm` is a fixed 16px band now, as tall as the tallest mark, with the
mark centred in it. All three headlines start at +44 at every width from
320 up. The mark can change without moving the type, which matters here
because the mark differs by column on purpose.

The BODY starts still differ (+87 / +122 / +87) because the middle
headline runs two lines. That is the headline being longer and a step
larger, not a bug; reserving two lines on every h3 would align the
bodies too, at the cost of a gap under the one-line headlines and a more
tabular read — which is what this section was rebuilt to get away from.

### Two measure bugs in the beliefs and the quiet section (2026-09)

WHAT KEEPS ME INTERESTED was capped at 60ch, which measured 622px inside
a 1200px shell — half the page empty to its right, reading as a mistake
rather than as a deliberate narrow measure. Widened twice the same day:
78ch first, then 88ch (912px) once Amber asked for every beat on ONE
LINE. `.ab-beats` is 84ch, and that number is measured rather than
chosen — set each beat to white-space:nowrap and read its width back:
the longest is 785px of text at 21px Newsreader, plus 32px for the rule
and its inset, so the block needs 817. 84ch gives 871 with headroom for
font fallback. All five hold one line from 900px up; below that they
wrap, which is unavoidable — there is not that much page.
`.ab-quiet-close` went 38 -> 44ch (646 -> 748px), which takes it from
three lines to two. ONE line is not available: at 30px the sentence
needs 1308px and the shell holds 1152. Two lines are reached anywhere
above 700px, so the width was chosen on how the break balances —
measured the last line's fill at eight widths, and 748 leaves it about
three quarters full where the parent's own 913 leaves it half and reads
ragged.

THE MIDDLE BELIEF WAS 46px NARROWER THAN ITS NEIGHBOURS. Amber asked
whether the beliefs body was the right size; it was — 17px, --fs-body,
the same as every other paragraph on the page. The problem was the
measure, and underneath it a real bug: the column dividers were built as
per-column padding, so the middle column carried an inset on BOTH sides
while the outer two carried one each. 255px against 301px, which is what
pushed "Strategy only matters if it gets built." onto a third line.
A gutter divides evenly by construction, so `column-gap: 64px` replaces
the padding and the painted rules move to positions computed from the
gap — `calc((100% - 128px) / 3 + 32px)` and its partner — rather than
33.3%/66.7%, which were only correct while the gap was zero. All three
columns now measure identically at every width.

AND THE DIVIDERS WERE PAINTING OVER THE STACKED LAYOUT. Their media query
was min-width 761 while `.ab-think-grid` only becomes three columns at
901, so between those two widths the page drew two vertical rules down
the middle of a single stacked column. Both are 901 now. When a rule is
scoped to a layout, scope it to the SAME breakpoint that creates the
layout.

`.ab-think-body p` keeps a 66ch cap. It never binds in the three-up
(columns run 262-352px) and catches the stacked layout, which was
running an 852px measure at 900px wide, about 101 characters a line.

### About type and section audit (2026-09, Amber: "I see some differences")

Rendered every section at 1440 and read back rhythm, eyebrow size, h2
size, body size and leading. Three real inconsistencies, two of them
mine from the same day.

EYEBROWS AT 17px INSTEAD OF 13. How I lead and Outside the work only.
When the heading moved out of its margin column it landed INSIDE
`.hw-body`, and `.hw-body p` (0,1,1) outranks `.eyebrow` (0,1,0), so
those two eyebrows were being set as body copy — wrong size, wrong
tracking. Fixed structurally rather than with a specificity patch: the
eyebrow and headline now sit in a plain wrapper with `.hw-body` nested
under them, which is what How I think already did.

`.h2-long` WAS SPLITTING THE HEADLINES 35/40 FOR NOTHING. Measured line
counts with and without it across 320-1920: below 900 it earns its keep
(without it "underneath the problem" gains a line at 390 and 768, "touch
the work" at 768, "isn't really marketing" at 320), and from 900 up it
changes NOTHING — all it did there was leave the page with section
headlines at two sizes. It now stands down above 900 on About. One h2
size per breakpoint from 901 up.

SUPPORTING COPY LEADING 1.5 vs BODY 1.55. `.ab-tags`, `.ab-note` and
`.ab-pull-note` sat half a hundredth apart from body copy — invisible,
and one more number to keep straight. All 1.55 now. Note the trap: a
new unified rule did nothing, because those three are set again in the
responsive block near the end of the sheet at equal specificity and
later source order. Fixed at source. That is the FOURTH rule this page
has lost to that pattern.

CLEAN AFTER: eyebrows all 13px, section h2s all one size, body 1.55
everywhere except the beliefs at 1.70 (Amber's ask) and `.ab-beats` at
1.42 (display text, different role), rhythm 104/104 on every section but
the first, which takes 0 because the hero provides that gap.

STILL DIFFERENT, ON PURPOSE OR PENDING: the strategy section is the only
narrative section without an eyebrow — adding one is new copy, so it is
Amber's call. Testimonials and the timeline carry no hairline because
they are protected.

### The beliefs stop looking like a report (2026-09)

Amber: all three columns were running number -> headline -> paragraphs,
which scans well and reads corporate against the rest of the page.

NO NUMERALS. Each belief is identified by its headline alone, over a
small hand mark: the dash on the outer two, the four-point star on the
middle one. That star is the whole of the "make the middle slightly more
prominent" ask, plus one type step on its headline (24 -> 26px). No
card, no second treatment — the moment a column gets its own box the
section is a comparison table again.

COPY IS AMBER'S, shortened by her: "actual words" -> "words", "do not
match" -> "don't match", and the AI sentences come off the end of the
third belief so the columns balance. Measured after: all three columns
at 426px, dead level.

THE LAST LINE IS PULLED OUT. "I'm always looking for some version of:
can this be simpler?" is display face at 1.4rem over a hairline —
Amber's suggestion, and it gives the third column the same kind of
landing the first two get from their closing sentences.

SPECIFICITY, AGAIN: `.ab-think-key h3` did nothing. The responsive block
near the end of the sheet sets `.ab-think h3` at the same specificity
(0,1,1) and later source order, so one class cannot win. `.ab-think.ab-think-key h3`
does. Third time this page has lost a rule to that pattern — when a
declaration has no visible effect, check for a same-specificity rule
further down before changing the value.

Detector holds at 14.

### About: two columns, heading inside the left one (2026-09)

Amber's newest mockup of How I think, with "use the correct colors /
brand guidelines but this format is much better." The format is adopted;
the mockup's lavender and its different nav are not.

THE HEADING CAME OUT OF THE MARGIN. The previous mockup put the eyebrow
and headline in their own 30% column; this one stacks them at the top of
the left column and splits the section roughly in half. `.ab-sec` is
gone. Fewer columns, more room for the copy, and the headline sits
directly above the material it introduces. `.ab-6040` is 1.12/1 now and
the aside stretches, so the divider runs the section's full height as
the mockup has it.

THREE FORMAT DETAILS, all in brand colour. Two more were tried the same
day and pulled by Amber:
- NO ITALIC IN SECTION HEADLINES. An italic coral em was added on the
  strength of `.hero h1 em`, which does exist in the sheet — but the
  only `<em>` in a headline anywhere on the site is the HOMEPAGE h1
  ("needs.", the one that carries the swash). Expertise, My Approach,
  Services, Projects and Courses have none. A CSS rule existing is not
  the same as the site using a device; check the markup, not the sheet.
- NO DRAWN STROKE UNDER SECTION HEADLINES. It read as a mark floating
  under the headline attached to nothing. `.eyebrow + .section-title::after`
  is gone; the underline that stays is the one under the pull quote,
  which sits against the type it belongs to.
- the connector down the three examples is back, at 22% coral. It was
  pulled once for implying a sequence; at that weight it reads as a tie
  rather than an order.
- a rule between the examples and the line that follows them.
- the pull quote is underlined as a whole, not on a phrase inside it.

TWO BUGS, BOTH MINE, BOTH WORTH THE NOTE:
- The first unwrap used a non-greedy `<div class="ab-sec-body">(.*?)</div>`
  to lift the heading out. Non-greedy stops at the FIRST `</div>`, so it
  captured a fragment and the aside ended up nested inside the left
  column — the section rendered as one column and the pull quote fell to
  body size. Redone with a depth-counting matcher. Do not parse nested
  markup with a lazy regex.
- Patching a rule by string surgery left a stray `}`. Every rule after
  it silently stopped applying — the pull-quote underline computed
  `content: none` while looking perfectly correct in the file. THE BRACE
  COUNT WAS BALANCED, 1748/1748, because an extra close matched an extra
  open elsewhere. A balanced count does not prove correct structure;
  check that a rule you just wrote actually computes.

Detector holds at 14. No overflow 320-1920.

### About: the mockup's structural furniture (2026-09)

Amber, pointing at the mockup again: "more aligned with this layout."
Four things it had that About did not, all structure rather than marks.

SECTION HAIRLINES. The mockup rules every section off from the next;
About was separating with whitespace alone. `.ab-rule` puts --line
across the top of seven sections. NOT the first one — its padding-top is
0 by design because the hero provides that gap and the head joint has
its own documented value, so a rule there lands flush on the content,
which the detector caught. NOT the testimonials or the timeline: both
are protected, and a rule across their top changes how they read.

HEADLINE UNDERLINES. A drawn stroke under the section headline itself,
not under a phrase inside it — the mockup's most repeated device. On the
four margin-heading sections at 52% of the heading width; the beliefs
and strategy headings are full-width and a half-width stroke under a
full-width headline reads as an accident.

BELIEF COLUMN DIVIDERS, and the fourth attempt is the one that worked.
The first three lost to the detector's cramped-padding, which fires when
a child sits against a visible boundary and fires however much padding
is beside it. The rules are painted on the GRID now as two 1px
background gradients at 33.3% and 66.7%, so no child carries a border
and there is nothing for that rule to find.

PULL QUOTES ARE MARKED, NOT RULED. An open quote over the first, a coral
asterisk over the two payoff lines, both replacing the short stroke. One
mark above and one underline inside, as the mockup has it — a swap, not a
third device stacked on.

A DETECTOR NOTE WORTH KEEPING: cramped-padding fired 8 times on
`.ab-rule > .wrap` even with 63px of measured padding-top, because
`.wrap` DECLARES `padding: 0 24px` and the rule reads the declaration,
not the computed value. Moving the border from the wrap to the section,
which declares its own 104px, cleared all eight. When that rule fires
against generous padding, look at what the element declares rather than
what it computes.

Detector holds at 14. No overflow 320-1920.

### Annotation, not illustration (2026-09, doodle pass three)

Amber: one large mark per section reads as isolated and does not match
the mockups. The marks are inline now, small, sized in em, and every one
is anchored to a specific piece of copy. Nothing stands on its own in
empty margin.

WHAT EACH ONE IS ATTACHED TO, which is the whole discipline here:
- the kicker asterisk, hero
- a question mark closing the bullet that IS a question ("...wonder why
  everyone is still doing it")
- an asterisk opening the Strategy margin note
- a spark after "finally makes sense" — the line about something
  clicking
- a heart after "A team. A business. Someone's career. Myself."
Plus the two rules that were already attached to type and have now been
redrawn in the same hand: the stroke over each principle numeral and
the stroke over each pull quote were 26x2 blocks, the right size and
the wrong hand once everything around them was drawn. They are
data-URI SVG with the same slight curve now.

Marks per section: hero 1 · How I think 2 · What I believe 3 · Strategy
1 · How I lead 2 · What keeps me interested 1 · Outside the work 3.
Testimonials, The short version and the timeline stay clean.

NO MOBILE HIDE RULE ANY MORE. The old margin marks were hidden below
900 because stacked they bought height without meaning. Inline marks
scale with the type they sit in and cost no layout, so they stay at
every width.

Detector holds at 14. No overflow 320-1920.

### One hand across the whole page (2026-09, doodle pass two)

Amber pointed at How I think as the correct instance and asked for the
same logic everywhere: one doodle per section, smaller, closer to the
heading, same coral line, margin notes rather than illustrations.

ONE COLOUR. The lavender wave and spark are coral now. Lavender was
right when the sheets were read as a set — her sheets use both — but on
the page it made two systems out of one. `--lavender-mark` stays
defined and nothing on About uses it; My Approach still carries the
same hex unnamed.

ONE PEN, SIX SIZES. Every path now carries
`vector-effect="non-scaling-stroke"` at 2px, so stroke weight is
identical on screen no matter what a mark is scaled to. Without it a
38px spark drawn in a 60-unit viewBox and a 92px arrow drawn in a
100-unit one come out at 1.3px and 2.8px — the same drawing in two
different pens, which is exactly the inconsistency she was pointing at.
Sizes still vary (37-92px) so the page does not read as an icon set.

CLOSER. Marks sat 26-38px under their headline, adrift in the margin.
They sit at 18px now, measured, which reads as annotation on the
heading rather than decoration in the space below it.

SEVEN MARKS, one per section, every section covered:
hero asterisk (inline on the kicker) · How I think loop-arrow · What I
believe spiral, under the section heading and NOT on the three columns ·
Strategy the tiny dash, the smallest mark on the page, since the butter
tab already carries that section · How I lead wave, quote side left
clean · What keeps me interested spark · Outside the work heart.
Testimonials, The short version and the timeline stay clean.

Mobile is unchanged: every margin mark is display:none below 900, so a
phone sees one mark, the kicker asterisk. Measured 7 at 901+, 1 below.

Detector holds at 14. No overflow 320-1920.

### About's doodle vocabulary, from Amber's asset sheets (2026-09)

Amber supplied two sheets of hand-drawn marks — underlines, marker
strokes, brackets, looping arrows, sparks, question marks, hearts — and
a placement brief: sparing, intentional, 1-2 per section, in margins and
beside headings, never behind or overlapping copy, never as dividers.
This replaces the five conceptual spot marks from earlier the same day.
Those were mine, and her brief opens "do not redraw or invent."

TRACED, NOT CROPPED, and that is the one deviation worth recording. The
sheets are raster on white. Cropped marks would carry a white box onto
cream unless keyed out, could not take currentColor, and would miss the
draw-in and the reduced-motion override. So the SHAPES are hers, traced
as inline SVG — the loop of the arrow, the four-point spark with
concave sides, the open heart, the loose wave, the six-armed asterisk.
Nothing invented, and the sheets stay the source.

SEVEN MARKS, and three sections deliberately get none:
- Hero: the blush paper tab is the "soft highlight" the brief asks for,
  plus one coral asterisk on the kicker. Two elements, her stated cap.
  The tab stays — it is the site's page-head device, restored one
  commit ago precisely because the hero was off-brand without it.
- How I think: the looping arrow, in the margin under the headline.
- What I believe: NOTHING NEW. Brief says "use very little here"; the
  three short coral dashes over the principles already are the "short
  underline" it offers.
- Strategy: NOTHING NEW. The butter tab under "touch the work." is
  already the highlight the brief asks for.
- How I lead: the lavender wave. The swash under "more capable" stays.
- What keeps me interested: the lavender four-point spark, alone.
- Outside the work: the coral heart. The swash under "better than I
  found them." stays.
- Testimonials, The short version, the timeline: clean, as briefed.

LAVENDER IS BACK, and only here. `--lavender-mark: #8579C9` is now a
token. It is not a new colour — the sheet already carried that exact
hex, unnamed, in My Approach's .hw-principles hairlines and .pr-mark.
Decorative strokes only; lavender TEXT is still --automations-deep. This
supersedes the "keep coral" answer from earlier the same day only for
the doodles, which Amber's brief explicitly asks to be coral AND
lavender.

MOBILE: every margin mark is display:none below 900. Stacked, they sit
between the headline and the body and buy height without adding
meaning. What survives on a phone is the emphasis attached to type —
the tab, the swash, the dash, the kicker asterisk. Measured: 5 marks
visible at 901+, 1 below.

Detector holds at 14. No overflow 320-1920.

### About: the heading moves into the margin (2026-09, Amber's mockup)

Amber's third mockup for this page, asking how to get more of it in.
Audited it against the system and it splits three ways: structure that
the site already owns, marks that need a documented exception, and an
illustration language that contradicts a standing rule of hers. Only
the first is built.

BUILT — THE MOCKUP'S STRUCTURAL SIGNATURE. Every section in her mockup
puts the eyebrow and headline in a narrow left column with the content
running beside them, instead of a full-width headline with everything
stacked underneath. That device is already here: `.ab-split` does it in
The short version, `.hw-split` three times on My Approach. `.ab-sec`
(30% / 1fr) now does it for the four sections that have an eyebrow and
a split body — How I think, How I lead, What keeps me interested,
Outside the work. The beliefs keep a full-width heading; their three
columns need the room.

Two things had to move with it. The 60/40 inside those bodies tightened
to 1.35/1, because a 60/40 inside 70% of the page leaves the aside at
28% and stands the pull quotes on end. And the pullouts took the
mockup's vertical hairline — lavender at 16%, with real padding beside
it, which is why it did not trip the cramped-padding rule that killed
the last three attempts at a vertical divider on this page. How I
think's column imbalance came out at 3px.

DECIDED AND BUILT — Amber, 2026-09, on both questions put to her:
About becomes a documented exception for illustration, and the accent
stays coral. So the page now carries ONE spot mark per eyebrowed
section — five: How I think, What I believe, How I lead, What keeps me
interested, Outside the work — not the mockup's ten, and none of the
three belief icons, which sit in rounded pastel squares and are small
cards. The rule against cards stands.

They are `.glyph`, the site's own mark component, so they inherit the
draw-in on reveal and the reduced-motion override and add no new
motion to a closed budget. Stroke is currentColor at --coral-deep; the
one filled form in each is coral at 28%, the same value as the site's
open-ring bullet, so the marks and the bullets speak the same language.
No lavender anywhere: the accent stays coral, so About does not open a
third colour code.

Subjects are conceptual rather than literal — the surface line with the
real thing traced underneath it, a line that returns to where it
started, two rings on one trajectory with one further along, several
inputs resolving into a single clear line, one growing stem. That keeps
faith with the graphics voice ("smooth trajectories", "orbital
circles") while giving Amber the warmth she asked for three times. What
was NOT adopted from the mockup: the mug, the vase of flowers and the
puzzle piece, which are the literal clip-art end of it.

STILL NOT BUILT — the mockup also carries about ten
line-art spot illustrations (a heart, a puzzle piece, an arrow, two
figures on a path, a starburst, a vase and mug, three icons in The
short version), lavender as the section accent in place of coral-deep,
an oversized quote mark, coral asterisks and lavender hand-drawn
underlines. The illustration and colour questions are settled above. The rest of
the mockup's marks — an oversized quote mark, coral asterisks, lavender
hand-drawn underlines — are still out. They cross no rule and can come
back if Amber wants them; they were removed for having no counterpart
elsewhere. For the record, the rules the mockup crossed were:
- "No cards. No icons." — Amber, July 2026, repeated in five places in
  styles.css. The three belief icons also sit in rounded pastel squares,
  which are small cards.
- Custom graphics language: "PRECISE GEOMETRIC ABSTRACTION, not
  doodles." A mug, flowers in a vase and a puzzle piece are doodles.
- Colour coding is capped at two sets. Lavender as About's accent is a
  third, and `--lavender` is fill-only, so text would need
  `--automations-deep`.
The quote mark, asterisks and underlines cross no rule — they were
removed for having no counterpart elsewhere, and can come back as a
documented About device. This is Amber's call, not a refusal: the
recommendation is to make About an explicit exception with a defined,
limited mark set rather than either scattering doodles or holding the
line on a rule she may have moved past.

Detector holds at 14. No overflow 320-1920.

### Underlay boxes, added and reverted the same day (2026-09)

Amber asked for the underlay boxes from her mockup — a white block on a
soft pastel rectangle offset down and right — and they shipped on the
three beliefs and the three pullouts. Her next note was that the page
was not on brand like the rest of the site. She was right, and the
reasons were already written down here.

TWO RULES THE BOXES BROKE, both hers:
- "No cards. No icons." (July 2026). It appears in five places in
  styles.css. Every interior page separates content with a coloured
  rule and hairline rows — the Expertise chapters, the About timeline,
  .hw-principles, .nb-princ. About was the only page with a card grid.
- Shape & depth: "Shadows: --shadow-soft on hover lift only. No
  permanent heavy shadows." A hard-edged 14px offset shadow on six
  elements is precisely what that forbids.

The boxes are gone. Separation is the hairline, the measure and the
composition again, and the panel-bearing element count is back to 10 —
all of them the protected testimonial quote cards.

ABOUT HAD GROWN A PARALLEL DESIGN SYSTEM, which is the larger finding
and the reason the page read as foreign. It carried 28 .ab-* classes
that existed on no other page. Audited against the site and mapped back
where a counterpart already existed:
- `.ab-eyebrow` was a duplicate of the site's `.eyebrow` with different
  tracking and margin. Deleted; About uses `.eyebrow`.
- `.ab-dots` drew a filled lavender dot on a vertical connector rule.
  MASTER allows exactly ONE bullet language and it is the 13px open
  coral ring (`.hw-do`). The dots are now that ring, and the connector
  is gone — it implied a sequence those three examples do not have.
- `.ab-qmark`, an oversized lavender quote glyph, and `.ab-ast`, a
  coral asterisk: invented here, present nowhere else on the site,
  removed. The swash carries the emphasis.

A STANDING GAP, not fixed because it changes approved copy: every other
page carries exactly two `.tab-em` — one blush, one butter. About has
one, the butter tab on "touch the work." Placing a blush tab means
choosing which line of Amber's copy carries the page's tension, which
is her call.

Detector holds at 14. How I think's column imbalance came out at 15px,
the best it has measured.

### About editorial pass (2026-09, Amber's scoped brief)

"NOT a full rebuild." Everything above the testimonials plus the short
version was reworked; the testimonials, the timeline disclosure, the
header, the footer and the contact form were named as untouchable and
were verified untouched afterwards (5 real quote cards plus 5 clones,
3 timeline chapters, the disclosure, both anchors).

- SECTION EYEBROWS RETURN, on this page only: How I think / What I
  believe / How I lead / What keeps me interested / Outside the work.
  The July 2026 rule that retired eyebrows site-wide was aimed at ones
  that RESTATE their heading ("HOW I WORK WITH PEOPLE" over "The people
  side of the work"). These label a different thing from the headline
  under them, which is the case that rule allows. Coral-deep at eyebrow
  grade.
- THE 01/02/03 NUMERALS CAME BACK OUT, one round after going in. Amber:
  they made the page read as a process, which is My Approach's job. The
  hairline and the title carry the columns instead.
- "THINGS I END UP DOING" DELETED. Nine service lines answering "what
  can Amber sell me" on a page that should answer "who is Amber". It
  belongs on Services and Expertise, where it already is.
- THE HONESTY POINT is a single line at the end of How I think, not a
  section: "I want you to understand why I am recommending it. I'll
  tell you what I think you need, and I'll tell you when I don't think
  you need something." Shown as how she arrives at a recommendation
  rather than claimed as a virtue, and no agency is named.
- `.hw-quote` REVIVED. TODO.md listed it under dead CSS with zero
  instances since 2026-07; it was written for exactly this and now
  carries "I want people to leave more capable than when we started."
  Reuse beat inventing a second pull-quote component.
- OUTSIDE THE WORK is story-left, payoff-right, and the payoff is
  STICKY (`.ab-payoff`, `.xp-intro`'s device). The prose column runs
  about three times its height, so top-aligned it would be the column
  void this file keeps recording.
- EDUCATION moved out of the timeline disclosure into the credibility
  row as one grouped point. Sociology stays visible: it is the degree
  that explains the interest in people, behaviour and systems.

TWO THINGS DECLINED, both flagged to her rather than done quietly:
- A LAVENDER underline on the h1. The tab system is two colours only
  (blush = tension, butter = possibility); peach and lavender variants
  were retired in July 2026. The h1 keeps its blush tab.
- The h2 keeps its butter tab on "touch the work." even though the
  brief's copy for that heading is plain, because dropping it would
  leave the page with one tab against the two-per-page rule.

Result: 8,852px to 8,198px, 1,756 words to 1,480. 37 text styles with
zero contrast failures, zero banned phrases and zero em dashes in the
rendered copy, zero horizontal overflow 320-1920, detector at its 17
baseline.

### About design audit (2026-09)

Measured, not eyeballed. Most of what looked like defects were the
system working, and recording that is the point — the same four things
will look wrong to the next person who audits this page.

NOT BUGS, verified:
- The first section renders `padding-top: 0`. That is the site-wide
  `.page-head + section { padding-top: 0 }` rule; the head's own 80px
  bottom padding carries that seam.
- `.arrow-link` renders 16px here and 15.2px looks "expected" from its
  `0.95rem` base. The type layer deliberately overrides it to `1rem`
  ("interactive text sits in the 16-17px slot") and it measures 16px on
  About, My Approach and Expertise alike.
- The head-to-first-h2 seam varies wildly by page (About 152px, My
  Approach 397px, Expertise 46px) because each head has different
  content under the copy. There is no constant to violate here.
- A `fullPage` screenshot of this page is NOT evidence. The aura layer
  breaks Playwright's stitching and blanks whole sections; hiding the
  fixed nav does not fix it. Audit by section captures.

FIXED: `.ab-cred` note alignment. Below 1440 "B2B and service
businesses" wraps to two lines while the other three figures do not,
so their notes floated up and the row of supporting lines read ragged.
`.ab-cred-fig` now reserves two lines (`min-height: 2.4em`, its
line-height is 1.2), so the notes share a baseline at every width.
Grid rows already equalised the item heights; it was the内 content
alignment that was off.

KNOWN AND ACCEPTED: section 01's `.hw-split` runs a 223px column gap
(prose 441px against the 218px beats aside). That is the imbalance
class this file keeps flagging, but it sits between the 185px that was
accepted on My Approach section 03 and the 487px that was rebuilt, and
the aside's coral rule terminates it cleanly rather than trailing off.
Left alone deliberately; revisit if that section grows.

Also verified: 34 distinct text styles, zero contrast failures; zero
horizontal overflow at 320 / 375 / 430 / 768 / 900 / 1024 / 1280 /
1440 / 1920; every `.ab-*` and `.xp-reveal*` class in the stylesheet
is used in the markup (no dead CSS left behind by the rebuild).

### About: the personal layer (2026-09, second pass)

Amber asked for a stronger personal layer, and reversed one of the
calls from the pass before it. Worth recording, because the reversal
was right and the original objection was too broad:
- "LEAVE THINGS BETTER THAN I FOUND THEM" IS NOW IN. It had been cut
  as a bumper sticker. The objection was to the phrase standing alone,
  not the value, and she supplied the version that answers it: the
  line, then what it actually means (a team, a business, a process,
  someone early in their career, the people around her, herself), then
  "I am not always going to get all of that right." That admission is
  what keeps it off a mission statement. It sits in `.ab-lead`, the
  same standalone-line device section 01 uses, so it gets air without
  a card. LESSON: when a line reads generic, check whether the fix is
  cutting it or making it specific. This one wanted specificity.
- THE WHY-QUESTIONS MATERIAL lives in the personal section, not in
  section 01, because the personal half is the point of it: she asks
  it of herself as readily as in a meeting. Phrased "most of my
  questions are really me trying to understand why" to stay clear of
  My Approach's section heading, "I ask a lot of questions."
- HEALTH IS GROUNDING, NOT A HOBBY LIST. Fitness, movement, yoga and
  "my own head" run in one sentence with "I'm ambitious, but I don't
  think burnout is a personality trait." Mental health is stated
  matter-of-factly and never clinically.
- THE BURNOUT POINT STAYS PERSONAL. She noted it is also where she can
  help businesses, which is true, but "Make the work lighter" already
  argues that three sections up, and spelling out the link would turn
  a personal detail into a marketing lesson — the failure mode her own
  brief names. The reader can join them.

Page came out 8,949px against the 8,859px it started this arc at, so
the personal layer was effectively free. Rendered-copy check (not
source, which catches quoted instructions in comments): zero banned
phrases and zero em dashes. The only "innovative" on the page is the
actual name of her MBA.

### About refinement pass: another 10-15% of Amber (2026-09)

Her brief: "do NOT redesign... the goal is to add another 10-15% of
Amber herself", and do not make the page longer. It came out SHORTER
(8,859px to 8,523px) because the additions were paid for by cuts.

- BELIEFS BACK TO THREE. It had grown to five across two rounds and
  become a third of the page. Facts over feelings / Strategy only
  matters if it gets built / Make the work lighter stay. Neither cut
  idea was lost: collaboration moved into the leadership paragraph
  ("I'd much rather help someone become confident enough to challenge
  me than build a team that waits for me to have every answer"), and
  the bad-advice belief already runs on the homepage problem section
  and the course page.
- THE TRANSITION BAND BECAME A SECTION. "What keeps me interested
  isn't really marketing." plus one cascade, no explanatory copy —
  the page's emotional centre, sitting exactly on the professional /
  personal seam. The old bridge line ("good leadership should make
  people better...") went with it: the expanded leadership paragraph
  now says the same thing, so the band had become a restatement.
  It takes `band-white`, which is also what keeps the band rhythm from
  breaking after the testimonials move.
- TESTIMONIALS MOVED BELOW THE PERSONAL SECTIONS (her call: "the
  reader should first meet Amber, then show them that other people
  experience her the same way"). The quotes are largely about
  mentoring and how she is to work with, so they now read as proof of
  the two sections above them. `#recommendations` is unchanged —
  Services links to it and `_redirects` maps the old WordPress
  `/recommendations` there. Band order was re-alternated afterwards:
  the move had left three plain sections in a row and two white bands
  touching, which would have merged into one long white block.
- "OUTSIDE THE MARKETING" IS NOW ACTUALLY PERSONAL. It had been a
  list of professional curiosities (psychology, technology, design),
  which is a second interests slide, not a personal section. Now:
  never one hobby at a time, far too many side hustles, two days
  bothered by one sentence, yoga and the gym, a dog bookending both
  ends.

WHAT WAS LEFT OUT ON PURPOSE, and flagged rather than quietly
dropped. She also asked for self-awareness, growth, and "leaving the
world better than I found it".
- "Leaving the world better than I found it" is a bumper sticker
  sitting three sections below the specific version she already has:
  "leave knowing more than they did when they started", "more capable
  and confident, not more dependent on me". The generic line would
  have weakened the specific one.
- Self-awareness and growth as STATED traits break the rule her own
  earlier brief set when it removed "strong interpersonal skills" and
  "sound judgment": demonstrate, do not claim. The page demonstrates
  both (she says which parts of a plan turn out untrue, she wants to
  be argued with, she only took health seriously once she noticed).
- Mental health is in, but as "looking after my head is part of that,
  not a separate project" rather than "mental health is important",
  which states a value instead of showing one.

Verified: three beliefs, one h1, no horizontal overflow at 393/768/
1440, the timeline summary is keyboard-focusable and opens on Enter at
every width with zero `.reveal` elements stranded, the marquee's clone
set stays `aria-hidden` + `inert`, and the consulting date reads 2017
in both the credibility point and the timeline chapter.

### One belief, three pages, three formulations (2026-09)

Amber's sharpest positioning claim — most marketing advice is tactics
handed over by someone who never looked at your business — was written
down in exactly one place: `course-marketing-foundation.html`
("Diagnosis before tactics" / "most marketing advice hands you tactics
before it knows anything about your business"). That page sits behind
a Coming soon chip with no checkout, so the argument was reachable
only by clicking into a product nobody can buy. "Foundation" appeared
ZERO times on home, About and My Approach.

It now runs in three places, deliberately in three different
sentences — the working demonstration of the rule this file keeps
restating, that a shared BELIEF is consistency and a shared SENTENCE
is copy-paste:
- Home, problem section: "Most marketing advice was written for a
  business that isn't yours." One sentence dropped into the existing
  lede between the overwhelm and what she does about it. No new
  component, no third tab, and it happens to balance the column
  against the bottleneck art (263px against 255px).
- About, first belief: "Most of the advice isn't about you." Three
  paragraphs, because a beliefs section is where a point of view gets
  room.
- The course page: unchanged. It is the product built on the belief,
  so it keeps the sales framing.
Verified with a script that strips markup and compares sentence sets:
zero shared sentences between any pair of the four main pages, the
footer aside.

### De-duplicating My Approach against the new About (2026-09)

The About rebuild moved three ideas onto that page in full — facts over
feelings, strategy only matters if it gets built, make the work lighter
— and My Approach section 03 was already carrying all three in
compressed form. Flagged to Amber; she left the call here.

WHAT COLLIDED, measured rather than eyeballed (a script that strips
markup and compares sentence sets found the prose overlap was
near-verbatim, not just thematic):
- `.nb-label` "What I keep coming back to" was word for word About's
  new section heading.
- "A recommendation that never meets a real constraint tends to stay
  on the page" appeared on both, identically.
- The extra-approvals / duplicated-documents run appeared on both.
- The h2 "Strategy only matters if it gets built." is also About's
  second thought title.

THE FIX, and the rule behind it: **the page with room to make the
argument keeps it; the other page keeps what only it has.** About has
a section per idea; My Approach has one compressed section. So My
Approach dropped the sentences About now owns, kept the half About
does not say, and its aside was relabelled "What I work from" — two
pages cannot share a label. The h2 STAYS on both: with the supporting
prose now different, a repeated line reads as a refrain she believes
rather than a paste, and it is section 03's spine on that page.
NOTHING AMBER AUTHORED WAS DELETED — the three `.nb-princ` principles
she wrote and tightened earlier in the session are untouched; only the
label above them changed.

The trim then opened the hole this file keeps warning about: a ~80px
copy column against a 360px card, the same imbalance section 02 was
rebuilt to fix. `.hw-doing` moved INSIDE the copy column
(`.hw-copy-col`) so the split has two children again and the columns
land 21px apart at 1440 — the tightest pair on the page. Section 03
went 902px to 670px; the page went 6,194px to 5,796px.
Verbatim overlap between the two pages is now zero sentences (the only
shared string left is the footer, which is supposed to be shared).
The `.hw-do` lists still overlap — My Approach's six items are a
subset of About's nine — and that was left alone deliberately: a list
of work types repeating across two pages reads as consistency, and the
framing differs ("Things I end up doing" vs "That tends to mean I end
up doing things like").

### About rebuilt as a conversation (2026-09, Amber's brief)

"Feel like someone is sitting down with Amber and getting to know her,
rather than reading a résumé." The page was four blocks — hero,
timeline, quotes, credentials — and the timeline WAS the page: it ran
second, at full height, and was how a reader met her. Now it runs
last, inside a disclosure, and eight narrative sections carry the
introduction. Copy is Amber's, supplied verbatim; it is exempt from
the stop-slop mechanical pass under the usual rule.

ORDER: hero, the problem underneath the problem, what I keep coming
back to, strategy person who still touches the work, the people part,
bridge, recommendations, outside the marketing, the short version,
the timeline, contact. The recommendations keep `id="recommendations"`
(Services links to it and `_redirects` maps the old WordPress
`/recommendations` there) and now sit right after the mentoring
section, where a quote calling her "one of the best mentors I have
ever learned from" is doing the section's own work.

WHAT WAS RETIRED. The `.edu-grid` / `.edu-card` card trio and its
"Credentials behind the practice" section: three cards holding six
lines was the most résumé-shaped block on the page. The degrees are
facts the JSON-LD `alumniOf` claims, so they moved into the timeline
disclosure as plain rows rather than being dropped.

A FOURTH BELIEF WAS ADDED 2026-09, after the rebuild shipped (Amber: "a
core belief for me is collaboration and my idea is not the only idea").
The original three thoughts were all about rigour and execution — test
the opinion, build it, lighten it — so "What I keep coming back to"
read as someone who arrives, diagnoses and decides. "My idea is not the
only idea." sits second, where it pairs with "Facts over feelings"
(distrust the assumption, then distrust your own certainty) before the
section turns to execution. Her phrase became the title verbatim.
THE WORD "COLLABORATION" DOES NOT APPEAR ON THE PAGE. Her brief rules
out stating qualities as traits — the same instruction that removed
"strong interpersonal skills" and "sound judgment" — so the belief is
shown through what she actually does with it (wanting to be argued
with, crediting someone else's objection). Wording deliberately avoids
My Approach's "Challenge ideas, not people / assumptions questioned,
including mine": same belief, different words, which is the line this
site draws between consistency and copy-paste.

THREE DEVICES, NOT THREE INVENTIONS.
- `.ab-beats` — a run of short parallel sentences behind a coral
  rule, used FOUR times ("give me a website problem…", "sometimes
  that answer is…", "I still like rewriting the headline…",
  "sometimes that is a campaign…"). Every one is the same rhetorical
  shape, so it takes the same treatment; four bespoke treatments
  would have been four inventions for one idea. No bullets and no
  numbers — none of the four is a sequence, and the open ring stays
  reserved for lists that are.
- `.ab-think` — the three thoughts, as full-width rows with the title
  in the margin. Not three columns: each carries three or four short
  paragraphs, which is more than a third of the measure holds.
- `.ab-cred` — figure plus one line on a hairline. Amber: "do not
  overdo stats or turn this into a KPI dashboard", so no boxes, no
  oversized numerals, and half the figures are words. Figures read
  `--coral-deep`, the site's one stat colour.

COMPOSITION WAS THE FIRST BUILD'S BUG. Every section came out as a
single left-hugging column, which left ~700px of nothing down the
right of the 1200px About wrap and ran the page to 8,545px. Fixed with
`.ab-split` (33% / 1fr, `.xp-grid`'s ratio without the sticky) for the
prose-heavy sections and `.hw-split` for section 01's prose-plus-aside.
Page came down to ~8,040px and every section uses its width.
SECOND BUG, same pass: `.ab-think` had each paragraph as its own grid
row, so a title that wrapped to two lines made row one taller than its
paragraph and opened a ~60px hole before the next. The paragraphs sit
in one `.ab-think-body` item now.
THIRD, the specificity trap this file keeps recording: `.hw-do-tall`
(nine items over five rows, so the list stays two columns) is written
`.hw-do.hw-do-tall` at BOTH widths. `.hw-do`'s own rules sit ~600
lines later, so a single-class version lost the desktop rows on source
order — and a (0,2,0) desktop rule alone would then have beaten the
760px phone reset and left five rows on a phone.

THE TIMELINE IS UNCHANGED — same chapters, coral ticks, proof points,
PERQ case-study link and earlier-experience rows. What changed is
where it sits and that it opens from a native `<details>`, so the
whole record stays in the DOM and crawlable while closed and the
keyboard gets the toggle for free. `.xp-grid` drops to one column
inside it (`.xp-grid-solo`): its narrow first column existed to hold
the section heading and lede, and both now sit outside the disclosure.
Verified on open: zero `.reveal` elements stranded at opacity 0 (the
`toggle` listener in the reveal safety sweep already covered this) and
the three inner rows still open on desktop via the existing
`.xp-earlier` JS.

FACT CORRECTION SHIPPED AGAINST THE BRIEF. The brief's credibility
point read "Consulting since 2019"; it ships as 2017. Timeline canon
below says consulting began with Robert James Restoration in 2017, and
Amber moved that date herself in July 2026 precisely because 2019 left
an apparent 2018 gap. Shipping 2019 would have contradicted the
timeline three sections down the same page.

Measured after: 1,434 words, ~8,040px at 1440, one h1, no horizontal
overflow at 393-1440, every new text style at or above AA (lowest is
`.xp-reveal` summary at 5.50:1), all 44 `.reveal` elements visible
under both reduced motion and no-JS.

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

### Section 02 diagnostic diagram, rebuilt three times more (2026-09)

Amber's brief: stop implying both an order and a single answer. The
four-step flow (above) was replaced with one anchor sentence ("what
looks like the problem") and six possible causes — no numbering, no
arrows, no connector from the anchor to any one cause, staggered
rather than aligned so the row cannot be read left to right.

Two live-feedback rounds after it shipped, both worth keeping:

- **"What does that random icon do" / "not aligned... white
  background... not on brand."** The first build drew a hand-curved
  "fan" of lines under the anchor and colour-cycled the six causes
  coral/lavender/gold. That broke two rules at once: the custom
  graphics language is precise geometric abstraction, explicitly "not
  doodles" — and colour on this site is only supposed to code two
  defined sets (offers, expertise chapters); cycling colour across six
  unrelated causes invented an unearned third set. Fixed by giving
  every cause the site's ONE bullet marker (the open ring) instead —
  coral/coral-deep since there is no section accent here to code
  against, same logic as the hands-on list further down this page —
  and by dropping the icon entirely (shown beside an arc-ripple and an
  orbital-dot alternative; the anchor line plus the staggered cluster
  already read as "one thing branching into several" without one).
- **The alignment complaint was literal, not just a vibe.** The list
  sat in left-aligned grid columns under a centered anchor, so its
  visual mass leaned left of the anchor's own centerline even though
  the list's outer box was correctly centered — a geometrically
  centered container isn't perceptually centered when the content
  inside is left-aligned and only fills part of its width. Fixed by
  centering each item's bullet and text under itself, so the whole
  cluster hangs from the anchor rather than sitting in columns that
  merely happen to share its midpoint.

Mockups were reviewed IN THE LIVE PAGE, not as isolated component
slides — the first round of options was three white cards stacked with
black pill labels, stripped of nav/aura/cream context, and read as
generic wireframes regardless of which icon was on them. Rendering the
same three options inside real copies of `my-approach.html` (real
nav, real cream page background, real neighbouring sections) surfaced
the "on brand" problem the isolated slides hid.

**Third revision: Amber supplied a reference screenshot** of a 2x3
grid, hairline above each cause, the site's bullet marker inline with
the label — plus a spotlight that visibly moves and highlights one
cause at a time, "suggesting it could be any of these." This
supersedes the centered/no-icon version above rather than sitting
beside it: back to left-aligned columns (now with a hairline per item,
which the earlier version didn't have — the hairline is itself a
strong enough alignment cue that left-aligned text under a centered
anchor no longer reads as drifting the way it did with no rule and a
centered icon competing above it), two columns instead of three, and
a body line added to "or something else" ("the symptom doesn't fit
the usual buckets") so all six causes carry equal visual weight —
the earlier "quieter, no body text" treatment for that item existed
specifically to de-emphasise it in a STATIC list, and that reasoning
inverts once every cause including this one takes an equal turn in
the spotlight.
Motion budget item 13 (above) documents the animation itself.
Column breakpoint: two columns hold to 361px (this is where the
reference itself was captured — a standard modern phone width), one
column below that; the earlier version collapsed to one column at
560px, which would have flattened the exact width the reference
proved worked.

**Fourth revision: moved into `.hw-split` beside the copy** (Amber:
"shouldn't this be on the right of the text... how did it end up
stacked"). Sections 01 and 03 on this same page already pair
`.hw-body` with an aside (`.hw-notebook`) via `.hw-split` — copy left,
aside right, stacks below 860px. Section 02 was the one exception,
carried over from the 2026-08 decision to run the original four-step
flow at FULL PAGE WIDTH; that call was never revisited across three
later rebuilds of the graphic itself, so it just stayed full-width by
inertia rather than intent. `.dx` takes the aside slot now — sec-n and
the h2 stay full-width above the split, same as 01 and 03, so only the
body paragraphs and the graphic go side by side. `.dx` carries no
margin of its own (removed the leftover `clamp(28px,3.4vw,44px)` top
margin from when it followed the heading directly): `.hw-split`'s own
`align-items: start` plus its margin-top handle the spacing, and
unlike the hw-notebook aside's padded card, `.dx` has no padding to
offset against. Stacking order changed as a side effect: DOM order is
now body-copy-first, graphic-second (matching how 01 and 03 order
their own split children), so on phones the graphic now follows the
paragraphs instead of sitting between the heading and them. Consistent
with the rest of the page rather than the graphic's own prior
"show-then-tell" ordering, which is the more defensible tie-breaker
once the two disagree.

**Fifth revision: "feels overwhelming"** (Amber, immediately after the
fourth). The placement was right — she confirmed it — the execution
inside that column wasn't: six two-line cause cards in a ring-bulleted
2x3 grid is much denser than anything else `.hw-split` carries.
Sections 01 and 03 hold 3-4 short items in a `.hw-notebook` card; this
was carrying six, each with its own label AND a description, inside a
bare unbounded column with hairlines running down the page rather than
a contained card. Fixed by making `.dx` an actual `.hw-notebook`
instead of its own bespoke container — same card, same background,
same `-34px` alignment trick, same `.nb-label` eyebrow — and by
switching the list to `.nb-princ`'s single-column, border-top-only
rhythm (no ring bullet: the bold caps label is marker enough, and
`.nb-princ` already sets that precedent on this exact page). The
anchor's lead sentence and the closing line both came out too — each
restated something the body copy beside it already says, and a
notebook aside on this page has never carried more than a label plus
its list. Net effect: same six causes, same spotlight animation, about
half the visual furniture per item (no separate icon row, no
underline, no second typographic register for the label) and a single
bounded shape instead of a column of independent hairline blocks.
This is the version to extend, not the fourth — the fourth's `.hw-split`
placement call stands, but its `.dx`-specific card/list CSS is gone.

**Sixth revision: "is there too much copy/spacing"** (Amber, a length
audit, measured rather than eyeballed). Page-level numbers checked out
— 816-862 words in `<main>` (well under the 1,240 the 2026-07 length
audit trimmed to), section padding measured at exactly 104/104 desktop
and 52/52 on bridges everywhere, matching the documented rhythm. But
per-section column balance inside `.hw-split` did not: `.hw-body`
height vs. its aside's height across the three pairs on this page —
section 01 (ask-title) 58px apart, section 03 (build-title) 185px,
section 02 (beyond-title) **487px**. The fifth revision's single-column
list, in a card sized by 6 items against 2 short paragraphs, left
roughly half the section as dead air under the copy.
Two changes, additive:
- `.dx-list` went back to two columns (still inside the same
  `.hw-notebook` card, still no ring bullet, still the same spotlight
  mechanics — only the grid changed). Rows fill left-to-right so the
  pairing matches the earlier 2x3 version (Positioning/Demand,
  Conversion/Sales, Operations/Or-something-else). This alone only
  closed the gap to 354px — grid rows size to their tallest cell, and
  with most rows containing at least one 2-3 line item, height did not
  simply halve.
- `.hw-split-wide-aside`, a new modifier only this section uses:
  `0.85fr : 1.1fr` instead of the default `1fr : 0.8fr` — the aside
  gets MORE width than the body, inverted from every other `.hw-split`
  on the site, because this is the one pair where the aside carries
  more content than the copy beside it. Narrower text was wrapping
  more, which was actively working against the height fix. Widening
  it let more causes sit on one line and closed the gap to 233px —
  in line with section 03's 185px, not matching it exactly, and that
  was judged close enough against six real sentences of content: the
  alternative was trimming copy to hit a number, which is optimizing
  for the audit rather than the reader.
Verified sections 01 and 03 are untouched (still 58px / 185px) — the
new modifier class only applies where the HTML adds it.

**Seventh revision, and the one that resolved it: it was never an
aside.** (Amber: "what if we remove the pause button and improving the
design/layout.. or maybe this is a row below this text?") Both
instincts were right, and the second one names the actual mistake.
THE PAGE SORTS THIS CONTENT BY ITEM COUNT, and section 02 was filed
under the wrong one:
- `.hw-notebook` in `.hw-split` (sections 01, 03) — three or four
  short lines, one sentence each, no per-item label.
- `.lead-grid` (section 05) — six items, each with a label, a
  description and a top hairline, full width under the copy.
Section 02's content is `.lead-grid`'s shape exactly, and had been
since the causes gained descriptions. Three consecutive revisions
(bespoke card, then `.hw-notebook`, then column-ratio tuning) were all
attempts to make an aside hold six labelled items, and each one left
the same symptom behind: an aside 200-490px taller than the copy
beside it. Full width has no second column to balance against, so the
gap cannot exist — the fix was structural, not dimensional. Section 02
went 931px (tallest content section on the page, on 121 words) to
765px on the same copy, and now sits between sections 01 and 05
instead of being the outlier.
`.dx-list` follows `.lead-grid`'s column counts and breakpoints
exactly (3 / 2 at 1020 / 1 at 430) so the page's two full-width rows
stay in step. `.hw-split-wide-aside`, added one revision earlier for
the ratio tuning, was deleted with it — dead the moment the aside
went.
The pause button went the same way, and for a related reason: it only
ever existed to make a continuous loop legal (WCAG 2.2.2). Making the
sweep run once, in 3.6s, removed the requirement rather than the
compliance — see motion budget item 13.
LESSON WORTH KEEPING: three revisions treated a recurring measurement
(aside much taller than copy) as a spacing problem to tune. It was a
classification problem — the component was in the wrong family. When
the same symptom survives two different fixes, stop adjusting the
values and check whether the thing belongs where it is.


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


================================================================================
2026-09-04 · SERVICE DETAIL PAGES — the `.svc-*` system
================================================================================

FIRST PAGE: `/services/fractional-leadership`
(`service-fractional-leadership.html`, `<body class="page-sub page-service">`).
Built as the shell for the three that follow — `/services/consulting`,
`/services/workflows-ai`, `/services/advisory-mentorship`. Nothing in the
CSS names an offer.

WHAT A SECOND SERVICE PAGE HAS TO CHANGE
1. Title, description, canonical, og:url, og:title, og:description,
   twitter:title, twitter:description, the `Service` node's `@id`/`url`/
   `name`/`serviceType`/`description`, and the BreadcrumbList's third item.
2. The eyebrow, the h1, and the two `.tab-em` spans (blush in the h1,
   butter in the CTA band — the pair every other page uses).
3. The hero mark: same anatomy, the offer's own `-deep` hex for the
   strokes and its pastel for the gradient. Fractional is
   `--fractional-deep #2E7529` over `--sage`, matching its colour code on
   the Services page. Colour coding stays capped at two sets — the offers
   are one of them, and these pages ride that set rather than opening a
   third.
4. Row counts. Ten recognition signals, eight areas, four process steps,
   six/seven before-after rows and three proof rows are this offer's
   numbers, not the template's.
5. `_redirects` (both the 301 off the `.html` twin and the 200 rewrite),
   `sitemap.xml`, and the link out of the matching `#offer` block in
   `services.html`.

THE PAGE'S OWN LANGUAGE
Rules and rows, which is how every interior page separates content.
`.card-grid` is real but it belongs to the homepage's work teasers; the
proof block was built with it first, then rebuilt as `.svc-proof`
hairline rows, because a second card grid on an interior page is the
thing About got pulled back for. Bullets are the 13px open coral ring
from `.hw-do`. Process numerals are `.sec-n`, unchanged from My
Approach. Small caps are `.nb-label`.

BEFORE / AFTER WITHOUT GREEN AND RED
The two columns are separated by weight, not hue: Before runs `--muted`
against a 13px neutral dash, After runs `--ink` against the coral ring.
Colour coding is capped at two sets and a good/bad axis would be a third.

WHY THE BLOCK SITS AT THE END OF styles.css
Six rules on About have silently lost to same-specificity declarations
further down the sheet. A whole new system is not worth re-running that,
so `.svc-*` — its responsive rules included — is the last thing in the
file.

FOUR THINGS THE RENDER CAUGHT THAT THE CSS LOOKED FINE FOR
- `.svc-narrow` / `.svc-pov` as a max-width ON `.wrap` re-centred those
  two sections, because `.wrap` is the element carrying `margin: 0 auto`.
  Overriding its margin-left instead pinned them to the viewport edge.
  The cap belongs on the named children.
- `.page-head .head-copy .section-lede:last-of-type { margin-bottom: 0 }`
  is correct for a three-paragraph deck and wrong for everything else:
  the other eleven page heads carry exactly one lede, so unscoped it
  would have stripped 56px from under every head on the site. Scoped to
  `.page-service`.
- `.page-head + section { padding-top: 0 }` zeroes the section's own
  104px site-wide, so the entire head→section joint is the head's bottom
  padding. The art variant supplied 24px and the first h2 landed under
  the buttons. `.page-service .page-head` now carries
  `clamp(36px, 5.5vw, 80px)`, which is About's and Courses' 80/36.
- Columns collapsed at 720 while the site's section rhythm switches at
  760, giving the page two boundaries 40px apart. One boundary now: 760.

SECTION SEAMS are painted as `linear-gradient` backgrounds, not
`border-top` — the detector's cramped-padding fires on any child flush
against a declared boundary and `.wrap` declares `padding: 0 24px`
regardless of the 104px above it. Same fix as the About dividers.

MEASURED
No horizontal overflow at 320/375/390/640/720/760/761/768/900/901/1024/
1280/1440/1920 (scrollX 0 at every width, not just `scrollWidth`).
Type ladder at 1440: h1 50 › h2 40 › step h3 30 › `.svc-turn` 21 › area
h3 and body 17. 111 text nodes checked for contrast, none below 4.5:1
(lowest real value 5.50, `--coral-deep` on cream — the eyebrow and
`.sec-n`). Under `prefers-reduced-motion` the page runs zero keyframe
animations, every `.reveal` is opaque, and the eight residual hover
transitions are fewer than Services' 17 or My Approach's 35. Nav, footer,
aura and skip link are byte-identical to `services.html`.
`npx impeccable detect` reports 16 against Services' 25, all in
categories Services already carries.


================================================================================
2026-09-04 · ABOUT — "WHAT I GREW INTO", and the Fractional hero mark
================================================================================

ABOUT: ONE NEW SECTION, NOTHING ELSE MOVED
`WHAT I GREW INTO / I became less interested in being "the marketing
person" and more interested in making the business work better.` sits
between "How my view changed" and "What I believe" — the step between
changing her mind about what good marketing is and stating what she
believes. Order is now hero · How I Got Here · How My View Changed ·
What I Grew Into · What I Believe · How I Lead · Outside the Work ·
testimonials · The Short Version · the timeline · contact.

IT IS THE QUIET SECTION, ON PURPOSE. Its neighbours are the two busiest
on the page — `.ab-beats` plus `.ab-dots` plus a pull quote above,
the three-column belief grid below. Three paragraphs on the plain 68ch
measure and no device of its own. A second staccato block two sections
after the first would have read as the same section continuing.

The blank-page paragraph MOVED here out of "How my view changed", where
it was the only line in that section not about the shift in judgement.
That also brought view-changed to 156 words, inside its 140–180 target;
it had been 218.

WORD COUNTS against the brief: How I Got Here 184 (140–180), How My View
Changed 156, What I Grew Into 102 (100–130), How I Lead 98 (100–130),
Outside the Work 365 (250–300). The two that run over are Amber's own
verbatim copy plus the pull-quote block; trimming her approved lines to
hit a word count is not a thing to do quietly.

NOT A SERVICES BLOCK. The brief is explicit and the temptation is real:
"sales, operations, systems, technology, leadership" is one comma away
from a competency grid. No capabilities list, no offers, no links.

--------------------------------------------------------------------------------

FRACTIONAL HERO MARK — the gateway replaces the converging lines
Existing complexity → senior leadership → clearer direction. Five source
nodes on the left, unevenly placed, plus three small signals attached to
nothing; they pass BEHIND one sculptural arch and come out as three
paths in a single colour. Fewer out than in, and the palette resolves
along with the lines.

NOT A FUNNEL. The centre is an arch with an opening, drawn in section
with an asymmetric footing, so nothing is poured through a cone or
routed through one person. That distinction is the whole brief: the
marketing function already exists.

NODES ARE THE SITE'S BULLET AT SCALE — pastel fill inside a deep ring,
`.hw-do li::before` enlarged. A bare pastel dot at 8px on cream is
invisible; that was checked by sampling, not by eye. Four pastels, none
repeated (the Expertise rule), and a fifth node is a ring around nothing:
one input that never resolved. The single saturated note is the coral
ring on the middle input.

THE SIDE PANEL WENT 0.34 → 0.16. At a third it read as a solid slab and
the whole mark tipped into 3D, which the brief rules out. No `filter`
either — a drop shadow here would be a permanent heavy shadow, and
`--shadow-soft` is held to hover lift only.

THE TRAP, AND IT IS A NEW ONE WORTH WRITING DOWN:
`.glyph .fill` reveals with `fill-fade … forwards`, whose last keyframe
is `opacity: 1`, and an animation in its fill-mode OUTRANKS a declared
value. So `opacity: 0.16` on a `class="fill"` element renders at full
strength. Anything carrying `class="fill"` must put its transparency in
rgba. The first side-panel fix looked like it had done nothing.

AMBIENT DRIFT — ADDED TO THE CLOSED MOTION BUDGET, 2026-09-04.
It was built without one and flagged, because the budget is closed and
the only other continuous animation on the site (the testimonial
marquee) is the one thing the detector flags. Amber asked for it
directly the same day. That is the whole reason it is allowed: it is the
second item admitted to the budget since it closed, and the next person
reading this should know it was requested, not drifted in.

Three groups at three periods so they fall out of phase — 7s, 6s, 8s,
which share no common factor inside any reasonable dwell, so the
composition breathes rather than sliding as one block. That is the only
reason the SVG is grouped at all.

FOUR THINGS THE IMPLEMENTATION TURNS ON:
- The rules live INSIDE `@media (prefers-reduced-motion: no-preference)`,
  not merely disabled under `reduce`. The animation is never defined for
  a reader who asked for less motion, so there is nothing to override
  and nothing to forget later.
- Gated on `.in-view`, plus a 1.4s delay. The mark draws itself in over
  1.5s; starting the drift at load runs the two over each other and the
  entrance reads unsteady.
- `ease-in-out`, NOT `var(--ease)`. The site's token is an entrance curve
  and deliberately asymmetric; on an infinite loop that reads as a
  repeated arrival, which is the bounce her brief rules out.
- The keyframe values are viewBox UNITS, not pixels. The box is 492 wide
  painted at 440, so one unit is 0.894 CSS px. Do not "fix" a 3 to a 3px.

MEASURED LIVE, over 20s at 60ms, not read off the declarations:
amplitude 2.68px / 1.79px / 1.79px (brief: 2–3px); cycle lengths 7.00 and
6.98s, 6.01 and 5.99s, 8.02s (brief: 6–8s); zero of 87 samples found all
three groups at the same offset, so the phases really do separate. With
`.in-view` absent, computed `animation-name` is `none` on all three;
under `reduce` it is `none` and measured travel is 0.000px.

MEASURED: 440px wide at 1280+, 39.3% of the 1120px wrap, vertically
centred against the copy (midpoint delta 0), and the head is 766px — the
same height it was with the converging mark, so the illustration does not
drive the hero. `.head-grid` stacks at 1120 site-wide, which is where the
art moves under the copy; at 760 it caps at 292px. No horizontal overflow
at any width. Under `prefers-reduced-motion` all 27 SVG nodes are
animation-free and none is left invisible. `npx impeccable detect` now
reports 13 on About (was 14) and 15 on the service page (was 16).
Testimonials, the timeline, The Short Version, contact, nav and footer
are byte-identical to the previous commit.


================================================================================
2026-09-04 · SERVICES BECOMES A NAV GROUP
================================================================================

`/services/fractional-leadership` is now a child of Services in the nav
and the footer. Services is a `.nav-drop`, the same component Shop uses.

THE TWO GROUPS ARE NOT THE SAME SHAPE, and this is the thing to keep
straight. Shop is a disclosure BUTTON: there is no /shop page, so the
trigger has nowhere to go. Services is a LINK to /services that reveals
its children on hover. Clicking it navigates; it never toggles.

A first pass made Services a button too and put an "All services" row at
the top of its menu, because a button trigger leaves /services otherwise
unreachable. Amber cut it — "people will click the services button
naturally" — which is the better answer: make the trigger a link and the
row is not needed. The menu now lists only real service pages. Keep it
that way as consulting, workflows/AI and advisory arrive: the trigger is
the link to the index, never a row inside the panel.

WHAT A LINK TRIGGER COSTS, AND HOW IT IS PAID:
- It must not swallow its own click, so `main.js` only binds the toggle
  when `dropBtn.tagName !== "A"`.
- On touch there is no hover and tapping navigates, so a collapsed panel
  would be unreachable. In the mobile menu a link-triggered group shows
  its children outright — `.nav-drop:has(.nav-drop-link) .nav-drop-menu`
  — and the caret is hidden, there and under `@media (hover: none)`,
  because it would otherwise promise a panel that cannot open. Touch at
  desktop widths reaches the child through /services, one tap further.
- `aria-expanded` on a link is valid: ARIA supports it on role=link.
- The trigger is now an `<a>` inside `.nav-links`, so on /services it
  takes the ordinary current-page underline with no JS. `.is-current`
  still marks it from a child page, but those were two different marks —
  a coral-deep gradient on /services, a coral box-shadow on the child —
  which put a subtly different underline under the same word depending
  on the page. `.nav-drop-link.is-current` now uses the gradient for
  both. The box-shadow stays for Shop, a button with no gradient.

MEASURING THIS: check the underline state with the pointer PARKED OFF
THE NAV. `.nav-links a:hover` paints the same 100% gradient, so a test
that hovered the trigger earlier — or merely left the virtual mouse
there across a navigation — reports a current-page underline on every
page. That is exactly what happened once here and it read as a real bug.

THE BUG THIS ALMOST SHIPPED: `main.js` read
`document.querySelector(".nav-drop")` — singular — because there had
only ever been one. Every rule in the stylesheet is class-based, so a
second group renders perfectly: caret, panel, hover styles, the lot. It
would simply never have opened. No click, no hover, no Escape, no arrow
key, and nothing in the CSS to hint at it. Now `querySelectorAll` with a
loop, one shared outside-click listener, and opening either group closes
the other (two open panels overlap on desktop and double the mobile
menu's height).

A LEAK THE SECOND MENU EXPOSED: `.nav-links a[aria-current="page"]`
grows the top-level current-page underline to `background-size: 100% 2px`
and cannot tell a nav link from a menu item, so the open panel drew a
full-width coral rule along the bottom of its current entry. Courses has
carried this since the Shop menu shipped; it was invisible because a
one-line item makes the stray rule look deliberate. "Fractional
leadership" wrapped to two lines and the rule landed halfway down the
panel, which is the only reason anyone saw it. Cancelled with
`.nav-links .nav-drop-menu a[aria-current="page"] { background-size: 0 2px }`
— three classes, so it wins on specificity rather than source order.
Menu items also got `white-space: nowrap` (`normal` again in the mobile
panel, which is full width with larger type).

DETECTOR: `cramped-padding` on `.nav-drop-menu` now fires TWICE per page
instead of once, so every page with a nav reads one higher. It is the
same already-accepted finding counted per menu, not a new problem —
the wrapper-with-a-visible-boundary false positive. Raising the panel's
padding to 10 and 12px was tried and changes nothing, and a real popover
needs the border, background and shadow it has. Left alone deliberately.

EDITING THE SHARED CHROME: slice the `<nav>` and `<footer>` regions and
replace inside them. A first pass matched
`        <li><a href="/services">Services</a></li>` across the whole
document, and those eight leading spaces are a substring of the footer's
fourteen — so the footer's Services link was replaced by a nav dropdown
in eleven files at once. Reverted and redone against sliced blocks.


================================================================================
2026-09-04 · "WHAT KEEPS ME INTERESTED" RESTORED
================================================================================

Back on About at Amber's request, in its original place: the seam between
the professional and personal halves, directly after "How I lead". Page
order is now hero · How I Got Here · How My View Changed · What I Grew
Into · What I Believe · How I Lead · What Keeps Me Interested · Outside
the Work · testimonials · The Short Version · the timeline · contact.

The markup and its CSS came out of `a972359^`, not from rebuilding
against a screenshot. `.ab-quiet`, `.ab-quiet-open`, `.ab-quiet-close`,
`.ab-quiet-body` and `.ab-mk-spark` had been deleted with the section and
are restored with it, at the END of the sheet — the type layer sets
`.ab-pull-line`'s display size around line 6125 and these have to survive
it. `.ab-mk-q` is NOT restored: it marked copy that no longer exists.

TWO CHANGES FROM THE VERSION THAT WAS CUT, both because "What I grew
into" exists now and did not then:
1. THE BLANK-PAGE PARAGRAPH IS GONE FROM HERE. It is word for word in
   "What I grew into" two sections up — it was moved there when this
   section was removed. Restoring it would print the same sentence on the
   page twice. Verified: no exact duplicate paragraph anywhere in `main`.
2. THE HEADLINE CARRIES NO PAPER TAB. It had the butter one; when this
   section was cut that tab moved to "the right marketing." on "How my
   view changed" — the second time it had moved for the same reason,
   which is recorded in that commit. Every page carries exactly two
   `.tab-em`, one blush and one butter, so bringing it back here would
   make three. About stays at 1 + 1. Raised with Amber rather than moved
   a third time.

STILL OVERLAPPING, AND LEFT ALONE ON PURPOSE: this section closes on
"That combination of creativity, curiosity, technology, and real-world
problem solving is what keeps the work interesting to me", and "What I
grew into" closes on "But what keeps me interested is the combination of
creativity and problem-solving…". Different words, same thought, two
sections apart — and the second now anticipates a section title. One of
them should probably go. Both are approved copy from different briefs,
so it is Amber's call, not a quiet edit.

THE CLOSING LINE'S MEASURE WAS WRONG AND IS NOW 52ch, NOT 44ch. The old
rule's comment recorded the sentence as 1308px at 30px, which makes 44ch
(748px) a two-line measure. Re-measured with the real Newsreader it runs
1539px, so two lines needs 770 and 44ch fell 22px short — it was
rendering three. The old figure was almost certainly taken with a
fallback font loaded, which is the same trap `realfont.cjs` exists for.
52ch (884px) restores the original intent: the second line fills about
three quarters of the measure. Past 58ch it just hits the shell's 913px
ceiling and the second line drops to half. Two lines from 760 up, four at
390, where the measure leaves no choice.

MEASURED: type ladder h1 50 › h2 40 › pull quote, quiet open and quiet
close 30 › beats 21 › body 17 — the pull quotes are at 30, so the
selector-list regression that this section's REMOVAL caused has not
recurred. No horizontal overflow at 390-1920. Detector holds at 14, so
the section costs nothing. Testimonials, the timeline, The Short Version,
contact, How I lead, Outside the work, What I grew into, the beliefs, nav
and footer all byte-identical.


================================================================================
2026-09-04 · TAB COLOUR AUDIT, mobile hero, honest proof, split nav trigger
================================================================================

TAB COLOUR IS SEMANTIC, NOT POSITIONAL — asked and answered
Amber: "Work and fractional pages h1 has pink in them, the rest have
yellow. What's the brand guideline?" The rule (2026-07, above) is that
blush marks the TENSION side — problems, uncertainty, open questions —
and butter marks the POSSIBILITY side — collaboration, solutions, next
steps. Nothing says an h1 is butter. Whichever colour lands on the h1
follows what the h1 says.

So the three blush h1s are correct, and it is three, not two:
  "different needs."   (Work)       — names the variety, the problem
  "more marketing."    (Fractional) — the thing that is NOT the answer
  "the marketing box." (About)      — MASTER already records this one:
                                      "the box is the constraint"
And the butter h1s all name an outcome: "growth.", "approach.",
"actual work.", "work together.", "foundation.", "in."

FULL CENSUS TAKEN, and half the site has drifted from "exactly two per
page, one of each":
  CONFORMS (1 blush + 1 butter)  home · about · my-approach · projects ·
                                 fractional
  DRIFTED                        services (3 butter, no blush)
                                 course-marketing-foundation (3 tabs)
                                 expertise (2 butter, no blush)
                                 thank-you (2 butter, no blush)
                                 courses (1 tab only)
NOT FIXED, and the reason is the one already written down here: placing a
blush tab means choosing which line of Amber's copy carries the page's
tension, which is her call, not a mechanical correction. Raised with her.

FRACTIONAL HERO MARK IS DESKTOP-ONLY (Amber: "it doesn't add value" on
mobile). `display: none` below 760 — the site's own mobile breakpoint,
not a new one — so it takes no space rather than merely hiding. Below
that the head grid had already stacked it under the copy and the
buttons, where it was 292px of illustration between the CTA and the
first real section. The head drops 859 → 575 at the boundary.

THE PROOF SECTION WAS CLAIMING THINGS IT SHOULD NOT (Amber: "these
listed case studies are not all fractional work"). She is right and it
was my error: PERQ is VP of Growth Marketing, 2023–present, and
Scan-Optics is Director of Marketing, 2021–23 — both full-time in-house
roles, both filed under `#in-house` on Projects. Only MembersFirst is
fractional.
There is exactly ONE genuinely fractional case study on the site, so a
three-up of fractional engagements does not exist; the other client work
(Robert James, A2 Exteriors) is a brand build and ongoing small-business
marketing, not leadership of a function. Swapping them in would have
been weaker proof AND still not fractional.
The fix is the framing, not the work: MembersFirst leads, and every row
is labelled `Fractional` or `In-house`, with the lede saying outright
that one is an engagement and two are roles she held. Having run the
function as an employee is legitimate proof for a fractional leader —
the page just must not imply otherwise.
Labels are the engagement type ALONE. "Fractional · Financial services"
is 31 characters and trips the detector's `all-caps-body` at exactly the
threshold the long eyebrow hit; the sector moved into the lede.

SERVICES: TWO CONTROLS, TWO JOBS (Amber: click the word for the page,
click the arrow for the pages). The link carries no `aria-expanded` and
never toggles; the caret button carries `aria-expanded` and
`aria-controls` and never navigates. This replaces the previous
arrangement, where a single link trigger opened on hover only — that
worked on a mouse and left the panel unreachable on touch, which is why
the mobile menu had been forced permanently open. Both of those
workarounds are now deleted: the caret is a real control, so the mobile
group collapses like Shop's.
Shop keeps a single button trigger. It has nowhere to navigate, so its
button IS the disclosure and the caret stays inside it. `main.js` picks
`.nav-drop-toggle` where one exists and falls back to `.nav-drop-btn`.
The caret is 56px wide and full row height in the mobile menu — a
control whose entire job is being hit accurately beside a link that goes
somewhere else deserves more than a 22px box.
GOTCHA: the desktop group sets `gap: 3px` between link and caret, and
the mobile row inherited it, breaking the row's hairline into two
segments with a 3px hole before the arrow. `gap: 0` in the mobile block.

MEASURING THE PANEL: read its computed visibility at 500ms, not 150ms.
The open transition had not finished at 150 and the probe reported
`hidden/0` on a menu that opens correctly — it read as a real bug for
one round.


================================================================================
2026-09-04 · THE SERVICE FAMILY: four pages
================================================================================

`/services/consulting`, `/services/workflow-ai` and
`/services/mentorship-advisory` join Fractional Leadership, and the
Fractional page was tightened at the same time.

WHAT MAKES THEM A FAMILY, AND WHAT MAKES THEM DIFFERENT
Every `.svc-*` component is shared: hero shell, recognition list,
capability groups, white-band signature, numbered process, before and
after, fit, engagement, proof rows, cross-links, CTA band. What differs
per page is the hero mark, in that offer's own `-deep` colour from the
Services page, and the interior of the signature band:
  Fractional   prose then a payoff line
  Consulting   the brief against the actual problem, then the payoff
  Workflow     the five questions asked before anything is automated
  Mentorship   a short refusal ("This isn't a course") and the payoff
That is the whole differentiation budget. No new colours, no new
components, and no section that exists only so a page has one.

The four offers are the site's sanctioned colour code, so the marks ride
it: `--consulting-deep`, `--fractional-deep`, `--automations-deep`,
`--courses-deep` (mentorship shares the courses colour, as it already
does on the Services page). Still two coded sets, not three.

LENGTH IS NOT MATCHED, ON PURPOSE. At 1440: Fractional 7,883px,
Consulting 7,158, Workflow 7,464, Mentorship 5,259. Mentorship is a
lower-complexity offer and padding it to match would be exactly the
filler the brief rules out. It has nine sections where the others have
eleven or twelve.

FRACTIONAL, TIGHTENED
Eight prose rows of scope became four `.svc-caps` groups of labels. The
scope did not shrink; the sentence under each area became four noun
phrases, which is what a scan takes from a paragraph anyway. Recognition
went from ten signals to eight (the AI one moved to the Workflow page,
where it is now the opening argument; two reporting lines merged).
Before-and-after went from six-and-seven to four matched pairs, which
also makes the grid rows line up. Copy is down 12.7%, from 1,181 words
to 1,031, and six em dashes are gone.
The brief asked for 15-20%. It is 12.7% because item 5 of the same brief
ADDS a section — the leadership aside — and cutting further would have
taken the philosophy the brief says to keep. Said rather than fudged.
THE ASIDE HAD TO BE MADE SMALLER THAN A SECTION. At the standard 104px
rhythm it measured 717px, second only to the hero, which is not what "a
small but important clarification" looks like. `.svc-aside` halves the
padding.

DETECTOR: a new false positive to know about. `.svc-else`, `.svc-proof`,
`.svc-caps` and `.svc-areas` paint their hairlines as `linear-gradient`
backgrounds to dodge `cramped-padding`; the trade is that the detector
then treats that gradient as the element's fill and reports coral-deep
links at 4.4:1 against `#e4e0dc`, which is `--line` composited over
cream. Measured against the actual painted pixels every one of them is
5.50:1. Verified by sampling, not asserted.
Counts: Fractional 23, Consulting 19, Workflow 19, Mentorship 15,
against Services' 29. The rises over the previous Fractional score are
all in that false-positive family plus one more `nav-drop-menu` instance
per added menu item.

MEASURED: no horizontal overflow on any of the four at 320, 390, 768,
1024, 1440 or 1920. Type ladder identical across all four (h1 50, h2 40,
capability label 15, body 17). Exactly one blush and one butter tab per
page. Under `prefers-reduced-motion` all four run zero keyframe
animations, no `.reveal` is left hidden and no SVG node is left
invisible. Nav and footer are byte-identical across all sixteen HTML
files; titles, descriptions, canonicals and og:urls are unique and
self-consistent on all four.

A TAB THAT WRAPS BECOMES A BANNER. Mentorship's h1 first put the tab on
"another marketer in the room." — five words, which wrapped to two lines
and rendered as one solid block of blush behind both. That is the
failure the below-480 rule already documents, and the fix is the rule
that was already written: never on phrases longer than about four words.
It is on "in the room." now.


================================================================================
2026-09-04 · THE TAB CENSUS CLOSED
================================================================================

Amber, on the mix of blush and butter blocks: keep the meaning-based rule,
fix the pages that had the wrong number of tabs. Every content page now
carries exactly one blush and one butter. The h1's COLOUR still varies
page to page, because it follows what the headline says — that was stated
when the choice was made and is not a gap.

WHAT CHANGED, and why each one
- SERVICES had three butter and no blush. "What sounds like you?" is an
  open question, so it takes blush. "Let's figure out what comes next."
  is locked butter by the repeat rule (it is butter on Home and Work), so
  the h1 gave up its tab rather than the CTA. Home already ships with no
  h1 tab, so there is precedent.
- EXPERTISE had two butter. First attempt put blush on the CTA band's
  "need yet?" — wrong twice over: MASTER only vouches for butter on the
  dark band, and every other page closes on butter, which is the
  resolution position. The tension on that page is in the h1 all along:
  blush now sits on "getting in the way", and "growth." goes plain.
  (For the record, ink on blush measures 10.7:1 on the dark band, so it
  was never a contrast failure, only the wrong call.)
- COURSES had one tab and no tension marked anywhere. Blush on "not just
  watched.", the failure mode the page argues against.
- THE COURSE PAGE had three. The pair belongs on the argument, so the h1
  gave up its tab and blush "tactics." → butter "to start." carries it.
- THANK-YOU had two butter and no tension to mark. A confirmation page
  has none, and inventing one would be worse than carrying a single tab,
  so it keeps "in." alone. Privacy, Terms and 404 carry none at all;
  utility pages sit outside the rule.

EVERY BLUSH TAB IS ON A LIGHT SURFACE. Checked across all sixteen files
after the change: header, cream, band-white or sp-section. None on the
dark CTA band.

TWO BANNER BUGS FOUND BY SWEEPING, both introduced the same day on the
new service pages:
- Consulting's h1 tab was "what's actually in the way." — five words,
  over the four-word rule, and it wrapped to two lines at 390 where the
  inline-block grows and both pseudo tabs stretch into one solid block.
  Now "in the way."
- Mentorship's CTA tab was "trying to work through?" — four words, so
  within the rule, and it banners anyway. Now "work through?"
THE FOUR-WORD RULE IS NOT SUFFICIENT ON ITS OWN. Word count is a proxy;
the real constraint is whether the phrase fits one line at 390. Sweep
for `height / line-height > 1` on `.tab-em` rather than counting words.
The `box-decoration-break: clone` treatment that saves About's long h1
is scoped to `.page-about .head-copy` and rescues nothing else — verified
again here: two clean marks at 390, no banner.


================================================================================
2026-09-04 · THE BANNER FIX, UN-SCOPED
================================================================================

Amber photographed a banner on Consulting on her phone. The phrase she
caught had already been shortened and pushed; she was on a stale deploy.
The screenshot was still right about the problem.

SWEEPING 13 WIDTHS x 13 PAGES FOUND SIX MORE, at 320, 360 and 375 — on
"more marketing." and "fractional leadership.", two words each, and on
"getting in the way", which had been added that hour. So PHRASE LENGTH
WAS NEVER THE CONTROL. A two-word tab banners at 320 as happily as a
five-word one. The four-word rule polices emphasis, not wrapping, and
the note from earlier the same day — "the real constraint is whether the
phrase fits one line at 390" — was also wrong, because it only checked
390 and up.

THE CURE ALREADY EXISTED AND WAS SCOPED TO ONE PAGE. The
`box-decoration-break: clone` block below 480 was written for About's h1
"on the grounds that it was the one long phrase on the site". That
stopped being true when four service pages landed. It is now on `.tab-em`
rather than `.page-about .head-copy .tab-em`, so every tab on the site
breaks into a mark per line the way a highlighter would.

Above 480 the pseudo-element treatment stays. The 0.9deg tilt is visible
on a 50px h1 and is part of the device, and nothing banners up there.
`--tab-front` and `--tab-back` live on `.tab-blush` / `.tab-butter`, so
both colours carry through with no extra rules, including on the dark
CTA band, where ink on butter still reads correctly across two marks.

THE CHECK, for anyone touching tabs again: sweep `height / line-height`
on every `.tab-em` at 320, 360 and 375 as well as the common widths, and
treat a wrap as acceptable only where the computed
`box-decoration-break` is `clone`. Word count proves nothing.


================================================================================
2026-09-04 · THE SERVICES ECOSYSTEM PASS
================================================================================

Five pages, one job each. Services orients and routes; the four detail
pages hold the depth.

SERVICES IS NOW A ROUTING PAGE: 1,278 words to 369, and 4 sections where
it had 8. The four `.offer-section` blocks each carried a paragraph, six
capability bullets and an aside with tier, audience and availability —
a second and worse copy of four pages that now exist. They collapse into
one `.sv-cards` grid: name, one positioning sentence, three examples,
one link. The bridge band went with them because the grid's lede does
its job. The hero, the selector component and the closing CTA are
preserved verbatim.

THE WHOLE CARD IS THE TARGET, with ONE link stretched over it by a
pseudo element. Not a link on the title as well: two links to the same
place is a second tab stop reading the same destination twice, and the
CTA label ("See how fractional leadership works") is the better
accessible name because it says what the page is. `position: relative`
on the card is what the stretch resolves against, and the focus ring
goes on the card via `:focus-within` — outlining the small CTA text
would hide where you are.
HIT-TESTING THIS IS EASY TO GET WRONG. Two runs reported the cards dead
before the test was right: `elementFromPoint` takes VIEWPORT
coordinates, the cards sit below the fold, and `html` has
`scroll-behavior: smooth`, so a `scrollIntoView` followed immediately by
`getBoundingClientRect` reads a rect mid-animation. Scroll with
`behavior: 'instant'`, wait, then test all four corners.

THE SELECTOR KEEPS ITS MECHANIC AND LOSES ITS DETOURS. Its four back
panels each carried four labelled blocks and pointed at Courses, My
Approach and Expertise — none of which is where those people should go.
Two blocks now, and all four situations route to the matching service.
The four situations were rewritten to map one-to-one onto the four
offers; the previous set did not, and forcing them would have misrouted
people.

WORKFLOW AND AI GAINED THE OTHER TWO THIRDS OF ITS OFFER. It argued the
process case well and left BUILD and ENABLE implicit. Capabilities are
now workflow improvement / AI and automation builds / team enablement /
adoption and rollout; the process runs six steps because enablement and
refinement were the two that were missing; and one new section carries
both building and enablement, not two, because they are one movement in
practice and the brief asks to keep the site tighter. Training here is a
service and says so, with Courses named as the separate thing.
"Built, not theorised." is gone — British spelling and off-brand.

ROBERT JAMES MOVED TO FRACTIONAL, which is what it is: nine years as the
marketing function for a business with nobody in-house. It replaced
Scan-Optics there, which is a demand generation rebuild and better
consulting proof. Consulting now shows TWO cases rather than three,
because there is no third genuinely project-shaped engagement on the
site and two honest ones beat three where one misdescribes an ongoing
relationship. `.svc-proof-2` exists for that.

MENTORSHIP GAINED THE ADVISORY HALF: a recognition line and a fit line
for owners making marketing calls with nobody senior nearby, plus a
second testimonial from someone she actually mentored.

MEASURED: services 3,525px at 1440 against fractional 7,928, consulting
7,096, workflow 8,627 and mentorship 5,833. Workflow is now the longest,
which is right — it covers three capabilities where the others cover
one. No horizontal overflow on any of the five at six widths. Every
internal link on the site resolves 200 except `{{COURSE_ACCESS_URL}}`,
which is a deliberate placeholder. All six Projects anchors and both
About anchors exist. No banned words. No em dashes in visible copy on
any page. The only exact duplicate sentences across the five are the
cross-link rows, which are a routing component and are meant to repeat.
Detector: services 29 to 22, consulting 19 to 18, workflow 19 to 25 —
that rise is entirely the hairline-gradient false positive, verified
again at 5.50:1 against real painted pixels.


================================================================================
2026-09-04 · HOMEPAGE, ALIGNED TO THE SERVICE ARCHITECTURE
================================================================================

Structure untouched. Hero, the problem section, Selected Work, What I
bring, testimonials, About and the closing CTA all stay; the changes are
copy plus one rebuilt section.

"WAYS WE CAN WORK TOGETHER" IS FOUR PATHS NOW. It was Courses, Workflow
and AI Guidance, and "Consulting and fractional leadership" as one card,
pointing at `/services#anchor`. It is Fractional, Consulting, Workflow
and AI, and Mentorship and advisory, each linking straight to its own
page. Consulting and Fractional are separate offers and a shared card
made that impossible to see.
COURSES IS NOT A CARD, and nothing replaces it. Teaching is part of
Amber's identity, so it stays in the hero ("teach teams to use them
well") and in the nav under Shop; it is just not a homepage conversion
path competing with the professional services.

SAME `.sv-card` AS THE SERVICES PAGE, so the four offers look like the
same four things in both places. The one difference is the body: Services
lists three examples per offer because it is being compared against, the
homepage runs one sentence because it is telling a story.

THE INTRO STOPPED BEING CONCEPTUAL. "Leading, building, advising, and
teaching are the same work from different seats" is a good line and an
abstract one. Four concrete situations now, then "Those are different
kinds of help, so I work a few different ways."

COURSES CAME OUT OF TWO OTHER PLACES: the problem section's list of
outputs (now "strategy, campaign, process, system, or next step") and the
About preview's closing sentence, which now names the build and enable
work instead. Zero mentions of "course" in `<main>`.

THE FOOTER LINE CHANGED ON ALL SIXTEEN PAGES: "Marketing consulting,
fractional leadership, and practical courses" no longer describes the
site. It is "Marketing strategy, leadership, and practical ways to make
the work better." Umbrella-level rather than a list of four offers plus
courses. Verified as one distinct footer across the site afterwards.

NAMING, FLAGGED NOT CHANGED: the brief writes "Workflow & AI" and
"Mentorship & Advisory" with ampersands. The site uses "and", 44 and 39
times respectively, across nav and footer on every page. Renaming is
mechanical but it is sixteen files inside a homepage brief, and half-doing
it would leave the homepage disagreeing with its own nav. Left alone and
raised with Amber.

A NEW DETECTOR FALSE POSITIVE, worth adding to the list.
`cramped-padding` fires four times per page on `<li> "sv-card": children
flush against border on right/left`. The cards declare 34px of padding
and every real child measures 35px in from both edges. What sits at inset
0 is the `.sv-go::after` overlay that makes the whole card clickable — a
transparent box with no text in it. The stretched-link pattern will always
trip this rule. Measured, not assumed.


================================================================================
2026-09-04 · CONSULTING AND MENTORSHIP HERO MARKS REDRAWN
================================================================================

Amber, on a set of reference mockups: "I don't mind workflow and fractional
but the other 2 should change", having also said the heroes should stay
consistent with each other. Both hold, because the two statements are about
different things: the CONCEPT changes, the LANGUAGE doesn't.

The reference drew all four as flat translucent washes. Drawn that way,
Consulting and Mentorship would have stopped matching the two marks that
stay — Fractional's gateway and Workflow's thinning stack are fine strokes
in the offer's own colour plus gradient-filled forms. So the new marks take
the reference's IDEAS and the site's construction:
  CONSULTING   two overlapping fields, one line straight through and out
               the far side, the shared ground filled
  MENTORSHIP   two speech bubbles with real overlap, the shared ground
               filled

WEIGHT HAD TO BE MATCHED, and only a four-up comparison showed it. On their
own both new marks looked fine; beside Fractional and Workflow they read as
sketches next to finished drawings. Strokes went 1.8 to 2.2, the lens fills
went about 0.5 to 0.7, and each gained two solid terminal dots where the
fields meet — the dot language Fractional already uses at its terminals.
Judge a mark against its siblings, never on its own.

TWO CONSTRUCTION NOTES:
- THE LENS IS A `clipPath`, not hand-computed arcs. A circle-circle
  intersection is two points and four sweep flags, all of which are easy to
  get subtly and invisibly wrong; the clip is exact by construction.
- EACH BUBBLE IS ONE PATH: an arc taken the long way round the body, then
  two lines out to the tail tip and back. Circle plus separate tail leaves a
  stroke straight through the join.
- Transparency is `fill-opacity`, never `opacity`, on anything carrying
  `.fill`. Same reveal-animation trap as everywhere else.

The reference's blue and terracotta are not in the palette; these use
`--consulting-deep` and `--courses-deep`, the colours those offers already
carry. Colour coding stays at two sets.

MEASURED: every `cs-*` and `mn-*` class in the markup has a rule, and the
ten classes the old marks used are gone from both the CSS and the HTML. No
overflow on any of the five service pages at six widths. Under
`prefers-reduced-motion` all four marks draw fully: 13 and 11 nodes, none
left invisible or undrawn. Detector unchanged at 18 and 15.


================================================================================
2026-09-04 · FRACTIONAL AND WORKFLOW MARKS, SECOND PASS
================================================================================

Amber, reviewing the four side by side: Consulting and Mentorship are
"basically there" and stay untouched. Two notes acted on.

FRACTIONAL READ AS A FUNNEL, NOT AS LEADERSHIP. Her words: the centre felt
"like a magnet". She was right and the reason is geometric — a rounded
horseshoe IS a magnet, whatever it is meant to depict, and no amount of
context around it overrides that. It is a PORTAL now: straight uprights
under a flat lintel, square corners. Same footprint, same job, same lines
running behind it, none of the association.
Inputs went five to four and the loose signals three to two ("simplify the
incoming lines a little"). The scatter still reads with fewer of them, and
the left-hand side stops competing with the centre.
THE GRADIENT HAD TO TURN WITH THE SHAPE. Its diagonal worked on an arch,
where it flowed round the bend as one material; on straight uprights it
handed the left leg to the blush stop and the right leg to the sage one,
so the portal read as two differently coloured posts. Near-vertical now
(x2 0.75 → 0.18). A gradient angle is not portable between forms.
The footing stays uneven, but 6px against 14px read as a folded corner at
this weight rather than as a hand-set foot. 4 and 8 now.

WORKFLOW WENT SEVEN ROWS TO FIVE ("reduce the left-side bars by 1-2 so it
doesn't get visually busy"). Still two struck out, so the subtraction still
reads; the stack just stops being a wall. A side effect worth having: three
surviving rows now feed three outputs one for one, where the old
four-into-three routing never quite resolved.
Removing two rows also left the composition sitting 38px high in its box,
which only showed once the rows were gone. Shifted down to centre.

JUDGE A MARK AGAINST ITS SIBLINGS. Both of these notes came out of a
four-up comparison, not from looking at either page. The magnet reading and
the busy stack were invisible one at a time.

MEASURED: no overflow on any of the five service pages at six widths. Under
`prefers-reduced-motion` all four marks draw fully — 27, 13, 17 and 11
nodes, none left invisible or undrawn. Every mark class carries a rule
except `fl-arch`, which is a label on an element whose fill is the inline
`url(#fl-arch)` gradient. Detector unchanged at 23 and 25.

## Three recurring service-page components (2026-09)

The four service pages carried the same *sections* but not the same
*devices*. "How it works" was four numbered `.svc-steps` on three pages,
SIX on Workflow, and a different component entirely on Mentorship
(`.svc-flow` — four bare lines, no headings). The point-of-view section
was a `.band-white` slab of three stacked paragraphs on all four, and the
scope section was a fourth four-column row. Amber: the sections were
"visually too flat" and "designed differently from page to page".

Three components now, and the thing that matters is that they stay
DISTINCT from each other while reading as one system:

- **`.pov` — How I think.** Editorial. Eyebrow, point-of-view headline
  and setup in a two-column head, three principles separated by
  hairlines, then a takeaway whose second line carries the accent as
  type. This is the only place the service colour is used at display
  size.
- **`.hiw` — How it works.** Process. Eyebrow, headline, intro, four
  stages on one connector. `.hiw-numbered` for Consulting and Workflow,
  which genuinely run in order; `.hiw-rhythm` (a ring marker) for
  Fractional and Mentorship, which are ongoing relationships — numbering
  them would claim a Step 1 → Step 4 that isn't true of the engagement.
- **`.aow` — Areas of work.** Scope. A 2×2 card grid, UNNUMBERED,
  because numbers now mean sequence and these four areas run at once.
  Warm translucent surface, one hairline border, 16px radius (matching
  `.case`, so no new radius value enters the system), no shadow, and the
  entire accent is a 2px rule on the top edge.

Workflow's six stages fold into four without losing an idea. Every
principle, stage and card description is the page's own copy, trimmed.

DETECTOR: +10 `cramped-padding`, +3 `tight-leading`, +1 `gray-on-color`,
all verified false positives of shapes already documented here — the
`.aow-card` inset-0 child is the 2px decorative rule (real children
measure 39px in against 38px declared), the `gray-on-color` "tan fill" is
a `background-size: 100% 1px` hairline on a 183px element (the pixel
behind the text samples `253,249,245`), and 1.16–1.20 leading is display
type. Net across the sheet: 212 findings against 223 at HEAD.

REMOVED WITH THEM: `.svc-caps`, `.svc-steps`, `.svc-steps-5`,
`.svc-stand`, `.svc-rule`. Deleting a rule whose selector was the last
line of a multi-line group left `.svc-turn,` dangling before a closing
brace TWICE — a grouped selector loses its block and the survivors merge
into the next rule. Scan for `,` followed by `}` or a comment after any
rule removal.

## How I Think removed from the service pages (2026-09)

My Approach already owns the philosophy, and the four service pages were
repeating it. Each `.pov` section was audited idea by idea before deletion.

UNIVERSAL, so removed rather than relocated: solve the right problem
first, the brief is a symptom, look past the channel, say it early,
question the work itself, find the real constraint, and "more isn't
automatically better". All of these are already My Approach's territory.

SERVICE-SPECIFIC, so kept as a one-line banner rather than a section:
- Fractional — "The goal is not to make the marketing function bigger.
  It's to make it work better."
- Mentorship — "You don't need to turn your problem into a lesson
  before we can talk about it."
Consulting and Workflow keep NO callout. Consulting's every principle was
on the universal list, and Workflow's adoption point was already carried
by its existing "help people use it well" banner. The brief allowed for
pages with no genuinely unique belief, and forcing one on all four would
have rebuilt the redundancy in miniature.

Workflow's "fix the process first" belief moved INTO the How it works
setup rather than staying a section: "Automating a process nobody has
simplified just makes the wrong thing faster." That setup previously
repeated its own stage two verbatim ("where most of the time comes
back"), and Consulting's setup listed the four stages that followed it.
Both rewritten.

The How it works eyebrow is gone from all four pages, and `.svc-nofit`
spans the content width instead of stopping at 720px.

STILL MISSING FROM MY APPROACH, flagged rather than added: subtraction.
Nothing on that page says the answer is sometimes to stop doing
something. The removed fractional section carried it ("Sometimes the
answer is adding something. Sometimes it's stopping something.") and it
is the one universal principle the site no longer states anywhere.

Pages after: consulting 802w, mentorship 708w, fractional 1071w,
workflow 1175w. Detector 211 against 223 at HEAD.

## Service page components, second pass (2026-09)

FIT CHECK (`.fitp`). The fit section used the same background and spacing
as its neighbours and disappeared between them. It is a contained panel
now — white with a 5% accent tint, one hairline, `var(--radius)`, no
shadow — with more vertical room around it. Three levels: serif
headline, two-column signal list, then the not-a-fit statement below a
divider at `--fs-intro`. The marker moved from a 13px thin ring to an
8px filled dot; a checkmark would have made it read as a pricing table.
Mentorship keeps "What this isn't" because it is stronger than the
standard label for what that page actually says.

HOW IT WORKS (`.hiw`). One component on all four pages, same heading,
service-specific intro. Fine rule above each stage, a 24px thin-line
icon in the page accent, serif stage heading, sans copy. No cards, no
circles. NOTHING IS NUMBERED — fractional leadership and mentorship are
ongoing relationships and the shared frame must not imply a four-step
project; their intros say so instead.

Its motion adds no budget line. `.reveal` already gives the fade-up,
main.js already staggers unlabelled siblings 0.08s apart (the
left-to-right run), unobserves after firing so it plays once, and never
starts under prefers-reduced-motion. Only the rule draw and the icon
follow-in are new, and both are cancelled in the reduced-motion block.

REPLACED AND REMOVED: `.fhw` (the Fractional circle-and-return-loop) and
`.p2b` (the Consulting four-disc flow), both superseded within the day.
Consulting's "REAL INSIGHTS -> TANGIBLE PROGRESS" payoff went with
`.p2b` and has no home in the shared component.

The services.html selector no longer fills its open row with butter at
30%, which read as "selected" rather than "expanded". Open is a 4% tint
plus the 2px accent rule `.sp-open::before` already drew; hover keeps
only the border and headline shift.

Detector 208 against 223 at HEAD.

## Service page polish, and a warning about the detector (2026-09)

TYPE. A full audit of every text-bearing element on the four service
pages found two off-scale values, both legacy and both site-wide:
`.arrow-link` at `1rem` (16px, between the scale's 15 and 17) and nine
declarations at `0.95rem`. Both are `--fs-small` now, and the service
pages carry ZERO off-scale sizes. The fit panel's heading dropped from
`--fs-h2` to `--fs-h3`: 40px inside a bordered panel with 60px of its
own padding read oversized. The not-a-fit line went from `--fs-intro`
to `--fs-body`, since it had been larger than the signals above it.
`.hiw-stages h3` went `--fs-intro` to `--fs-body`, and `text-wrap:
pretty` came off its copy — it was holding every line ~54px short of
the rule above it, so the text read narrower than its own column.

RHYTHM. Four different section paddings were in play: 52 (bands), 76
(asides), 104 (the site standard) and 110. The 110 was `.hiw` and 6px
adrift for no reason; it is 104 now. "Some of it is just being in the
room" was on `.svc-aside` at 76 despite being a full content section,
and is on 104. The ladder is 52 / 76 / 104 / 128, with 128 the one
deliberate step up for the fit panel.

FOOTER. Four equal columns starved Services (173px needed, 176 given)
and Get in touch (176 needed, 176 given, so amberfugedi@gmail.com broke
mid-word) while Shop, holding one link, wasted 117px. Columns are
0.75 / 1.15 / 0.6 / 1.2fr now. `overflow-wrap: anywhere` is scoped to
the stacked layout; at desktop it was splitting the address.

THE DETECTOR IS NOT REPRODUCIBLE ACROSS RUNS. The same unchanged HEAD
snapshot scored 223 early in the session and 249 an hour later, with
per-page rules moving 12 -> 16 and cramped-padding 43 -> 54. Never
compare against a stored number: run the baseline and the candidate
back to back and compare those. Measured that way, this pass is +24
`cramped-padding` (all the documented decorative-child artifact, real
insets 39-61px) and -11 `low-contrast`.

## Outside of work (2026-09)

A white-framed 2x2 collage in the right column of About's "outside the
marketing of it all", with the "leave things better" payoff pinned to
the foot of the same column. Amber's reference scattered four photos
with absolute positioning across an 800px column; this column is 426px,
so they sit in a grid and take their character from small rotations and
two taped corners instead of overlap that would crowd.

CORRECTED the same day. The first build used a white polaroid frame
with taped corners, which was a THIRD photo treatment and carried a 3px
corner that is not on the radius scale ("24px for cards, pills and
bands; 14px for compact elements; 8px for the phone results strip; 50%
circles and the two organic blobs. Nothing else."). Amber asked whether
it should follow the About oval, and it should: this file already says
the organic radius belongs to her own photographs, the rectangle is the
work-artifact treatment, and About was carrying two photo languages on
one page. Four different blobs now, each opposite pair summing to 100%
so the curve stays continuous, so a 2x2 never reads as an avatar grid.
The tape went with the frames — there is nothing to tape on an oval.
The handwritten note is Newsreader italic; the reference wanted Segoe
Print / Bradley Hand, which would have been a fourth font.

## From this / To this, and About loses its rules (2026-09)

WORKFLOW & AI gains a desktop-only "From this / To this" graphic beside
"Sometimes the answer needs to be built", 58/36 with the copy. Amber's
reference put the two panels SIDE BY SIDE in a 760px block; this column
is ~390px, where they would be ~175px each and "Keep humans in the
right places" would break to four lines. They stack with the arrow
turned down, which is what the reference's own narrow breakpoint does.

Its colours are NOT the reference's. A warm-pink "from" and green "to"
would borrow the offer code (blush = consulting, sage = fractional) for
a third meaning. From is neutral, To carries the page violet, so the
pair reads dull-then-accented without opening a colour set. Hidden
below 1020px, the site's existing desktop threshold, per the brief —
tablet and mobile keep the single column untouched, with no stacked
version. Tuned to 699px against 698px of copy, since the brief asked
that it not stand taller than the text beside it.

SERVICE PAGE PORTRAITS take the organic radius too (Amber, Sept 2026 —
she meant these, not the collage, though both were right). 5/4 rather
than the portraits' 8/9, because these frames are landscape and 8/9
would crop most of the picture away.

ABOUT'S `.ab-rule` HAIRLINES ARE GONE, all eight, and the entry above
that recorded them as deliberate is superseded. Amber: they were not
necessary. The eyebrow labels above each heading already separate the
sections, which is what About did before `.ab-rule` existed.

ABOUT'S SECTION RHYTHM: eleven sections at 104px top and bottom put
208px between every one of them, more than twice the 60-90px joint this
file documents, compounding across a page of short prose blocks. Now
clamp(44px, 4.4vw, 64px), so ~127px joints.

Detector 249, level with HEAD measured back to back.

## Every portrait on the organic radius, and the offset outline (2026-09)

ALL of Amber's photographs now take the organic radius, not just the
service ones: the course portrait was still a 12px rectangle, which was
also off the radius scale. Work artifacts stay rectangular — that
distinction is the point of the rule and has not moved. The one
photograph that keeps square corners is the How I Work hero collage,
which is a full-bleed 728x388 band rather than a portrait in a column,
and which this file already records as the standing exception.

THE OFFSET OUTLINE IS BUILT. This file described the About blob as
having an "offset coral outline" and `.about-portrait::after` was an
empty hook that drew nothing. It exists now on `.pf-frame`: the same
organic shape, one hairline, nudged 11px down-right at 45% opacity, so
it reads as a line echo behind the photograph rather than a border on
it. It takes `--svc-accent` on a service page and `--coral-deep`
elsewhere. It needs a wrapper, since an <img> cannot carry a
pseudo-element, and the shape lives on that wrapper so the outline can
inherit it. About's own portraits keep `overflow: hidden`, which would
clip the offset, so they are unchanged.

THE FIT HEADING IS BACK ON `--fs-h2`. Dropping it to `--fs-h3` made it
the only section title on the site not at 40px, which is what still
read wrong. Its bullets and its not-a-fit statement were already at
`--fs-body`, identical to `.hw-body p` on the same page — measured, not
assumed.

REGRESSION FIXED: `.svc-narrow .hw-body + .cta-row` was the only rule
spacing the engagement CTAs, and those sections dropped `.svc-narrow`
when they gained the photo split, so Fractional and Consulting had a
0px gap under the last paragraph. The rule is un-scoped now.

## Section background audit (2026-09)

Audited every full-width section on twelve pages. The finding was that
the site had only TWO section treatments, with nothing between them:
the aura gradient (every transparent section, which is almost all of
them) and pure white (`.band-white`, seven instances). No warm neutral
existed, which is why the white bands read as abrupt — the jump was
gradient to stark white and back.

`.band-cream` is that middle tone: `--bg` opaque, the same hairlines as
`.band-white`. It covers the aura so the section reads calm, and a
white card on it finally has contrast.

APPLIED TO EXACTLY TWO SECTIONS, the only two where a full-width white
band held white cards:
- home, "Ways we can work together" — five white cards on white
- about, "From people I have worked with" — ten quote cards on white

THE OTHER FIVE WHITE BANDS STAY WHITE, and this is the part worth not
undoing later. On My Approach ("I solve business problems", "The people
side of the work") and the course page ("Diagnosis before tactics",
"What changes", "Who is teaching it") the white bands ALTERNATE with
gradient sections and carry no cards. That alternation is the page
rhythm. Flattening them to cream would have removed cadence rather than
added intention, which is the opposite of what the audit was for.

White cards on transparent (aura) sections were left alone throughout —
the gradient already gives them contrast.

## No full-width white bands left (2026-09, revised)

The audit above kept five cardless white bands on the grounds that
their alternation with gradient sections was the page rhythm. Amber
looked at the deployed My Approach page and said it still had solid
white sections, so all five are cream now and `.band-white` is gone
from the sheet entirely.

The system that leaves: the aura gradient is the default section,
`.band-cream` groups and separates, `.bridge` is a white veil at 45%
for quote banners, and PURE WHITE IS NOW EXCLUSIVELY A CARD SURFACE —
cards, quote cards, the fit panel, the workflow panels. That is a
cleaner rule than the one the audit started with, and it matches the
brief's own list of what white is for.

`.band-cream + .bridge` collapses its doubled hairline, the mirror of
the `.bridge + .band-white` rule that already existed and now points at
`.band-cream`.

## "What keeps me interested" restructured (2026-09)

Intro line, then a row of the beats block (60%) beside the
messy-to-clear mark (35%), then the two explaining paragraphs full
width beneath. The graphic reads as belonging to the conceptual half
rather than floating beside prose it has nothing to do with. Line
weight went 1.6 to 2.3 and the alphas up, since at 25% of the section
the earlier version was too faint to carry a column.

`.ab-quiet-close` is body copy now, not a display pull-line: normal
size, full width, same voice as the paragraphs above it.

CAUTION FOR ANYONE MEASURING THIS PAGE: there are TWO `.ab-beats`
blocks on About. `document.querySelector('.ab-beats')` returns the one
in the earlier section, not the one in this row, which briefly looked
like a broken grid until the probe was scoped to `.mc-split .ab-beats`.

## Workflow & AI engagement photo (2026-09)

Photography is EIGHT appearances. `amber-fugedi-workdesk.webp`
(1200x1200, 105K) sits right of the copy in Workflow & AI's engagement
section on `.pf-split.pf-split-r`, matching Fractional and Consulting.
Mentorship & Advisory is now the only service page without one;
`amber-fugedi-sofa.webp` is still prepared for it.

Two things to know about this photo. Its backdrop is the SAME ROOM and
the same moodboard as `amber-fugedi-desk.webp` on the course page —
different outfit, different framing, so the "no photo twice" rule holds,
but the setting repeats across the site. And it is an environmental
shot, not a portrait: the desk, laptop, notebook and mug are what make
it right for this page specifically, and a centred crop hides all of
them under the oval. The source is square in a 5:4 frame, so there is
only 20% of vertical slack — 64% recovered about eight pixels and
nothing else. It takes `object-position: 50% 100%`, a full bottom
align, which is the only setting that keeps the working scene.

BUG FIXED IN PASSING: the stacked breakpoint capped the IMAGE at 260px
(`.teach-photo, .pf-photo { max-width: 260px }`) while the `.pf-frame`
that carries the aspect ratio and the offset outline stayed at full
column width. Below 900px the outline was drawn as a full-width oval
with a small photo floating inside it, on all four pages using the
treatment. The cap belongs on `.pf-frame`.

## "The short version." rebuilt (2026-09)

Amber's reference turned the four resume-shorthand columns into an
editorial row: a small line icon in a soft tinted circle sitting on a
hairline, then a serif figure, a serif descriptor and sans supporting
copy. `.ab-cred` is gone and `.sv-*` replaces it. Three tiers instead of
two, which is what makes it read as composed rather than as a list of
labels. Still no cards, no borders, no shadows.

WHAT THE REFERENCE ASKED FOR AND DID NOT GET. It assigned a different
accent per column and painted the icon, the rule AND the figure in it —
coral, lavender, coral, gold. That is a third colour-coded set, and one
of the four put coral on a divider. The tinted circle survives and takes
the four PASTELS (blush, lavender, sage, peach), which are fill-only and
mean nothing here, so the row keeps its warmth without opening a code.
The rule takes the same pastel, held down. Every figure stays
coral-deep, which is what the section already did.

Icon geometry is the site's, not the reference's: 24x24 at stroke 1.5,
matching `.hiw-ico`, rather than 32x32 at 1.8.

TWO ICONS FAILED THEIR FIRST DRAFT and only rendering at 6x showed it.
"10+ years" and "Different kinds of businesses" were both bar charts and
sat two columns apart looking like the same mark; and the "two tracks
with a node each" drawn for "Consulting since 2017" is a settings
slider, unmistakably. Businesses became a circle beside a rounded
rectangle — different kinds, different sizes — and consulting became two
parallel arrows running the same way. RENDER SMALL MARKS LARGE BEFORE
SHIPPING THEM; at 21px both faults were invisible.

Both `.sv-fig` and `.sv-lead` reserve two lines above 1020px. Without
it, four headings of unequal length put the descriptors and the copy on
four different baselines and the row read ragged.

The universities stay named, folded into the education column's copy.
The page's JSON-LD claims `alumniOf` for both and this is the only
place on the site that says so. Amber's supplied copy dropped them.

`.ab-split` (heading in the margin, prose beside it) is REMOVED — this
section was its last user.

## Convergence replaces messy-to-clear on About (2026-09)

The tangle beside "It's figuring things out" is gone. In its place,
Amber's convergence graphic: three soft overlapping fields (blush,
lavender, peach), one clean line running through them, three anchor
points landing on that line, and a resolved gold endpoint inside a
larger outlined circle. Same idea, said quietly instead of busily —
different inputs aligning into one clear outcome. No labels, no arrows,
no caption, which is the reference's rule and the right one.

Colours are the About marks' own, unchanged: coral-deep, automations-
deep and courses-deep for the anchors, courses-deep gold for the line,
the endpoint and the ring.

TWO INTEGRATION TRAPS, both of which would have shipped silently:

1. The reference carries its alpha in `opacity` attributes. `.glyph
   .fill` animates opacity to 1 with `forwards`, so every one of those
   is overridden the moment the section scrolls into view — the fields
   would have gone flat and opaque. Alpha lives in `fill-opacity` and
   rgba() instead. This is the third time this trap has been hit; it is
   written down twice already.
2. The outlined circle is drawn as a PATH, not a `<circle>`. The draw
   cascade addresses strokes with `:nth-of-type`, which counts by TAG,
   so a stroked `<circle>` would have been counted among the seven
   filled circles and thrown every delay off.

`viewBox` is tightened to the mark's own bounds (`147 62 693 306`)
rather than the reference's `0 0 900 430`. The reference is a
full-width standalone with 155 units of empty space down its left side;
in a 37% column that padding is what made the first pass read small.

`.mc-*` is gone. `.cv-split` keeps the 1.7fr/1fr desktop ratio, the
1.9fr/1fr tablet ratio, and hides the graphic below 760px.

MEASURING THIS: the mark's last elements land at 2.2s. A 500ms wait
after `in-view` screenshots a half-drawn graphic — the first render
looked like the endpoint and ring had failed to appear at all. Wait
past the full cascade.

## Design system audit and standardisation (2026-09)

Amber asked for a full audit before any change: type, colour, spacing,
rhythm, containers, cards, icons, buttons, backgrounds, responsive,
graphics. Measured with Playwright across all sixteen pages at 1440 —
computed values, not what the sheet says — plus a static pass over
`styles.css`. Two artefacts came out of it:

- `design-system/DIGITAL-SYSTEM.md`, NEW: the normative reference.
  Tokens, component rules and the judgement about when to reach for
  something. This file stays the change log. Where they disagree, the
  newer entry here wins and DIGITAL-SYSTEM.md is out of date.
- The findings below, worked in order of how visible each one is.

### What the audit found

ALREADY SOUND: one serif and one sans, no third family anywhere. H1 has
exactly ONE treatment site-wide. Every `.btn` shares one box —
17px/600, 15/32 padding, 24px radius. `.wrap` is 1120 everywhere except
About and Expertise at 1200, which is deliberate. Section padding is
dominated by 104/104 (53 sections) with the documented compact and
service variants under it.

OUTLIERS, worst first:

1. **H3 carried FIFTEEN distinct treatments** — 30.4, 30, 25.9, 24, 21,
   17 and 13px, with five different line heights on the 30px ones alone
   and two unrelated 13px sans versions. The clearest case on the site
   of one role styled many ways.
2. **Icon stroke weights were not a system.** Rendered weights ran 1.2
   to 4.4 and several marks mixed three weights internally. The four
   offer marks sat in one row at 4.4, 2.2, 2 and 2 — the Fractional arc
   rendered at 3.2px beside three at 1.4.
3. **Fifty colour literals outside the palette**, including six greys
   used for TEXT (`#D9D2C9`, `#6F675D`, `#767065`, `#CFC5CE`, `#F7F1EB`,
   `#E8DECB`) and five near-duplicate pastels on the Expertise chapter
   tiles.
4. **Radius drift**: 16, 10, 9, 18, 20, 26, 28 and 5px all in use
   against a documented scale of 24 / 14 / 8 / 50% / organic.
5. **Eighteen reading widths** in `ch`, from 24 to 88.
6. **Twenty-nine breakpoints.**
7. **Twenty-seven line-height values.**

### Icon weights, fixed

Each family now has a PRIMARY weight chosen so it renders at ~1.5px at
the size that family actually displays at, and a SECONDARY at 72% of it
for interior detail. Within an icon the heaviest stroke is the primary
and everything lighter is detail; `stroke-opacity` is untouched, since
that is the other thing separating detail from outline.

    sv-card       vb72 @52px   2.1 / 1.5
    bld-cat-head  vb72 @56px   1.9 / 1.4
    ch-mark       vb48 @34px   2.1 / 1.5
    lead-mark     vb24 @24px   1.5 / 1.1
    tl-eg         vb24 @24px   1.5 / 1.1
    wf-ico        vb32 @22px   2.2 / 1.6

38 icons changed. Hero illustrations (`.fl-art`, `.problem-art`,
`.svc-vis`, `.co-cycle`, `.xp-visual`) are deliberately NOT in this
list: they are compositions, and weight variation inside them is
drawing, not drift.

STILL OPEN, and Amber's call rather than mine: the site runs THREE icon
languages, not one. The offer and project marks are composed gradient
brand marks; the workflow, How-it-works and short-version marks are
thin line icons; the six Expertise chapter marks are pictorial,
semi-filled and sit on saturated pastel tiles — a speaker, a monitor, a
group of people. That third set is the outlier, and redrawing six marks
is a taste decision, not a conformance one. Flagged, not done.

### H3 and line heights, fixed

H3 went from FIFTEEN treatments to FIVE, and all five are grades rather
than accidents:

    30 / 36  / 600  Newsreader   the h3 grade
    30 / 33.6 / 400 Newsreader   .sv-fig — a figure, not a heading
    21 / 27.3 / 600 Newsreader   the card-title grade
    17 / 21.08 / 600 Newsreader  .hiw-stages h3, a stage title in a 4-up
    13 / 18.2 / 600 Manrope      the uppercase label grade

One line height per grade, applied everywhere it was drifting:

    --fs-h3 grade      1.2   (was 1.1, 1.2, 1.3)
    card-title grade   1.3   (was 1.25, 1.28, 1.3)
    label grade        1.4   (was 1.14, 1.2, 1.4)

Three sizes were off the scale entirely and are gone: `.case h3` at
30.4px (its own clamp), `.ab-think.ab-think-key h3` at 25.9px (another
clamp), and `.ab-think h3` at 24px, which pinned the h3 clamp to its low
end for a half-step and was the only 24px heading on the site.

THE BELIEF COLUMNS ON ABOUT changed most. The middle column's "one step
up" used to be 24 against 21 — 8%, barely visible, and off-scale. It is
now `--fs-h3` against `--fs-intro`, which is a real step and reads the
way the note said it should. Rendered and checked: the middle column
carries without turning into a card.

`.card h3`'s dead `1.45rem` is deleted; a later rule had been overriding
it with `--fs-intro` the whole time.

### Stray colours and radius, fixed

TWO ON-DARK TOKENS ADDED. The site has two dark surfaces — the CTA band
and the course thumb — and had no token for text on either, so the sheet
invented a light neutral every time it needed one: `#D9D2C9`, `#F7F1EB`,
`#E8DECB` and `#CFC5CE`, four one-off greys for the same job.

    --on-ink        var(--bg)                      headings on dark
    --on-ink-muted  rgba(253, 249, 245, 0.82)      supporting copy on dark

Contrast improved slightly in both places: 9.1:1 on the band and 10.7:1
on the thumb's darkest stop, against the 8.4:1 the old value documented.

Also onto tokens: `#6F675D` and `#767065` (text greys on cream) to
`--muted`; `#8A6717` to `--courses-deep`; `#4A3F86` to
`--automations-deep`; `#FFFDFA` to `--bg-raised`. Fourteen sites.

RADIUS back on the scale — 28, 26, 20, 18, 10, 9, 6 and 5 were all in
use. `.cta-band` and `.quote-marquee` 28 to 24; the mobile nav CTA 26 to
24; `.marquee-toggle` 20 to 24 (it is a pill); `.proof-chip` 18 to 16;
`.sp-card` and `.work-strip a` 10 to 14; `.nav-drop-menu a` 9 to 8;
`.work-pair img` 6 and `.lb-stage img` 5 to 8. Focus rings are outlines,
not elements, and the 2px career ticks are marks rather than boxes;
both stay.

STILL OPEN, Amber's call: the course page runs a THIRD colour-coded set
— `.cl-found` coral, `.cl-chosen` lavender, `.cl-remembered` gold, for
the three course stages. Colour coding is capped at two sets (offers,
Expertise chapters). It is a real code carrying real meaning, so it is
either a sanctioned third or it should collapse; not something to decide
by conformance.

### The soft explainer panel, extracted (2026-09)

`.wf-*` was one page's before/after graphic. The treatment is the site's
best containment device, so it becomes `.ex-*` and every accent reads
`--svc-*` WITH A FALLBACK, which is what makes it usable off the service
pages: `--svc-wash` falls back to a blush wash, `--svc-accent` to
`--coral-deep`. `.wf-split` and `.wf-tx` stay — those are the Workflow
page's own layout, not the component. The `.wf-band/.wf-row/.wf-cut/
.wf-cross/.wf-flow` SVG classes on the Services hero are unrelated and
untouched.

WHAT I DID NOT DO, and why. Consulting, Fractional and Workflow already
run a before/after — `.svc-ba`, two columns of hairline rows with no box
— which is the same job in a different device. The obvious move was to
put all three into `.ex-panel` and be done. That would have made the
site's before/after into one card repeated four times, which is the
thing Amber's brief explicitly rules out ("recognise these as part of
the same design family without seeing the exact same card repeated
everywhere"), and on Workflow & AI it would have put two near-identical
panels 110 lines apart on one page.

So the two are documented as ONE FAMILY AT TWO SCALES:

  soft panel  — contained, beside copy, aside scale, stacked rows
  .svc-ba     — full width, its own section heading, no box, hairlines

Boxing a full-width comparison turns two columns into two large cards
and loses the page's air. Un-boxing an aside loses the containment that
made it readable next to prose.

FIXED WHILE IN THERE: `.svc-ba-after`'s ring was hardcoded to
`--coral-deep` with a coral fill, so the "after" marker read
consulting-pink on the Fractional and Workflow pages while every other
accent on those pages was green and violet. It takes `--svc-accent` and
`--svc-pastel` now.

STILL OPEN, Amber's call: Workflow & AI carries BOTH the "From this →
To this" panel and a "What should be different" before/after section,
about 110 lines apart. They overlap on reporting time and automating the
repeatable; the section adds adoption outcomes the graphic does not
cover. Two before/after moments on one page is a content question, not a
conformance one.

### Mobile graphics, weights and tracking (2026-09)

MOBILE GRAPHICS. Swept every page at 390px and measured what actually
renders. The site was already doing the right thing almost everywhere —
the four service hero marks, the home problem art, My Approach's map,
About's convergence mark and the Workflow panels are all hidden or
stacked below their breakpoints. ONE outlier: the Expertise hero, 342 x
187px carrying 139 shapes and six labels rendering at about 6px.

It is hidden below 760 now. The old comment argued for keeping it on the
grounds that "the six areas are spelled out in full in Where I help
immediately below" — which is the reason to hide it, not to keep it.
Nothing is lost, the head closes up, and it matches
`.page-service .head-art`, which already does this at the same
breakpoint. Between 760 and 900 the hero stacks and the graphic runs the
full column, so the labels land near 13px and it stays.

The Services hero (292 x 241, 27 shapes) and the Courses cycle (270 x
270, 7 shapes) are abstract with no text and read fine at phone size.
They stay.

WEIGHTS. 600 is the site's label and card-title weight. Twelve
declarations used 700 for exactly that role — mostly uppercase
micro-labels on the course and thank-you pages — and `.proof-stat` used
800, the only 800 on the site. All now 600. The proof chip still reads
as the loudest thing in the hero; rendered and checked.

TRACKING. Two declarations dropped the leading zero (`.1em`, `.08em`)
and the ring labels in the course cycle were tracked in px (1.2px on
13px text, which is 0.092em). All three now read `0.1em` / `0.08em`.

## The share card, replaced (2026-09)

`og-image.jpg` dated from 21 August and its footer still read "Marketing
Strategy · Courses · Consulting" — three of five offers, no fractional
leadership, no workflow and AI, and nothing about senior in-house
leadership. The title tag had said "Senior Marketing Leader &
Consultant" for weeks; the card had not caught up. The `og:image:alt`
was still "marketing consultant in Connecticut" too.

`og-image-v3.jpg` — 2400x1260, 139KB, progressive. Same headline, which
is the homepage h1 and is current. What changed:

- The footer reads **Leading · Consulting · Building** — the site's own
  three pillars from the Work page. It covers the in-house half and the
  client half in three words, which the old list did not.
- The orbit glyph is gone. That is the AUTOMATIONS OFFER MARK,
  and it was standing in for the whole site. `brand-mark.png` sits
  beside the wordmark instead, which is what the nav does.
- Alt text now says senior marketing leader and consultant.

- **The composition is centred, inside a safe zone.** See below.

A NEW FILENAME, DELIBERATELY. LinkedIn, Facebook and Slack cache an
og:image by URL for about a week, so re-uploading over `og-image.jpg`
would not have been fetched — which is why Amber's share preview was
still showing the old card after the metadata had already updated. A new
URL has nothing to serve from cache. `og-image.jpg` stays on disk;
posts already shared point at it. (v2 existed for about an hour and was
superseded by v3 before deploy; nothing points at it.)

### THE CROP, which is what actually broke it

Amber's Facebook mobile composer showed the card with the first word of
every line cut off. The declared 1.91:1 is what LinkedIn and the
Facebook FEED use, but **Facebook's mobile composer centre-crops to
about 1.35:1**, and WhatsApp and iMessage go squarer still. Simulating
the crops against the left-aligned v1/v2 reproduced her screenshot
exactly: a 1.35:1 centre crop keeps only the middle 70% of the width,
and type that starts 72px from the left edge is the first thing gone.

The card is centred now and everything readable sits inside `.safe` —
846 of 1200, the middle 70%. Measured, not estimated: ink spans x
431..1975 of 2400, and both the 1.91 and 1.35 centre crops keep all of
it.

A 1:1 crop still clips about 140px each side. Surviving THAT needs a
612px safe zone; it was built and rendered, and at that width the type
drops to 56px over three lines and the card goes timid. 1.35 is the
honest trade — it covers the surfaces this actually gets posted to, and
square previews are small thumbnails where the wordmark and the aura do
the work anyway.

RULE FOR ANY FUTURE CARD: nothing that has to be read goes outside the
middle 70%. Simulate the crops before shipping — 1.91, 1.35 and 1:1,
centred — rather than trusting the full-size render.

`og-course-foundation.jpg` is unchanged and still accurate.
`404.html` and `thank-you.html` carry no OG tags by design.

SOURCE: `design-system/og-card-source.html`. Render at 1200x630 with
deviceScaleFactor 2, save progressive JPEG at quality 88. The aura is
the site's own four clouds, static, at 72% with an 84px blur — the live
blobs are sized in vw and land on those pixel values at a 1200px
viewport.

FORCING A RE-SCRAPE, since a new file alone does not do it: LinkedIn
Post Inspector, then the Facebook Sharing Debugger's "Scrape Again". And
LinkedIn captures the preview WHEN THE LINK IS PASTED INTO THE COMPOSER
— editing a published post does not refresh its card.

### Icon duplicates, fixed (2026-09)

Pulled every icon off the pages onto one contact sheet and compared the
GEOMETRY, not the appearance. 56 icons, 52 distinct drawings — four
drawings were doing two jobs, and three of the four were inside the
Workflow & AI before/after panel:

    Manual work          / Create consistent outputs      same document
    Handoffs slow down   / Keep humans in the right places same people
    Reports take time    / Give the team time back         same bar chart

Three of five rows in a graphic whose only job is contrast, showing no
contrast. The BEFORE side took the new mark in two of the three — the
"after" icons were right for their idea and the friction side was the
one drawn generically. Time back is the exception: the report IS a bar
chart, so the gain moved instead.

    Manual work              a sheet with a pen
    Handoffs slow down       an arrow running into a wall
    Give the team time back  a clock with a plus

TWO OF THOSE THREE FAILED THEIR FIRST DRAFT AND ONLY 8x SHOWED IT. Two
nodes joined by a broken link read as a KEY, and a clock with a small
counter-clockwise arrow read as a clock with a stray tick on it. Both
were redrawn to two shapes each. This is the third time a mark has
shipped past a first draft that looked fine at 22px.

THE FOURTH DUPLICATE was across pages: the Workflow & AI OFFER mark and
the AI Tools for GTM WORK-CATEGORY mark were the same drawing —
identical circles, only the gradient id and the family's stroke weight
differed. The offer mark is the primary of the two (it carries a service
on the home page and on Services), so the work mark moved: a chip, with
a gradient core, a stroked body and short pins. Rendered beside its
three siblings to check it does not collide with Products, which is the
other square-ish mark in that row.

ONE REPEAT LEFT, DELIBERATELY: the magnifier on Consulting's "Understand
the problem" and Fractional's "Find the real constraints". Two service
pages, one idea — investigate before acting. That reads as consistency,
not as an oversight.

STILL OPEN, Amber's call: the Expertise chapter marks remain the third
icon language — pictorial, part-filled, on saturated tiles, against 42
thin-line marks and 8 composed brand marks everywhere else.

### Section rhythm and the last type outlier (2026-09)

Measured at 1440 / 900 / 390 across all sixteen pages — closing the gap
in the earlier audit, which only ran at 1440.

TYPE HELD UP BETTER THAN THE SHEET SUGGESTS. `styles.css` carries 72
font-size declarations naming a raw value, which reads like drift, and
almost none of them bite: the type layer at the end of the sheet
overrides nearly all of them. What actually RENDERS off the ladder is
six sizes at 1440, five at 900 and four at 390 — and every one is one of
the five documented exceptions (`.h2-long`, the home proof chips,
`.ct-title`, the mobile menu, `.ch-sign`) or text inside an SVG.

Exactly ONE undocumented outlier existed, added after the 2026-08 audit:
`.ab-pull-line` and `.ab-quiet-open` carried their own clamp that landed
at 20.8px on mobile against an h3 of 24. Both take `--fs-h3` now. At
1440 nothing changes — their clamp already resolved to 30 there.

**Only measure what renders.** Counting raw values in the sheet would
have sent me chasing 72 phantom problems.

SECTION RHYTHM: twenty distinct padding pairs at 1440 sounds like chaos
and is not. 53 sections sit at 104/104, 16 at the 52 seam, 11 are
first-in-page with the top trimmed, 10 at the compact step, and 13 of 16
page heads open on 138. Four rules were genuinely loose:

    Expertise chapters   100.8 -> 104   a 7vw clamp that never reached its max
    Services .sp-section 100   -> 104   four pixels off for no reason
    .svc-aside           76    -> 64    a fifth step; it is a closing aside, so compact
    compact step         63.36 -> 64    4.4vw never reached 64 either

TWO CLAMPS WERE MISSING THEIR OWN MAXIMUM and both looked right in the
sheet: `7vw` is 100.8 at 1440, `4.4vw` is 63.36. If a clamp names 104,
the vw term has to hit 104 at 1440. Worth checking every vw clamp in the
sheet the next time someone is in there.

KEPT, DELIBERATE: Expertise pairs `.tools-section` and `.showcase` at 64
each for a 128 joint, because those two sections are one argument; and
the section under a sticky anchor bar opens at 74 rather than 104, which
Amber asked for.

DIGITAL-SYSTEM.md was WRONG on two counts and is corrected. It called
the rhythm four steps — the page head at 138 is a fifth, on 13 of 16
pages. And it said section joints land at 60–90px, which is not what
adjacent sections do: they carry no margin, so the joint is both
paddings added. Two standard sections make **208px**, not 90.

## Homepage deck rewritten, and a case audit (2026-09)

Amber's three paragraphs replace the two that were there. The new deck
leads with the decade and the range ("led growth, rebuilt marketing
functions, developed teams, improved the systems behind the work"), then
says plainly that she leads growth marketing IN-HOUSE while taking a
select number of clients. That is the recruiter-and-client positioning
stated in the deck rather than implied by the title tag. Three
paragraphs is longer than the hero carried before; rendered at 1440 and
390 and it balances against the proof chips.

CASE AUDIT. Every h1/h2/h3 plus every card title, label and nav item
across sixteen pages, judging only words that do NOT open a sentence.
The site is sentence case and holds: after filtering out second
sentences, pronouns and proper nouns, exactly THREE headings were Title
Case, all of them the Work page's build categories:

    AI Tools for GTM      -> AI tools for GTM
    Marketing Activations -> Marketing activations
    Courses & Resources   -> Courses & resources

They sat directly under "Building what teams actually use" and beside
"Leading marketing" and "Stepping in where growth gets stuck".

NOT CHANGED, and why. `.card-tag` and `.case-tag` are `text-transform:
uppercase`, so "Document Technology" and its twelve siblings never show
their source case. "Foundation Audit" and "Foundation Plan" are named
deliverables used twelve times across the course and thank-you pages.
"VP of Growth Marketing & Enablement" is a job title. "My Approach" is a
page name.

STILL OPEN: the ampersand. "&" is in job titles and the footer line;
"and" is in the nav and the service names. Both are current, and which
one wins is Amber's call, not a conformance fix.

### The homepage deck needed a spine (2026-09)

Amber on the new three-paragraph deck: "Mobile looks great, I'm just
not sure about desktop." Measured what changed at 1440:

    copy column   616px, capped at 640
    the deck      TEN lines of 17px body, all three paragraphs identical
    the h1        two lines, widest line 476px
    hero height   750px

Two things were off, and only one is worth fixing.

WORTH FIXING: ten lines of undifferentiated body copy under a two-line
50px headline. The deck outweighed the thing it supports. The first
paragraph takes the intro grade now — it is the sentence that says who
she is, and the two under it are the evidence. Costs 15px of hero
height and nothing else.

NOT WORTH FIXING, and measured before rejecting: the copy runs 140px
past the headline's right edge, because the h1 breaks after "marketing"
at 476px while the copy fills 616. Capping the measure at 540 does
align the block — and turns 10 lines into 12, making the deck a taller
narrower wall and opening MORE empty space beside it. 818px hero
against 765. The asymmetry is the better of the two.

The right column carries 289px of chips against 543px of copy, centred.
That gap is the shape of an asymmetric hero, not a fault.

## Hero container, and an SEO audit (2026-09)

ONE CONTAINER FOR THE HERO COLUMN. Amber: the hero body text should be
the same width as the headline. It was not, and the gap was widest
where it mattered: `.hero-copy` capped at 690 while `.subhead` carried
its own 640 cap, so below about 1020px the h1 ran to 690 and the
paragraphs stopped FIFTY PIXELS short of it. At 1200-1300 the gap was
2px. Only above 1440, where the grid column is 616 and neither cap
binds, were they equal.

The cap now sits once, on the column, at 640 — so the headline, the
deck and the CTA row share a left and a right edge at every width from
860 to 1920. Verified at eight widths. 640 rather than 690 because 690
at 17px is about 81 characters, over the comfortable ceiling.

### SEO audit, all sixteen pages

WHAT WAS ALREADY RIGHT, and it is most of it. Sixteen unique titles, all
under 60 characters. Sixteen unique meta descriptions, every one between
120 and 159. Canonicals on all fourteen indexable pages; 404 and
thank-you correctly `noindex`. Exactly one h1 per page and no heading
level skipped, on every page. Sitemap lists the fourteen indexable URLs
with `lastmod` and nothing stale. robots.txt points at it.

ALT TEXT CAME OUT CLEAN. 46 images, every one carrying alt and every one
carrying width and height, so nothing shifts on load. A first pass
flagged three, and all three were the audit's fault rather than the
site's: one `<img>` written inside an HTML COMMENT, and the two
screenshots in the Work hero, which sit inside an `aria-hidden="true"`
wrapper where an empty alt is correct. **Strip comments before auditing
markup, and check the ancestor before calling an empty alt a bug.**

TWO THINGS FIXED:

1. **51 inline `<svg>` were neither `aria-hidden` nor labelled.** All
   decorative. Checked first that none is the only content of a link or
   a button — zero were — so hiding them removes nothing from the
   accessibility tree and stops assistive tech announcing empty
   graphics. The Expertise hero, which IS content, keeps its
   `role="img"` and `aria-labelledby`.
2. **Five clean URLs had no explicit rewrite.** `/courses`, `/privacy`,
   `/terms` and `/thank-you` all had one; `/about`, `/expertise`,
   `/my-approach`, `/projects` and `/services` did not. They work
   because Netlify's Pretty URLs setting serves `about.html` at
   `/about` — a host setting the repo never states, with every
   canonical, every nav link and every sitemap entry depending on it.
   Now explicit, in the same shape as the nine that already were.
