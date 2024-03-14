import { useState, useEffect, useRef } from 'react'

const useHover = () => {
  const [isHovered, setHovered] = useState(false)
  const targetRef = useRef(null)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  useEffect(() => {
    const target = targetRef.current

    if (target) {
      target.addEventListener('mouseenter', handleMouseEnter)
      target.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        target.removeEventListener('mouseenter', handleMouseEnter)
        target.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return [targetRef, isHovered]
}

export default useHover
