const TESTIMONIALS = [
  "Strategic, responsive, and exceptionally precise. - CEO, Growth Company",
  "Their counsel gave us clarity in a highly volatile dispute. - General Counsel, Global Group",
  "Disciplined execution from mandate to resolution. - Founder, Private Equity Portfolio"
];

export function TestimonialsSection() {
  return (
    <section className="section-shell">
      <h2 className="section-title">Client Trust</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {TESTIMONIALS.map((quote) => (
          <blockquote
            key={quote}
            data-anim="testimonial-card"
            className="rounded-lg border border-white/10 bg-surface p-6 text-muted"
          >
            {quote}
          </blockquote>
        ))}
      </div>
    </section>
  );
}
