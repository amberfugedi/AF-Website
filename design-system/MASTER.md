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
STAT NUMBERS are the exception (2026-07): all stats read in
`--coral-deep`, the single brand accent — settled after trying the
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
  roles, labels, notes, footer) · body 16/17 (lh 1.55; stepped from
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
  words) step down one grade via `.h1-long` (about/capabilities
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
six phrases: "what to build." (blush, home problem), "different
needs." (blush, work h1), "actually needs." (blush, about h1 —
needs sit on the question side), "work together." (butter,
services h1), "marketing experience." (butter, capabilities h1),
and "comes next." (butter, dark CTA bands + about contact) —
every page-top carries emphasis (home via the coral italic em)
and every page runs exactly two tabs; 404 stays plain,
organic blob portrait with offset coral outline, and the offer
card-art compositions (home): a pastel gradient blob backdrop, the
offer's mark enlarged over it, and small geometric accents (dot
grids, ticks, a plus, an outlined square). Layered-collage
composition borrowed from editorial card design; ingredients stay
strictly ours: no photos, no halftones, pastel palette only.
Gradient ids must be unique per page instance. (A hero butterfly and Magic UI-style headline
sparkles were both tried and removed 2026-07 — borrowed decorative
gestures read as AI tells; don't reintroduce either.)

## Photography

Three appearances, three DISTINCT photos: the neon studio shot
("good ideas start here", amber-fugedi-studio.jpg) in the About
blob per Amber's pick, the sunlit blazer portrait
(amber-fugedi-sunlit.jpg) at 150px in the home about teaser, and
the mug photo at the contact moment, 108px. The cream portrait
serves only as the structured-data headshot (amber-fugedi.jpg). All share the organic radius
family. Never in the hero (the aura is the signature), never on
proof pages (results are the picture), no photo used twice.

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
   already published elsewhere on the site.

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
strategy to the details that bring it to life." · capabilities
"AI should give teams more time to think strategically, not just
more ways to produce." · about "My title has changed. What I love
most is still figuring out what will move the business forward."
The statement reads at BODY scale (like all ledes, per Amber),
60ch centered. When the band leads into a band-white section
the doubled hairline collapses (.bridge + .band-white).
Center-aligned like the dark CTA band; bands center, content
sections stay left-aligned. The
eyebrow is the FIXED refrain (never varies); the supporting line
is page-aware (Amber, 2026-07): home = industries breadth,
services = formats shaped around the need, work = same question
five ways, capabilities = functions pointed at one outcome,
about = career arc with one constant. Keep each line one thought,
under ~140 chars, no em dashes. Company
names appear only inside case studies where the relationship tag
gives them context. Never add a "trusted by" logo strip.

## Site structure

- Five plain HTML pages, no framework/build: `index.html`,
  `services.html` (offer ladder + sticky anchor nav),
  `work.html` (case studies: challenge → approach → impact),
  `capabilities.html` (capability areas + platform stack),
  `about.html` (bio, career story, team testimonials, education, contact
  + email capture). Home also carries a three-quote testimonial
  section; quotes are real, transcribed from the previous site and
  Amber's LinkedIn recommendations — never invent or edit beyond
  trimming whole sentences.
- Shared `styles.css` + `main.js`. Nav/footer duplicated per page inside
  `<!-- SHARED NAV/FOOTER — keep in sync -->` comment blocks; only
  `aria-current="page"` differs.
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
  normalized to "Scanoptics" — flip site-wide if Amber confirms
  the hyphenated official styling instead. Contact area now holds
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
