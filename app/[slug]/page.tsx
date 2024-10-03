import { Project } from '../types/Types'
import { H1 } from '../components/fontComponents/fonts'
import { fetchProjects } from '../utils/contentful/queries/project'
import { ImageComponent } from '../components/imageComponents/ImageComponent'
import { GalleryComponent } from '../components/imageComponents/GalleryComponent'

const SlugPage = async ({ params }: { params: { slug: string } }) => {
  const projects = await fetchProjects()

  const allGalleryItems: Array<{
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
        allGalleryItems.push(item)
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

  const imageUrl = project.fields.projectThumbnail?.fields.file.url
    ? `https:${project.fields.projectThumbnail.fields.file.url}`
    : ''

  return (
    <div>
      {imageUrl && (
        <ImageComponent url={imageUrl} title={project.fields.title} />
      )}
      <H1>{project.fields.title}</H1>

      <GalleryComponent galleryItems={allGalleryItems} />
    </div>
  )
}

export default SlugPage
