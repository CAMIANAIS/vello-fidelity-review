MONDAY
A labeled list of 10 items + the subset that touches your data model or API. Notice how many "design" decisions are actually schema decisions in disguise.

#

Decision
Layer
Data model / API?
1
Flat monthly fee
Product
Yes — new billing fields + payment endpoints
2
Persimmon button
Visual
No
3
Must verify address
Product
Yes — verified flag, verify endpoint, new screen
4
Calendar instead of list
UI
Maybe — API may need to shape data by day
5
Dog-walking only, expand later
Product
Yes — needs a category field, even now
6
Amber stars
Visual
No
7
Confirmation screen
UX
Yes — new screen (route)
8
Queue sorts oldest-first
UX
Yes — sort logic on existing endpoint
9
Hanken Grotesk 17px
Visual
No
10
Real name, not username
Product
Yes — different profile fields

Your quiz transcript. Note the two you got wrong or found ambiguous - those are your weak spots this week.

Decision
Your answer
Correct answer
Vello Pro (paid tier, top 3 search)
Product, data model yes
✓ Product, data model yes, API yes (you got the label + data model right, API filled in together)
Card drop shadow
Visual, no data/API
✓ Correct
Browse free, book needs account
Product, API yes
✓ Product, API yes — but you missed data model (guest messages need to link to the new account)
"Step 1 of 3" progress label
UX
✗ Wrong — correct answer is UI
Cancel fee (free 1hr, then 20%)
Product, data model + API yes
✓ Correct
Report button → floating
UI, no data, API yes
✗ Wrong on API — you assumed a new chat-bot service that wasn't in the decision. Correct: API no, only placement changed
Error text inline vs toast
UX (you noticed the UI angle too)
✓ Correct — you reasoned this one well
Reviews sort "most helpful"
UX, API yes (thought A-Z)
✓ UX right, API yes right — but "most helpful" is a vote count, not alphabetical, and you missed data model (need to store the vote count)

Your two weak spots this week:
#4 — mixing up UX and UI. You called the flow decision and the visual widget the same thing. Rule to keep: UX = why/the flow. UI = the exact thing on screen.
#6 — guessing a technical need that wasn't there. You added a chat-bot API call the decision never mentioned. Rule to keep: only flag data model/API for what the decision actually says — don't add features in your head.

A short table: phase → your contribution → your failure mode. This becomes the seed of your Friday engineering checklist.

Phase
Your contribution
Your failure mode
Discover
Pull real numbers from existing logs (not just opinions)
Jumping to a fix too fast — killing the question before it's explored
Define
Sketch the real data shape early, to catch missing edge cases
Quietly shrinking the request to what's easy to build, without saying so
Architect
Name the real limit, with a number (ms, cost, rows)
Saying flat "no" instead of "yes, but here's the tradeoff"
Design
Share what's actually buildable now (real component states)
Swapping the real design for a shortcut during build, without telling anyone
Validate
Add real tracking on the real feature, real data
Testing with fake or tiny data that hides the real problem
Handoff
Give exact values — the token name, the field name, the number
Building from memory of a meeting instead of the real spec

FROM MONDAY TO FRIDAY
https://claude.ai/artifact/6v2sxFt3rQra9iUA6tabLu

TUESDAY

Here is a simple breakdown of the main concepts across your sources:

1. What is UX Discovery?
   UX Discovery is the early stage of a User Experience (UX) design project.
   In this phase, a team researches user needs, business goals, and technology limits before building anything.
   Doing a discovery prevents teams from wasting time and money building the wrong product based on false assumptions.
2. Writing Problem Statements
   A problem statement is a short summary that clearly describes the specific problem that needs to be solved.
   It keeps the team focused and explains who is affected, what the problem is, and why it matters to the organization.
   A good problem statement stays concise and focuses on the problem without rushing to suggest a solution too early.
3. Choosing UX Research Methods
   UX research methods can be used throughout different project stages: Discover, Explore, Test, and Listen.
   Research methods fall along different dimensions:
   What people say vs. what people do: Attitudinal research looks at reported thoughts and beliefs, while behavioral research observes real actions.
   Qualitative vs. Quantitative: Qualitative research (like direct observation) answers why or how to fix a problem, while quantitative research (like metrics and surveys) answers how many or how much.
4. Conducting User Interviews
   A user interview is a one-on-one conversation where a researcher asks open-ended questions to understand a user’s experiences, feelings, and needs.
   Interviews are different from usability tests: interviews explore thoughts without a design present, whereas usability tests watch people complete tasks using a prototype or product.
   Successful interviews rely on clear goals, flexible guides, building trust (rapport), and asking probing follow-up questions.
