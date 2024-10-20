'use client'
import { GalleryComponentProps } from '@/app/types/Types'
import { H1, P } from '../fontComponents/fonts'
import { Container, Fade, Section, Slide } from '../baseComponents/base'
import { PhotoGalleryImageComponent } from './PhotoGalleryImageComponent'
import { useState } from 'react'
import {
  isImageFile,
  isVideoFile
} from '@/app/utils/helpers/imageOrVideoHelpers'
import { DisplayMediaPopup } from '../imageComponents/DisplayMediaPopup'
import { PhotoGalleryContainer, PopUpButton, PhotoGalleryImageContainer } from '../imageComponents/StyledComponents'
import { VideoComponent } from '../imageComponents/VideoComponent'

export const PhotoGallerySection = ({
  galleryItems
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
          <H1>Blandade jobb åt kund</H1>
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
