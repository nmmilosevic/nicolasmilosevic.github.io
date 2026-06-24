import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const BRAND_BLUE = '#1a10d6'
const TRAIL_LENGTH = 5
const LERP = 0.18
const STOP_DELAY = 150

/** Linear opacity gradient: 100% at cursor → 0% at tail */
function trailOpacity(index: number, total: number) {
  if (total <= 1) return 1
  return 1 - index / (total - 1)
}

export function TrailCursor() {
  const mouseRef = useRef({ x: -999, y: -999 })
  const posRef = useRef(Array.from({ length: TRAIL_LENGTH }, () => ({ x: -999, y: -999 })))
  const [positions, setPositions] = useState(Array.from({ length: TRAIL_LENGTH }, () => ({ x: -999, y: -999 })))
  const [stopped, setStopped] = useState(false)
  const [visible, setVisible] = useState(false)
  const [finePointer, setFinePointer] = useState(false)
  const rafRef = useRef<number>(0)
  const stopTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const initRef = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setFinePointer(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!finePointer) return
    const tick = () => {
      posRef.current[0] = { ...mouseRef.current }
      for (let i = 1; i < TRAIL_LENGTH; i++) {
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
        posRef.current = Array.from({ length: TRAIL_LENGTH }, () => ({ x: e.clientX, y: e.clientY }))
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
  }, [finePointer])

  if (!finePointer || !visible) return null

  return createPortal(
    <>
      {positions.map((pos, i) => {
        const alpha = trailOpacity(i, TRAIL_LENGTH)
        if (alpha <= 0) return null
        return (
          <div
            key={i}
            className="fixed pointer-events-none"
            style={{
              left: pos.x,
              top: pos.y,
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: BRAND_BLUE,
              transform: 'translate(-50%, -50%)',
              zIndex: 9999 - i,
              opacity: stopped && i > 0 ? 0 : alpha,
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
