'use client'
import { GalleryComponentProps } from '@/app/types/Types'
import {
  PhotoGalleryContainer,
  PhotoGalleryImageContainer,
  PopUpButton
} from './StyledComponents'
import { VideoComponent } from './VideoComponent'
import { H1, P } from '../fontComponents/fonts'
import { Container, Fade, Section, Slide } from '../baseComponents/base'
import { PhotoGalleryImageComponent } from './PhotoGalleryImageComponent'
import { useState } from 'react'
import { DisplayMediaPopup } from './DisplayMediaPopup'
import { isImageFile, isVideoFile } from '@/app/utils/helpers/imageOrVideoHelpers'

export const PhotoGallerySection = ({
  galleryItems
}: GalleryComponentProps) => {
  const [showMedia, setShowMedia] = useState('')
  // const isImageFile = (url: string) => {
  //   return url.match(/\.(jpeg|jpg|gif|png|svg)$/i)
  // }

  // const isVideoFile = (url: string) => {
  //   return url.match(/\.(mp4|webm|ogg)$/i)
  // }

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
                <Fade>
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
                </Fade>
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
