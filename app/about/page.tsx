import { AboutCompany } from '../components/aboutPageComponents/AboutCompany'
import { Main } from '../components/baseComponents/base'
import { ContactSection } from '../components/baseComponents/ContactSection'
import { HeroComponent } from '../components/imageComponents/DisplayProjectsHero'
import { fetchCompanyAppSetting } from '../utils/contentful/queries/home'
import { fetchDisplayProjectImagesWithDetails } from '../utils/contentful/queries/project'
const Page = async () => {
  const displayProjects = await fetchDisplayProjectImagesWithDetails()
  const contactInfo = await fetchCompanyAppSetting()

  return (
    <Main>
      <HeroComponent displayProjects={displayProjects} />
      <AboutCompany info={contactInfo.fields.aboutCompany} />
      <ContactSection />
    </Main>
  )
}

export default Page
