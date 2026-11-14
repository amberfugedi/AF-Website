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

## Logo and colour

Two logo files supplied by Amber 2026-11-14, kept in `source-assets/`:
- `a2-exteriors-logo-original.jpg`: horizontal lockup, 1024px JPEG on white
- `a2-exteriors-logo-stacked-original.png`: stacked lockup, 2703px transparent PNG (the better source)

Files in `site/images/`:
| File | Used for |
|---|---|
| `a2-exteriors-logo` | Header (horizontal, light backgrounds) |
| `a2-exteriors-logo-stacked-reverse` | Footer (stacked, navy background: A turns white, 2 lightens) |
| `a2-exteriors-logo-stacked` | Spare stacked version for light backgrounds |
| `favicon.png`, `apple-touch-icon.png` | Cut from the stacked file's A2 mark |
| `og-default.jpg` | 1200×630 social share image, reverse logo on navy |

A horizontal transparent PNG at the stacked file's resolution would let the
header logo be cut from a cleaner source. A vector (SVG/AI/EPS) is still
the goal for print.

Palette taken from the logo:
| Token | Value | Use |
|---|---|---|
| `--ink` | `#082336` logo navy | Headings, dark sections, footer |
| `--teal` | `#4394b1` logo teal | Fills only on light (3.4:1); text allowed on navy (4.6:1) |
| `--teal-deep` | `#1d6a86` | Links and text accents on white (5.7:1), trust strip and CTA band fill |
| `--cta` | `#f2b705` | Primary button fill, navy text (8.7:1) |

The yellow CTA is not in the logo. It's there so "Get a Free Estimate" is
the most visible thing on every screen. If Anthony wants to stay strictly
navy/teal, swap `--cta` to `--teal` with navy text (4.6:1).

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
87.5% width axis. The logo wordmark is a separate geometric sans; Archivo pairs with it without imitating it.

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

## Design read and taste audit (2026-11-14)

Read as: local-service marketing site for Connecticut homeowners and
property managers, trust-first trades language, native CSS so it ports to
Webflow. Settings: layout variety 5, motion 3, density 4.

Changes from the audit:
- Section eyebrows removed (were 9 site-wide, 7 on the homepage); headlines carry the sections
- Hero: subtext cut to 20 words, bullet row under the CTAs removed, H1 holds to 2 lines at 1280px and up, CTAs above the fold at 1440×900 and 390×844
- One label per CTA intent: "Get a Free Estimate", "Call or text 860-430-4568", "See our work"
- Homepage uses 10 different layout families; no more three-equal-column sections for Why A2 or Reviews
- Reviews: one featured quote slot (Testimonials CMS), hidden until an approved review exists
- Icons: Phosphor (regular, MIT), vendored in `icons/`, inlined by `build.py`; no hand-drawn SVG
- Corner radius: 6px for every interactive element and tag, 10px for cards and image frames; no pills or circles
- Middle-dot lists replaced with commas

Second pass (interior pages, states, copy):
- Theme lock: "How it works" was a navy band mid-page; it is now a light tinted section, so navy only appears in the hero, page heroes, and footer
- Empty state on Our Work for a service with no projects yet (maps to the Collection List empty state in Webflow)
- Estimate form success and error blocks (Webflow Form Block states); invalid fields turn red after the visitor interacts
- Copy: three lines rewritten plainly ("How to get your property cleaned", "clean up before we leave", services intro)

Skill defaults deliberately not applied, with reasons:
- React/Tailwind/Motion stack and self-hosted fonts: the brief requires native Webflow, which hosts fonts itself
- Dark mode: Webflow has no native dark mode, so it would need the custom code the brief rules out
- Stock or generated photography: the brief bans fake project photos, so photo slots stay labelled placeholders until Anthony supplies real jobs

## Homepage redesign (2026-11-14, third pass)

Skills used together: design-taste-frontend (hard rules), redesign-existing-projects
(audit of generic patterns), high-end-visual-design (motion discipline only), stop-slop
(copy), Impeccable detector (AI tells).

Taken from high-end-visual-design: custom easing on every transition, fade-up entry,
press feedback. Not taken, on purpose: floating glass pill nav, pill eyebrow badges,
double-bezel cards, button-in-button arrows, 2rem squircles. Those read as the
current SaaS template look and fight a trust-first trades brand.

What changed on the homepage:
- Light hero: 2-line H1, 20-word subtext, estimate button plus the phone number set large
- The logo's A/2 diagonal is the one signature device: the hero photo's cut corner with a
  teal knockout, and every before/after split on the same angle
- Icon trust strip replaced by a plain facts line
- Services: one featured service with a photo, four as a list (no numbered rows)
- Before/after: one large plus two small comparisons with plain captions
- "Why choose us" cards replaced by a first-person note from Anthony (draft, to confirm)
- Numbered step badges replaced by "Get a price by text" with the number as the panel
- FAQ answers visible in a 2-column grid (no accordion); FAQPage schema matches the 4 shown
- CTA band is navy and sits with the footer; no decorative diagonal
- Reviews: section slot reserved, hidden until an approved review exists

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
  inset content through the container gutter), a static `low-contrast`
  read of the base `a:hover` rule (the live hover test above clears it), and
  one static `tight-leading` read that matches no rendered element
- Not tested: real form delivery (needs Webflow), performance on a host,
  real photography
