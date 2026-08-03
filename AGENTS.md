# Read this before changing anything

This repo is amberfugedi.com. It is LIVE: the branch
`claude/amber-fugedi-marketing-site-7mdxff` is the default branch and
every push to it deploys to the public site within minutes.

**Push design work to `design/replit`, never to the live branch.**
Amber reviews the branch deploy, then merges. Open a pull request
rather than pushing to the default branch.

## The three files that govern this site

1. `CLAUDE.md` — how to work in this repo, and what to read first.
2. `design-system/MASTER.md` — the source of truth for colour, type,
   motion, spacing, the bullet language, and the interior hero system.
   It also records why past decisions were made. Read the relevant
   section before changing any of them.
3. This file — the rules that must not be broken by anyone.

## Hard rules

- **NEVER FABRICATE WORK ARTIFACTS.** Every drawn document, chart and
  screenshot on this site is either real or explicitly drawn and
  claiming nothing. Do not invent a client deliverable, a dashboard,
  a testimonial, or a case study.
- **ONLY PUBLISHED NUMBERS.** PERQ figures are limited to the
  percentages already on the site. Never add absolute counts, headcount,
  revenue, org structure, layoffs, internal project names, or anything
  about individual colleagues.
- **THE TEMPLATE SHOP NEVER LINKS OUT.** Its storefront name is
  withheld deliberately. The row stays unlinked.
- **THE INTERNAL AI TOOLS NEVER LINK OUT.** The Messaging Agent,
  Content Engine and AI Sales Assistant contain client and employer
  IP. One was briefly linked and Amber had it removed. Do not re-link.
- **Contrast floor 4.5:1 for text.** Coral `#E8846B` and the pastels
  are fill-only; use the `-deep` tokens for text.
- **All motion respects `prefers-reduced-motion`,** and the motion
  budget in MASTER is closed. Adding a new motion device is a decision
  to make explicitly, not a side effect.
- **Nav and footer are duplicated in every page** inside
  `<!-- SHARED NAV/FOOTER — keep in sync -->` blocks. Change all eight
  pages together; only `aria-current="page"` differs.
- **Keep `{{PLACEHOLDER}}` markers** until Amber supplies real values.

## Before you open a pull request

Run the AI-tell detector. It must exit 0:

```
npx impeccable detect index.html services.html courses.html \
  my-approach.html projects.html expertise.html about.html 404.html \
  styles.css main.js
```

## Running it

Plain HTML, CSS and JS. No build step, no dependencies. Serve the repo
root on any static server:

```
python3 -m http.server 5000
```

## Design mockups

`mockups/` holds work-in-progress design options. They are real URLs on
the site, linked from nowhere, kept out of `sitemap.xml` and disallowed
in `robots.txt`. Put new explorations there rather than on a live page.
