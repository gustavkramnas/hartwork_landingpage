'use client'
import { Container, FadeSection, Slide } from '../baseComponents/base'
import { H1, P } from '../fontComponents/fonts'

type Props = {
  companyName: string
  pitch: string
}

export const AboutSection = ({ companyName, pitch }: Props) => {
  return (
    <FadeSection>
      <Container>
        <Slide>
          <H1>{companyName}</H1>
          <P>{pitch}</P>
        </Slide>
      </Container>
    </FadeSection>
  )
}
