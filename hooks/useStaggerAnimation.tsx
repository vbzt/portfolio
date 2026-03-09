'use client'
import { useEffect, useRef, useState } from 'react'

interface UseStaggerAnimationOptions {
  threshold?: number
  rootMargin?: string
  staggerDelay?: number
}

export const useStaggerAnimation = (options: UseStaggerAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', staggerDelay = 50 } = options
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, isVisible, staggerDelay }
}