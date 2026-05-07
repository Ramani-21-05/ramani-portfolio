export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '2rem var(--gutter)',
    }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
      }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.03em' }}>
          <span style={{ color: 'var(--acid)' }}>{'<'}</span>RP.DEV<span style={{ color: 'var(--acid)' }}>{'/>'}</span>
        </span>

        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.08em', color: 'var(--fg-mute)', textTransform: 'uppercase' }}>
          © 2026 · Engineered with precision
        </span>

        <div style={{ display: 'flex', gap: '2rem' }}>
          {[['GitHub', 'https://github.com/Ramani-21-05'], ['LinkedIn', 'https://linkedin.com/in/ramani2105']].map(([lbl, href]) => (
            <a key={lbl} href={href} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--fg-mute)', transition: 'color .2s ease' }}
              onMouseEnter={e => e.target.style.color = 'var(--acid)'}
              onMouseLeave={e => e.target.style.color = 'var(--fg-mute)'}
            >{lbl}</a>
          ))}
          <a href="#hero"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--fg-mute)', transition: 'all .2s ease', display: 'flex', alignItems: 'center', gap: '.3rem' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--acid)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--fg-mute)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Top <span className="material-symbols-outlined" style={{ fontSize: '.75rem' }}>north</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
