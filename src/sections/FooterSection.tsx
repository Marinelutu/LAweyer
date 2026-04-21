export function FooterSection() {
  return (
    <footer data-anim="footer" className="border-t border-white/10">
      <div className="section-shell grid gap-6 py-12 text-sm text-muted md:grid-cols-3">
        <p>LAweyer LLP</p>
        <p>Regulatory disclosures and legal notices available on request.</p>
        <p className="md:text-right">© {new Date().getFullYear()} LAweyer. All rights reserved.</p>
      </div>
    </footer>
  );
}
