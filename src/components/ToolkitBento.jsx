export default function ToolkitBento() {
  const tools = [
    {
      category: 'OPERATING ENVIRONMENT & KERNEL PLUMBING',
      highlight: 'Fedora 41 Workstation + Arch Linux Clamshell Node',
      items: [
        'Cgroups v2 Unified Hierarchy (MemoryMax=1.5G / MemoryHigh=1.2G)',
        'systemd user units with WatchdogSec auto-restart supervisors',
        '/dev/shm lock-free shared memory RAM disk ring buffers',
        'Rootless Podman Quadlets for containerized execution',
        'POSIX signals, IPC pipes, and automated shell plumbing',
      ]
    },
    {
      category: 'DEEP LEARNING & SEQUENCE ARCHITECTURES',
      highlight: 'PyTorch 2.5 CUDA Runtime',
      items: [
        'Selective State Space Models (Mamba / S4 linear sequence decoders)',
        'Transformer Self-Attention & Positional Encodings',
        'MediaPipe (Hand & pose landmark extraction)',
        'Gradient-Boosted Trees (LightGBM, CatBoost)',
        'CTC Loss & Beam Search greedy/beam decoding',
        'OpenCV matrix normalization and video pipelines',
      ]
    },
    {
      category: 'MARKET MICROSTRUCTURE & DATA ENGINES',
      highlight: 'Zero-Copy Historical & Live Data Streams',
      items: [
        'Apache Parquet (Streaming 183M tick bars without RAM saturation)',
        'DuckDB (Analytical aggregation & cold data lake querying)',
        'SQLite FTS5 (BM25 full-text search indexing in < 2ms)',
        'L1/L2 Order Book Reconstruction & spread-crossing mitigation',
        'curl_cffi (Browser TLS JA3 fingerprint impersonation for anti-bot scraping)',
        'PostgreSQL & Supabase SQL migrations',
      ]
    },
    {
      category: 'LANGUAGES & HIGH-THROUGHPUT RUNTIMES',
      highlight: 'Hardware-Aware Concurrency',
      items: [
        'Python (asyncio event loop unblocking, multiprocessing IPC, mmap/struct)',
        'C++ (Performance-critical routines & memory layout alignment)',
        'TypeScript & Next.js 15 (App Router with Server Components)',
        'FastAPI (Low-overhead asynchronous REST microservices)',
        'Cloudflare (Tunnels, DNS, edge worker configurations)',
      ]
    }
  ]

  return (
    <section id="systems">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div>
          <span className="eyebrow-tag">
            // 04 SYSTEMS WEAPONRY
          </span>
          <h2 className="display-title" style={{ marginTop: '0.5rem' }}>
            Production <span style={{ color: 'var(--blue)' }}>Toolkit &amp; Runtimes.</span>
          </h2>
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--fg-mute)' }}>
          ZERO COMMODITIZED TEMPLATES
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="toolkit-bento-grid">
        {tools.map((t) => (
          <div key={t.category} className="bento-card">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--blue)', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '0.4rem' }}>
              {t.category}
            </span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>
              {t.highlight}
            </h3>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '13px', color: 'var(--fg-dim)' }}>
              {t.items.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--blue)', fontFamily: 'var(--font-mono)' }}>›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style>{`
        @media(max-width: 860px) {
          .toolkit-bento-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
