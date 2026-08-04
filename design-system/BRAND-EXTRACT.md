# Amber Fugedi — brand system extraction

Extracted 2026-08-04 from the deployed source of amberfugedi.com
(`styles.css`, `main.js`, and the eight HTML pages), plus rendered
computed styles measured in headless Chromium at 1440×900.

**Method note.** The sandbox that produced this document cannot reach
amberfugedi.com over the network, so values were read from the repo that
deploys to it and confirmed against live computed styles in a browser.
Every number below is either a literal declaration in the source or a
`getComputedStyle` reading. Where the system has no rule, this document
says **NO RULE** rather than inventing one. Where a value exists but I
could not confirm its intent, it is marked **UNVERIFIED**.

---

## 1. Color

### The tokens (`:root` in `styles.css`)

| Token | Value | Role | Reach |
|---|---|---|---|
| `--bg` | `#FDF9F5` | page background, warm cream | systemic (15 refs) |
| `--bg-raised` | `#FFFFFF` | cards, form fields, white bands | systemic (20) |
| `--ink` | `#2E2A27` | headings, the dark CTA band surface | systemic (43) |
| `--body` | `#3E3833` | body copy | systemic (18) |
| `--muted` | `#5C544B` | secondary text, small labels | systemic (60 — the most-used token) |
| `--coral` | `#FF6F61` | **fills only**, never text on cream | systemic (10) |
| `--coral-deep` | `#B8354A` | coral *as text* and as interaction color | systemic (51) |
| `--blush` | `#FBD5E4` | pastel fill, consulting | systemic (9) |
| `--peach` | `#FCE4C4` | pastel fill, courses | systemic (8) |
| `--lavender` | `#DAD4F5` | pastel fill, automations | systemic (6) |
| `--courses-deep` | `#8A5A14` | text/stroke on peach | systemic (10) |
| `--automations-deep` | `#574AA6` | text/stroke on lavender | systemic (10) |
| `--consulting-deep` | `#A63563` | text/stroke on blush | systemic (10) |
| `--line` | `rgba(46,42,39,0.12)` | every hairline rule and card border | systemic (35) |
| `--shadow-soft` | `0 14px 40px -18px rgba(46,42,39,0.18)` | the only lift shadow | systemic (8) |
| `--radius` | `24px` | the default corner | systemic (8) |
| `--menu-bg` | `#EDE9F7` | mobile menu panel only | local (2) |

### The contrast law

Written into the stylesheet as a comment and enforced everywhere:
**pastels are fill-only; every pastel has a paired `-deep` tone that is
≥4.5:1 on cream *and* on its own pastel.** There are no pale grays in the
system.

Every pair recomputed from the hex values (WCAG 2.1 relative luminance),
not taken from the stylesheet's own comments:

| Foreground | Background | Ratio | |
|---|---|---|---|
| `--ink` `#2E2A27` | cream | **13.57:1** | |
| `--body` `#3E3833` | cream | **11.02:1** | |
| `--muted` `#5C544B` | cream | **7.10:1** | |
| `--automations-deep` `#574AA6` | cream | **6.83:1** | |
| `--consulting-deep` `#A63563` | cream | **6.05:1** | |
| `--courses-deep` `#8A5A14` | cream | **5.64:1** | |
| `--coral-deep` `#B8354A` | cream | **5.50:1** | |
| `--coral` `#FF6F61` | cream | 2.60:1 | fill only, never text |
| `#E8846B` | cream | 2.52:1 | fill only, never text |
| `--automations-deep` | lavender | **5.01:1** | |
| `--courses-deep` | peach | **4.79:1** | |
| `--consulting-deep` | blush | **4.75:1** | tightest pass in the system |
| `#17140F` | coral | **6.73:1** | text on the coral button |
| `--ink` | coral | **5.21:1** | the primary button |
| cream | `--ink` | **13.57:1** | the dark band |
| `#D9D2C9` | `--ink` | **9.49:1** | body copy on the dark band |
| `#FFD9CC` | `--ink` | **10.87:1** | arrow links on the dark band |
| `--coral-deep` | `--ink` | 2.47:1 | **fails** — this is why `#FFD9CC` exists |

Two things a rebuild needs to know. First, the stylesheet comments
`ink on coral = 5.4:1`; **the true value is 5.21:1.** Still a comfortable
AA pass for normal text, but if you darken the coral fill at all you lose
the margin — recompute rather than trusting the comment. Second, the
three offer pairs sit at 4.75–5.01:1, so they pass AA for body text but
**not AAA, and not AA for anything you might want to render lighter.**
Do not tint them.

The reversal rule worth carrying: `--coral-deep` is the interaction color
on light ground and **fails on the dark band** at 2.47:1. The site solves
this with `#FFD9CC`, a pale coral tint used only there. Any dark surface
in a product build needs the same substitution.

### Colors that exist outside the token set

These are declared literally in `styles.css`. Anything at 1–2 uses is a
one-off, not part of the system:

| Hex | Uses | What it is |
|---|---|---|
| `#F85B55` | 2 | the second stop of the primary-button gradient, and its hover fill |
| `#FF8477` | 1 | button hover *inside the dark CTA band* only |
| `#E07359` | 1 | mobile nav-CTA hover only |
| `#96263C` | 2 | disclosure-toggle hover — a darker step past `--coral-deep` |
| `#17140F` | 1 | text on coral inside the dark band |
| `#D9D2C9` | 3 | body copy on the dark band |
| `#FFFDFA` | 3 | screenshot mat / paper backing, one step lighter than `--bg-raised` |
| `#FFD9CC` | 3 | arrow-link color on the dark footer band |
| `#FBEDBF` | 1 | butter tab front (the emphasis device) |
| `#FCF4F1` / `#F5F2FB` / `#FBF6EE` | 1 each | palest blush / lavender / cream — layered paper stack, one component |
| `#E4B569` | 1 | a single progress-stage fill |
| `#E8846B` | 2 | a lighter coral. **Fill-only per project rules; fails as text.** |
| `#8579C9`, `#D77FA5`, `#E0A33F` | SVG only | lighter mid-tones of lavender / blush / peach. **UNVERIFIED** whether these are a deliberate second tier or per-drawing improvisation — they are declared inline in the SVGs, never in CSS, and there is no comment explaining them. |
| `#3A3531`, `#8A827A` | SVG only | a warm near-black and a warm gray, between `--ink` and `--muted`. **UNVERIFIED** as system values for the same reason. |

