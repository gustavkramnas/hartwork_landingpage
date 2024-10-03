import Image from 'next/image'
import { Project } from '../types/Types'
import { H1 } from '../components/fontComponents/fonts'
import { fetchProjects } from '../utils/contentful/queries/project'

const SlugPage = async ({ params }: { params: { slug: string } }) => {
  const projects = await fetchProjects()

  projects.forEach((project: Project) => {
    if (project.fields.gallery && project.fields.gallery.length > 0) {
      console.log("Gallery for project:", project.fields.title);
      project.fields.gallery.forEach((item, index) => {
        console.log(`Gallery item ${index + 1}:`, item);
      });
    } else {
      console.log(`No gallery for project: ${project.fields.title}`);
    }
  });


  const project = projects.find(
    (project: Project) => project.fields.slug === params.slug
  )

  if (!project) {
    return <H1>No Post Found</H1>
  }

  const thumbnailUrl = project.fields.projectThumbnail?.fields.file.url
    ? `https:${project.fields.projectThumbnail.fields.file.url}`
    : ''

  return (
    <div>
      {thumbnailUrl && (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
          <Image
            src={thumbnailUrl}
            alt={project.fields.title || 'Alt text'}
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <H1>{project.fields.title}</H1>
    </div>
  )
}

export default SlugPage
