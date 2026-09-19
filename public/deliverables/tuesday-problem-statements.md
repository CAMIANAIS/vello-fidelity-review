# Tuesday problem statements: from the verified themes

## A correction before the statements

First draft of these was built from Practice 2.1 (the method-matching exercise done before any transcripts were loaded), not from the actual verified themes. "Verified" specifically describes Practice 2.3's process: themes checked back against verbatim quotes, one of them downgraded from "5/6 agree" to "2 strong, 2 adjacent, 1 contradiction" when the count didn't hold up. Practice 2.1 items were never verified against anything; they're pre-transcript method classifications. The entity-list pairing settles it either way: fields like `known_by_requester` and `vouch_count` only derive from the real theme text, not from a one-line research question. Rebuilt from the correct source below.

## Theme 1: Trust is a transferred vouch

**Problem statement:** Requesters struggle to trust an unfamiliar provider's formal credentials because a specific person they already know vouching for that provider, "it mattered that it was Priya," "somebody who lives here has to have used them," carries more weight than any certificate or star rating.

Built only from the two quotes the audit marked as strong support (P01, P06). P04 and P05 were left out as adjacent (supply-side evidence, not requester preference) and P02 as a direct contradiction (he wants formal verification, not vouching); including them would overstate the theme the same way the first "5/6 agree" count did.

**Entities/states implied:** `Vouch`/`Recommendation` (voucher_id, a named person, not anonymous, provider_id, times_used, comment, timestamp), `Provider.verification` as a separate coexisting attribute, `known_by_requester` boolean, `vouch_count` corroboration weighting (per P06: "three unknowns might be worth one Denise").

## Theme 5: Providers want an existing base, not a stranger marketplace

First draft folded three of P04's complaints into one sentence under "a vulnerable first stretch." That didn't survive a check against the actual quotes: the two-week onboarding delay is a real, bounded, temporary problem, but "an unchallengeable bad review" and a "forever-percentage cut" are permanent structural risks that don't fade with tenure. Folding a temporary claim and two permanent claims into one summarizing phrase was the same mistake as the Monday Validate pushback, just smaller. Split into two statements instead of quietly forcing one.

**5a. Onboarding cost (temporary):** New providers struggle with a slow onboarding process because every day it takes to get approved is a day of income they can't get back.

(First version of this sentence said providers "haven't built the track record that would protect them if one thing goes wrong early," which is the review-vulnerability idea from 5b, and it has no support in the actual quote. "In that two weeks I could have been working" is a logistics/opportunity-cost complaint, not a reputation-exposure complaint. Corrected to match only what the quote says.)

**Entity/state implied:** `onboarding_started_at` / `onboarding_completed_at` timestamps, a duration between two events, not a standing counter. Notably, this is the same field pair already proposed for Practice 2.1 item 6 ("is the new onboarding flow easier than the old one?"). A quantitative research question and a qualitative pain point converging on the same missing data point is evidence the gap is real, not evidence of two unrelated findings.

**5b. Structural risk (permanent, no tenure fixes it):** Established providers struggle to trust the platform's ongoing terms because an unfair review can never be challenged and a percentage-based cut keeps taking a share indefinitely, no matter how long they've been trusted and reliable.

**Entities/states implied:** `Review.dispute_status` (none | disputed | under_review | resolved); "unchallengeable" is really the absence of this state today, not a bug in an existing one. `Provider.fee_structure` (percentage | flat, plus rate/amount); the "forever-percentage cut" complaint implies the fee model is currently one fixed rule, not a per-provider attribute. `Provider.tenure_days`, used here, not in 5a, specifically to prove the risk doesn't decay: the claim this entity needs to support is "even at high tenure_days, this risk is still live," which is a different job than measuring how new someone is.

## Scope note, named rather than silently decided

The brief asks for two problem statements; this write-up has three, because Theme 5 forced into one sentence was exactly the conflation this document exists to avoid. Presenting three honest, correctly-scoped claims seemed better than one artificially unified claim that doesn't survive a check against its own evidence.
