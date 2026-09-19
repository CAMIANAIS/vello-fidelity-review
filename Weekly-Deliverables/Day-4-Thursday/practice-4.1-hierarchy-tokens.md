# Practice 4.1 — Rank the hierarchy, find the tokens behind it (~15 min · individual · no AI)

Screen: Vello's polished home screen (vello-product.vercel.app), viewed cold.

## 1. "Trusted hands on your block." (headline)
**Why the eye goes there:** scale + weight — the biggest, boldest text on the screen, sitting at the top.
**Token check:** `font-size: 26px`, hardcoded — checked against the real type scale (11/12/14/16/18/20/24/30/38/48/60/76) and 26 isn't on it, sitting between `--text-xl` (24) and `--text-2xl` (30). One-off. Weight `800` and letter-spacing `-0.02em` both happen to *equal* real tokens (`--fw-extra`, `--ls-tight`) but are hardcoded as raw numbers, not wired through `var()`.

**Why "correct number, not wired" still matters** (the number is right today, but the code isn't):
1. **Drift risk.** If `--fw-extra` is ever redefined (e.g. 800 → 750), every `var(--fw-extra)` usage updates automatically everywhere. This hardcoded `800` doesn't move — it silently falls out of sync the day the token changes, even though it's correct today.
2. **Invisible to search.** A check for "everywhere `--fw-extra` is used" — the same kind of audit done all week — won't surface this line, because it doesn't reference the token by name. It reads as clean in that report while actually being unverified debt sitting outside it.
3. **Erases intent.** `var(--fw-extra)` tells the next person "this is deliberately the system's extra-bold step." A bare `800` tells them nothing — on purpose, or a typo for `700`? They can't tell from the code.

"The number is correct" and "the code is correct" are two different claims — here only the first is true.

## 2. The green floating "+" button
**Why the eye goes there:** color + spacing — the only solid, saturated color shape on the screen, floating alone at a section seam, isolated from anything competing for attention.
**Token check:** mostly clean — `background: var(--brand-primary)`, `color: var(--brand-on-primary)`, `border-radius: var(--radius-pill)`, `box-shadow: var(--shadow-lg)` are all real tokens, correctly wired. Size `52px × 52px` isn't on the spacing scale — neighbors are `--space-12` (48) and `--space-16` (64); 52 is a one-off between them.

## 3. The "Available" badge on Maya's card
**Why the eye goes there:** color — the only warm-toned accent on a screen that's otherwise olive, cream, and gray, sitting where the eye naturally continues after the headline. This is a real, independently-true fact about the image, not invented to justify revisiting a known bug.
**Token check:** `color: var(--coral-700); background: var(--coral-100)` — real tokens, correctly referenced syntactically, but the wrong variant. That color pair is `Badge`'s documented `accent` variant, reserved by the system's own guidelines for "a time-limited offer" — never a status label. "Available" should pull `success` colors.

**Honesty note for demo day:** this badge was already known as a bug from Thursday's earlier audit and Friday's fix. The fair claim is *"I recognized this one fast because I'd already audited it, not because it beat everything else in a cold first look"* — a real, legitimate skill (a trained eye catching a known failure pattern quickly), but a different claim than "this is what a brand-new user's eye lands on third." Stating it this way instead of letting it pass as a fresh perceptual finding matters, since this whole week has been about not blurring what kind of evidence something actually is.

## Hierarchy note: where prominence and importance disagree
The thing pulling the most attention on this screen is a marketing tagline that does nothing — not clickable, not personal, not time-sensitive. Meanwhile "YOUR OPEN REQUEST — Weekday afternoon walks for Juniper — 3 neighbors responded" is the one thing on the entire screen that's actually true, personal, and waiting on the user to act — and it's the quietest element on the page: small uppercase label, pale outline, no color pop, buried below the search bar. Three real neighbors already replied to this specific user, and visually it's competing for attention with decorative copy and losing. **What gets seen first isn't what matters most.**
