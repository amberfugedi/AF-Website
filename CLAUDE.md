# AF-Website — amberfugedi.com

Personal marketing site for Amber Fugedi (marketing consultant, CT).
Four plain HTML pages + shared `styles.css`/`main.js`. No framework, no
build step. Only external dependency: Google Fonts.

## Before touching design or UI

1. Read `design-system/MASTER.md` — the source of truth for colors,
   type, motion, offer color-coding, and the accessibility floor. If a
   page-specific file exists in `design-system/pages/`, it overrides.
2. The ui-ux-pro-max skill is installed in `.claude/skills/`. Search its
   database when making design decisions:
   `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <style|color|typography|ux|chart|landing>`
   Treat results as reference, not gospel — the established pastel-aura
   brand wins over generated recommendations.
3. The stop-slop skill (`.claude/skills/stop-slop/`) applies to all
   site copy: no filler, no "not X, just Y" crutches, active voice,
   human subjects. Run its Quick Checks on any prose before shipping.
   Amber's own approved lines are exempt from mechanical rewrites.

## Rules

- Nav and footer are duplicated in every page inside
  `<!-- SHARED NAV/FOOTER — keep in sync -->` blocks. Edit all four
  pages together; only `aria-current="page"` differs.
- Never introduce text below 4.5:1 contrast. Coral `#E8846B` and the
  pastels are fill-only; use the `-deep` tokens for text.
- All motion must respect `prefers-reduced-motion`; the motion budget in
  MASTER.md is closed — don't add effects beyond it.
- Keep `{{PLACEHOLDER}}` / `{{RESULT_n}}` / `{{ADJUST}}` markers intact
  until Amber supplies real values.
- Update `sitemap.xml` if pages are added/removed. Per-page titles,
  descriptions, OG tags, and JSON-LD must stay unique and in sync.
- Verify visual changes by rendering with headless Chromium
  (`/opt/pw-browsers/chromium`) or Playwright; for animation changes,
  measure live (transforms over time), not just single frames.