5. Using AI in UX Research
   Artificial Intelligence (AI) can speed up tasks like brainstorming questions, writing study plans, transcribing audio, and making an initial pass at grouping notes.
   AI cannot replace human researchers because it cannot observe actual human behavior during usability tests and may make errors or false claims.
   💡 Would you like to create a study guide or flashcards on these UX terms to help test your knowledge?

Practice 2.1
All six done. Here's your full Practice 2.1 answer sheet, built from your own reasoning:

1. Why do requesters drop off before completing a booking? — Quant + qual combo 🚩 (analytics finds where in the flow; interviews with people who dropped there find why). System change: new booking_step_abandoned event, plus a way to recruit people who hit it.
2. What percentage of providers respond within an hour? — Quantitative, analytics (directly measurable, no need to ask). System change: request_sent_at and provider_responded_at timestamps.
3. Can a first-time admin figure out how to approve a provider? — Qualitative, usability test (task completion, not opinion). System change: fix whatever friction the test reveals in the admin approval UI/flow.
4. What does "trust" actually mean to a Vello requester? — Qualitative, interview (pure meaning-making). System change: vouched_by/recommended_by field, on-time/show-up rate per provider, named comments instead of anonymous stars.
5. Which neighborhoods have the most unmet demand? — Quantitative, analytics (already flows through the system). System change: neighborhood/geo field on every request, plus a request_unmatched event.
6. Is our new onboarding flow easier than the old one? — Quantitative, analytics (comparable straight from logs). System change: onboarding_started_at/completed_at timestamps plus a flow_version tag.
   Practice 2.2

Here's the evaluation, one question at a time — with the classic four traps in mind (leading, hypothetical, double-barreled, yes/no):

1. "Would you use an app that finds local help?" — Flawed: hypothetical + yes/no. People are unreliable predictors of their own future behavior, and a yes/no shape invites a polite "yes" that means nothing. Rewrite: "Tell me about the last time you needed to find help for something near where you live — what did you actually do?" (turns a guess about the future into a real memory of the past).
2. "Tell me about the last time you needed help around the house." — Well-formed. Open-ended, past behavior, specific anchor ("last time"), no assumption baked in. This is the model to imitate.
3. "Don't you think trust is important?" — Flawed: leading. The phrasing pressures agreement before the person has said anything. Rewrite: "What does trust mean to you when you're deciding who to let into your home?"
4. "How do you find and pay providers today?" — Flawed: double-barreled. "Find" and "pay" are two different processes with two different answers, and the person will likely only address one, or blend them into a confused answer. Rewrite as two questions: "How do you currently find people to help with things around your home?" then, separately, "Once you've found someone, how do you usually handle paying them?"
5. "What frustrates you about TaskRabbit?" — Flawed: leading (it presupposes frustration exists, and assumes they even use it). Rewrite: "Have you used TaskRabbit or something similar? ... What's that been like?" — establish usage first, then ask neutrally, "What, if anything, has frustrated you about it?"
6. "Would you pay more for a verified neighbor?" — Flawed: hypothetical + yes/no, and it's the classic willingness-to-pay trap — people overstate what they'd pay for a feature that doesn't exist yet. Rewrite: "Tell me about a time you chose a more expensive but more trusted provider over a cheaper one you didn't know. What made that worth it?" (real past trade-off instead of a hypothetical commitment).
   Quick pattern across all four flawed ones: every fix does the same move — trade a prediction, an assumption, or a compound ask for a specific, past, single-question recall. That's the same "footage over testimony, but testimony about something real" principle from earlier in the day.

PRACTICE 2.3

