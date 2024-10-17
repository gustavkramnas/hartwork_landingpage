import { MainWithPaddingTop } from '../components/baseComponents/base'
import { ContactPageSection } from '../components/contactPageComponents/ContactPageSection'
import { PartnerComponent } from '../components/partnersComponent/PartnerComponent'

const Page = () => {
  return (
    <MainWithPaddingTop>
      <ContactPageSection />
      <PartnerComponent />
    </MainWithPaddingTop>
  )
}

export default Page
