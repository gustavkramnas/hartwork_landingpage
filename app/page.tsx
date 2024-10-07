import { Project } from './types/Types'
import {
  fetchDisplayProjectImagesWithDetails,
  fetchProjects
} from './utils/contentful/queries/project'
import { HeroComponent } from './components/baseComponents/DisplayProjectsHero'
import { Main } from './components/baseComponents/base'
import { AboutSection } from './components/homePageComponents/AboutSection'
import { ContactSection } from './components/baseComponents/ContactSection'
import { ProjectSection } from './components/projectComponents/ProjectSection'

export default async function Home() {
  const projects: Project[] = await fetchProjects()
  const displayProjects = await fetchDisplayProjectImagesWithDetails()

  return (
    <Main>
      <HeroComponent displayProjects={displayProjects} />
      <AboutSection />
      <ProjectSection headLine={'Våra projekt'} projects={projects} />
      <ContactSection />
    </Main>
  )
}
