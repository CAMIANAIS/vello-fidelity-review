# Practice 5.1 — Spec it without an inspect panel (~20 min · individual · no AI)

Component: the ProviderCard (Maya Rivera), spec'd against the Vello home screen export and design system. This is the corrected v2 pass — it includes four rows missed in v1 (name, price, badge, icon size), caught on re-check against the real token files.

| Property | Observed value | Design token / status |
|---|---|---|
| Background | `#FFFFFF` | `var(--surface-card)` — ✓ resolved |
| Border (default) | 1.5px solid `#E5E4D6` | `var(--border-default)` — ✓ resolved |
| Radius | 20px | `var(--radius-lg)` — ✓ resolved |
| Padding | 15px (hardcoded) | Card scale: none=0/sm=14/md=20/lg=28 — ❌ off-system, matches none |
| Elevation (rest) | no shadow | flat = `box-shadow:none` — ✓ resolved |
| Elevation (hover) | `var(--shadow-md)` | should be `var(--shadow-lg)` — ❌ one level too weak |
| Elevation (featured) | `var(--shadow-brand)` | correct, separate token — ✓ resolved |
| Interactive | true, real button + cursor + onClick | default is false, explicit on is a sensible choice — ✓ resolved |
| Tappable chevron | top:14px right:14px, 26×26 circle, icon 15×15 | exact match to `.vl-card--tappable` — ✓ resolved |
| Element type (`as`) | real `<button type="button">` | matches rule: tappable card needs a real focusable element — ✓ passes |
| `featured` prop | boolean class, shadow-only | confirmed real documented prop — ✓ resolved |
| Bio text size | 13.5px | documented principle "body text never below 14px" — ❌ real rule violation |
| Tap target (whole card) | 44px+ | documented principle "never below 44px" — ✓ passes |
| Name text ("Maya Rivera") | `font-family:var(--font-display); font-weight:700; font-size:17px` | ❌ **corrected in v2** — 17px is NOT on the real type scale (16=base, 18=md). Originally marked resolved in v1; caught on re-check against the real `typography.css` file. |
| Price ("$24 / walk") | `font-family:var(--font-mono); font-size:14px; font-weight:600` | on-system, one token set covers the whole line — ✓ resolved |
| Available badge | custom markup, `--coral-700`/`--coral-100`, padding `5px 11px 5px 9px` | ❌ off-system — this is exactly the `accent` variant's color pair; docs say don't use accent badges outside a time-limited offer. Should be `<Badge variant="success" size="sm" dot>Available</Badge>` |
| Walk-time icon size | `13px` (hardcoded) | ⚠️ **unresolved** — checked the full token list and every icon-shipping component (Tag=16px, chevron=15px, this=13px): no icon-size token or scale exists anywhere in the system |
| Rating component | `<Rating value={n.rating} size="sm" />` | ✓ resolved |
| Star color | `var(--rating)` amber | ✓ resolved |
| Walk-time chip element | plain `<span>`, not `Tag` | ⚠️ reasonable (pure info, not a filter), but skips the real `Tag` component's `interactive={false}` mode |
| Walk-time chip font | `var(--font-mono)` | Tag uses `var(--font-sans)` — ❌ different font family |
| Walk-time chip padding | `3px 9px 3px 7px` | Tag's real padding is `8px 14px` — ❌ off-system (note: 14px itself isn't on the official `--space` scale either — a system-level inconsistency, not only an AI drift) |
| Walk-time chip colors | `--green-700`/`--green-50`/`--green-200` | Tag's default is neutral — invented its own color scheme instead of reusing Tag's states |

## Handoff question (from the one unresolved row)
> There's no icon-size token in the system — Tag uses 16px, Card's chevron uses 15px, this walk-time icon uses 13px, all hardcoded independently. Should there be a defined icon-size scale, and if so, does 13px stay or snap to a nearby value?
