import { GalleryImageComponent } from './GalleryImageComponent'
import { GalleryComponentProps } from '@/app/types/Types'
import {
  GalleryContainer,
  GalleryItem
} from '../imageComponents/StyledComponents'
import { VideoComponent } from '../imageComponents/VideoComponent'
import { P } from '../fontComponents/fonts'
import { Fade } from '../baseComponents/base'
import {
  isImageFile,
  isVideoFile
} from '@/app/utils/helpers/imageOrVideoHelpers'

export const GalleryComponent = ({ galleryItems }: GalleryComponentProps) => {
  return (
    <GalleryContainer>
      {galleryItems.map((item, index) => {
        const fileUrl = `https:${item.fields.file.url}`

        return (
          <Fade key={index}>
            <GalleryItem>
              {isImageFile(fileUrl) ? (
                <GalleryImageComponent
                  url={fileUrl}
                  title={item.fields.title}
                />
              ) : isVideoFile(fileUrl) ? (
                <VideoComponent url={fileUrl} />
              ) : (
                <P $white>Unsupported file type</P>
              )}
            </GalleryItem>
          </Fade>
        )
      })}
    </GalleryContainer>
  )
}
