# Practice 3.2 — Break a happy path → derive the API states (~20 min · with Claude)

Simplest possible happy-path flow for a Vello requester booking a provider (browse → respond → book/pay → rate), 5-6 steps, no edge cases:

1. **Browse providers** — Requester lands on a feed of ProviderCards scoped to their neighborhood (e.g., filtering to "house cleaners").
2. **View provider profile** — Requester taps a ProviderCard to see full details: pricing, availability, VerifiedBadge, and rating.
3. **Request booking** — Requester selects an available time slot and submits a booking request with the provider's stated price.
4. **Confirm & pay** — Provider accepts (or availability auto-confirms); Requester completes payment and sees a booking confirmation screen.
5. **Job completed** — Once the work is done, Requester gets a prompt to confirm completion.
6. **Rate the provider** — Requester leaves a rating/review, which rolls up into the provider's public rating.

**Judgment call flagged:** the brief's workflow list puts "post a need" before "browse providers," but posting a need adds a wait-for-responses step that breaks a tight 5-6 step happy path. Went with browse-first as the more direct route to a booking.

**Edge cases + state/API table:** the full 8+ edge-case list (empty, error, loading, permission, cancellation, timeout, "provider unavailable," concurrent-review, etc.) was built out fully for the *admin verification* flow instead of this requester flow — see `deliverable-wednesday-flow.md`, sections 02–04, for the complete state table and API contract this practice's method produces.
