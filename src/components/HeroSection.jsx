import { useEffect, useRef, useState } from 'react'

const WORDS = ['Systems.', 'Engines.', 'Products.', 'Futures.']

export default function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  // Cycle words
  useEffect(() => {
    const id = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2600)
    return () => clearInterval(id)
  }, [])

  // Parallax on mouse
  useEffect(() => {
    const fn = (e) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMouse({
        x: ((e.clientX - rect.width / 2) / rect.width) * 30,
        y: ((e.clientY - rect.height / 2) / rect.height) * 20,
      })
    }
    window.addEventListener('mousemove', fn, { passive: true })
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  return (
    <section ref={heroRef} id="hero" style={{
      minHeight: '100svh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: `0 var(--gutter)`,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* BIG bg number */}
      <div style={{
        position: 'absolute', right: '-2vw', bottom: '-4vh',
        fontFamily: 'var(--font-display)', fontSize: 'clamp(14rem,30vw,28rem)',
        fontWeight: 800, lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
        color: 'transparent', WebkitTextStroke: '1px rgba(200,255,0,0.04)',
        transform: `translate(${mouse.x * .5}px, ${mouse.y * .5}px)`,
        transition: 'transform .8s var(--ease-out-expo)',
      }}>01</div>

      {/* Orb parallax */}
      <div style={{
        position: 'absolute', top: '20%', right: '10%',
        width: 'clamp(280px,35vw,480px)', height: 'clamp(280px,35vw,480px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(155,92,255,0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        transform: `translate(${mouse.x * 1.2}px, ${mouse.y}px)`,
        transition: 'transform .9s var(--ease-out-expo)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', left: '5%',
        width: 'clamp(200px,25vw,360px)', height: 'clamp(200px,25vw,360px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,255,0,0.1) 0%, transparent 70%)',
        filter: 'blur(80px)',
        transform: `translate(${-mouse.x * .8}px, ${-mouse.y * .5}px)`,
        transition: 'transform .9s var(--ease-out-expo)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div className="hero-content" style={{ position: 'relative', zIndex: 10, maxWidth: 'var(--container)', width: '100%', margin: '0 auto' }}>
        {/* Availability */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span className="avail-badge">
            <span className="avail-dot" />
            Available for Internships — 2026
          </span>
        </div>

        {/* Main headline */}
        <h1 className="display" style={{ marginBottom: '1.5rem', maxWidth: '900px' }}>
          I build{' '}
          <span style={{ color: 'var(--fg-mute)' }}>AI-powered</span>
          <br />
          <span style={{
            color: 'var(--acid)',
            display: 'inline-block',
            minWidth: '5ch',
            transition: 'opacity .3s ease',
          }} key={wordIdx}>
            {WORDS[wordIdx]}
          </span>
        </h1>

        {/* Sub */}
        <p className="body-lg" style={{ maxWidth: '480px', marginBottom: '3rem' }}>
          Final year AI & DS student and Full-Stack Developer specializing in LLM agents, automation pipelines, and scalable web applications.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="#projects" className="btn btn-acid">View Work</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>

        {/* Meta row */}
        <div className="hero-stats" style={{
          marginTop: '5rem',
          display: 'flex', gap: '3rem', flexWrap: 'wrap',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: '2rem',
        }}>
          {[
            ['04+', 'Live Projects'],
            ['12+', 'Certifications'],
            ['3rd', 'Datathon Finalist'],
          ].map(([val, lbl]) => (
            <div key={lbl}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--acid)' }}>{val}</div>
              <div className="body-sm" style={{ marginTop: '.15rem' }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: 'var(--gutter)',
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '.75rem',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '.25em', textTransform: 'uppercase', color: 'var(--fg-mute)' }}>Scroll</span>
        <div className="scroll-line" />
      </div>
      <style>{`
        @media(max-width:768px){
          .hero-content{margin-top: 6rem!important}
          .hero-stats{gap: 1.5rem!important; justify-content: space-between}
        }
      `}</style>
    </section>
  )
}
