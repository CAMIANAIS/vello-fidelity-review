import { createFileRoute } from "@tanstack/react-router";
import { GradeProvider, GradeSummary } from "@/components/audit/grading";
import { Section } from "@/components/audit/section";
import { DataTable, Eyebrow, Mono, Quote, StatusPill } from "@/components/audit/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vello ProviderCard — Design Fidelity Audit" },
      {
        name: "description",
        content:
          "A section-by-section engineering and design fidelity audit of one AI-built Vello ProviderCard: token drift, accessibility findings, the guardrail test, and open questions for design.",
      },
      { property: "og:title", content: "Vello ProviderCard — Design Fidelity Audit" },
      {
        property: "og:description",
        content:
          "Token drift found and fixed, WCAG findings, a measurable guardrail before/after, and the questions still open for design.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuditPage,
});

const SECTIONS = [
  { id: "guardrail", label: "01 — The guardrail" },
  { id: "token-drift", label: "02 — Token drift" },
  { id: "accessibility", label: "03 — Accessibility" },
  { id: "guardrail-test", label: "04 — Guardrail test" },
  { id: "open-questions", label: "05 — Open questions" },
  { id: "process", label: "06 — Process log" },
  { id: "checklist", label: "07 — Engineering checklist" },
  { id: "handoff", label: "08 — Handoff asks" },
];

