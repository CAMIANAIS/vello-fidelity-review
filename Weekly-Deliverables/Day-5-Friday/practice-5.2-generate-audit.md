# Practice 5.2 — Generate, then audit for token fidelity (~25 min · with Claude)

Gave Claude the screen export, the design system tokens, and the Practice 5.1 spec sheet, and had it generate the ProviderCard. Then audited the output against the spec.

## Token drift: found and fixed
| Property | Was | Now | Token |
|---|---|---|---|
| Card padding | 15px, hardcoded | 20px | `card md` scale |
| Hover elevation | `--shadow-md` (one level too weak) | `--shadow-lg` | |
| Name text size | 17px (off-scale) | 18px | `--text-md` |
| Bio text size | 13.5px (violates "never below 14px") | 14px | `--text-sm` |
| Available badge | Custom coral/accent colors | Real success colors | `--success`/`--green-100`/`--green-700` |
| Verified mark | Hand-built circle, hardcoded hex, no shape meaning | Real `VerifiedMark` component | shield shape, `--green-600`, `--paper` rim |

**Left as documented, not "fixed":** the walk-time chip's own styling and the 13px icon size — both open questions for the designer, not confirmed drift (see `deliverable-fidelity-audit.md`).

**Real tradeoff surfaced:** checked several values against the real prototype source, not just the docs, and confirmed the walk-chip's padding and the card's 14px gap are exact matches to the real, off-token production code. Fixing card padding to the token scale (15px → 20px) made the build more token-correct but less pixel-faithful to the actual reference, since the reference itself doesn't follow its own scale.

**Did NOT do:** switch the walk-time chip to Tag styling even though offered as a fix option — picking a style now would be guessing an answer to an open design question, not applying a confirmed fix. Also declined an offer to rebuild the whole card on the real `ProviderCard` component, since that component uses the documented layout (rating under name, price in its own column) — not the Home-screen layout deliberately built from — and rebuilding on it would silently answer an open layout question instead of leaving it for the designer.
