# Practice 4.3 — Token or hardcode? (~15 min · with Claude) (skill used: `/design-system`)

Full audit of the Home-screen source (decoded from the prototype file) against the real Vello token list.

## On-system (correct, matches a token)
- Font sizes: 11px (`--text-2xs`), 12px ×5 (`--text-xs`), 14px ×2 (`--text-sm`), 16px (`--text-base`), 18px (`--text-md`), 20px (`--text-lg`)
- Spacing: 4px, 8px ×3, 12px ×4, 16px ×2, 20px ×5, 24px — all match `--space-1` through `--space-6`
- All colors — every single color on this screen uses `var(--token)`, except two spots flagged below

## Off-system (real consistency risks, with the token each should map to)

**Font sizes — no token matches these at all:**

| Value found | Where | → Map to |
|---|---|---|
| 13.5px | `.nb__bio` | `var(--text-sm)` 14px |
| 15.5px | `.svc__title` | `var(--text-md)` 18px, or `--text-base` 16px |
| 12.5px (×3) | `.svc__byname`, `.svc__rate`, `.orq__count` | `var(--text-xs)` 12px |
| 10.5px | `.orq__eyebrow` | `var(--text-2xs)` 11px — even smaller than the smallest defined token |
| 19px | `.loc--inline .loc__name` | `var(--text-md)` 18px |
| 15px | `.loc--pill .loc__name` | `var(--text-sm)` 14px |
| 26px | `.head__greet` (the big hero heading!) | `var(--text-xl)` 24px, or `--text-2xl` 30px |
| 17px (×2) | `.nb__name`, `.svc__price b` | `var(--text-base)` 16px |
| 13px (×2) | `.section__title small`, `.maplink` | `var(--text-sm)` 14px |

**Spacing — the biggest pattern:** 14px appears 6+ times (`.section__head` margin-bottom, `.section__tools` margin, `.pop`/`.svc` gap, `.nb__tap` offset, etc.) — but no `--space-*` token equals 14 (the scale jumps 12 → 16). This isn't one mistake, it's a repeated "phantom" value used everywhere instead of a real token. → Pick `--space-3` (12px) or `--space-4` (16px) consistently, or flag 14px as needing to become an official token.

Other spacing one-offs, no token exists for any: 9px, 7px, 6px, 11px, 15px (×3), 34px, 10px → nearest real tokens are `--space-1` (4px) or `--space-2` (8px) for small ones, `--space-3`(12)/`--space-4`(16) for mid ones.

**Color — 2 real hardcoded values:**
- `.svc__cat` uses `color:#fff` → should be `var(--text-inverse)` or `var(--white)`.
- `.svc__cat` also uses `background:rgba(27,28,24,.62)` — those exact numbers (27,28,24) are `--ink-900` in disguise, written as raw RGB with opacity instead of the token. → `rgba(var(--ink-900-rgb), .62)` if it exists, or flag that the system has no "overlay/scrim" token defined yet.

## Bottom line
This screen honors the color tokens almost perfectly, but font sizes and spacing drift constantly into fractional, in-between numbers that don't exist anywhere in the official scale — 14px and the .5px font sizes are the clearest, most repeatable evidence of "AI honored the palette but drifted the scale." This is the exact lens Friday uses on real code.
