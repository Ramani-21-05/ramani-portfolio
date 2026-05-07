import { useState, useRef } from 'react'
import Reveal from './Reveal.jsx'
import TiltCard from './TiltCard.jsx'

const PROJECTS = [
  {
    id: 'ai-agent',
    num: '01',
    title: 'AI Automation Agent',
    type: 'Agentic Workflow',
    color: 'var(--acid)',
    description: 'Autonomous agent planning and executing multi-step business workflows using LLM tool-calling — cutting MSME manual effort by ~70%.',
    tags: ['Python', 'LLM APIs', 'Automation', 'LangChain'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRnH8KFB9YaPT6OU4YX9qt6oKEbBkUyAfRQnBU0VJwnnkGGzwNLKNe5liWguFgXo4ZXeQzv5FfPIsMUL5OusRz0dE9EySxNCm3pVDr8uhoJ7Nm62pgju9EwrFSo-QeL4UK-d8TBogKaZg2nLTavpq7siiiFEIpJpunBeg1WvF95eI4dGaJ6hBbyYRMZsL9RzxpmwvQumeP5bW6XLfA8MBZq2wHaKI2S-DeLRsg3xxxgyyyLGFYElMEreq-ovqLoQmuwbZVbKnUD_Q',
  },
  {
    id: 'freelancer',
    num: '02',
    title: 'Freelancer Lead Booster',
    type: 'Full-Stack SaaS',
    color: 'var(--violet)',
    description: 'Open-source platform auto-generating personalized cold outreach, tracking leads, and managing proposals. Gaining GitHub stars.',
    tags: ['React', 'Spring Boot', 'Supabase', 'Sanity CMS'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9kGvK6VUsdgJ1G3-cQWnVzsmPp-474oU3FN-XiciqfZtiAXFsJLDVKIrYTix7mqCfEEDIM5N_g_-l7WYcbUygbOywCx4cUqV1kiXu8nS47MPerbgWT044PLLhCIwznHYZeiZE7h8IjqYe0dtQHvH4epsLyZssPaB_xVU4v5wEP4twS33pc3kYh8let_4gaBetafoTmOTkN4FAdHWQ1s7SqXhKzcHB7wqRRUDUFtDnjiX5z98TKKGiHtMcB1IIBpgUzhe7AdnHy5I',
  },
  {
    id: 'sign-lang',
    num: '03',
    title: 'Sign Language AI',
    type: 'Computer Vision',
    color: 'var(--coral)',
    description: 'Real-time hand-gesture classifier recognizing sign-language alphabets via webcam, bridging communication for 70M+ deaf individuals.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Scikit-learn'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqyRBj9Uj862FSJwgP2n_g513gRsyWo8socWhsOvzyqTPQ7Z2gPst2u2Ub74zADm3FU9qhiGEf7JQAN3_lwBFnsZNfNque2Q-B25SZSMIO3F_i1X0FabxYRqeJGJi3svGeVNUmbVXFtFY4vR1k8S-7xfm6gwjXNKRdpafFFmuG5dlU9bukpW1JM-NRBytePJ-jFWHSU1ncGKIhAmbQNxQQqtkUkaZL_mflaNgFhhR8QiSB6vTVO5WbMs4ISC00ZHSrl3JHtoVYurk',
  },
  {
    id: 'attendance',
    num: '04',
    title: 'Attendance Manager',
    type: 'Enterprise App',
    color: 'var(--teal)',
    description: 'Full-stack university attendance system with role-based access, live dashboards, and real-time tracking for 200+ students.',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'Supabase'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRnH8KFB9YaPT6OU4YX9qt6oKEbBkUyAfRQnBU0VJwnnkGGzwNLKNe5liWguFgXo4ZXeQzv5FfPIsMUL5OusRz0dE9EySxNCm3pVDr8uhoJ7Nm62pgju9EwrFSo-QeL4UK-d8TBogKaZg2nLTavpq7siiiFEIpJpunBeg1WvF95eI4dGaJ6hBbyYRMZsL9RzxpmwvQumeP5bW6XLfA8MBZq2wHaKI2S-DeLRsg3xxxgyyyLGFYElMEreq-ovqLoQmuwbZVbKnUD_Q',
  },
]

export default function ProjectsSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="projects" style={{ padding: 'var(--section-v) 0' }}>
      <div className="wrap">
        {/* Header */}
        <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>Selected Work</span>
            <h2 className="h2">Functional<br /><span style={{ color: 'var(--acid)' }}>Systems.</span></h2>
          </div>
          <p className="body-lg" style={{ maxWidth: '340px' }}>
            Each project is an engineered solution — not just a UI, but a working business engine.
          </p>
        </Reveal>

        {/* Project grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="proj-grid">
          {/* Featured left */}
          <Reveal>
            <TiltCard style={{ height: '100%', minHeight: '480px' }}>
              <div className="proj-img" style={{ aspectRatio: '4/3' }}>
                <img src={PROJECTS[0].image} alt={PROJECTS[0].title} loading="lazy" />
              </div>
              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.75rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: PROJECTS[0].color, letterSpacing: '.1em', textTransform: 'uppercase' }}>
                    {PROJECTS[0].type}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', fontWeight: 800, color: 'rgba(255,255,255,.05)', lineHeight: 1 }}>{PROJECTS[0].num}</span>
                </div>
                <h3 className="h3" style={{ marginBottom: '.75rem', color: 'var(--fg)' }}>{PROJECTS[0].title}</h3>
                <p className="body-sm" style={{ marginBottom: '1.25rem' }}>{PROJECTS[0].description}</p>
                <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
                  {PROJECTS[0].tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', marginTop: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '.08em', color: PROJECTS[0].color, textTransform: 'uppercase', transition: 'gap .2s ease' }}
                  onMouseEnter={e => e.currentTarget.style.gap = '1rem'}
                  onMouseLeave={e => e.currentTarget.style.gap = '.5rem'}
                >
                  Case Study <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>arrow_forward</span>
                </a>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px', background: `linear-gradient(90deg, ${PROJECTS[0].color}, transparent)`, opacity: .5 }} />
            </TiltCard>
          </Reveal>

          {/* Right stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {PROJECTS.slice(1).map((p, i) => (
              <Reveal key={p.id} delay={i + 2}>
                <TiltCard>
                  <div className="proj-stack-inner" style={{ display: 'grid', gridTemplateColumns: '140px 1fr', overflow: 'hidden', minHeight: '200px' }}>
                    <div className="proj-img-wrap" style={{ aspectRatio: 'auto', height: '100%' }}>
                      <img src={p.image} alt={p.title} style={{ height: '100%', width: '100%', objectFit: 'cover' }} loading="lazy" />
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: p.color, letterSpacing: '.1em', textTransform: 'uppercase' }}>{p.type}</span>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, margin: '.5rem 0', color: 'var(--fg)' }}>{p.title}</h3>
                      <p className="body-sm" style={{ fontSize: '.8rem', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.description}</p>
                      <a href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: p.color, letterSpacing: '.08em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '.35rem' }}>
                        View <span className="material-symbols-outlined" style={{ fontSize: '.9rem' }}>arrow_forward</span>
                      </a>
                    </div>
                  </div>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '2px', background: `linear-gradient(90deg, ${p.color}, transparent)`, opacity: .4 }} />
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){
          .proj-grid{grid-template-columns:1fr!important; gap:3rem!important}
        }
        @media(max-width:600px){
          .proj-stack-inner{grid-template-columns:1fr!important}
          .proj-img-wrap{height:200px!important}
        }
      `}</style>
    </section>
  )
}
