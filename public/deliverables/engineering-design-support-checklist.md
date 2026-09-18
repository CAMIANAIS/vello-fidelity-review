# Engineering Design-Support Checklist

Grown from Monday's phase, contribution, and failure-mode table: concrete things engineering can do at each phase to make design work better, with this week's own work as evidence.

## Discover
- [ ] Pull real numbers from existing logs and analytics before a design decision gets made, not just opinions.
- This week: separated which research questions were already answerable from existing data (drop-off %, response-time %) from which genuinely needed real interviews (Practice 2.1).
- Avoid: jumping to a fix before the real question is explored.

## Define
- [ ] Sketch the real data shape early enough to catch missing edge cases before design locks it in.
- This week: caught that "post a need" vs. "browse providers" implies two different Booking to ServiceRequest relationships, before the flow was finalized (Wednesday).
- Avoid: quietly shrinking the request to what's easy to build, without saying so.

## Architect
- [ ] Name the real technical limit with an actual number (ms, cost, rows), not a vague objection.
- Avoid: a flat "no" instead of "yes, but here's the tradeoff."

## Design
- [ ] Share what's actually buildable right now, in real component states, not just the happy path.
- This week: built and audited a card's Success, No-rating, No-photo, and Unavailable states explicitly, instead of only the polished default (Friday).
- Avoid: swapping the real design for a shortcut mid-build, without telling anyone.

## Validate
- [ ] Add real tracking and real checks on the real feature with real data, not a synthetic case that hides the actual problem.
- This week: checked actual token values and a real contrast ratio (5.69:1) instead of eyeballing "looks fine" (Friday).
- Avoid: testing with fake or tiny data that hides the real problem.

## Handoff
- [ ] Give exact values back to design: the real token name, the real field name, the real number. Not an approximation.
- This week: every fix instruction named the exact token (`var(--success)`, `var(--shadow-lg)`, `var(--paper)`) instead of "make it look right" (Friday).
- Avoid: building from memory of a meeting instead of the real spec.
