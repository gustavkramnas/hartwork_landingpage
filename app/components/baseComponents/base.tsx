'use client'
import { theme } from '@/app/utils/appSettings/theme'
import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

export const Main = styled.main`
  min-height: 80vh;
`
export const MainWithPaddingTop = styled(Main)`
  padding-top: ${theme.style.layout.desktopPaddingTop};
  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    padding-top: ${theme.style.layout.mobilePaddingTop};
  }
`
// export const Section = styled.section`
//   margin: 0;
//   padding: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   padding: ${theme.style.layout.desktopSectionPadding} ${theme.style.layout.desktopEdgePadding};
//   @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
//     padding: ${theme.style.layout.mobileSectionPadding} ${theme.style.layout.mobileEdgePadding};
//   }
// `

export const Container = styled.div`
  width: 100%;
  max-width: ${theme.style.layout.sizes.maxWidth};
`
const BuildSection = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${theme.style.layout.desktopSectionPadding} ${theme.style.layout.desktopEdgePadding};

  opacity: 0;
  transition: opacity 0.6s ease-in;

  &.visible {
    opacity: 1;
  }

  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    padding: ${theme.style.layout.mobileSectionPadding} ${theme.style.layout.mobileEdgePadding};
  }
`

type SectionProps = {
  children: React.ReactNode
}

export const Section: React.FC<SectionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <BuildSection ref={sectionRef} className={isVisible ? 'visible' : ''}>
      {children}
    </BuildSection>
  )
}
