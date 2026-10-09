import Reveal from './Reveal.jsx'

const LOGS = [
  {
    tag: 'QUANT INFRASTRUCTURE',
    status: 'ACTIVE RUNNER',
    title: 'Market Microstructure & Statutory Friction Modeling',
    desc: 'Simulating intraday breakouts across 183M tick bars across 10-year Indian equity regimes (universe_4yr_nifty200). Enforcing exact statutory friction (STT, GST, NSE turnover, stamp duty) and routing sub-millisecond maker limit orders inside the bid-ask spread to preserve expectancy.',
    stack: ['Python', 'C++', 'Parquet Zero-Copy', '/dev/shm', 'L1/L2 Order Books'],
  },
  {
    tag: 'DEEP LEARNING / PYTORCH',
    status: 'TRAINING & BENCHMARKING',
    title: 'Linear-Time Sequence Models (Transformers vs. Mamba)',
    desc: 'Engineering continuous sign language recognition (SignMamba) in PyTorch to shatter the quadratic memory ceiling of standard Transformers. Combines MobileNetV3 RGB spatial features with MediaPipe 3-stream hand/pose MLPs and a hierarchical Pyramid Mamba sequence decoder.',
    stack: ['PyTorch 2.5', 'Mamba (SSM)', 'CTC Loss', 'MediaPipe', 'CUDA'],
  },
  {
    tag: 'LINUX PLUMBING & DAEMONS',
    status: 'HARDENED PRODUCTION',
    title: 'Kernel Boundary Sandboxing & Memory Throttling',
    desc: 'Engineering 24/7 crash-resilient user daemons under Linux Cgroups v2 unified hierarchies. Enforcing strict MemoryMax and MemoryHigh thresholds to prevent system-wide OOM lockups, paired with systemd auto-restart supervisors and sub-2ms SQLite FTS5 search engines.',
    stack: ['Fedora 41 / Arch', 'Cgroups v2', 'systemd', 'SQLite FTS5', 'POSIX IPC'],
  },
  {
    tag: 'TABULAR ML & TIME SERIES',
    status: 'WALK-FORWARD VALIDATED',
    title: 'Supply Chain Stockout Mitigation & Holdout Forecasting',
    desc: 'Architecting an enterprise demand forecasting pipeline using dual CatBoost and LightGBM models. Validated strictly against temporal holdout sales data to compute automated dynamic safety stocks and re-order thresholds.',
    stack: ['CatBoost', 'LightGBM', 'FastAPI', 'DuckDB', 'Supabase SQL'],
  },
]

export default function NowSection() {
  return (
    <section id="now" style={{ padding: 'var(--section-v) 0', background: 'var(--bg-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div className="wrap">
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div>
              <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
                // NOW — ACTIVE FIELD NOTES
              </span>
              <h2 className="h2">
                What I Am Building <span style={{ color: 'var(--blue)' }}>Right Now.</span>
              </h2>
            </div>
            <p className="body-lg" style={{ maxWidth: '420px', color: 'var(--fg-dim)' }}>
              A live glimpse into active research logs, systems stress tests, and models currently running on my workstation.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.75rem' }} className="now-grid">
          {LOGS.map((item, idx) => (
            <Reveal key={item.title} delay={idx + 1}>
              <div className="terminal-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="terminal-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--blue)', fontWeight: 700 }}>#{String(idx + 1).padStart(2, '0')}</span>
                    <span style={{ letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '10px' }}>{item.tag}</span>
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '10px',
                    color: '#4ade80', background: 'rgba(74, 222, 128, 0.08)',
                    padding: '0.2rem 0.6rem', borderRadius: '2px', border: '1px solid rgba(74, 222, 128, 0.2)'
                  }}>
                    ● {item.status}
                  </span>
                </div>

                <div className="terminal-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '0.85rem', lineHeight: 1.4 }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--fg-dim)', fontSize: '13px', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                      {item.desc}
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    {item.stack.map(s => (
                      <span key={s} className="tag" style={{ fontSize: '10px', padding: '0.2rem 0.55rem' }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:860px){
          .now-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </section>
  )
}
