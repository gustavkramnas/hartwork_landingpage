/* eslint-disable @typescript-eslint/no-explicit-any */
import ContentfulClient from '../client'

export const fetchProjects = async (): Promise<any> => {
  try {
    const response = await ContentfulClient.getEntries({
      content_type: 'project',
    });

    return response.items;
  } catch (error) {
    console.error('Error fetching posts from Contentful:', error);
    throw error;
  }
}
