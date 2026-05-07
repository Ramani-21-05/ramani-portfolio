import { useEffect, useRef } from 'react'

/** Wraps children in a div that fades+slides in when scrolled into view */
export default function Reveal({ children, delay = 0, className = '', style = {} }) {
  const el = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )
    if (el.current) observer.observe(el.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={el}
      className={`reveal${delay ? ` reveal-delay-${delay}` : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
