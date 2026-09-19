# Practice 3.3 — Objects to tables (~20 min · with Claude, then verify)

## The 8 core objects
- **User** — account-level entity. Attributes: id, name, contact info, neighborhood_id, role (requester/provider/admin), created_at. Relationships: belongs to one Neighborhood; a Requester creates ServiceRequests; a Provider owns a ProviderListing; an Admin approves/moderates listings and disputes.
- **Neighborhood** — the hyperlocal scope everything filters through. Attributes: id, name, boundary/geo data. Relationships: has many Users, ProviderListings, ServiceRequests — trust mechanisms are scoped to it.
- **ServiceRequest ("a need")** — created when a Requester posts what they want done. Attributes: id, requester_id, category, description, location, desired timing, status. Relationships: belongs to a Requester and a Neighborhood; has many provider responses; can lead to a Booking.
- **ProviderListing** — the public-facing profile (the "signature piece," the ProviderCard). Attributes: id, provider_id, service categories, advertised pricing, availability, verification_status, badges, aggregate rating. Relationships: belongs to a Provider and a Neighborhood; can respond to many ServiceRequests; has many Bookings and Reviews.
- **Booking** — the transaction record. Attributes: id, service_request_id, provider_id, requester_id, scheduled time, agreed price, status. Relationships: links a ServiceRequest, Provider, Requester; has one Payment; has zero or one Review.
- **Payment** — id, booking_id, amount, status, timestamp, payer, payee. Belongs to exactly one Booking.
- **Review** — id, booking_id, rating score, comment, reviewer_id, reviewee_id, timestamp. Belongs to a Booking; rolls into a ProviderListing's aggregate rating.
- **Message** — id, sender_id, recipient_id, parent context (service_request_id or booking_id), body, timestamp.

*(A ninth candidate, ServiceCategory, is arguably just an enum unless the product needs admin-managed taxonomy later.)*

## As a relational model
| Table | Key columns |
|---|---|
| users | id, name, role, neighborhood_id → neighborhoods.id |
| neighborhoods | id, name, boundary |
| service_requests | id, requester_id → users.id, neighborhood_id → neighborhoods.id, category, status |
| provider_listings | id, provider_id → users.id, neighborhood_id → neighborhoods.id, verification_status, advertised_price |
| bookings | id, service_request_id → service_requests.id, provider_listing_id → provider_listings.id, requester_id → users.id, status, agreed_price |
| payments | id, booking_id → bookings.id, amount, status |
| reviews | id, booking_id → bookings.id, reviewer_id → users.id, reviewee_id → users.id, score |
| messages | id, sender_id → users.id, recipient_id → users.id, service_request_id (nullable), booking_id (nullable) |

## Where the UX and data model might disagree
- The brief describes two entry points ("post needs" or "browse providers"), but a clean model wants every Booking to trace back through a ServiceRequest. If someone books straight off a ProviderListing, `service_request_id` on Booking either needs to be nullable, or the UI silently creates a ServiceRequest behind the scenes. The brief doesn't say which — a real design decision, not just a schema detail.
- The brief treats Requester/Provider/Admin as three separate personas, but nothing rules out one person holding more than one role — a single `users` table with a `role` column handles that; three separate entities (closer to how the UX imagines them) would not.
- "Shared building reviews" is mentioned as a trust mechanism, but there's no `Building` object — only `Neighborhood`. If reviews should be building-scoped rather than neighborhood-scoped, that implies a finer-grained location entity the current 8-object list doesn't have.
- Pricing appears twice with different meanings: ProviderListing's "advertised" price (browsing) vs. a job-specific quote (the workflow says providers "respond with pricing" per request). The data model needs to keep these separate fields, or bookings will silently overwrite the advertised price.
- Verification is a single binary VerifiedBadge in the UI, but the underlying process (admins verify before appearance) is really a state machine (pending/verified/rejected) with an actor and timestamp — a true model wants an audit trail, which a single flag doesn't capture.
