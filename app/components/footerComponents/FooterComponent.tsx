import { theme } from '../../utils/appSettings/theme'
import { Container, Section } from '../baseComponents/base'
import { ContactInfo } from '../baseComponents/ContactInfoComponent'
import { CompanyLogo } from '../baseComponents/CompanyLogo'
import { FlexContainer } from './StyledComponent'
import { P } from '../fontComponents/fonts'

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer
      style={{
        margin: 0,
        padding: 0,
        background: theme.style.colors.secondary
      }}
    >
      <Section>
        <Container>
          <FlexContainer>
            <div>
              <CompanyLogo white />
              <ContactInfo />
            </div>
            <P $white>{year}</P>
          </FlexContainer>
        </Container>
      </Section>
    </footer>
  )
}
