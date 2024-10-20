import Image from 'next/image'

import { ImageProps } from '@/app/types/Types'
import { PhotoGalleryImageContainer } from '../imageComponents/StyledComponents'

export const PhotoGalleryImageComponent = ({ url, title }: ImageProps) => {
  return (
    <PhotoGalleryImageContainer>
      <Image
        src={url}
        alt={title || 'Alt text'}
        fill
        sizes="250px"
        priority
        style={{ objectFit: 'contain' }}
      />
    </PhotoGalleryImageContainer>
  )
}
