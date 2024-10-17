import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { ContactSection } from "../components/baseComponents/ContactSection"
import { GalleryComponent } from "../components/imageComponents/GalleryComponent"
import { AboutProjectSection } from "../components/projectComponents/AboutProjectSection"
import { ProjectSection } from "../components/projectComponents/ProjectSection"
import { Project } from "../types/Types"
import { fetchProjects } from "../utils/contentful/queries/project"
import { renderOptions } from "../utils/contentful/renderOptions"
import { extractGalleryItems } from "../utils/helpers/galleryHelpers"
import { Main } from "../components/baseComponents/base"
import { ImageComponent } from "../components/imageComponents/ImageComponent"
import NotFound from "../not-found"

const Page = async ({ params }: { params: { slug: string } }) => {
  const projects = await fetchProjects()
  const project = projects.find(
    (project: Project) => project.fields.slug === params.slug
  )

  if (!project) {
    return NotFound();
  }

  const galleryItems = extractGalleryItems(project)

  const imageUrl = project.fields.displayProjectImage?.fields.file.url
    ? `https:${project.fields.displayProjectImage.fields.file.url}`
    : ''

  return (
    <Main>
      {imageUrl && (
        <ImageComponent url={imageUrl} title={project.fields.title} />
      )}
      <AboutProjectSection
        title={project.fields.title}
        description={documentToReactComponents(
          project.fields.description,
          renderOptions
        )}
      />
      <GalleryComponent galleryItems={galleryItems} />
      <ProjectSection headLine={'Annan Art'} projects={projects} />
      <ContactSection />
    </Main>
  )
}

export default Page
