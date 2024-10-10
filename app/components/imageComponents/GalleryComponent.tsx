import { GalleryImageComponent } from './GalleryImageComponent'
import { GalleryComponentProps } from '@/app/types/Types'
import { GalleryContainer, GalleryItem } from './StyledComponents'
import { VideoComponent } from './VideoComponent'

export const GalleryComponent = ({ galleryItems }: GalleryComponentProps) => {
  return (
    <GalleryContainer>
      {galleryItems.map((item, index) => (
        <GalleryItem key={index}>
          <GalleryImageComponent
            url={`https:${item.fields.file.url}`}
            title={item.fields.title}
          />
          {/* <VideoComponent url={`https:${item.fields.file.url}`} /> */}
        </GalleryItem>
      ))}
    </GalleryContainer>
  )
}
