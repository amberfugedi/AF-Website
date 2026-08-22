# To do

Open items for amberfugedi.com. Last updated 2026-08-22 (post-audit).

Not served publicly — `_redirects` returns 404 for this file.

---

## 1. Before announcing the site

### Student login is pulled — restore it when the subdomain is back
`learn.amberfugedi.com` returns 502, so all 20 entry points were removed
on 2026-08-22: nav and footer on 11 pages, the Courses hero line, and
the "Already enrolled?" section. Each spot is marked with an HTML
comment; the Courses section is recoverable from git.

- [ ] **Fix the subdomain** — check its DNS/CNAME and the hosting-domain
      assignment.
- [ ] **Restore the links** — `git show d5e3e01^:courses.html` has the
      original section. The nav rule needs no change: the mobile menu's
      bottom pin falls back to `.nav-note` via `:has()` and hands back
      automatically when `.nav-secondary` returns.

### Contact forms — the code is done, the step is in Netlify
Both forms are fully wired and verified end to end; the payload is
exactly what Netlify expects.

- [ ] **Enable form detection.** Project configuration → Forms → Form
      detection → Enable. Off by default since August 2024, which is
      why the forms look wired but nothing arrives.
- [ ] **Redeploy after enabling** — it does not retroactively scan the
      last build.
- [ ] **Add an email notification** to amberfugedi@gmail.com. Netlify
      does not email on submission by default.
- [ ] **Add a honeypot to the three `course-updates` forms.** Only the
      contact form has one.

### Search migration
Redirects, canonicals and the sitemap are done. The rest is dashboard
work only you can do.

- [ ] **Submit the sitemap** in Google Search Console.
- [ ] **Inspect and request indexing** for the homepage, Work,
      Expertise, Services and Courses.
- [ ] **Keep the old redirects in place long-term** — do not tidy them
      out of `_redirects` later.

### Analytics — blocked on you
- [ ] **Add measurement before announcing.** Needs a GA4 or GTM
      container ID; I can install it in the shared head of all 11 pages
      once you have one. Worth tracking: Work views, contact
      submissions, course-interest submissions, and outbound project
      clicks. (Student-login clicks are moot while the links are out.)
- [ ] Then name the tool in `/privacy` — there is an `{{ADJUST}}` marker
      waiting at the "What happens automatically" section.

## 2. Waiting on Amber

- [ ] **Course page `{{ADJUST}}` markers** — eight module titles, price,
      launch date, and confirmation of the three outcome lines under
      "What you'll be able to do". Those outcome lines are the only
      copy on that page written rather than quoted.
- [ ] **`{{ADJUST}}` markers in `services.html`.**
- [ ] **Tools dropped when the list collapsed to four groups** —
      DocuSign, Microsoft Office, PR Newswire, Business Wire, plus the
      SQL editor whose name is still unconfirmed. Decide whether any go
      back in.
- [ ] **The mp3** (`ElevenLabs_Module_4_Earned_Proof.mp3`, in
      `attached_assets/`). Audio can't be processed here — say what it
      is for and it can be handled.
- [ ] **MembersFirst dates** and the **120% vs 129%** discrepancy.
- [ ] **Legal `{{ADJUST}}` markers.** `/privacy` needs a retention
      window if you want a firm one; `/terms` needs the jurisdiction
      confirmed and the registered business name if the practice is an
      entity. Course purchase, access and refund terms must exist
      before checkout opens.
- [ ] **Amethyst Aesthetics case study** — currently a one-line row on
      Projects, which was the call made on 2026-08-22. It is the
      clearest example on the site of the "no idea where to start"
      client the practice is aimed at, so the option stays open. Needs
      what the plan covered and what happened after. A `{{ADJUST}}`
      note sits in `projects.html`.

---

## 3. Assets

- [ ] **`amber-how-i-work.webp` needs a larger export.** 1222px against
      1350 needed at 2×, so it renders at 0.91× and softens slightly.
- [ ] **Clean SVGs for Constant Contact, Storylane and Wrike.**
- [ ] **Orphaned assets, roughly 592KB.** Audit and remove.
- [ ] **`undefined/` directory** in the repo root, holding a stray
      `proj-rm.png`. Junk from a bad command — safe to delete.

---

## 3b. Deferred until after launch

- [ ] **Page-specific social images** for Work and the individual
      course. The shared 2400x1260 asset is strong and correctly sized,
      so this is polish, not a blocker.

## 4. Known issues, none blocking

- [ ] **Horizontal overflow on the homepage at 1024px** — about 40px,
      from the aura and the quote marquee. Clipped by
      `overflow-x: hidden`, so it does not show, but it is real.
- [ ] **Projects page title and h1 say "Projects" while the nav says
      "Work".**
- [ ] **Services has three butter tabs** where every other page has two.
- [ ] **Dead CSS** — `.hw-quote` / `.hw-quote-under`, `.hw-kicker`, and
      `.proofs` / `.proof` / `.pr-head` / `.pr-proof` / `.pr-copy`. All
      zero instances.
- [ ] **Dead JS branch** — the `[data-gallery]` path in `collect()` in
      `main.js`. No element on the site carries that attribute, so the
      branch never runs.

---

## 5. Decided, recorded so it is not re-litigated

- **All asset and internal references are root-relative** (2026-08-22).
  Relative paths resolve correctly from a one-level clean URL but break
  from any trailing-slash form, which is what once shipped the course
  page unstyled. Keep new references starting with `/`.

- **Active clients are not identified anywhere on the site** (2026-08-22).
  Durations and depth stay; present-tense status markers were removed.
  A reader who cross-references the About timeline against the case
  study durations could still infer currency. Closing that gap fully
  would mean dropping the year ranges or anonymising the two named case
  studies, and neither was judged worth the loss of credibility.
