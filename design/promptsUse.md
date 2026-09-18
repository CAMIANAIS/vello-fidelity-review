# Vello — Prompts & Process Log
For Friday demo: process transparency (prompts used, failures, refinements — not just final output).

---

## Monday — Design process mapping

**Starter prompt used:**
> Here is Vello's product brief. Act as a senior product designer at an agency. Map the end-to-end design process for Vello v1: phases, key decisions per phase, and artifacts produced. For each phase, name one concrete thing an engineer can contribute before design starts, and one design decision that forces a data-model or API decision. Be specific to Vello — its hyperlocal scope, three roles, and trust model.

**Output:** Six-phase process map (Discover → Handoff), one decision + one artifact per phase.
Artifact: https://claude.ai/artifact/6v2sxFt3rQra9iUA6tabLu

**Open process gap (flag honestly on demo day):** the task asked to challenge the answer at least twice and document two pushbacks. That back-and-forth wasn't captured in writing — worth naming live in the demo rather than pretending it was written down.

---

## Tuesday — Research synthesis

**Starter prompt used:**
> Synthesize these interview transcripts. For each theme: a name, how many participants mentioned it, 2 verbatim quotes with participant ID, and any contradicting evidence. Separate what users SAID from what you INFER. Do not invent quotes. Rank themes by how well the evidence supports them. At the end, list the data entities/attributes the verified themes imply.

**Audit prompt used (Practice 2.3):**
> For the theme you ranked #1, list every verbatim quote that supports it, with participant ID and roughly where it appears. Then list any evidence that contradicts or complicates it. Finally, name the data entities and attributes this theme implies Vello must model. If the real support is thinner than your summary, say so.

**Failure caught + refinement:** first pass counted Theme 1 ("trust is a transferred vouch") as 5/6 participants in support. Auditing back to verbatim quotes showed P02 was actually a direct contradiction, not a supporter — he wants formal verification, not just vouching. Corrected to "2 strong, 2 adjacent, 1 direct contradiction" — a materially weaker, more honest claim than the first pass.

---

## Wednesday — Flow + state/API contract

**Starter prompt used:**
> Draft a user flow for [verify a provider, as admin] in Vello as a flowchart. Include every screen, user decision, and system state — loading, error, empty, success. Mark assumptions with [ASSUMPTION] so I can verify them against the brief. Then turn it into a state table (state → trigger → API status → UI) and a list of endpoints with their states.

**Output:** Full flow diagram + per-screen state tables + API contract.
Artifact: https://claude.ai/artifact/11BEDoUTzer4u5CKTDDY7L

**Known failure, not yet closed:** that session couldn't load the live design system (no browser access at the time), so the flow was built from generic two-sided-marketplace patterns, not Vello's real admin screens. Its own "named gap" section says so explicitly — it's a hypothesis, not a verified diff. **Still open:** go check the real Admin desk screen in the prototype and confirm or correct the gap before presenting it as a finding.

---

## Thursday — Component audit (Maya Rivera / NeighborCard)

**Starter prompt used (AI pass, Practice 4.2):**
> Critique this Vello screen against the attached design system. Structure it as: 1) visual hierarchy, 2) consistency with design-system tokens, 3) accessibility (contrast ratios, touch targets, focus, semantics), 4) missing UI states. For each issue: severity, the evidence, and the principle or standard it violates. Do not soften findings.

**Human pass (no AI) — final version:**
| Looked at | Mechanism | Token or one-off |
|---|---|---|
| Available tag | color | wrong component/variant — should be Badge `variant="success"`, not an accent-colored custom tag |
| Available tag + arrow crowding | position | one-off |
| Price ($24 / walk) spacing | position | one-off |
| Feet icon + word "walk" | redundant copy | one-off |

