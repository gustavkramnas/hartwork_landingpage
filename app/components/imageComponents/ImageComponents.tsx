'use client'
import Image from 'next/image'
import { LargeContainer } from './StyledComponents'
import { ImageProps } from '@/app/types/Types'

export const ImageComponent = ({ url, title }: ImageProps) => {
  return (
    <LargeContainer>
      <Image
        src={url}
        alt={title || 'Alt text'}
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
    </LargeContainer>
  )
}
