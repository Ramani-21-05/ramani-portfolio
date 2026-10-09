import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'

const STACK = [
  'LINUX (CGROUPS V2)', 'PYTORCH 2.5', 'MAMBA (SSM)', 'PARQUET (ZERO-COPY)',
  'DUCKDB', 'SYSTEMD DAEMONS', 'C++', 'CONCURRENCY (ASYNCIO)', 'FASTAPI',
  'LIGHTGBM', 'CATBOOST', 'MEDIAPIPE', 'TYPESCRIPT', 'SQLITE FTS5',
]

const TICKER = [...STACK, ...STACK]

const SKILLS = [
  {
    num: '01',
    title: 'Low-Level Systems & Concurrency',
    icon: 'terminal',
    tags: ['Linux (Fedora/Arch)', 'Cgroups v2 Sandboxing', 'systemd Daemons', 'C++', 'Python Asyncio', 'POSIX Shared Memory']
  },
  {
    num: '02',
    title: 'Deep Learning & Sequence Models',
    icon: 'psychology',
    tags: ['PyTorch 2.5', 'State Space Models (Mamba)', 'Transformers', 'MediaPipe Hand/Pose', 'OpenCV', 'CTC Loss & Decoding']
  },
  {
    num: '03',
    title: 'Microstructure & Data Pipelines',
    icon: 'database',
    tags: ['Zero-Copy Parquet', 'DuckDB Analytics', '/dev/shm Ring Buffers', 'SQLite FTS5 (Sub-2ms)', 'curl_cffi TLS Evasion', 'L1/L2 Order Books']
  },
  {
    num: '04',
    title: 'Engineered Services & Full-Stack',
    icon: 'settings_suggest',
    tags: ['FastAPI Runtime', 'Next.js 15 (App Router)', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Supabase SQL']
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: 'var(--section-v) 0', background: 'var(--bg)', overflow: 'hidden' }}>
      <div className="wrap" style={{ marginBottom: '3.5rem' }}>
        <Reveal>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
            // TECHNICAL WEAPONRY
          </span>
        </Reveal>
        <Reveal delay={1} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 className="h2">
            Systems &amp; <span style={{ color: 'var(--blue)' }}>Architecture Stack.</span>
          </h2>
          <p className="body-lg" style={{ maxWidth: '420px', color: 'var(--fg-dim)' }}>
            Hardware-aware engineering across the kernel, machine learning runtime, and high-throughput data streams.
          </p>
        </Reveal>
      </div>

      {/* Marquee ticker */}
      <div style={{
        overflow: 'hidden', borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)', padding: '0.9rem 0',
        marginBottom: '4rem', background: 'var(--bg-2)'
      }}>
        <div className="marquee-track">
          {TICKER.map((item, i) => (
            <span key={i} className={`marquee-item ${i % 3 === 0 ? 'filled' : ''}`}>
              {item}
              <span style={{ color: 'var(--blue)', fontSize: '.45em', marginLeft: '1.5rem' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Skill cards */}
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }} className="skills-grid">
          {SKILLS.map(({ num, title, icon, tags }, i) => (
            <Reveal key={title} delay={i + 1}>
              <TiltCard style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700,
                      color: 'var(--blue)', background: 'rgba(56, 189, 248, 0.08)',
                      padding: '0.2rem 0.5rem', borderRadius: '3px', border: '1px solid var(--line)'
                    }}>
                      STACK #{num}
                    </span>
                    <span className="material-symbols-outlined" style={{ color: 'var(--blue)', fontSize: '1.5rem' }}>
                      {icon}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem', lineHeight: 1.3 }}>
                    {title}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {tags.map(t => (
                    <span key={t} className="tag" style={{ fontSize: '10px' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:1100px){.skills-grid{grid-template-columns:repeat(2, 1fr)!important}}
        @media(max-width:640px){.skills-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  )
}
