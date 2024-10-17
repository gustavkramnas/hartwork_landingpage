import { FlexContainer, Loader, MainWithPaddingTop, Section } from '../components/baseComponents/base'
import { ContactSection } from '../components/baseComponents/ContactSection'
import { PhotoGallerySection } from '../components/imageComponents/PhotoGallerySection'
import { ProjectSection } from '../components/projectComponents/ProjectSection'
import { fetchPhotoGallery } from '../utils/contentful/queries/photoGallery'
import { fetchProjects } from '../utils/contentful/queries/project'

const Page = async () => {
  try {
    const gallery = await fetchPhotoGallery()
    const projects = await fetchProjects()

    const galleryItems = gallery?.fields?.gallery || []

    return (
      <MainWithPaddingTop>
        <PhotoGallerySection galleryItems={galleryItems} />
        <ProjectSection headLine={'Andra projekt'} projects={projects} />
        <ContactSection />
      </MainWithPaddingTop>
    )
  } catch (error) {
    console.error('An error occurred while fetching data:', error)
    return (
      <MainWithPaddingTop>
        <Section>
          <FlexContainer>
            <Loader />
          </FlexContainer>
        </Section>
      </MainWithPaddingTop>
    )
  }
}
//   const gallery = await fetchPhotoGallery()
//   const projects = await fetchProjects()
//   return (
//     <MainWithPaddingTop>
//       <PhotoGallerySection galleryItems={gallery.fields.gallery} />
//       <ProjectSection headLine={'Andra projekt'} projects={projects} />
//       <ContactSection />
//     </MainWithPaddingTop>
//   )
// }

export default Page
