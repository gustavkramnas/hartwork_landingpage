import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { AboutCompany } from '../components/aboutPageComponents/AboutCompany'
import { Main } from '../components/baseComponents/base'
import { ContactSection } from '../components/baseComponents/ContactSection'
import { HeroComponent } from '../components/imageComponents/DisplayProjectsHero'
import { fetchCompanyAppSetting } from '../utils/contentful/queries/home'
import { fetchDisplayProjectImagesWithDetails } from '../utils/contentful/queries/project'
import { renderOptions } from '../utils/contentful/renderOptions'

const Page = async () => {
  const displayProjects = await fetchDisplayProjectImagesWithDetails()
  const contactInfo = await fetchCompanyAppSetting()

  return (
    <Main>
      <HeroComponent displayProjects={displayProjects} />
      <AboutCompany
        info={documentToReactComponents(
          contactInfo.fields.aboutUs,
          renderOptions
        )}
      />
      <ContactSection />
    </Main>
  )
}

export default Page