**Takeaway for a product build:** carry the 17 tokens. Everything in the
second table is a local decision made in one place; recreate it only if
you recreate that component.

### NO RULE for

- Dark mode. Zero `prefers-color-scheme` queries in the stylesheet.
- Success / warning / info states. The only feedback color is
  `--coral-deep`, used for both errors and confirmations
  (`.field-error`, `.form-status`). A product with real state variety
  needs a green and probably an amber that this system does not have.
- Disabled states. No `:disabled` styling anywhere.

---

## 2. Typography

### Families and the weights actually loaded

One Google Fonts request, identical on all eight pages:

```
Newsreader: ital,wght@0,400;0,500;0,600;1,400;1,500;1,600
Manrope:    wght@400;500;600;700;800
&display=swap
```

```css
--font-display: "Newsreader", Georgia, "Times New Roman", serif;
--font-body: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Weights the CSS actually declares: `600` (47 rules), `500` (13), `400`
(4), `700` (2), `800` (1). **Manrope 700 and 800 are loaded for three
rules total** — one stat number and one inline `<strong>`. Newsreader
italic is used in 4 rules. A product build can drop Manrope 800 and
probably 700 without a visible change.

### The scale

Fluid via `clamp()`, one system from 390px to 1440px. There is no hero
exception — the homepage headline uses the same `--fs-h1` as every other
page's h1. What varies is *headline length*, handled by the step-down
slots below rather than by per-page sizes.

```css
--fs-h1:      clamp(2.5rem,    1.943rem + 2.2857vw, 4rem);      /* 40 → 64 */
--fs-h2:      clamp(1.875rem,  1.55rem  + 1.3333vw, 2.75rem);   /* 30 → 44 */
--fs-h3:      clamp(1.5rem,    1.361rem + 0.5714vw, 1.875rem);  /* 24 → 30 */
--fs-intro:   clamp(1.1875rem, 1.141rem + 0.1905vw, 1.3125rem); /* 19 → 21 */
--fs-body:    clamp(1rem,      0.977rem + 0.0952vw, 1.0625rem); /* 16 → 17 */
--fs-small:   clamp(0.875rem,  0.852rem + 0.0952vw, 0.9375rem); /* 14 → 15 */
--fs-eyebrow: clamp(0.75rem,   0.727rem + 0.0952vw, 0.8125rem); /* 12 → 13 */
```

### Measured roles at 1440px

Measured with `getComputedStyle` on every page, not on one. This matters:
the ladder has **step-down slots** that only appear on the pages with long
headlines, so measuring a single page gives the wrong answer.

| Role | Family | Size | Line height | Letter spacing | Weight | Case | Color |
|---|---|---|---|---|---|---|---|
| **Display / h1** | Newsreader | 64px | 65.92px (1.03) | −1.92px (−0.03em) | 500 | sentence | `--ink` |
| **h1-long** (step-down) | Newsreader | 50px | 56px (1.12) | −1px (−0.02em) | 500 | sentence | `--ink` |
| **h1-long, portrait hero** | Newsreader | 44px | 50.16px (1.14) | −0.88px | 500 | sentence | `--ink` |
| **h2 / section title** | Newsreader | 44px | 47.96px (1.09) | −0.88px (−0.02em) | 500 | sentence | `--ink` |
| **h2-long** (step-down) | Newsreader | 38px | 44.83px (1.18) | −0.76px | 500 | sentence | `--ink` |
| **`.ch-title`** | Newsreader | 34px | 39.1px (1.15) | −0.68px | 500 | sentence | `--ink` |
| **h3 / structural subhead** | Newsreader | 30px | 36px (1.2) | −0.45px (−0.015em) | **600** | sentence | `--ink` |
| **Card title** | Newsreader | 21px | 27.3px (1.3) | −0.315px | **600** | sentence | `--ink` |
| Body | Manrope | 17px | 26.35px (1.55) | normal | 400 | sentence | `--body` / `--muted` |
| Small | Manrope | 15px | 23.25px | normal | 400 | sentence | `--muted` |
| Uppercase label | Manrope | **13px** | 20.15px | **1.04px (0.08em)** | 600 | UPPERCASE | `--muted` |
| Nav link | Manrope | 16px | 24.8px | normal | 600 | sentence | `--ink` |
| Button | Manrope | 17px | 26.35px | normal | 600 | sentence | per variant |
| Arrow link | Manrope | 16px | 24.8px | normal | 600 | sentence | `--coral-deep` |
| Pull quote | Newsreader | 21px | 28.35px (1.35) | normal | 400 | sentence | `--ink` |

**The step-down principle** is the most transferable idea in this
typography. A long headline does not wrap at the display size — it drops
one grade so it reads as a sentence rather than a wall:

```css
.page-head h1.h1-long { font-size: clamp(2.25rem, 1.925rem + 1.3333vw, 3.125rem); /* 36 → 50 */
                        line-height: 1.12; letter-spacing: -0.02em; }
.h2-long              { font-size: clamp(1.625rem, 1.346rem + 1.1429vw, 2.375rem); /* 26 → 38 */
                        line-height: 1.18; }
/* and one more step for the longest headline on the site, About's,
   which only has 44% of the hero to hold it */
.hero-split-portrait .head-copy h1.h1-long {
  font-size: clamp(2rem, 1.72rem + 1.16vw, 2.75rem); line-height: 1.14; }