All verbatim quotes supporting Theme 1 ("trust is a vouch from someone known, not a platform score")
P01 (line 25): "Two names from people I know, yes. If it had been two names from strangers it would not have been enough. It mattered that it was Priya, because Priya would not recommend someone who was going to be weird about her house."
P01 (line 33): "When Priya said Tomás, I knew who she meant. I could picture him. That's completely different from a photo on an app."
P01 (line 41): "If you gave me the choice between a man with a certificate who I've never seen before and a man with no certificate who Priya has used for two years, I'm taking Priya's man. Every time. I don't think the certificate is telling me what I actually want to know."
P01 (line 69): "It would tell me which of these people my actual neighbours have actually used. Not stars... Tell me Priya used him eleven times. That's the whole product, isn't it."
P02 (line 37): "Denise vouched for her. That's the check."
P02 (line 41): "Denise has known her for four years. She's not going to put her name on someone... It's a person taking responsibility, that's not the same as a company saying trust us."
P05 (line 69): "If it's a list on an app and anyone can be on it, then my name's attached to somebody I don't know... That's my reputation, that took twenty years. I'm not lending it to a stranger."
P06 (line 21): "Somebody who lives here has to have used them and said they were good. That's the rule."
P06 (line 25): "The moment it's advertising, it's worthless."
P06 (line 41): "Three unknowns might be worth one Denise."
Contradicting or complicating evidence
P02 is not a clean supporter — he's the strongest counter-voice. Line 25: "I want to see a check. I want to see a DBS, I want to see references I can call, I want to see ID... That should be illegal." Line 69: "Proper vetting. Real checks, real ID, real references, and don't let people on without it. If you did that I'd use it tomorrow, honestly, and I'd pay more for it." He values vouching when it exists (Denise/Marta) but treats formal verification as the actual product gap. Both things are true for him at once.
P01 contradicts her own stated preference in practice. Line 57–61: she hired a sitter off an app with no personal vouch, based purely on reviews, out of desperation — and it went well. "When you're stuck you'll do the thing you said you wouldn't do." Stated preference (vouch beats credential) doesn't always survive contact with urgency.
P02 also undercuts the "vouch is sufficient" reading directly: "I suppose the checks are for when you don't have a Denise" — meaning he sees vouching and formal checks as serving different situations, not as competitors.
P06's aggregation comment complicates the "must be someone I personally know" framing: three vouches from strangers might substitute for one known vouch — meaning the mechanism may not require personal recognition specifically, just enough independent corroboration.
P03, despite being a requester, contributes no quote to this theme at all — she and her daughter fall back on generic reviews and "gut feeling" specifically because no local vouching network is available to them.
Data entities/attributes this theme implies
Vouch / Recommendation as its own entity (not folded into a generic star rating): voucher_id (a specific named user, not anonymous), provider_id, times_used (P01 explicitly wants "used him eleven times," not a star average), free-text comment, timestamp.
Provider.verification as a separate, coexisting attribute set (id_verified, background_check_status, references) — P02's evidence means this can't be dropped in favor of vouching alone.
A notion of relationship on the requester side — something like known_by_requester: boolean on each vouch, so the UI can distinguish "Priya, someone you actually know" from "a stranger nearby who also used this provider" (this is the crux of what P02 asks for later: "which neighbour, though... it has to be a name I recognise").
A vouch_count / corroboration-weighting attribute per P06's "three unknowns = one Denise" logic, so aggregated anonymous vouches can partially substitute when no personally-known voucher exists.
Honest reassessment: is the support thinner than my original summary?
Yes. I originally counted this as 5/6 participants. On this closer pass, only P01 and P06 give unambiguous, on-theme, direct statements ranking personal vouching above formal/platform signals. P02 is genuinely two-sided and arguably belongs more in the contradictions column than the support column — I shouldn't have counted him as a clean "yes" the first time. P04's and P05's quotes are real but come from the supply side, answering an adjacent question (how a provider's own client base grew, or a provider's reluctance to vouch for strangers) rather than a requester stating a preference — they support that a vouching ecosystem exists, not that requesters rank it above verification. So the theme survives, but as something closer to "2 strong, 2 adjacent, 1 direct contradiction" rather than "5 in agreement" — a materially weaker claim than my first pass implied, and exactly the kind of gap this exercise is designed to catch.

FROM TUESDAY TO FRIDAY
Named themes

1. Trust is a transferred vouch from someone you already know — not a platform credential. (5/6 participants: P01, P02, P04, P05, P06)
   P01 (line 25, 41): "It mattered that it was Priya... if you gave me the choice between a man with a certificate who I've never seen before and a man with no certificate who Priya has used for two years, I'm taking Priya's man."
   P02 (line 37, 41): "Denise vouched for her. That's the check... It's a person taking responsibility, that's not the same as a company saying trust us."
   P06 (line 21): "Somebody who lives here has to have used them and said they were good. That's the rule."
   P05 (line 69): "I'd want to know who I was recommending... my name's attached to somebody I don't know... I'm not lending it to a stranger."
   P04's entire client base (line 25-27) grew the same way: "Almost all of them come from each other."
