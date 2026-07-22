# Mobile menu animated entrance
Commit: 3126493 · Severity: LOW · Category: Interruptibility
Finding: menu toggled display:none->flex — teleports, cannot animate,
not interruptible. Hamburger morph ran 300ms (budget 150-250ms).
Fix applied: visibility+opacity+translateY(-8px) pattern, 200ms
var(--ease) both ways (interruptible transitions), visibility delayed
on exit; hamburger tightened to 250ms. Reduced motion: transition none.
Verify: mobile emulation, tap the hamburger rapidly — the menu reverses
mid-flight without restarting.
Status: DONE
