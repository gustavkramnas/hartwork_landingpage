import { CompanyLogo } from '../baseComponents/CompanyLogo'
import { PageLinksContainer } from './PageLinksContainer'
import { Nav, Header } from './StyledComponents'

export const HeaderComponent = async () => {
  return (
    <Header>
      <Nav>
        <CompanyLogo />
        <PageLinksContainer />
      </Nav>
    </Header>
  )
}
