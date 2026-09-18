# Vello Fidelity Report

## Objective

Build a presentation site for my Vello Nerdery Friday demo: an
engineering/design fidelity audit of one AI-built component, for
mentors to review and grade section by section. This is a work
sample for grading, not a marketing site — editorial and calm,
not a sales landing page.

## Content source

Pull real content from these files (attached). Use the exact
numbers, token names, and quotes as written — do not summarize
them away or invent anything:
- fidelity-audit.md (the main deliverable)
- guardaril.md
- handoff-checklist.md
- engineering-design-support-checklist.md
- promptsUse.md (the full process log)
- findings.md
- my-work.md (Monday-Thursday work)

## Sections, in this order

1. Overview: one paragraph on what Vello is and what this week's
   task was (audit and build the ProviderCard component with AI,
   prove it's faithful to the real design system).
2. Monday: process map summary + artifact link.
3. Tuesday: research synthesis + the entity list, including the
   one theme I downgraded after auditing the evidence.
4. Wednesday: flow + state/API contract summary + artifact link,
   noting the still-open verification gap honestly.
5. Thursday: component audit, human pass vs. AI pass, as a table.
6. Friday (main section): the fidelity audit, token drift table,
   accessibility table, guardrail before/after, unresolved
   questions, and both live component links (before/after).
7. Guardrail: the actual rules used, plus the "why" tied to
   Vello's "trust scales locally" bet.
8. Handoff checklist.
9. Engineering design-support checklist.
10. Process log: collapsible/expandable section with the full
    prompt history, including the failures and refinements, not
    just the final prompts.

## Must-have functionality

- Every section must be downloadable/printable as a clean PDF a
  mentor can trigger without logging in or using dev tools. Use a
  real print stylesheet (@media print) plus a visible "Download
  PDF" button, not just the browser's default print dialog.
- Tables must stay readable in the PDF, no cut-off columns.
- A table of contents at the top with anchor links to each
  section, since mentors will grade section by section.

## Visual style, match the real Vello design system

- Background: cream paper, #F6F2E7
- Strong text: near-black, #1B1C18. Body text: #3D3F37
- Primary/brand color: olive green, #557E26 (links, headers, checks)
- Accent: persimmon, #E2552C, used sparingly, never as the main
  action color (that's the real system's own rule)
- Success indicators: green-100/green-700 pairing
- Headings: a grotesque display font like "Bricolage Grotesque"
  (fallback "Hanken Grotesk"). Body: "Hanken Grotesk". Tokens,
  code, and numbers: a monospace font like "JetBrains Mono"
- Soft corner radii (16-20px), warm soft shadows, generous
  spacing. Warm and human, not a cold corporate dashboard.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://vello-fidelity-review.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1affa108-fb12-4189-b8ae-2b406df90b65).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
