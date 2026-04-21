import Image from "next/image";

export function HeroSection() {
  return (
    <section className="section-shell grid gap-10 md:grid-cols-2 md:items-center">
      <div className="space-y-6">
        <h1 data-anim="hero-title" className="section-title">
          Strategic Counsel for High-Stakes Decisions.
        </h1>
        <p data-anim="hero-copy" className="section-copy">
          Complex transactions, disputes, and regulatory matters handled with precision.
        </p>
        <a data-anim="hero-cta" href="#contact" className="cta-button">
          Request a Confidential Consultation
        </a>
      </div>
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-surface">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1440&q=80"
          alt="Premium legal office interior"
          width={1440}
          height={900}
          className="h-full w-full object-cover"
          priority
        />
      </div>
    </section>
  );
}
