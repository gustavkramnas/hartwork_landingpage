/* eslint-disable @typescript-eslint/no-explicit-any */
import { Project } from '../types/Types'
import { H1, H2, H3, P } from '../components/fontComponents/fonts'
import { fetchProjects } from '../utils/contentful/queries/project'
import { ImageComponent } from '../components/imageComponents/ImageComponent'
import { GalleryComponent } from '../components/imageComponents/GalleryComponent'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

const SlugPage = async ({ params }: { params: { slug: string } }) => {
  const projects = await fetchProjects()

  // Det här är för galleriet
  const galleryItems: Array<{
    sys: {
      type: string
      linkType: string
      id: string
    }
    fields: {
      title: string
      file: {
        url: string
      }
    }
  }> = []

  projects.forEach((project: Project) => {
    if (project.fields.gallery && project.fields.gallery.length > 0) {
      project.fields.gallery.forEach((item) => {
        galleryItems.push(item)
      })
    } else {
      console.log(`No gallery for project: ${project.fields.title}`)
    }
  })

  const project = projects.find(
    (project: Project) => project.fields.slug === params.slug
  )

  if (!project) {
    return <H1>No Post Found</H1>
  }

  const renderOptions = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node: any, children: any) => <H1>{children}</H1>,
      [BLOCKS.HEADING_2]: (node: any, children: any) => <H2>{children}</H2>,
      [BLOCKS.HEADING_3]: (node: any, children: any) => <H3>{children}</H3>,
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <P>{children}</P>
    }
  }

  // Bild för Hero
  const imageUrl = project.fields.displayProjectImage?.fields.file.url
    ? `https:${project.fields.displayProjectImage.fields.file.url}`
    : ''

  return (
    <div>
      {imageUrl && (
        <ImageComponent url={imageUrl} title={project.fields.title} />
      )}
      <H1>{project.fields.title}</H1>
      {project.fields.description &&
        documentToReactComponents(project.fields.description, renderOptions)}

      <GalleryComponent galleryItems={galleryItems} />
    </div>
  )
}

export default SlugPage
