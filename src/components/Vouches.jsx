export default function Vouches() {
  return (
    <section id="vouches">
      <div style={{ marginBottom: '2rem' }}>
        <span className="eyebrow-tag">
          // 05 VERIFICATION &amp; PROOF
        </span>
        <h2 className="display-title" style={{ marginTop: '0.5rem' }}>
          Public Vouches &amp; <span style={{ color: 'var(--blue)' }}>Reputation Vault.</span>
        </h2>
      </div>

      <div className="bento-card" style={{
        background: 'linear-gradient(135deg, rgba(11, 16, 29, 0.95) 0%, rgba(14, 23, 42, 0.95) 100%)',
        border: '1px solid var(--line-strong)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.75rem' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.4rem' }}>
              GITHUB: Ramani-21-05/vouches
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
              Public Code Reviews &amp; Developer Testimonials
            </h3>
          </div>

          <div className="hud-pill" style={{ color: '#4ade80', borderColor: 'rgba(74, 222, 128, 0.3)', background: 'rgba(74, 222, 128, 0.08)' }}>
            <span className="hud-dot" style={{ background: '#4ade80', boxShadow: '0 0 10px #4ade80' }} />
            <span>VERIFIED PUBLIC THREAD</span>
          </div>
        </div>

        <p style={{ color: 'var(--fg-dim)', fontSize: '14.5px', lineHeight: 1.7, maxWidth: '780px', marginBottom: '2rem' }}>
          I believe engineering credibility should be publicly inspectable rather than based on resume claims. Every peer review, production bug turnaround, and client consultation is logged transparently in my public repository.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <a
            href="https://github.com/Ramani-21-05/vouches"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Inspect Vouches on GitHub &rarr;
          </a>
          <a
            href="https://github.com/Ramani-21-05/vouches/issues/1"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Leave Feedback in Issue #1
          </a>
        </div>
      </div>
    </section>
  )
}
