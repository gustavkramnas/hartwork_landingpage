'use client'
import Image from 'next/image'
import { LargeImageContainer, RegularImageContainer } from './StyledComponents'
import { ImageProps } from '@/app/types/Types'

export const ImageComponent = ({ url, title }: ImageProps) => {
  return (
    <LargeImageContainer>
      <Image
        src={url}
        alt={title || 'Alt text'}
        fill
        priority
        placeholder="empty"
        style={{ objectFit: 'cover' }}
      />
    </LargeImageContainer>
  )
}

export const ImageComponentForPopup = ({ url, title }: ImageProps) => {
  return (
    <RegularImageContainer>
      <Image
        src={url}
        alt={title || 'Alt text'}
        priority
        fill
        placeholder="empty"
        sizes="100%"
        style={{ objectFit: 'contain' }}
      />
    </RegularImageContainer>
  )
}
