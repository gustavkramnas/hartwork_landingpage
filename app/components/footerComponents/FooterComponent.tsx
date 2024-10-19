import { Container, FadeSection } from '../baseComponents/base'
import { ContactInfo } from '../baseComponents/ContactInfoComponent'
import { CompanyLogo } from '../baseComponents/CompanyLogo'
import { FlexContainer, FooterWrapper } from './StyledComponent'
import { SmallP } from '../fontComponents/fonts'
import { fetchCompanyAppSetting } from '@/app/utils/contentful/queries/home'

export const Footer = async () => {
  const year = new Date().getFullYear()
  const company = await fetchCompanyAppSetting()
  return (
    <FooterWrapper>
      <FadeSection>
        <Container>
          <FlexContainer>
            <div>
              <CompanyLogo white />
              <ContactInfo />
            </div>
            <SmallP $white>
              {year} {company.fields.companyName.toUpperCase()}
            </SmallP>
          </FlexContainer>
        </Container>
      </FadeSection>
    </FooterWrapper>
  )
}
