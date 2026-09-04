# Digital Design System — amberfugedi.com

The normative reference for how the site is built. `MASTER.md` is the
change log: it records what was decided and why, in order. This file
records what is TRUE NOW — the tokens, the component rules, and the
judgement calls about when to reach for something.

Where the two disagree, the newer entry in `MASTER.md` wins and this
file is out of date. Fix it.

**Guiding principle: consistency of system, not sameness of page.**
Pages are allowed to look different. The same content role is not
allowed to be styled differently for no reason.

**Final design principle: every visual choice should improve
understanding, hierarchy, or personality. If it does none of those,
remove it.**

---

## 1. Typography

Two families. No third, ever.

| | |
|---|---|
| `--font-display` | Newsreader — serif, headings and editorial emphasis |
| `--font-body` | Manrope — sans, everything that is read rather than looked at |

Serif carries voice: headings, pull lines, stat figures, the descriptor
line in a two-tier stack. Sans carries information: body copy, lists,
labels, UI. A switch between them must be doing work.

### The scale

One fluid system, 390px → 1440px. Nothing sizes itself outside it,
with five documented exceptions listed under the scale.

| Token | 390 → 1440 | Role |
|---|---|---|
| `--fs-h1` | 40 → 50 | Page title. One per page. |
| `--fs-h2` | 28 → 40 | Section title (`.section-title`). |
| `--fs-h3` | 24 → 30 | Subsection, and the largest card title. |
| `--fs-intro` | 19 → 21 | Section lede, intro line above a grid. |
| `--fs-body` | 16 → 17 | ALL running text. Also card titles inside a 4-up row. |
| `--fs-small` | 14 → 15 | Supporting copy under a card title, captions, meta. |
| `--fs-eyebrow` | 12 → 13 | Uppercase labels, tags, footer heads. |

**The five sanctioned exceptions**, and there are no others. Re-measure
after any type change rather than trusting the stylesheet: 72 font-size
declarations in `styles.css` name a raw value, and almost all of them
are overridden by the type layer at the end of the sheet. Only what
RENDERS counts.

| Exception | Sizes | Why |
|---|---|---|
| `.h2-long` | 35 / 29.3 | A section title too long for 40px. Still an `h2`, still display face. |
| Home proof chips | 39.2 / 24.3 / 19.8 stat, 12.8 label | The three stacked cards step down on purpose. Micro-type. |
| `.ct-title` | 31.2 / 24.6 | Inside an `aria-hidden` thumbnail. Artwork, not content type. |
| Mobile menu links | 25.6 | Tap targets in the full-screen nav. |
| `.ch-sign` | 15.75 | A "+" glyph at 1.05em of its own label. Optical sizing of a symbol. |

Text inside an SVG is artwork and sits outside the ladder too.

### Line heights

Six values. Pick by size, not by feel.

| Size band | Line height |
|---|---|
| Display (h1, h2) | 1.1 |
| Long display (`.h2-long`, serif pull lines) | 1.2 |
| h3 / card titles | 1.3 |
| Intro / lede | 1.45 |
| Body | 1.55 |
| Small, tight labels | 1.4 |

### Weights