2. What "trust" cashes out to, day-to-day, is reliability — showing up — not safety. (4/6: P01, P03, P04, P05)
   P01 (line 45): "The thing that actually goes wrong is people don't show up... that's what ends the relationship. Not anything dramatic."
   P05 (line 41): "Turning up. That's ninety per cent of it."
   P04 (line 45): "They care that I come on the day I said and that I'm the same person every week. That's it. That's the whole job."
   P03 (line 49): just wants "a time. Not a window, a time" — her friction is scheduling certainty, not safety.
3. "Local" doesn't mean a radius — and a strict neighborhood boundary would hurt the providers Vello needs.(3/6: P01, P04, P06 — but this is the one that bears directly on the "trust scales locally" bet)
   P01 (line 65): "It's not blocks, it's... overlap." Someone four blocks away can be "the same place," someone closer can be "another town."
   P06 (line 65): calls the association boundary "the great unanswerable question" — a technically-in tower block that never engages, a technically-out estate that residents count as local.
   P04 (line 41): if a platform were neighbors-only, "then I'd lose half my income, so I wouldn't use it... I can't afford Kestrel Park. Most of the people cleaning those houses live somewhere else."
4. Isolated / newly-arrived residents are shut out of the vouching system and are also the ones most at risk of being overcharged. (3/6: P02, P03, P06)
   P02 (line 53): 8 months in, can "name three people" out of forty flats.
   P03: no neighbor network at all; her daughter runs everything remotely.
   P06 (line 73): "Older residents mostly, in the flats... they're the ones who get charged four hundred pounds for a job worth eighty." She also admits her own list is "a bit of a closed shop" against newcomers (line 33).
5. Providers want the platform to fill gaps around an existing client base, not hand them a stranger marketplace — and past gig-platform experiences were bad. (3/6: P04, P05, P06)
   P04: two-week onboarding ("in that two weeks I could have been working"), an unchallengeable bad review (line 57), race-to-the-bottom pricing, and a preference for a flat fee over a forever-percentage cut.
   P05: doesn't want his name formally attached to strangers; says the model is "for who I was at thirty," not for an established local tradesman.
   P06: wants the platform to "do the boring half" — chasing, reminders, records — while she keeps making the judgment calls herself.
6. Recourse today is informal and repairable; platform mechanisms are described as binary and unforgiving. (3/6: P04, P05, P06)
   P05 (line 49, 53): broke a mirror, paid for it, did the next job free, in a ten-minute in-person conversation — still has that client six years later. Contrast: "there'd be no conversation" on a platform.
   P06 (line 53): removed a decorator from her list over one bad job — "felt too harsh... but I didn't have anything in between."
   P04 (line 57): "There's a button, I pressed it, nothing happened."
   One single-source flag, not a theme yet: P03's daughter is the one who books, pays, and takes on the risk — no app assumes someone other than the service recipient is the one holding the phone (line 81). Only one interview raises it. Worth watching for in the next round, not worth building on yet.
   The contradiction (flagging explicitly, as instructed)
   P01 and P05 are actively skeptical of formal verification — "I don't think the certificate is telling me what I actually want to know" (P01); "it doesn't tell you anything about whether the man can plaster... those are different questions" (P05). But P02 wants exactly that, emphatically, as the one thing that would win him over: "Proper vetting. Real checks, real ID, real references... If you did that I'd use it tomorrow, honestly, and I'd pay more for it."
   That's a direct clash inside your requester sample, not noise you can average away. Worth noticing: P02 is 8 months into the neighborhood with no Denise yet, while P01 has a Priya. That's a pattern worth testing, not a conclusion — could mean verification matters most exactly when the social vouch is missing, which would make it a bridge/fallback feature rather than the core mechanism.
   Why this matters for "trust scales locally"
   Themes 3 and 4, plus the contradiction, are the load-bearing findings here. If "trust scales locally" means a hard neighborhood radius, P04 tells you that breaks the provider side of the marketplace, and P06 tells you "local" has no boundary residents agree on. And the contradiction means a single verification strategy (all-vouching or all-credentials) won't satisfy both P01/P05's world and P02's.
   Now — your move, same as with an AI-coded transcript pass: don't take my counts on faith. Pick two of these themes and go check the actual quotes against what I pulled (I gave you IDs and line numbers on purpose). Does anything I called a theme look like a stretch once you reread it? And do you want to keep going with a synthesis pass (contradictions, segments, recommendations) or go verify what's here first?

WEDNESDAY
PRACTICE 3. 1IA to schema, from memory.
A rough requester site map next to a first-cut schema, with the agreement/divergence points marked.
https://lucid.app/lucidchart/b0fdcfa5-107b-462f-bbef-ea44a64d9e00/edit?beaconFlowId=403E2B6CD2079D9F&page=0_0&invitationId=inv_e646af4a-ef4a-433c-abef-1d2c2c44f2f5#

