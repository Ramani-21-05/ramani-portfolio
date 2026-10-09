import { useState, useEffect } from 'react'

export default function Hero() {
  const [activeTab, setActiveTab] = useState('mamba')
  const [seqLength, setSeqLength] = useState(2048)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [ringOffset, setRingOffset] = useState(6)

  // Auto-advance ring buffer offset simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setRingOffset((prev) => (prev + 1) % 16)
    }, 1800)
    return () => clearInterval(timer)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('ramanikrish2105@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  // Scaling math for Mamba O(N) vs Transformer O(N^2)
  // Transformer VRAM ~ quadratic in sequence length
  const transformerMemGB = ((seqLength * seqLength * 16 * 4) / (1024 * 1024 * 1024) * 0.4 + (seqLength * 0.0015)).toFixed(1)
  // Mamba VRAM ~ linear in sequence length
  const mambaMemMB = Math.round(64 + seqLength * 0.065)
  const isTransformerOOM = seqLength >= 4096

  return (
    <section className="hero-section" style={{ position: 'relative', paddingTop: '1.5rem', paddingBottom: '3.5rem' }}>
      <div className="ambient-glow-1" />

      {/* Main 2-Column Split Stage */}
      <div className="hero-split-grid">
        {/* Left Column: Identity, Narrative & Quick Actions */}
        <div className="hero-left-col">
          {/* Workstation HUD Pill */}
          <div className="hud-pill" style={{ marginBottom: '1.25rem', width: 'fit-content' }}>
            <span className="hud-dot" />
            <span>FEDORA 41 x86_64 • LINUX 6.11 KERNEL</span>
          </div>

          <h1 className="hero-headline">
            SYSTEMS &amp;<br />
            <span className="hero-headline-accent">SEQUENCE MODELS.</span>
          </h1>

          <p className="hero-subheading">
            LOW-LATENCY RUNTIMES. LINEAR-TIME INFERENCE.
          </p>

          <p className="hero-bio">
            I'm <strong style={{ color: '#fff' }}>Ramani Pannirselvam</strong>. I engineer deep sequence models in PyTorch (Transformers &amp; Mamba), quantitative execution engines across 183M tick bars, and Linux kernel sandboxing primitives. Building software that stays deterministic under severe compute and financial friction.
          </p>

          {/* Quick CTA Actions */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2.5rem' }}>
            <a href="#projects" className="btn-primary">
              Explore Systems Builds &darr;
            </a>
            <button
              onClick={copyEmail}
              className="btn-secondary"
              style={{ cursor: 'pointer' }}
            >
              {copiedEmail ? '✓ Copied to Clipboard' : 'ramanikrish2105@gmail.com'}
            </button>
            <a
              href="https://github.com/Ramani-21-05/vouches"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Public Vouches &rarr;
            </a>
          </div>

          {/* Telemetry Micro-Badges */}
          <div className="hero-telemetry-strip">
            <div className="telemetry-badge">
              <span className="telemetry-badge-val">183M+</span>
              <span className="telemetry-badge-lbl">Tick Bars Audited</span>
            </div>
            <div className="telemetry-badge">
              <span className="telemetry-badge-val">O(N)</span>
              <span className="telemetry-badge-lbl">Linear Memory Scaling</span>
            </div>
            <div className="telemetry-badge">
              <span className="telemetry-badge-val">&lt; 450ns</span>
              <span className="telemetry-badge-lbl">/dev/shm Ring IPC</span>
            </div>
            <div className="telemetry-badge">
              <span className="telemetry-badge-val">30 FPS</span>
              <span className="telemetry-badge-lbl">Video SSM Inference</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Systems Blueprint Sandbox */}
        <div className="hero-right-col">
          <div className="terminal-window">
            {/* Terminal Window Header */}
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="terminal-btn close" />
                <span className="terminal-btn min" />
                <span className="terminal-btn max" />
                <span className="terminal-title">system-telemetry.sh [live]</span>
              </div>

              {/* Sandbox Tabs */}
              <div className="terminal-tabs">
                <button
                  className={`terminal-tab-btn ${activeTab === 'mamba' ? 'active' : ''}`}
                  onClick={() => setActiveTab('mamba')}
                >
                  Mamba vs Attention
                </button>
                <button
                  className={`terminal-tab-btn ${activeTab === 'shm' ? 'active' : ''}`}
                  onClick={() => setActiveTab('shm')}
                >
                  /dev/shm Ring
                </button>
                <button
                  className={`terminal-tab-btn ${activeTab === 'cgroups' ? 'active' : ''}`}
                  onClick={() => setActiveTab('cgroups')}
                >
                  Cgroups v2
                </button>
              </div>
            </div>

            {/* Terminal Tab 1: Mamba SSM vs Transformer Memory Scaling */}
            {activeTab === 'mamba' && (
              <div className="terminal-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--blue)' }}>
                    // SEQUENCE MEMORY SCALING BENCHMARK
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--fg-mute)' }}>
                    PYTORCH 2.5 CUDA 12.4
                  </span>
                </div>

                {/* Interactive Sequence Slider */}
                <div style={{ marginBottom: '1.25rem', padding: '0.85rem', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', border: '1px solid var(--line-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--fg-dim)' }}>
                      Sequence Length (N Frames/Tokens):
                    </label>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#fff', fontWeight: 700 }}>
                      N = {seqLength}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="512"
                    max="8192"
                    step="512"
                    value={seqLength}
                    onChange={(e) => setSeqLength(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--blue)', cursor: 'ew-resize' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--fg-mute)', marginTop: '0.2rem' }}>
                    <span>512 (Short)</span>
                    <span>2048 (Medium)</span>
                    <span>4096 (Long)</span>
                    <span>8192 (Extreme)</span>
                  </div>
                </div>

                {/* Visual Memory Comparison Bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.25rem' }}>
                  {/* Transformer Attention Bar */}
                  <div style={{ padding: '0.85rem', borderRadius: '6px', background: isTransformerOOM ? 'rgba(239, 68, 68, 0.08)' : 'rgba(255, 255, 255, 0.03)', border: `1px solid ${isTransformerOOM ? 'rgba(239, 68, 68, 0.3)' : 'var(--line-subtle)'}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: isTransformerOOM ? '#f87171' : 'var(--fg-dim)' }}>
                        Transformer Softmax Attention O(N²)
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: isTransformerOOM ? '#f87171' : '#fff' }}>
                        {isTransformerOOM ? `${transformerMemGB} GB [OOM CRASH]` : `${transformerMemGB} GB VRAM`}
                      </span>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '999px', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${Math.min(100, (parseFloat(transformerMemGB) / 24) * 100)}%`,
                          background: isTransformerOOM ? '#ef4444' : '#f59e0b',
                          transition: 'width 0.2s ease'
                        }}
                      />
                    </div>
                    {isTransformerOOM && (
                      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#f87171', marginTop: '0.35rem' }}>
                        &times; Quadratic KV-Cache blew consumer GPU VRAM cap (24GB). Batch size throttled to 1.
                      </p>
                    )}
                  </div>

                  {/* Pyramid Mamba Bar */}
                  <div style={{ padding: '0.85rem', borderRadius: '6px', background: 'rgba(56, 189, 248, 0.06)', border: '1px solid rgba(56, 189, 248, 0.25)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--blue)' }}>
                        Selective State Space (Mamba) O(N)
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: '#38bdf8' }}>
                        {mambaMemMB} MB [30 FPS STABLE]
                      </span>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '999px', overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          width: `${Math.min(100, (mambaMemMB / 1000) * 100)}%`,
                          background: '#38bdf8',
                          boxShadow: '0 0 10px rgba(56, 189, 248, 0.5)',
                          transition: 'width 0.2s ease'
                        }}
                      />
                    </div>
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--fg-dim)', marginTop: '0.35rem' }}>
                      ✓ Linear scan kernel maintains constant state: hₜ = Āₜ hₜ₋₁ + B̄ₜ xₜ. Zero attention matrix allocation.
                    </p>
                  </div>
                </div>

                {/* Mathematical Equation Pill */}
                <div style={{ padding: '0.65rem 0.85rem', background: 'rgba(0,0,0,0.4)', borderRadius: '4px', border: '1px dashed var(--line-subtle)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--fg-mute)' }}>
                    DISCRETIZATION INVARIANT: Δ ∈ ℝ₊ • Ā = exp(ΔA) • B̄ = (ΔA)⁻¹(exp(ΔA) - I) • ΔB
                  </span>
                </div>
              </div>
            )}

            {/* Terminal Tab 2: /dev/shm Shared Memory Ring */}
            {activeTab === 'shm' && (
              <div className="terminal-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--blue)' }}>
                    // /dev/shm LOCK-FREE TICK RING BUFFER
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--fg-mute)' }}>
                    MMAP SHARED RAM DISK
                  </span>
                </div>

                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--fg-dim)', marginBottom: '1rem' }}>
                  Zero-copy IPC circular buffer. Binary serialization via C-structs bypasses network TCP and filesystem I/O locks:
                </p>

                {/* Visual Circular Buffer Slots */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '6px', marginBottom: '1.25rem' }}>
                  {Array.from({ length: 16 }).map((_, idx) => {
                    const isHead = idx === ringOffset
                    const isPrev = idx === (ringOffset - 1 + 16) % 16
                    return (
                      <div
                        key={idx}
                        style={{
                          height: '36px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          borderRadius: '4px',
                          background: isHead ? 'rgba(56, 189, 248, 0.25)' : isPrev ? 'rgba(56, 189, 248, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                          border: `1px solid ${isHead ? 'var(--blue)' : isPrev ? 'rgba(56, 189, 248, 0.3)' : 'var(--line-subtle)'}`,
                          color: isHead ? '#38bdf8' : isPrev ? '#94a3b8' : 'var(--fg-mute)',
                          fontWeight: isHead ? 700 : 400,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {isHead ? 'HEAD' : `0x${idx.toString(16).toUpperCase()}`}
                      </div>
                    )
                  })}
                </div>

                {/* Code Snapshot */}
                <div style={{ padding: '0.75rem', background: 'rgba(0,0,0,0.5)', borderRadius: '4px', border: '1px solid var(--line-subtle)' }}>
                  <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--fg-dim)', lineHeight: 1.5, margin: 0, overflowX: 'auto' }}>
                    {`# struct format: timestamp_ns (int64), price (float64), vol (int32)\nstruct.pack_into("=qdi", buf, ${ringOffset * 20}, time.time_ns(), 24520.50, 450)\n# Latency measured: 380ns (zero-copy mmap write)`}
                  </pre>
                </div>
              </div>
            )}

            {/* Terminal Tab 3: Cgroups v2 Sandboxing */}
            {activeTab === 'cgroups' && (
              <div className="terminal-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--blue)' }}>
                    // LINUX CGROUPS V2 & SYSTEMD DAEMON
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#34d399' }}>
                    ● RUNNING (ACTIVE)
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.02)', borderRadius: '4px', border: '1px solid var(--line-subtle)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--fg-mute)' }}>MEMORY CEILING</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#fff', fontWeight: 700, marginTop: '0.2rem' }}>1.2G / 1.5G MAX</div>
                    <div style={{ height: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '99px', marginTop: '0.4rem', overflow: 'hidden' }}>
                      <div style={{ width: '42%', height: '100%', background: '#34d399' }} />
                    </div>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.02)', borderRadius: '4px', border: '1px solid var(--line-subtle)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--fg-mute)' }}>WATCHDOG PING</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: '#fff', fontWeight: 700, marginTop: '0.2rem' }}>10.0s INTERVAL</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#34d399', marginTop: '0.4rem' }}>HEARTBEAT OK</div>
                  </div>
                </div>

                <div style={{ padding: '0.75rem', background: 'rgba(0,0,0,0.5)', borderRadius: '4px', border: '1px solid var(--line-subtle)' }}>
                  <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--fg-dim)', lineHeight: 1.5, margin: 0, overflowX: 'auto' }}>
                    {`[Service]\nType=notify\nRestart=always\nRestartSec=3s\nWatchdogSec=10s\nMemoryMax=1.5G\nCPUWeight=800\nProtectSystem=strict`}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
