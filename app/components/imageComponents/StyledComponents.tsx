'use client'
import { theme } from '@/app/utils/appSettings/theme'
import styled from 'styled-components'

export const LargeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  transition: 0, 6s all;
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
