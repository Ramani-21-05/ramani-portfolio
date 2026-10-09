export default function Contact() {
  return (
    <section id="contact">
      <div className="section-label">
        <span>// 05</span>
        <span>Contact &amp; Links</span>
      </div>

      <p style={{ color: 'var(--fg)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '640px' }}>
        I'm always open to discussing algorithmic trading infrastructure, deep sequence architectures, and systems engineering. The fastest way to reach me is by email or directly on GitHub.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--fg-mute)', width: '80px' }}>Email:</span>
          <a href="mailto:ramanikrish2105@gmail.com" className="link-blue">
            ramanikrish2105@gmail.com
          </a>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--fg-mute)', width: '80px' }}>GitHub:</span>
          <a href="https://github.com/Ramani-21-05" target="_blank" rel="noreferrer" className="link-blue">
            github.com/Ramani-21-05
          </a>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--fg-mute)', width: '80px' }}>LinkedIn:</span>
          <a href="https://linkedin.com/in/ramani2105" target="_blank" rel="noreferrer" className="link-blue">
            linkedin.com/in/ramani2105
          </a>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--fg-mute)', width: '80px' }}>X:</span>
          <a href="https://x.com/rk_d0tw" target="_blank" rel="noreferrer" className="link-blue">
            x.com/rk_d0tw
          </a>
        </div>
      </div>
    </section>
  )
}
