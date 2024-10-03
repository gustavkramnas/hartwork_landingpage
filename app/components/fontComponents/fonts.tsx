'use client'
import { theme } from '@/app/utils/appSettings/theme'
import styled from 'styled-components'

export const H1 = styled.h2`
  font-family: ${theme.style.font.fontFamily};
`
export const H2 = styled.h2`
  font-family: ${theme.style.font.fontFamily};
`
export const H3 = styled.h3`
  font-family: ${(props) => props.theme.style.font.fontFamily};
`
export const P = styled.p`
  font-family: ${(props) => props.theme.style.font.fontFamily};
`
