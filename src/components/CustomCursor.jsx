import { useState, useEffect, useCallback } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [ring, setRing] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)

  const onMove = useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY })
    setTimeout(() => setRing({ x: e.clientX, y: e.clientY }), 60)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', onMove, { passive: true })

    const addHover = () => setHovering(true)
    const removeHover = () => setHovering(false)
    const els = document.querySelectorAll('a,button,.tilt-card,.cert-badge')
    els.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      els.forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [onMove])

  return (
    <>
      <div className="cursor-dot" style={{ left: pos.x, top: pos.y }} />
      <div className={`cursor-ring ${hovering ? 'hovering' : ''}`} style={{ left: ring.x, top: ring.y }} />
    </>
  )
}
