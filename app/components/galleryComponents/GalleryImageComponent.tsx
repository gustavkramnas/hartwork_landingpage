'use client'
import Image from 'next/image'
import { ImageContainer } from '../imageComponents/StyledComponents'
import { ImageProps } from '@/app/types/Types'

export const GalleryImageComponent = ({ url, title }: ImageProps) => {
  return (
    <ImageContainer>
      <Image
        src={url}
        alt={title || 'Alt text'}
        fill
        priority
        sizes="100%"
        style={{ objectFit: 'contain' }}
      />
    </ImageContainer>
  )
}
