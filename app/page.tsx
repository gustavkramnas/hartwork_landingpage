import Image from 'next/image'
import { fetchExample } from './utils/contentful/queries/home'

import { Project } from './types/Types'
import { PostComponent } from './components/PostComponent'
import { H1 } from './components/fontComponents/fonts'
import { fetchProjects } from './utils/contentful/queries/project'

export default async function Home() {
  const responseExample = await fetchExample()

  const absoluteImageUrl = `https:${
    responseExample.fields.image?.fields.file.url || ''
  }`

  //console.log('posts:', posts)

  const projects = await fetchProjects()

  return (
    <>
      {absoluteImageUrl ? (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
          <Image
            src={absoluteImageUrl}
            alt={'Alt text'}
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      ) : (
        <H1>No image</H1>
      )}

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
