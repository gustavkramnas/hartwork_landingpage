'use client'
import { theme } from '@/app/utils/appSettings/theme'
import styled from 'styled-components'

export const Main = styled.main`
  min-height: 100vh;
`

export const MainWithPaddingTop = styled(Main)`
  padding-top: ${theme.style.layout.desktopPaddingTop};
`
export const Section = styled.section`
  margin: 0;
  padding: 0;
  padding: 0 ${theme.style.layout.desktopEdgePadding};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
`

export const Container = styled.div`
  width: 100%;
  max-width: ${theme.style.layout.sizes.maxWidth};
`
