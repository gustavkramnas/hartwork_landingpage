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
  try {
    const response = await ContentfulClient.getEntry('1RKnCVCc051kwYj8JJmcxK')
    return response
  }
  catch (error) {
    console.error('Error fetching company app settings:', error)
    throw new Error('Failed to fetch company app settings')
  }

}