```

Which pages use which: full 64px h1 on Home, Services, My Approach, Work;
`h1-long` on Expertise and Courses; the portrait step-down on About only.

Note the **line-height compensation** — as the size steps down, leading
opens up: 1.03 → 1.12 → 1.14 for h1, and 1.09 → 1.18 for h2. Letter
spacing loosens in step too: −0.03em → −0.02em.

Global heading defaults: `text-wrap: balance`, `line-height: 1.14`,
`letter-spacing: -0.01em`, weight 500, with `h3` at 600. Every named slot
above overrides those defaults; the base values only show up on headings
with no class. Body `line-height: 1.65` from `body`, but the type layer
resets running text to **1.55** — that later value is what actually
renders.

**Card titles are not h3s.** `.card h3`, `.cap-card h3` and `.edu-card h3`
are pulled *down* to `--fs-intro` (21px) with the comment "the h3 display
slot was a heading trapped in a card." The `--fs-h3` token (30px) is
reserved for structural subheads like `.xp-company`. If you carry one
rule from this system into a product, carry that one: a card title is a
label for an object, not a section heading.

There is **no h4 anywhere on the site** — zero occurrences across all
eight pages. The heading ladder is three levels deep and then stops.

### The retired eyebrow

`--fs-eyebrow` and a `.eyebrow` class still exist, but **section eyebrows
were retired site-wide in July 2026** (stated in comments in
`courses.html` and `my-approach.html`; only two files still reference the
class). What survived is a *label* role, measured at **13px / 600 /
0.08em / uppercase / `--muted`**, used as `.card-tag`, `.case-tag`,
`.capture-label`, `.tier`, `.pr-label`.

Watch the tracking: several components *declare* `letter-spacing: 0.1em`
early in the file, but a consolidation block near the end resets all of
them to `0.08em` — *"one uppercase-label tracking."* **0.08em is the real
value.** Reading the component's own rule gives you the wrong number.

If you rebuild this system, treat the small uppercase label as a
component annotation, not a section opener — page heads are text-led with
no kicker above the h1.

### NO RULE for

- Anything above `--fs-h1`. There is no display-XL. A sales page hero
  that wants to be bigger than an h1 has no token.
- Lists inside body copy get no distinct type treatment — only the
  custom bullet in §5.
- Code, tables, captions, footnotes. None exist on the site.

---

## 3. Spacing and structure

```css
.wrap    { max-width: 1120px; margin: 0 auto; padding: 0 24px; }
section  { padding: 104px 0; }             /* → 48px 0 below 760px */
.cta-band-wrap { padding: 104px 0; }
--nav-h  : 62px;
--radius : 24px;
```

**Measured rhythm** (this is the part that is easy to get wrong). Every
seam was measured live on the homepage; sections carry no margins at all,
so the gap is exactly the sum of the two paddings and adjacent margins
never collapse into it:

| Seam | Desktop | Mobile (390) |
|---|---|---|
| section ↔ section | **208px** (104 + 104) | **96px** (48 + 48) |
| section ↔ `.band-white` | **208px** | **96px** |
| section ↔ `.cta-band-wrap` | **208px** | **96px** |
| section ↔ `.bridge` | **156px** (104 + 52) | **88px** (48 + 40) |

So there is really **one rhythm** — 208/96 — with a single narrower
variant for the `.bridge` band, which is a one-line statement strip and
gets 52/40 instead of 104/48. A white band does *not* change the seam;
it changes the ground color only.

Page head: `padding: calc(var(--nav-h) + 76px) 0 80px` — 138px top,
80px bottom at desktop.

Grids:

```css
.card-grid { grid-template-columns: repeat(3, minmax(0,1fr)); gap: 20px; }
             /* → 1fr below 860px */
.cap-grid  { grid-template-columns: repeat(3, minmax(0,1fr)); gap: 18px; }
             /* → 2 cols below 960px, 1 below 640px */
.contact-grid { grid-template-columns: 1fr 1.1fr;
                gap: clamp(36px, 6vw, 80px); align-items: start; }
             /* → 1fr below 800px */
.hero-split { grid-template-columns: minmax(0,48fr) minmax(0,52fr);
              gap: clamp(32px, 4vw, 72px); align-items: center; }
