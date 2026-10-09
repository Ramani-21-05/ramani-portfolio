export default function Projects() {
  const projects = [
    {
      num: '01',
      title: 'SignMamba: Continuous Sign Language Recognition',
      repo: 'https://github.com/Ramani-21-05/SLR-SSM',
      tag: 'PyTorch Deep Learning & Sequence Models',
      stat: 'O(N) Linear Memory Scaling • 30 FPS',
      problem: '3D CNN and Transformer architectures for video sign recognition blow up GPU VRAM on continuous sequences due to quadratic attention scaling (O(N²)), capping training batch sizes to 2 on consumer GPUs.',
      approach: 'Engineered a multi-modal 3-stream pipeline fusing MobileNetV3-Small RGB feature maps with MediaPipe MLPs (left hand, right hand, pose keypoints) routed into a Selective State Space Model (Pyramid Mamba) decoder, trained with CTC loss and beam search.',
      result: 'Achieved linear O(N) memory scaling and real-time 30 FPS continuous inference on laptop hardware without attention cache memory blowups.',
      stack: ['PyTorch 2.5', 'Mamba-SSM', 'MediaPipe', 'CTC Loss', 'CUDA', 'OpenCV'],
    },
    {
      num: '02',
      title: 'Quantitative Alpha & Microstructure Engine',
      repo: 'https://github.com/Ramani-21-05',
      tag: 'Algorithmic Trading & High-Throughput Data',
      stat: '183M Bars • Sub-1ms RAM Ring',
      problem: 'Micro-trades (<35 bps) in Indian equities get wiped out by statutory friction (STT 0.025%, GST 18%, stamp duty, turnover charges) and aggressive market order spread crossing.',
      approach: 'Engineered an intraday engine validated across 183M tick bars over a 10-year dataset (universe_4yr_nifty200). Streams zero-copy tick data via Apache Parquet, caches incoming order book levels in /dev/shm shared RAM buffers, and routes maker limit orders inside the spread with an automated 14:55:00 IST RMS square-off.',
      result: 'Sub-millisecond signal generation, conservative fill simulation (worst-case SL touch on identical-bar triggers), and friction-first execution.',
      stack: ['Python', 'C++', 'Zero-Copy Parquet', 'DuckDB', 'Linux /dev/shm', 'L1/L2 Order Books'],
    },
    {
      num: '03',
      title: 'PharmaForecast-AI',
      repo: 'https://github.com/Ramani-21-05/shall-we-start',
      tag: 'Enterprise Tabular ML & Time Series',
      stat: 'Dual Holdout Splits • 14% RMSE Gain',
      problem: 'Retail pharmaceutical distribution networks face costly stockouts and capital lockup due to volatile seasonal demand swings and unpredictable supplier lead times.',
      approach: 'Engineered a dual gradient-boosted decision tree pipeline (CatBoost and LightGBM) validated on strict 2019/2020 holdout sales data to prevent lookahead bias. Integrated into a FastAPI backend with Supabase migrations that dynamically compute Safety Stock and Re-Order Point (ROP).',
      result: 'Outperformed rolling baseline models by 14% on holdout RMSE; full automated Supabase migrations and mathematical documentation.',
      stack: ['LightGBM', 'CatBoost', 'FastAPI', 'DuckDB', 'Supabase SQL'],
    },
    {
      num: '04',
      title: 'Placement Reality',
      repo: 'https://github.com/Ramani-21-05/placement-reality',
      tag: 'Full-Stack Telemetry & Benchmarking',
      stat: 'Live GitHub/LeetCode Graph',
      problem: 'Engineering undergraduates lack objective, data-backed feedback on whether their competitive programming and GitHub commit history meet corporate hiring cutoffs.',
      approach: 'Built a full-stack platform that consumes live GitHub and LeetCode API activity to compute normalized candidate readiness percentiles against verified enterprise hiring thresholds.',
      result: 'Fast, responsive interface built with Next.js 15, TypeScript, and Tailwind CSS.',
      stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Telemetry APIs'],
    },
  ]

  return (
    <section id="projects">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div>
          <span className="eyebrow-tag">
            // 02 ARCHITECTURES
          </span>
          <h2 className="display-title" style={{ marginTop: '0.5rem' }}>
            Production <span style={{ color: 'var(--blue)' }}>Systems Builds.</span>
          </h2>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--fg-mute)' }}>
          VERIFIED IN ADVERSARIAL CONDITIONS
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {projects.map((p) => (
          <div key={p.num} className="bento-card" style={{ padding: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--blue)', fontWeight: 700 }}>
                    #{p.num}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--fg-mute)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {p.tag}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
                  fontWeight: 800, color: '#fff', letterSpacing: '-0.03em'
                }}>
                  {p.title}
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span className="hud-pill" style={{ fontSize: '10px' }}>
                  {p.stat}
                </span>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.5rem 1rem', fontSize: '11px' }}
                >
                  Code &rarr;
                </a>
              </div>
            </div>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem',
              padding: '1.5rem 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
              marginBottom: '1.5rem',
            }} className="proj-specs-grid">
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--fg-mute)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                  [ THE BOTTLENECK ]
                </div>
                <p style={{ color: 'var(--fg-dim)', fontSize: '13px', lineHeight: 1.6 }}>
                  {p.problem}
                </p>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                  [ THE APPROACH ]
                </div>
                <p style={{ color: 'var(--fg-dim)', fontSize: '13px', lineHeight: 1.6 }}>
                  {p.approach}
                </p>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#4ade80', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                  [ THE RESULT ]
                </div>
                <p style={{ color: 'var(--fg-dim)', fontSize: '13px', lineHeight: 1.6 }}>
                  {p.result}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {p.stack.map(s => (
                <span key={s} className="tech-tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media(max-width: 860px) {
          .proj-specs-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  )
}
