import { useCallback } from 'react'

/** 3-D tilt card — tracks mouse position and tilts the card */
export default function TiltCard({ children, className = '', style = {} }) {
  const el = useCallback(node => {
    if (!node) return

    const handleMove = (e) => {
      const rect = node.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const mx = (x / rect.width) * 100
      const my = (y / rect.height) * 100
      const rotateX = ((y / rect.height) - 0.5) * -12
      const rotateY = ((x / rect.width) - 0.5) * 12
      node.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`
      node.style.setProperty('--mx', `${mx}%`)
      node.style.setProperty('--my', `${my}%`)
    }

    const handleLeave = () => {
      node.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`
    }

    node.addEventListener('mousemove', handleMove)
    node.addEventListener('mouseleave', handleLeave)
  }, [])

  return (
    <div ref={el} className={`tilt-card ${className}`} style={style}>
      {children}
    </div>
  )
}
