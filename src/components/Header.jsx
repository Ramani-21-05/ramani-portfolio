import { useState, useEffect } from 'react'

const NAV = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 800,
      padding: '1.25rem var(--gutter)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? 'rgba(8,8,7,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'all 0.4s var(--ease-out-expo)',
    }}>
      {/* Brand */}
      <a href="#" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.03em', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
        <span style={{ color: 'var(--acid)', fontSize: '1.3rem', fontWeight: 800 }}>{'<'}</span>
        RP.DEV
        <span style={{ color: 'var(--acid)', fontSize: '1.3rem', fontWeight: 800 }}>{'/>'}</span>
      </a>

      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {NAV.map(({ label, href }) => (
            <a key={label} href={href} style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 600,
              letterSpacing: '.1em', textTransform: 'uppercase',
              color: 'var(--fg-dim)',
              transition: 'color .2s ease',
              position: 'relative',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--fg)'}
            onMouseLeave={e => e.target.style.color = 'var(--fg-dim)'}
            >{label}</a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-acid" style={{ padding: '.55rem 1.4rem', fontSize: '11px' }}>
          Hire Me
        </a>
      </div>

      <style>{`@media(max-width:768px){.desktop-nav{display:none!important}}`}</style>
    </header>
  )
}
