# Vello ProviderCard: Design Fidelity Audit

**Component:** ProviderCard (Maya Rivera), built with AI assistance from the Home screen reference (`image (1).png`), cross-checked against the real Vello Design System token files and component bundle.

**Working component (guardrail-active build, the "after"):** https://claude.ai/design/p/82fde247-6976-415f-b9a6-f69df091813a?file=Vello+Provider+Card.dc.html&via=share

**Earlier build (v1-v3, manual fixes, the "before"):** https://claude.ai/design/p/a31ed5d9-0b86-4424-8dff-301c4a5b2f56?file=Provider+Card+Audit.dc.html

## Token drift: found and fixed

| Property | Was | Now | Token |
|---|---|---|---|
| Card padding | 15px, hardcoded | 20px | `card md` scale |
| Hover elevation | `--shadow-md` (one level too weak) | `--shadow-lg` | |
| Name text size | 17px (off-scale) | 18px | `--text-md` |
| Bio text size | 13.5px (violates "never below 14px") | 14px | `--text-sm` |
| Available badge | Custom coral/accent colors | Real success colors | `--success` / `--green-100`/`--green-700` |
| Verified mark | Hand-built circle, hardcoded hex, no shape meaning | Real `VerifiedMark` component | shield shape, `--green-600`, `--paper` rim |

**Left as documented, not "fixed":** the walk-time chip's own styling and the 13px icon size. Both are open questions, not confirmed drift (see below).

**Worth noting:** I checked several of these values against the real prototype source, not just the docs, and confirmed the walk-chip's padding and the card's 14px gap are exact matches to the real, off-token production code. That raised a real tradeoff: fixing card padding to the token scale (15px to 20px) made the build more token-correct but less pixel-faithful to the actual reference, since the reference itself doesn't follow its own scale.

## Accessibility: found and fixed

| Issue | Reference | Fix |
|---|---|---|
| Card's outer wrapper was a `div` with `cursor:pointer` only, mouse-clickable but not keyboard-reachable | WCAG 2.1.1 Keyboard (Level A) | Rebuilt as a real `<button type="button">`; Tab reaches it, Enter/Space activates it |
| Verified mark had no `role`, `aria-label`, or `title`, invisible to screen readers | WCAG 1.1.1 Non-text Content; docs: "the mark exposes a title" | Real `VerifiedMark` component ships `role="img"` + `"Background-checked"` label automatically |
| Verified mark was a plain circle, so the shape-only signal was gone | Docs' own DON'T: "never substitute a plain green dot or check for the shield" | Real `VerifiedMark` renders the actual olive shield + cream check |
| Contrast: walk-time chip text on its background | WCAG 1.4.3 AA (4.5:1) | Checked: **5.69:1**, passes, no fix needed |

## Guardrail (Practice 5.4): measurable before and after

I wrote `guardaril.md`, tying every rule back to Vello's **"trust scales locally"** bet, not just style preference: real tokens only, no invented values or assets, a real a11y baseline, "compare against reference before done."

I regenerated the card from a **plain instruction** (no hand-corrected spec) with the guardrail active, and the result matched the reference on the first try. Padding, shadow, text sizes, badge color, and the verified-mark's shape, label, and keyboard bugs (all things that needed manual, one-by-one fix instructions in the earlier rounds) were correct without any follow-up this time. It also flagged two new honest gaps on its own instead of guessing (see below).

## Unresolved: questions for the designer

1. **Layout conflict:** the documented `ProviderCard` places rating under the name and price in its own column; the Home screen places rating next to the distance pill and price above it. I built from the Home screen. Which should new components follow?
2. **No icon-size token or scale exists** anywhere in the system (Tag=16px, card chevron=15px, this icon=13px, all independent). Left at 13px and flagged, rather than guessing a fix.
3. **No container-width token matches the reference card's width.** Used a token-derived value (`calc(var(--container-app) + var(--space-12))`) instead of a raw guessed px.
4. **Three items observed on the original reference screen itself** (not introduced by the AI): the tag/chevron crowding, the price line's spacing, and the walk-time chip showing both an icon and the word "walk" (redundant). Intentional, or worth fixing at the source?
5. **Should the card be rebuilt on the real `ProviderCard` component**, now that it's accessible via the bundle? Declined for now, since it would silently resolve question #1 instead of leaving it open.
