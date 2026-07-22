# Form feedback eases in
Commit: 3126493 · Severity: LOW · Category: Missed opportunity
Finding: validation errors and the success status appeared instantly
(display toggle / text swap) at the moment of highest user attention.
Fix applied: 180ms feedback-in keyframe (opacity + 2px rise) on
.field-error.show and .form-status.show; JS restarts the status
entrance on resubmit via class + reflow. Reduced motion: animation none.
Verify: about page, submit the empty form — errors fade-rise in; fill
and submit — status message eases in.
Status: DONE
