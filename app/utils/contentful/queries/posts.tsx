/* eslint-disable import/no-anonymous-default-export */
import ContentfulClient from '../client'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchPosts = async (): Promise<any> => {
  try {
    const response = await ContentfulClient.getEntries({
      content_type: 'case',
    });
    // console.log('Alla case-entries:', response.items);

    return response.items;
  } catch (error) {
    console.error('Error fetching posts from Contentful:', error);
    throw error;
  }
}
