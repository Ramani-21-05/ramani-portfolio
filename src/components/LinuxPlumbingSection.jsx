import { useState } from 'react'
import Reveal from './Reveal.jsx'

const TABS = [
  {
    id: 'systemd',
    label: 'systemd / cgroups v2',
    code: `[Unit]
Description=Quant Intraday Microstructure Engine
After=network-online.target
Wants=network-online.target

[Service]
Type=notify
ExecStart=/home/rk/LS/.venv/bin/python3 -u live_runner.py
Restart=always
RestartSec=3s
WatchdogSec=10s

# Linux Cgroups v2 Hardware Limits
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
    label: '/dev/shm ring buffer',
    code: `import mmap
import os
import struct

# Lock-Free Zero-Copy Shared Memory Ring Buffer
SHM_PATH = "/dev/shm/nifty_tick_ring"
BUFFER_SIZE = 16 * 1024 * 1024  # 16MB in-memory RAM disk

# Zero IPC serialization overhead: direct struct pack into RAM
fd = os.open(SHM_PATH, os.O_CREAT | os.O_RDWR)
os.ftruncate(fd, BUFFER_SIZE)
buf = mmap.mmap(fd, BUFFER_SIZE, mmap.MAP_SHARED, mmap.PROT_WRITE)

# Write tick: timestamp_ns (q), ltp (d), volume (i)
def write_tick(ts_ns: int, price: float, vol: int, offset: int):
    struct.pack_into("=qdi", buf, offset, ts_ns, price, vol)
    # Read latency: < 400 nanoseconds`
  },
  {
    id: 'adversarial',
    label: 'multi-node cluster',
    code: `# Workstation Cluster Topology
NODE 1: Fedora 41 Workstation (Local Compute & Telemetry)
  ├── Dual GPU CUDA runtime (PyTorch 2.5)
  ├── DuckDB Cold Lake & 10-Yr Parquet Storage
  └── Cgroups v2 Memory-Enforced Sandbox

NODE 2: Arch Linux Clamshell Server (Headless Execution)
  ├── 24/7 Clamshell Daemon Mode
  ├── Rootless Podman Quadlet Containers
  └── Encrypted Tunnel & Automated Health Watchdog`
  }
]

export default function LinuxPlumbingSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="linux" style={{ padding: 'var(--section-v) 0', background: 'var(--bg)' }}>
      <div className="wrap">
        <Reveal>
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
              // LINUX INTERNALS & SYSTEMS PLUMBING
            </span>
            <h2 className="h2">
              Operating at the <span style={{ color: 'var(--blue)' }}>Kernel Boundary.</span>
            </h2>
            <p className="body-lg" style={{ maxWidth: '640px', marginTop: '1rem', color: 'var(--fg-dim)' }}>
              Production engineering requires understanding what happens when memory runs out, threads stall, or I/O blocks. I build natively for Linux.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="linux-grid">
          {/* Left: Key Linux Capabilities */}
          <div>
            {[
              {
                num: '01',
                title: 'Cgroups v2 Unified Resource Sandboxing',
                desc: 'Enforcing strict MemoryMax and MemoryHigh limits on user units. When background workers hit memory ceilings, the kernel throttles memory gracefully rather than triggering an unrecoverable system freeze.'
              },
              {
                num: '02',
                title: 'Sub-Millisecond /dev/shm Shared RAM Buffers',
                desc: 'Bypassing filesystem disk writes completely by hosting circular tick ring buffers directly in Linux shared RAM disk. Ingestion and consumption latency is sub-1ms.'
              },
              {
                num: '03',
                title: 'Crash-Resilient Systemd User Daemons',
                desc: 'Supervising long-running Python and C++ processes with systemd user units, POSIX signal handling, automated watchdog heartbeats, and zero-downtime auto-restart policies.'
              },
              {
                num: '04',
                title: 'Rootless Containers & Process Isolation',
                desc: 'Orchestrating isolated simulation nodes via rootless Podman containers, preserving workstation security and eliminating permission drift.'
              }
            ].map((item, idx) => (
              <Reveal key={item.num} delay={idx + 1}>
                <div style={{
                  display: 'flex', gap: '1.25rem', marginBottom: '2rem',
                  paddingBottom: '1.75rem', borderBottom: '1px solid rgba(255,255,255,0.06)'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700,
                    color: 'var(--blue)', background: 'rgba(56, 189, 248, 0.08)',
                    padding: '0.2rem 0.5rem', height: 'fit-content', borderRadius: '3px',
                    border: '1px solid var(--line)'
                  }}>
                    {item.num}
                  </span>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--fg-dim)', fontSize: '13px', lineHeight: 1.65 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right: Live Interactive Terminal Inspector */}
          <Reveal delay={2}>
            <div className="terminal-card" style={{ position: 'sticky', top: '6rem' }}>
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="terminal-dot close" />
                  <span className="terminal-dot min" />
                  <span className="terminal-dot max" />
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {TABS.map((tab, idx) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(idx)}
                      style={{
                        padding: '0.2rem 0.6rem',
                        fontFamily: 'var(--font-mono)', fontSize: '11px',
                        borderRadius: '2px',
                        background: activeTab === idx ? 'var(--blue)' : 'transparent',
                        color: activeTab === idx ? '#05070b' : 'var(--fg-dim)',
                        fontWeight: activeTab === idx ? 700 : 500,
                        border: activeTab === idx ? 'none' : '1px solid rgba(255,255,255,0.06)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="terminal-body" style={{ background: '#070a10', overflowX: 'auto', minHeight: '380px' }}>
                <pre style={{ margin: 0, fontFamily: 'var(--font-mono)', fontSize: '12px', lineHeight: 1.65, color: '#e2e8f0' }}>
                  <code>{TABS[activeTab].code}</code>
                </pre>
              </div>

              <div style={{
                background: '#0a0e17', padding: '0.75rem 1.25rem',
                borderTop: '1px solid rgba(56, 189, 248, 0.1)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--fg-dim)'
              }}>
                <span>● VERIFIED ON LINUX 6.11 (FEDORA 41)</span>
                <span style={{ color: 'var(--blue)' }}>RAM DISK: /dev/shm ACTIVE</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media(max-width:960px){
          .linux-grid{grid-template-columns:1fr!important; gap:2.5rem!important}
        }
      `}</style>
    </section>
  )
}
