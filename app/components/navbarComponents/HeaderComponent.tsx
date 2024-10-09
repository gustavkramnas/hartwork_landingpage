'use client'
import { useState, useEffect } from 'react'
import { CompanyLogo } from '../baseComponents/CompanyLogo'
import { PageLinksContainer } from './PageLinksContainer'
import { Nav, Header } from './StyledComponents'

export const HeaderComponent = () => {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [lastScrollY, setLastScrollY] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setScrolled(true)
      } else if (currentScrollY < lastScrollY) {
        setScrolled(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <Header $scrolled={scrolled}>
      <Nav>
        <CompanyLogo $scrolled={scrolled} />
        <PageLinksContainer />
      </Nav>
    </Header>
  )
}
