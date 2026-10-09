import { useState } from 'react'

const PROJECTS_DATA = [
  {
    id: 'signmamba',
    num: '01',
    shortTitle: 'SignMamba (SSM)',
    title: 'SignMamba: Continuous Sign Language Recognition',
    category: 'PyTorch Deep Learning & Sequence Models',
    stat: 'O(N) Linear Memory • 30 FPS Inference',
    repo: 'https://github.com/Ramani-21-05/SLR-SSM',
    problem: '3D Convolutional and Transformer architectures blow up GPU VRAM on continuous video sequences due to quadratic attention scaling (O(N²)), forcing training batch sizes down to 2 on consumer GPUs and triggering CUDA out-of-memory crashes.',
    approach: 'Engineered a multi-modal 3-stream fusion pipeline combining MobileNetV3-Small RGB feature maps with MediaPipe MLPs (left hand, right hand, pose keypoints). Piped into a Selective State Space Model (Pyramid Mamba) decoder trained with Connectionist Temporal Classification (CTC) loss and beam search decoding.',
    result: 'Achieved linear O(N) memory scaling with 0 attention cache blowup, sustaining real-time 30 FPS continuous inference on laptop hardware with 82% token accuracy on continuous sign sentences.',
    stack: ['PyTorch 2.5', 'Mamba-SSM', 'MediaPipe', 'CTC Loss', 'CUDA 12', 'OpenCV'],
    diagram: `┌───────────────────┐     ┌─────────────────────┐
│ Camera Frame 30FPS│ ──► │ MobileNetV3 (RGB)   │ ──┐
└───────────────────┘     └─────────────────────┘   │
┌───────────────────┐     ┌─────────────────────┐   │   ┌──────────────────────┐   ┌──────────────────────┐
│ Left/Right Hands  │ ──► │ MediaPipe MLP (63D) │ ──┼─► │ Pyramid Mamba S6     │──►│ CTC Beam Decoder     │──► [Recognized Words]
└───────────────────┘     └─────────────────────┘   │   │ O(N) Linear Scan     │   │ Log-Softmax Search   │
┌───────────────────┐     ┌─────────────────────┐   │   └──────────────────────┘   └──────────────────────┘
│ Body Pose Vectors │ ──► │ MediaPipe MLP (99D) │ ──┘
└───────────────────┘     └─────────────────────┘`,
    specs: [
      { label: 'Complexity', val: 'O(N) Linear in Sequence Length' },
      { label: 'Frame Throughput', val: '30.2 FPS (Intel i5 + Mobile GPU)' },
      { label: 'Decoder Loss', val: 'Connectionist Temporal Classification (CTC)' },
      { label: 'Modalities Fused', val: 'RGB Appearance + 21 Hand Joints + 33 Pose' },
      { label: 'Batch Size on 6GB VRAM', val: '16 Sequences (vs 2 on Transformer)' },
    ],
    code: `import torch
import torch.nn as nn
from mamba_ssm import Mamba

class SignMambaDecoder(nn.Module):
    def __init__(self, d_model=256, num_classes=120):
        super().__init__()
        self.ssm1 = Mamba(d_model=d_model, d_state=16, d_conv=4, expand=2)
        self.norm1 = nn.LayerNorm(d_model)
        self.ssm2 = Mamba(d_model=d_model, d_state=16, d_conv=4, expand=2)
        self.norm2 = nn.LayerNorm(d_model)
        self.head = nn.Linear(d_model, num_classes)

    def forward(self, x):
        # x: (B, Seq_Len, d_model) - linear memory selective scan
        x = x + self.ssm1(self.norm1(x))
        x = x + self.ssm2(self.norm2(x))
        return self.head(x)  # (B, Seq_Len, num_classes)`
  },
  {
    id: 'quant-engine',
    num: '02',
    shortTitle: 'Quant Alpha (183M)',
    title: 'Quantitative Microstructure & Intraday Alpha Engine',
    category: 'High-Throughput Algorithmic Trading Systems',
    stat: '183M Bars Audited • Sub-1ms RAM Ring',
    repo: 'https://github.com/Ramani-21-05',
    problem: 'Micro-trades (<35 bps) in Indian equities get destroyed by statutory friction (STT 0.025%, GST 18%, stamp duty, NSE turnover) and aggressive market order spread crossing. Naive simulations suffer lookahead bias and assume unrealistic simultaneous SL/TP fills.',
    approach: 'Engineered an intraday engine validated across 183M tick bars over a 10-year dataset (universe_4yr_nifty200). Streams zero-copy tick data via Apache Parquet, caches incoming order book levels in /dev/shm shared RAM buffers, and routes maker limit orders inside the spread with an automated 14:55:00 IST RMS square-off.',
    result: 'Sub-millisecond signal generation, conservative fill simulation (worst-case SL touch on identical-bar triggers), 2 consecutive loss circuit breaker, and friction-first execution.',
    stack: ['Python', 'C++', 'Zero-Copy Parquet', 'DuckDB', 'Linux /dev/shm', 'L1/L2 Order Books'],
    diagram: `┌──────────────────────┐     ┌───────────────────────┐
│ NSE Tick WebSocket   │ ──► │ struct.pack_into(=qdi)│ ──┐
└──────────────────────┘     └───────────────────────┘   │
┌──────────────────────┐                                 ▼
│ DuckDB Parquet Lake  │                     ┌────────────────────────┐     ┌──────────────────────┐
│ (183M Historical)    │                     │ /dev/shm Ring Buffer   │ ──► │ Alpha Signal Filter  │
└──────────────────────┘                     │ < 450ns IPC Access     │     │ (No 09:26-09:40 Trap)│
                                             └────────────────────────┘     └──────────┬───────────┘
                                                                                       │
                                                                                       ▼
                                                                            ┌──────────────────────┐
                                                                            │ Maker Limit Routing  │
                                                                            │ Inside ₹0.05 Spread  │
                                                                            └──────────────────────┘`,
    specs: [
      { label: 'Historical Universe', val: '183 Million Bars (Nifty 200, 10 Years)' },
      { label: 'IPC Serialization', val: '< 450 nanoseconds via C-Structs' },
      { label: 'Statutory Levies', val: 'STT (0.025%), GST (18%), Stamp (0.003%)' },
      { label: 'Risk Protection', val: '2-Loss Consecutive Hard Circuit Breaker' },
      { label: 'Execution Mode', val: 'Maker Limit Orders Inside Spread' },
    ],
    code: `import mmap, os, struct

# Sub-Millisecond Shared Memory Circular Buffer
SHM_FILE = "/dev/shm/nifty_tick_ring"
BUFFER_SIZE = 16 * 1024 * 1024  # 16MB RAM disk

fd = os.open(SHM_FILE, os.O_CREAT | os.O_RDWR)
os.ftruncate(fd, BUFFER_SIZE)
buf = mmap.mmap(fd, BUFFER_SIZE, mmap.MAP_SHARED, mmap.PROT_WRITE)

def write_tick(ts_ns: int, price: float, vol: int, offset: int):
    # Struct write: timestamp_ns (int64), price (float64), volume (int32)
    struct.pack_into("=qdi", buf, offset, ts_ns, price, vol)`
  },
  {
    id: 'pharmaforecast',
    num: '03',
    shortTitle: 'PharmaForecast-AI',
    title: 'PharmaForecast-AI: Enterprise Tabular ML',
    category: 'Enterprise Demand Forecasting & Inventory Engine',
    stat: 'Dual Holdout Splits • 14% RMSE Gain',
    repo: 'https://github.com/Ramani-21-05/shall-we-start',
    problem: 'Retail pharmaceutical distribution networks face costly stockouts and capital lockup due to volatile seasonal demand swings and unpredictable supplier lead times.',
    approach: 'Engineered a dual gradient-boosted decision tree pipeline (CatBoost and LightGBM) validated on strict 2019/2020 holdout sales data to prevent lookahead bias. Integrated into a FastAPI backend with Supabase migrations that dynamically compute Safety Stock and Re-Order Point (ROP).',
    result: 'Outperformed rolling baseline models by 14% on holdout RMSE; full automated Supabase migrations and mathematical documentation.',
    stack: ['LightGBM', 'CatBoost', 'FastAPI', 'DuckDB', 'Supabase SQL', 'Python'],
    diagram: `┌──────────────────────┐     ┌───────────────────────┐     ┌──────────────────────┐
│ Historical Sales Log │ ──► │ Lag & Rolling Windows │ ──► │ LightGBM + CatBoost  │
└──────────────────────┘     │ (7D, 14D, 30D, 90D)   │     │ Holdout Split (2019) │
                             └───────────────────────┘     └──────────┬───────────┘
                                                                      │
                                                                      ▼
┌──────────────────────┐     ┌───────────────────────┐     ┌──────────────────────┐
│ Supabase Migrations  │ ◄── │ FastAPI REST Backend  │ ◄── │ Safety Stock & ROP   │
│ Production Schema    │     │ Dynamic Endpoints     │     │ Mathematical Engine  │
└──────────────────────┘     └───────────────────────┘     └──────────────────────┘`,
    specs: [
      { label: 'Ensemble Architecture', val: 'CatBoost + LightGBM Blended Regressor' },
      { label: 'Evaluation Split', val: 'Strict 2019/2020 Out-of-Time Holdout' },
      { label: 'RMSE Improvement', val: '+14% Over Moving Average Baseline' },
      { label: 'Operational Metrics', val: 'Dynamic Safety Stock & Re-Order Point' },
      { label: 'Database Plumbing', val: 'Idempotent Supabase SQL Migrations' },
    ],
    code: `def calculate_safety_stock(lead_time_days: float, lead_time_std: float, 
                           demand_daily_mean: float, demand_daily_std: float, 
                           service_level_z: float = 1.65) -> float:
    # Combined uncertainty: demand volatility + supplier lead-time variance
    variance = (lead_time_days * (demand_daily_std ** 2)) + \\
               ((demand_daily_mean ** 2) * (lead_time_std ** 2))
    return float(service_level_z * (variance ** 0.5))`
  },
  {
    id: 'placement-reality',
    num: '04',
    shortTitle: 'Placement Reality',
    title: 'Placement Reality: Systems Benchmark & Telemetry',
    category: 'Full-Stack Developer Analytics Platform',
    stat: 'Normalized Percentiles • Live APIs',
    repo: 'https://github.com/Ramani-21-05/placement-reality',
    problem: 'Engineering undergraduates lack objective, data-backed feedback on whether their competitive programming and GitHub commit history meet corporate hiring cutoffs.',
    approach: 'Built a full-stack platform that consumes live GitHub and LeetCode API activity to compute normalized candidate readiness percentiles against verified enterprise hiring thresholds.',
    result: 'Fast, responsive interface built with Next.js 15, TypeScript, and Tailwind CSS.',
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'REST APIs'],
    diagram: `┌──────────────────────┐
│ GitHub GraphQL API   │ ──┐
└──────────────────────┘   │     ┌───────────────────────┐     ┌──────────────────────┐
                           ├─►   │ Normalized Percentile │ ──► │ Next.js 15 Dashboard │
┌──────────────────────┐   │     │ Scoring Algorithm     │     │ Real-Time Telemetry  │
│ LeetCode REST API    │ ──┘     └───────────────────────┘     └──────────────────────┘
└──────────────────────┘`,
    specs: [
      { label: 'Frontend Framework', val: 'Next.js 15 (App Router)' },
      { label: 'Language & Styling', val: 'TypeScript + Tailwind CSS' },
      { label: 'Data Ingestion', val: 'GitHub REST/GraphQL + LeetCode Profile' },
      { label: 'Telemetry Metric', val: 'Multi-Factor Candidate Readiness Score' },
    ],
    code: `export interface TelemetryProfile {
  handle: string;
  githubStars: number;
  totalCommits: number;
  leetcodeSolved: number;
  contestRating: number;
  percentileRank: number;
}`
  }
]

