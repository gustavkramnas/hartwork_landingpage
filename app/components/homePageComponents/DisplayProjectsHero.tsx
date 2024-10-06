'use client'

import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { H1 } from '../fontComponents/fonts'
import { ImageComponent } from '../imageComponents/ImageComponent'
import { theme } from '@/app/utils/appSettings/theme'

type DisplayProject = {
  imageUrl: string
  slug: string
  title: string
}

type Props = {
  displayProjects: DisplayProject[]
}

const Wrapper = styled.div`
  position: relative;
`
const ProjectInformationWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProjectInformation = styled.div`
  width: 100%;
  max-width: ${theme.style.layout.sizes.maxWidth};
`

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
        <Wrapper>
          <ImageComponent
            url={displayProjects[currentImageIndex].imageUrl}
            title={displayProjects[currentImageIndex].title}
          />
          <ProjectInformationWrapper>
            <ProjectInformation>
              <H1>{displayProjects[currentImageIndex].title}</H1>
            </ProjectInformation>
          </ProjectInformationWrapper>
        </Wrapper>
      ) : (
        <H1>No project images</H1>
      )}
    </div>
  )
}
