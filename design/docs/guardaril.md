# Vello Guardrail

## Tokens to use

- Colors: real colors.css semantic aliases first (--surface-card, --border-default,
  --text-strong/body/muted, --success/--success-tint, --accent/--accent-tint,
  --rating, --paper) over raw scale values when a semantic name exists.
- Spacing: --space-0 through --space-32 only (4, 8, 12, 16, 20, 24, 28, 32, 40, 48...).
- Radius: --radius-xs/sm/md/lg/xl/2xl/pill.
- Type: --text-2xs(11) through --text-6xl(76); --fw-regular/medium/semibold/bold/extra;
  --font-display/--font-sans/--font-mono.
- Shadows: --shadow-xs/sm/md/lg/xl/inset/brand.

## Banned

- No hardcoded hex or raw px outside the scales above.
- No inventing a color pair when a semantic token already exists for that meaning
  (e.g. a status color has --success/--success-tint — don't build a custom one).
- No approximating a missing asset (icon, shield, etc.) — say so explicitly, don't fake it.
- No silently resolving an open design conflict between two references — flag it.
- No rounding one scale to match a different, unrelated scale (e.g. icon size to type size).

## Accessibility baseline

- Body text never below 14px. Tap targets never below 44px. Contrast never below 4.5:1.
- Any tappable element must be a real focusable control (<button>, or tabIndex + keyboard
  handler) — never a div/span with only onClick.
- Status icons/marks need a real accessible label (title/aria-label/role="img").
- Never replace a shape+color signal with color/shape alone.

## Before declaring done

- Compare the render against the reference screenshot, property by property, before
  saying it's finished.
- Anything you can't verify against a real token or the reference: mark unresolved,
  say so — don't guess.
