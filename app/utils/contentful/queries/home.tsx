/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-anonymous-default-export */
import ContentfulClient from '../client'

// An example of a query to fetch data from Contentful
export const fetchExample = async (): Promise<any> => {
  // this is from Contentful contentmodel Example and you can find the entry id in the entity post

  // ContentfulClient.getEntry("AN_ENTRY_ID");
  const response = await ContentfulClient.getEntry('7rfVvhj4lnBXnvRppdI2Wv')
  return response
}

export const fetchCompanyAppSetting = async (): Promise<any> => {
  const response = await ContentfulClient.getEntry('1RKnCVCc051kwYj8JJmcxK')
  return response
}

export const fetchCompanyAppSettingHartworkContact = async (): Promise<any> => {
  const respons = await ContentfulClient.getEntry('4KFC31WDKyJ5En9hDBsPcb')
  return respons
}
