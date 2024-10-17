/* eslint-disable @typescript-eslint/no-explicit-any */
import ContentfulClient from '../client'

export const fetchPhotoGallery = async (): Promise<any> => {
  try {
    const response = await ContentfulClient.getEntry('1EwgEeSxCS5LWfkzRWhNiK')
    return response
  } catch (error) {
    console.error('Error fetching photo gallery:', error)
    throw new Error('Failed to fetch photo gallery')
  }
}

// export const fetchPhotoGallery = async (): Promise<any> => {
//   const response = await ContentfulClient.getEntry('1EwgEeSxCS5LWfkzRWhNiK')
//   return response
// }
