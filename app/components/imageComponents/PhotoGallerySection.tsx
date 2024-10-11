import { GalleryComponentProps } from '@/app/types/Types'
import { PhotoGalleryContainer, PhotoGalleryImageContainer } from './StyledComponents'
import { VideoComponent } from './VideoComponent'
import { H1, P } from '../fontComponents/fonts'
import { Container, Section } from '../baseComponents/base'
import { PhotoGalleryImageComponent } from './PhotoGalleryImageComponent'

export const PhotoGallerySection = ({
  galleryItems
}: GalleryComponentProps) => {
  const isImageFile = (url: string) => {
    return url.match(/\.(jpeg|jpg|gif|png|svg)$/i)
  }

  const isVideoFile = (url: string) => {
    return url.match(/\.(mp4|webm|ogg)$/i)
  }

  return (
    <Section>
      <Container>
        <H1>Mer bilder</H1>
        <PhotoGalleryContainer>
          {galleryItems.map((item, index) => {
            const fileUrl = `https:${item.fields.file.url}`

            return (
              <div key={index}>
                {isImageFile(fileUrl) ? (
                  <PhotoGalleryImageComponent
                    url={fileUrl}
                    title={item.fields.title}
                  />
                ) : isVideoFile(fileUrl) ? (
                  <PhotoGalleryImageContainer>
                    <VideoComponent url={fileUrl} />
                  </PhotoGalleryImageContainer>
                ) : (
                  <P $white>Unsupported file type</P>
                )}
              </div>
            )
          })}
        </PhotoGalleryContainer>
      </Container>
    </Section>
  )
}
