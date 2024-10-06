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
  min-height: 300px;

  padding: 0 ${theme.style.layout.desktopEdgePadding};
  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    padding: 0 ${theme.style.layout.mobileEdgePadding};
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: ${theme.style.layout.sizes.maxWidth};
`
