'use client'
import styled from 'styled-components'
import { Container, Fade, FadeSection, Slide } from '../baseComponents/base'
import { PartnerSVG } from './PartnerSVG'
import { H1 } from '../fontComponents/fonts'
import { theme } from '@/app/utils/appSettings/theme'

const IconContainer = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 200px)); */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  /* gap: ${theme.style.layout.gap}; */
  /* @media (min-width: ) */
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
`

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
`

export const PartnerComponent = () => {
  return (
    <FadeSection>
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
    </FadeSection>
  )
}
