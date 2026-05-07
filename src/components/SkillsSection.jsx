import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'

const STACK = [
  'PYTHON', 'REACT', 'SPRING BOOT', 'JAVA', 'JAVASCRIPT',
  'OPENCV', 'MEDIAPIPE', 'SUPABASE', 'FLASK', 'PANDAS',
  'AI AGENTS', 'WHATSAPP API', 'SANITY CMS', 'REST APIS', 'GIT',
]

// duplicate for infinite loop
const TICKER = [...STACK, ...STACK, ...STACK]

const SKILLS = [
  { num: '01', title: 'Languages & Frontend', icon: 'terminal', color: 'var(--acid)',
    tags: ['Python', 'Java', 'JavaScript', 'React'] },
  { num: '02', title: 'Backend & DB', icon: 'database', color: 'var(--teal)',
    tags: ['Spring Boot', 'Flask', 'REST APIs', 'Supabase'] },
  { num: '03', title: 'AI & Data', icon: 'psychology', color: 'var(--violet)',
    tags: ['OpenCV', 'MediaPipe', 'Pandas', 'Scikit-learn'] },
  { num: '04', title: 'Automation', icon: 'settings_suggest', color: 'var(--coral)',
    tags: ['WhatsApp API', 'AI Agents', 'Web Scraping', 'Sanity CMS'] },
]

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: 'var(--section-v) 0', background: 'var(--bg-2)', overflow: 'hidden' }}>
      {/* Header */}
      <div className="wrap" style={{ marginBottom: '4rem' }}>
        <Reveal>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>Technical Stack</span>
        </Reveal>
        <Reveal delay={1} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 className="h2">Engineered<br /><span style={{ color: 'var(--acid)' }}>Precision.</span></h2>
          <p className="body-lg" style={{ maxWidth: '360px' }}>
            Combining modern tooling with battle-tested architecture to ship real products.
          </p>
        </Reveal>
      </div>

      {/* Marquee ticker */}
      <div style={{ overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '.75rem 0', marginBottom: '4rem' }}>
        <div className="marquee-track">
          {TICKER.map((item, i) => (
            <span key={i} className={`marquee-item ${i % 5 === 2 ? 'filled' : ''}`}>
              {item}
              <span style={{ color: 'var(--acid)', fontSize: '.5em', marginLeft: '.5rem' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Skill cards */}
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.25rem' }} className="skills-grid">
          {SKILLS.map(({ num, title, icon, color, tags }, i) => (
            <Reveal key={title} delay={i + 1}>
              <TiltCard style={{ padding: '2rem', height: '100%' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 800, color: 'rgba(255,255,255,0.06)', lineHeight: 1, marginBottom: '1.5rem' }}>
                  {num}
                </div>
                <div style={{ width: 40, height: 40, borderRadius: 4, background: `${color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <span className="material-symbols-outlined" style={{ color, fontSize: '1.25rem' }}>{icon}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--fg)' }}>{title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                  {tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                {/* accent bottom line */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px', background: `linear-gradient(90deg, ${color}, transparent)`, opacity: 0.4 }} />
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){.skills-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:600px){.skills-grid{grid-template-columns:1fr!important}}
      `}</style>
    </section>
  )
}
