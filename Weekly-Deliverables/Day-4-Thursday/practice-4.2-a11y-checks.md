# Practice 4.2 — Run the accessibility checks, including semantics (~20 min · with Claude to assist)

Screen audited: Vello home screen (skill used: `/design-critique`).

## 1. Contrast — real numbers
- Body text `--text-body` (`#3D3F37`) on white card `--surface-card` (`#FFFFFF`) → ratio = **10.69:1** → PASS, very strong.
- Muted text `--text-muted` (`#6E7064`), used in `.svc__byname` (12.5px) and the unit label in `.nb__price` (12px), on the cream background `--color-bg` (`#F6F2E7`) → ratio = **4.51:1** → technically PASS, but barely (only 0.01 above the 4.5 minimum), at very small font sizes. Real risk.

## 2. Touch target — suspect element found
`.svc__fav` (the heart "favorite" button on each service card) is coded as exactly `width:32px; height:32px;`. Below the 44pt comfortable tap target (though above the 24×24 CSS px hard floor). Concrete flag: 32×32px, not 44×44.

## 3. Color-alone — real signal found
`.nb--featured` (a "featured neighbor" card) is marked ONLY with `box-shadow: var(--shadow-brand)` (a soft glow) and a transparent border — no icon, no "Featured" text label anywhere in the code. A user with low vision, or anyone in bright light, may never notice this card is different from a regular one.

## 4. Semantics / focus risk — real bug found in the code
The same heart button (`.svc__fav`) is written as:
```
<span className="svc__fav" role="button" aria-pressed={faved} aria-label="..." onClick={...}>
```
It's a `<span>`, not a real `<button>`. It has good `aria-label` and `aria-pressed` — but no `tabIndex` and no `onKeyDown` handler. A real `<button>` gets keyboard focus and Enter/Space activation for free; a `<span role="button">` does not, unless added manually. Result: a keyboard-only user cannot Tab to this button or activate it — invisible to keyboard navigation entirely, even though a mouse user can click it fine.

**Good practice also found:** almost everything else on this screen (NeighborCard, LocationPicker, the "open request" card, category tags) already uses real `<button type="button">` elements — this codebase mostly gets semantics right, which makes finding #4 a strong, specific catch, not a generic complaint.
