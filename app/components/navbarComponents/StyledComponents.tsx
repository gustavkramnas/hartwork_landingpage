'use client'
import { theme } from '@/app/utils/appSettings/theme'
import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${theme.style.layout.sizes.maxWidth};
  padding: 0 ${theme.style.layout.desktopEdgePadding};
  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    padding: 0 ${theme.style.layout.mobileEdgePadding};
  }
`
export const Header = styled.header`
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
