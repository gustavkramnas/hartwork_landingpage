'use client'

import { useState, useEffect } from 'react'
import { H1 } from '../fontComponents/fonts'
import { ImageComponent } from '../imageComponents/ImageComponent'

type DisplayProject = {
  imageUrl: string
  slug: string
  title: string
}

type Props = {
  displayProjects: DisplayProject[]
}
export const HeroComponent = ({ displayProjects }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % displayProjects.length
      )
    }, 5000)

    return () => clearInterval(intervalId)
  }, [displayProjects.length])

  return (
    <div>
      {displayProjects.length > 0 ? (
        <ImageComponent
          url={displayProjects[currentImageIndex].imageUrl}
          title={displayProjects[currentImageIndex].title}
        />
      ) : (
        <H1>No project images</H1>
      )}
    </div>
  )
}
