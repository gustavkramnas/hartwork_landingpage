'use client'
import { theme } from '@/app/utils/appSettings/theme'
import styled from 'styled-components'

export const LargeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  transition: 0, 6s all;
  opacity: 0.8;
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
  padding: calc(${theme.style.layout.gap} * 4) 0;
`
export const GalleryItem = styled.div`
  padding: ${theme.style.layout.gap} 0;
`

export const PhotoGalleryImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  transition: 0, 6s all;
`
export const PhotoGalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.style.layout.gap};
`
