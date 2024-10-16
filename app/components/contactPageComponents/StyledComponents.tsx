'use client'
import styled from 'styled-components'
import { Container } from '../baseComponents/base'
import { theme } from '@/app/utils/appSettings/theme'

export const ContactContainer = styled(Container)`
  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: ${theme.style.layout.gap};
  max-width: calc(${theme.style.layout.sizes.maxWidth} / 3);
`
