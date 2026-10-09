import Reveal from './Reveal.jsx'

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: 'var(--section-v) 0', background: 'var(--bg-2)', position: 'relative', overflow: 'hidden' }}>
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <Reveal>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
            // TRANSMISSION & TELEMETRY
          </span>
          <h2 className="h2" style={{ marginBottom: '1.25rem', maxWidth: '760px' }}>
            Open For High-Impact Systems &amp; <span style={{ color: 'var(--blue)' }}>AI Engineering.</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: '580px', marginBottom: '2.5rem', color: 'var(--fg-dim)' }}>
            Available for selective engineering roles, quantitative systems infrastructure, and low-latency backend contracts. Direct communication, zero bureaucracy.
          </p>
        </Reveal>

        {/* Public Vouches Card */}
        <Reveal delay={1}>
          <div className="terminal-card" style={{ maxWidth: '680px', marginBottom: '2.5rem' }}>
            <div className="terminal-header">
              <span>● PROOF OF EXECUTION &amp; REPUTATION VAULT</span>
              <span style={{ color: 'var(--blue)' }}>GITHUB: Ramani-21-05/vouches</span>
            </div>
            <div className="terminal-body" style={{ background: '#070a10', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <p style={{ color: '#fff', fontWeight: 600, fontSize: '14px', marginBottom: '0.25rem' }}>
                  Transparent Public Code Reviews &amp; Client Vouches
                </p>
                <p style={{ color: 'var(--fg-dim)', fontSize: '12px' }}>
                  Inspect real-world problem turnarounds, Linux fixes, and peer testimonials.
                </p>
              </div>
              <a
                href="https://github.com/Ramani-21-05/vouches"
                target="_blank"
                rel="noreferrer"
                className="btn btn-acid"
                style={{ fontSize: '11px', padding: '0.5rem 1.1rem' }}
              >
                View Vouches Vault &rarr;
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="contact-btns" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="mailto:ramanikrish2105@gmail.com" className="btn btn-acid" style={{ fontSize: '12px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>mail</span>
              ramanikrish2105@gmail.com
            </a>
            <a href="https://github.com/Ramani-21-05" target="_blank" rel="noopener noreferrer"
              className="btn btn-outline" style={{ gap: '.5rem', fontSize: '12px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>terminal</span>
              GitHub (@Ramani-21-05)
            </a>
            <a href="https://linkedin.com/in/ramani2105" target="_blank" rel="noopener noreferrer"
              className="btn btn-outline" style={{ gap: '.5rem', fontSize: '12px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>share</span>
              LinkedIn
            </a>
            <a href="https://x.com/rk_d0tw" target="_blank" rel="noopener noreferrer"
              className="btn btn-outline" style={{ gap: '.5rem', fontSize: '12px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>tag</span>
              X (@rk_d0tw)
            </a>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media(max-width:640px){
          .contact-btns { flex-direction: column!important; align-items: stretch!important; }
          .contact-btns > a { justify-content: center!important; }
        }
      `}</style>
    </section>
  )
}
