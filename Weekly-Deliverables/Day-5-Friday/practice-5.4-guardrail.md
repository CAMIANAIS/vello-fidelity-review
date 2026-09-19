# Practice 5.4 — Turn the design system into guardrails (~15 min · with Claude)

Guardrail file: `deliverable-guardrail.md` (also lives at `design/docs/guardaril.md` in the main repo, alongside `colors.css`, `spacing.css`, `typography.css`). Ties every rule to Vello's "trust scales locally" bet, not just style preference: real tokens only, no invented values or assets, a real a11y baseline, "compare against reference before done."

## Test setup
New project. Guardrail pasted first, then the real `colors.css`/`spacing.css`/`typography.css` + the real component bundle (`_ds_bundle.js`) + the Home screen reference screenshot — but only a **plain build instruction**, not the corrected v2 spec table. Point: test whether the guardrail alone catches what previously had to be caught by hand.

## Result: matches the reference on the first try
| v1 (no guardrail) | v4 (guardrail active) |
|---|---|
| Padding 15px, hardcoded | Token-correct throughout, no manual fixes needed |
| Hover shadow one level too weak | Correct on first try |
| Name/bio text off-scale | Correct on first try |
| Badge used wrong color family (accent, not success) | Used real `Badge`/`Rating`/`Avatar`/`VerifiedMark` components directly from the bundle — not redrawn |
| Verified badge: fake circle, no label | Real `VerifiedMark`, real shield, real label — first try |
| Card wrapper: unfocusable `div` | Real focusable `<button>`, chevron correctly `aria-hidden` — resolved the keyboard bug on its own, no follow-up needed |

## New catches v1–v3 never made
- No container-width token matches the reference (430px forces a line break the reference doesn't have) — computed `calc(var(--container-app) + var(--space-12))` instead of guessing a raw px, and flagged it.
- No photo asset available — flagged, rendered the real Avatar initials fallback instead of faking a portrait.

## Conclusion
The guardrail measurably reduced drift — most of what required manual, one-by-one fix instructions in v1→v3 was correct on the first try in v4, and the model caught two new gaps openly instead of guessing. Evidence images: `images/projectwithguardarils.png`, `images/firstpromptversion.png`, `images/thirdpromptversion.png`.
