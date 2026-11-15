# A2 Exteriors: accessibility audit (WCAG 2.2 AA)

Date: 2026-11-15. Scope: all 28 prototype pages. Results apply to this prototype;
the Webflow build is new code and must be re-tested before launch.

| Check | WCAG | Method | Result |
|---|---|---|---|
| Automated rules (axe-core, WCAG 2 A/AA + best practice) | many | All pages at 1440px and 390px | 0 violations |
| Color contrast | 1.4.3, 1.4.11 | Computed pairs + axe + live hover test | Pass (body 13-15:1, CTA 9:1, non-text >= 3:1) |
| Reflow at 320 CSS px (= 400% zoom on 1280px) | 1.4.10 | Every page, outermost overflowing element | **Fixed**, now 0 |
| Text resize to 200% | 1.4.4 | Root font-size doubled at 1280px | **Fixed**, now 0 overflow |
| Text spacing override | 1.4.12 | WCAG bookmarklet values on every page | Pass |
| Target size >= 24x24 | 2.5.8 | Every link, button, field | **Fixed**, now 0 under 24px |
| Focus not obscured by sticky header | 2.4.11 | Tab through 80 stops per page | Pass (skip link flagged by script but verified on top of the header) |
| Focus visible | 2.4.7 | Every tab stop | Pass, ring on all |
| Keyboard operation | 2.1.1 | Menu, dropdown, slider (arrows/Home/End), filter, forms | Pass |
| Reduced motion | 2.3.3 | CSS media query | Pass |
| Accessibility statement | (good practice) | New page `/accessibility`, footer link | Added |

## Fixes made
1. Collapsed two-column layouts (`layout-sidebar` and others) used `1fr`, which cannot
   shrink below its content; project pages and articles overflowed at 320px. Now
   `minmax(0, 1fr)`, plus `overflow-wrap` on prose and scrollable tables.
2. Header wrapped onto the next line instead of pushing "Get a Quote" off screen at large
   text sizes. Breakpoints moved from px to em so browser text-size settings switch to the
   mobile menu as well.
3. Fact lists (homepage Licensing, project details) let their value column shrink.
4. Footer, breadcrumb, text links, and list links padded to at least 24px tall.

## Not covered by this audit (needs a person)
- Screen reader walkthrough: VoiceOver (iPhone, Mac) and NVDA (Windows)
- Real browser text-only zoom (Safari/Firefox) and Windows High Contrast mode
- Repeat everything on the Webflow build
