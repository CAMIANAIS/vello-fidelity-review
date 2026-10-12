# Practice 3.2 — Break a happy path → derive the API states (~20 min · with Claude)

Simplest possible happy-path flow for a Vello requester booking a provider (browse → respond → book/pay → rate), 5-6 steps, no edge cases:

1. **Browse providers** — Requester lands on a feed of ProviderCards scoped to their neighborhood (e.g., filtering to "house cleaners").
2. **View provider profile** — Requester taps a ProviderCard to see full details: pricing, availability, VerifiedBadge, and rating.
3. **Request booking** — Requester selects an available time slot and submits a booking request with the provider's stated price.
4. **Confirm & pay** — Provider accepts (or availability auto-confirms); Requester completes payment and sees a booking confirmation screen.
5. **Job completed** — Once the work is done, Requester gets a prompt to confirm completion.
6. **Rate the provider** — Requester leaves a rating/review, which rolls up into the provider's public rating.

**Judgment call flagged:** the brief's workflow list puts "post a need" before "browse providers," but posting a need adds a wait-for-responses step that breaks a tight 5-6 step happy path. Went with browse-first as the more direct route to a booking.

## My own unhappy paths (no AI, added in Polish Week)

I used the four questions from the design office hour on step 3, **Request booking**.

1. **Job:** It lets the requester see the key details of the person before booking: how long they have been on Vello, rating, cost per hour, and tags that might help.
2. **Main action:** I want the requester to make a well-informed decision, fast and easy, by pressing the Book button.
3. **Success:** They see "Request sent, waiting for the provider to accept."
4. **When it fails:**
   - **Network fail:** a generic error screen, like "There was an error and we are working to fix it."
   - **Time slot taken:** "This time slot is unavailable, please try another."
   - **Provider never answers:** the requester sees "Waiting for approval." The request expires after 24 hours. Then they see that the request expired, and a button to choose another provider.

**My product decision: the request expires after 24 hours.** It gives the provider time to answer, and the requester doesn't wait too long. The requester may need an urgent response.

## My list vs Claude's list

After I wrote my own list, I asked Claude for its list of edge cases in the booking flow: empty (no providers nearby), loading, network error, time slot taken, provider never answers, provider declines, requester cancels while waiting, payment fails, not logged in, and provider becomes unavailable after accepting.

- **We both had:** network error, time slot taken, and provider never answers.
- **Only I had:** the 24-hour rule. Claude only said "timeout." It didn't decide how long or why.
- **The one I missed that hurts most:** the provider becomes unavailable after accepting. There is a deal, and when the provider backs out, the requester and the app are badly damaged.
  - **What the requester sees:** a notification saying the provider is unavailable, and a button to book again with a discount for the bad coordination.
  - **Who pays for the discount:** Vello pays. It keeps requesters trusting the app.
