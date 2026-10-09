export default function Footer() {
  return (
    <footer style={{
      padding: '4rem 0 3rem',
      borderTop: '1px solid var(--line)',
      marginTop: '6rem',
      position: 'relative',
    }}>
      <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: '#fff', marginBottom: '0.25rem' }}>
            RAMANI PANNIRSELVAM
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--fg-mute)' }}>
            ENGINEERED NATIVELY ON LINUX 6.11 (FEDORA 41 x86_64) • ZERO FLUFF
          </div>
        </div>

        <div style={{ display: 'flex', gap: '2rem', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
          <a href="https://github.com/Ramani-21-05" target="_blank" rel="noreferrer" style={{ color: 'var(--fg-dim)' }}>
            github
          </a>
          <a href="https://github.com/Ramani-21-05/vouches" target="_blank" rel="noreferrer" style={{ color: 'var(--blue)' }}>
            vouches
          </a>
          <a href="https://linkedin.com/in/ramani2105" target="_blank" rel="noreferrer" style={{ color: 'var(--fg-dim)' }}>
            linkedin
          </a>
          <a href="#" style={{ color: 'var(--blue)' }}>
            top &uarr;
          </a>
        </div>
      </div>
    </footer>
  )
}
