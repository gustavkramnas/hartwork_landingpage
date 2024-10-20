'use client'
import { GalleryItem } from '@/app/types/Types'
import { P } from '../fontComponents/fonts'
import { Container, Fade, Heading, Section, Slide } from '../baseComponents/base'
import { PhotoGalleryImageComponent } from './PhotoGalleryImageComponent'
import { useState } from 'react'
import {
  isImageFile,
  isVideoFile
} from '@/app/utils/helpers/imageOrVideoHelpers'
import { DisplayMediaPopup } from '../imageComponents/DisplayMediaPopup'
import { PhotoGalleryContainer, PopUpButton, PhotoGalleryImageContainer } from '../imageComponents/StyledComponents'
import { VideoComponent } from '../imageComponents/VideoComponent'

type GalleryComponentProps = {
  galleryItems: Array<GalleryItem>
  headLine: string
  h1?: boolean
}

export const PhotoGallerySection = ({
  galleryItems, headLine, h1
}: GalleryComponentProps) => {
  const [showMedia, setShowMedia] = useState('')

  const PopUp = (src: string) => {
    console.log(src)
    setShowMedia(src)
  }

  return (
    <Section>
      <Container>
        <Slide>
          <Heading h1={h1}>{headLine}</Heading>
        </Slide>
        <PhotoGalleryContainer>
          {galleryItems.map((item, index) => {
            const fileUrl = `https:${item.fields.file.url}`

            return (
              <PopUpButton key={index} onClick={() => PopUp(fileUrl)}>
                {isImageFile(fileUrl) ? (
                  <Fade>
                    <PhotoGalleryImageComponent
                      url={fileUrl}
                      title={item.fields.title}
                    />
                  </Fade>
                ) : isVideoFile(fileUrl) ? (
                  <Fade>
                    <PhotoGalleryImageContainer>
                      <VideoComponent url={fileUrl} />
                    </PhotoGalleryImageContainer>
                  </Fade>
                ) : (
                  <P $white>Unsupported file type</P>
                )}
              </PopUpButton>
            )
          })}
          {showMedia && (
            <DisplayMediaPopup
              onClick={() => setShowMedia('')}
              src={showMedia}
            />
          )}
        </PhotoGalleryContainer>
      </Container>
    </Section>
  )
}
