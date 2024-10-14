'use client'
import { Container, Section, Slide } from '../baseComponents/base'
import { H1, P } from '../fontComponents/fonts'

type Props = {
  companyName: string
  pitch: string
}

export const AboutSection = ({ companyName, pitch }: Props) => {
  return (
    <Section>
      <Container>
        <Slide>
          <H1>{companyName}</H1>
          <P>{pitch}</P>
        </Slide>
      </Container>
    </Section>
  )
}
