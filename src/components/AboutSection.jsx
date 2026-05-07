import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import profileImg from '../assets/profile.jpeg'

const IMG = profileImg

function useCounter(end, duration = 1600) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const pct = Math.min((now - start) / duration, 1)
        const ease = 1 - Math.pow(1 - pct, 4)
        setVal(Math.round(ease * end))
        if (pct < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return { val, ref }
}

function Counter({ end, suffix = '' }) {
  const { val, ref } = useCounter(end)
  return <div ref={ref} className="counter-num">{val}{suffix}</div>
}

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: 'var(--section-v) 0', background: 'var(--bg-2)' }}>
      <div className="wrap">
        {/* top label */}
        <Reveal>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '4rem' }}>About</span>
        </Reveal>

        {/* Big text block */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="about-grid">
          {/* Left portrait */}
          <Reveal>
            <div style={{ position: 'relative' }}>
              {/* Accent box */}
              <div style={{
                position: 'absolute', top: '-1.5rem', left: '-1.5rem',
                width: '60%', height: '60%',
                border: '1px solid rgba(200,255,0,0.15)',
                borderRadius: 4, zIndex: 0, pointerEvents: 'none',
              }} />
              <img src={IMG} alt="Portrait" style={{
                width: '100%', aspectRatio: '3/4', objectFit: 'cover',
                borderRadius: 4,
                filter: 'grayscale(.8)',
                position: 'relative', zIndex: 1,
                transition: 'filter .5s ease',
              }}
              onMouseEnter={e => e.target.style.filter = 'grayscale(0)'}
              onMouseLeave={e => e.target.style.filter = 'grayscale(.8)'}
              />
              {/* Floating badge */}
              <div className="about-badge" style={{
                position: 'absolute', bottom: '2rem', right: '-2rem', zIndex: 2,
                background: 'var(--acid)', color: '#000',
                padding: '.75rem 1.25rem',
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem',
                borderRadius: 4, boxShadow: '0 0 40px rgba(200,255,0,0.25)',
              }}>
                <div style={{ fontSize: '2rem', lineHeight: 1 }}>04+</div>
                <div style={{ fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: '.2rem' }}>Live Projects</div>
              </div>
            </div>
          </Reveal>

          {/* Right text */}
          <div>
            <Reveal>
              <h2 className="h2" style={{ marginBottom: '2rem' }}>
                Engineering{' '}
                <span style={{ color: 'var(--acid)' }}>Intelligent</span>
                <br />Systems.
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="body-lg" style={{ marginBottom: '2rem' }}>
                I am Ramani Pannirselvam, a final year AI & DS student. I specialize in building scalable systems that solve complex business problems, leveraging tools like React, Spring Boot, and Python.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="body-lg" style={{ marginBottom: '3rem' }}>
                From developing an autonomous LLM agent for MSME workflows to building real-time sign language classifiers, I combine backend precision with AI automation. Every line of code drives measurable value.
              </p>
            </Reveal>

            {/* Counters */}
            <Reveal delay={3}>
              <div className="counters-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '2rem' }}>
                <div>
                  <Counter end={4} suffix="+" />
                  <span className="body-sm">Live Projects</span>
                </div>
                <div>
                  <Counter end={12} suffix="+" />
                  <span className="body-sm">Certifications</span>
                </div>
                <div>
                  <Counter end={2027} suffix="" />
                  <span className="body-sm">Graduation</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){.about-grid{gap:3rem!important}}
        @media(max-width:768px){
          .about-grid{grid-template-columns:1fr!important;gap:4rem!important}
          .counters-grid{grid-template-columns:1fr 1fr!important}
        }
        @media(max-width:480px){
          .counters-grid{grid-template-columns:1fr!important; gap:2rem!important}
          .about-badge{right: 1rem!important; bottom: -1.5rem!important}
        }
      `}</style>
    </section>
  )
}
