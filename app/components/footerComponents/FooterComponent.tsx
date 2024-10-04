'use client'
import styled from 'styled-components'
import { theme } from '../../utils/appSettings/theme'
import { P } from '../fontComponents/fonts'

const FooterWrapper = styled.footer`
  margin: 0;
  padding: 0;
  background: ${theme.style.colors.secondary};
`

const Container = styled.div`
  max-width: ${theme.style.layout.sizes.maxWidth};
`

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <P>contact</P>
      </Container>
    </FooterWrapper>
  )
}
