'use client'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { ATitle } from './AStyledComponent'
import { OnePost } from '../types/Types'

const Container = styled.div`
  margin-bottom: 20px;
`

const ThumbnailContainer = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
`
export const PostComponent = ({ title, thumbnailUrl, slug }: OnePost) => {
  return (
    <Container>
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
          <ATitle>No Thumbnail</ATitle>
        )}
      </Link>
    </Container>
  )
}

