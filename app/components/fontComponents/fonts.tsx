'use client'
import { theme } from '@/app/utils/appSettings/theme'
import styled from 'styled-components'

type Props = {
  $white?: boolean
  $bold?: boolean
}

export const H1 = styled.h1<Props>`
  margin: 0;
  padding: 0;
  /* font-family: ${theme.style.font.fontFamily}; */
  font-size: ${theme.style.font.headLineSize};
  padding-bottom: ${theme.style.font.paddingBottom};
  color: ${theme.style.colors.secondary};
`

export const DisplayH1 = styled(H1)`
  word-wrap: break-word;
  letter-spacing: -2px;
  font-size: 111px;
  & > a {
    color: ${theme.style.colors.secondary};
  }
`

export const H2 = styled.h2`
  margin: 0;
  padding: 0;
  /* font-family: ${theme.style.font.fontFamily}; */
  font-size: ${theme.style.font.headLineSize};
  padding-bottom: ${theme.style.font.paddingBottom};
  color: ${theme.style.colors.secondary};
`
export const H3 = styled.h3`
  margin: 0;
  padding: 0;
  /* font-family: ${theme.style.font.fontFamily}; */
  font-size: ${theme.style.font.headLineSizeH3};
  color: ${theme.style.colors.secondary};
`
export const H4 = styled.h4`
  margin: 0;
  padding: 0;
  /* font-family: ${theme.style.font.fontFamily}; */
  font-size: ${theme.style.font.headLineSizeH4};
`

export const H5 = styled.h5`
  margin: 0;
  padding: 0;
  /* font-family: ${theme.style.font.fontFamily}; */
  font-size: ${theme.style.font.headLineSizeH5};
`

export const H6 = styled.h6`
  margin: 0;
  padding: 0;
  /* font-family: ${theme.style.font.fontFamily}; */
  font-size: ${theme.style.font.headLineSizeH6};
  line-height: 1.5rem;
`

export const P = styled.p<Props>`
  margin: 0;
  padding: 0;
  /* font-family: ${theme.style.font.fontFamily}; */
  font-size: ${theme.style.font.paragraphSize};
  color: ${(props) =>
    props.$white ? theme.style.colors.tertiary : theme.style.colors.primary};
  line-height: ${theme.style.font.paragraphLineHeight};
  font-weight: ${(props) => (props.$bold ? '700' : '400')};
`
export const SmallP = styled(P)`
  font-size: ${theme.style.font.smallParagraphSize};
`

export const ProjectP = styled(P)`
  text-align: center;
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
