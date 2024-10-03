'use client'
import styled from 'styled-components'
import Image from 'next/image'
import { OnePost } from '../types/Types'
import { H1 } from './fontComponents/fonts'
import Link from 'next/link'

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
          <H1>No Thumbnail</H1>
        )}
      </Link>
    </Container>
  )
}
