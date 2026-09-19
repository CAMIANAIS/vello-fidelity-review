Findings (v2 audit, cross-checked against real token files):

- Name text is off-scale, and I missed it in v1. I'd marked 17px "Maya Rivera" as resolved. Real type scale: 16 (base), 18 (md) — 17 lands on neither. Same phantom-value pattern as the 14px gap issue, just in a component I called "clean" too fast.
- The design system breaks its own rule. Tag's real, documented padding is 8px 14px — but 14px isn't on the official --space scale either (jumps 12→16). So this isn't only AI drift. The system's own components don't always follow the system's own tokens.

Open questions for the designer:

▎ ProviderCard docs place rating under the name, price in its own column. The Home screen places rating next to the pill, price above it. I built from the Home screen — is that the right call, or should new components match the documented ProviderCard layout?

▎ Three items caught during Thursday's human pass, found on the original reference screen itself (image (1).png) — not introduced by the AI build, so my card correctly inherited them rather than "drifting." Flagging as design questions, not code fixes:
▎ 1. Available tag sits close enough to the chevron arrow that they read as crowded.
▎ 2. "$24 / walk" price line's spacing reads as disconnected from the rest of the card.
▎ 3. The walk-time chip shows both a feet/walking icon and the word "walk" — redundant, since either alone would communicate it.
▎ Should any of these be corrected at the source (the reference screen/design system), or are they intentional?

Decisions made in the v2 build (kept honest to "unresolved, not guessed"):

- Walk-time chip: left as-is, did NOT switch it to Tag styling (sans, neutral, 8px 14px) even though that was offered as a fix option. This is still an open question for the designer (see above) — picking a style now would be guessing an answer, not applying a confirmed fix.
- Icon size: no --icon-* token exists anywhere in the system. Chose "leave 13px, flag it visibly" over rounding to the nearest type token (14px) — rounding would invent a false match between icon size and type size, two different scales with no documented relationship.
- Rebuild-on-real-component: after fixing the verified badge, Claude found it has access to the real `ProviderCard`, `Badge`, `Tag`, `Rating`, `Avatar` components (via the bundle) and offered to rebuild the whole card on the real `ProviderCard`. Declined, for now — the real `ProviderCard` uses the documented layout (rating under name, price in its own column), not the Home screen layout I deliberately built from. Rebuilding on it would silently answer my own open layout question instead of leaving it for the designer. Noted as a good idea to revisit later, not now.

Verified badge — resolved:

- Shape and label fixed together in one swap: replaced the custom circle div with the real `VerifiedMark` component (`window.VelloDesignSystem_182a1b`, loaded from the real `_ds_bundle.js`). Confirmed it now renders the real olive shield + cream check, `role="img"`, and the "Background-checked" label — both the shape bug and the missing-aria bug resolved at once.
- Process note: Claude correctly refused to fake the shield twice — first without a design-system project attached, then again without the bundle URL — and asked for the exact source it needed both times, instead of approximating with a circle. Real example of "don't guess" working as intended.

Accessibility findings (Practice 5.3):

- Issue: the card's outer tappable wrapper (the "group" node holding photo/name/price/pill) is a plain `<div>` with `cursor:pointer` and a hover shadow — no `@type:button`, no tabIndex, no keyboard handler.
- Reference: WCAG 2.1.1 Keyboard (Level A) — all functionality must be operable via keyboard, not just mouse/pointer. Also my own Thursday spec rule: "tappable card needs a real focusable element."
- Impact: mouse users can open the card; keyboard-only users cannot Tab to it or activate it with Enter/Space. Same bug type as Thursday's `.svc__fav` heart icon finding — visually interactive, not actually reachable.
- Fix (not yet applied): change wrapper to a real `<button type="button">`, or keep the div and add `tabIndex={0}` plus an Enter/Space key handler.

- Contrast check: walk-time chip text `--green-700` (`#466621`) on `--green-100` (`#EBF1DB`, close proxy for the real `--green-50` background) = **5.69:1** — passes AA (4.5:1 required). Real background is lighter (`--green-50`), so actual ratio is at least this good, likely higher. Checked via WebAIM Contrast Checker (screenshot saved).

- Issue: the verified checkmark is built as a **circle** (`border-radius:999px`, solid `#557E26` background, `2.5px solid #FFFFFF` border) — the docs explicitly ban this: "Never substitute a plain green dot or check for the shield — the shape is the accessible signal." Real spec for "verified" status is "Olive shield, cream check." The border should also be `var(--paper)` (`#F6F2E7`), not white.
- Reference: docs' own DON'T list (VerifiedBadge) + accessibility principle: shape carries meaning, not color alone.
- Impact: this is the exact violation my own Monday shield-vs-dot rule warns against — the human-made reference card passed this check (confirmed Thursday), but the AI's rebuild reintroduced it.
- Fix (not yet applied): shield shape, olive fill / cream check, `var(--paper)` rim — or flag as unresolved if no shield asset is available, rather than approximating with a circle.

- Issue: the verified checkmark div (`position:absolute; right:-2px; bottom:-2px;...`) has no `role`, no `aria-label`, no `title` — nothing. Inspected the raw markup directly, confirmed empty.
- Reference: docs' own accessibility section: "The mark exposes a title so hover and screen readers both surface the status." Also WCAG 1.1.1 Non-text Content (Level A) — icons that convey meaning need a text alternative.
- Impact: a screen reader user gets no indication this provider is verified at all — the trust signal is completely invisible to them, not just visually wrong-shaped (see the earlier shield-vs-circle finding).
- Fix (not yet applied): add `title="Background-checked"` (or `aria-label`) to the element, matching the real component's documented default label.

Guardrail test (Practice 5.4) — new findings, not caught in v1–v3:

- Unresolved — avatar photo: reference shows a real portrait; no image asset available, no way to generate one. Rendered the real Avatar initials fallback instead of faking a photo. Fix: pass a real photo URL when one exists.
- Unresolved — card width: the reference card's width doesn't correspond to any container token. `--container-app` (430px) forces the pill and rating onto separate lines, unlike the reference. Used `calc(var(--container-app) + var(--space-12))` = 478px to reproduce the reference's real line breaks — a token-derived value, not a guessed raw px — and flagged it rather than silently deciding.
- Conflict flagged, not silently resolved — the chevron affordance in the reference is ~28px, below the 44px tap-target baseline. Resolved the way the design system's own "tappable cards" pattern does it: the whole card is the real focusable `<button>`, chevron is `aria-hidden` decoration — not the thing that needs to hit 44px. If the chevron itself should be the control instead, it needs to grow to 44px, which changes the header layout — noted as a real tradeoff, not fixed silently either way.
