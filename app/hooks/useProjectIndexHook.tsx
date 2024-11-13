'use client'
import { useState, useEffect } from 'react'
const useProjectIndex = (displayProjectsLength: number) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  useEffect(() => {
    if (displayProjectsLength === 0) return

    const intervalId = setInterval(() => {
      setCurrentProjectIndex(
        (prevIndex) => (prevIndex + 1) % displayProjectsLength
      )
    }, 5000)

    return () => clearInterval(intervalId)
  }, [displayProjectsLength])

  return currentProjectIndex
}

export default useProjectIndex
