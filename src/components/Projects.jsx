export default function Projects() {
  const projects = [
    {
      title: 'SignMamba: Continuous Sign Language Recognition',
      repo: 'https://github.com/Ramani-21-05/SLR-SSM',
      tag: 'Deep Learning / Sequence Modeling',
      problem: 'Existing 3D CNN and Transformer architectures for video sign recognition suffer from quadratic memory scaling (O(N²)), forcing training to batch size 2 on consumer GPUs and preventing continuous inference.',
      solution: 'Replaced quadratic attention with a Selective State Space Model (Mamba) decoder. Built a multi-modal 3-stream pipeline combining MobileNetV3-Small RGB feature maps with MediaPipe 3-stream MLPs (left hand, right hand, pose keypoints), decoded using CTC loss with beam search.',
      result: 'Achieved linear O(N) memory scaling and stable 30 FPS inference on consumer hardware with zero attention cache blowups.',
      stack: ['PyTorch 2.5', 'Mamba (SSM)', 'MediaPipe', 'CTC Loss', 'OpenCV'],
    },
    {
      title: 'Quantitative Alpha & Market Microstructure Engine',
      repo: 'https://github.com/Ramani-21-05',
      tag: 'Algorithmic Trading & High-Throughput Data',
      problem: 'Micro-trades (<35 bps) in Indian equities get wiped out by statutory friction (STT 0.025%, GST 18%, stamp duty, exchange turnover charges) and aggressive market order spread crossing.',
      solution: 'Built an intraday engine validated across 183M tick bars over a 10-year dataset (universe_4yr_nifty200). Streams zero-copy historical tick data via Apache Parquet, caches incoming order book levels in /dev/shm shared RAM buffers, and routes maker limit orders inside the spread with an automated 14:55:00 IST RMS square-off.',
      result: 'Sub-millisecond signal-to-order generation and conservative fill simulation (assuming worst-case SL touch on identical-bar triggers).',
      stack: ['Python', 'C++', 'Zero-Copy Parquet', 'DuckDB', 'Linux /dev/shm', 'L1/L2 Order Books'],
    },
    {
      title: 'PharmaForecast-AI',
      repo: 'https://github.com/Ramani-21-05/shall-we-start',
      tag: 'Enterprise Tabular ML & Time Series',
      problem: 'Retail pharmaceutical distribution networks suffer severe cash lockup and stockouts due to noisy supplier lead times and un-modeled holiday demand swings.',
      solution: 'Engineered a dual gradient-boosted decision tree pipeline (CatBoost and LightGBM) validated on strict 2019/2020 holdout sales data to prevent lookahead bias. Integrated into a FastAPI backend with Supabase migrations that dynamically compute Safety Stock and Re-Order Point (ROP).',
      result: 'Outperformed rolling average baselines by 14% on holdout RMSE with full mathematical documentation.',
      stack: ['LightGBM', 'CatBoost', 'FastAPI', 'DuckDB', 'Supabase SQL'],
    },
    {
      title: 'Placement Reality',
      repo: 'https://github.com/Ramani-21-05/placement-reality',
      tag: 'Full-Stack Telemetry & Benchmarking',
      problem: 'Engineering undergraduates lack objective, data-backed feedback on whether their competitive programming and GitHub commit history meet corporate hiring cutoffs.',
      solution: 'Full-stack platform that consumes live GitHub and LeetCode API activity to compute normalized candidate readiness percentiles against verified hiring thresholds for service and product companies.',
      result: 'Fast, responsive interface built with Next.js 15, TypeScript, and Tailwind CSS.',
      stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'GitHub & LeetCode APIs'],
    },
  ]

  return (
    <section id="projects">
      <div className="section-label">
        <span>// 02</span>
        <span>Selected Engineering Projects</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {projects.map((p) => (
          <article key={p.title} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.25rem' }}>
                  {p.tag}
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--fg)', letterSpacing: '-0.02em' }}>
                  {p.title}
                </h3>
              </div>

              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="link-blue"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}
              >
                View Repository &rarr;
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '14px', lineHeight: 1.65 }}>
              <div>
                <strong style={{ color: 'var(--fg)', fontWeight: 600 }}>The Problem: </strong>
                <span style={{ color: 'var(--fg-dim)' }}>{p.problem}</span>
              </div>
              <div>
                <strong style={{ color: 'var(--fg)', fontWeight: 600 }}>The Approach: </strong>
                <span style={{ color: 'var(--fg-dim)' }}>{p.solution}</span>
              </div>
              <div>
                <strong style={{ color: 'var(--fg)', fontWeight: 600 }}>The Result: </strong>
                <span style={{ color: 'var(--fg-dim)' }}>{p.result}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', paddingTop: '0.75rem', borderTop: '1px solid var(--line)' }}>
              {p.stack.map((item) => (
                <span key={item} className="code-pill">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
