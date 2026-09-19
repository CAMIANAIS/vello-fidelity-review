# Friday — Process Log

## "Four questions" pass (Ravn framework — job / main action / success / failure), answered before building
- **Job:** help the requester decide whether to trust and book this neighbor.
- **Main action:** tap the card to see full booking details.
- **Success:** they open full details and can complete a booking.
- **When it fails / empty:** no rating yet → "Not rated yet" instead of stars; no photo → initials instead of an image; provider currently unavailable → tag shows "Unavailable," not "Available."

## Build prompt (final, ready to run)
> Build this exact provider card component from Vello, using only tokens from the attached design system — no hardcoded hex, px, or spacing values outside the token scale. Here is the reference screenshot: [Maya Rivera card image]. Here is my own spec, property by property, with the correct official token for each: [Practice 5.1 v2 table]. This card's job is to help the requester decide whether to trust and book this neighbor. Build these states explicitly: Success (normal), No rating yet ("Not rated yet," don't fake a rating), No photo (initials instead of a broken image), Unavailable (tag reads "Unavailable"). Where you have to invent or guess something I didn't specify, say so explicitly instead of silently picking a value.

**Prompt v2** (new project — swapped the vague "attached design system" for the real token files): same opening/states/"flag if you guess" lines, but with the actual `colors.css`, `spacing.css`, `typography.css` file contents pasted in full. Reason: the docs page is a JS app with nothing for a tool to read — the real token files are the only machine-readable source.

**Output:** before/after table — Card padding 15px→20px, hover elevation `--shadow-md`→`--shadow-lg`, name size 17px→18px, bio size 13.5px→14px, Available badge coral→success colors. Walk-time chip and icon-size left open on purpose (see `findings-detail.md`).

## Prompt v3 (same v2 project — three follow-up fixes)
> - Verified badge is currently a circle — change to the real shape: olive shield with a cream check, `var(--paper)` for the rim. If you don't have the shield asset, say so instead of approximating.
> - Verified badge has no `title`/`aria-label` — add one.
> - The card's outer wrapper is a `div` with `cursor:pointer` — change to a real `<button type="button">`, or add `tabIndex={0}` + keyboard handler.

**Failure caught + refinement — three attempts, same round:**
- **v3a:** sent the 3-bullet fix. Claude said it didn't have a real shield icon asset — honest flag, not a guessed shape.
- **v3b:** pointed it to Lucide (docs' own "Getting started" says icons come from Lucide) — superseded before sending.
- **v3c:** discovered the design system exports a real `VerifiedMark` component. Sent an explicit instruction to use it. Claude refused again — it could only see the empty docs-page shell, not the real bundle defining `window.VelloDesignSystem_182a1b`, so it couldn't confirm the component was real. Asked for the bundle URL directly.
- **v3d — this is the one that worked:** sent the real bundle URL, `https://vello-design-system.vercel.app/_ds_bundle.js`. Claude loaded it, confirmed `VerifiedMark` was real, and swapped it in — real shield shape, real `role="img"` + "Background-checked" label, both bugs fixed in one move. See `images/answersClaude` for Claude's refusal screenshots and `images/verified-shield-aria.png` / `images/tabkeyboardisworking.png` for the fixed result.

**Why this is good process evidence:** Claude refused to fake the shield twice, in two different ways (no asset, then no bundle access) — both times it asked for the exact real source instead of approximating. That's the "don't guess" principle from the build prompt actually holding under pressure.

## Practice 5.4 — Guardrail before/after
See `practice-5.4-guardrail.md` for the full test setup and results table.

**Conclusion:** the guardrail measurably reduced drift — most of what required manual, one-by-one fix instructions in v1→v3 was correct on the first try in v4, and the model caught two new gaps openly instead of guessing.
