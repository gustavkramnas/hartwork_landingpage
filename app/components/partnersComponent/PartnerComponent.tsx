'use client'
import styled from 'styled-components'
import { Container, Fade, Section, Slide } from '../baseComponents/base'
import { PartnerSVG } from './PartnerSVG'
import { H1 } from '../fontComponents/fonts'

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
`

export const PartnerComponent = () => {
  return (
    <Section>
      <Container>
        <Slide>
          <H1>Några av våra kunder</H1>
        </Slide>
        <IconContainer>
          {Object.entries(PartnerSVG).map(([key, logo]) => (
            <Fade key={key}>
              <Icon className="partner-logo">{logo}</Icon>
            </Fade>
          ))}
        </IconContainer>
      </Container>
    </Section>
  )
}
