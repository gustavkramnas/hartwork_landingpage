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
  const mobileQueryWidth = parseInt(theme.style.layout.sizes.mobileQueries, 10)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const windowWidth = window.innerWidth;

        if (windowWidth > mobileQueryWidth) {
          if (currentScrollY > 70) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        } else {
          setScrolled(false);
        }
        setLastScrollY(currentScrollY);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY, mobileQueryWidth]);

  const openMenu = () => {
    setShowMenu(true)
    setShowHamburger(false)
  }

  const closeMenu = () => {
    setShowHamburger(true)
    setShowMenu(false)
  }

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= mobileQueryWidth;
  const isScrolledOrMenuOpen = isMobile
    ? scrolled || !showMenu
    : scrolled

  return (
    <Header $scrolled={scrolled}>
      <Nav>
        <CompanyLogo $scrolled={isScrolledOrMenuOpen} />
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
