'use client'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { H1 } from '../fontComponents/fonts'
import { ImageComponent } from './ImageComponent'
import { theme } from '@/app/utils/appSettings/theme'
import { ArrowButton } from '../buttonComponents/ButtonComponents'

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
  width: 100%;
  height: 100vh;
  overflow: hidden;
  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    height: 85vh;
  }
`

const Fade = styled.div<{ $isVisible: boolean }>`
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 4s ease-in-out;
`

const ImageWrapper = styled(Fade)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  padding: 0 ${theme.style.layout.desktopEdgePadding};
  padding: ${theme.style.layout.desktopSectionPadding} ${theme.style.layout.desktopEdgePadding};
  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    padding: ${theme.style.layout.mobileSectionPadding} ${theme.style.layout.mobileEdgePadding};
  }
`

export const HeroComponent = ({ displayProjects }: Props) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProjectIndex(
        (prevIndex) => (prevIndex + 1) % displayProjects.length
      )
    }, 5000)

    return () => clearInterval(intervalId)
  }, [displayProjects.length])

  return (
    <div>
      {displayProjects.length > 0 ? (
        <Wrapper>
          {displayProjects.map((project, index) => (
            <ImageWrapper
              key={project.slug}
              $isVisible={index === currentProjectIndex}
            >
              <ImageComponent url={project.imageUrl} title={project.title} />
            </ImageWrapper>
          ))}
          <ProjectInformationWrapper>
            <ProjectInformation>
              <ArrowButton
                href={displayProjects[currentProjectIndex].slug}
                title={displayProjects[currentProjectIndex].title}
              />
            </ProjectInformation>
          </ProjectInformationWrapper>
        </Wrapper>
      ) : (
        <H1>No project images</H1>
      )}
    </div>
  )
}
