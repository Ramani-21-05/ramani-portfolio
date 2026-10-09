export default function Contact() {
  return (
    <section id="contact">
      <div style={{ marginBottom: '2rem' }}>
        <span className="eyebrow-tag">
          // 05 TRANSMISSION &amp; CHANNELS
        </span>
        <h2 className="section-title">
          Direct Line &amp; <span style={{ color: 'var(--blue)' }}>Engineering Signal.</span>
        </h2>
      </div>

      <div className="bento-card" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
        <p style={{ color: 'var(--fg)', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '720px', marginBottom: '2.5rem' }}>
          Open for selective systems engineering roles, quantitative infrastructure contracts, and deep sequence modeling collaborations.
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem',
          borderTop: '1px solid var(--line)', paddingTop: '2rem'
        }} className="contact-grid">
          {[
            { label: 'EMAIL', val: 'ramanikrish2105@gmail.com', href: 'mailto:ramanikrish2105@gmail.com' },
            { label: 'GITHUB', val: '@Ramani-21-05', href: 'https://github.com/Ramani-21-05' },
            { label: 'LINKEDIN', val: 'in/ramani2105', href: 'https://linkedin.com/in/ramani2105' },
            { label: 'X / TWITTER', val: '@rk_d0tw', href: 'https://x.com/rk_d0tw' },
          ].map((item) => (
            <div key={item.label}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--fg-mute)', marginBottom: '0.4rem', letterSpacing: '0.08em' }}>
                {item.label}
              </div>
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#fff',
                  fontWeight: 600, transition: 'color 0.15s ease'
                }}
                onMouseEnter={e => e.target.style.color = 'var(--blue)'}
                onMouseLeave={e => e.target.style.color = '#fff'}
              >
                {item.val} &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width: 860px) {
          .contact-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media(max-width: 480px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
