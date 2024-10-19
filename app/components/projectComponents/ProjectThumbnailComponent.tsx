'use client'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { OnePost } from '@/app/types/Types'
import { H1, ProjectP } from '../fontComponents/fonts'
import { theme } from '@/app/utils/appSettings/theme'
import { Fade } from '../baseComponents/base'

const ThumbnailContainer = styled.div`
  position: relative;
  width: 300px;
  height: 200px;

  @media (max-width: 463px) {
    width: 460px;
    height: 250px;
  }
`

const ItemContainer = styled.div`
  position: relative;
`

const ThumbnailTitle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: 888;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s opacity ease-in-out;
  &:hover {
    opacity: 1;
  }
`
export const Background = styled.div`
  background-color: ${theme.style.colors.secondary};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.8;
`

export const TextContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProjectThumbnailComponent = ({
  title,
  thumbnailUrl,
  slug
}: OnePost) => {
  return (
    <Fade>
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
              <Background />
              <TextContainer>
                <ProjectP $white>{title}</ProjectP>
              </TextContainer>
            </ThumbnailTitle>
          </ItemContainer>
        ) : (
          <H1>No Thumbnail</H1>
        )}
      </Link>
    </Fade>
  )
}
