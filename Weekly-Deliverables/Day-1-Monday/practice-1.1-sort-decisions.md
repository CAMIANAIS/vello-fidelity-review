# Practice 1.1 — Sort the decisions (~15 min · individual · no AI)

Ten Vello decisions, labeled Product / UX / UI / Visual, plus whether each touches the data model or API.

| # | Decision | Layer | Data model / API? |
|---|---|---|---|
| 1 | Flat monthly fee (instead of per-booking commission) | Product | Yes — new billing fields + payment endpoints |
| 2 | Persimmon "Book now" button | Visual | No |
| 3 | Must verify address before posting a need | Product | Yes — verified flag, verify endpoint, new screen |
| 4 | Weekly calendar instead of a list | UI | Maybe — API may need to shape data by day |
| 5 | Dog-walking only, expand later | Product | Yes — needs a category field, even now |
| 6 | Amber rating stars | Visual | No |
| 7 | Confirmation screen after booking (not back to feed) | UX | Yes — new screen (route) |
| 8 | Admin verification queue sorts oldest-first | UX | Yes — sort logic on existing endpoint |
| 9 | Body text in Hanken Grotesk at 17px | Visual | No |
| 10 | Real-name profile, not username | Product | Yes — different profile fields |

**Takeaway:** 6 of 10 "design" decisions actually force a data-model or API change — most of what looks like a styling choice at a glance is a schema decision wearing a design costume.
