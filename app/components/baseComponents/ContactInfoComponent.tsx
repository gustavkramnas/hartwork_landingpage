import { fetchCompanyAppSetting } from '@/app/utils/contentful/queries/home'
import { A, P_L } from '../fontComponents/fonts'
import { CompanyLogo } from '../baseComponents/CompanyLogo' // Importera din logokomponent

type Props = {
  allInfo?: boolean
}

export const ContactInfo = async ({ allInfo }: Props) => {
  const contactInfo = await fetchCompanyAppSetting()
  
  return (
    <>
      {allInfo && (
        <>
          <CompanyLogo white={false} $scrolled={false} />
          <P_L>{contactInfo.fields.contactPerson}</P_L>
          <P_L>
            <A href={`tel:${contactInfo.fields.phoneNumber}`}>
              {contactInfo.fields.phoneNumber}
            </A>
          </P_L>
        </>
      )}
      <P_L>
        <A $white={!allInfo} href={`mailto:${contactInfo.fields.email}`}>
          {contactInfo.fields.email}
        </A>
      </P_L>
    </>
  )
}
