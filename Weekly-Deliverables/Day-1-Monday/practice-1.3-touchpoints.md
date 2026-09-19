# Practice 1.3 — Find your touchpoints (~20 min · with Claude, then verify)

Where an engineer can improve design before it's drawn, across the 5-phase process. Claude was pushed back on ("that's too vague — give me a concrete example with a specific artifact") before landing on these.

| Phase | My contribution | My failure mode |
|---|---|---|
| Discover | Pull real numbers from existing logs (not just opinions) | Jumping to a fix too fast — killing the question before it's explored |
| Define | Sketch the real data shape early, to catch missing edge cases | Quietly shrinking the request to what's easy to build, without saying so |
| Architect | Name the real limit, with a number (ms, cost, rows) | Saying flat "no" instead of "yes, but here's the tradeoff" |
| Design | Share what's actually buildable now (real component states) | Swapping the real design for a shortcut during build, without telling anyone |
| Validate | Add real tracking on the real feature, real data | Testing with fake or tiny data that hides the real problem |
| Handoff | Give exact values — the token name, the field name, the number | Building from memory of a meeting instead of the real spec |

This table became the seed for the Friday engineering checklist (`Full-Week-Extras/engineering-design-support-checklist.md`).
