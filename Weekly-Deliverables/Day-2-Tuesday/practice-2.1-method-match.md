# Practice 2.1 — Match the method to the question (~15 min · individual · no AI)

For each Vello question: qualitative or quantitative first, the method, and the system change it implies.

1. **Why do requesters drop off before completing a booking?** — Quant + qual combo 🚩 (analytics finds *where* in the flow; interviews with people who dropped there find *why*). System change: new `booking_step_abandoned` event, plus a way to recruit people who hit it.
2. **What percentage of providers respond within an hour?** — Quantitative, analytics (directly measurable, no need to ask). System change: `request_sent_at` and `provider_responded_at` timestamps.
3. **Can a first-time admin figure out how to approve a provider?** — Qualitative, usability test (task completion, not opinion). System change: fix whatever friction the test reveals in the admin approval UI/flow.
4. **What does "trust" actually mean to a Vello requester?** — Qualitative, interview (pure meaning-making). System change: `vouched_by`/`recommended_by` field, on-time/show-up rate per provider, named comments instead of anonymous stars.
5. **Which neighborhoods have the most unmet demand?** — Quantitative, analytics (already flows through the system). System change: neighborhood/geo field on every request, plus a `request_unmatched` event.
6. **Is our new onboarding flow easier than the old one?** — Quantitative, analytics (comparable straight from logs). System change: `onboarding_started_at`/`completed_at` timestamps plus a `flow_version` tag.

**Flagged combo:** question 1 is the one where qual and quant clearly combine — quant tells you where, qual tells you why.
