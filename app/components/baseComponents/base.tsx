'use client'
import { theme } from '@/app/utils/appSettings/theme'
import styled from 'styled-components'

export const Main = styled.main`
  min-height: 100vh;
`

export const MainWithPaddingTop = styled(Main)`
  padding-top: ${theme.style.layout.desktopPaddingTop};
  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    padding-top: ${theme.style.layout.mobilePaddingTop};
  }
`
export const Section = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${theme.style.layout.desktopSectionPadding} ${theme.style.layout.desktopEdgePadding};
  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    padding: ${theme.style.layout.mobileSectionPadding} ${theme.style.layout.mobileEdgePadding};
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: ${theme.style.layout.sizes.maxWidth};
`
export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 200px));
  gap: ${theme.style.layout.gap};
`
