import Image from "next/image";

const CASE_STEPS = [
  "Mandate: Time-critical cross-border restructuring.",
  "Strategy: Coordinated litigation and negotiation.",
  "Outcome: Major liability reduction and accelerated resolution."
];

export function FeaturedCaseSection() {
  return (
    <section data-pin="case" className="section-shell min-h-[100vh]">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div className="space-y-4">
          <h2 className="section-title">Featured Case</h2>
          {CASE_STEPS.map((step) => (
            <p key={step} data-case-step className="section-copy mt-0">
              {step}
            </p>
          ))}
        </div>
        <div className="overflow-hidden rounded-xl border border-white/10 bg-surface">
          <Image
            src="https://images.unsplash.com/photo-1528747008803-95f24384778a?auto=format&fit=crop&w=1200&q=80"
            alt="Corporate boardroom visual"
            width={1200}
            height={750}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