.hero-split-portrait { grid-template-columns: minmax(0,44fr) minmax(0,56fr); }
.hero-visual { max-width: 560px; margin-left: auto; }
.hero-visual > * { max-height: 336px; }
```

The interior-hero framework (standardized August 2026) has exactly two
variants: **Editorial 48/52** (Expertise, Work, Services, Courses) and
**Portrait 44/56** (My Approach, About).

**The radius scale**, consolidated in July 2026 and stated as a comment in
the stylesheet: *"one radius scale — 24px cards/pills/bands, 14px compact
elements and inputs, 8px phone strip rows, 50% circles, organic blobs."*

By declaration count: `50%` (9), `var(--radius)` = 24px (8), literal 24px
(8), `14px` (5), `6px` (3), `3px` (3), `28px` (2), `10px` (2), `2px` (2),
then singles at 26, 20, 9, 5, 4. The 28px on `.cta-band` is **overridden
back to 24px** by the consolidation block near the end of the file — the
band is not actually a larger radius, despite the earlier declaration.
The values below 10px are illustration details and screenshot mats, not
system tokens.

**Organic blob radii** — a small set of eight-value asymmetric radii used
for the photo crops and outlines, e.g.
`58% 42% 46% 54% / 45% 52% 48% 55%`. These are the same instinct as the
paper tab (§4.1): a shape that is deliberately not symmetrical.

Shadows — there are only **two** distinct values on the entire site:

```css
--shadow-soft: 0 14px 40px -18px rgba(46,42,39,0.18);  /* card lift */
box-shadow:    0 12px 30px -12px rgba(255,111,97,0.65); /* coral glow, primary button */
```

Both are large-blur, heavily negative-spread, low-opacity. Nothing on
this site casts a hard shadow. There is no elevation *scale* — one lift,
one glow.

Breakpoints, by weight of use: **760px** (25 queries — the real
breakpoint), then 1020, 900, 860, 800, 640, 560, 480, 430, 380, 350.

Divider convention: `1px solid var(--line)`, applied as
`border-top`/`border-bottom` on the element. There is no `<hr>` and no
`.divider` class. A white band is
`background: var(--bg-raised)` + hairline top and bottom.

### Reading measure — the system's most transferable structural rule

The container is 1120px, but **no paragraph ever runs that wide.** Around
twenty rules cap running text, and they do it in **`ch`**, not pixels:

| Range | Count | What it holds |
|---|---|---|
| 56–66ch | 11 | body copy, descriptions, principle text — the main measure |
| 46–50ch | 5 | ledes beside a visual, footer copy, narrow columns |
| 24–40ch | 5 | display lines, notes, labels — deliberately short |

The cluster to carry is **56–62ch**. Because the cap is in character
units it survives a type-size change, which px caps do not — this is the
single structural rule most worth porting verbatim into a product build.

### Focus

One global ring, declared near the top of the stylesheet and inherited
everywhere:

```css
:focus-visible {
  outline: 2px solid var(--coral-deep);
  outline-offset: 3px;
  border-radius: 6px;
}
```

Form fields opt out of it (`outline: none`) and substitute a 3px coral
glow plus a border-color change instead — see the field styles above.
There is one component that overrides the ring to `var(--coral)` rather
than `--coral-deep`; at 2px on a light ground that is a **2.60:1**
outline where the global rule gives 5.50:1. Use `--coral-deep` for focus
rings in anything you build.

---

## 4. Signature devices

These four are the brand. Rebuild these and it reads as Amber's; skip
them and it reads as generic warm-serif.

### 4.1 The paper tab (`.tab-em`) — the emphasis mark

A hand-torn highlighter tab behind a word. Two rotated pseudo-elements
with deliberately irregular, asymmetric border-radii so no two corners
match.

```css
.tab-em {
  --trb: 0.9deg;    /* back layer rotation */
  --trf: -0.45deg;  /* front layer, counter-rotated */
  position: relative;
  display: inline-block;
  padding: 0 0.14em 0.02em;
  margin: 0 -0.02em;
  z-index: 0;
}
.tab-em::before {           /* back — offset down and right */
  content: ""; position: absolute; z-index: -1;
  inset: 0.18em -0.08em -0.06em 0.12em;
  background: var(--tab-back);
  border-radius: 0.08em 0.13em 0.07em 0.11em / 0.1em 0.15em 0.09em 0.13em;
  transform: rotate(var(--trb));
}
.tab-em::after {            /* front — sits over the back */
  content: ""; position: absolute; z-index: -1;
  inset: 0.1em 0 0.04em 0;
  background: var(--tab-front);
  border-radius: 0.11em 0.08em 0.13em 0.09em / 0.14em 0.1em 0.13em 0.11em;
  transform: rotate(var(--trf));
}
.tab-blush  { --tab-front: var(--blush);  --tab-back: rgba(246,187,211,0.68); }
.tab-butter { --tab-front: #FBEDBF;       --tab-back: rgba(242,220,156,0.68); }
```

All geometry is in `em`, so it scales with the type it marks. Two
variants only. Usage rule from the design system: **two tabs per page**,
no more.

### 4.2 The arrow link (`.arrow-link`) — the tertiary action

An underline that grows from the left on hover, drawn with
`background-size` (not `border-bottom`, so it can animate without
reflow).

```css
.arrow-link {
  font-size: 0.95rem; font-weight: 600;
  color: var(--coral-deep); text-decoration: none;
  padding-bottom: 3px;
  background-image: linear-gradient(var(--coral-deep), var(--coral-deep));
  background-repeat: no-repeat;
  background-size: 0% 2px;
  background-position: left bottom;
  transition: background-size 0.2s var(--ease);
}
.arrow-link:hover { background-size: 100% 2px; }
```

Recolored per offer: courses `#8A5A14`, automations `#574AA6`,
consulting `#A63563` — **both the `color` and the `background-image`
stops must be changed together**, or the underline stays coral.

### 4.3 The open ring bullet (`.offer-points li::before`)

Not a disc, not a checkmark — a hollow ring with a peach center.

```css
.offer-points li::before {
  content: ""; position: absolute; left: 0; top: 0.34em;
  width: 15px; height: 15px; border-radius: 50%;
  background: var(--peach);
  border: 2px solid var(--coral-deep);
  box-sizing: border-box;
}
```

### 4.4 The aura — the fixed pastel atmosphere

Three radial-gradient blobs on a `position: fixed` layer behind
everything, each on its own very slow linear loop. JS adds a gentle
cursor-following ease to the whole layer.

```css
.aura { position: fixed; inset: 0; z-index: 0;
        pointer-events: none; overflow: hidden; will-change: transform; }

.aura-blob-1 {                                    /* pink, top-left */
  width: 50vw; height: 50vw; min-width: 460px; min-height: 460px;
  top: -18%; left: -8%;
  background: radial-gradient(circle at 40% 40%,
              rgba(246,158,199,0.95), rgba(251,213,228,0) 60%);
  animation: aura-drift-l 21s linear infinite;
}
.aura-blob-2 {                                    /* amber, top-right */
  width: 44vw; height: 44vw; min-width: 420px; min-height: 420px;
  top: -12%; right: -10%;
  background: radial-gradient(circle at 55% 45%,
              rgba(248,190,116,0.95), rgba(252,228,196,0) 60%);
  animation: aura-drift-r 21s linear infinite;
}
.aura-blob-3 {                                    /* violet, center */
  width: 40vw; height: 40vw; min-width: 380px; min-height: 380px;
  top: 26%; left: 28%;
  background: radial-gradient(circle at 50% 50%,
              rgba(172,158,232,0.92), rgba(218,212,245,0) 60%);
  animation: aura-orbit-c 14s linear infinite;
}
```

The construction rule: each blob is a `radial-gradient` from a **saturated
core at 0.92–0.95 alpha** fading to the **matching pastel token at alpha 0
by 60%**. So the visible cloud is far more saturated than the pastel
tokens suggest — `rgba(246,158,199)` is a real pink, not `--blush`. The
pastel is only the fade target.

Sizes step down 50vw / 44vw / 40vw with matching `min-width` floors
(460 / 420 / 380) so the composition survives on a phone. Two blobs drift
on 21s, the center one orbits on 14s — the periods are deliberately not
common multiples, so the arrangement never visibly repeats.

Keyframes translate in `vw`/`vh` and scale between roughly 0.84 and
1.26. Static under `prefers-reduced-motion`.

### 4.5 Motion primitives

```css
--ease: cubic-bezier(0.22, 1, 0.36, 1);   /* the only easing curve on the site */

.reveal { opacity: 0; transform: translateY(28px);
          transition: opacity 0.7s var(--ease), transform 0.7s var(--ease); }
.reveal.in-view { opacity: 1; transform: none; }
```

Durations in use, by count of `transition` declarations: **`0.2s`** (41 —
the default, hover color and underline), `0.3s` (8), `0.22s` (6), `0.25s`
(5), `0.18s` (5, form feedback), `0.26s` (2), `0.7s` (2, reveal), `1.4s`
(2), `1.2s` (SVG stroke draw), `0.16s` (button press), plus `0.9s` for
the SVG fill fade and `14–21s` for the aura. Hover lift is
`translateY(-2px)` on buttons, `-4px` / `-5px` on cards. Active state is
`translateY(0) scale(0.98)`.

The motion budget is described in the design system as **closed** — the
list above is the whole vocabulary. One `prefers-reduced-motion` block
disables the aura, all transforms on hover, and the feedback animations.

Two honest caveats. The **easing curve is genuinely singular** —
`cubic-bezier(0.22, 1, 0.36, 1)` is the only one in the file, and that
consistency is doing more work than any individual duration. The
**durations are not**: `0.2s` covers 41 of the declarations, but there is
a long tail of near-neighbours (0.22, 0.25, 0.26, 0.3) that no rule
distinguishes. If you are rebuilding, collapse that tail to a three-step
scale — 0.16 press, 0.2 hover, 0.3 surface — rather than porting the
drift.

---

## 5. Component patterns

### Buttons

```css
.btn {
  display: inline-block;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1rem;              /* overridden to 1.0625rem later in the file */
  padding: 15px 32px;
  border-radius: 24px;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.16s var(--ease), box-shadow 0.25s var(--ease),
              background 0.2s, color 0.2s, border-color 0.2s;
}
.btn-arrow::after { content: " →"; }
.btn:active { transform: translateY(0) scale(0.98); }
```

| Variant | Rest | Hover |
|---|---|---|
| `.btn-primary` | `linear-gradient(135deg, #FF6F61, #F85B55)`, text `--ink`, shadow `0 12px 30px -12px rgba(255,111,97,.65)` | bg `#F85B55`, `translateY(-2px)`, shadow `0 18px 36px -12px rgba(255,111,97,.7)` |
| `.btn-outline` | transparent, `1.5px solid var(--ink)`, text `--ink` | bg `--ink`, text `--bg`, `translateY(-2px)` |
| `.cta-band .btn` (on dark) | flat `--coral`, text `#17140F`, **no shadow** | bg `#FF8477`, `translateY(-2px)` |
| `.cta-band .btn-ghost` (on dark) | transparent, `1px solid rgba(253,249,245,.42)`, text `--bg` | bg `rgba(253,249,245,.1)`, border `rgba(253,249,245,.72)`, `translateY(-2px)` |
| `.nav-cta` | transparent, `1px solid --coral`, text `--coral-deep`, radius 24px, pad `6px 16px`, 16px/500 | (mobile) bg `#E07359` |

Mobile: `.btn { font-size: 1rem; padding: 12px 22px; }` below 760px.
Under reduced motion, every hover transform is set to `none` and only the
color change remains.

Note: text on the primary button is **dark ink on coral**, measured at
**5.21:1** (the stylesheet's comment says 5.4:1; see §1). White on this
coral is 2.7:1 and fails. Keep the dark-on-coral inversion if you keep
coral at all.

### Cards

```css
.card {
  background: var(--bg-raised);
  border: 1px solid var(--line);
  border-radius: var(--radius);      /* 24px */
  padding: 34px 30px;
  display: flex; flex-direction: column;
  transform-style: preserve-3d;
  transition: transform 0.2s var(--ease), border-color 0.2s,
              box-shadow 0.3s var(--ease);
}
.card:hover { transform: translateY(-5px); box-shadow: var(--shadow-soft); }
.card h3 { font-size: 1.45rem; margin-bottom: 12px; }
.card p  { font-size: 0.97rem; color: var(--body); margin-bottom: 24px; }
```

Compact variant `.cap-card`: padding `26px 24px`, hover `-4px`, h3
`1.05rem`, p `0.9rem` in `--muted`.

The offer wash — a corner tint that identifies which of the three offers
a card belongs to:

```css
.card.offer-courses {
  background: radial-gradient(circle at top right,
              rgba(252,228,196,0.55), transparent 55%), var(--bg-raised);
}
/* automations → rgba(218,212,245,0.55); consulting → rgba(251,213,228,0.55) */
.card.offer-courses:hover { border-color: var(--peach); }
```

So each offer carries **four** coordinated signals: corner wash, hover
border, glyph stroke color, and arrow-link color.

### Links

Two kinds, and they are not interchangeable:

```css
/* body link — color plus a real underline, never color alone */
main p a, .form-note a {
  color: var(--coral-deep);
  font-weight: 500;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;
  text-decoration-color: rgba(184,53,74,0.4);
  transition: text-decoration-color 0.2s;
}
main p a:hover { text-decoration-color: var(--coral-deep); }
```

The underline is present at rest at 40% opacity and goes solid on hover —
so the affordance never depends on color alone. The `.arrow-link` (§4.2)
is the standalone tertiary action and does the opposite: no underline at
rest, full underline on hover.

### Form fields

```css
input, textarea, select {
  font-family: var(--font-body);
  font-size: var(--fs-body);
  color: var(--ink);
  background: var(--bg-raised);
  border: 1.5px solid rgba(46,42,39,0.2);
  border-radius: 14px;              /* NOT the 24px default */
  padding: 14px 18px;
  width: 100%;
  transition: border-color 0.2s, box-shadow 0.2s;
}
input::placeholder, textarea::placeholder { color: var(--muted); }
input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--coral-deep);
  box-shadow: 0 0 0 3px rgba(255,111,97,0.3);   /* 3px coral focus ring */
}
textarea { resize: vertical; min-height: 140px; }
```

Label: `0.85rem / 600 / --ink`, `display: block`, `margin-bottom: 6px`.
Required marker `.req` is `--coral-deep`.
Field gap: `.contact-form { display: grid; gap: 16px; }`.
Error: `input[aria-invalid="true"] { border-color: var(--coral-deep); }`
plus `.field-error` at `0.85rem / 500 / --coral-deep`, hidden until
`.show`, animating in over `0.18s` from `opacity 0 / translateY(-2px)`.
Select uses two 6px `linear-gradient` triangles as a custom caret rather
than a background image.

Focus visibility is the only place the site uses a ring; everything else
relies on the browser default. Keep the 3px coral ring.

### Dividers and bands

- Hairline: `1px solid var(--line)` as a border on the element.
- White band: `.band-white { background: var(--bg-raised);
  border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }`
- Dark closing band: `--ink` base with three faint radial gradients
  (blush 0.16, lavender 0.15, peach 0.10) bled into the corners, radius
  **24px** (an earlier `28px` declaration is reset by the consolidation
  block), `padding: clamp(40px, 6vw, 72px)`, centered.

---

## 6. Imagery and illustration

Every graphic on the site is a **hand-authored inline SVG**. There is no
icon library, no stock illustration, and no raster art except real
screenshots and Amber's photo.

### Stroke

Measured across all pages, by frequency:

| Width | Count | Where |
|---|---|---|
| 2 | 30 | the default figure stroke |
| 1.8 | 16 | secondary figures |
| 1.5 / 1.6 | 26 | detail lines |
| 1.2 / 1.3 / 1.4 | 21 | fine internal detail |
| 0.9 | 12 | the lightest hairline |
| 1.0 / 1.1 | 8 | hairline |
| 2.2 / 2.4 | 6 | emphasis |
| 3.2 / 3.6 / 7 | 4 | one-off heavy accents |

`stroke-linecap="round"` appears 33 times, `stroke-linejoin="round"` 11.
**Every terminal is round.** There are no square caps anywhere.

The working range is **0.9 to 2.0**. Treat 2.0 as the figure outline and
0.9–1.3 as internal detail; anything above 2.4 is a deliberate one-off.

### Palette inside illustrations

Strokes: `#8A5A14` (36), `#B8354A` (16), `#2E2A27` (16), `#A63563` (13),
`#574AA6` (13), `#3A3531` (6), `#8579C9` (5). Illustrations are drawn in
the **offer-deep tones**, not in coral — a graphic belongs to a section
by taking that section's deep color.

Fills: `fill="none"` is the single most common value (34) — these are
line drawings first. Where fill appears it is a pastel (`#FCE4C4`,
`#FBD5E4`, `#DAD4F5`) or a deep tone for a solid mark, plus a handful of
`url(#…)` linear gradients for soft washes.

**The graphic language is: soft gradient fill + hairline stroke.** Not
flat vector, not fully outlined.

### Opacity

The most common values are `0.45` (19), `0.5` (14), `0.7` (12), `0.6`
(12), `0.55` (11), `0.4` (6). Background and secondary elements sit in
the **0.4–0.6** band; foreground detail runs 0.7–1.0. `opacity="0"` (6)
is the pre-animation state for stroke-draw elements.

### Type inside illustrations

Two distinct conventions, and they carry meaning:

- **`font-family="Newsreader, Georgia, serif"`** (13 uses, `font-size`
  13.5 or 15) — handwriting. Anything that reads as a human annotation.
- **`font-family="Manrope, system-ui, sans-serif"`** (8 uses,
  `font-size="9.5"`, uppercase) — printed labels on a document or UI
  inside the drawing.

### The draw-on

```css
.glyph .stroke { stroke-dasharray: 100; stroke-dashoffset: 100; }
.reveal.in-view .glyph .stroke { animation: draw-stroke 1.2s var(--ease) forwards; }
.reveal.in-view .glyph .stroke:nth-of-type(2) { animation-delay: 0.3s; }
.glyph .fill { opacity: 0; }
.reveal.in-view .glyph .fill { animation: fill-fade 0.9s var(--ease) 0.55s forwards; }
```

Every path carries `pathLength="100"` so a single dasharray rule drives
every draw-in regardless of real path length. Strokes draw, then fills
fade in behind them at 0.55s.

### Composition rules observed in the source

- Keep every point inside the `viewBox`. `overflow: visible` does not
  survive the SVG viewport — a tail placed at negative x silently
  disappears.
- Curves are gently bowed quadratics, not straight rules.
- Corners are frequently left unclosed, which is what makes the drawings
  read as sketched rather than diagrammed.

---

## 7. Voice

Measured across the six content pages (Home, Expertise, Work, My
Approach, Services, Courses), counting `<p>` elements only, with
comments, `<script>`, `<style>` and `<svg>` stripped: **159 paragraphs,
210 sentences.**

| Metric | Value |
|---|---|
| Mean sentence length | 12.0 words |
| Median | 11 words |
| Longest | 38 words |
| Em dashes | **0** |
| Semicolons | 8 (about 1 per 26 sentences) |
| Sentences opening with "I" | 13 |
| Questions | 4 |
| Exclamation marks | **0** |

The median is *11 words* and the mean 12.0 — the distribution is
right-skewed by a handful of long sentences, so half of everything on
this site is 11 words or shorter. That is the number to write against.

### Punctuation

**No em dashes in any on-page prose.** This is deliberate and enforced by
a pre-ship detector. Where a writer would reach for an em dash, this
voice uses a period and starts a new sentence. Year ranges take en
dashes. Semicolons appear about once every 26 sentences.

One precise exception, worth knowing before you assume the rule is
absolute: em dashes **do** appear in `<title>` and `<meta description>`
tags, as the separator in the SEO title pattern
`Expertise — What I Help With and How I Think | Amber Fugedi` and inside
a handful of meta descriptions. Four pages carry one each. So the real
rule is: **no em dashes in body copy; the em dash survives as a
metadata separator.**

### Sentence pattern

Short declaratives, typically 11 to 12 words, with occasional longer sentences
for rhythm. The characteristic move is a **paired sentence**: a claim
followed by its qualification, as two sentences rather than one clause.

> "Sometimes the answer is marketing. Sometimes it isn't."
>
> "The hardest part is not always doing the marketing. It is knowing what to build."
>
> "Different businesses. Different needs. Work built around both."

Note the third: fragments are allowed, in sequences of three.

### Headings

Sentence case, never Title Case. Many end in a period, which is unusual
and is part of the voice ("What I bring to the work." / "Ways we can work
together." / "See the expertise in action."). Some are complete sentences
in the first person ("I ask a lot of questions." / "I solve business
problems, not just marketing problems."). Some are noun phrases with no
period ("Where I help" / "Available courses"). The rule appears to be:
**a heading that is a sentence gets a period; a heading that is a label
does not.**

### Tone

First person, present tense, direct address to a business reader.
Concrete nouns over abstractions. No exclamation marks. No superlatives.
No "not just X, but Y" construction. The stated editorial test is *"Could
another consultant have written this? If yes, rewrite it."*

### NO RULE for

- Long-form instructional prose. Every sentence measured here is
  marketing copy. A lesson body, a step-by-step, or a worksheet
  instruction is a register this site has never written in, and 11-word
  declaratives will feel clipped across 800 words of teaching.

---

# Part II — Translating the system to course surfaces

**None of these six surfaces exist today.** Everything below is derived
from the site's own rules; each section ends with what the system does
not yet decide.

## Sales page

Closest to solved. Reuse directly:

- Page head: `padding: calc(62px + 76px) 0 80px`, text-led, no eyebrow,
  h1 at `--fs-h1`, deck at `--fs-intro` in `--body`.
- Hero split `48fr / 52fr`, gap `clamp(32px,4vw,72px)`, visual capped at
  560px wide and 336px tall.
- Sections at `104px 0`, alternating cream and `.band-white`.
- Curriculum as `.card-grid` (3-up, gap 20) or `.cap-grid` (3-up, gap 18).
- Close with the dark CTA band: `--ink` + three corner gradients, radius
  24, coral `.btn` and `.btn-ghost` side by side.
- Exactly **two** `.tab-em` marks on the page, both the same variant
  family (courses → butter).
- Course-owned color is **peach `#FCE4C4` fill / `#8A5A14` text**, since
  courses already own that pair.

**System has no rule for:** price display, a comparison or tier table, a
countdown or scarcity element, testimonials at volume (the site has a
quote pattern but not a wall), FAQ accordions on a conversion page (the
site uses `<details>` for secondary content only), or a sticky buy bar.

## Module header

**Nothing in the system covers this.** Derived proposal:

- Full-width `.band-white` strip, hairline top and bottom.
- `MODULE 03` as the uppercase label role: Manrope 13px / 600 / 0.08em /
  `--muted`.
- Module title as h2 (Newsreader 500, 34px, −0.68px).
- One-line description at `--fs-body` in `--body`.
- A single `.glyph` at the right: 2.0 stroke figure, 0.9–1.3 detail,
  drawn in `#8A5A14`, one pastel gradient fill.

**System has no rule for:** progress ("3 of 8"), completion state, or
duration. There is exactly one progress-ish element on the site
(`.ct-remembered`, a lone `#E4B569` stage fill) and it is not a system.
A course needs a real progress token set — a track color, a fill color,
and a complete state — and **none of the three exist.**

## Lesson page

- Measure: reuse the site's own, which is stated in `ch` (see §3) —
  **56–62ch** for a lesson body. This is the one structural question the
  system already answers well, and it answers it in character units, so
  it holds if you change the type size.
- Body: Manrope 400 / 17px / **1.55** in `--body` (the type layer's reset,
  not the `body` element's 1.65). Headings inside a lesson:
  h3 (Newsreader 600, 30px) for major turns, and there is **no h4** in
  this system.
- Links in body copy take the underlined `--coral-deep` treatment, never
  the arrow link.
- Lists take the open ring bullet (§4.3).
- "Next lesson" is an `.arrow-link`.

**System has no rule for:** a callout or note box, a warning, a "try
this" block, blockquote inside instructional text, code or command
samples, tables, image captions, or a video player frame. That is eight
missing components — this is the largest gap in the whole translation.

Minimum viable additions: one callout (`--bg-raised`, `1px solid
var(--line)`, radius 14, `padding: 20px 24px`, 3px `--lavender` left
edge), one caption role (`--fs-small` / `--muted`), and a video frame
(radius 14, `1px solid var(--line)`, `#FFFDFA` mat).

## Worksheet / PDF template

Print is where this system breaks hardest.

- **There are zero `@media print` rules in `styles.css`.** Every value
  below is an extension, not an extraction.
- The aura is `position: fixed` and will either print on every page or
  vanish entirely, depending on the renderer. Suppress it.
- `--bg` `#FDF9F5` on paper: printing a full-bleed cream background
  wastes ink and most browser print dialogs strip it by default. Print on
  white; carry the warmth in a single peach header band instead.
- Type: Newsreader for the title, Manrope 11–12pt for body, Manrope 9pt
  uppercase 0.08em for field labels. These are print sizes, not the
  screen scale.
- Fill-in fields: this is the one place the system genuinely helps — the
  14px-radius, 1.5px `rgba(46,42,39,0.2)` bordered box is already the
  right object for a printed answer box.
- Rules between prompts: `1px solid var(--line)` reads as roughly 12%
  black, which is close to invisible at 300dpi on a home printer. Use a
  solid light gray at ~20% for print.

**System has no rule for:** page margins, header/footer running elements,
page numbers, a cover page, or a logo lockup at print scale.

## Slide template

- 16:9, `--bg` `#FDF9F5` ground, one aura blob rendered **static** (no
  animation) at low opacity in a corner.
- Title slide: Newsreader 500 at roughly 64–72px, −0.03em tracking and
  1.03 leading (the display h1's own values, not the heading defaults),
  with one `.tab-em` mark.
- Section slide: the uppercase label above a Newsreader 500 h2.
- Content slide: Manrope 400 at ~24px, open ring bullets, four lines
  maximum.
- Illustration slide: one `.glyph` at large scale, 2.0 stroke, offer-deep
  color.
- Contrast holds at projector scale because the deep tones are all ≥4.5:1
  on cream; **do not** put coral `#FF6F61` text on a slide.

**System has no rule for:** slide-level scale (the type scale tops out at
64px and a title slide wants more), a footer/logo bar, speaker-note
styling, or how the aura behaves when it cannot animate. Slides need a
display-XL token the site does not have.

## Email

Email is the second-hardest surface after print.

- Container: 600px, centered, `#FDF9F5` background, `#FFFFFF` content
  card.
- The primary button must be rebuilt as a **bulletproof table button** —
  `background: #F85B55` flat, `#2E2A27` text, `border-radius: 24px`,
  `padding: 15px 32px`, Manrope 600 with a full fallback stack. The
  gradient will not render in Outlook; **use the flat `#F85B55` hover
  color as the rest state** so it degrades to a solid fill everywhere.
- Web fonts are unreliable in email. Newsreader falls back to Georgia
  (already the declared fallback, and a genuinely close match). Manrope
  falls back to a system sans, which is a visible downgrade — accept it.
- Body: 16px / 1.65 / `#3E3833`.
- Dividers: a 1px `#E5E0DA` table row (`--line` as an rgba value will not
  composite reliably; convert it to an opaque hex).
- Links: `#B8354A` with a real underline.

**System has no rule for:** email header/footer lockups, preheader text,
unsubscribe styling, or a dark-mode email variant — and since the site
has no dark mode at all, Apple Mail's auto-inversion will do something
unplanned to the cream ground. Test it before sending.

---

# Part III — FLAG: what will not survive a hosted course platform

Ranked by how likely it is to break.

| # | Element | Depends on | What happens on a hosted platform |
|---|---|---|---|
| 1 | **The aura** | `position: fixed` + JS cursor parallax + three `@keyframes` | Hosted lesson bodies render inside a scoped content area. A `position: fixed` layer will either escape the container and cover the platform's own chrome, or be clipped to nothing. The JS almost certainly will not run — most platforms strip `<script>` from lesson HTML. **Assume this is gone.** Replace with a static CSS radial-gradient background on a contained element. |
| 2 | **`.reveal`** | `IntersectionObserver` in `main.js` | If the script is stripped, elements stay at `opacity: 0` and **the content is invisible**. This is the single most dangerous dependency in the system. If you port `.reveal`, either ship the JS or invert the default so content is visible and the animation is the enhancement. |
| 3 | **SVG stroke draw-on** | `.reveal.in-view` + `pathLength="100"` + `stroke-dashoffset` | Same failure: without the class toggle, `stroke-dashoffset: 100` leaves paths undrawn and `.glyph .fill` at `opacity: 0`. **The illustration renders as blank space.** For any platform, ship the SVGs in their finished state and treat the draw-on as optional. |
| 4 | **`.tab-em`** | Two `::before`/`::after` with `z-index: -1` | The negative z-index needs the parent to *not* create a stacking context. Platform wrappers routinely set `transform`, `opacity`, `filter`, or `isolation` on content containers, any of which traps the tabs behind their own parent and makes the word vanish under the color. Also: many rich-text editors strip class attributes on `<span>`. **Test early; have a fallback** (a flat `background: linear-gradient(transparent 60%, #FBEDBF 60%)` on the span). |
| 5 | **Mobile menu** | `:has()` selector + JS scroll lock | Irrelevant inside a course platform (it supplies its own nav), but it is why the site's nav cannot be lifted wholesale. |
| 6 | **`.arrow-link`** | `background-size` transition | Low risk — pure CSS, widely supported. Breaks only if the platform overrides `background` on links, which some themes do. |
| 7 | **`mask-image` fades** | `mask-image` / `-webkit-mask-image` | Well supported now, but a platform's own `overflow` or `background` on the wrapper can defeat the effect. Cosmetic if lost. |
| 8 | **CSS custom properties** | `:root` variables | If you cannot inject a global stylesheet and can only paste inline styles per lesson, **every `var(--x)` resolves to nothing** and elements fall back to browser defaults. Keep a compiled, literal-hex copy of the stylesheet for that case. |
| 9 | **`clamp()` type scale** | Viewport-relative sizing | Inside a fixed-width content column, `vw`-based clamps size against the *browser* viewport, not the column — so type can be too large in a narrow lesson pane. Consider fixed sizes for platform-hosted content. |
| 10 | **Google Fonts** | External `<link>` | Some platforms block third-party requests or serve lesson content in a sandboxed iframe with a restrictive CSP. Newsreader → Georgia is a graceful fallback; Manrope → system sans is not. Self-host or accept it. |

### The safe subset

If you can only rely on inline styles and no JS, this much of the brand
survives intact and is enough to be recognizable:

- The color tokens as literal hex
- Newsreader 500 headings, sentence case, with periods where the heading
  is a sentence — display at 64px / 1.03 / −0.03em, section titles at
  44px / 1.09 / −0.02em, card titles at 21px / 1.3 / weight 600
- Manrope 400 body at 17px / 1.55
- The uppercase label at 13px / 600 / 0.08em / `#5C544B`
- 24px radii, `1px solid rgba(46,42,39,0.12)` hairlines
- The single soft shadow `0 14px 40px -18px rgba(46,42,39,0.18)`
- Finished-state SVG illustrations: 2.0 outline stroke, 0.9–1.3 detail,
  round caps, offer-deep colors, 0.4–0.6 opacity on background elements
- The voice: 11-to-12-word declaratives, no em dashes, paired sentences

Everything else is enhancement.
