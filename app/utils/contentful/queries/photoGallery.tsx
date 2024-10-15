/* eslint-disable @typescript-eslint/no-explicit-any */
import ContentfulClient from '../client'

export const fetchPhotoGallery = async (): Promise<any> => {
  const response = await ContentfulClient.getEntry('1EwgEeSxCS5LWfkzRWhNiK')
  return response
}
