export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--line)',
      padding: '2rem var(--gutter)',
    }}>
      <div style={{
        maxWidth: 'var(--container)', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem',
      }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
          <span style={{ color: 'var(--blue)' }}>rk@fedora:~$</span>
          <span>ramani.systems</span>
        </div>

        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.06em', color: 'var(--fg-dim)', textTransform: 'uppercase' }}>
          © 2026 RAMANI PANNIRSELVAM • SYSTEMS &amp; AI LAB • COIMBATORE, INDIA
        </span>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {[
            ['GitHub', 'https://github.com/Ramani-21-05'],
            ['LinkedIn', 'https://linkedin.com/in/ramani2105'],
            ['X', 'https://x.com/rk_d0tw'],
            ['Vouches', 'https://github.com/Ramani-21-05/vouches'],
          ].map(([lbl, href]) => (
            <a
              key={lbl}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.08em',
                textTransform: 'uppercase', color: 'var(--fg-dim)', transition: 'color .2s ease'
              }}
              onMouseEnter={e => e.target.style.color = 'var(--blue)'}
              onMouseLeave={e => e.target.style.color = 'var(--fg-dim)'}
            >
              {lbl}
            </a>
          ))}
          <a
            href="#hero"
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.08em',
              textTransform: 'uppercase', color: 'var(--blue)', display: 'flex', alignItems: 'center', gap: '.25rem'
            }}
          >
            Top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
