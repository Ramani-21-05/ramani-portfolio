import { useState, useEffect } from 'react'

const SECTIONS = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']

export default function ProgressStepper() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = SECTIONS.indexOf(entry.target.id)
            if (idx !== -1) setActive(idx)
          }
        })
      },
      { threshold: 0.4 }
    )
    SECTIONS.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="stepper">
      {SECTIONS.map((id, i) => (
        <a key={id} href={`#${id}`}>
          <div className={`stepper-dot ${i === active ? 'active' : ''}`} />
        </a>
      ))}
    </div>
  )
}
