'use client'
import { Container, Section } from '../baseComponents/base'
import { H1, P_L } from '../fontComponents/fonts'

type Props = {
  companyName: string
  pitch: string
}

export const AboutSection = ({ companyName, pitch }: Props) => {
  return (
    <Section>
      <Container>
        <H1>{companyName}</H1>
        <P_L>{pitch}</P_L>
      </Container>
    </Section>
  )
}
