# Gate hover lifts to real pointers
Commit: 3126493 · Severity: MEDIUM · Category: Accessibility (touch)
Finding: CSS :hover transforms (card/chip/button lifts) were ungated;
taps on touch devices leave elements stuck mid-lift (sticky hover).
Fix applied: `@media (hover: none), (pointer: coarse)` override zeroes
transform and box-shadow for the lift set; JS tilt was already gated.
Verify: mobile emulation, tap a card — no persistent lift after tap.
Status: DONE
