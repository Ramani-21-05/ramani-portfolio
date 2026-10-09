export default function Hero() {
  return (
    <section style={{ paddingTop: '2rem', paddingBottom: '1.5rem' }}>
      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 2.75rem)',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        lineHeight: 1.15,
        marginBottom: '1.25rem',
        color: 'var(--fg)',
      }}>
        Ramani Pannirselvam
      </h1>

      <p style={{
        fontSize: '1.15rem',
        lineHeight: 1.6,
        color: 'var(--fg)',
        maxWidth: '720px',
        marginBottom: '1.25rem',
      }}>
        I'm an engineer based in Coimbatore, India. I build low-latency algorithmic trading infrastructure, deep learning sequence architectures in PyTorch, and Linux systems tooling.
      </p>

      <p style={{
        fontSize: '0.95rem',
        lineHeight: 1.65,
        color: 'var(--fg-dim)',
        maxWidth: '720px',
        marginBottom: '2rem',
      }}>
        Currently in my final year studying Artificial Intelligence &amp; Data Science at Sri Krishna College of Technology. Most of my work runs on my Fedora Linux workstation, focusing on systems that operate reliably under real computational and financial friction.
      </p>

      {/* Direct links */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
        <a href="https://github.com/Ramani-21-05" target="_blank" rel="noreferrer" className="btn-clean">
          GitHub (@Ramani-21-05)
        </a>
        <a href="https://github.com/Ramani-21-05/vouches" target="_blank" rel="noreferrer" className="btn-clean-outline">
          Public Vouches Vault
        </a>
        <a href="mailto:ramanikrish2105@gmail.com" className="btn-clean-outline">
          ramanikrish2105@gmail.com
        </a>
      </div>
    </section>
  )
}
