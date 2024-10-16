import { theme } from '../../utils/appSettings/theme'
import { Container, Section } from '../baseComponents/base'
import { ContactInfo } from '../baseComponents/ContactInfoComponent'
import { CompanyLogo } from '../baseComponents/CompanyLogo'
import { FlexContainer } from './StyledComponent'
import { SmallP } from '../fontComponents/fonts'
import { fetchCompanyAppSetting } from '@/app/utils/contentful/queries/home'

export const Footer = async () => {
  const year = new Date().getFullYear()
  const company = await fetchCompanyAppSetting()
  return (
    <footer
      style={{
        margin: 0,
        padding: 0,
        background: theme.style.colors.primary
      }}
    >
      <Section>
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
      </Section>
    </footer>
  )
}