PRACTICE 3.2 Break a happy path → derive the API states.
Based on the workflow the brief describes (browse → respond with pricing → book/pay → rate), here's the simplest happy path:
Browse providers — Requester lands on a feed of ProviderCards scoped to their neighborhood (e.g., filtering to "house cleaners").
View provider profile — Requester taps a ProviderCard to see full details: pricing, availability, VerifiedBadge, and rating.
Request booking — Requester selects an available time slot and submits a booking request with the provider's stated price.
Confirm & pay — Provider accepts (or availability auto-confirms); Requester completes payment and sees a booking confirmation screen.
Job completed — Once the work is done, Requester gets a prompt to confirm completion.
Rate the provider — Requester leaves a rating/review, which rolls up into the provider's public rating.
One judgment call worth flagging: the brief's workflow list puts "post a need" before "browse providers," but posting a need adds a wait-for-responses step that breaks a tight 5-6 step happy path. I went with the browse-first flow since it's the more direct route to a booking — let me know if you'd rather see the post-a-need version instead.

PRACTICE 3.3
The 8 core objects
User — the account-level entity. Attributes: id, name, contact info, neighborhood_id, role (requester / provider / admin), created_at. Relationships: belongs to one Neighborhood; a Requester-role User creates ServiceRequests; a Provider-role User owns a ProviderListing; an Admin-role User approves/moderates ProviderListings and disputes.
Neighborhood — the hyperlocal scope that everything else is filtered through ("one neighborhood at a time, not city-wide"). Attributes: id, name, boundary/geo data. Relationships: has many Users, has many ProviderListings, has many ServiceRequests — trust mechanisms (verification, reviews) are scoped to it.
ServiceRequest ("a need") — created when a Requester posts what they want done. Attributes: id, requester_id, category, description, location, desired timing, status (open / matched / closed). Relationships: belongs to a Requester (User) and a Neighborhood; has many responses from Providers; can lead to a Booking.
ProviderListing — the public-facing profile, and the thing the brief calls out explicitly as "the signature piece" of the UI (ProviderCard). Attributes: id, provider_id (User), service categories offered, advertised pricing, availability, verification_status, badges, aggregate rating. Relationships: belongs to a Provider (User) and a Neighborhood; can respond to many ServiceRequests; has many Bookings; has many Reviews rolled up into its rating.
Booking — the transaction record once a Requester and Provider agree to work together. Attributes: id, service_request_id, provider_id, requester_id, scheduled time, agreed price, status (pending / confirmed / completed / cancelled). Relationships: links a ServiceRequest, a Provider, and a Requester; has one Payment; has zero or one Review.
Payment — attributes: id, booking_id, amount, status, timestamp, payer, payee. Relationships: belongs to exactly one Booking.
Review — the post-job rating. Attributes: id, booking_id, rating score, comment, reviewer_id (requester), reviewee_id (provider), timestamp. Relationships: belongs to a Booking; contributes to a ProviderListing's aggregate rating.
Message — direct communication between parties. Attributes: id, sender_id, recipient_id, parent context (service_request_id or booking_id), body, timestamp. Relationships: attaches to a ServiceRequest or Booking, and to the two Users conversing.
(A ninth candidate, ServiceCategory — dog walkers, house cleaners, handypeople, tutors — is arguably just an enum on ServiceRequest/ProviderListing rather than its own entity unless the product needs admin-managed taxonomy or category-specific fields later.)
As a relational model
Table
Key columns
users
id, name, role, neighborhood_id → neighborhoods.id
neighborhoods
id, name, boundary
service_requests
id, requester_id → users.id, neighborhood_id → neighborhoods.id, category, status
provider_listings
id, provider_id → users.id, neighborhood_id → neighborhoods.id, verification_status, advertised_price
bookings
id, service_request_id → service_requests.id, provider_listing_id → provider_listings.id, requester_id → users.id, status, agreed_price
payments
id, booking_id → bookings.id, amount, status
reviews
id, booking_id → bookings.id, reviewer_id → users.id, reviewee_id → users.id, score
messages
id, sender_id → users.id, recipient_id → users.id, service_request_id → service_requests.id (nullable), booking_id → bookings.id (nullable)

