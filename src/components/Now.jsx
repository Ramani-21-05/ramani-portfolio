export default function Now() {
  const notes = [
    {
      num: '01',
      tag: 'MARKET MICROSTRUCTURE & QUANT EXECUTION',
      title: 'Statutory Friction Modeling & Sub-1ms Order Routing',
      desc: 'Simulating walk-forward intraday breakouts across 183M tick bars from a 10-year Indian equity dataset (universe_4yr_nifty200). Many strategies look viable on paper but crumble in live execution due to statutory friction (STT 0.025%, GST 18%, exchange turnover charges) and spread crossing. I am modeling exact friction and routing maker limit orders inside the spread, backed by lock-free /dev/shm shared RAM buffers to keep signal-to-execution latency under 1ms.',
      stack: ['Python', 'C++', 'Parquet Zero-Copy', '/dev/shm', 'L1/L2 Order Books', 'NSE'],
      span: 2,
    },
    {
      num: '02',
      tag: 'DEEP LEARNING / PYTORCH',
      title: 'Linear-Time Sequence Modeling (Transformers vs. Mamba)',
      desc: 'Transformer self-attention explodes quadratically (O(N²)) on long video streams. For SignMamba, I designed a multi-stream architecture fusing MobileNetV3 spatial features with MediaPipe hand/pose MLPs into a Selective State Space Model (Mamba) decoder, achieving linear O(N) memory scaling and 30 FPS inference on laptop hardware.',
      stack: ['PyTorch 2.5', 'Mamba-SSM', 'MediaPipe', 'CTC Loss', 'CUDA'],
      span: 1,
    },
    {
      num: '03',
      tag: 'LINUX KERNEL PLUMBING',
      title: 'Cgroups v2 Memory Throttling & Daemon Supervision',
      desc: 'When executing long backtest batches or live WebSocket ingesters, runaway memory allocations can freeze the entire desktop. I enforce strict Cgroups v2 limits (MemoryMax=1.5G, MemoryHigh=1.2G) via systemd user units to ensure background jobs throttle smoothly without kernel panic.',
      stack: ['Fedora Linux', 'Cgroups v2', 'systemd', 'SQLite FTS5'],
      span: 1,
    },
  ]

  return (
    <section id="now" style={{ position: 'relative' }}>
      <div className="ambient-glow-2" />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div>
          <span className="eyebrow-tag">
            // 01 FIELD NOTES
          </span>
          <h2 className="display-title" style={{ marginTop: '0.5rem' }}>
            What Is Running On My <span style={{ color: 'var(--blue)' }}>Workstation Today.</span>
          </h2>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--fg-mute)' }}>
          DEREK SIVERS /NOW SPECIFICATION
        </span>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem',
      }} className="now-bento-grid">
        {notes.map((item) => (
          <div
            key={item.num}
            className="bento-card"
            style={{
              gridColumn: item.span === 2 ? 'span 2' : 'span 1',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--blue)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {item.tag}
                </span>
                <span className="watermark-num">
                  {item.num}
                </span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: item.span === 2 ? '1.5rem' : '1.25rem',
                fontWeight: 700, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1.3
              }}>
                {item.title}
              </h3>

              <p style={{ color: 'var(--fg-dim)', fontSize: '14px', lineHeight: 1.7, marginBottom: '2rem' }}>
                {item.desc}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingTop: '1.25rem', borderTop: '1px solid var(--line-subtle)' }}>
              {item.stack.map(s => (
                <span key={s} className="tech-tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media(max-width: 860px) {
          .now-bento-grid {
            grid-template-columns: 1fr !important;
          }
          .now-bento-grid .bento-card {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  )
}
