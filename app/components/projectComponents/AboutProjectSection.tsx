'use client'
import { Container, FadeSection, Slide } from '../baseComponents/base'
import { H1 } from '../fontComponents/fonts'

type Props = {
  title: string
  description: React.ReactNode
}

export const AboutProjectSection = ({ title, description }: Props) => {
  return (
    <FadeSection>
      <Container>
        <Slide>
          <H1>{title}</H1>
          <div>{description}</div>
        </Slide>
      </Container>
    </FadeSection>
  )
}
