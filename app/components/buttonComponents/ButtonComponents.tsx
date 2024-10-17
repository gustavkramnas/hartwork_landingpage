'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { theme } from '@/app/utils/appSettings/theme'
import { ButtonTitle, P } from '../fontComponents/fonts'

type Props = {
  href: string
  title: string
}

type MobileButtonProps = {
  onClick: () => void
  $white?: boolean
}

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
}

const LinkButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${theme.style.colors.primary};
  display: grid;
  gap: 5px;
  transition: color 0.5s ease-in-out, stroke 0.5s ease-in-out;
  &:hover {
    color: ${theme.style.colors.tertiary};
    & * {
      color: ${theme.style.colors.tertiary};
      stroke: ${theme.style.colors.tertiary};
    }
  }
  max-width: 400px;
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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-3px);
  }
`

const ButtonWrapper = styled.button`
  cursor: pointer;
  background: none;
  margin: 0;
  padding: 0;
  border: none;
  color: ${theme.style.colors.tertiary};
  background-color: ${theme.style.colors.secondary};
  padding: ${theme.style.layout.buttonsPadding};
  border-radius: ${theme.style.layout.buttonRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-3px);
  }
`

export const MobileButton = styled.button`
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;
`

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

export const Button = ({ onClick, children }: ButtonProps) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
}

export const AppButton = ({ href, title }: Props) => {
  return (
    <AppLinkButton href={href}>
      <P $white>{title}</P>
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

export const HamBurgerButton = ({ onClick }: MobileButtonProps) => {
  const stroke = theme.style.colors.primary
  const strokeMiterlimit = '10'
  return (
    <MobileButton onClick={onClick}>
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
      >
        <line
          fill="none"
          strokeMiterlimit={strokeMiterlimit}
          stroke={stroke}
          x1="30"
          y1="9.31"
          x2="0"
          y2="9.31"
        />
        <line
          fill="none"
          strokeMiterlimit={strokeMiterlimit}
          stroke={stroke}
          x1="30"
          y1="20.69"
          x2="0"
          y2="20.69"
        />
      </svg>
    </MobileButton>
  )
}

export const CloseButton = ({ onClick, $white }: MobileButtonProps) => {
  const stroke = $white
    ? theme.style.colors.tertiary
    : theme.style.colors.primary
  const strokeMiterlimit = '10'
  return (
    <MobileButton onClick={onClick}>
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
      >
        <line
          fill="none"
          strokeMiterlimit={strokeMiterlimit}
          stroke={stroke}
          x1="25.61"
          y1="25.61"
          x2="4.39"
          y2="4.39"
        />
        <line
          fill="none"
          strokeMiterlimit={strokeMiterlimit}
          stroke={stroke}
          x1="25.61"
          y1="4.39"
          x2="4.39"
          y2="25.61"
        />
      </svg>
    </MobileButton>
  )
}
