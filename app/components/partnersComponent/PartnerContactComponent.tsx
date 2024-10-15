'use client'
import styled, { keyframes } from 'styled-components'
import { Container, Fade, Section } from '../baseComponents/base'
import { PartnerSVG } from './PartnerSVG'
import { theme } from '@/app/utils/appSettings/theme'

const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.style.layout.gap};
  grid-auto-rows: 90px;
  grid-auto-columns: 200px;
  justify-content: center;
  align-items: center;
`


const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  max-width: 150px;

`

export const PartnerContactComponent = () => {
  return (
    <Section>
      <Container>
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
