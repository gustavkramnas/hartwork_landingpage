'use client'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { OnePost } from '@/app/types/Types'
import { H1, P } from '../fontComponents/fonts'
import { theme } from '@/app/utils/appSettings/theme'

const ThumbnailContainer = styled.div`
  position: relative;
  width: 220px;
  height: 200px;
`

const ItemContainer = styled.div`
  position: relative;
`

const ThumbnailTitle = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  background-color: ${theme.style.colors.secondary};
  z-index: 888;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s opacity ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`
export const ProjectThumbnailComponent = ({
  title,
  thumbnailUrl,
  slug
}: OnePost) => {
  return (
    <Link href={`/${slug}`}>
      {thumbnailUrl ? (
        <ItemContainer>
          <ThumbnailContainer>
            <Image
              src={thumbnailUrl}
              alt={title || 'thumbnail'}
              fill
              sizes="100%"
              priority
              style={{ objectFit: 'cover' }}
            />
          </ThumbnailContainer>
          <ThumbnailTitle>
            <P $white>{title}</P>
          </ThumbnailTitle>
        </ItemContainer>
      ) : (
        <H1>No Thumbnail</H1>
      )}
    </Link>
  )
}
