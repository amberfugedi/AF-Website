# To do

Open items for amberfugedi.com. Last updated 2026-08-22.

Not served publicly — `_redirects` returns 404 for this file.

---

## 1. Contact forms — the code is done, the remaining step is in Netlify

Both forms (`contact` on About, `course-updates` on Courses, Services and
the course page) are fully wired: `data-netlify="true"`, a hidden
`form-name` matching each form's name, and an AJAX POST from `main.js`
that carries `form-name` in the body. Verified end to end — the payload
is exactly what Netlify expects and client-side validation works.

Nothing in the markup or JS needs changing. What is missing:

- [ ] **Enable form detection.** Netlify → the site → Project
      configuration → Forms → Form detection → Enable. Netlify has
      shipped this switched off by default since August 2024, which is
      why the forms look wired but nothing arrives.
- [ ] **Redeploy after enabling.** Turning detection on does not
      retroactively scan the last build. Trigger a deploy, or push any
      commit.
- [ ] **Add an email notification.** Forms → Form notifications → Add
      notification → Email notification → amberfugedi@gmail.com.
      Netlify does not email on submission by default; without this,
      entries collect silently in the dashboard.
- [ ] **Confirm the host is Netlify.** Not verifiable from the dev
      environment — outbound requests to the domain are blocked. The
      `_redirects` file and the `data-netlify` attributes both point to
      Netlify, but a `.replit` file is also in the repo. If the site
      serves from somewhere else, none of the above applies and the
      forms need a different backend.

Free tier covers 100 submissions a month.

- [ ] **Add a honeypot to the three `course-updates` forms.** Only the
      contact form has `netlify-honeypot="bot-field"`. The subscribe
      forms will collect bot signups as they stand.

---

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
- [ ] **MembersFirst dates**, **LinkedIn URL**, and the **120% vs 129%**
      discrepancy.
- [ ] **`learn.amberfugedi.com`** is referenced but not live.
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

## 4. Known issues, none blocking

- [ ] **Horizontal overflow on the homepage at 1024px** — about 40px,
      from the aura and the quote marquee. Clipped by
      `overflow-x: hidden`, so it does not show, but it is real.
- [ ] **Shop dropdown on the Courses hero.** `main.js` deliberately
      opens the dropdown when the current page sits inside it, so on
      Courses it renders as a permanently open panel over the hero.
      Intentional, but it reads as a bug.
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

- **Active clients are not identified anywhere on the site** (2026-08-22).
  Durations and depth stay; present-tense status markers were removed.
  A reader who cross-references the About timeline against the case
  study durations could still infer currency. Closing that gap fully
  would mean dropping the year ranges or anonymising the two named case
  studies, and neither was judged worth the loss of credibility.
