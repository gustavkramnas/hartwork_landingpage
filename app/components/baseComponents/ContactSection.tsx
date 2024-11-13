'use client'
import { Container, ThirdOfAContainer, Section } from './base'
import { AppButton } from '../buttonComponents/ButtonComponents'
import { H2, P } from '../fontComponents/fonts'

export const ContactSection = () => {
  return (
    <Section>
      <Container>
        <H2>Nyfiken?</H2>
        <ThirdOfAContainer style={{ paddingBottom: '20px' }}>
          <P>
            Hör av dig, vare sig du vill diskutera ett nytt projekt eller bara
            ses för en god kopp kaffe.
          </P>
        </ThirdOfAContainer>

        <AppButton href={'contact'} title={'Kontakt'} />
      </Container>
    </Section>
  )
}
