'use client'
import Image from 'next/image'
import { ThumbnailContainer } from './StyledComponents'
import { ImageProps } from '@/app/types/Types'

export const ThumbNailComponent = ({ url, title }: ImageProps) => {
  return (
    <ThumbnailContainer>
      <Image
        src={url}
        alt={title || 'Alt text'}
        width={200}
        height={200}
        priority
        style={{ objectFit: 'cover' }}
      />
    </ThumbnailContainer>
  )
}
