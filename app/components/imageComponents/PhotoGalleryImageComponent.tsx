'use client'
import Image from 'next/image'
import { PhotoGalleryImageContainer } from './StyledComponents'
import { ImageProps } from '@/app/types/Types'

export const PhotoGalleryImageComponent = ({ url, title }: ImageProps) => {
  return (
    <PhotoGalleryImageContainer>
      <Image
        src={url}
        alt={title || 'Alt text'}
        fill
        sizes="300px"
        priority
        style={{ objectFit: 'contain' }}
      />
    </PhotoGalleryImageContainer>
  )
}
