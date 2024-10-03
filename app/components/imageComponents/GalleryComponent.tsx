import React from 'react'
import { ImageComponent } from './ImageComponent'
import { GalleryComponentProps } from '@/app/types/Types'

export const GalleryComponent: React.FC<GalleryComponentProps> = ({
  galleryItems
}) => {
  return (
    <div>
      {galleryItems.map((item, index) => (
        <div key={index}>
          <ImageComponent
            url={`https:${item.fields.file.url}`}
            title={item.fields.title}
          />
        </div>
      ))}
    </div>
  )
}
