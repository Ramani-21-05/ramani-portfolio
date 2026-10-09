import { useState } from 'react'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'

const PROJECTS = [
  {
    id: 'sign-mamba',
    num: '01',
    title: 'SignMamba: SLR-SSM',
    type: 'PyTorch Deep Learning & Sequence Models',
    color: 'var(--blue)',
    description: 'Continuous sign language recognition pipeline breaking the quadratic memory ceiling of standard Transformers via linear-time State Space Models (Mamba). Multi-modal 3-stream architecture with MobileNetV3 + MediaPipe hand/pose MLPs and hierarchical Pyramid Mamba decoders.',
    tags: ['PyTorch 2.5', 'Mamba (SSM)', 'Transformers', 'MediaPipe', 'CTC Loss', 'CUDA'],
    link: 'https://github.com/Ramani-21-05/SLR-SSM',
    stat: 'O(N) Linear Memory Scaling'
  },
  {
    id: 'quant-alpha',
    num: '02',
    title: 'Quant Alpha & Microstructure Engine',
    type: 'High-Throughput Algorithmic Trading',
    color: 'var(--blue)',
    description: 'Intraday execution engine validated across 183M tick bars across 10-year Indian equity regimes (NSE). Features zero-copy Parquet streaming, statutory friction modeling (STT, GST, exchange fees), and sub-millisecond maker limit routing inside the spread.',
    tags: ['Python', 'C++', 'Parquet', '/dev/shm', 'L1/L2 Order Books', 'Linux'],
    link: 'https://github.com/Ramani-21-05',
    stat: '183M Bars • Sub-1ms SHM Buffers'
  },
  {
    id: 'pharma-forecast',
    num: '03',
    title: 'PharmaForecast-AI',
    type: 'Enterprise Tabular ML & Time Series',
    color: 'var(--blue)',
    description: 'Pharmaceutical demand forecasting and stockout mitigation engine using dual CatBoost & LightGBM pipelines evaluated on temporal holdout sales data. Full FastAPI backend, Supabase migrations, and dynamic safety stock recommendations.',
    tags: ['LightGBM', 'CatBoost', 'FastAPI', 'DuckDB', 'Supabase SQL'],
    link: 'https://github.com/Ramani-21-05/shall-we-start',
    stat: 'Dual Holdout Validation'
  },
  {
    id: 'placement-reality',
    num: '04',
    title: 'Placement Reality',
    type: 'Full-Stack Telemetry & Benchmarking',
    color: 'var(--blue)',
    description: 'Predictive candidate readiness engine connecting live GitHub and LeetCode activity telemetry to benchmark developer competency against real enterprise hiring thresholds.',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind', 'Telemetry'],
    link: 'https://github.com/Ramani-21-05/placement-reality',
    stat: 'Live GitHub/LeetCode Graph'
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: 'var(--section-v) 0', background: 'var(--bg-2)' }}>
      <div className="wrap">
        <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
              // SELECTED ARCHITECTURES
            </span>
            <h2 className="h2">
              Production <span style={{ color: 'var(--blue)' }}>Builds.</span>
            </h2>
          </div>
          <p className="body-lg" style={{ maxWidth: '420px', color: 'var(--fg-dim)' }}>
            Deep learning sequence models, market microstructure algorithms, and systems architectures verified in adversarial conditions.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.75rem' }} className="projects-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i + 1}>
              <TiltCard style={{ padding: '2.25rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700,
                      color: 'var(--blue)', letterSpacing: '0.1em', textTransform: 'uppercase'
                    }}>
                      SYSTEM #{p.num} • {p.type}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '11px',
                      color: 'var(--fg-dim)', background: 'rgba(255, 255, 255, 0.05)',
                      padding: '0.2rem 0.6rem', borderRadius: '2px', border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                      {p.stat}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                    {p.title}
                  </h3>

                  <p style={{ color: 'var(--fg-dim)', fontSize: '14px', lineHeight: 1.7, marginBottom: '2rem' }}>
                    {p.desc}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
                    {p.tags.map(t => (
                      <span key={t} className="tag" style={{ fontSize: '10px' }}>{t}</span>
                    ))}
                  </div>

                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '11px', padding: '.65rem 1rem' }}
                  >
                    Inspect Repository &rarr;
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:860px){
          .projects-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </section>
  )
}
