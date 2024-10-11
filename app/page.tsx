import { Project } from './types/Types'
import {
  fetchDisplayProjectImagesWithDetails,
  fetchProjects
} from './utils/contentful/queries/project'
import { HeroComponent } from './components/imageComponents/DisplayProjectsHero'
import { Main } from './components/baseComponents/base'
import { AboutSection } from './components/homePageComponents/AboutSection'
import { ContactSection } from './components/baseComponents/ContactSection'
import { ProjectSection } from './components/projectComponents/ProjectSection'
import { fetchCompanyAppSetting } from './utils/contentful/queries/home'
import { PartnerComponent } from './components/partnersComponent/PartnerComponent'

export default async function Home() {
  const projects: Project[] = await fetchProjects()
  const displayProjects = await fetchDisplayProjectImagesWithDetails()
  const companyInfo = await fetchCompanyAppSetting()

  return (
    <Main>
      <HeroComponent displayProjects={displayProjects} />
      <AboutSection
        companyName={companyInfo.fields.companyName}
        pitch={companyInfo.fields.shortDescription}
      />
      <ProjectSection headLine={'Några av våra projekt'} projects={projects} />
      <ContactSection />
      <PartnerComponent />
    </Main>
  )
}
