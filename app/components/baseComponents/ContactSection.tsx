'use client'
import { Container, Section } from './base'
import { AppButton } from '../buttonComponents/ButtonComponents'
import { H2 } from '../fontComponents/fonts'

export const ContactSection = () => {
  return (
    <Section>
      <Container>
        <H2>Om kontakt</H2>
        <AppButton href={'contact'} title={'Kontakt'} />
      </Container>
    </Section>
  )
}
