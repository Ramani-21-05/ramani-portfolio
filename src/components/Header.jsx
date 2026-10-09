import { useState, useEffect } from 'react'

export default function Header() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      // Display IST time with seconds
      const istString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      setTime(istString)
    }
    update()
    const timer = setInterval(update, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="site-header">
      <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        {/* Brand identity */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
          <div className="monogram-badge">RP</div>
          <div>
            <div style={{
              fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.05rem',
              letterSpacing: '-0.02em', color: '#fff', lineHeight: 1.1
            }}>
              RAMANI PANNIRSELVAM
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--blue)' }}>
              SYSTEMS &bull; DEEP LEARNING &bull; QUANT
            </div>
          </div>
        </a>

        {/* Live IST Telemetry */}
        <div className="header-telemetry-badge">
          <span className="hud-dot" />
          <span style={{ color: 'var(--fg-dim)' }}>COIMBATORE [IST]:</span>
          <span style={{ color: '#fff', fontWeight: 600, minWidth: '65px' }}>{time || '16:00:00'}</span>
        </div>

        {/* Navigation anchors & Social */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <nav className="header-nav">
            <a href="#projects">// 01 SYSTEMS</a>
            <a href="#lab">// 02 WORKSTATION</a>
            <a href="#toolkit">// 03 TOOLKIT</a>
            <a href="https://github.com/Ramani-21-05/vouches" target="_blank" rel="noreferrer" style={{ color: 'var(--blue)' }}>
              // 04 VOUCHES
            </a>
          </nav>

          <a href="#contact" className="hud-pill" style={{ textDecoration: 'none' }}>
            <span>TRANSMIT &rarr;</span>
          </a>
        </div>
      </div>
    </header>
  )
}
