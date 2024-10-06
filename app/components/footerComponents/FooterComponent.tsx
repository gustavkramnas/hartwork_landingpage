'use client'
import styled from 'styled-components'
import { theme } from '../../utils/appSettings/theme'
import { H1 } from '../fontComponents/fonts'
import { Container, Section } from '../baseComponents/base'

const FooterWrapper = styled.footer`
  margin: 0;
  padding: 0;
  background: ${theme.style.colors.secondary};
`

export const Footer = () => {
  return (
    <FooterWrapper>
      <Section>
        <Container>
          <H1>Kontakt</H1>
        </Container>
      </Section>
    </FooterWrapper>
  )
}