**Verified badge check (against Monday's own artifact, which said "olive shield, never a dot"):** checked directly against the real card — it IS a shield. Not a violation. (A hypothesis tested and disproved — kept as a legitimate finding, not discarded.)

**AI pass findings:** muted text contrast 4.51:1 (barely passes, small font = real risk); `.svc__fav` heart button hardcoded 32×32px (below 44px comfortable target); `.nb--featured` card marked by shadow only, no icon/label (color-alone signal); heart button is a `<span role="button">` with no `tabIndex`/`onKeyDown` — invisible to keyboard users.

**Comparison — what each pass uniquely caught:**
- Only human: wrong badge component/variant, redundant icon+text, trust-hierarchy note (badges draw the eye, but a named review — per Tuesday's research — is what actually builds trust, and there's no fast path from the star rating to a review).
- Only Claude: touch target size, keyboard/focus bug, color-only signal, contrast risk.
- Overlap/disagreement: none — the two passes were fully complementary, not redundant.

---

## Friday — Spec sheet + build prompt

**No-AI spec sheet (Practice 5.1) — full table, v2 (includes the four rows missed in v1: name, price, badge, icon size):**

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
| Tappable chevron | top:14px right:14px, 26×26 circle, icon 15×15, `--text-subtle→--text-brand`, `--surface-sunken→--brand-primary-tint` | exact match to `.vl-card--tappable` — ✓ resolved |
| Element type (`as`) | real `<button type="button">` | matches rule: tappable card needs a real focusable element — ✓ passes |
| `featured` prop | boolean class, shadow-only | confirmed real documented prop — ✓ resolved |
| Red dot / unread indicator | not present | not applicable — confirmed absent, not a gap |
| Bio text size | 13.5px | documented principle "body text never below 14px" — ❌ real rule violation |
| Tap target (whole card) | 44px+ | documented principle "never below 44px" — ✓ passes |
| Name text ("Maya Rivera") | `font-family:var(--font-display); font-weight:700; font-size:17px; color:var(--text-strong)` | ❌ **corrected in v2 audit** — font-family/color are real tokens, but 17px is NOT on the real type scale (16=base, 18=md). Originally marked resolved in v1; caught on re-check against the real `typography.css` file. |
| Price ("$24 / walk") | `font-family:var(--font-mono); font-size:14px; font-weight:600; color:var(--text-strong)`; "/ walk" is a plain `<span>`, same style as "$24" — no separate styling | on-system, one token set covers the whole line — ✓ resolved |
| Available badge | custom markup, `color:var(--coral-700); background:var(--coral-100)`, dot `var(--coral-500)`; padding `5px 11px 5px 9px`; font 12px; font-weight 600 hardcoded | ❌ off-system — this is exactly the `accent` variant's color pair, and the docs say "do not use accent badges for anything but a time-limited offer." Should be `<Badge variant="success" size="sm" dot>Available</Badge>`. Padding also matches no defined size step. |
| Walk-time icon color | inherits `currentColor` = `var(--green-700)` | ✓ resolved |
| Walk-time icon size | `13px` (hardcoded) | ⚠️ **unresolved** — checked the full token list plus every icon-shipping component (Tag=16px, Card chevron=15px, this=13px): no icon-size token or scale exists anywhere in the system. System-completeness gap, not a guessed answer. |
| Rating component | `<Rating value={n.rating} size="sm" />`, real import | ✓ resolved |
| Rating size | "sm" → 14px stars | ✓ resolved |
| Star color | `var(--rating)` amber | ✓ resolved |
| Value text ("4.9") | tabular numerals, `var(--text-strong)` | ✓ resolved |
| Gap: stars ↔ number | 6px | no matching `--space` token — but the system's own base `Rating` component has the same gap. Not app-level drift; it's baked into the system itself. |
| Walk-time chip element | plain `<span>`, not `Tag` | ⚠️ reasonable (pure info, not a filter) but skips the real `Tag` component's `interactive={false}` mode entirely |
| Walk-time chip font | `var(--font-mono)` | Tag uses `var(--font-sans)` — ❌ different font family |
| Walk-time chip padding | `3px 9px 3px 7px` | Tag's real padding is `8px 14px` — ❌ off-system. Note: 14px itself isn't on the official `--space` scale either (jumps 12→16) — the system's own Tag component breaks its own scale. Not only an AI drift, a system-level inconsistency. |
| Walk-time chip colors | `--green-700` / `--green-50` / `--green-200` | Tag's default is neutral (`--text-body`/`--surface-card`/`--border-strong`) — invented its own color scheme instead of reusing Tag's states |
| Walk-time chip radius | `var(--radius-pill)` | matches Tag's radius — ✓ resolved |

**Handoff question (from the one unresolved row):**
> There's no icon-size token in the system — Tag uses 16px, Card's chevron uses 15px, this walk-time icon uses 13px, all hardcoded independently. Should there be a defined icon-size scale, and if so, does 13px stay or snap to a nearby value?

**"Four questions" pass (Ravn framework — job / main action / success / failure), answered before building:**
- **Job:** help the requester decide whether to trust and book this neighbor.
- **Main action:** tap the card to see full booking details.
- **Success:** they open full details and can complete a booking.
- **When it fails / empty:** no rating yet → "Not rated yet" instead of stars; no photo → initials instead of an image; provider currently unavailable → tag shows "Unavailable," not "Available."

**Build prompt (final, ready to run):**
> Build this exact provider card component from Vello, using only tokens from the attached design system — no hardcoded hex, px, or spacing values outside the token scale.
> Here is the reference screenshot: [Maya Rivera card image]
> Here is my own spec, property by property, with the correct official token for each (not the broken production value where I found drift): [full v2 table above]
>
> This card's job is to help the requester decide whether to trust and book this neighbor. The main action is tapping the card to see full details. Build these states explicitly, don't invent your own version of them:
> - Success: normal card as specced.
> - No rating yet: show "Not rated yet" instead of stars — don't fake a rating.
> - No photo: show initials instead of a broken image.
> - Unavailable: tag reads "Unavailable," not "Available."
>
> Where you have to invent or guess something I didn't specify, say so explicitly instead of silently picking a value — I want to review those separately.

**Prompt v2 (new project — swapped the vague "attached design system" for the real token files):**
> Same opening, states, and "flag if you guess" lines as v1 above, but with the actual `colors.css`, `spacing.css`, and `typography.css` file contents pasted in full, replacing the vague design-system reference. Reason: discovered the docs page is a JS app with nothing for a tool to read — the real token files are the only machine-readable source.

**Output:** before/after table — Card padding 15px→20px (`card md`), hover elevation `--shadow-md`→`--shadow-lg`, name size 17px→18px (`--text-md`), bio size 13.5px→14px (`--text-sm`), Available badge `--coral-100/700`→`success`/`--green-100/700`. Walk-time chip and icon-size left open on purpose, with reasons stated (see findings.md).

**Prompt v3 (same v2 project — three follow-up fixes, sent as a short message, not a full rebuild):**
> - Verified badge is currently a circle (`border-radius:999px`, solid background, white border) — change to the real shape: olive shield with a cream check, `var(--paper)` for the rim. If you don't have the shield asset, say so instead of approximating with a circle.
> - Verified badge has no `title` or `aria-label` — add `title="Background-checked"` (or equivalent aria-label).
> - The card's outer wrapper is a `div` with `cursor:pointer` — change to a real `<button type="button">`, or add `tabIndex={0}` plus a keyboard handler for Enter/Space. Keep everything else exactly as it is.

**Failure caught + refinement — three attempts, same v3 round:**
- **v3a:** sent the 3-bullet fix above. Claude said it didn't have a real shield icon asset — honest flag, not a guessed shape.
- **v3b:** pointed it to Lucide (docs' own "Getting started" section says icons come from Lucide) — superseded before sending, once a better option was found.
- **v3c:** discovered the design system exports a real `VerifiedMark` component. Sent: "Don't build the verified mark manually — use the real `VerifiedMark` component: `<VerifiedMark status="verified" size={20} title="Background-checked" />`." Claude refused again — it could only see the docs page (empty JS shell), not the actual bundle defining `window.VelloDesignSystem_182a1b`, so it couldn't confirm the component was real. Asked for the bundle URL directly.
- **v3d — this is the one that worked:** sent the real bundle URL, `https://vello-design-system.vercel.app/_ds_bundle.js` (found in the Overview page's "Getting started" section, read earlier that day). Claude loaded it, confirmed `VerifiedMark` was real, and swapped it in — real shield shape, real `role="img"` + "Background-checked" label, both bugs fixed in one move.

**Why this is good process evidence for demo day:** Claude refused to fake the shield twice, in two different ways (no asset, then no bundle access) — both times it asked for the exact real source instead of approximating. That's the "don't guess" principle from the build prompt actually holding up under pressure.

---

## Practice 5.4 — Guardrail before/after

**Guardrail file (`guardaril.md`):** tokens to use, banned hardcoded values, a11y baseline, "compare against reference before done" — see file for full text.

**Test setup:** new project. Guardrail pasted first, then the real `colors.css`/`spacing.css`/`typography.css` + the real bundle (`_ds_bundle.js`) + the Home screen reference screenshot — but only a **plain build instruction**, not my corrected v2 spec table. Point: test whether the guardrail alone catches what I previously had to catch by hand.

**Result — matches the reference. Compare to v1 (no guardrail):**

| v1 (no guardrail) | v4 (guardrail active) |
|---|---|
| Padding 15px, hardcoded | Token-correct throughout, no manual fixes needed |
| Hover shadow one level too weak | Correct on first try |
| Name/bio text off-scale | Correct on first try |
| Badge used wrong color family (accent, not success) | Used real `Badge`/`Rating`/`Avatar`/`VerifiedMark` components directly from the bundle — not redrawn |
| Verified badge: fake circle, no label | Real `VerifiedMark`, real shield, real label — first try |
| Card wrapper: unfocusable `div` | Real focusable `<button>`, chevron correctly `aria-hidden` — **resolved the keyboard bug on its own, no follow-up needed** |

**New catches v1/v2 never made:** no container-width token matches the reference (430px forces a line break the reference doesn't have) — computed `calc(var(--container-app) + var(--space-12))` instead of guessing a raw px, and flagged it. No photo asset available — flagged, rendered the real Avatar initials fallback instead of faking a portrait.

**Conclusion:** the guardrail measurably reduced drift — most of what required manual, one-by-one fix instructions in v1→v3 was correct on the first try here, and the model caught two new gaps openly instead of guessing.
