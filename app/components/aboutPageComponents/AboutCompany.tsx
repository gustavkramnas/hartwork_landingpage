'use client'
import styled from 'styled-components'
import { Container, FadeSection } from '../baseComponents/base'
import { H1 } from '../fontComponents/fonts'
import { theme } from '@/app/utils/appSettings/theme'

type Props = {
  info: React.ReactNode
}

const ContactContainer = styled.div`
  max-width: calc(${theme.style.layout.sizes.maxWidth} / 2);
`

export const AboutCompany = ({ info }: Props) => {
  return (
    <FadeSection>
      <Container>
        <H1>Hartwork</H1>
        <ContactContainer>
          {info}
        </ContactContainer>
      </Container>
    </FadeSection>
  )
}
