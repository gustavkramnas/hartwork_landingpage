'use client'
import { theme } from '@/app/utils/appSettings/theme'
import styled from 'styled-components'

type Props = {
  $white?: boolean
}

export const H1 = styled.h2`
  margin: 0;
  padding: 0;
  font-family: ${theme.style.font.fontFamily};
  font-size: ${theme.style.font.headLineSize};
  padding-bottom: ${theme.style.font.paddingBottom};
`
export const H2 = styled.h2`
  margin: 0;
  padding: 0;
  font-family: ${theme.style.font.fontFamily};
  font-size: ${theme.style.font.headLineSize};
  padding-bottom: ${theme.style.font.paddingBottom};
`
export const H3 = styled.h3`
  margin: 0;
  padding: 0;
  font-family: ${theme.style.font.fontFamily};
  font-size: ${theme.style.font.headLineSize};
`
export const P = styled.p`
  margin: 0;
  padding: 0;
  font-family: ${theme.style.font.fontFamily};
  font-size: ${theme.style.font.paragraphSize};
`
export const ButtonTitle = styled(P)`
  font-size: ${theme.style.font.linkButtonWithArrowSize};
  font-weight: ${theme.style.font.linkButtonWithArrowWeight};
`
export const P_L = styled(P)`
  font-size: ${theme.style.font.paragraphLarger};
`
export const A = styled.a<Props>`
  text-decoration: none;
  color: ${(props) =>
    props.$white ? theme.style.colors.tertiary : theme.style.colors.primary};
`
