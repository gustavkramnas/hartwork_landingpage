import { Project } from './types/Types'
import {
  fetchDisplayProjectImagesWithDetails,
  fetchProjects
} from './utils/contentful/queries/project'
import { Main } from './components/baseComponents/base'
import { AboutSection } from './components/homePageComponents/AboutSection'
import { ContactSection } from './components/baseComponents/ContactSection'
import { ProjectSection } from './components/projectComponents/ProjectSection'
import { fetchCompanyAppSetting } from './utils/contentful/queries/home'
import { fetchPhotoGallery } from './utils/contentful/queries/photoGallery'
import { PhotoGallerySection } from './components/galleryComponents/PhotoGallerySection'
import HeroComponent from './components/imageComponents/HeroComponent'

export default async function Home() {
  const projects: Project[] = await fetchProjects()
  const displayProjects = await fetchDisplayProjectImagesWithDetails()
  const companyInfo = await fetchCompanyAppSetting()
  const gallery = await fetchPhotoGallery()

  return (
    <Main>
      <HeroComponent displayProjects={displayProjects} />
      <AboutSection
        companyName={companyInfo.fields.companyName}
        pitch={companyInfo.fields.shortDescription}
      />
      {/* <TestComponent /> */}
      <ProjectSection headLine={'Några av våra projekt'} projects={projects} />
      <ContactSection />
      <PhotoGallerySection
        headLine={'Blandade jobb åt kund'}
        galleryItems={gallery.fields.gallery}
      />
    </Main>
  )
}
