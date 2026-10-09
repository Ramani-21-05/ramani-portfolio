export default function Hero() {
  return (
    <section style={{ paddingBottom: '3rem', position: 'relative' }}>
      <div className="ambient-glow-1" />

      {/* Status HUD Bar */}
      <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <div className="hud-pill">
          <span className="hud-dot" />
          <span>FEDORA 41 x86_64 WORKSTATION • ACTIVE TELEMETRY</span>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--fg-mute)' }}>
          KERNEL: Linux 6.11.8 • COIMBATORE, TAMIL NADU
        </span>
      </div>

      {/* Oversized Headline */}
      <h1 className="display-huge" style={{ marginBottom: '2rem', maxWidth: '1100px' }}>
        ENGINEERING<br />
        <span style={{
          color: 'transparent',
          WebkitTextStroke: '1px #fff',
          textShadow: '0 0 40px rgba(56, 189, 248, 0.2)'
        }}>
          LOW-LATENCY SYSTEMS
        </span><br />
        <span style={{ color: 'var(--blue)' }}>&amp; DEEP SEQUENCE MODELS.</span>
      </h1>

      {/* Narrative Lead */}
      <p className="lead-text" style={{ maxWidth: '780px', marginBottom: '2.5rem' }}>
        I'm Ramani Pannirselvam. I work at the intersection of quantitative market microstructure, deep sequence modeling in PyTorch (Transformers &amp; Mamba), and Linux systems plumbing. I design systems that behave reliably under extreme computational and financial friction.
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '4.5rem' }}>
        <a href="#projects" className="btn-primary">
          Explore Systems Builds &rarr;
        </a>
        <a href="https://github.com/Ramani-21-05/vouches" target="_blank" rel="noreferrer" className="btn-secondary">
          Public Vouches Vault
        </a>
        <a href="mailto:ramanikrish2105@gmail.com" className="btn-secondary">
          ramanikrish2105@gmail.com
        </a>
      </div>

      {/* Telemetry Metric Grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem',
        borderTop: '1px solid var(--line)', paddingTop: '2.5rem'
      }} className="hero-metrics-grid">
        {[
          { val: '183M+', lbl: 'Historical Tick Bars', desc: '10-Yr Indian Equities Dataset' },
          { val: 'O(N)', lbl: 'Linear Sequence Scaling', desc: 'Pyramid Mamba Video Decoder' },
          { val: '< 1ms', lbl: 'Shared Memory Ring', desc: 'Lock-Free /dev/shm Buffer' },
          { val: 'Sub-2ms', lbl: 'Full-Text Retrieval', desc: 'SQLite FTS5 BM25 Engine' },
        ].map((item) => (
          <div key={item.lbl} className="bento-card" style={{ padding: '1.5rem' }}>
            <div className="telemetry-val" style={{ color: 'var(--blue)' }}>{item.val}</div>
            <div className="telemetry-lbl" style={{ color: '#fff', fontWeight: 600 }}>{item.lbl}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--fg-mute)', marginTop: '0.2rem' }}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media(max-width: 900px) {
          .hero-metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media(max-width: 520px) {
          .hero-metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