export default function Projects() {
  const [activeId, setActiveId] = useState('signmamba')
  const [detailTab, setDetailTab] = useState('flow') // 'flow' | 'specs' | 'code'
  const [copiedCode, setCopiedCode] = useState(false)

  const activeProject = PROJECTS_DATA.find((p) => p.id === activeId) || PROJECTS_DATA[0]

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeProject.code)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  return (
    <section id="projects" style={{ position: 'relative' }}>
      {/* Section Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <span className="eyebrow-tag">// 01 SYSTEMS &amp; ARCHITECTURES</span>
          <h2 className="section-title">
            Production <span style={{ color: 'var(--blue)' }}>Systems Builds.</span>
          </h2>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--fg-mute)' }}>
          EMPIRICALLY TESTED UNDER STRESS
        </div>
      </div>

      {/* Interactive Project Switcher Strip */}
      <div className="project-switcher-bar">
        {PROJECTS_DATA.map((p) => {
          const isActive = p.id === activeId
          return (
            <button
              key={p.id}
              onClick={() => {
                setActiveId(p.id)
                setDetailTab('flow')
              }}
              className={`project-switcher-btn ${isActive ? 'active' : ''}`}
            >
              <span className="project-switcher-num">{p.num}</span>
              <span className="project-switcher-title">{p.shortTitle}</span>
            </button>
          )
        })}
      </div>

      {/* Main Master-Detail Stage */}
      <div className="project-master-stage">
        {/* Left Column: Deep Problem -> Approach -> Result */}
        <div className="project-left-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <span className="hud-pill" style={{ fontSize: '10px' }}>
              {activeProject.stat}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--fg-mute)', textTransform: 'uppercase' }}>
              {activeProject.category}
            </span>
          </div>

          <h3 className="project-headline">
            {activeProject.title}
          </h3>

          <div className="project-story-block">
            <div className="story-item">
              <span className="story-label">// 01 THE FRICTION (PROBLEM)</span>
              <p className="story-text">{activeProject.problem}</p>
            </div>

            <div className="story-item">
              <span className="story-label">// 02 THE ARCHITECTURE (APPROACH)</span>
              <p className="story-text">{activeProject.approach}</p>
            </div>

            <div className="story-item">
              <span className="story-label">// 03 EMPIRICAL RESULT</span>
              <p className="story-text" style={{ color: '#fff', fontWeight: 500 }}>
                {activeProject.result}
              </p>
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
            {activeProject.stack.map((item) => (
              <span key={item} className="tech-tag">
                {item}
              </span>
            ))}
          </div>

          {/* Source Link */}
          <a
            href={activeProject.repo}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ width: 'fit-content' }}
          >
            Inspect Source Repository &rarr;
          </a>
        </div>

        {/* Right Column: Interactive Blueprint Stage */}
        <div className="project-right-panel">
          <div className="terminal-window" style={{ height: '100%' }}>
            {/* Window Header */}
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="terminal-btn close" />
                <span className="terminal-btn min" />
                <span className="terminal-btn max" />
                <span className="terminal-title">{activeProject.id}.spec</span>
              </div>

              {/* Sub-Tabs */}
              <div className="terminal-tabs">
                <button
                  className={`terminal-tab-btn ${detailTab === 'flow' ? 'active' : ''}`}
                  onClick={() => setDetailTab('flow')}
                >
                  Architecture Flow
                </button>
                <button
                  className={`terminal-tab-btn ${detailTab === 'specs' ? 'active' : ''}`}
                  onClick={() => setDetailTab('specs')}
                >
                  Key Specs
                </button>
                <button
                  className={`terminal-tab-btn ${detailTab === 'code' ? 'active' : ''}`}
                  onClick={() => setDetailTab('code')}
                >
                  Source Snippet
                </button>
              </div>
            </div>

            {/* Sub-Tab 1: Flow Diagram */}
            {detailTab === 'flow' && (
              <div className="terminal-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--blue)' }}>
                    // DATA PIPELINE &amp; COMPUTE TOPOLOGY
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--fg-mute)' }}>
                    TOP-LEVEL SPEC
                  </span>
                </div>
                <pre style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--blue-light)',
                  lineHeight: 1.45, margin: 0, padding: '0.75rem', background: 'rgba(0,0,0,0.4)',
                  borderRadius: '4px', border: '1px solid var(--line-subtle)', overflowX: 'auto'
                }}>
                  {activeProject.diagram}
                </pre>
              </div>
            )}

            {/* Sub-Tab 2: Specs Matrix */}
            {detailTab === 'specs' && (
              <div className="terminal-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--blue)' }}>
                    // VERIFIED BENCHMARK TELEMETRY
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#34d399' }}>
                    ● 100% AUDITED
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {activeProject.specs.map((s) => (
                    <div
                      key={s.label}
                      style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '0.6rem 0.8rem', background: 'rgba(255,255,255,0.02)',
                        borderRadius: '4px', border: '1px solid var(--line-subtle)'
                      }}
                    >
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--fg-dim)' }}>
                        {s.label}
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#fff', fontWeight: 600 }}>
                        {s.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sub-Tab 3: Raw Code */}
            {detailTab === 'code' && (
              <div className="terminal-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--blue)' }}>
                    // CORE PRODUCTION IMPLEMENTATION
                  </span>
                  <button
                    onClick={handleCopyCode}
                    className="btn-secondary"
                    style={{ padding: '0.2rem 0.6rem', fontSize: '10px', cursor: 'pointer' }}
                  >
                    {copiedCode ? '✓ Copied' : 'Copy Code'}
                  </button>
                </div>
                <pre style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#e2e8f0',
                  lineHeight: 1.5, margin: 0, padding: '0.85rem', background: 'rgba(0,0,0,0.5)',
                  borderRadius: '4px', border: '1px solid var(--line-subtle)', overflowX: 'auto'
                }}>
                  {activeProject.code}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
