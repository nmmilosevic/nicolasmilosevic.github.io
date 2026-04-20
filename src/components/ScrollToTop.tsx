import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const prevPathname = useRef(pathname)

  useEffect(() => {
    const prev = prevPathname.current
    prevPathname.current = pathname

    const isProjectToProject =
      prev.startsWith('/projects/') && pathname.startsWith('/projects/')

    if (isProjectToProject) {
      // Small delay so new content renders, then smooth scroll to top
      const raf = requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
      return () => cancelAnimationFrame(raf)
    } else if (hash) {
      // Navigate to a specific anchor — scroll to the target element
      const raf = requestAnimationFrame(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'instant' })
      })
      return () => cancelAnimationFrame(raf)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}
