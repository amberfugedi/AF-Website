# A2 Exteriors — Phase 1: Strategy and Foundation

Status: draft for approval · 14 Nov 2026 · Phone confirmed 860-430-4568 (413 number retired from the site)
Nothing here is published. Everything marked **[CONFIRM]** must be verified with Anthony Aubrey before it goes on the site.

---

## 1. Webflow connector review

| Capability needed | Connector support | Notes |
|---|---|---|
| Create a new site | **No** | Site must be created in the Webflow dashboard, then authorized for the connector |
| Pages, folders, SEO/OG fields, JSON-LD per page | Yes | `data_pages_tool` |
| Native elements, styles, classes | Yes | element builder / HTML-to-native builder |
| Design variables (colour, type, spacing) | Yes | `data_variable_tool` |
| Components + props (editable in Content editor) | Yes | |
| CMS collections, fields, references, items | Yes | |
| Forms: build + read submissions | Yes | Notification email address, reCAPTCHA, file upload are **Designer/Site settings only** |
| Interactions (IX3) with reduced-motion rules | Yes | |
| Assets by URL | Yes | Local files need upload via Designer or a public URL |
| Publish to staging (webflow.io) | Yes | Production publish only with your approval |
| Custom domain, hosting plan, billing, workspace transfer | **No** | Dashboard only — documented in handoff |
| robots.txt / 301s via API | Enterprise only | On CMS/Business plans: Site settings → SEO (manual step) |
| Site-wide custom code (GA4) | Yes (scripts tool) | Requires paid site plan |

**Connector currently sees one site only: East Brook Fitness (live, custom domain). I will not touch it.**

---

## 2. Facts — confirmed vs. unverified

### Found in existing brand materials (Amber's portfolio)
| Item | Source | Status |
|---|---|---|
| Owner: Anthony Aubrey | Testimonial on amberfugedi.com | Confirmed |
| Tagline: "Because first impressions matter." | Door hanger | Confirmed |
| Logo: "A2" wordmark (A in black, 2 in royal blue) over "EXTERIORS" | Yard sign + door hanger | Need source file (SVG/AI/PDF) **[CONFIRM]** |
| Services on print: pressure washing, driveway cleaning, gutter cleaning, roof cleaning | Door hanger | **[CONFIRM]** current, esp. gutters |
| Residential + Commercial | Yard sign | **[CONFIRM]** commercial scope |
| "Licensed & Insured" | Yard sign, door hanger | **[CONFIRM]** — need license/registration # (CT HIC?) and insurance carrier before publishing |
| "Text a photo to get scheduled" | Door hanger | Good conversion pattern — **[CONFIRM]** still offered |
| Wethersfield, CT | Door hanger | **[CONFIRM]** as a served town; full list needed |
| "Worry-Free Guarantee" | Door hanger | **Will not publish** until exact terms are confirmed |
| Fall 10% discount | Door hanger | Expired promo — **will not publish** |

### Conflicts to resolve
- **Two phone numbers in circulation:** 860-430-4568 (yard sign) and (413) 348-5793 (door hanger). One number must be chosen; it must match Google Business Profile exactly. 413 is a Western MA area code, which matters for local trust in Central CT.
- **Two palettes:** sign uses black/royal blue/white; hanger uses cream/brown/green/rust (seasonal). Recommendation below treats the sign palette as the permanent brand.

### Still missing (from brief §14)
Business address or operating base (service-area business, no public address is fine) · full town list · email · domain · final logo files · exact services + methods (soft-wash chemistry, equipment, water use) · license/insurance proof · owner story · real before/after photos with town + service · approved testimonials · Google Business Profile URL · estimate/scheduling/payment policies.

---

## 3. Positioning

**Who:** A locally owned Central Connecticut exterior cleaning company, owner on the job.
**Problem it solves:** Siding, roofs, and hardscape that look worn because of algae, mildew, dirt, and staining — and a homeowner who doesn't want to rent a pressure washer and risk damaging anything.
**Proof it rests on:** Real before/after work in named towns, the right method per surface (soft wash vs. pressure), and the owner's name behind the work.
**Expansion path:** "Exteriors," not "Pressure Washing," leads the brand. Navigation and CMS treat services as a list that can grow (gutters, decks, fences, seasonal maintenance) without a redesign.

Homepage H1 candidates (pick one after town list is confirmed):
1. **Exterior cleaning for Central Connecticut homes and businesses** — strongest for SEO and clarity
2. **Make a better first impression** — strongest for brand; needs a descriptive subhead carrying the keywords
Recommendation: H1 = option 1, tagline as eyebrow/sub-line. Clarity beats cleverness for a site that has to rank and convert cold traffic.

---

## 4. Sitemap

```
/                               Home
/services                       Services overview
  /services/house-washing
  /services/roof-washing
  /services/driveway-concrete-cleaning
  /services/patio-walkway-cleaning
  /services/commercial-exterior-cleaning
  (CMS template — new services added as items, published only when confirmed)
/our-work                       Project gallery (filter by service)
  /our-work/[project-slug]      CMS template
/service-areas                  Overview + map of confirmed towns
  /service-areas/[town-ct]      CMS template — only towns with real work + original content
/about
/faq
/resources                      Article index
  /resources/[article-slug]     CMS template
/free-estimate                  Estimate form + call/text
/thank-you                      noindex, conversion event
/privacy                        Required once GA4/forms collect data
/404
```

Services as a CMS collection with one template (rather than five static pages): one design, Content-editor manageable, each item carries its own long-form rich text, FAQs, SEO fields, so pages stay unique. Tradeoff: per-page layout variation is limited to what the template allows; I'll build optional sections that hide when empty.

---

## 5. Keyword-to-URL map (one primary intent per page)

