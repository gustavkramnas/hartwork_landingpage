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
`

const ListItem = styled.li`
  text-decoration: none;
`

const PageLink = styled(Link)`
  text-decoration: none;
  color: ${theme.style.colors.primary};
  font-weight: 600;
  font-family: ${theme.style.font.fontFamily};
`

export const PageLinksContainer = () => {
  const pages = theme.pages.links
  return (
    <PageList>
      {pages.map((page) => {
        const title =
          page.replace('/', '').charAt(0).toUpperCase() +
          page.replace('/', '').slice(1)

        return (
          <ListItem key={page}>
            <PageLink href={page}>{title}</PageLink>
          </ListItem>
        )
      })}
    </PageList>
  )
}
