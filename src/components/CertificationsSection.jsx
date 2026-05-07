import Reveal from './Reveal.jsx'

const CERTS = [
  { icon: 'cloud',       label: 'Prompt Design in Vertex AI',     color: 'var(--acid)' },
  { icon: 'database',    label: 'Microsoft Fabric Data Factory',  color: 'var(--violet)' },
  { icon: 'smart_toy',   label: 'Google Cloud Gen AI',            color: 'var(--teal)' },
  { icon: 'bolt',        label: 'Microsoft Gen AI',               color: 'var(--coral)' },
  { icon: 'verified_user',label: 'Responsible AI Principles',     color: 'var(--acid)' },
  { icon: 'psychology',  label: 'Large Language Models',          color: 'var(--violet)' },
  { icon: 'code',        label: 'React Web Developer',            color: 'var(--teal)' },
  { icon: 'terminal',    label: 'Java Programming',               color: 'var(--coral)' },
]

export default function CertificationsSection() {
  return (
    <section style={{ padding: 'var(--section-v) 0', background: 'var(--bg-2)' }}>
      <div className="wrap">
        <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>Validated Expertise</span>
            <h2 className="h2"><span style={{ color: 'var(--acid)' }}>Certifications.</span></h2>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.25rem' }} className="certs-grid">
          {CERTS.map(({ icon, label, color }, i) => (
            <Reveal key={label} delay={i + 1}>
              <div className="cert-badge">
                <div className="cert-icon" style={{ color }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '1.5rem' }}>{icon}</span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', textAlign: 'center', color: 'var(--fg-dim)', lineHeight: 1.4 }}>
                  {label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){.certs-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:600px){.certs-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  )
}
