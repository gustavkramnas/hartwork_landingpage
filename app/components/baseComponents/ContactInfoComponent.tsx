import { fetchCompanyAppSettingHartworkContact } from '@/app/utils/contentful/queries/home'
import { A, H1, H2, H6, P } from '../fontComponents/fonts'
import { theme } from '@/app/utils/appSettings/theme'
import styled from 'styled-components'
import React, { useState } from 'react'

type Props = {
  allInfo?: boolean
}

export const ContactInfo = async ({ allInfo }: Props) => {
  const contactInfo = await fetchCompanyAppSettingHartworkContact()
  return (
    <>
      {allInfo && (
        <>
        <H1> HEJ! </H1>
        <H6>{contactInfo.fields.aboutCompany}
        </H6>
          <H2>{contactInfo.fields.companyName}</H2>
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
