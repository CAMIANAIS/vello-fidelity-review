# Practice 5.3 — Accessibility audit of a generated Vello screen (~20 min · with Claude, then verify)

Ran the generated ProviderCard through the WCAG/APG lens: semantic HTML, keyboard focus, contrast (AA), labels, correct ARIA.

## Issue 1 — Card wrapper not keyboard-reachable
The card's outer tappable wrapper was a plain `<div>` with `cursor:pointer` and a hover shadow — no `@type:button`, no `tabIndex`, no keyboard handler.
- **Reference:** WCAG 2.1.1 Keyboard (Level A) — all functionality must be operable via keyboard, not just mouse/pointer. Also my own Thursday spec rule: "tappable card needs a real focusable element."
- **Impact:** mouse users can open the card; keyboard-only users cannot Tab to it or activate it with Enter/Space. Same bug type as Thursday's `.svc__fav` heart-icon finding.
- **Fix:** changed the wrapper to a real `<button type="button">` — see `component/provider-card.tsx`.

## Issue 2 — Verified mark had no accessible label
The verified checkmark div had no `role`, `aria-label`, or `title` — confirmed empty by inspecting the raw markup directly (see `images/arialabel.png`: DevTools shows Name blank, Role "generic," Keyboard-focusable 🚫).
- **Reference:** docs' own accessibility section ("the mark exposes a title so hover and screen readers both surface the status") + WCAG 1.1.1 Non-text Content (Level A).
- **Impact:** a screen reader user gets no indication this provider is verified at all.
- **Fix:** added `title="Background-checked"`, matching the real component's documented default label — see `component/verified-mark.tsx` (`role="img"` + `aria-label`).

## Issue 3 — Verified mark was a plain circle, not a shield
Built as `border-radius:999px`, solid `#557E26` background, `2.5px solid #FFFFFF` border — the docs explicitly ban this: "Never substitute a plain green dot or check for the shield — the shape is the accessible signal."
- **Reference:** docs' own DON'T list (VerifiedBadge) + the accessibility principle that shape carries meaning, not color alone.
- **Impact:** this is the exact violation Monday's own shield-vs-dot rule warns against — the human-made reference card passed this check (confirmed Thursday), but the AI's rebuild reintroduced it.
- **Fix:** replaced the circle with the real `VerifiedMark` component — olive shield, cream check, `var(--paper)` rim (see `images/verified-shield-aria.png` and `images/tabkeyboardisworking.png`).

## Contrast check
Walk-time chip text `--green-700` (`#466621`) on `--green-100` (`#EBF1DB`, close proxy for the real `--green-50`) = **5.69:1** — passes AA (4.5:1 required), checked via WebAIM Contrast Checker (`images/contrast1.png`). Real background is lighter, so the actual ratio is at least this good.

## Highest-severity fix applied
The keyboard-unreachable card wrapper (Issue 1) and the invisible-to-screen-readers verified mark (Issues 2+3) were fixed together in one pass, since both trace to the same root habit: hand-approximating a UI element instead of using or matching the real accessible component.
