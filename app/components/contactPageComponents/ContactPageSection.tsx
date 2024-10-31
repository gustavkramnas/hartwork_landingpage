import { fetchCompanyAppSetting } from '@/app/utils/contentful/queries/home'
import { Container, FadeSection, Slide } from '../baseComponents/base'
import { ContactInfo } from '../baseComponents/ContactInfoComponent'
import { ContactContainer, ItemContainer } from './StyledComponents'
import { A, DisplayH1, P } from '../fontComponents/fonts'

export const ContactPageSection = async () => {
  const contactInfo = await fetchCompanyAppSetting()
  return (
    <FadeSection>
      <ContactContainer>
      <Slide>
          <DisplayH1>
            <A href={`mailto:${contactInfo.fields.email}`}>HEJ!</A>
          </DisplayH1>
        </Slide>
        <ItemContainer>
          <P>{contactInfo.fields.contactCompanyInfo}</P>
        </ItemContainer>
      </ContactContainer>
      <br></br>
      <Container>
        <ContactInfo allInfo />
      </Container>
    </FadeSection>
  )
}
