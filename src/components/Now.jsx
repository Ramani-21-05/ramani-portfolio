export default function Now() {
  return (
    <section id="now">
      <div className="section-label">
        <span>// 01</span>
        <span>What I'm Working On Now</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--fg)' }}>
              Intraday Market Microstructure &amp; Friction Modeling (NSE)
            </h3>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--blue)' }}>
              Active Research
            </span>
          </div>
          <p style={{ color: 'var(--fg-dim)', fontSize: '14px', lineHeight: 1.65, marginBottom: '0.85rem' }}>
            Running walk-forward breakout simulations across 183M tick bars from a 10-year Indian equities dataset (<span style={{ fontFamily: 'var(--font-mono)', color: 'var(--fg)' }}>universe_4yr_nifty200</span>). Many intraday backtests look great on paper but fail live due to Indian statutory levies (STT, stamp duty, GST, exchange fees) and spread crossing. I'm modeling exact friction and routing maker limit orders inside the spread, backed by lock-free <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--fg)' }}>/dev/shm</span> shared memory ring buffers to keep latency under 1 millisecond.
          </p>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            <span className="code-pill">Python</span>
            <span className="code-pill">C++</span>
            <span className="code-pill">Parquet</span>
            <span className="code-pill">/dev/shm</span>
            <span className="code-pill">L1/L2 Order Books</span>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--fg)' }}>
              Linear-Time Sequence Models for Continuous Video (SignMamba)
            </h3>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--blue)' }}>
              PyTorch R&amp;D
            </span>
          </div>
          <p style={{ color: 'var(--fg-dim)', fontSize: '14px', lineHeight: 1.65, marginBottom: '0.85rem' }}>
            Standard Transformer self-attention scales quadratically with sequence length (<span style={{ fontFamily: 'var(--font-mono)', color: 'var(--fg)' }}>O(N²)</span>), which causes out-of-memory errors on long video streams. I built a continuous sign language model in PyTorch using Selective State Space Models (Mamba) that scales linearly (<span style={{ fontFamily: 'var(--font-mono)', color: 'var(--fg)' }}>O(N)</span>). It fuses MobileNetV3 RGB frames with 3-stream MediaPipe landmarks into a hierarchical Pyramid Mamba decoder, achieving 30 FPS inference on laptop hardware.
          </p>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            <span className="code-pill">PyTorch 2.5</span>
            <span className="code-pill">Mamba-SSM</span>
            <span className="code-pill">MediaPipe</span>
            <span className="code-pill">CTC Loss</span>
            <span className="code-pill">CUDA</span>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--fg)' }}>
              Linux Daemons &amp; Kernel Resource Sandboxing
            </h3>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--blue)' }}>
              Systems Plumbing
            </span>
          </div>
          <p style={{ color: 'var(--fg-dim)', fontSize: '14px', lineHeight: 1.65, marginBottom: '0.85rem' }}>
            When running long simulation batches or WebSocket data collectors, runaway memory allocations can freeze an entire workstation. I supervise all long-running processes using systemd user units with Cgroups v2 limits (<span style={{ fontFamily: 'var(--font-mono)', color: 'var(--fg)' }}>MemoryMax=1.5G</span>, <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--fg)' }}>MemoryHigh=1.2G</span>) and watchdog auto-restarts, ensuring background jobs throttle safely without crashing the desktop.
          </p>
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
            <span className="code-pill">Fedora Linux</span>
            <span className="code-pill">Cgroups v2</span>
            <span className="code-pill">systemd</span>
            <span className="code-pill">SQLite FTS5</span>
          </div>
        </div>
      </div>
    </section>
  )
}
