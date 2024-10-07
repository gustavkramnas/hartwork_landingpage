'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { theme } from '@/app/utils/appSettings/theme'
import { ButtonTitle, P } from '../fontComponents/fonts'
const LinkButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${theme.style.colors.primary};
  display: grid;
`

const AppLinkButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${theme.style.colors.tertiary};
  background-color: ${theme.style.colors.secondary};
  padding: ${theme.style.layout.buttonsPadding};
  border-radius: ${theme.style.layout.buttonRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100px;
`

type Props = {
  href: string
  title: string
}

export const ArrowButton = ({ href, title }: Props) => {
  return (
    <LinkButton href={href}>
      <ButtonTitle>{title}</ButtonTitle>
      {/* arrow_1 */}
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="30"
        viewBox="0 0 70 30"
      >
        <line
          fill="none"
          strokeMiterlimit="10"
          stroke={theme.style.colors.primary}
          y1="15"
          x2="70"
          y2="15"
        />
        <polyline
          fill="none"
          strokeMiterlimit="10"
          stroke={theme.style.colors.primary}
          points="55.14 29.86 70 15 55.14 .14"
        />
      </svg>

      {/* arrow_2 */}
      {/* <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="19.49"
        viewBox="0 0 70 19.49"
      >
        <line
          fill="none"
         strokeMiterlimit="10"
          stroke={theme.style.colors.primary}
          y1="9.75"
          x2="70"
          y2="9.75"
        />
        <polyline
          fill="none"
          strokeMiterlimit="10"
          stroke={theme.style.colors.primary}
          points="60.92 18.83 70 9.75 60.92 .67"
        />
      </svg> */}

      {/* arrow_3 */}
      {/* <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="29.04"
        height="30"
        viewBox="0 0 29.04 30"
      >
        <polyline
          fill="none"
          strokeMiterlimit="10"
          stroke={theme.style.colors.primary}
          points="14.18 29.86 29.04 15 14.18 .14"
        />
      </svg> */}
    </LinkButton>
  )
}

export const AppButton = ({ href, title }: Props) => {
  return (
    <AppLinkButton href={href}>
      <P>{title}</P>
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 29.04 30"
      >
        <polyline
          fill="none"
          strokeMiterlimit="10"
          stroke={theme.style.colors.tertiary}
          points="14.18 29.86 29.04 15 14.18 .14"
        />
      </svg>
    </AppLinkButton>
  )
}
