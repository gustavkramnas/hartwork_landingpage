'use client'
import styled from 'styled-components'
import { Section, Container } from '../baseComponents/base'
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
    <Section>
      <Container>
        <H1>Hartwork</H1>
        <ContactContainer>
          {info}
        </ContactContainer>
      </Container>
    </Section>
  )
}
