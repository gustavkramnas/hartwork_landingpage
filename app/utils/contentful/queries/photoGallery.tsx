/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-anonymous-default-export */
import ContentfulClient from '../client'

export const fetchPhotGallery = async (): Promise<any> => {
  const response = await ContentfulClient.getEntry('1EwgEeSxCS5LWfkzRWhNiK')
  return response
}
