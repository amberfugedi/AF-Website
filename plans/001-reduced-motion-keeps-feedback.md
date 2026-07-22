# Reduced motion keeps gentle feedback
Commit: 3126493 · Severity: MEDIUM · Category: Accessibility
Finding: blanket `* { animation/transition-duration: 0.01ms }` in the
reduced-motion block killed all feedback including color/underline
transitions. Emil's bar: fewer and gentler, not zero.
Fix applied: blanket rule removed; explicit per-effect resets extended
(hover lifts, timeline fill, nav menu, form feedback) so all MOVEMENT
stays neutralized while color/opacity feedback survives.
Verify: with reduced motion emulated, hover a nav link — the underline
and color still ease in; hover a card — no lift, no tilt.
Status: DONE