| URL | Primary intent | Secondary |
|---|---|---|
| `/` | exterior cleaning [Central CT] | pressure washing near me, power washing CT |
| `/services/house-washing` | house washing CT | soft wash siding, vinyl siding cleaning |
| `/services/roof-washing` | roof washing CT | roof soft wash, black streaks on roof |
| `/services/driveway-concrete-cleaning` | driveway pressure washing | concrete cleaning, oil stain removal |
| `/services/patio-walkway-cleaning` | patio cleaning | paver cleaning, walkway pressure washing |
| `/services/commercial-exterior-cleaning` | commercial pressure washing CT | storefront cleaning, building washing |
| `/service-areas/wethersfield-ct` (once confirmed) | pressure washing Wethersfield CT | house washing Wethersfield |
| `/our-work` | (support) before and after pressure washing | — |
| `/resources/pressure-washing-vs-soft-washing` | pressure washing vs soft washing | — |
| `/resources/black-streaks-on-roof` | what causes black streaks on roof | can a roof be cleaned without damage |
| `/resources/how-often-to-wash-house` | how often should you wash your house | — |
| `/faq` | (support, AEO) prep, timing, water, pets/plants | — |

Rules: statewide terms live on home + service pages only; town terms live on town pages only; town pages link to the matching service pages and the reverse via CMS references, not keyword lists.

Keyword volumes not pulled — the Ahrefs connector failed to connect in this session. I'll validate with Search Console data post-launch, or with Ahrefs if it's reconnected.

---

## 6. CMS collections

**Business Info** (single-item "settings" collection — the one place to change phone, email, hours, GBP link, service-area statement). Bound into header, footer, CTAs.

**Services** — name, slug, short description, hero image, body (rich text), "how we clean it" (rich text), "what to expect" (rich text), surfaces (plain text), status (Option: Active / Coming soon), show in nav (switch), sort order, related services (multi-ref), SEO title, SEO description, OG image.

**Projects** — title, slug, service (ref), town (ref → Service Areas), before image, after image, before/after alt text, summary, property type (Option), surface, work performed (rich text), completion month, featured (switch), SEO title/description.

**Service Areas** — town, state, slug, coverage notes, original local content (rich text), related services (multi-ref), published-ready (switch), SEO title/description. Related projects show via a filtered collection list (projects where town = current).

**Testimonials** — quote, display name (as permitted), town (ref, if approved), service (ref), source (Option: Google / Facebook / Direct), date, permission on file (switch, required true to display).

**FAQs** — question, answer (rich text), topic (Option), related service (ref), sort order.

**Articles** — title, slug, excerpt, main image, alt, body, category (Option), publish date, related services (multi-ref), SEO title/description.

---

## 7. Design system proposal (for approval)

Derived from the yard sign, which is the most "brand" of the two pieces.

**Colour**
| Token | Value | Use |
|---|---|---|
| `ink` | #0F1115 | Headings, body text, dark sections |
| `a2-blue` | #1E3FA8 (sampled from the "2"; confirm against source file) | Primary brand, links on light |
| `blue-deep` | #142C78 | Hover, text-on-light where blue needs more contrast |
| `paper` | #FFFFFF | Main background |
| `stone` | #F2F1EE | Alternate section background |
| `line` | #D9D7D2 | Borders |
| `cta` | #F2B705 (safety yellow) — **proposal** | Primary CTA fill with ink text (≈11:1). Distinct from blue so "Get a Free Estimate" is the most visible thing on every screen |
| `muted` | #4A4F5A | Secondary text (≥7:1 on white) |

No orange: the flyer orange read as seasonal, and yellow-on-ink gives more contrast with the blue. If Anthony prefers to stay strictly blue/black, the CTA becomes solid blue with white text (8.5:1).

**Type** (Google Fonts, native in Webflow)
- Headings: **Archivo** 800/700, condensed width for large display — matches the heavy sans on the sign without copying it.
- Body: **Inter** 400/500/600.
- Scale (desktop/mobile): H1 64/40 · H2 44/30 · H3 26/22 · body 18/17 · small 14.

**Spacing:** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 px. Section padding 96 desktop / 64 mobile.
**Containers:** 1200 max, 720 for reading text. **Radius:** 6 (buttons, inputs), 10 (cards, images). Squared, not pill — fits a trades brand.
**Signature device:** the diagonal cut from the sign (blue/white split) used once per page — hero image edge and the before/after divider. That ties the site to the print kit without decorative shapes.
**Before/after component:** side-by-side on desktop, stacked on mobile, both labelled BEFORE / AFTER in fixed corner tags; native images, no JS slider (keeps it Content-editor-safe and indexable). A drag slider can be added later as an enhancement.
**Motion:** fade-up on section entry only, 300 ms ease-out, disabled under `prefers-reduced-motion`.

---

## 8. Conversion plan

- Primary CTA everywhere: **Get a Free Estimate** → `/free-estimate`
- Secondary: **Call or Text** — `tel:` and `sms:` links (number pending)
- Sticky mobile bar: Call · Text · Estimate
- Form: name, email, phone, town or ZIP, service (select from Services), description (optional), photo upload (optional — requires a paid site plan; Webflow caps file size at 10 MB). Honeypot + reCAPTCHA. Redirect to `/thank-you` for clean conversion tracking.
- "Text us a photo for a faster quote" retained from the door hanger, once confirmed.

---

## 9. What I need to continue

**To start building (blocking):**
1. Create a blank site in Webflow named **A2 Exteriors** (ideally in a workspace Anthony will own, or yours for transfer later), then reconnect the Webflow connector and grant it access to that site.
2. Logo source file.

**Before content goes live:** single phone number, email, town list, services and methods, license/insurance details, photos, testimonials, GBP URL.
