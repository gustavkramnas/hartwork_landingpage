import React from 'react'
import { GalleryImageComponent } from './GalleryImageComponent'
import { GalleryComponentProps } from '@/app/types/Types'
import { GalleryContainer, GalleryItem } from './StyledComponents'

export const GalleryComponent: React.FC<GalleryComponentProps> = ({
  galleryItems
}) => {
  return (
    <GalleryContainer>
      {galleryItems.map((item, index) => (
        <GalleryItem key={index}>
          <GalleryImageComponent
            url={`https:${item.fields.file.url}`}
            title={item.fields.title}
          />
        </GalleryItem>
      ))}
    </GalleryContainer>
  )
}
