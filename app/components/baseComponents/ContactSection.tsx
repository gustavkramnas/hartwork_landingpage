'use client'
import { Container, Section, Slide } from './base'
import { AppButton } from '../buttonComponents/ButtonComponents'
import { H2 } from '../fontComponents/fonts'

export const ContactSection = () => {
  return (
    <Section>
      <Container>
        <Slide>
          <H2>Om kontakt</H2>
        </Slide>
        <AppButton href={'contact'} title={'Kontakt'} />
      </Container>
    </Section>
  )
}
