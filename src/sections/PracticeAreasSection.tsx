const PRACTICES = [
  "Mergers and Acquisitions",
  "Commercial Litigation",
  "Regulatory Advisory",
  "Private Equity Transactions"
];

export function PracticeAreasSection() {
  return (
    <section className="section-shell">
      <h2 data-anim="practice-title" className="section-title">
        Practice Areas
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {PRACTICES.map((practice) => (
          <article
            key={practice}
            data-anim="practice-card"
            className="rounded-lg border border-white/10 bg-surface p-6 transition hover:-translate-y-0.5 hover:border-accent/60"
          >
            <h3 className="font-serif text-2xl">{practice}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
