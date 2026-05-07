import Reveal from './Reveal.jsx'

const ACHIEVEMENTS = [
  'Analysed real business datasets using Python (Pandas, NumPy) to surface actionable insights for the product team.',
  'Built data visualisation reports and presented findings — working directly with a professional engineering team.',
  'Gained hands-on exposure to production data pipelines, client data formats, and real-world problem scoping.',
]

export default function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: 'var(--section-v) 0', background: 'var(--bg-3)' }}>
      <div className="wrap">
        {/* eyebrow */}
        <Reveal>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '4rem' }}>Career Trajectory</span>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="exp-grid">
          {/* Left heading */}
          <Reveal>
            <div className="exp-sticky" style={{ position: 'sticky', top: '7rem' }}>
              <div className="section-num">02</div>
              <h2 className="h2" style={{ marginTop: '-1rem' }}>Professional<br /><span style={{ color: 'var(--acid)' }}>Roots.</span></h2>
              <p className="body-lg" style={{ marginTop: '1.5rem', maxWidth: '340px' }}>
                Building in real-world environments — shipping features, squashing bugs,
                and learning what production really means.
              </p>
            </div>
          </Reveal>

          {/* Right timeline */}
          <div className="tl-track">
            <Reveal>
              <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                <div className="tl-dot" />
                {/* Card */}
                <div style={{
                  background: 'var(--bg-4)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 4, padding: '2rem',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--fg)' }}>
                        Data Analyst Intern
                      </h3>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--acid)' }}>
                        NXTLOGIC, COIMBATORE
                      </span>
                    </div>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.08em',
                      color: 'var(--fg-dim)', background: 'rgba(255,255,255,0.05)',
                      padding: '.35rem .9rem', borderRadius: 2, whiteSpace: 'nowrap',
                    }}>
                      2024
                    </span>
                  </div>

                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {ACHIEVEMENTS.map((item, i) => (
                      <Reveal key={i} delay={i + 1}>
                        <li style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
                          <span style={{ color: 'var(--acid)', marginTop: '.15rem', flexShrink: 0, fontSize: '1rem' }}>→</span>
                          <span className="body-sm" style={{ color: 'var(--fg-dim)', fontSize: '.95rem' }}>{item}</span>
                        </li>
                      </Reveal>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    {['Python', 'Pandas', 'NumPy', 'Data Visualization', 'Pipelines'].map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div style={{ position: 'relative', paddingLeft: '1.5rem', marginTop: '2rem' }}>
                <div style={{ position: 'absolute', left: '-.25rem', top: '.4rem', width: 8, height: 8, borderRadius: '50%', border: '1px solid var(--violet)', background: 'var(--bg-3)' }} />
                <div style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: 4, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '.5rem', background: 'var(--bg-4)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--fg)' }}>B.E. Computer Science & Engineering (AI & DS)</h3>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--violet)' }}>Sri Krishna College of Technology</span>
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--fg-dim)', background: 'rgba(255,255,255,0.05)', padding: '.2rem .5rem', borderRadius: 2 }}>Expected: June 2027</span>
                  </div>
                  <p className="body-sm" style={{ color: 'var(--fg-mute)', marginTop: '.5rem' }}>Currently in final year, specializing in Generative AI, Responsible AI, and Data Engineering.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .exp-grid{grid-template-columns:1fr!important;gap:3rem!important}
          .exp-sticky{position:relative!important;top:0!important}
        }
      `}</style>
    </section>
  )
}
