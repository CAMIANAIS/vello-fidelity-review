# Wednesday — Process Log

**Starter prompt used:**
> Draft a user flow for [verify a provider, as admin] in Vello as a flowchart. Include every screen, user decision, and system state — loading, error, empty, success. Mark assumptions with [ASSUMPTION] so I can verify them against the brief. Then turn it into a state table (state → trigger → API status → UI) and a list of endpoints with their states.

**Output:** Full flow diagram + per-screen state tables + API contract.
Artifact: https://claude.ai/artifact/11BEDoUTzer4u5CKTDDY7L

**Known failure, closed in Polish Week:** that session couldn't load the live design system (no browser access at the time), so the flow was built from generic two-sided-marketplace patterns, not Vello's real admin screens. Its own "named gap" section says so explicitly — it's a hypothesis, not a verified diff. **Was open:** go check the real Admin desk screen in the prototype and confirm or correct the gap before presenting it as a finding.

**Closed (Polish Week):** I checked the real Vello app. Vello has no admin screen. I found a real gap in the booking flow instead: the confirmation screen says "You're all set!", but the Bookings tab shows "Pending." See `deliverable-wednesday-flow.md`, section 05.
