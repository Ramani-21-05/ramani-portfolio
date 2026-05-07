import Reveal from './Reveal.jsx'

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: 'var(--section-v) 0', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      {/* Big accent word behind */}
      <div style={{
        position: 'absolute', left: '-3vw', bottom: '-6vh', pointerEvents: 'none', userSelect: 'none',
        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(8rem,18vw,16rem)',
        color: 'transparent', WebkitTextStroke: '1px rgba(200,255,0,0.05)',
        lineHeight: 1, letterSpacing: '-0.05em',
      }}>CONNECT</div>

      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <Reveal>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '1.5rem' }}>Get In Touch</span>
          <h2 className="h2" style={{ marginBottom: '1.5rem', maxWidth: '700px' }}>
            Ready for the next<br />
            <span style={{ color: 'var(--acid)' }}>System Upgrade?</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: '480px', marginBottom: '3rem' }}>
            Seeking Software Engineering or AI internship opportunities for 2026.
            Let&apos;s discuss how my technical stack can solve your business challenges.
          </p>
        </Reveal>

        <Reveal delay={2}>
          <div className="contact-btns" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="mailto:ramanikrish2105@gmail.com" className="btn btn-acid" style={{ fontSize: '13px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>mail</span>
              Initiate Contact
            </a>
            <a href="https://github.com/Ramani-21-05" target="_blank" rel="noopener noreferrer"
              className="btn btn-outline" style={{ gap: '.5rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>terminal</span>
              GitHub
            </a>
            <a href="https://linkedin.com/in/ramani2105" target="_blank" rel="noopener noreferrer"
              className="btn btn-outline" style={{ gap: '.5rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>share</span>
              LinkedIn
            </a>
          </div>
        </Reveal>

        {/* Horizontal glow separator */}
        <div style={{ marginTop: '6rem' }}>
          <div className="glow-line" />
        </div>
      </div>
      <style>{`
        @media(max-width:600px){
          .contact-btns { flex-direction: column!important; align-items: stretch!important; }
          .contact-btns > a { justify-content: center!important; }
        }
      `}</style>
    </section>
  )
}
