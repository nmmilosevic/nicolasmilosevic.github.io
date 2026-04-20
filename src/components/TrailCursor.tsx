import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const TRAIL_COLORS = ['#1a10d6', '#6366f1', '#a855f7', '#ec4899', '#f59e0b']
const LERP = 0.18
const STOP_DELAY = 150

export function TrailCursor() {
  const mouseRef = useRef({ x: -999, y: -999 })
  const posRef = useRef(TRAIL_COLORS.map(() => ({ x: -999, y: -999 })))
  const [positions, setPositions] = useState(TRAIL_COLORS.map(() => ({ x: -999, y: -999 })))
  const [stopped, setStopped] = useState(false)
  const [visible, setVisible] = useState(false)
  const rafRef = useRef<number>(0)
  const stopTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const initRef = useRef(false)

  useEffect(() => {
    const tick = () => {
      posRef.current[0] = { ...mouseRef.current }
      for (let i = 1; i < TRAIL_COLORS.length; i++) {
        const prev = posRef.current[i - 1]
        const cur = posRef.current[i]
        posRef.current[i] = {
          x: cur.x + (prev.x - cur.x) * LERP,
          y: cur.y + (prev.y - cur.y) * LERP,
        }
      }
      setPositions(posRef.current.map(p => ({ ...p })))
      rafRef.current = requestAnimationFrame(tick)
    }

    const onMove = (e: MouseEvent) => {
      if (!initRef.current) {
        posRef.current = TRAIL_COLORS.map(() => ({ x: e.clientX, y: e.clientY }))
        initRef.current = true
      }
      mouseRef.current = { x: e.clientX, y: e.clientY }
      setVisible(true)
      setStopped(false)
      if (stopTimerRef.current) clearTimeout(stopTimerRef.current)
      stopTimerRef.current = setTimeout(() => setStopped(true), STOP_DELAY)
    }

    const onLeave = () => { setStopped(false); setVisible(false) }
    const onEnter = () => setVisible(true)

    rafRef.current = requestAnimationFrame(tick)
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(rafRef.current)
      if (stopTimerRef.current) clearTimeout(stopTimerRef.current)
    }
  }, [])

  if (!visible) return null

  return createPortal(
    <>
      {TRAIL_COLORS.map((color, i) => {
        const pos = positions[i]
        return (
          <div
            key={i}
            className="fixed pointer-events-none"
            style={{
              left: pos.x,
              top: pos.y,
              width: 8,
              height: 8,
              backgroundColor: color,
              transform: 'translate(-50%, -50%)',
              zIndex: 9999 - i,
              opacity: stopped && i > 0 ? 0 : 1 - i * 0.15,
              transition: stopped && i > 0
                ? `opacity ${0.3 + i * 0.08}s ease ${i * 0.04}s`
                : 'none',
            }}
          />
        )
      })}
    </>,
    document.body
  )
}
