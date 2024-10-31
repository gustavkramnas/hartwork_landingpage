'use client'
import { theme } from '@/app/utils/appSettings/theme'
import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { H1, H2 } from '../fontComponents/fonts'

type SectionProps = {
  children: React.ReactNode
}

type HeadingProps = {
  h1?: boolean
} & SectionProps

export const Main = styled.main`
  min-height: 80vh;
`
export const MainWithPaddingTop = styled(Main)`
  padding-top: ${theme.style.layout.desktopPaddingTop};
  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    padding-top: ${theme.style.layout.mobilePaddingTop};
  }
`
export const Container = styled.div`
  width: 100%;
  max-width: ${theme.style.layout.sizes.maxWidth};
`

export const Section = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: ${theme.style.layout.desktopSectionPadding} ${theme.style.layout.desktopEdgePadding};

  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    padding: ${theme.style.layout.mobileSectionPadding} ${theme.style.layout.mobileEdgePadding};
  }
`

const BuildSection = styled(Section)`
  opacity: 0;
  transition: opacity 0.6s ease-in;

  &.visible {
    opacity: 1;
  }
`
export const FlexContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ThirdOfAContainer = styled(Container)`
  /* max-width: calc(${theme.style.layout.sizes.maxWidth} / 3); */
  max-width: 480px;
`

const FadeContainer = styled.div`
  opacity: 0;
  transition: opacity 0.6s ease-in;

  &.visible {
    opacity: 1;
  }
`
const SlideContainer = styled.div`
  opacity: 0;
  transform: translateX(5%);
  transition: opacity 0.5s ease, transform 0.5s ease;
  max-width: 5%;
  overflow: hidden;

  &.visible {
    width: auto;
    opacity: 1;
    transform: translateX(0);
    max-width: 80%;
  }
`

export const FadeSection: React.FC<SectionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 }
    )

    const currentSectionRef = sectionRef.current
    if (currentSectionRef) {
      observer.observe(currentSectionRef)
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef)
      }
    }
  }, [])

  return (
    <BuildSection ref={sectionRef} className={isVisible ? 'visible' : ''}>
      {children}
    </BuildSection>
  )
}

export const Fade: React.FC<SectionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 }
    )

    const currentSectionRef = sectionRef.current
    if (currentSectionRef) {
      observer.observe(currentSectionRef)
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef)
      }
    }
  }, [])

  return (
    <FadeContainer ref={sectionRef} className={isVisible ? 'visible' : ''}>
      {children}
    </FadeContainer>
  )
}

export const Slide: React.FC<SectionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 }
    )

    const currentSectionRef = sectionRef.current
    if (currentSectionRef) {
      observer.observe(currentSectionRef)
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef)
      }
    }
  }, [])

  return (
    <SlideContainer ref={sectionRef} className={isVisible ? 'visible' : ''}>
      {children}
    </SlideContainer>
  )
}

const LoaderContainer = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid ${theme.style.colors.secondary};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const Loader = () => {
  return <LoaderContainer />
}

export const Heading = ({ children, h1 }: HeadingProps) => {
  return h1 ? <H1>{children}</H1> : <H2>{children}</H2>
}

// const heartBeat = keyframes`
//   0% { transform: scale(0.95); }
//   5% { transform: scale(1.1); }
//   39% { transform: scale(0.85); }
//   45% { transform: scale(1); }
//   60% { transform: scale(0.95); }
//   100% { transform: scale(0.9); }
// `
// const LoaderContainer = styled.div`
//   position: relative;
//   width: 40px;
//   height: 60px;
//   animation: ${heartBeat} 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);

//   &:before,
//   &:after {
//     content: '';
//     background: ${theme.style.colors.secondary};
//     width: 40px;
//     height: 60px;
//     border-radius: 50px 50px 0 0;
//     position: absolute;
//     left: 0;
//     bottom: 0;
//     transform: rotate(45deg);
//     transform-origin: 50% 68%;
//     box-shadow: 5px 4px 5px #0004 inset;
//   }

//   &:after {
//     transform: rotate(-45deg);
//   }
// `

// export const Loader = () => {
//   return <LoaderContainer />
// }
