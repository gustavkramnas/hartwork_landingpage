import { Section, Container } from '../baseComponents/base'
import { ContactInfo } from '../baseComponents/ContactInfoComponent'

export const ContactPageSection = () => {
  return (
    <Section>
      <Container>
        <ContactInfo allInfo />
      </Container>
    </Section>
  )
}
