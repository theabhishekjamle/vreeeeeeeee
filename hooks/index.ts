'use client'
import { useEffect, useRef, useState, useCallback } from 'react'

// Smooth scroll hook with Lenis
export function useSmoothScroll() {
  useEffect(() => {
    let lenis: any
    const initLenis = async () => {
      try {
        const Lenis = (await import('lenis')).default
        lenis = new Lenis({
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
        })
        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
      } catch (e) {
        // Lenis not available, skip
      }
    }
    initLenis()
    return () => { if (lenis) lenis.destroy() }
  }, [])
}

// Custom cursor hook
export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX + 'px'
      cursor.style.top = mouseY + 'px'
    }

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      follower.style.left = followerX + 'px'
      follower.style.top = followerY + 'px'
      requestAnimationFrame(animate)
    }

    const handleHover = () => cursor.classList.add('hovering')
    const handleUnhover = () => cursor.classList.remove('hovering')

    document.addEventListener('mousemove', handleMouseMove)
    document.querySelectorAll('a, button, .clickable').forEach(el => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleUnhover)
    })

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return { cursorRef, followerRef }
}

// Counter animation hook
export function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target, duration])

  return { count, ref }
}

// Scroll progress hook
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress((window.scrollY / total) * 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return progress
}
