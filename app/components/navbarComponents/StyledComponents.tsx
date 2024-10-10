'use client'
import { theme } from '@/app/utils/appSettings/theme'
import styled from 'styled-components'

type Props = {
  $scrolled: boolean
}

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${theme.style.layout.sizes.maxWidth};
  padding: 0 ${theme.style.layout.desktopEdgePadding};
  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    padding: 0 ${theme.style.layout.mobileEdgePadding};
  }
  transition: 0.6s;
`
export const Header = styled.header<Props>`
  position: fixed;
  top: 0;
  z-index: 1000;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${theme.style.layout.sizes.mobileQueries}) {
    padding: ${({ $scrolled }) => ($scrolled ? '5px 0' : '70px 0 20px 0')};
    background-color: ${({ $scrolled }) =>
      $scrolled ? `${theme.style.colors.tertiary}` : 'transparent'};
    transition: 0.6s;
    &:hover {
      background-color: ${theme.style.colors.tertiary};
    }
  }

  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    background-color: ${theme.style.colors.tertiary};
    padding-top: 8px;
  }
`
export const MobileButtonContainer = styled.div`
  display: none;
  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
