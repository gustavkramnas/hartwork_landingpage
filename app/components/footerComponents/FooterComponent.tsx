import { theme } from '../../utils/appSettings/theme'
import { Container, Section } from '../baseComponents/base'
import { ContactInfo } from '../baseComponents/ContactInfoComponent'
import { CompanyLogo } from '../baseComponents/CompanyLogo'

export const Footer = () => {
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
          <CompanyLogo white />
          <ContactInfo />
        </Container>
      </Section>
    </footer>
  )
}
