export default function Header() {
  return (
    <header style={{
      padding: '1.75rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(6, 8, 15, 0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--line)',
      marginBottom: '3rem',
    }}>
      <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem',
            letterSpacing: '-0.02em', color: '#fff'
          }}>
            RAMANI PANNIRSELVAM
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px',
            color: 'var(--blue)', background: 'rgba(56, 189, 248, 0.08)',
            padding: '0.15rem 0.45rem', borderRadius: '3px', border: '1px solid var(--line)'
          }}>
            11°00'N 76°57'E
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
          <nav style={{ display: 'flex', gap: '1.75rem', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
            <a href="#now" style={{ color: 'var(--fg-dim)' }}>// field-notes</a>
            <a href="#projects" style={{ color: 'var(--fg-dim)' }}>// systems</a>
            <a href="#kernel" style={{ color: 'var(--fg-dim)' }}>// linux-plumbing</a>
            <a href="https://github.com/Ramani-21-05/vouches" target="_blank" rel="noreferrer" style={{ color: 'var(--blue)' }}>
              // vouches
            </a>
          </nav>

          <a href="#contact" className="hud-pill" style={{ textDecoration: 'none' }}>
            <span className="hud-dot" />
            <span>TRANSMISSION</span>
          </a>
        </div>
      </div>
      <style>{`
        @media(max-width: 780px) {
          header nav { display: none !important; }
        }
      `}</style>
    </header>
  )
}
