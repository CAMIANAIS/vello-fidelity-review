## monday

For Friday's demo · Monday
Map design's role on Vello - and where engineering plugs in.

Apply all three concepts to the product you'll use all week.

Open the Vello project in Claude and read the product brief in full if you haven't.
Ask Claude to map the end-to-end design process for Vello v1 - phases, key decisions, and the artifacts each produces.
Challenge it at least twice. Where is it generic? Where does Vello's hyperlocal, three-role, trust-based nature change the process?
For each phase, pin down one concrete thing engineering could contribute - and which design decision implies a data-model or API decision.
STARTER PROMPT
Here is Vello's product brief. Act as a senior product designer at an
agency. Map the end-to-end design process for Vello v1: phases, key
decisions per phase, and artifacts produced. For each phase, name one
concrete thing an engineer can contribute before design starts, and one
design decision that forces a data-model or API decision. Be specific to
Vello - its hyperlocal scope, three roles, and trust model.
DELIVERABLE
A one-page reflection: what design owns at Ravn, what engineering contributes across the lifecycle, and one design decision you'd reframe as a system decision. Draft it with Claude - the conclusions and the two documented pushbacks must be yours. Bring it to Friday's demo.

## tuesday

For Friday's demo · Tuesday
Synthesize Vello's research, then defend it - and list the entities it implies.

Load the full set of Vello interview transcripts into Claude.
Ask for a thematic synthesis: named themes, how many participants raised each, supporting quotes with IDs, and contradictions.
Audit at least two themes back to verbatim evidence. Correct anything overstated. Flag the loud-but-shallow theme if you find one.
Turn the verified themes into two problem statements (who / what / why, no solutions) and a short list of the data entities and states they imply.
STARTER PROMPT
Synthesize these interview transcripts. For each theme: a name, how many
participants mentioned it, 2 verbatim quotes with participant ID, and any
contradicting evidence. Separate what users SAID from what you INFER. Do
not invent quotes. Rank themes by how well the evidence supports them. At
the end, list the data entities/attributes the verified themes imply.
DELIVERABLE
Your audited synthesis, two problem statements, and an entity list - including at least one place where you corrected Claude. Bring it to Friday's demo.

## wednesday

For Friday's demo · Wednesday
Generate a Vello flow, then derive its state & API contract.

Pick one Vello core task: post a request, respond as a provider, or verify a provider as admin.
Ask Claude to draft the full user flow as a diagram artifact - every screen, decision point, and system state, with assumptions marked.
Stress-test it: "what if the provider never responds?", "where can the requester cancel?", "what does the admin see if verification fails?" Make Claude revise until the unhappy paths are covered.
Translate the revised flow into a state table per screen and a list of endpoints with their response states. Name one gap between the flow and Vello's current screens.
STARTER PROMPT
Draft a user flow for [task] in Vello as a flowchart. Include every
screen, user decision, and system state - loading, error, empty, success.
Mark assumptions with [ASSUMPTION] so I can verify them against the brief.
Then turn it into a state table (state -> trigger -> API status -> UI) and
a list of endpoints with their states.
DELIVERABLE
A revised flow artifact + a state/API contract table + the gaps and assumptions you caught and made Claude fix. Bring it to Friday's demo.

## thursday

For Friday's demo · Thursday
Audit a Vello component: token fidelity + accessibility.

Your mentor assigns you a Vello screen or component that contains planted issues.
First pass, no AI: note hierarchy, token consistency, and accessibility problems using today's vocabulary. This pass comes first.
Second pass: give Claude the screen and the design system; ask for a structured critique - hierarchy, token consistency, accessibility (contrast, targets, focus, semantics), and missing states.
Compare: what did Claude catch that you missed? What did it miss or get confidently wrong? Resolve every disagreement against the standard or the system.
STARTER PROMPT
Critique this Vello screen against the attached design system. Structure
it as: 1) visual hierarchy, 2) consistency with design-system tokens, 3) accessibility (contrast ratios, touch targets, focus, semantics), 4) missing UI states. For each issue: severity, the evidence, and the
principle or standard it violates. Do not soften findings.
DELIVERABLE
Your comparative audit - human pass vs AI pass - with the planted issues found, the token drift flagged, and a note on what each pass uniquely caught. Bring it to Friday's demo.

## friday

For Friday's demo · Engineering
From design to faithful code.

Implement one Vello component end-to-end with AI assistance, then prove it's faithful to the system. The deliverable is the component plus a short design fidelity audit: where the AI honored the design system, where it drifted, where it failed accessibility, and how you corrected each. Present it on Demo day.

DELIVERABLE
The working component + a one-page fidelity audit (token drift found and fixed, a11y issues found and fixed) + your unresolved-value questions for the designer + the guardrail you used.

## Checklist

Friday Delivery Checklist

 Create a small React + TypeScript app
 Choose one real Vello component
 Open the Vello screen and Design System side by side
 Create a spec: property → observed value → design token / unresolved
 Identify colors, typography, spacing, radius, states, icons, and layout
 Mark anything you cannot prove from the Design System as unresolved, not guessed
 Give Claude the reference screen + Design System + your spec
 Generate the component with AI
 Make sure the component uses semantic/design tokens, not random hardcoded values
 Compare the rendered component visually against Vello
 Find and document every important token drift
 Fix the drift you find
 Check semantic HTML
 Check keyboard navigation/focus
 Check labels and ARIA usage
 Check AA color contrast
 Fix the highest-impact accessibility problems
 Create a reusable CLAUDE.md or Skill with Vello rules
 Include rules such as: no unexplained hardcoded values, use tokens, preserve accessibility, do not invent states, verify against reference
 Run Claude again with the guardrail active
 Compare before vs. after and demonstrate that the guardrail reduced mistakes
 Prepare a 1-page fidelity audit containing: what Claude got right, token drift found, accessibility issues found, fixes made, and before/after evidence
 Prepare your unresolved questions for the designer
 Make sure the project runs cleanly with no obvious console, TypeScript, lint, or accessibility errors
 Be ready to demo: reference → generated version → problems found → fixes → final version → guardrail
