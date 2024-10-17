'use client'
import styled from 'styled-components'
import { Container, Section } from '../baseComponents/base'
import { theme } from '@/app/utils/appSettings/theme'

export const CookieWrapper = styled(Section)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: '100%';
  background-color: ${theme.style.colors.primary};
  z-index: 1000;
`
export const CookieContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: ${theme.style.layout.gap};

  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
  }
`
