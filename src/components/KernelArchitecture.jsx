import { useState } from 'react'

const LAB_CONFIGS = [
  {
    id: 'systemd',
    title: 'systemd / cgroups v2 unit',
    filename: 'quant-engine.service',
    lang: 'ini',
    code: `[Unit]
Description=Intraday Algorithmic Microstructure Engine
After=network-online.target
Wants=network-online.target

[Service]
Type=notify
ExecStart=/home/rk/LS/.venv/bin/python3 -u live_runner.py
Restart=always
RestartSec=3s
WatchdogSec=10s

# Linux Cgroups v2 Resource Sandboxing
MemoryAccounting=yes
MemoryMax=1.5G
MemoryHigh=1.2G
CPUWeight=800
ProtectSystem=strict
ReadWritePaths=/dev/shm /run/media/rk/fe/LS

[Install]
WantedBy=default.target`
  },
  {
    id: 'shm',
    title: '/dev/shm lock-free ring',
    filename: 'shm_tick_ring.py',
    lang: 'python',
    code: `import mmap
import os
import struct

# Sub-Millisecond Shared Memory Circular Buffer
SHM_FILE = "/dev/shm/nifty_tick_ring"
BUFFER_SIZE = 16 * 1024 * 1024  # 16MB in-memory RAM disk

fd = os.open(SHM_FILE, os.O_CREAT | os.O_RDWR)
os.ftruncate(fd, BUFFER_SIZE)
buf = mmap.mmap(fd, BUFFER_SIZE, mmap.MAP_SHARED, mmap.PROT_WRITE)

# Struct write: timestamp_ns (int64), price (float64), volume (int32)
def write_tick(ts_ns: int, price: float, vol: int, offset: int):
    struct.pack_into("=qdi", buf, offset, ts_ns, price, vol)
    # Measured serialization & IPC transfer latency: < 450 nanoseconds`
  },
  {
    id: 'topology',
    title: 'cluster nodes topology',
    filename: 'cluster_nodes.json',
    lang: 'json',
    code: `{
  "primary_workstation": {
    "host": "Fedora 41 Workstation (Local)",
    "kernel": "Linux 6.11.8 x86_64",
    "compute": "CUDA Runtime • Dual NVMe • Cgroups v2",
    "workloads": ["PyTorch Mamba Training", "183M Tick Backtests", "DuckDB Cold Lake"]
  },
  "remote_node": {
    "host": "Arch Linux Clamshell (ssh dot / 172.28.30.54)",
    "specs": "Headless Arch • Rootless Podman Quadlets",
    "workloads": ["24/7 Overnight Parameter Sweeps", "FYERS OMS Live Feeds", "Watchdog Telemetry"]
  }
}`
  }
]

export default function KernelArchitecture() {
  const [activeTab, setActiveTab] = useState(0)
  const [copiedCode, setCopiedCode] = useState(false)

  const activeConfig = LAB_CONFIGS[activeTab]

  const handleCopy = () => {
    navigator.clipboard.writeText(activeConfig.code)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  return (
    <section id="lab" style={{ position: 'relative' }}>
      {/* Section Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <span className="eyebrow-tag">// 02 WORKSTATION &amp; INFRASTRUCTURE</span>
          <h2 className="section-title">
            Linux Systems <span style={{ color: 'var(--blue)' }}>&amp; Hardware Lab.</span>
          </h2>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--fg-mute)' }}>
          DUAL-NODE CLUSTER &bull; LINUX 6.11 KERNEL
        </div>
      </div>

      {/* Lab Bento Grid */}
      <div className="lab-bento-grid">
        {/* Card 1: Dual Node Cluster Specs */}
        <div className="bento-card lab-card-node">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--blue)', fontWeight: 700 }}>
              // NODE 01: PRIMARY WORKSTATION
            </span>
            <span className="hud-pill" style={{ fontSize: '10px' }}>
              <span className="hud-dot" />
              ONLINE (LOCAL)
            </span>
          </div>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>
            Fedora 41 Workstation
          </h3>
          <p style={{ color: 'var(--fg-dim)', fontSize: '13px', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Primary development and deep learning environment. Hosts PyTorch 2.5 CUDA training runs, DuckDB 183M tick bar analytics, and sub-millisecond market simulation pipelines.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '11px', borderTop: '1px solid var(--line-subtle)', paddingTop: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--fg-mute)' }}>Kernel:</span>
              <span style={{ color: '#fff' }}>Linux 6.11.8 x86_64</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--fg-mute)' }}>Sandboxing:</span>
              <span style={{ color: 'var(--blue)' }}>Cgroups v2 Unified Hierarchy</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--fg-mute)' }}>Shared Memory:</span>
              <span style={{ color: '#fff' }}>/dev/shm 16MB Ring Buffer</span>
            </div>
          </div>
        </div>

        {/* Card 2: Remote Clamshell Node */}
        <div className="bento-card lab-card-node">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--blue)', fontWeight: 700 }}>
              // NODE 02: REMOTE EXECUTION
            </span>
            <span className="hud-pill" style={{ fontSize: '10px' }}>
              <span className="hud-dot" style={{ background: '#34d399' }} />
              ssh dot [172.28.30.54]
            </span>
          </div>

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>
            Arch Linux Clamshell Node
          </h3>
          <p style={{ color: 'var(--fg-dim)', fontSize: '13px', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            Dedicated headless machine operating in clamshell mode on its 458GB storage pool. Dedicated to 24/7 overnight walk-forward backtests, live FYERS WebSocket telemetry, and watchdog supervision.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '11px', borderTop: '1px solid var(--line-subtle)', paddingTop: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--fg-mute)' }}>Deployment:</span>
              <span style={{ color: '#fff' }}>Rootless Podman Quadlets</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--fg-mute)' }}>Supervision:</span>
              <span style={{ color: 'var(--blue)' }}>systemd user watchdog</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--fg-mute)' }}>Duty Cycle:</span>
              <span style={{ color: '#34d399' }}>24/7 Continuous Execution</span>
            </div>
          </div>
        </div>

        {/* Card 3: Interactive Configuration Inspector (Full Width on Bottom) */}
        <div className="lab-card-terminal">
          <div className="terminal-window" style={{ height: '100%' }}>
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="terminal-btn close" />
                <span className="terminal-btn min" />
                <span className="terminal-btn max" />
                <span className="terminal-title">{activeConfig.filename}</span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <div className="terminal-tabs">
                  {LAB_CONFIGS.map((cfg, idx) => (
                    <button
                      key={cfg.id}
                      className={`terminal-tab-btn ${activeTab === idx ? 'active' : ''}`}
                      onClick={() => setActiveTab(idx)}
                    >
                      {cfg.title}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleCopy}
                  className="btn-secondary"
                  style={{ padding: '0.2rem 0.6rem', fontSize: '10px', cursor: 'pointer' }}
                >
                  {copiedCode ? '✓ Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="terminal-body" style={{ minHeight: '260px' }}>
              <pre style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#f1f5f9',
                lineHeight: 1.6, margin: 0, overflowX: 'auto'
              }}>
                {activeConfig.code}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
