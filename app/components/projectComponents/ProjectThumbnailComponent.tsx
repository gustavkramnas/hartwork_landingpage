'use client'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { OnePost } from '@/app/types/Types'
import { H1 } from '../fontComponents/fonts'

const ThumbnailContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`
export const ProjectThumbnailComponent = ({
  title,
  thumbnailUrl,
  slug
}: OnePost) => {
  return (
    <Link href={`/${slug}`}>
      {thumbnailUrl ? (
        <ThumbnailContainer>
          <Image
            src={thumbnailUrl}
            alt={title || 'thumbnail'}
            width={200}
            height={200}
            priority
            style={{ objectFit: 'cover' }}
          />
        </ThumbnailContainer>
      ) : (
        <H1>No Thumbnail</H1>
      )}
    </Link>
  )
}
