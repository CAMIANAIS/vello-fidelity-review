# Wednesday Main Deliverable: Verify a Provider, as Admin

Live artifact (full flowchart diagram): https://claude.ai/artifact/11BEDoUTzer4u5CKTDDY7L

**Core task:** Verify a provider (admin). **Actors:** Provider, Admin, System.

**Input note:** the design system's docs render client-side and couldn't be loaded live in this session, so the flow is built from standard two-sided-marketplace verification patterns, not Vello's actual screens. Every place that depends on a real Vello decision is tagged `[A]` (assumption).

## 01 · The flow (see live artifact for the full diagram)
Provider submits profile + KYC documents → system sets `status = pending` → **Verification Queue** (Admin) → claim → **Review Detail** → **Document Viewer** → **Admin decision**: Approve / Reject / Request more info → notify provider → terminal state or resubmission/stale loop.

## 02 · Stress test
| Question | How the flow handles it |
|---|---|
| What if the provider never responds to a request for more info? | "Changes Requested" forks: resubmit within an assumed 7-day window `[A]` creates a fresh Pending entry; past that, the queue row gets a "Stale" badge and the admin can remind or reject with reason "No response." |
| Where can the admin cancel or step away mid-review? | Any point before a decision is submitted writes nothing; status stays as-is. If claimed, the claim releases on an idle timeout `[A]`. |
| What does the admin see if verification fails? | Two different "fails": (1) the admin's submit call fails (network/5xx) — inline error, retry; (2) the review concludes in rejection — a business outcome, not an error — status moves to Rejected. |
| What if two admins open the same record? | Second admin sees a read-only "Claimed by {admin}" banner; a second decision attempt gets a 409 Conflict and a refresh prompt, never a silent overwrite. |
| What if a submitted document is corrupted or unreadable? | Document Viewer shows its own Error state, and Approve is disabled for the whole record while any document is in that state; Reject or Request More Info can still unblock it. |

## 03 · State table, per screen
**Verification Queue:** loading (skeleton) · empty (200, items:[] → "You're all caught up") · error (timeout/5xx → retry banner) · success (200, items → cards) · stale `[A]` (changes_requested age > 7d → amber badge + reminder action).

**Review Detail:** loading (skeleton) · error (404/5xx → retry/back) · claimed `[A]` (200, claimed_by ≠ me → read-only banner) · success (200 → info + action bar) · exit (no request sent, claim releases on idle timeout `[A]`).

**Document Viewer:** loading (spinner) · error (file missing/corrupted → "Couldn't preview" + Approve disabled record-wide) · success (200 → zoom/rotate viewer).

**Approve modal:** idle → submitting (POST in flight) → error (5xx/timeout/409 → inline retry, no state change) → success (200, status:approved → toast, queue).

**Reject modal:** invalid (reason required `[A: enum]`) → submitting → error (no state change) → success (200, status:rejected → toast).

**Request-more-info modal:** invalid (≥1 item + message required) → submitting → error → success (200, status:changes_requested) → stale `[A]` (7+ days, no resubmission → reminder or reject).

## 04 · API contract
| Endpoint | Response states |
|---|---|
| `GET /admin/verifications` | 200 items[] · 200 items:[] (empty) · 401 · 403 · 5xx |
| `GET /admin/verifications/:id` | 200 (incl. claimed_by, claim_expires_at `[A]`) · 404 · 401/403 · 5xx |
| `GET /admin/verifications/:id/documents/:docId/url` | 200 (url, expires_in) · 404 · 410 expired · 5xx |
| `POST /admin/verifications/:id/claim` `[A]` | 200 claimed · 409 already claimed · 401/403 |
| `POST /admin/verifications/:id/approve` | 200 status:approved · 409 conflict · 422 missing required docs `[A]` · 401/403 · 5xx |
| `POST /admin/verifications/:id/reject` `{reason, notes?}` | 200 status:rejected · 400 reason required · 409 · 401/403 · 5xx |
| `POST /admin/verifications/:id/request-info` `{items[], message}` | 200 status:changes_requested · 400 · 409 · 401/403 · 5xx |
| `GET /admin/verifications/:id/activity` `[A]` | 200 events[] · 404 · 401/403 |
| `POST /admin/verifications/:id/remind` `[A]` | 200 sent · 429 reminded recently `[A]` · 404/401/403 |

## 05 · Named gap vs. Vello's current screens
**The "changes requested" loop is a hypothesis, not a confirmed screen.** The design system docs couldn't be loaded live this session, so this isn't a verified diff — it's the most common gap in first-pass admin panels of this shape: Approve/Reject usually ships first, while a structured "Request More Info" loop (modal, status, provider-side visibility, staleness timer) tends to arrive later or not at all. If Vello's admin screens today only expose Approve and Reject, everything downstream of "Request info" in the flow is the gap. **Still open (from the handoff checklist):** go check the real Admin desk screen in the prototype and confirm or correct this before presenting it as a finding.

## All assumptions, in one place
- A submission is auto-claimed as `in_review` when an admin opens it, with an idle timeout that releases the claim.
- Reject reasons come from a fixed enum plus a free-text note.
- Required documents are ID, business license, and certifications — exact set/cardinality unconfirmed.
- A "Request More Info" loop exists as a first-class `changes_requested` status distinct from a straight rejection.
- Provider non-response is measured against a 7-day SLA — the actual window is unconfirmed.
- Notification delivery can itself fail and that failure is visible somewhere, not silently swallowed.
- An audit-log/activity trail is recorded per decision.
- A rejected provider can resubmit, creating a new pending entry.
- A reminder endpoint exists and is rate-limited.
