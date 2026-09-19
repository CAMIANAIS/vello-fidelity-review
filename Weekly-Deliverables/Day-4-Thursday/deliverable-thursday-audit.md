# Thursday Main Deliverable: Comparative Audit — Human Pass vs. AI Pass

**Component audited:** Maya Rivera / NeighborCard, an assigned Vello screen with planted issues.

## Human pass (no AI) — final version
| Looked at | Mechanism | Token or one-off |
|---|---|---|
| Available tag | color | wrong component/variant — should be `Badge variant="success"`, not an accent-colored custom tag |
| Available tag + arrow crowding | position | one-off |
| Price ("$24 / walk") spacing | position | one-off |
| Feet icon + word "walk" | redundant copy | one-off |

**Verified badge check** (against Monday's own artifact, which said "olive shield, never a dot"): checked directly against the real card — it IS a shield. Not a violation. A hypothesis tested and disproved — kept as a legitimate finding, not discarded.

## AI pass (Claude, prompt below)
> Critique this Vello screen against the attached design system. Structure it as: 1) visual hierarchy, 2) consistency with design-system tokens, 3) accessibility (contrast ratios, touch targets, focus, semantics), 4) missing UI states. For each issue: severity, the evidence, and the principle or standard it violates. Do not soften findings.

**Findings:** muted text contrast 4.51:1 (barely passes, small font = real risk); `.svc__fav` heart button hardcoded 32×32px (below 44px comfortable target); `.nb--featured` card marked by shadow only, no icon/label (color-alone signal); heart button is a `<span role="button">` with no `tabIndex`/`onKeyDown` — invisible to keyboard users. (Full detail: `practice-4.2-a11y-checks.md`, `practice-4.3-token-or-hardcode.md`.)

## Comparison — what each pass uniquely caught
- **Only human:** wrong badge component/variant, redundant icon+text, a trust-hierarchy note (badges draw the eye, but a named review — per Tuesday's research — is what actually builds trust, and there's no fast path from the star rating to a review).
- **Only Claude:** touch target size, keyboard/focus bug, color-only signal, contrast risk.
- **Overlap/disagreement:** none — the two passes were fully complementary, not redundant.

## Planted issues found (summary)
1. Wrong badge variant (accent/coral instead of success/green) — human catch.
2. Available tag / chevron visual crowding — human catch.
3. Price line spacing disconnected — human catch.
4. Redundant feet-icon + "walk" text — human catch.
5. Muted-text contrast barely passing at small size (4.51:1) — AI catch.
6. Heart button below 44px comfortable target (32×32px) — AI catch.
7. Featured card signaled by shadow only, no icon/label — AI catch.
8. Heart button (`span role="button"`) unreachable by keyboard — AI catch.

**Takeaway:** the two passes were complementary, not redundant — human judgment caught component-choice and content problems the AI critique didn't flag as clearly (wrong variant, redundant copy, trust-hierarchy), while the AI critique was faster and more exhaustive on the mechanical WCAG checks (contrast math, exact pixel measurements, keyboard reachability).
