'use client'
import { theme } from '@/app/utils/appSettings/theme'
import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  margin: 0;
  padding: 0;
  background: ${theme.style.colors.primary};
  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    min-height: 200px;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    height: 180px;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }
`
