export function ContactCTASection() {
  return (
    <section id="contact" className="section-shell">
      <div
        data-anim="cta-block"
        className="rounded-xl border border-accent/40 bg-surface px-8 py-10 text-center md:px-12"
      >
        <h2 className="section-title text-3xl md:text-5xl">Speak directly with senior counsel.</h2>
        <p className="section-copy mx-auto">
          Confidential response within one business day.
        </p>
        <a data-anim="cta-button" href="mailto:confidential@laweyer.com" className="cta-button mt-8">
          Request Consultation
        </a>
      </div>
    </section>
  );
}
