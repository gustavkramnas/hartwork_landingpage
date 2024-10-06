import { MainWithPaddingTop } from '../components/baseComponents/base'
import { ContactSection } from '../components/baseComponents/ContactSection'
import { ProjectSection } from '../components/projectComponents/ProjectSection'
import { fetchProjects } from '../utils/contentful/queries/project'

const Page = async () => {
  const projects = await fetchProjects()
  return (
    <MainWithPaddingTop>
      <ProjectSection headLine={'Våra project'} projects={projects} />
      <ContactSection />
    </MainWithPaddingTop>
  )
}

export default Page