400 (serif figures and pull lines), 500 (h1/h2 — Newsreader's 500 is the
site's display weight), 600 (h3, card titles, links, buttons, labels).
**700 and 800 are not part of the system.**

### Tracking

| Context | Value |
|---|---|
| Display serif | `-0.015em` (`-0.02em` on the largest) |
| Body | 0 |
| Uppercase eyebrow / label | `0.08em`, or `0.1em` when the label is short |

Always write `0.08em`, never `.08em`. Never letter-space in `px`.

### Case

**Sentence case for every heading, label, card title, button and nav
item.** Capitalise the first word and nothing else.

Title Case is reserved for things that genuinely carry it: proper nouns
(PERQ, Scan-Optics, MembersFirst CT Federal Credit Union), job titles
(VP of Growth Marketing & Enablement), named deliverables inside the
course (Foundation Audit, Foundation Plan) and page names in the nav (My
Approach). Everything else is sentence case, including a heading's
second sentence, which of course capitalises its own first word.

Uppercase labels — tags, eyebrows, footer heads — are set with
`text-transform`, so their source case never shows and does not matter.

### The hierarchy ladder

On any page, in this order, with no rung skipped upward:

    h1  >  h2 (section title)  >  h3 / card title  >  body  >  small

A card title inside a four-column row sits at `--fs-body`, not
`--fs-h3`. It is still the top of its own local stack because everything
under it is `--fs-small`.

---

## 2. Colour

### Core

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FDF9F5` | The page. Warm cream, the site's default ground. |
| `--bg-raised` | `#FFFFFF` | Cards and panels sitting ON cream. |
| `--ink` | `#2E2A27` | Headings and primary text. 13.3:1. |
| `--body` | `#3E3833` | Body copy. ~11:1. |
| `--muted` | `#524B43` | Secondary and supporting text. 8.2:1. |
| `--line` | `rgba(46,42,39,.12)` | Every structural hairline. |

**There is no other text grey.** If a colour is being used for text and
it is not `--ink`, `--body`, `--muted`, or a `-deep` accent, it is a
bug.

### Accents

| Token | Value | Use |
|---|---|---|
| `--coral` | `#FF6F61` | Fills and buttons ONLY. Never text on cream. |
| `--coral-deep` | `#B8354A` | Coral used as text: links, stat figures. 5.5:1. |
| `--blush` | `#FBD5E4` | Pastel. Fill only. |
| `--peach` | `#FCE4C4` | Pastel. Fill only. |
| `--lavender` | `#DAD4F5` | Pastel. Fill only. |
| `--sage` | `#D9EFD3` | Pastel. Fill only. |
| `--lavender-mark` | `#8579C9` | Decorative strokes only. |

**Colour roles, and they are strict:**

- Charcoal carries content.
- **Coral means interaction and nothing else.** Not dividers, not
  decoration, not category coding.
- Gold is reserved emphasis.
- Lavender and pink are atmosphere.
- Neutral lines are structure.

### Service accents

| Token | Value | Service |
|---|---|---|
| `--fractional-deep` | `#2E7529` | Fractional Leadership |
| `--consulting-deep` | `#A63563` | Consulting |
| `--automations-deep` | `#574AA6` | Workflow & AI |
| `--courses-deep` | `#8A5A14` | Courses, Mentorship |

Service pages set `--svc-tint / --svc-wash / --svc-accent / --svc-pastel
/ --svc-soft` from these. A component on a service page reads those
variables and never names a service colour directly.

### The two-set cap

**Colour coding is capped at two sets**: the offers, and the Expertise
chapters. A third set — a per-column accent, a good/bad axis, a set of
category tints — is not available, however tasteful the mockup. When a
row wants variation, use the four PASTELS as fill: they are atmosphere,
they mean nothing, and they do not open a code.

### Alpha

Alpha belongs in `rgba()` of a palette RGB, or in `fill-opacity` on SVG.
`rgba(46,42,39,0.06)` is the ink token at 6% and is fine.
`#F7F1EB` is a new colour and is not.

**Never put alpha on a `.glyph .fill` element via `opacity`** — the
fill-fade animation ends at `opacity: 1` with `forwards` and overrides
it. This has now been hit three times.

---

## 3. Spacing

### Section rhythm

Five steps. Every full-width section takes one.

| Step | Padding at 1440 | Use |
|---|---|---|
| Seam | 52 / 52 | `.bridge` — a transition band, not a section. |
| Compact | 64 / 64 | Long narrative runs (About), closing asides. `clamp(44px, 4.45vw, 64px)`. |
| Standard | 104 / 104 | The default. `section { padding: 104px 0 }`. |
| Generous | 128 / 128 | Openers and closers that carry weight. |
| Page head | 138 top | Every `header.page-head`. 13 of 16 pages. |

Sections carry NO margin — the padding is the whole rhythm. Two adjacent
sections therefore make a joint of both paddings added: **208px between
two standard sections**, 128 between two compact, 104 across a seam. A
page's first section trims its top to 0 because the page head already
paid for that space.

Two documented tightenings, both deliberate: Expertise pairs
`.tools-section` and `.showcase` at 64 each for a 128 joint, because
those two sections are one argument; and the section directly under a
sticky anchor bar opens at 74 rather than 104.

Measured at 1440 / 900 / 390 across all sixteen pages. The base section
is a FIXED 104 with a mobile step to 48 at 760 — not a clamp — so a
change to the standard step means editing `section { padding }` and its
mobile override together.

CHECK THE ARITHMETIC ON ANY vw CLAMP. Two steps were quietly missing
their own maximum: the compact step ran `4.4vw`, which is 63.36 at
1440, and the Expertise chapters ran `7vw`, which is 100.8. Both looked
right in the sheet and neither reached the number it declared. If a
clamp names 104 as its max, the vw term has to hit 104 at 1440.

### Inside a section

| Gap | Value |
|---|---|
| Heading → lede | 16–22px |
| Lede → grid | `clamp(34px, 4vw, 62px)` |
| Grid gap, 4-up | `clamp(18px, 2.4vw, 38px)` |
| Grid gap, 2-up cards | `clamp(16px, 1.8vw, 24px)` |
| Card padding | `clamp(26px, 3vw, 38px)` |
| Panel padding | `clamp(30px, 4.2vw, 64px)` |
| Body copy → CTA | `clamp(28px, 3vw, 36px)` |

---

## 4. Containers and reading width

| Purpose | Width |
|---|---|
| Page container `.wrap` | 1120px |
| Wide container (About, Expertise) | 1200px |
| Standard reading width | 68ch |
| Narrow reading width (asides, notes) | 46ch |
| Pull line / short statement | 34ch |
| Copy beside a graphic | the column, no `ch` cap |

Three reading widths, not eighteen. Text-heavy sections read narrower
than card and grid sections. A paragraph inside a grid column takes the
column and needs no cap.

---

## 5. Radius

| Value | Use |
|---|---|
| 24px | Cards, pills, bands, buttons |
| 16px | Compact cards inside a grid |
| 14px | Compact elements — chips, rows, menus |
| 8px | The phone results strip |
| 50% | Circles |
| organic | Amber's own photographs, and the two aura blobs |

Focus rings (3–6px) are outlines, not elements, and sit outside this
scale. **Nothing else.**

---

## 6. Borders, shadows, surfaces

- **1px, `var(--line)`.** One border weight. A 1.5px border exists on
  `.btn-outline` only, where it is the button's whole identity.
- **`--shadow-soft` or nothing.** `0 14px 40px -18px rgba(46,42,39,.18)`.
  A card with a visible border does not also get a shadow.
- No glassmorphism. No coloured glow, except the coral cast under
  `.btn-primary`, which is that button's signature.

### Surfaces

| Surface | Value |
|---|---|
| Page | `--bg` cream |
| Card on cream | `--bg-raised` white, 1px `--line` |
| Soft explainer panel | page tint at very low alpha, 1px `--line` |
| Seam band | `rgba(255,255,255,0.45)` — `.bridge` |
| Cream band | `--bg` with hairlines top and bottom — `.band-cream` |

---

## 7. Backgrounds and section rhythm

Four treatments, and when each earns its place.

**Branded gradient** — the aura. Heroes, major editorial moments,
selected transitions, some closing CTAs. It is site-wide and shared;
dimming it on one page changes every page.

**Warm cream** — the primary neutral. Standard content, long-form copy,
service explanations, **any section containing white cards**, quieter
sections. This is the default and needs no justification.

**Pure white** — sparingly and deliberately. A large stark white section
breaks the warmth of the site. A white section containing white cards is
always wrong: move the parent to cream or a faint tint so the cards have
something to sit on. The translucent `.bridge` seam is not this.

**Service tint** — subtle. `--svc-tint` over `--bg-raised`, never a
saturated block.

Watch for `gradient → white → gradient`, `white → white cards → white`,
and three identical neutral sections in a row. The goal is deliberate
rhythm, not mechanical alternation.

---

## 8. Cards and panels

Five containers. Each has a job.

| Container | Surface | Radius | Use |
|---|---|---|---|
| **White card** | `--bg-raised`, 1px `--line` | 24px | An offer, a case, a thing you can click. |
| **Warm card** | `rgba(255,255,255,0.52)`, 1px `--line` | 16px | Scope items in a 2×2 — `.aow-card`. |
| **Soft explainer panel** | page tint ≤6%, 1px `--line` | 24px | A contained comparison — see §11. |
| **Fit panel** | `--svc-tint` over white, 1px `--line` | 24px | The one "is this you" moment per page. |
| **Border-only container** | transparent, 1px `--line` | 24px | Grouping without weight. |

Prefer background contrast, fine borders and whitespace over shadow and
radius. If content does not need containing, do not contain it: a
hairline and a heading is usually enough.

**Not a card:** narrative copy, How it works stages, a list of four
short facts, a CTA.

---

## 9. Icons

- **Thin line, `stroke-width: 1.5`, `fill="none"`, `currentColor`.**
- **One stroke weight per icon.** A mark with a 2px body and a 1.4px
  detail reads as two icons stacked.
- **24×24 viewBox.** Render at 21–24px inline, 34px in a chapter mark,
  52px as an offer mark. Larger renders keep the 24 grid and scale.
- Round caps and joins.
- Colour: `--ink` for neutral marks, `--svc-accent` on a service page.
- **PRECISE GEOMETRIC ABSTRACTION, not doodles.** A mug, a vase, a
  puzzle piece are doodles.

Icons clarify meaning. No filled icons beside line icons, no mixed
families, no stock glyphs, no icon whose only job is to fill a corner.

**Render every new mark at 5× before shipping it.** Two icons on About
shipped as accidental duplicates of each other and a third read as a
settings slider — all three invisible at 21px.

---

## 10. Buttons and links

| | Treatment |
|---|---|
| **Primary** | Coral gradient, `--ink` text (dark on coral is 5.4:1; white fails), 24px radius, `15px 32px`, `--fs-body`, 600. |
| **Secondary** | 1.5px `--ink` border, transparent, inverts on hover. Same box as primary. |
| **Inline link** | `--coral-deep`, 600, underline gradient. |
| **Arrow link** | `--coral-deep`, 600, `--fs-small`, trailing `→`. |

One box for every button: same padding, radius, size and weight, so the
three sit on one line without adjustment. Hover lifts 2px; active
returns and scales to 0.98. Focus is always visible.

Keep the conversational CTA language. Match the label to the
destination — "See what we could work on", "See how I'd approach it" —
and use no CTA where none is needed.

---

## 11. Explainer graphics and conceptual visuals

The Workflow & AI "From this → To this" panel is the reference.

**Purpose: an explainer graphic is used when a visual makes a business
idea easier to understand than more copy would.**

Use for: transformation, before/after, current state → better state,
problem → solution, friction, simplification, relationship, process.

Characteristics: editorial, light, warm, simple, practical, restrained.
Thin line icons, pale tinted panels, fine rules, subtle arrows, limited
text inside the graphic, generous whitespace.

**Use one when**

- it can replace explanatory paragraphs
- the idea is a clear relationship or transformation
- it helps distinguish one service from another
- desktop whitespace can be used meaningfully
- the concept is easier to scan than to read

**Do not use one when**

- the copy is already clear
- it is only filling space
- a photograph would communicate trust better
- it duplicates the How it works content nearby
- it adds another card or grid pattern the page does not need
- it makes the page feel like SaaS product marketing

### The soft explainer panel — `.ex-*`

The reusable component, extracted from the Workflow & AI before/after.

    .ex-panel            one panel: 1px --line, 24px radius, no shadow
    .ex-plain            neutral tint,  rgba(46,42,39,0.035)
    .ex-accent           page tint,     --svc-wash / --svc-soft border
    .ex-h  .ex-sub       serif heading, sans subheading, both centred
    .ex-panel li         a compact row: 22px icon column, 14px radius
    .ex-ico              22px line icon; --muted, or the accent in .ex-accent
    .ex-arrow            26px, between panels, at 0.75 opacity
    .ex-note .ex-note-mark   the optional handwritten payoff line

Every accent reads `--svc-*` with a fallback, so it works on pages with
no service layer.

Use for a comparison, a transformation, a current-state/better-state
pair, grouped examples, or a small explainer module — **contained,
beside copy, at aside scale.** Adapt the tint and the icon accent to the
page; keep the structure identical.

Do NOT use it for narrative copy, How it works stages, testimonials,
CTA sections, About's personal storytelling, or as the default treatment
for content.

### The editorial comparison — `.svc-ba`

The SAME JOB at section scale, and deliberately not the same device: two
columns of hairline rows, no box, no fill. A dash marks each "before"
row and a ring in the page accent marks each "after".

Reach for it when the comparison IS the section — full width, its own
heading, four to five rows a side. Reach for the soft panel when the
comparison sits beside copy as an aside. Boxing a full-width comparison
turns two columns into two large cards and loses the page's air;
un-boxing an aside loses the containment that made it readable next to
prose.

They belong to one family — hairlines, accent markers, restrained
geometry, thin line marks — without being the same card twice. That is
the whole rule: **someone should recognise them as related without
meeting the identical component on every page.**

### Arrows

Only for real movement, flow, sequence or relationship. Thin, subtle,
secondary. Never decoration.

### Handwritten accents

Rare. **At most one small annotation per major page. Zero is fine.**
Only to land a takeaway or add a personal note. Never for headings, body
copy, instructions, navigation, or two adjacent components. It must
never become a scrapbook theme.

### Photos vs graphics vs whitespace

- **Photos** — trust, personality, lifestyle, human connection.
- **Graphics** — explanation, structure, transformation, systems.
- **Whitespace** — when neither adds value.

Do not fill whitespace automatically. A visual earns its place.

### Desktop copy + graphic split

Copy left, visual right, at roughly 1.7fr / 1fr. Use it when the copy
already tells a strong story, the layout has meaningful unused space,
and the visual explains something the copy would otherwise spend
paragraphs on. Do not force it where full-width copy is stronger.

On mobile: stack only if the graphic is still useful; otherwise hide it.
**Never shrink a detailed graphic until it is unreadable.**

---

## 12. Service page families

Every service page runs the same section families in the same order:

    hero → scope → fit → How it works → proof/example → CTA

They **share** typography, spacing, container logic, icon style, panel
treatment, interaction states and responsive behaviour.

They **vary** in accent colour, graphics, imagery, examples, and content
structure where the service genuinely differs.

- **How it works** — the heading is exactly "How it works" on all four.
  Serif heading, concise intro, 3–4 stages on fine rules, small line
  icons, serif stage headings, sans copy. No process circles, no chunky
  cards, no heavy arrows. Never rigid sequence language for an ongoing
  engagement.
- **Scope** — the unnumbered 2×2 warm-card grid. It says what the
  engagement can touch. **Not numbered**, because numbers mean sequence
  and sequence is How it works' job.
- **Fit** — one panel per page. Specific scenarios, neutral open states,
  contextual links. No yellow open-state fills, no generic "See how I
  help".
- **Philosophy** does not live here. It lives on My Approach.

---

## 13. About and My Approach

Shared: heading sizes, reading widths, section spacing, icon style,
graphic line weight, background system.

Different on purpose: **About is personal, visual and human. My Approach
is editorial, thought-led and principle-driven.**

---

## 14. Responsive

Six breakpoints. New rules pick from these.

| Width | Meaning |
|---|---|
| 1180px | Wide desktop — the copy/graphic split relaxes |
| 1020px | Desktop → tablet; 4-up becomes 2×2 |
| 900px | Tablet; splits stack |
| 760px | Tablet → mobile; the nav flips; 2×2 becomes 1 |
| 560px | Small mobile |
| 400px | Narrow mobile |

Do not simply shrink the desktop layout. Simplify. Hide decorative
graphics where they stop earning their place — a detailed explainer at
320px wide is not a smaller explainer, it is an unreadable one.

Touch targets are 44px minimum.

### Motion

All motion respects `prefers-reduced-motion`. The motion budget in
`MASTER.md` is closed: reuse `.reveal` and the `.glyph` draw-in rather
than adding a device.
