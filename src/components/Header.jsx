export default function Header() {
  return (
    <header style={{
      padding: '2.5rem 0 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      flexWrap: 'wrap',
      gap: '1rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        <a href="#" style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '14px', letterSpacing: '-0.01em', color: 'var(--fg)' }}>
          ramani.systems
        </a>
        <span style={{ color: 'var(--fg-mute)', fontSize: '12px' }}>/</span>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
          fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--fg-dim)'
        }}>
          <span className="badge-dot" />
          Coimbatore, IN
        </span>
      </div>

      <nav style={{ display: 'flex', gap: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
        <a href="#now" style={{ color: 'var(--fg-dim)' }}>now</a>
        <a href="#projects" style={{ color: 'var(--fg-dim)' }}>projects</a>
        <a href="#systems" style={{ color: 'var(--fg-dim)' }}>systems</a>
        <a href="https://github.com/Ramani-21-05/vouches" target="_blank" rel="noreferrer" style={{ color: 'var(--blue)' }}>vouches</a>
        <a href="#contact" style={{ color: 'var(--fg-dim)' }}>contact</a>
      </nav>
    </header>
  )
}
