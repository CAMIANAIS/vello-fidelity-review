## monday

PRACTICE 1.1
Sort the decisions - and flag the ones that hit your code.
~15 MIN · INDIVIDUAL · NO AI
Below are ten decisions a team might make about Vello. Label each one Product, UX, UI, or Visual. Then add a second mark: which ones would change a data model, an endpoint, or a route you'd have to build?

Vello charges providers a flat monthly fee instead of per-booking commission.
The "Book now" button is persimmon, not forest green.
A requester must verify their address before they can post a need.
Provider availability shows as a weekly calendar, not a list.
Vello launches with dog-walking only, then expands.
Rating stars use the amber color from the design system.
After booking, the user lands on a confirmation screen, not back on the feed.
The admin verification queue sorts oldest-first.
Body text is set in Hanken Grotesk at 17px.
Vello requires a real-name profile, not a username.
OUTPUT
A labeled list of 10 items + the subset that touches your data model or API. Notice how many "design" decisions are actually schema decisions in disguise.
PRACTICE 1.2
Teach the vocabulary back.
~20 MIN · INDIVIDUAL · WITH CLAUDE
The fastest way to find out whether you understand the four terms is to be quizzed on edge cases. Use Claude as a tutor that tests you, not one that lectures you.

PROMPT
I'm an engineer learning the difference between product design, UX, UI,
and visual design. Quiz me: give me 8 realistic decisions about a
hyperlocal services app, one at a time. After each answer, tell me if
I'm right, correct me, and explain the boundary case. For each, also say
whether the decision would change a data model or an API contract. Don't
give answers up front. Make a few deliberately ambiguous.
OUTPUT
Your quiz transcript. Note the two you got wrong or found ambiguous - those are your weak spots this week.
PRACTICE 1.3
Find your touchpoints.
~20 MIN · INDIVIDUAL · WITH CLAUDE, THEN VERIFY
Map where an engineer can improve a design before it's drawn. Be concrete - make Claude give specifics tied to a real artifact, not platitudes like "communicate early."

PROMPT
I'm an engineer. Walk through a standard 5-phase design process
(discover, define, architect, design, validate). For each phase, name
one specific contribution an engineer can make that measurably improves
the design work - and one common way engineers accidentally make design
harder. Tie each to a real artifact: a schema, an endpoint, a token, a
feasibility constraint. No generic advice.
Then push back: pick the most generic contribution and reply "that's too vague - give me a concrete example with a specific artifact." Make it earn the answer.

OUTPUT
A short table: phase → your contribution → your failure mode. This becomes the seed of your Friday engineering checklist.

## tuesday

PRACTICE 2.1
Match the method to the question.
~15 MIN · INDIVIDUAL · NO AI
For each Vello question, decide whether you'd reach for qualitative or quantitative research first, and name the method (interview, survey, usability test, analytics). Then add: which answer would change something you'd build - a schema field, an event to log, an endpoint?

Why do requesters drop off before completing a booking?
What percentage of providers respond within an hour?
Can a first-time admin figure out how to approve a provider?
What does "trust" actually mean to a Vello requester?
Which neighborhoods have the most unmet demand?
Is our new onboarding flow easier than the old one?
OUTPUT
Six method choices with one-line justifications, each tagged with the system change it would imply. Flag the one where qual and quant clearly combine.
PRACTICE 2.2
Spot the leading question.
~15 MIN · INDIVIDUAL · WITH CLAUDE
Interview quality lives or dies on question wording. Train your ear for it.

PROMPT
Here are 6 user-interview questions for Vello. For each, tell me whether
it's well-formed or flawed (leading, hypothetical, double-barreled, or
yes/no), and rewrite the flawed ones. Questions: "Would you use an app
that finds local help?" / "Tell me about the last time you needed help
around the house." / "Don't you think trust is important?" / "How do you
find and pay providers today?" / "What frustrates you about TaskRabbit?"
/ "Would you pay more for a verified neighbor?"
Write your own verdicts first, then compare. Where you disagree, decide who's right and why.

OUTPUT
Your six verdicts vs Claude's, disagreements resolved.
PRACTICE 2.3
Audit a synthesis - and extract the entities it implies.
~25 MIN · INDIVIDUAL · WITH CLAUDE, HEAVY VERIFICATION
The core skill of the day in miniature. Have Claude synthesize, then try to break it - and pull out the data the themes imply.

Load two or three Vello interview transcripts into Claude.
Ask for the top three themes with supporting quotes and participant IDs.
Pick the theme Claude sounds most confident about and demand the receipts; then ask what objects/attributes the theme implies the system must store.
AUDIT PROMPT
For the theme you ranked #1, list every verbatim quote that supports it,
with participant ID and roughly where it appears. Then list any evidence
that contradicts or complicates it. Finally, name the data entities and
attributes this theme implies Vello must model (e.g., a "verification"
on a Provider). If the real support is thinner than your summary, say so.
OUTPUT
One theme traced to source, a note on anything Claude overstated, and a short list of entities the evidence implies.

## wednesday

PRACTICE 3.1
IA to schema, from memory.
~15 MIN · INDIVIDUAL · NO AI
Without looking at Vello's screens, sketch a simple site map for the Requester role: top-level sections and what lives under each. Then, beside it, draft the tables you'd expect - entities, key columns, and the foreign keys that connect them. Mark where the IA structure and your schema agree and where they'd diverge.

