'use client'
import styled from 'styled-components'
import { ImageComponentForPopup } from './ImageComponent'
import { theme } from '@/app/utils/appSettings/theme'
import { CloseButton } from '../buttonComponents/ButtonComponents'
import {
  isImageFile,
  isVideoFile
} from '@/app/utils/helpers/imageOrVideoHelpers'
import { VideoComponent } from './VideoComponent'
import { H1 } from '../fontComponents/fonts'
import { FlexContainer, Loader } from '../baseComponents/base'

type Props = {
  src: string
  onClick: () => void
}

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${theme.style.colors.primary};
    opacity: 0.8;
    z-index: -1;
  }
`
const PopupContainer = styled.div`
  display: grid;
  gap: ${theme.style.layout.gap};
  grid-template-rows: 30px auto;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
`
const ImageContainer = styled.div`
  width: 80vw;
  height: 80vh;
`

export const DisplayMediaPopup = ({ src, onClick }: Props) => {
  return (
    <PopupWrapper onClick={onClick}>
      <PopupContainer>
        <ButtonContainer>
          <CloseButton $white onClick={onClick} />
        </ButtonContainer>
        <ImageContainer>
          {src ? (
            isImageFile(src) ? (
              <ImageComponentForPopup url={src} />
            ) : isVideoFile(src) ? (
              <VideoComponent url={src} />
            ) : (
              <H1>Unsupported file type</H1>
            )
          ) : (
            <FlexContainer>
              <Loader />
            </FlexContainer>
          )}
        </ImageContainer>
      </PopupContainer>
    </PopupWrapper>
  )
}
