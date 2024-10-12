import { Project } from "@/app/types/Types"

export const extractGalleryItems = (project: Project) => {
  const galleryItems: Array<{
    sys: {
      type: string
      linkType: string
      id: string
    }
    fields: {
      title: string
      file: {
        url: string
      }
    }
  }> = []

  if (project.fields.gallery && project.fields.gallery.length > 0) {
    project.fields.gallery.forEach(item => galleryItems.push(item))
  } else {
    console.log(`No gallery for project: ${project.fields.title}`)
  }

  return galleryItems
}