Where the UX and the data model might disagree
The brief describes two entry points into the funnel — "Requesters post needs or browse neighborhood providers" — but a clean relational model wants every Booking to trace back through a ServiceRequest. If someone books straight off a ProviderListing without ever posting a need, the model either needs service_request_id on Booking to be nullable, or the UI needs to silently create a ServiceRequest behind the scenes when someone books directly. Right now the brief doesn't say which, and that's a real design decision, not just a schema detail.
The brief treats Requester, Provider, and Admin as three distinct personas with separate interview groups and separate UI journeys, but nothing in the brief rules out one person holding more than one role (a neighbor could plausibly be both a requester and a provider). A single users table with a role column handles that fine; three fully separate entities, which is closer to how the UX seems to imagine them, would not.
"Shared building reviews" is mentioned as a trust mechanism, but there's no "Building" object in the model as scoped — only Neighborhood. If reviews are meant to be visible to everyone in a specific building (as opposed to the whole neighborhood), that implies a finer-grained location entity sitting between User and Neighborhood that the current 8-object list doesn't have.
Pricing appears twice with different meanings: ProviderListing carries an "advertised" price (what a Requester sees while browsing, feeding the ProviderCard), while the workflow says Providers "respond with availability and pricing" per request — a job-specific quote. The UI likely wants to show one clean price on the card, but the data model needs to keep the listing price and the negotiated booking price as separate fields, or bookings will silently overwrite what was advertised.
Verification is shown in the UI as a single binary VerifiedBadge, but the underlying process ("Admins verify new providers before marketplace appearance") is really a state machine — pending, verified, rejected — with an admin actor and a timestamp attached. A true data model wants an audit trail (who verified, when, maybe per category), which a single badge flag on ProviderListing doesn't capture.
FROM WEDNESDAY TO FRIDAY
https://claude.ai/artifact/11BEDoUTzer4u5CKTDDY7L?sk=3qOUi4mBgiZ2B2Ngjefo8g

THURSDAY
PRACTICE 4.1

PRACTICE 4.2 I used skill /
Design-critique

1. Contrast — real numbers