function AuditPage() {
  return (
    <GradeProvider>
      <div className="min-h-screen bg-background">
        <a
          href="#guardrail"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-xl focus:bg-card focus:px-4 focus:py-2"
        >
          Skip to the audit
        </a>

        <header className="mx-auto max-w-5xl px-5 pb-10 pt-16 sm:px-8 sm:pt-24">
          <Eyebrow>Vello · Nerdery Friday demo</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] text-foreground sm:text-6xl">
            ProviderCard: a design fidelity audit
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-body">
            One component, built with AI assistance from the Home screen reference, cross-checked
            against the real Vello token files and component bundle. Everything below is what was
            found, what was fixed, and what was deliberately left open.
          </p>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Component", v: "ProviderCard (Maya Rivera)" },
              { k: "Contrast checked", v: "5.69:1 — passes AA" },
              { k: "Left unresolved", v: "5 questions for design" },
            ].map((item) => (
              <div key={item.k} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                  {item.k}
                </dt>
                <dd className="mt-2 text-[15px] font-semibold text-foreground">{item.v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://claude.ai/design/p/82fde247-6976-415f-b9a6-f69df091813a?file=Vello+Provider+Card.dc.html&via=share"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-border bg-card px-4 py-2.5 font-mono text-xs text-ink-body hover:border-ink-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Working build (guardrail-active, the “after”) ↗
            </a>
            <a
              href="https://claude.ai/design/p/a31ed5d9-0b86-4424-8dff-301c4a5b2f56?file=Provider+Card+Audit.dc.html"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-border bg-card px-4 py-2.5 font-mono text-xs text-ink-body hover:border-ink-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Earlier build (v1–v3, manual fixes, the “before”) ↗
            </a>
          </div>

          <div className="mt-10">
            <GradeSummary total={SECTIONS.length} />
          </div>
        </header>

        <div className="mx-auto max-w-5xl gap-10 px-5 pb-24 sm:px-8 lg:flex lg:max-w-6xl">
          <nav
            aria-label="Sections"
            className="mb-10 shrink-0 lg:sticky lg:top-10 lg:mb-0 lg:h-fit lg:w-56"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
              Review in order
            </p>
            <ul className="mt-3 space-y-1.5">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block rounded-lg px-2 py-1.5 font-mono text-xs text-ink-body hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <main className="min-w-0 flex-1 space-y-8">
            <Section
              id="guardrail"
              number="01"
              title="The guardrail, and why it exists"
              summary="Not style policing. Vello's product bet is “trust scales locally,” and the ProviderCard is where that bet becomes visible to every requester."
            >
              <Quote source="Vello design system">
                “Trust is visible: verification, ratings and distance are first-class UI, never fine
                print. Trust marks use shape plus color, never color alone.”
              </Quote>
              <ul className="space-y-3">
                <li>
                  <strong className="text-foreground">Real tokens, not hardcoded values</strong> —
                  keeps every trust mark consistent across the app, so a requester learns to
                  recognize it once and trusts it everywhere.
                </li>
                <li>
                  <strong className="text-foreground">Shape + color, never color alone</strong> — a
                  shield rebuilt as a plain circle isn’t a small style slip, it’s the accessible
                  signal the trust bet depends on, gone.
                </li>
                <li>
                  <strong className="text-foreground">Real labels, real keyboard access</strong> —
                  if only sighted mouse users can perceive who’s verified, the trust mechanism
                  silently excludes everyone else.
                </li>
                <li>
                  <strong className="text-foreground">Flag uncertainty, never guess</strong> — an
                  invented data point is worse than an honest gap, because it’s a false trust signal
                  presented as a real one.
                </li>
              </ul>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-muted/50 p-5">
                  <Eyebrow>Tokens to use</Eyebrow>
                  <ul className="mt-3 space-y-2 font-mono text-[13px] text-ink-body">
                    <li>Spacing: --space-0 … --space-32 only</li>
                    <li>Radius: --radius-xs/sm/md/lg/xl/2xl/pill</li>
                    <li>Type: --text-2xs (11) … --text-6xl (76)</li>
                    <li>Shadows: --shadow-xs/sm/md/lg/xl/inset/brand</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-persimmon/30 bg-persimmon-tint/50 p-5">
                  <Eyebrow>Banned</Eyebrow>
                  <ul className="mt-3 space-y-2 text-[14px] text-ink-body">
                    <li>No hardcoded hex or raw px outside the scales.</li>
                    <li>No inventing a color pair when a semantic token exists.</li>
                    <li>No approximating a missing asset — say so instead.</li>
                    <li>No silently resolving a conflict between two references.</li>
                    <li>No rounding one scale to match an unrelated scale.</li>
                  </ul>
                </div>
              </div>
              <p className="text-ink-muted">
                Accessibility baseline: body text never below 14px, tap targets never below 44px,
                contrast never below 4.5:1, and any tappable element must be a real focusable
                control — never a <Mono>div</Mono> with only <Mono>onClick</Mono>.
              </p>
            </Section>

            <Section
              id="token-drift"
              number="02"
              title="Token drift: found and fixed"
              summary="Six properties measured against the real token files, not the docs page — the docs page is a JS app with nothing machine-readable in it."
            >
              <DataTable
                headers={["Property", "Was", "Now", "Token"]}
                rows={[
                  ["Card padding", "15px, hardcoded", "20px", <Mono key="a">card md</Mono>],
                  [
                    "Hover elevation",
                    <span key="b">
                      <Mono>--shadow-md</Mono> (one level too weak)
                    </span>,
                    <Mono key="c">--shadow-lg</Mono>,
                    "",
                  ],
                  ["Name text size", "17px (off-scale)", "18px", <Mono key="d">--text-md</Mono>],
                  [
                    "Bio text size",
                    "13.5px (violates “never below 14px”)",
                    "14px",
                    <Mono key="e">--text-sm</Mono>,
                  ],
                  [
                    "Available badge",
                    "Custom coral/accent colors",
                    "Real success colors",
                    <Mono key="f">--success / --green-100 / --green-700</Mono>,
                  ],
                  [
                    "Verified mark",
                    "Hand-built circle, hardcoded hex, no shape meaning",
                    <span key="g">
                      Real <Mono>VerifiedMark</Mono> component
                    </span>,
                    <span key="h">
                      shield shape, <Mono>--green-600</Mono>, <Mono>--paper</Mono> rim
                    </span>,
                  ],
                ]}
              />
              <div className="flex flex-wrap gap-2">
                <StatusPill tone="fixed">6 fixed</StatusPill>
                <StatusPill tone="open">2 left documented, not “fixed”</StatusPill>
              </div>
              <p>
                <strong className="text-foreground">Left open on purpose:</strong> the walk-time
                chip’s styling and the 13px icon size. Both are open questions, not confirmed drift.
              </p>
              <Quote>
                Fixing card padding to the token scale (15px → 20px) made the build more
                token-correct but <em>less</em> pixel-faithful to the actual reference — because the
                reference itself doesn’t follow its own scale. The walk-chip’s padding and the
                card’s 14px gap are exact matches to real, off-token production code.
              </Quote>
              <p className="text-ink-muted">
                The system breaks its own rules too: <Mono>Tag</Mono>’s documented padding is{" "}
                <Mono>8px 14px</Mono>, and 14px isn’t on the official <Mono>--space</Mono> scale
                either (it jumps 12 → 16). This isn’t only AI drift.
              </p>
            </Section>

            <Section
              id="accessibility"
              number="03"
              title="Accessibility: found and fixed"
              summary="Four findings, each tied to a specific WCAG criterion or the design system's own documented rule."
            >
              <DataTable
                headers={["Issue", "Reference", "Fix"]}
                rows={[
                  [
                    <span key="1">
                      Card’s outer wrapper was a <Mono>div</Mono> with <Mono>cursor:pointer</Mono>{" "}
                      only — mouse-clickable, not keyboard-reachable
                    </span>,
                    "WCAG 2.1.1 Keyboard (Level A)",
                    <span key="2">
                      Rebuilt as a real <Mono>{"<button type=\"button\">"}</Mono>; Tab reaches it,
                      Enter/Space activates it
                    </span>,
                  ],
                  [
                    <span key="3">
                      Verified mark had no <Mono>role</Mono>, <Mono>aria-label</Mono> or{" "}
                      <Mono>title</Mono> — invisible to screen readers
                    </span>,
                    "WCAG 1.1.1 Non-text Content",
                    <span key="4">
                      Real <Mono>VerifiedMark</Mono> ships <Mono>role="img"</Mono> +
                      “Background-checked” automatically
                    </span>,
                  ],
                  [
                    "Verified mark was a plain circle, so the shape-only signal was gone",
                    "Docs’ own DON’T: “never substitute a plain green dot or check for the shield”",
                    "Real component renders the actual olive shield + cream check",
                  ],
                  [
                    "Contrast: walk-time chip text on its background",
                    "WCAG 1.4.3 AA (4.5:1)",
                    <span key="5">
                      Checked: <strong className="text-green-700">5.69:1</strong> — passes, no fix
                      needed
                    </span>,
                  ],
                ]}
              />
              <p>
                The contrast number is <Mono>--green-700</Mono> (<Mono>#466621</Mono>) on{" "}
                <Mono>--green-100</Mono> (<Mono>#EBF1DB</Mono>), checked in the WebAIM Contrast
                Checker. The real background is <Mono>--green-50</Mono>, lighter — so the shipped
                ratio is at least this good.
              </p>
              <div className="rounded-xl border border-border bg-muted/50 p-5">
                <Eyebrow>Conflict flagged, not silently resolved</Eyebrow>
                <p className="mt-3">
                  The chevron affordance in the reference is ~28px, below the 44px tap-target
                  baseline. Resolved the way the system’s own “tappable cards” pattern does it: the
                  whole card is the focusable button, the chevron is <Mono>aria-hidden</Mono>{" "}
                  decoration. If the chevron itself should be the control, it has to grow to 44px —
                  which changes the header layout. Noted as a real tradeoff, not fixed silently
                  either way.
                </p>
              </div>
            </Section>

            <Section
              id="guardrail-test"
              number="04"
              title="The guardrail test: measurable before and after"
              summary="Same component, same reference. The only variable was whether the written guardrail was active."
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5">
                  <StatusPill tone="open">Before — v1–v3</StatusPill>
                  <p className="mt-4">
                    Padding, shadow, text sizes, badge color, the verified mark’s shape, its missing
                    label, and the keyboard bug each needed a separate, hand-written fix
                    instruction, one round at a time.
                  </p>
                </div>
                <div className="rounded-xl border border-green-700/30 bg-green-100/50 p-5">
                  <StatusPill tone="fixed">After — guardrail active</StatusPill>
                  <p className="mt-4">
                    Regenerated from a plain instruction with no hand-corrected spec. Every one of
                    those matched the reference on the first try, with no follow-up — and it flagged
                    two new honest gaps on its own instead of guessing.
                  </p>
                </div>
              </div>
              <p>
                Two things it refused to fake, correctly: the shield (asked twice for the real
                source instead of approximating with a circle), and the avatar photo — it rendered
                the real <Mono>Avatar</Mono> initials fallback rather than invent a portrait. For
                the card width, where no container token matches the reference, it used{" "}
                <Mono>calc(var(--container-app) + var(--space-12))</Mono> — a token-derived value —
                and flagged it, instead of a guessed raw px.
              </p>
              <p className="text-ink-muted">
                Four component states were built explicitly, not just the happy path: Success, No
                rating yet (“Not rated yet,” never a faked rating), No photo (initials), and
                Unavailable (tag reads “Unavailable”).
              </p>
            </Section>

            <Section
              id="open-questions"
              number="05"
              title="Unresolved: questions for the designer"
              summary="Five things deliberately left open. Each one could have been quietly decided in code; deciding them here would have answered design's question for them."
            >
              <ol className="space-y-4">
                {[
                  {
                    t: "Layout conflict",
                    d: "The documented ProviderCard places rating under the name and price in its own column. The Home screen places rating next to the distance pill and price above it. I built from the Home screen. Which should new components follow?",
                  },
                  {
                    t: "No icon-size token exists",
                    d: "Tag = 16px, card chevron = 15px, walk icon = 13px — all hardcoded independently, nowhere in the system. Left at 13px and flagged, rather than rounding to 14px, which would invent a false match between icon size and type size.",
                  },
                  {
                    t: "No container-width token matches the card",
                    d: "--container-app (430px) forces the pill and rating onto separate lines, unlike the reference. Should a token be added, or is the reference intentionally non-standard?",
                  },
                  {
                    t: "Three items found on the reference screen itself",
                    d: "Tag/chevron crowding, the “$24 / walk” price line’s spacing, and the walk-time chip showing both a feet icon and the word “walk.” Not introduced by the AI — inherited correctly. Intentional, or worth fixing at the source?",
                  },
                  {
                    t: "Rebuild on the real ProviderCard?",
                    d: "The real ProviderCard, Badge, Tag, Rating and VerifiedMark are all accessible via the bundle. Declined for now: the real ProviderCard uses the documented layout, so rebuilding on it would silently answer question 1.",
                  },
                ].map((q, i) => (
                  <li key={q.t} className="rounded-xl border border-border bg-muted/40 p-5">
                    <p className="font-mono text-xs text-persimmon">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 font-semibold text-foreground">{q.t}</p>
                    <p className="mt-2">{q.d}</p>
                  </li>
                ))}
              </ol>
            </Section>

            <Section
              id="process"
              number="06"
              title="Process log: Monday to Friday"
              summary="The prompts, the failures caught, and the refinements — including the gaps that are still open."
            >
              <div className="space-y-5">
                {[
                  {
                    day: "Monday — design process mapping",
                    body: "Six-phase process map, Discover → Handoff, one decision and one artifact per phase.",
                    flag:
                      "Honest gap: the task asked for two documented pushbacks against the first process map. That back-and-forth happened live, but wasn’t captured in writing. Naming it rather than pretending otherwise.",
                  },
                  {
                    day: "Tuesday — research synthesis",
                    body: "Themes with participant counts, verbatim quotes, and contradicting evidence, separated from inference.",
                    flag:
                      "Failure caught: the first pass counted Theme 1 as 5/6 participants in support. Auditing back to verbatim quotes showed P02 was a direct contradiction — he wants formal verification, not just vouching. Corrected to “2 strong, 2 adjacent, 1 direct contradiction”: materially weaker, and more honest.",
                  },
                  {
                    day: "Wednesday — flow + state/API contract",
                    body: "Full flow diagram, per-screen state tables, endpoint list with states.",
                    flag:
                      "Known failure, not yet closed: that session had no access to the live design system, so the flow came from generic marketplace patterns, not Vello’s real admin screens. Its “named gap” is a hypothesis, not a verified diff.",
                  },
                  {
                    day: "Thursday — component audit",
                    body: "An AI pass and a human pass, run separately, then compared.",
                    flag:
                      "Only the human caught: wrong badge component/variant, redundant icon + text, and the trust-hierarchy note. Only the AI caught: touch-target size, the keyboard/focus bug, a color-only signal, and a 4.51:1 contrast risk. Overlap: none — fully complementary.",
                  },
                  {
                    day: "Friday — spec sheet + build prompt",
                    body: "A no-AI spec sheet, property by property, with the correct official token for each — then the build prompt, then the guardrail.",
                    flag:
                      "Prompt v2 swapped the vague “attached design system” for the actual colors.css, spacing.css and typography.css contents, after discovering the docs page is a JS app with nothing a tool can read.",
                  },
                ].map((d) => (
                  <article key={d.day} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="text-lg font-bold text-foreground">{d.day}</h3>
                    <p className="mt-2">{d.body}</p>
                    <p className="mt-3 border-l-[3px] border-persimmon pl-4 text-ink-muted">
                      {d.flag}
                    </p>
                  </article>
                ))}
              </div>
              <Quote source="Thursday verified-badge check, against Monday’s own artifact">
                “Olive shield, never a dot” — checked directly against the real card: it{" "}
                <em>is</em> a shield. Not a violation. A hypothesis tested and disproved, kept as a
                legitimate finding rather than discarded.
              </Quote>
              <div className="rounded-xl border border-border bg-muted/50 p-5">
                <Eyebrow>The line in every build prompt</Eyebrow>
                <p className="mt-3 font-mono text-[13px] leading-relaxed text-ink-body">
                  “Where you have to invent or guess something I didn’t specify, say so explicitly
                  instead of silently picking a value — I want to review those separately.”
                </p>
              </div>
            </Section>

            <Section
              id="checklist"
              number="07"
              title="Engineering design-support checklist"
              summary="Grown from Monday's phase / contribution / failure-mode table: concrete things engineering can do at each phase, with this week's own work as the evidence."
            >
              <div className="space-y-4">
                {[
                  {
                    phase: "Discover",
                    doThis:
                      "Pull real numbers from existing logs and analytics before a design decision gets made, not just opinions.",
                    week:
                      "Separated which research questions were already answerable from existing data (drop-off %, response-time %) from which genuinely needed real interviews.",
                    avoid: "Jumping to a fix before the real question is explored.",
                  },
                  {
                    phase: "Define",
                    doThis:
                      "Sketch the real data shape early enough to catch missing edge cases before design locks it in.",
                    week:
                      "Caught that “post a need” vs. “browse providers” implies two different Booking-to-ServiceRequest relationships, before the flow was finalized.",
                    avoid: "Quietly shrinking the request to what’s easy to build, without saying so.",
                  },
                  {
                    phase: "Architect",
                    doThis:
                      "Name the real technical limit with an actual number (ms, cost, rows), not a vague objection.",
                    week: null,
                    avoid: "A flat “no” instead of “yes, but here’s the tradeoff.”",
                  },
                  {
                    phase: "Design",
                    doThis:
                      "Share what’s actually buildable right now, in real component states, not just the happy path.",
                    week:
                      "Built and audited the card’s Success, No-rating, No-photo and Unavailable states explicitly.",
                    avoid: "Swapping the real design for a shortcut mid-build, without telling anyone.",
                  },
                  {
                    phase: "Validate",
                    doThis:
                      "Add real tracking and real checks on the real feature with real data, not a synthetic case that hides the actual problem.",
                    week:
                      "Checked actual token values and a real contrast ratio (5.69:1) instead of eyeballing “looks fine.”",
                    avoid: "Testing with fake or tiny data that hides the real problem.",
                  },
                  {
                    phase: "Handoff",
                    doThis:
                      "Give exact values back to design: the real token name, the real field name, the real number. Not an approximation.",
                    week:
                      "Every fix instruction named the exact token (--success, --shadow-lg, --paper) instead of “make it look right.”",
                    avoid: "Building from memory of a meeting instead of the real spec.",
                  },
                ].map((row) => (
                  <div key={row.phase} className="rounded-xl border border-border bg-card p-5">
                    <Eyebrow>{row.phase}</Eyebrow>
                    <p className="mt-2 font-semibold text-foreground">{row.doThis}</p>
                    {row.week ? (
                      <p className="mt-3 rounded-lg bg-green-100 px-4 py-3 text-[14px] text-green-700">
                        This week: {row.week}
                      </p>
                    ) : null}
                    <p className="mt-3 text-ink-muted">Avoid: {row.avoid}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              id="handoff"
              number="08"
              title="Handoff checklist: what I'm asking design and product for"
              summary="Gathered across the whole week, not just Friday. Open items, in the order they came up."
            >
              <div className="space-y-5">
                {[
                  {
                    day: "Monday — process",
                    items: [
                      "Honest gap, named rather than hidden: the two documented pushbacks against the first process map happened live in session, but weren’t written down at the time.",
                    ],
                  },
                  {
                    day: "Tuesday — research to data model",
                    items: [
                      "Add Vouch/Recommendation as its own entity (voucher_id, provider_id, times_used, free-text comment, timestamp), not folded into a generic star rating. P01: “used him eleven times… that’s the whole product.”",
                      "Keep Provider.verification as a separate, coexisting attribute set (id_verified, background_check_status, references) alongside vouching. P02’s evidence shows the platform needs both, not one instead of the other.",
                      "Consider a known_by_requester boolean per vouch, so the UI can distinguish “someone you actually know” from “a stranger nearby who also used this provider.”",
                      "Consider a vouch_count / corroboration weighting. P06: “three unknowns might be worth one Denise.”",
                    ],
                  },
                  {
                    day: "Wednesday — flow / API contract",
                    items: [
                      "Confirm the browse-first happy path (vs. the brief’s “post a need” first) is the intended v1 flow. I went browse-first for a tighter 5–6 step path — it needs sign-off, not assumption.",
                      "Still open: the flow was drafted without live access to the real Admin screen, so its named gap is a hypothesis, never verified against the actual prototype.",
                    ],
                  },
                  {
                    day: "Thursday — component audit",
                    items: [
                      "Wrong badge component/variant used for “Available” in the source prototype (accent/coral instead of success/green). Worth fixing at the source, not just in the AI-generated copy.",
                      "Walk-time chip shows both a feet icon and the word “walk.” Confirm intentional or simplify.",
                      "Tag/chevron crowding and the price line’s spacing, both on the original reference screen. Intentional, or design debt?",
                    ],
                  },
                  {
                    day: "Friday — component fidelity",
                    items: [
                      "Layout conflict: the documented ProviderCard and the Home screen place rating and price differently. Which should new builds follow?",
                      "No icon-size token or scale exists anywhere in the system (Tag = 16px, chevron = 15px, walk icon = 13px). Should one be defined?",
                      "No container-width token matches the reference card’s width. Add one, or is the reference intentionally non-standard?",
                      "Should new components be built directly on the real ProviderCard / Badge / Tag / Rating / VerifiedMark components, instead of hand-approximated each time?",
                    ],
                  },
                ].map((group) => (
                  <div key={group.day} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="text-lg font-bold text-foreground">{group.day}</h3>
                    <ul className="mt-3 space-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span
                            className="mt-2 h-2 w-2 shrink-0 rounded-full bg-persimmon"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-9">
              <Eyebrow>Before declaring done</Eyebrow>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-body">
                Compare the render against the reference screenshot, property by property, before
                saying it’s finished. Anything that can’t be verified against a real token or the
                reference: mark unresolved, say so — don’t guess.
              </p>
              <div className="mt-6">
                <GradeSummary total={SECTIONS.length} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </GradeProvider>
  );
}
