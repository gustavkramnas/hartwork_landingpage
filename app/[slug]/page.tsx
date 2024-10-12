import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { ContactSection } from "../components/baseComponents/ContactSection"
import { H1 } from "../components/fontComponents/fonts"
import { GalleryComponent } from "../components/imageComponents/GalleryComponent"
import { AboutProjectSection } from "../components/projectComponents/AboutProjectSection"
import { ProjectSection } from "../components/projectComponents/ProjectSection"
import { Project } from "../types/Types"
import { fetchProjects } from "../utils/contentful/queries/project"
import { renderOptions } from "../utils/contentful/renderOptions"
import { extractGalleryItems } from "../utils/helpers/galleryHelpers"
import { Main } from "../components/baseComponents/base"
import { ImageComponent } from "../components/imageComponents/ImageComponent"

export const SlugPage = async ({ params }: { params: { slug: string } }) => {
  const projects = await fetchProjects()
  const project = projects.find(
    (project: Project) => project.fields.slug === params.slug
  )

  if (!project) {
    return <H1>No Post Found</H1>
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
      <ProjectSection headLine={'Mer projekt'} projects={projects} />
      <ContactSection />
    </Main>
  )
}
