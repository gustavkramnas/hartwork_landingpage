/* eslint-disable @typescript-eslint/no-explicit-any */
import ContentfulClient from '../client'
import { Project } from '../../../types/Types'

export const fetchProjects = async (): Promise<any> => {
  try {
    const response = await ContentfulClient.getEntries({
      content_type: 'project'
    })

    return response.items
  } catch (error) {
    console.error('Error fetching projects from Contentful:', error)
    throw error
  }
}

export const fetchDisplayProjectImages = async (): Promise<string[]> => {
  try {
    const projects = await fetchProjects()

    return projects
      .filter(
        (project: Project) => project.fields.displayProjectImage !== undefined
      )
      .map(
        (project: Project) =>
          `https:${project.fields.displayProjectImage?.fields.file.url}`
      )
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export const fetchDisplayProjectImagesWithDetails = async (): Promise<
  { imageUrl: string; slug: string; title: string }[]
> => {
  try {
    const projects: Project[] = await fetchProjects() // Om fetchProjects returnerar en Project[]

    return projects
      .filter(
        (project: Project) => project.fields.displayProjectImage !== undefined
      )
      .map((project: Project) => ({
        imageUrl: `https:${
          project.fields.displayProjectImage?.fields?.file?.url || ''
        }`,
        slug: project.fields.slug || 'no-slug',
        title: project.fields.title || 'No Title'
      }))
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

// export const fetchDisplayProjectImagesWithDetails = async (): Promise<
//   { imageUrl: string; slug: string; title: string }[]
// > => {
//   const projects = await fetchProjects()

//   return projects
//     .filter(
//       (project: Project) => project.fields.displayProjectImage !== undefined
//     )
//     .map((project: Project) => ({
//       imageUrl: `https:${project.fields.displayProjectImage?.fields.file.url}`,
//       slug: project.fields.slug || 'no-slug',
//       title: project.fields.title || 'No Title'
//     }))
// }

// import ContentfulClient from '../client'

// export const fetchProjects = async (): Promise<any> => {
//   try {
//     const response = await ContentfulClient.getEntries({
//       content_type: 'project'
//     })

//     return response.items
//   } catch (error) {
//     console.error('Error fetching posts from Contentful:', error)
//     throw error
//   }
// }
