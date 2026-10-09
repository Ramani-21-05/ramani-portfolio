export default function Vouches() {
  return (
    <section id="vouches">
      <div className="section-label">
        <span>// 04</span>
        <span>Public Vouches &amp; Verification Vault</span>
      </div>

      <div className="card" style={{ borderLeft: '3px solid var(--blue)' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--fg)', marginBottom: '0.5rem' }}>
          Transparent Proof-of-Work &amp; Community Reviews
        </h3>
        <p style={{ color: 'var(--fg-dim)', fontSize: '14px', lineHeight: 1.65, marginBottom: '1.25rem', maxWidth: '680px' }}>
          I believe that engineering credibility should be publicly verifiable rather than based on resume claims. All peer code reviews, troubleshooting assistance, and client testimonials are tracked publicly in my open GitHub repository.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
          <a
            href="https://github.com/Ramani-21-05/vouches"
            target="_blank"
            rel="noreferrer"
            className="btn-clean"
          >
            Inspect Vouches on GitHub &rarr;
          </a>
          <a
            href="https://github.com/Ramani-21-05/vouches/issues/1"
            target="_blank"
            rel="noreferrer"
            className="btn-clean-outline"
          >
            Leave a Vouch in Issue #1
          </a>
        </div>
      </div>
    </section>
  )
}