OUTPUT
A rough requester site map next to a first-cut schema, with the agreement/divergence points marked.
PRACTICE 3.2
Break a happy path → derive the API states.
~20 MIN · INDIVIDUAL · WITH CLAUDE
Generate a deliberately naive flow, then turn everything it skips into a state-and-response contract.

PROMPT
Give me the simplest possible happy-path flow for a Vello requester
booking a provider: just the screens where everything goes right, no
edge cases. Keep it to 5-6 steps.
On your own, list every state and branch it ignores - empty, error, loading, permission, cancellation, timeout, "provider unavailable" - aim for 8+. For each, write the API response (status + shape) and the UI state it drives. Then ask Claude for its list and compare.

OUTPUT
A state table (state → trigger → API status → UI) plus your edge-case list next to Claude's.
PRACTICE 3.3
Objects to tables.
~20 MIN · INDIVIDUAL · WITH CLAUDE, THEN VERIFY
Make the IA-to-data-model bridge concrete.

PROMPT
Based on Vello's product brief, list the 6-8 core "objects" in the
product. For each, give its key attributes and its relationships to the
other objects. Then show the same set as a simple relational data model.
Flag any place where the UX structure and the data model might disagree.
Check the relationships against the brief yourself. Does a Booking belong to one Request or many? Can a Provider serve more than one Neighborhood? Where the brief is silent, note it as an open question.

OUTPUT
An object list with relationships + the parallel data model, and one noted place where structure and data could conflict.

## thrusday

PRACTICE 4.1
Rank the hierarchy - and find the tokens behind it.
~15 MIN · INDIVIDUAL · NO AI
Open Vello's polished home screen. Note the first three things your eye lands on, in order, and name the mechanism for each (scale, weight, color, position, spacing). Then ask: which of those cues is driven by a design-system token (a type scale, a color role) versus a one-off? Where prominence and importance disagree, that's a hierarchy note.

OUTPUT
Your eye-path (3 elements) + the mechanism + the token behind each + one note where prominence and importance disagree.
PRACTICE 4.2
Run the accessibility checks - including semantics.
~20 MIN · INDIVIDUAL · WITH CLAUDE TO ASSIST
Take one Vello screen and run four concrete checks. For contrast, paste the two hex values to Claude and ask it to compute the ratio and whether it passes 4.5:1.

Contrast: body text vs background - compute the ratio; pass or fail?
Touch targets: are tappable elements plausibly 44pt+ (and at least 24×24 CSS px)? Flag any too small.
Color-alone: is any meaning carried only by color (e.g., a red-only error)?
Semantics: if this were your code, would it be a button or a div-with-onClick? Would focus order and labels be correct?
OUTPUT
Four findings with concrete evidence - the contrast ratio, the suspect target, the color-only signal, and one semantics/focus risk.
PRACTICE 4.3
Token or hardcode?
~15 MIN · INDIVIDUAL · WITH CLAUDE
Build intuition for design-system consistency. Give Claude the Vello design system reference and one screen.

PROMPT
Here is the Vello design system (its color, type, and spacing tokens)
and one screen. List every visual value on the screen - colors, font
sizes, spacings - and for each, tell me whether it matches a defined
token or is a one-off that breaks the system. Flag the off-system values
as consistency risks, and suggest the token each should map to.
OUTPUT
A list of on-system vs off-system values, off-system ones flagged with the token they should use. This is the exact lens Friday uses on real code.

# friday

PRACTICE 5.1
Spec it without an inspect panel.
~20 MIN · INDIVIDUAL · NO AI
Open the Vello home screen export next to the design system. Pick one component - the provider card is a good one. Write the spec yourself: for every visual property (background, text color, type family and size, weight, spacing, corner radius, the walk-time chip, the rating stars) name the value you observe and the token it should map to. Where you can't resolve a value to a token, don't guess. Mark it unresolved and write the question you'd ask the designer.

OUTPUT
A three-column spec sheet - property, observed value, token or "unresolved" - plus your list of handoff questions.
PRACTICE 5.2
Generate, then audit for token fidelity.
~25 MIN · INDIVIDUAL · WITH CLAUDE
Give Claude the screen export, the design system, and your spec sheet, and have it generate the component. Claude Code if you have it, a Claude artifact if you don't - the audit is identical either way. Then audit the output against your spec: did it reference tokens or hardcode hex values? Did it preserve spacing and states, or round everything to the nearest 8? Did it invent a hover state nobody specified? Fix at least one thing it got wrong.

OUTPUT
The component code + a token-fidelity diff listing each value as "token" or "drift," with corrections.
PRACTICE 5.3
Accessibility audit of a generated Vello screen.
~20 MIN · INDIVIDUAL · WITH CLAUDE, THEN VERIFY
Run the component you just generated, or the request-detail screen your mentor shares, through the web.dev and APG lens: semantic HTML vs div soup, keyboard focus order, contrast (AA), form labels, and correct ARIA only where needed. Fix the highest-severity issue.

OUTPUT
An a11y findings report (issue → WCAG/APG reference → fix) plus the patched component.
PRACTICE 5.4
Turn the design system into guardrails.
~15 MIN · INDIVIDUAL · WITH CLAUDE
Translate Vello's design-system rules and the "trust scales locally" bet into a reusable guardrail - a CLAUDE.md, a Skill, or the custom instructions on a Claude project, whichever you have: which tokens to use, banned hardcoded values, the a11y baseline, and a "compare the render against the reference screen before declaring it done" step. Then regenerate Practice 5.2's component with it active and see if drift drops.

OUTPUT
A saved guardrail that measurably reduces token drift and a11y issues on the next generation, plus the before-and-after to prove it.
