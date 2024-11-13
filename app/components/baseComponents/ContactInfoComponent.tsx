import { fetchCompanyAppSetting } from '@/app/utils/contentful/queries/home'
import { A, H3, P } from '../fontComponents/fonts'

type Props = {
  allInfo?: boolean
}

export const ContactInfo = async ({ allInfo }: Props) => {
  const contactInfo = await fetchCompanyAppSetting()
  return (
    <>
      {allInfo && (
        <>
          {/* <H6>{contactInfo.fields.contactCompanyInfo}</H6> */}
          <H3>Kontakta:</H3>
          <P $bold>{contactInfo.fields.contactPerson1}</P>
          <P $bold>
            <A href={`tel:${contactInfo.fields.phoneNumber1}`}>
              {contactInfo.fields.phoneNumber1}
            </A>
          </P>
        </>
      )}
      <P $bold>
        <A $white={!allInfo} href={`mailto:${contactInfo.fields.email}`}>
          {contactInfo.fields.contactEmail1}
        </A>
      </P>

      {allInfo && (
        <div>
          <br></br>
        <P $bold>{contactInfo.fields.contactPerson2}</P>
        </div>

      )}

      <P $bold>
        <A $white={!allInfo} href={`mailto:${contactInfo.fields.email}`}>
          {contactInfo.fields.contactEmail2}
        </A>
      </P>
    </>
  )
}

// GUSTAVS RETURN
// return (
//   <>
//     {allInfo && (
//       <div style={{ display: 'flex', flexDirection: 'row', padding: '20px' }}>
//         <div style={{ flex: 2 }}>
//             <H1>
//               <A
//                 style={{
//                   textDecoration: `underline`,
//                   color: theme.style.colors.secondary
//                 }}
//                 $white={!allInfo}
//                 href={`mailto:${contactInfo.fields.email}`}
//               >
//                 HEJ!
//               </A>
//             </H1>
//           <H6
//             style={{
//               maxWidth: `calc(${theme.style.layout.sizes.maxWidth} / 2)`,
//               paddingBottom: `100px`
//             }}
//           >
//             {contactInfo.fields.contactCompanyInfo}
//           </H6>
//           <H3 style={{ paddingBottom: `10px` }}>
//             {contactInfo.fields.companyName}
//           </H3>
//           <P>{contactInfo.fields.contactPerson}</P>
//           <P>
//             <A href={`tel:${contactInfo.fields.phoneNumber}`}>
//               {contactInfo.fields.phoneNumber}
//             </A>
//           </P>
//           <P>
//             <A $white={!allInfo} href={`mailto:${contactInfo.fields.email}`}>
//               {contactInfo.fields.email}
//             </A>
//           </P>
//         </div>
//         <div
//           style={{
//             flex: 1,
//             alignItems: `center`,
//             display: `flex`,
//             paddingTop: `40px`
//           }}
//         >
//           <PartnerContactComponent />
//         </div>
//       </div>
//     )}
//   </>
// )
