import { useEffect, useRef, useState, type ReactNode } from 'react'

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target) } }, { threshold: 0.12 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

export function CountUp({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const started = performance.now()
      const tick = (time: number) => { const progress = Math.min((time - started) / 1100, 1); setCount(Math.round(value * (1 - (1 - progress) ** 3))); if (progress < 1) frame = requestAnimationFrame(tick) }
      frame = requestAnimationFrame(tick)
      observer.unobserve(node)
    }, { threshold: 0.5 })
    observer.observe(node)
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [value])
  return <span ref={ref}>{count}{suffix}</span>
}
