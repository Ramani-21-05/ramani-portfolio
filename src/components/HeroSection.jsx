import { useEffect, useRef, useState } from 'react'

const TERMINAL_LINES = [
  { prompt: true,  text: "sysctl -a | grep -E 'cgroup|shm'" },
  { prompt: false, text: "kernel.cgroups_v2 = enabled (unified hierarchy)" },
  { prompt: false, text: "shm_scratchpad = /dev/shm/nifty_l2_ring [Lock-Free Sub-1ms]" },
  { prompt: true,  text: "cat /proc/systems_state" },
  { prompt: false, text: "STATUS: ACTIVE • PYTORCH 2.5 • MAMBA-SSM • DUCKDB • FEDORA 41" },
]

export default function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    const fn = (e) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMouse({
        x: ((e.clientX - rect.width / 2) / rect.width) * 20,
        y: ((e.clientY - rect.height / 2) / rect.height) * 15,
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
      paddingTop: '6rem', paddingBottom: '4rem',
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute', top: '25%', right: '15%',
        width: 'clamp(280px, 35vw, 500px)', height: 'clamp(280px, 35vw, 500px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)',
        filter: 'blur(80px)',
        transform: `translate(${mouse.x * 1.2}px, ${mouse.y}px)`,
        pointerEvents: 'none',
      }} />

      <div className="hero-content" style={{ position: 'relative', zIndex: 10, maxWidth: 'var(--container)', width: '100%', margin: '0 auto' }}>
        
        {/* Status Badge */}
        <div style={{ marginBottom: '1.75rem' }}>
          <span className="avail-badge">
            <span className="avail-dot" />
            LIVE SYSTEMS LAB • FEDORA LINUX WORKSTATION • COIMBATORE
          </span>
        </div>

        {/* Display Headline */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">
          <div>
            <h1 className="display" style={{ marginBottom: '1.5rem' }}>
              I build systems that don’t crash under{' '}
              <span style={{ color: 'var(--blue)', textShadow: '0 0 40px rgba(56, 189, 248, 0.4)' }}>
                pressure.
              </span>
            </h1>

            <p className="body-lg" style={{ maxWidth: '580px', marginBottom: '2.5rem', color: 'var(--fg-dim)' }}>
              Operating at the hardware boundary: low-latency algorithmic trading pipelines, PyTorch linear-time sequence models (Transformers &amp; Mamba), and Linux Cgroups v2 memory sandboxes.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#now" className="btn btn-acid">Active Field Notes</a>
              <a href="#linux" className="btn btn-outline">Linux Architecture</a>
            </div>
          </div>

          {/* Terminal Console Mockup */}
          <div className="terminal-card" style={{
            transform: `translate(${-mouse.x * 0.4}px, ${-mouse.y * 0.4}px)`,
            transition: 'transform 0.4s ease-out'
          }}>
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot close" />
                <span className="terminal-dot min" />
                <span className="terminal-dot max" />
              </div>
              <span>rk@fedora:~/systems-lab</span>
              <span style={{ fontSize: '10px', color: 'var(--blue)' }}>v6.11-x86_64</span>
            </div>
            <div className="terminal-body" style={{ minHeight: '220px', background: 'rgba(5, 7, 11, 0.95)' }}>
              {TERMINAL_LINES.map((line, idx) => (
                <div key={idx} style={{ marginBottom: '0.45rem' }}>
                  {line.prompt ? (
                    <span>
                      <span className="terminal-prompt">rk@fedora:~$ </span>
                      <span style={{ color: '#fff' }}>{line.text}</span>
                    </span>
                  ) : (
                    <span style={{ color: 'var(--fg-dim)', paddingLeft: '1rem', display: 'block' }}>
                      ↳ {line.text}
                    </span>
                  )}
                </div>
              ))}
              <div style={{ marginTop: '0.8rem' }}>
                <span className="terminal-prompt">rk@fedora:~$ </span>
                <span style={{
                  display: 'inline-block', width: '8px', height: '14px',
                  background: 'var(--blue)', verticalAlign: 'middle',
                  animation: 'dotBlink 1s infinite'
                }} />
              </div>
            </div>
          </div>
        </div>

        {/* Telemetry Numbers Row */}
        <div className="hero-stats" style={{
          marginTop: '4.5rem',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem',
          borderTop: '1px solid var(--line)',
          paddingTop: '2rem',
        }}>
          {[
            ['183M+', 'Historical Tick Bars Modeled'],
            ['Sub-2ms', 'SQLite FTS5 Query Latency'],
            ['Linear O(N)', 'Sequence Memory Inference'],
            ['0% Overhead', 'Lock-Free /dev/shm Ring Buffers'],
          ].map(([val, lbl]) => (
            <div key={lbl}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 700, color: 'var(--blue)', letterSpacing: '-0.03em' }}>{val}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--fg-dim)', marginTop: '.25rem', letterSpacing: '.04em', textTransform: 'uppercase' }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:960px){
          .hero-grid{grid-template-columns:1fr!important; gap:2.5rem!important}
          .hero-stats{grid-template-columns:repeat(2, 1fr)!important; gap: 1.5rem!important}
        }
      `}</style>
    </section>
  )
}
