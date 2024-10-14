'use client'
import styled from 'styled-components'
import { Section, Container, Slide } from '../baseComponents/base'
import { H1, P } from '../fontComponents/fonts'
import { theme } from '@/app/utils/appSettings/theme'

type Props = {
  info: string
}

const ContactContainer = styled.div`
  max-width: calc(${theme.style.layout.sizes.maxWidth} / 2);
`

export const AboutCompany = ({ info }: Props) => {
  return (
    <Section>
      <Container>
        <Slide>
          <H1>Hartwork</H1>
          <ContactContainer>
            <P>{info}</P>
          </ContactContainer>
        </Slide>
      </Container>
    </Section>
  )
}
