'use client'
import { Container, Section } from '../baseComponents/base'
import { AppButton } from '../buttonComponents/ButtonComponents'
import { H1 } from '../fontComponents/fonts'

export const ContactSection = () => {
  return (
    <Section>
      <Container>
        <H1>Om kontakt</H1>
        <AppButton href={'contact'} title={'Kontakt'} />
      </Container>
    </Section>
  )
}
