/* eslint-disable import/no-anonymous-default-export */
import ContentfulClient from '../client'

// An example of a query to fetch data from Contentful
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchExample = async (): Promise<any> => {
  // this is from Contentful contentmodel Example and you can find the entry id in the entity post

  // ContentfulClient.getEntry("AN_ENTRY_ID");
  const response = await ContentfulClient.getEntry('5pxbLUQedUs8bg39RF6nXf')
  return response
}
