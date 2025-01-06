'use client'

import { useEffect, useRef, useState } from 'react'

export function useParallax(speed: number = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const scrollContainer = ref.current.closest('.snap-mandatory')
      if (!scrollContainer) return

      const rect = ref.current.getBoundingClientRect()
      const scrollTop = scrollContainer.scrollTop
      const offsetTop = rect.top + scrollTop
      const windowHeight = scrollContainer.clientHeight

      const scrollPercent = (scrollTop - offsetTop + windowHeight) / (windowHeight + rect.height)
      const maxOffset = rect.height * -0.96 // Allow image to move up to 50% of its height
      setOffset(-maxOffset * scrollPercent * speed)
    }

    const scrollContainer = ref.current?.closest('.snap-mandatory')
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      handleScroll() // Initial call to set the offset
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll)
      }
    }
  }, [speed])

  return { ref, offset }
}
