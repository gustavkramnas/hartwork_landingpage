// import { fetchExample } from './utils/contentful/queries/home'

import { Project } from './types/Types'
// import { H1 } from './components/fontComponents/fonts'
import {
  fetchDisplayProjectImagesWithDetails,
  fetchProjects
} from './utils/contentful/queries/project'
// import { ImageComponent } from './components/imageComponents/ImageComponent'
import { HeroComponent } from './components/homePageComponents/DisplayProjectsHero'
import { Main } from './components/baseComponents/base'
import { AboutSection } from './components/homePageComponents/AboutSection'
import { ContactSection } from './components/homePageComponents/ContactSection'
import { ProjectSection } from './components/projectComponents/ProjectSection'

export default async function Home() {
  // const responseExample = await fetchExample()

  // const imageUrl = `https:${
  //   responseExample.fields.image?.fields.file.url || ''
  // }`

  const projects: Project[] = await fetchProjects()
  const displayProjects = await fetchDisplayProjectImagesWithDetails()

  return (
    <Main>
      {/* {imageUrl ? (
        <ImageComponent url={imageUrl} title={responseExample.fields.title} />
      ) : (
        <H1>No image</H1>
      )} */}
      <HeroComponent displayProjects={displayProjects} />
      <AboutSection />
      <ProjectSection headLine={'Våra projekt'} projects={projects} />
      <ContactSection />
    </Main>
  )
}
