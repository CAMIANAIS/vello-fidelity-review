# Practice 2.3 — Audit a synthesis, extract the entities (~25 min · with Claude, heavy verification)

Theme audited: **"Trust is a vouch from someone known, not a platform score."**

## Verbatim quotes supporting the theme
- P01 (line 25): "Two names from people I know, yes. If it had been two names from strangers it would not have been enough. It mattered that it was Priya, because Priya would not recommend someone who was going to be weird about her house."
- P01 (line 33): "When Priya said Tomás, I knew who she meant. I could picture him. That's completely different from a photo on an app."
- P01 (line 41): "If you gave me the choice between a man with a certificate who I've never seen before and a man with no certificate who Priya has used for two years, I'm taking Priya's man. Every time."
- P01 (line 69): "It would tell me which of these people my actual neighbours have actually used. Not stars... Tell me Priya used him eleven times. That's the whole product, isn't it."
- P02 (line 37): "Denise vouched for her. That's the check."
- P02 (line 41): "Denise has known her for four years... It's a person taking responsibility, that's not the same as a company saying trust us."
- P05 (line 69): "That's my reputation, that took twenty years. I'm not lending it to a stranger."
- P06 (line 21): "Somebody who lives here has to have used them and said they were good. That's the rule."
- P06 (line 25): "The moment it's advertising, it's worthless."
- P06 (line 41): "Three unknowns might be worth one Denise."

## Contradicting or complicating evidence
- **P02 is the strongest counter-voice.** He wants formal verification too ("Proper vetting. Real checks, real ID, real references... If you did that I'd use it tomorrow, honestly, and I'd pay more for it"), while also using Denise's vouch. Both are true for him at once.
- **P01 contradicts her own stated preference in practice** — hired a sitter off pure reviews, no personal vouch, out of desperation, and it went well: "When you're stuck you'll do the thing you said you wouldn't do."
- P02 also says "I suppose the checks are for when you don't have a Denise" — vouching and formal checks may serve different situations, not compete.
- P06's aggregation comment ("three unknowns = one Denise") complicates the "must be someone I personally know" framing.
- P03 contributes no quote to this theme at all — she and her daughter fall back on generic reviews because no local vouching network is available to them.

## Data entities/attributes this theme implies
- **Vouch / Recommendation** as its own entity (not folded into a star rating): `voucher_id` (a specific named user, not anonymous), `provider_id`, `times_used`, free-text comment, timestamp.
- **Provider.verification** as a separate, coexisting attribute set (`id_verified`, `background_check_status`, `references`).
- **known_by_requester**: boolean per vouch, distinguishing "someone you actually know" from "a stranger nearby who also used this provider."
- **vouch_count** / corroboration-weighting per vouch, so aggregated anonymous vouches can partially substitute when no personally-known voucher exists.

## Honest reassessment: is the support thinner than my original summary?
Yes. I originally counted this as 5/6 participants. On a closer pass, only P01 and P06 give unambiguous, on-theme, direct statements. P02 is genuinely two-sided and belongs more in the contradictions column than the support column. P04 and P05 support that a vouching ecosystem exists (supply-side), not that requesters rank it above verification. The theme survives, but as "2 strong, 2 adjacent, 1 direct contradiction" — materially weaker than "5 in agreement."
