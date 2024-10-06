// import { fetchExample } from './utils/contentful/queries/home'

import { Project } from './types/Types'
import { PostComponent } from './components/PostComponent'
// import { H1 } from './components/fontComponents/fonts'
import {
  fetchDisplayProjectImagesWithDetails,
  fetchProjects
} from './utils/contentful/queries/project'
// import { ImageComponent } from './components/imageComponents/ImageComponent'
import { HeroComponent } from './components/homePageComponents/DisplayProjectsHero'

export default async function Home() {
  // const responseExample = await fetchExample()

  // const imageUrl = `https:${
  //   responseExample.fields.image?.fields.file.url || ''
  // }`

  const projects: Project[] = await fetchProjects()
  const displayProjects = await fetchDisplayProjectImagesWithDetails()

  return (
    <>
      {/* {imageUrl ? (
        <ImageComponent url={imageUrl} title={responseExample.fields.title} />
      ) : (
        <H1>No image</H1>
      )} */}
      <HeroComponent displayProjects={displayProjects} />
      <div>
        {projects.map((project: Project) => {
          const thumbnailUrl = `https:${
            project.fields.projectThumbnail?.fields.file.url || ''
          }`
          const title = project.fields.title || 'No Title'
          const slug = project.fields.slug || 'no-slug'

          return (
            <PostComponent
              key={project.sys.id}
              title={title}
              thumbnailUrl={thumbnailUrl}
              slug={slug}
            />
          )
        })}
      </div>
    </>
  )
}
