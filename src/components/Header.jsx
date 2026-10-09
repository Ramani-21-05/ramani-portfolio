import { useState, useEffect } from 'react'

const NAV = [
  { label: '// now',            href: '#now' },
  { label: '// linux-plumbing',  href: '#linux' },
  { label: '// sequence-ai',    href: '#projects' },
  { label: '// weaponry',       href: '#skills' },
  { label: '// vouches',        href: 'https://github.com/Ramani-21-05/vouches', external: true },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 800,
      padding: '1rem var(--gutter)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? 'rgba(5, 7, 11, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      {/* Brand & Terminal Prompt */}
      <a href="#" style={{
        fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.95rem',
        display: 'flex', alignItems: 'center', gap: '.6rem', color: 'var(--fg)',
        letterSpacing: '-0.02em'
      }}>
        <span style={{ color: 'var(--blue)' }}>rk@fedora:~$</span>
        <span>ramani.systems</span>
        <span style={{
          display: 'inline-block', width: '8px', height: '14px',
          background: 'var(--blue)', animation: 'dotBlink 1.2s infinite'
        }} />
      </a>

      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {NAV.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600,
                letterSpacing: '.06em', color: 'var(--fg-dim)',
                transition: 'color .2s ease',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--blue)'}
              onMouseLeave={e => e.target.style.color = 'var(--fg-dim)'}
            >
              {label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-outline" style={{ padding: '.5rem 1.2rem', fontSize: '11px' }}>
          Signal / Contact
        </a>
      </div>

      <style>{`@media(max-width:860px){.desktop-nav{display:none!important}}`}</style>
    </header>
  )
}
