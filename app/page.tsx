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
import { fetchPhotoGallery } from './utils/contentful/queries/photoGallery'
import { PhotoGallerySection } from './components/galleryComponents/PhotoGallerySection'


export default async function Home() {
  const projects: Project[] = await fetchProjects()
  const displayProjects = await fetchDisplayProjectImagesWithDetails()
  const companyInfo = await fetchCompanyAppSetting()
  const gallery = await fetchPhotoGallery()

  // const galleryString = JSON.stringify(gallery)

  // localStorage.setItem('photoGallery', galleryString)

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
      <PhotoGallerySection headLine={"Blandade jobb åt kund"} galleryItems={gallery.fields.gallery} />
    </Main>
  )
}
