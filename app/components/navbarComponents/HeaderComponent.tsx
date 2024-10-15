'use client'
import { useState, useEffect } from 'react'
import { CompanyLogo } from '../baseComponents/CompanyLogo'
import { PageLinksContainer } from './PageLinksContainer'
import { Nav, Header, MobileButtonContainer } from './StyledComponents'
import {
  CloseButton,
  HamBurgerButton
} from '../buttonComponents/ButtonComponents'
import { MobileMenuContainer } from './MobileMenuLinksContainer'
import { theme } from '@/app/utils/appSettings/theme'

export const HeaderComponent = () => {
  const [showHamburger, setShowHamburger] = useState<boolean>(true)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [lastScrollY, setLastScrollY] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const windowWidth = window.innerWidth
      const mobileQueryWidth = parseInt(
        theme.style.layout.sizes.mobileQueries,
        10
      )

      if (windowWidth > mobileQueryWidth) {
        if (currentScrollY > 70 && currentScrollY > lastScrollY) {
          setScrolled(true)
        } else if (currentScrollY < lastScrollY) {
          setScrolled(false)
        }
      } else {
        setScrolled(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const openMenu = () => {
    setShowMenu(true)
    setShowHamburger(false)
  }

  const closeMenu = () => {
    setShowHamburger(true)
    setShowMenu(false)
  }

  return (
    <Header $scrolled={scrolled}>
      <Nav>
        <CompanyLogo $scrolled={scrolled} />
        <PageLinksContainer />
        <MobileButtonContainer>
          {showHamburger ? (
            <HamBurgerButton onClick={openMenu} />
          ) : (
            <CloseButton onClick={closeMenu} />
          )}
        </MobileButtonContainer>
        <MobileMenuContainer onClick={closeMenu} $showMenu={showMenu} />
      </Nav>
    </Header>
  )
}
