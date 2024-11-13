'use client'
import { theme } from '@/app/utils/appSettings/theme'
import styled from 'styled-components'

// HEROCOMPOENENT

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    height: 85vh;
  }

  max-height: 1200px;
`

export const Fade = styled.div<{ $isVisible: boolean }>`
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: opacity 4s ease-in-out;
`

export const ImageWrapper = styled(Fade)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const ProjectInformationWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProjectInformation = styled.div`
  width: 100%;
  max-width: ${theme.style.layout.sizes.maxWidth};
  padding: 0 ${theme.style.layout.desktopEdgePadding};
  padding: ${theme.style.layout.desktopSectionPadding} ${theme.style.layout.desktopEdgePadding};

  @media (max-width: ${theme.style.layout.sizes.mobileQueries}) {
    padding: ${theme.style.layout.mobileSectionPadding} ${theme.style.layout.mobileEdgePadding};
  }
`

export const LargeImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  transition: 0, 6s all;
  opacity: 0.8;
`

export const RegularImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const ThumbnailContainer = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
`
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  transition: 0, 6s all;
`
export const GalleryContainer = styled.div`
  background-color: ${theme.style.colors.primary};
  padding: calc(${theme.style.layout.gap} * 4) ${theme.style.layout.gap};

  //Added for testing, remove later
  @media (min-width: ${theme.style.layout.sizes.mobileQueries}) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
    & > *:nth-child(3) {
      grid-column: 1 / -1;
    }
  }

  @media (min-width: 1696px) {
    grid-template-columns: repeat(auto-fit, minmax(750px, 1fr));
    /* & > *:nth-child(3) {
      grid-column: auto;
    } */
  }

  gap: ${theme.style.layout.gap};
`
export const GalleryItem = styled.div`
  padding: ${theme.style.layout.gap} 0;
`

export const PhotoGalleryImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  transition: 0, 6s all;
  display: flex;
`
export const PhotoGalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.style.layout.gap};
`

type PopupButtonProps = {
  onClick: () => void
  children: React.ReactNode
}
export const ImageOrVideoToPopupButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`

export const PopUpButton = ({ onClick, children }: PopupButtonProps) => {
  return (
    <ImageOrVideoToPopupButton onClick={onClick}>
      {children}
    </ImageOrVideoToPopupButton>
  )
}
