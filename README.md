# Vello Fidelity Report

A week-long Ravn Nerdery exercise in design literacy and AI-assisted engineering, built around **Vello**, a hyperlocal services product. The task: learn to read design decisions like an engineer, audit real research and flows, then generate and audit one UI component for fidelity to Vello's design system.

**Live app:** https://vello-fidelity-review.vercel.app

## What this repo is

This is a work sample, not a product. `src/` holds the actual `ProviderCard` component (plus `Rating` and `VerifiedMark`) built and audited on Friday, and the site itself presents the week's fidelity audit for mentor review, section by section.

**All deliverables, organized by day, live in [`Weekly-Deliverables/`](./Weekly-Deliverables).** That folder is the one to check against the program's requirements — each day has its own subfolder with that day's micro-practices, main deliverable, supporting screenshots, and a log of the prompts used.

## The week, day by day

- **[Monday](./Weekly-Deliverables/Day-1-Monday)** — Design foundations: product vs. UX vs. UI vs. visual, and where each maps to a data-model or API decision. Deliverable: a process map for Vello v1 (Discover → Handoff) plus a one-page reflection with two documented pushbacks.
- **[Tuesday](./Weekly-Deliverables/Day-2-Tuesday)** — Discovery & research: synthesizing interview transcripts without taking an AI's synthesis on faith. Deliverable: an audited set of themes (one downgraded after checking it against verbatim quotes), two problem statements, and the data entities they imply.
- **[Wednesday](./Weekly-Deliverables/Day-3-Wednesday)** — UX architecture: turning information architecture into a schema, and a happy path into a full state/API contract. Deliverable: the "verify a provider, as admin" flow, stress-tested against edge cases, with an honestly-flagged gap against Vello's real screens.
- **[Thursday](./Weekly-Deliverables/Day-4-Thursday)** — UI craft & critique: reading hierarchy, running accessibility checks, and auditing token fidelity by hand before comparing against an AI pass. Deliverable: a human-vs-AI comparative audit of a planted-issue screen.
- **[Friday](./Weekly-Deliverables/Day-5-Friday)** — Engineering: specifying a component without an inspect panel, generating it with AI, and auditing the result for token drift and accessibility. Deliverable: the working `ProviderCard` component, a fidelity audit (before/after, token drift, a11y fixes), a guardrail that measurably reduced drift on regeneration, and open questions for the designer.
- **[Full-Week Extras](./Weekly-Deliverables/Full-Week-Extras)** — the engineering design-support checklist grown from Monday's touchpoints, and a handoff checklist of every open question raised across the week.

## Process, not just output

The point of this week wasn't to get an AI to produce correct-looking work — it was to verify it. Each day's process log records the prompts actually used, including the ones that failed or needed a follow-up: Claude refusing to fake a missing icon asset twice before being pointed to the real component bundle, a research theme downgraded from "5/6 participants agree" to "2 strong, 2 adjacent, 1 contradiction" after checking the quotes, a guardrail file that turned manual one-by-one fixes into a first-try-correct build. Those corrections are the actual work product, as much as the final component is.

## Development

Requires Node.js and npm.

```sh
git clone <this-repository-url>
cd vello-fidelity-review
npm i
npm run dev
```

Other scripts: `npm run build`, `npm run lint`, `npm run format`.
