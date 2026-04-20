import { useEffect } from 'react'

export function useScrollReveal(dep?: unknown) {
  useEffect(() => {
    // Reset any stale is-visible classes from a previous route
    document.querySelectorAll<HTMLElement>('.reveal.is-visible').forEach((el) => {
      el.classList.remove('is-visible')
    })

    const els = document.querySelectorAll<HTMLElement>('.reveal')
    if (!els.length) return

    // Skip animations when user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep])
}
