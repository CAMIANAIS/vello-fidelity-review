import {
  GUARDRAIL_SPEC,
  getGuardrailSection,
  type GuardrailSection,
} from "../../../design/docs/guardaril";
import { Eyebrow, Mono } from "./primitives";

const PANEL_STYLES: Record<NonNullable<GuardrailSection["tone"]>, string> = {
  default: "border-border bg-muted/50",
  banned: "border-accent/30 bg-accent-tint/50",
  a11y: "border-border bg-muted/50",
  done: "border-border bg-card",
};

function GuardrailList({ items, mono = false }: { items: readonly string[]; mono?: boolean }) {
  return (
    <ul
      className={`mt-[var(--space-3)] space-y-[var(--space-2)] ${mono ? "font-mono text-[length:var(--text-sm)]" : "text-[length:var(--text-sm)]"} text-text-body`}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function GuardrailPanel({ section }: { section: GuardrailSection }) {
  const tone = section.tone ?? "default";
  return (
    <div className={`rounded-[var(--radius-md)] border p-[var(--space-5)] ${PANEL_STYLES[tone]}`}>
      <Eyebrow>{section.title}</Eyebrow>
      <GuardrailList items={section.items} mono={section.id === "tokens"} />
    </div>
  );
}

/** Full guardrail spec from design/docs/guardaril.md */
export function GuardrailSpec() {
  return (
    <div className="space-y-[var(--space-4)]">
      <div className="grid gap-[var(--space-4)] sm:grid-cols-2">
        <GuardrailPanel section={getGuardrailSection("tokens")} />
        <GuardrailPanel section={getGuardrailSection("banned")} />
      </div>
      <GuardrailPanel section={getGuardrailSection("a11y")} />
    </div>
  );
}

/** Footer callout — "Before declaring done" from the design system guardrail */
export function GuardrailDoneCallout() {
  const done = getGuardrailSection("done");

  return (
    <div className="rounded-[var(--radius-lg)] border border-border bg-card p-[var(--space-6)] shadow-sm sm:p-[var(--space-8)]">
      <p className="text-[length:var(--text-sm)] text-text-muted">
        Everything above followed this rule. It's pulled live from the same guardrail file that
        governed the whole build, not just written here for effect.
      </p>
      <div className="mt-[var(--space-4)]">
        <Eyebrow>{done.title}</Eyebrow>
      </div>
      <ul className="mt-[var(--space-3)] max-w-2xl space-y-[var(--space-2)] text-[length:var(--text-sm)] leading-[var(--lh-relaxed)] text-text-body">
        {done.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="mt-[var(--space-4)] font-mono text-[length:var(--text-2xs)] text-text-muted">
        Source: <Mono>{GUARDRAIL_SPEC.source}</Mono>,{" "}
        <a href="/deliverables/guardrail.md" download className="underline hover:text-text-brand">
          download it
        </a>
      </p>
    </div>
  );
}
