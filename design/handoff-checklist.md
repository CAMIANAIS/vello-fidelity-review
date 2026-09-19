# Vello Handoff Checklist

Questions and asks for design/product, gathered across the whole week, not just Friday.

## Monday: process
- [ ] Done now: the exercise asked for two documented pushbacks against Claude's first process map. That back-and-forth happened live in the session and wasn't written down at the time. It's written down now, in the one-page reflection.
- [ ] Handoff step needs to say explicitly that trust-carrying elements (VerifiedMark, Badge, Rating) hand off as real components, not just their token values. Tokens can be correct while the meaning is still gone, exactly what happened when the verified mark got rebuilt as a plain circle.
- [ ] Validate lists contrast, tap-target, and "is unverified honestly visible" side by side with no signal that only the last one is load-bearing for Vello specifically. Worth flagging which check actually matters most before someone (or an AI) treats them as equally routine.

## Tuesday: research to data model
- [ ] Add **Vouch/Recommendation** as its own entity (`voucher_id`, `provider_id`, `times_used`, free-text comment, timestamp), not folded into a generic star rating. P01, in her own words: "used him eleven times... that's the whole product."
- [ ] Keep **Provider.verification** as a separate, coexisting attribute set (`id_verified`, `background_check_status`, `references`) alongside vouching. P02's evidence shows the platform needs both, not one instead of the other.
- [ ] Consider a **known_by_requester** boolean per vouch, so the UI can distinguish "someone you actually know" from "a stranger nearby who also used this provider."
- [ ] Consider a **vouch_count / corroboration-weighting** attribute. P06's "three unknowns might be worth one Denise" implies aggregated anonymous vouches can partially substitute for a personally-known one.
- [ ] Add **Review.dispute_status** (none/disputed/under_review/resolved). "Unchallengeable" is really the absence of this state today, not a bug in an existing one.
- [ ] Add **Provider.fee_structure** (percentage or flat, plus rate). The "forever-percentage cut" complaint implies the fee model is one fixed rule today, not a per-provider attribute.
- [ ] Add **onboarding_started_at / onboarding_completed_at** timestamps. Same field pair a separate quantitative question (is onboarding faster now?) already needed, two independent angles converging on one missing field.

## Wednesday: flow / API contract
- [ ] Confirm the **browse-first** happy path (vs. the brief's "post a need" first) is the intended v1 flow. I went with browse-first for a tighter 5-6 step path, but it needs sign-off, not assumption.
- [ ] Still open: the flow was drafted without live access to the real Admin screen, so its "named gap" is a hypothesis, never verified against the actual prototype. Flagging this honestly rather than presenting it as confirmed.

## Thursday: component audit
- [ ] Wrong badge component/variant used for "Available" in the source prototype (accent/coral instead of success/green). Worth fixing at the source, not just in the AI-generated copy.
- [ ] Walk-time chip shows both a feet icon and the word "walk," which is redundant. Confirm intentional or simplify.
- [ ] Tag/chevron visual crowding and the price line's spacing. Both found on the original reference screen; confirm intentional or design debt.

## Friday: component fidelity
- [ ] **Layout conflict:** the documented `ProviderCard` and the Home screen's card place rating and price differently. Which should new builds follow?
- [ ] **No icon-size token/scale exists** anywhere in the system (Tag=16px, card chevron=15px, walk icon=13px, all independent). Should one be defined?
- [ ] **No container-width token matches the actual reference card's width.** Should one be added, or is the reference intentionally non-standard?
- [ ] Should new components be built directly on the **real `ProviderCard`/`Badge`/`Tag`/`Rating`/`VerifiedMark`** components (confirmed accessible via the bundle) instead of hand-approximated each time?
