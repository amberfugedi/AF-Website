# Timeline progress via transform
Commit: 3126493 · Severity: MEDIUM · Category: Performance
Finding: .timeline::after transitioned `height` (layout property)
continuously during scroll.
Fix applied: full-height bar scaled with `transform: scaleY(var(--tl-progress))`,
`transform-origin: top`, transition on transform; main.js now sets a
unitless 0-1 value.
Verify: about page, scroll through the timeline — coral fill tracks as
before; DevTools paint flashing shows no repaints from the bar.
Status: DONE
