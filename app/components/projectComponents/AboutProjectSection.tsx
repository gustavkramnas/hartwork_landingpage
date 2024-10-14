'use client'
import { Container, Section, Slide } from '../baseComponents/base'
import { H1 } from '../fontComponents/fonts'

type Props = {
  title: string
  description: React.ReactNode
}

export const AboutProjectSection = ({ title, description }: Props) => {
  return (
    <Section>
      <Container>
        <Slide>
          <H1>{title}</H1>
          <div>{description}</div>
        </Slide>
      </Container>
    </Section>
  )
}
