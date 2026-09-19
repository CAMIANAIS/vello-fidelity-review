# Practice 1.2 — Teach the vocabulary back (~20 min · with Claude)

Quiz transcript: Claude gave 8 realistic hyperlocal-services decisions one at a time; I answered before seeing the correct label.

| Decision | My answer | Correct answer |
|---|---|---|
| Vello Pro (paid tier, top 3 search) | Product, data model yes | ✓ Product, data model yes, API yes (label + data model right, API filled in together) |
| Card drop shadow | Visual, no data/API | ✓ Correct |
| Browse free, book needs account | Product, API yes | ✓ Product, API yes — but missed data model (guest messages need to link to the new account) |
| "Step 1 of 3" progress label | UX | ✗ Wrong — correct answer is UI |
| Cancel fee (free 1hr, then 20%) | Product, data model + API yes | ✓ Correct |
| Report button → floating | UI, no data, API yes | ✗ Wrong on API — assumed a new chat-bot service that wasn't in the decision. Correct: API no, only placement changed |
| Error text inline vs toast | UX (noticed the UI angle too) | ✓ Correct — reasoned this one well |
| Reviews sort "most helpful" | UX, API yes (thought A-Z) | ✓ UX right, API yes right — but "most helpful" is a vote count, not alphabetical, and missed the data-model need to store the vote count |

## My two weak spots this week

- **#4 — mixing up UX and UI.** Called the flow decision and the visual widget the same thing. Rule to keep: UX = why/the flow. UI = the exact thing on screen.
- **#6 — guessing a technical need that wasn't there.** Added a chat-bot API call the decision never mentioned. Rule to keep: only flag data model/API for what the decision actually says — don't add features in your head.
