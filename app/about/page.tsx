import { AboutCompany } from '../components/aboutPageComponents/AboutCompany'
import { Main } from '../components/baseComponents/base'
import { ContactSection } from '../components/baseComponents/ContactSection'
import { HeroComponent } from '../components/baseComponents/DisplayProjectsHero'
import { fetchDisplayProjectImagesWithDetails } from '../utils/contentful/queries/project'
const Page = async () => {
  const displayProjects = await fetchDisplayProjectImagesWithDetails()
  return (
    <Main>
      <HeroComponent displayProjects={displayProjects} />
      <AboutCompany />
      <ContactSection />
    </Main>
  )
}

export default Page
