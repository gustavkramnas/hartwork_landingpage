'use client'
import { theme } from '@/app/utils/appSettings/theme'
import styled from 'styled-components'

export const Main = styled.main``
export const Section = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  max-width: ${theme.style.layout.sizes.maxWidth};
`
