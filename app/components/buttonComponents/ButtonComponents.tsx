'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { theme } from '@/app/utils/appSettings/theme'
import { ButtonTitle } from '../fontComponents/fonts'
const LinkButton = styled(Link)`
  text-decoration: none;
  color: ${theme.style.colors.primary};
  display: grid;
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
