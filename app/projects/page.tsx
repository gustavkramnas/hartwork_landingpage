import { MainWithPaddingTop } from '../components/baseComponents/base'
import { ContactSection } from '../components/baseComponents/ContactSection'
import { ProjectSection } from '../components/projectComponents/ProjectSection'
import { fetchProjects } from '../utils/contentful/queries/project'

const Page = async () => {
  const projects = await fetchProjects()
  return (
    <MainWithPaddingTop>
      <ProjectSection h1 headLine={'Några av våra projekt'} projects={projects} />
      <ContactSection />
    </MainWithPaddingTop>
  )
}

export default Page
