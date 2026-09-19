import { createFileRoute, Link } from "@tanstack/react-router";
import { ProviderCard } from "@/components/vello/provider-card";

export const Route = createFileRoute("/live-component")({
  head: () => ({
    meta: [{ title: "ProviderCard — live component" }],
  }),
  component: ComponentDemo,
});

function ComponentDemo() {
  return (
    <div className="min-h-screen bg-background px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-lg space-y-10">
        <div>
          <Link
            to="/"
            className="font-mono text-[length:var(--text-xs)] text-text-muted hover:text-text-body"
          >
            ← Back to the audit
          </Link>
          <h1 className="mt-4 text-3xl font-extrabold text-text-strong">
            ProviderCard — the real component
          </h1>
          <p className="mt-3 text-[length:var(--text-sm)] text-text-body">
            Rebuilt in this repo from the Friday spec sheet and token-drift
            corrections, not just described in the audit. Four states, built
            explicitly rather than only the happy path.
          </p>
        </div>

        <section className="space-y-3">
          <p className="font-mono text-[length:var(--text-2xs)] uppercase tracking-[var(--ls-wide)] text-text-muted">
            Success
          </p>
          <ProviderCard
            name="Maya Rivera"
            bio="Dog walker & pet sitter, just up on 4th Ave."
            rating={4.9}
            price={24}
            priceUnit="walk"
            walkMinutes={6}
            available={true}
            verified={true}
          />
        </section>

        <section className="space-y-3">
          <p className="font-mono text-[length:var(--text-2xs)] uppercase tracking-[var(--ls-wide)] text-text-muted">
            No rating yet — never fake a number
          </p>
          <ProviderCard
            name="Jonah Pratt"
            bio="New to Vello — background check complete, first bookings open."
            rating={null}
            price={18}
            priceUnit="walk"
            walkMinutes={11}
            available={true}
            verified={true}
          />
        </section>

        <section className="space-y-3">
          <p className="font-mono text-[length:var(--text-2xs)] uppercase tracking-[var(--ls-wide)] text-text-muted">
            No photo — initials fallback, never a broken image
          </p>
          <ProviderCard
            name="Denise Okafor"
            bio="Trusted neighborhood sitter, five years on 6th."
            rating={5.0}
            price={20}
            priceUnit="walk"
            walkMinutes={4}
            available={true}
            verified={true}
          />
        </section>

        <section className="space-y-3">
          <p className="font-mono text-[length:var(--text-2xs)] uppercase tracking-[var(--ls-wide)] text-text-muted">
            Unavailable
          </p>
          <ProviderCard
            name="Priya Nathan"
            bio="Dog walker & pet sitter, 4th Ave and nearby."
            rating={4.7}
            price={22}
            priceUnit="walk"
            walkMinutes={8}
            available={false}
            verified={true}
          />
        </section>

        <section className="space-y-3">
          <p className="font-mono text-[length:var(--text-2xs)] uppercase tracking-[var(--ls-wide)] text-text-muted">
            Featured — shadow-only signal, confirmed real pattern
          </p>
          <ProviderCard
            name="Tomás Reyes"
            bio="Handyman, small repairs and furniture assembly."
            rating={4.8}
            price={30}
            priceUnit="hour"
            walkMinutes={9}
            available={true}
            verified={true}
            featured={true}
          />
        </section>
      </div>
    </div>
  );
}