Body text color --text-body (
#3D3F37) used in .nb\_\_bio (neighbor description text) sits on a white card --surface-card (
#FFFFFF) → ratio = 10.69:1 → PASS, very strong.

But the smaller "muted" text — --text-muted (
#6E7064), used in .svc**byname (12.5px) and the unit label in .nb**price (12px) — sits on the app's cream background --color-bg (
#F6F2E7) → ratio = 4.51:1 → technically PASS, but barely (only 0.01 above the 4.5 minimum), and it's used at very small font sizes. Real risk.

2. Touch target — suspect element found

.svc\_\_fav (the heart "favorite" button on each service card) is coded as exactly width:32px; height:32px; in the CSS. That's below the 44pt comfortable tap target (though above the 24×24 CSS px hard floor). Concrete flag: 32×32px, not 44×44.

3. Color-alone — real signal found

.nb--featured (a "featured neighbor" card) is marked ONLY with box-shadow: var(--shadow-brand) (a soft glow) and a transparent border — no icon, no "Featured" text label anywhere in the code. A user with low vision, or anyone in bright light, may never notice this card is different from a regular one. This is a real color/shadow-only signal.

4. Semantics / focus risk — real bug found in the code

The same heart button (.svc\_\_fav) is written as:

<span className="svc__fav" role="button" aria-pressed={faved} aria-label="..." onClick={...}>

It's a <span>, not a real <button>. It has good aria-label and aria-pressed — but it has no tabIndex and no onKeyDown handler. A real <button> gets keyboard focus and Enter/Space activation for free; a <span role="button"> does not, unless you add those manually. Result: a keyboard-only user cannot Tab to this button or press Enter to activate it — it's invisible to keyboard navigation entirely, even though a mouse user can click it fine.

Good practice also found, worth mentioning on Friday: almost everything else on this screen (NeighborCard, LocationPicker, the "open request" card, category tags) already uses real <button type="button"> elements — so this codebase mostly gets semantics right. That makes finding #4 a strong, specific catch, not a generic complaint — exactly what "the gaps you caught" rewards on Demo day.

4.3 PRACTICE 4.3 SKILLED USED /design-system
I used the same real Home-screen source code from before (decoded from the prototype file) and checked every literal value against the actual Vello token list from the design system site. Here's the full audit.

On-system (correct, matches a token — even if hardcoded instead of var())

Font sizes: 11px (--text-2xs), 12px ×5 (--text-xs), 14px ×2 (--text-sm), 16px (--text-base), 18px (--text-md), 20px (--text-lg)
Spacing: 4px, 8px ×3, 12px ×4, 16px ×2, 20px ×5, 24px — all match --space-1 through --space-6
All colors — every single color on this screen uses var(--token), except two spots flagged below

Off-system (real consistency risks, with the token each should map to)

Font sizes — no token matches these at all:

Value found Where → Map to
13.5px .nb**bio var(--text-sm) 14px
15.5px .svc**title var(--text-md) 18px, or --text-base 16px
12.5px (×3) .svc**byname, .svc**rate, .orq**count var(--text-xs) 12px
10.5px .orq**eyebrow var(--text-2xs) 11px — this one is even smaller than the smallest defined token
19px .loc--inline .loc**name var(--text-md) 18px
15px .loc--pill .loc**name var(--text-sm) 14px
26px .head**greet (the big hero heading!) var(--text-xl) 24px, or --text-2xl 30px
17px (×2) .nb**name, .svc**price b var(--text-base) 16px
13px (×2) .section**title small, .maplink var(--text-sm) 14px

Spacing — the biggest pattern:

14px appears 6+ times (.section**head margin-bottom, .section**tools margin, .pop/.svc gap, .nb\_\_tap offset, etc.) — but no --space-\* token equals 14 (the scale jumps 12 → 16). This isn't one mistake, it's a repeated "phantom" value used everywhere instead of a real token. → Pick --space-3 (12px) or --space-4 (16px) consistently, or tell the design system team 14px needs to become an official token.

Other spacing one-offs, no token exists for any of these: 9px, 7px, 6px, 11px, 15px (×3), 34px, 10px (repeats in multiple gaps) → nearest real tokens are --space-1 (4px) or --space-2 (8px) for the small ones, --space-3(12)/--space-4(16) for the mid ones.

Color — 2 real hardcoded values:

.svc\_\_cat uses color:#fff → should be var(--text-inverse) or var(--white).

.svc\_\_cat also uses background:rgba(27,28,24,.62) — those exact numbers (27,28,24) are --ink-900 in disguise, just written as raw RGB with opacity instead of the token. → rgba(var(--ink-900-rgb), .62) if that exists, or flag that the system has no "overlay/scrim" token defined yet.

Bottom line for Friday: this screen honors the color tokens almost perfectly, but font sizes and spacing drift constantly into fractional, in-between numbers that don't exist anywhere in the official scale — 14px and the .5px font sizes are the clearest, most repeatable evidence of "AI honored the palette but drifted the scale."

FROM THURSDAY TO FRIDAY
-BEST MATCH IS IN RED THAT IS NOT THE RIGHT COLOR
-I dont think min walk is the right word for explain distance ,
-the circle around the message makes me feel sound

\*\* token audit
On-system (correct, matches a token)

Colors — every single color is correct: card background --surface-card, border --border-default, name text --text-strong, bio text --text-body, "Available" tag --coral-700/--coral-100/--coral-500, distance pill --green-700/--green-50/--green-200, price --text-strong, unit label --text-muted, chevron --text-subtle/--surface-sunken. Zero hardcoded hex found in this component.
Font sizes: "Available" tag 12px, "6 min walk" 12px, "$24" 14px, "/ walk" 12px — all match --text-xs/--text-sm.
Spacing: name-to-tag gap 8px, price top margin 8px — both match --space-2.

Off-system (real risks, with the token to use)

Value found Where on the card → Map to
17px "Maya Rivera" name var(--text-base) 16px
13.5px "Dog walker & pet sitter..." bio var(--text-sm) 14px
15px (card padding) space around the whole card var(--space-4) 16px, or --space-3 12px
14px (gap: photo to text) inside the card var(--space-3) 12px, or --space-4 16px — this exact 14px also showed up repeatedly on the full Home screen audit, so it's a repeating pattern, not a one-time slip
34px (space reserved for the chevron) right side of name row var(--space-8) 32px, or --space-10 40px
3px (bio top margin) just above bio text var(--space-1) 4px
10px (gap between distance pill and stars) meta row var(--space-2) 8px, or --space-3 12px
9px (meta row top margin) above distance/rating row var(--space-2) 8px
3px / 9px / 7px (distance pill's own padding) "6 min walk" pill all three should snap to --space-1 (4px) or --space-2 (8px)
5px / 11px / 9px (Available tag's own padding) "Available" tag same — should snap to --space-1/--space-2
-3px (verified checkmark badge offset) green checkmark on photo -var(--space-1) (-4px)

Bottom line for this one component: colors are perfect, but the name text size, the bio text size, and almost every internal padding/gap number are slightly off the scale — mostly by 1–3px, never landing exactly on a defined token. This is the same "close but not on-grid" pattern found across the whole screen, just concentrated here in one card.

I think claude is able to find diferences in text sizes and spaces but for me is easy to see color that not match with what they are represrnting and something that looks off visually

pratice 5.1
| Property | Observed value | Design token / status |
|---|---|---|
| Background | `#FFFFFF` | `var(--surface-card)` — ✓ resolved |
| Border (default) | 1.5px solid `#E5E4D6` | `var(--border-default)` — ✓ resolved |
| Radius | 20px | `var(--radius-lg)` — ✓ resolved |
| Padding | 15px (hardcoded) | Card scale: none=0/sm=14/md=20/lg=28 — ❌ off-system, matches none |
| Elevation (rest) | no shadow | flat = `box-shadow:none` — ✓ resolved |
| Elevation (hover) | `var(--shadow-md)` | should be `var(--shadow-lg)` — ❌ one level too weak |
| Elevation (featured) | `var(--shadow-brand)` | correct, separate token — ✓ resolved |
| Interactive | true, real button + cursor + onClick | default is false, explicit on is a sensible choice — ✓ resolved |
| Tappable chevron | top:14px right:14px, 26×26 circle, icon 15×15, `--text-subtle→--text-brand`, `--surface-sunken→--brand-primary-tint` | exact match to `.vl-card--tappable` — ✓ resolved |
| Element type (`as`) | real `<button type="button">` | matches rule: tappable card needs a real focusable element — ✓ passes |
| `featured` prop | boolean class, shadow-only | confirmed real documented prop — ✓ resolved |
| Red dot / unread indicator | not present | not applicable — confirmed absent, not a gap |
| Bio text size | 13.5px | documented principle "body text never below 14px" — ❌ real rule violation |
| Tap target (whole card) | 44px+ | documented principle "never below 44px" — ✓ passes |
| Name text ("Maya Rivera") | `font-family:var(--font-display); font-weight:700; font-size:17px; color:var(--text-strong)` | all real tokens — ✓ resolved |
| Price ("$24 / walk") | `font-family:var(--font-mono); font-size:14px; font-weight:600; color:var(--text-strong)`; "/ walk" is a plain `<span>`, same style as "$24" — no separate styling | on-system, one token set covers the whole line — ✓ resolved |
| Available badge | custom markup, `color:var(--coral-700); background:var(--coral-100)`, dot `var(--coral-500)`; padding `5px 11px 5px 9px`; font 12px; font-weight 600 hardcoded | ❌ off-system — this is exactly the `accent` variant's color pair, and the docs say "do not use accent badges for anything but a time-limited offer." Should be `<Badge variant="success" size="sm" dot>Available</Badge>`. Padding also matches no defined size step. |
| Walk-time icon color | inherits `currentColor` = `var(--green-700)` | ✓ resolved |
| Walk-time icon size | `13px` (hardcoded) | ⚠️ **unresolved** — checked the full token list plus every icon-shipping component (Tag=16px, Card chevron=15px, this=13px): no icon-size token or scale exists anywhere in the system. System-completeness gap, not a guessed answer. |
| Rating component | `<Rating value={n.rating} size="sm" />`, real import | ✓ resolved |
| Rating size | "sm" → 14px stars | ✓ resolved |
| Star color | `var(--rating)` amber | ✓ resolved |
| Value text ("4.9") | tabular numerals, `var(--text-strong)` | ✓ resolved |
| Gap: stars ↔ number | 6px | no matching `--space` token — but the system's own base `Rating` component has the same gap. Not app-level drift; it's baked into the system itself. |
| Walk-time chip element | plain `<span>`, not `Tag` | ⚠️ reasonable (pure info, not a filter) but skips the real `Tag` component's `interactive={false}` mode entirely |
| Walk-time chip font | `var(--font-mono)` | Tag uses `var(--font-sans)` — ❌ different font family |
| Walk-time chip padding | `3px 9px 3px 7px` | Tag's real padding is `8px 14px` — ❌ off-system |
| Walk-time chip colors | `--green-700` / `--green-50` / `--green-200` | Tag's default is neutral (`--text-body`/`--surface-card`/`--border-strong`) — invented its own color scheme instead of reusing Tag's states |
| Walk-time chip radius | `var(--radius-pill)` | matches Tag's radius — ✓ resolved |

practice 5.2
The component code + a token-fidelity diff listing each value as "token" or "drift," with corrections.

ProviderCard docs place rating under the name and price in its own column. The Home screen places rating next to the pill and price above it. I built from the Home screen is that the right call, or should new components match the documented ProviderCard layout?
