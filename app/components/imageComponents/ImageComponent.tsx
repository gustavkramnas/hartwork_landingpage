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
        style={{ objectFit: 'cover' }}
        quality={15}
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
        sizes="100%"
        style={{ objectFit: 'contain' }}
        quality={65}
        unoptimized
      />
    </RegularImageContainer>
  )
}
