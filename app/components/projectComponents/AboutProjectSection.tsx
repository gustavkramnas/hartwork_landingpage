'use client'
import { Container, Section } from '../baseComponents/base'
import { H1 } from '../fontComponents/fonts'

type Props = {
  title: string
  description: React.ReactNode
}

export const AboutProjectSection = ({ title, description }: Props) => {
  return (
    <Section>
      <Container>
        <H1>{title}</H1>
        <div>{description}</div>
      </Container>
    </Section>
  )
}
