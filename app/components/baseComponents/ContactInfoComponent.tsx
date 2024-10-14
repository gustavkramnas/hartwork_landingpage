import { fetchCompanyAppSetting } from '@/app/utils/contentful/queries/home'
import { A, H1, P } from '../fontComponents/fonts'

type Props = {
  allInfo?: boolean
}

export const ContactInfo = async ({ allInfo }: Props) => {
  const contactInfo = await fetchCompanyAppSetting()
  
  return (
    <>
      {allInfo && (
        <>
          <H1>{contactInfo.fields.companyName}</H1>
          <P>{contactInfo.fields.contactPerson}</P>
          <P>
            <A href={`tel:${contactInfo.fields.phoneNumber}`}>
              {contactInfo.fields.phoneNumber}
            </A>
          </P>
        </>
      )}
      <P>
        <A $white={!allInfo} href={`mailto:${contactInfo.fields.email}`}>
          {contactInfo.fields.email}
        </A>
      </P>
    </>
  )
}
