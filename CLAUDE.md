# AF-Website — amberfugedi.com

Personal marketing site for Amber Fugedi (senior marketing leader and
consultant, CT). Sixteen plain HTML pages + shared `styles.css`/
`main.js`. No framework, no build step. Only external dependency:
Google Fonts.

## Before touching design or UI

1. Read `design-system/DIGITAL-SYSTEM.md` first — the normative
   reference for type, colour, spacing, containers, radius, cards and
   panels, icons, buttons, backgrounds, explainer graphics and
   breakpoints. It says what is true now.
   Then `design-system/MASTER.md` — the change log, in order, with the
   reasoning behind every decision and the traps that have been hit.
   Where the two disagree, the newer MASTER entry wins and
   DIGITAL-SYSTEM.md needs updating.
2. The ui-ux-pro-max skill is installed in `.claude/skills/`. Search its
   database when making design decisions:
   `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <style|color|typography|ux|chart|landing>`
   Treat results as reference, not gospel — the established pastel-aura
   brand wins over generated recommendations.
3. The stop-slop skill (`.claude/skills/stop-slop/`) applies to all
   site copy: no filler, no "not X, just Y" crutches, active voice,
   human subjects. Run its Quick Checks on any prose before shipping.
   Amber's own approved lines are exempt from mechanical rewrites.
4. Emil Kowalski's animation skills are installed (review-animations,
   improve-animations, animation-vocabulary, and others). Before
   changing any motion, check the change against
   `.claude/skills/review-animations/STANDARDS.md` — easing choice,
   duration tables, physicality, and interruptibility rules.

## Rules

- Nav and footer are duplicated in every page inside
  `<!-- SHARED NAV/FOOTER — keep in sync -->` blocks. Edit all sixteen
  pages together; only `aria-current="page"` differs.
- Never introduce text below 4.5:1 contrast. Coral and the pastels are
  fill-only; use the `-deep` tokens for text. There is no text grey
  outside `--ink`, `--body` and `--muted`.
- Colour coding is capped at two sets (the offers, the Expertise
  chapters). A per-column or per-category accent is a third and is not
  available; use the pastels as fill instead.
- All motion must respect `prefers-reduced-motion`; the motion budget in
  MASTER.md is closed — don't add effects beyond it.
- Keep `{{PLACEHOLDER}}` / `{{RESULT_n}}` / `{{ADJUST}}` markers intact
  until Amber supplies real values.
- Update `sitemap.xml` if pages are added/removed. Per-page titles,
  descriptions, OG tags, and JSON-LD must stay unique and in sync.
- Verify visual changes by rendering with headless Chromium
  (`/opt/pw-browsers/chromium`) or Playwright; for animation changes,
  measure live (transforms over time), not just single frames.
- Before shipping design/copy changes, run a PATTERN audit alongside
  the size audit: render all six pages and verify each brand device
  is applied uniformly (page-top emphasis on every page, two tabs
  per page, hierarchy ladder h1 > h2 > card title > body, section
  rhythm, eyebrow presence, CTA placement per MASTER). Size-token
  conformance alone has repeatedly missed mapping and pattern gaps.
- Render every new icon or small mark at 5x before shipping it. Two
  marks have shipped as accidental duplicates of each other and one
  read as a settings slider — none of it visible at 21px.
- Before shipping design/copy changes, run Impeccable's deterministic
  AI-tell detector over the pages:
  `npx impeccable detect *.html styles.css main.js`
  (58 rules, no API key needed). The site currently passes clean;
  keep it that way. Year ranges use en dashes, not em dashes.
