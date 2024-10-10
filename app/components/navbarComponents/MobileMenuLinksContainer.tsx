'use client'
import styled from 'styled-components'
import { theme } from '@/app/utils/appSettings/theme'
import Link from 'next/link'

type Props = {
  onClick: () => void
  $showMenu: boolean
}

// const MobileContainer = styled.div<Props>`
//   position: fixed;
//   height: 100vh;
//   z-index: 999;
//   top: 50px;
//   bottom: 0;
//   transition: 0.6s ease-in-out;
//   left: 0;
//   right: 0;
//   background-color: ${theme.style.colors.tertiary};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   @media (min-width: ${theme.style.layout.sizes.mobileQueries}) {
//     display: none;
//   }
// `

const MobileContainer = styled.div<Props>`
  position: fixed;
  height: 100vh;
  z-index: 999;
  right: ${({ $showMenu }) => ($showMenu ? '0' : '-100vw')};
  top: ${theme.style.layout.mobileContainerNavPadding};
  width: 100%;
  transition: right 0.3s ease-in-out;
  background-color: ${theme.style.colors.tertiary};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${theme.style.layout.sizes.mobileQueries}) {
    display: none; // Döljer på större skärmar
  }
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 100px;
`

const ListItem = styled.li`
  text-decoration: none;
`

const PageLink = styled(Link)`
  text-decoration: none;
  color: ${theme.style.colors.primary};
  font-weight: 600;
  font-family: ${theme.style.font.fontFamily};
  padding: 5px 10px;
  transition: 0.6s;
  font-size: 1.5rem;
`
export const MobileMenuContainer = ({ onClick, $showMenu }: Props) => {
  const pages = theme.pages.links
  return (
    <MobileContainer onClick={onClick} $showMenu={$showMenu}>
      <List>
        {pages.map((page) => {
          const title =
            page.replace('/', '').charAt(0).toUpperCase() +
            page.replace('/', '').slice(1)

          return (
            <ListItem key={page}>
              <PageLink href={page} onClick={onClick}>
                {title}
              </PageLink>
            </ListItem>
          )
        })}
      </List>
    </MobileContainer>
  )
}
