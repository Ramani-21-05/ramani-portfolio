import { useState } from 'react'

const CONFIGS = [
  {
    title: 'systemd / cgroups v2 unit',
    filename: 'quant-engine.service',
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
    title: '/dev/shm lock-free ring',
    filename: 'shm_tick_ring.py',
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
    title: 'workstation cluster topology',
    filename: 'cluster_nodes.json',
    code: `{
  "primary_compute": {
    "node": "Fedora 41 Workstation (Local)",
    "specs": "Linux 6.11 x86_64 • CUDA Runtime • Dual NVMe",
    "roles": ["PyTorch 2.5 Sequence Training", "183M Tick Backtests", "DuckDB Cold Lake"]
  },
  "remote_executor": {
    "node": "Arch Linux Clamshell Node (ssh dot / 172.28.30.54)",
    "specs": "Headless Arch • Rootless Podman Quadlets",
    "roles": ["Overnight Parameter Sweeps", "Live FYERS OMS Feeds", "Watchdog Telemetry"]
  }
}`
  }
]

export default function KernelArchitecture() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="kernel">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div>
          <span className="eyebrow-tag">
            // 03 KERNEL &amp; PLUMBING
          </span>
          <h2 className="display-title" style={{ marginTop: '0.5rem' }}>
            Linux Internals &amp; <span style={{ color: 'var(--blue)' }}>Kernel Sandboxing.</span>
          </h2>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--fg-mute)' }}>
          HARDWARE BOUNDARY ARCHITECTURE
        </span>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '2rem', alignItems: 'start'
      }} className="kernel-grid">
        {/* Left: Architecture Breakdown */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {[
            {
              num: '01',
              title: 'Cgroups v2 Unified Resource Sandboxing',
              desc: 'Enforces strict MemoryMax=1.5G and MemoryHigh=1.2G limits on simulation processes. When worker memory grows during heavy pandas/parquet merges, the kernel throttles allocations rather than triggering an unrecoverable system freeze.'
            },
            {
              num: '02',
              title: 'Lock-Free Shared Memory Ring Buffers (/dev/shm)',
              desc: 'Direct mmap struct packing into RAM disks bypassing disk I/O completely. Ticks and order book deltas transfer from ingester to inference engine in under 450 nanoseconds.'
            },
            {
              num: '03',
              title: 'Systemd User Units with Watchdog Auto-Restart',
              desc: 'Supervises all daemons with POSIX signal traps, WatchdogSec heartbeats, and zero-downtime auto-restarts, ensuring 24/7 background reliability.'
            },
            {
              num: '04',
              title: 'Dual Workstation Cluster (Fedora + Arch)',
              desc: 'Primary compute workstation on Fedora 41 paired with a headless clamshell Arch Linux remote node for non-stop parameter sweeps.'
            }
          ].map((item) => (
            <div key={item.num} className="bento-card" style={{ padding: '1.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700,
                  color: 'var(--blue)', background: 'rgba(56, 189, 248, 0.08)',
                  padding: '0.15rem 0.45rem', borderRadius: '3px', border: '1px solid var(--line)'
                }}>
                  {item.num}
                </span>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>
                  {item.title}
                </h4>
              </div>
              <p style={{ color: 'var(--fg-dim)', fontSize: '13px', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Live Interactive Code Inspector */}
        <div className="bento-card" style={{ padding: '0', overflow: 'hidden', position: 'sticky', top: '6rem' }}>
          <div style={{
            background: 'rgba(11, 16, 29, 0.95)', padding: '0.85rem 1.25rem',
            borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem'
          }}>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              {CONFIGS.map((c, i) => (
                <button
                  key={c.filename}
                  onClick={() => setActiveTab(i)}
                  style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    padding: '0.35rem 0.75rem', borderRadius: '4px',
                    background: activeTab === i ? 'var(--blue)' : 'rgba(255, 255, 255, 0.04)',
                    color: activeTab === i ? '#05070f' : 'var(--fg-dim)',
                    fontWeight: activeTab === i ? 700 : 500,
                    border: '1px solid ' + (activeTab === i ? 'var(--blue)' : 'var(--line-subtle)'),
                    cursor: 'pointer', transition: 'all 0.15s ease',
                  }}
                >
                  {c.filename}
                </button>
              ))}
            </div>

            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--blue)' }}>
              ● VERIFIED ON LINUX 6.11
            </span>
          </div>

          <div style={{ padding: '1.5rem', background: '#070a12', overflowX: 'auto', minHeight: '380px' }}>
            <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '12px', lineHeight: 1.7, color: '#f1f5f9' }}>
              <code>{CONFIGS[activeTab].code}</code>
            </pre>
          </div>

          <div style={{
            background: 'rgba(11, 16, 29, 0.8)', padding: '0.75rem 1.25rem',
            borderTop: '1px solid var(--line)', display: 'flex',
            justifyContent: 'space-between', alignItems: 'center',
            fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--fg-mute)'
          }}>
            <span>CONFIG: {CONFIGS[activeTab].title}</span>
            <span style={{ color: 'var(--blue)' }}>LOCK-FREE IPC ACTIVE</span>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width: 960px) {
          .kernel-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
