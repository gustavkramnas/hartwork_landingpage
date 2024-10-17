'use client'
import { Container, ThirdOfAContainer, Section } from './base'
import { AppButton } from '../buttonComponents/ButtonComponents'
import { H2, P } from '../fontComponents/fonts'

export const ContactSection = () => {
  return (
    <Section>
      <Container>
        <H2>Arbeta med oss</H2>
        <ThirdOfAContainer style={{ paddingBottom: '20px' }}>
          <P>
            Oavsett om ni behöver affischer, digitala banners eller
            eventlösningar, är vi här för att hjälpa er. Hör av dig, vare sig du
            vill diskutera ett nytt projekt eller bara ta en kaffe.
          </P>
        </ThirdOfAContainer>

        <AppButton href={'contact'} title={'Kontakt'} />
      </Container>
    </Section>
  )
}
