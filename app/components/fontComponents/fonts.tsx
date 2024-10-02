'use client'
import { theme } from '@/app/utils/appSettings/theme'
import styled from 'styled-components'

type FontProps = {
  text: string
}

export const H1 = ({ text }: FontProps) => {
  return (
    <h1
      style={{
        fontFamily: theme.style.font.fontFamily,
        color: theme.style.colors.primary
      }}
      aria-label={text}
    >
      {text}
    </h1>
  )
}
//font-family: ${theme.style.font.fontFamily};

export const H2 = styled.h2`
  font-family: ${theme.style.font.fontFamily};
`

export const Heading3 = styled.h3`
  color: blue;
`
// export const H3 = styled.h3`
//   font-family: ${(props) => props.theme.style.font.fontFamily};
// `
// export const P = styled.p`
//   font-family: ${(props) => props.theme.style.font.fontFamily};
// `
