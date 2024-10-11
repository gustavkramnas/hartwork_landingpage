'use client'
import styled from 'styled-components'
import { Container, Section } from '../baseComponents/base'
import { PartnerSVG } from './PartnerSVG'
import { theme } from '@/app/utils/appSettings/theme'
import { H1 } from '../fontComponents/fonts'

const IconContainer = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 200px)); */
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  /* gap: ${theme.style.layout.gap}; */
  /* @media (min-width: ) */
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
        <H1>Några av våra kunder</H1>
        <IconContainer>
          {Object.entries(PartnerSVG).map(([key, Logo]) => (
            <Icon key={key} className="partner-logo">
              {Logo}
            </Icon>
          ))}
        </IconContainer>
      </Container>
    </Section>
  )
}
