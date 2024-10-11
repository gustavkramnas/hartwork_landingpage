import { GalleryImageComponent } from './GalleryImageComponent'
import { GalleryComponentProps } from '@/app/types/Types'
import { GalleryContainer, GalleryItem } from './StyledComponents'
import { VideoComponent } from './VideoComponent'
import { P } from '../fontComponents/fonts'

export const GalleryComponent = ({ galleryItems }: GalleryComponentProps) => {
  const isImageFile = (url: string) => {
    return url.match(/\.(jpeg|jpg|gif|png|svg)$/i)
  }

  const isVideoFile = (url: string) => {
    return url.match(/\.(mp4|webm|ogg)$/i)
  }

  return (
    <GalleryContainer>
      {galleryItems.map((item, index) => {
        const fileUrl = `https:${item.fields.file.url}`

        return (
          <GalleryItem key={index}>
            {isImageFile(fileUrl) ? (
              <GalleryImageComponent url={fileUrl} title={item.fields.title} />
            ) : isVideoFile(fileUrl) ? (
              <VideoComponent url={fileUrl} />
            ) : (
              <P $white>Unsupported file type</P>
            )}
          </GalleryItem>
        )
      })}
    </GalleryContainer>
  )
}
