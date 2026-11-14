# A2 Exteriors — website prototype

A static, clickable build of the A2 Exteriors site, made to review design,
copy, and structure before anything goes into Webflow. **This is not the
production site.** The production site gets built natively in Webflow from
this prototype (see "Porting to Webflow" below).

Lives under `mockups/`, which amberfugedi.com already 404s (`_redirects`)
and disallows (`robots.txt`). Every page also carries `noindex, nofollow`.

## View it

```
cd mockups/a2-exteriors/site
python3 -m http.server 8000
# open http://localhost:8000
```

Opening `site/index.html` directly also works; all links are relative.

## Edit it

- Copy and page structure: `content.py`
- Shared header, footer, CTA band, mobile bar, SEO head: `build.py`
- Styles: `site/css/a2.css` (tokens at the top)
- Rebuild after any change to the two `.py` files: `python3 build.py`

## Yellow "(to confirm)" flags

Anything not supported by A2's existing print materials, Anthony's
testimonial, or the brief is wrapped `[[tbc:…]]` in `content.py`, and
renders highlighted with "(to confirm)". There are 64. Each one gets
confirmed (flag removed) or cut before launch. The big groups:

| Area | What's needed from Anthony |
|---|---|
| Contact | Email address, domain |
| Trust | Licensed & insured: CT registration #, insurer. Shown only once confirmed |
| Towns | Full list of towns served, and which have real jobs to show |
| Methods | Cleaning solution, surface cleaner, hot water, plant protection steps, roof access |
| Scope | Window glass, shutters, re-sanding pavers, efflorescence, moss brushing, roof types |
| Commercial | Property types, after-hours work, recurring service, COI, runoff handling |
| Timing | Typical job durations, estimate response time, rain policy |
| People | Anthony's story, owner photo, whether he works every job |
| Proof | Before/after photos with town + service, approved reviews, GBP URL |
| Legal | Privacy policy text |

Facts treated as confirmed: business name, tagline, owner name, phone
860-430-4568, residential + commercial, Wethersfield as a served town,
"text a photo" quoting, services listed on the print kit (house/power
washing, driveway, roof).
Deliberately left off: the (413) number, the expired fall 10% offer, the
"Worry-Free Guarantee" (terms unknown), gutter cleaning (not confirmed).

## Logo

The header and footer use an interim text lockup (black A, blue 2,
EXTERIORS between rules) styled after the yard sign. Replace it with the
logo source file (SVG preferred). The brand blue `#1b3a9a` is sampled
from a photo of the sign; check it against the source file.

## Pages (20)

```
/                                    Home
/services                            Services overview
/services/house-washing              ┐
/services/roof-washing               │
/services/driveway-concrete-cleaning ├ Services CMS template
/services/patio-walkway-cleaning     │
/services/commercial-exterior-cleaning┘
/our-work                            Projects gallery + service filter
/service-areas                       Overview
/service-areas/wethersfield-ct       Service Areas CMS template (publish once it has real projects)
/about
/faq                                 3 groups, FAQPage schema
/resources                           Articles index
/resources/pressure-washing-vs-soft-washing  ┐
/resources/black-streaks-on-roof             ├ Articles CMS template
/resources/how-often-to-wash-house           ┘
/free-estimate                       Form → /thank-you
/thank-you                           Conversion page (excluded from sitemap)
/privacy
/404
```

## Porting to Webflow

The prototype is written so the port is a mapping, not a redesign.

**Variables** — every `--token` in `a2.css :root` becomes a Webflow
Variable with the same name (colours, font families, type sizes, spacing,
radius, container widths).

**Fonts** — Archivo (Google Fonts) for headings and body; headings use the
87.5% width axis.

**Classes** — class names already follow Webflow's base + combo pattern
(`button is-primary`, `section is-ink`, `container is-narrow`). Create
them as Webflow classes; avoid tag selectors except the body/heading
defaults.

**Components** (marked `<!-- COMPONENT: … -->` in the HTML)
| Component | Props for the Content editor |
|---|---|
| Site Header | none (nav links bound to Services CMS list) |
| Site Footer | none (phone/email from Business Info) |
| Mobile Action Bar | none |
| CTA Band | heading, text |
| Before / After | before image, after image, alt text ×2 |
| Page Hero | heading, lede |
| Answer Box | label, answer text |

**CMS** — collections and fields are in `STRATEGY.md` §6. Static pages in
this prototype that become CMS templates: the five service pages, the
Wethersfield page, the three articles, and every project card.

**Not ported** — `js/a2.js`. Mobile nav becomes the native Navbar; the
reveal becomes one IX3 interaction with a reduced-motion rule; the gallery
filter becomes CMS collection lists filtered by Service. The `.tbc` style
is prototype-only.

**Forms** — native Form Block "Estimate Request", same field names,
redirect to `/thank-you`, notification email + reCAPTCHA in Site settings.
File upload needs a paid site plan.

**Tracking hooks** — `data-track="cta-estimate | phone-click | sms-click |
form-submit"` mark the elements GA4 events attach to.

## QA run on this build (2026-11-14)

- 20 pages built; 0 broken internal links; every JSON-LD block parses
- One `<h1>` per page; titles ≤ 60 chars, descriptions ≤ 160, all unique
- axe-core (WCAG 2 A/AA + best practice): 0 violations on all 20 pages at 1440px and 390px
- Every link hovered in Chromium on 6 representative pages: all ≥ 4.5:1
- No horizontal scroll at 390px on the pages checked
- Mobile nav opens, closes on Escape; Services dropdown closes on outside click
- Our Work filter shows the right cards and announces the count
- Estimate form blocks empty required fields, submits through to /thank-you
- Impeccable detector: remaining hits are `cramped-padding` (sections that
  inset content through the container gutter) and a static `low-contrast`
  read of the base `a:hover` rule, which the live hover test above clears
- Not tested: real form delivery (needs Webflow), performance on a host,
  real photography
