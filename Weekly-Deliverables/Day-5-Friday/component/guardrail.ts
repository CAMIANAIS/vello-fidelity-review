/** Canonical guardrail spec — keep in sync with ./guardaril.md */

export type GuardrailSection = {
  id: string;
  title: string;
  items: readonly string[];
  tone?: "default" | "banned" | "a11y" | "done";
};

export const GUARDRAIL_SPEC = {
  title: "Vello Guardrail",
  source: "design/docs/guardaril.md",
  sections: [
    {
      id: "tokens",
      title: "Tokens to use",
      tone: "default",
      items: [
        "Colors: real colors.css semantic aliases first (--surface-card, --border-default, --text-strong/body/muted, --success/--success-tint, --accent/--accent-tint, --rating, --paper) over raw scale values when a semantic name exists.",
        "Spacing: --space-0 through --space-32 only (4, 8, 12, 16, 20, 24, 28, 32, 40, 48...).",
        "Radius: --radius-xs/sm/md/lg/xl/2xl/pill.",
        "Type: --text-2xs(11) through --text-6xl(76); --fw-regular/medium/semibold/bold/extra; --font-display/--font-sans/--font-mono.",
        "Shadows: --shadow-xs/sm/md/lg/xl/inset/brand.",
      ],
    },
    {
      id: "banned",
      title: "Banned",
      tone: "banned",
      items: [
        "No hardcoded hex or raw px outside the scales above.",
        "No inventing a color pair when a semantic token already exists for that meaning (e.g. a status color has --success/--success-tint — don't build a custom one).",
        "No approximating a missing asset (icon, shield, etc.) — say so explicitly, don't fake it.",
        "No silently resolving an open design conflict between two references — flag it.",
        "No rounding one scale to match a different, unrelated scale (e.g. icon size to type size).",
      ],
    },
    {
      id: "a11y",
      title: "Accessibility baseline",
      tone: "a11y",
      items: [
        "Body text never below 14px. Tap targets never below 44px. Contrast never below 4.5:1.",
        "Any tappable element must be a real focusable control (<button>, or tabIndex + keyboard handler) — never a div/span with only onClick.",
        'Status icons/marks need a real accessible label (title/aria-label/role="img").',
        "Never replace a shape+color signal with color/shape alone.",
      ],
    },
    {
      id: "done",
      title: "Before declaring done",
      tone: "done",
      items: [
        "Compare the render against the reference screenshot, property by property, before saying it's finished.",
        "Anything you can't verify against a real token or the reference: mark unresolved, say so — don't guess.",
      ],
    },
  ],
} as const satisfies { title: string; source: string; sections: readonly GuardrailSection[] };

export function getGuardrailSection(id: GuardrailSection["id"]) {
  const section = GUARDRAIL_SPEC.sections.find((s) => s.id === id);
  if (!section) throw new Error(`Unknown guardrail section: ${id}`);
  return section;
}
