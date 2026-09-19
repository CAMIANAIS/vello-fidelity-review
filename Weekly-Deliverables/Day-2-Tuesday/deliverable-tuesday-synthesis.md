# Tuesday Main Deliverable: Audited Research Synthesis

Named themes from the full Vello interview transcript set, each checked back against verbatim quotes before being trusted.

## 1. Trust is a transferred vouch from someone you already know — not a platform credential (5/6: P01, P02, P04, P05, P06)
- P01 (line 25, 41): "It mattered that it was Priya... if you gave me the choice between a man with a certificate who I've never seen before and a man with no certificate who Priya has used for two years, I'm taking Priya's man."
- P02 (line 37, 41): "Denise vouched for her. That's the check... It's a person taking responsibility, that's not the same as a company saying trust us."
- P06 (line 21): "Somebody who lives here has to have used them and said they were good. That's the rule."
- P05 (line 69): "My name's attached to somebody I don't know... I'm not lending it to a stranger."
- P04's entire client base (line 25-27) grew the same way: "Almost all of them come from each other."

## 2. What "trust" cashes out to, day-to-day, is reliability — showing up — not safety (4/6: P01, P03, P04, P05)
- P01 (line 45): "The thing that actually goes wrong is people don't show up... that's what ends the relationship. Not anything dramatic."
- P05 (line 41): "Turning up. That's ninety per cent of it."
- P04 (line 45): "They care that I come on the day I said and that I'm the same person every week. That's it."
- P03 (line 49): just wants "a time. Not a window, a time" — friction is scheduling certainty, not safety.

## 3. "Local" doesn't mean a radius — a strict neighborhood boundary would hurt the providers Vello needs (3/6: P01, P04, P06)
- P01 (line 65): "It's not blocks, it's... overlap." Someone four blocks away can be "the same place," someone closer can be "another town."
- P06 (line 65): calls the association boundary "the great unanswerable question."
- P04 (line 41): if neighbors-only, "then I'd lose half my income... most of the people cleaning those houses live somewhere else."

## 4. Isolated / newly-arrived residents are shut out of the vouching system, and are also most at risk of being overcharged (3/6: P02, P03, P06)
- P02 (line 53): 8 months in, can "name three people" out of forty flats.
- P03: no neighbor network at all; her daughter runs everything remotely.
- P06 (line 73): "Older residents mostly, in the flats... they're the ones who get charged four hundred pounds for a job worth eighty." Also admits her own list is "a bit of a closed shop" against newcomers.

## 5. Providers want the platform to fill gaps around an existing client base, not hand them a stranger marketplace — past gig-platform experiences were bad (3/6: P04, P05, P06)
- P04: two-week onboarding delay, an unchallengeable bad review, race-to-the-bottom pricing, preference for a flat fee over a forever-percentage cut.
- P05: doesn't want his name formally attached to strangers; the model is "for who I was at thirty," not an established local tradesman.
- P06: wants the platform to "do the boring half" while she keeps making the judgment calls herself.

## 6. Recourse today is informal and repairable; platform mechanisms are described as binary and unforgiving (3/6: P04, P05, P06)
- P05 (line 49, 53): broke a mirror, paid for it, did the next job free, in a ten-minute conversation — still has that client six years later. "There'd be no conversation" on a platform.
- P06 (line 53): removed a decorator from her list over one bad job — "felt too harsh... but I didn't have anything in between."
- P04 (line 57): "There's a button, I pressed it, nothing happened."
- Single-source flag, not yet a theme: P03's daughter is the one who books, pays, and takes on risk — no app assumes someone other than the service recipient holds the phone. Worth watching, not worth building on yet.

## The contradiction (flagged explicitly)
P01 and P05 are actively skeptical of formal verification. P02 wants exactly that, emphatically. Worth noticing: P02 is 8 months into the neighborhood with no Denise yet, while P01 has a Priya — could mean verification matters most when the social vouch is missing (a bridge/fallback feature, not the core mechanism), not a conclusion yet.

## Why this matters for "trust scales locally"
Themes 3 and 4, plus the contradiction, are load-bearing. A hard neighborhood radius breaks the provider side (P04) and "local" has no boundary residents agree on (P06). The contradiction means a single verification strategy won't satisfy both P01/P05's world and P02's.

## One documented Claude correction
First pass counted Theme 1 at 5/6 participants in clean support. Auditing back to verbatim quotes (Practice 2.3) showed P02 was actually a direct contradiction, not a supporter. Corrected to "2 strong, 2 adjacent, 1 direct contradiction" — a materially weaker, more honest claim.

Full flow-based artifact and stress-testing of this research against the product happens Wednesday; see `../Day-2-Tuesday/deliverable-tuesday-problem-statements.md` for the two (really three, see scope note) problem statements and entity list this synthesis implies.
