export default function Toolkit() {
  const domains = [
    {
      category: 'Operating System & Linux Plumbing',
      items: [
        'Fedora Linux Workstation',
        'Arch Linux Clamshell Server',
        'Cgroups v2 Unified Hierarchy (MemoryMax/MemoryHigh sandboxing)',
        'systemd user services & auto-restart watchdog supervisors',
        '/dev/shm lock-free shared memory RAM disks',
        'Rootless Podman Quadlets',
        'POSIX signals & bash tooling',
      ]
    },
    {
      category: 'Machine Learning & Sequence Architectures',
      items: [
        'PyTorch 2.5 (CUDA runtime)',
        'State Space Models (Selective Mamba / S4 linear sequence decoders)',
        'Transformer Attention & Positional Embeddings',
        'Gradient-Boosted Trees (LightGBM, CatBoost)',
        'MediaPipe (Hand & pose landmark extraction)',
        'OpenCV (Frame capture & normalized matrix preprocessing)',
        'CTC Loss & Beam Search Decoding',
      ]
    },
    {
      category: 'Data & Market Microstructure Infrastructure',
      items: [
        'Apache Parquet (Zero-copy historical tick streaming across 183M bars)',
        'DuckDB (Analytical aggregation & cold data lake)',
        'SQLite FTS5 (Sub-2ms BM25 full-text search)',
        'L1/L2 Order Book Reconstruction',
        'curl_cffi (Browser TLS JA3 fingerprint impersonation for anti-bot scraping)',
        'PostgreSQL & Supabase SQL migrations',
      ]
    },
    {
      category: 'Languages & Backend Runtimes',
      items: [
        'Python (asyncio event loop unblocking, multiprocessing IPC, mmap/struct)',
        'C++ (Performance-critical routines & memory layout)',
        'TypeScript & Next.js 15 (App Router)',
        'FastAPI (Asynchronous REST microservices)',
        'Cloudflare (Tunnels, DNS, edge hosting)',
      ]
    }
  ]

  return (
    <section id="systems">
      <div className="section-label">
        <span>// 03</span>
        <span>Systems &amp; Toolkit</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }} className="toolkit-grid">
        {domains.map((d) => (
          <div key={d.category} className="card">
            <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--fg)', marginBottom: '1rem', borderBottom: '1px solid var(--line)', paddingBottom: '0.65rem' }}>
              {d.category}
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '13px', color: 'var(--fg-dim)' }}>
              {d.items.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--blue)', fontFamily: 'var(--font-mono)' }}>›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .toolkit-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
