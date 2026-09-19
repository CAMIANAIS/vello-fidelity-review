# Practice 3.1 — IA to schema, from memory (~15 min · individual · no AI)

Without looking at Vello's screens: a rough Requester site map next to a first-cut schema, sketched in Lucidchart, with agreement/divergence points marked.

**Site map:** `images/lucid.png` — Requester flow: Homepage → Add/Navigate → Post a Request (category, title, date/time/where, budget, comments) → Submit/Publish → pinned request → Message or Book → booking form; plus Notifications, Select Address, Profile, Messages, Bookings as top-level sections.

**First-cut schema:** `images/schemas.png` — `Users`, `Addresses`, `Categories`, `Requests` (FK: requester_id, categories_id, addresses_id), `Conversations`, `Messages`, `Bookings` (FK: request_id, requester_id, provider_id), `Ratings`, `Notifications`.

**Note on completeness:** the sitemap and schema were built side by side, but the explicit written note of *where they agree vs. diverge* wasn't captured in the diagram itself — worth stating out loud on demo day rather than claiming it's marked here. One divergence visible just from comparing the two: the site map treats "Book a Neighbor" as a second entry point straight into a booking form, separate from "Post a Request," but the schema's `Bookings` table has no direct link back to `Requests` for that path — the same open question Practice 3.3 raises about whether every Booking must trace through a ServiceRequest.

Lucid source: https://lucid.app/lucidchart/b0fdcfa5-107b-462f-bbef-ea44a64d9e00/edit?beaconFlowId=403E2B6CD2079D9F&page=0_0&invitationId=inv_e646af4a-ef4a-433c-abef-1d2c2c44f2f5
