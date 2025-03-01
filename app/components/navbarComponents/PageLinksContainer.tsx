'use client'
import styled from 'styled-components'
import { theme } from '@/app/utils/appSettings/theme'
import Link from 'next/link'

const PageList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 1rem;
  transition: 0.6s;
  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    display: none;
  }
`

const ListItem = styled.li`
  text-decoration: none;
  @media (min-width: ${theme.style.layout.sizes.mobileQueries}) {
    transition: 0.6s;
    :hover {
      border-bottom: 1px solid ${theme.style.colors.secondary};
    }
  }
`

const PageLink = styled(Link)`
  text-decoration: none;
  color: ${theme.style.colors.primary};
  font-weight: 600;
  /* font-family: ${theme.style.font.fontFamily}; */
  padding: 5px 10px;
  transition: 0.6s;
`

export const PageLinksContainer = () => {
  const pages = theme.pages.links
  return (
    <PageList>
      {pages.map((page) => {
        return (
          <ListItem key={page.href}>
            <PageLink href={page.href}>{page.title}</PageLink>
          </ListItem>
        )
      })}
    </PageList>
  )
}
