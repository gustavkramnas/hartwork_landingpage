export type ExampleResponse = {
  fields: {
    title: string
    image: {
      fields: {
        file: { url: string }
        title: string
      }
    }
  }
}

export type Post = {
  sys: {
    id: string
  }
  fields: {
    title: string
    slug: string
    thumbnail?: {
      fields: {
        file: {
          url: string
        }
      }
    }
  }
}

export type Project = {
  sys: {
    id: string
    createdAt: string
    updatedAt: string
    environment: {
      sys: {
        id: string
        type: string
        linkType: string
      }
    }
    publishedVersion: number
    publishedAt: string
    firstPublishedAt: string
    createdBy: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    updatedBy: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    publishedCounter: number
    version: number
    publishedBy: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    urn: string
  }
  fields: {
    title: string
    slug: string
    projectThumbnail?: {
      sys: {
        type: string
        linkType: string
        id: string
      }
      fields: {
        file: {
          url: string
        }
      }
    }
    displayProjectImage?: {
      sys: {
        type: string
        linkType: string
        id: string
      }
      fields: {
        file: {
          url: string
        }
      }
    }
    description?: {
      content: Array<{
        nodeType: string
        content: Array<{
          nodeType: string
          value: string
          marks: Array<{
            type: string
          }>
        }>
      }>
    }
    gallery?: Array<{
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
    }>
  }
}

export type OnePost = {
  title: string
  thumbnailUrl?: string
  slug?: string
}

export type ImageProps = {
  url: string
  title?: string
}

export type GalleryItem = {
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
}

export type CompanyAppSetting = {
  sys: {
    id: string
    createdAt: string
    updatedAt: string
    environment: {
      sys: {
        id: string
        type: string
        linkType: string
      }
    }
    publishedVersion: number
    publishedAt: string
    firstPublishedAt: string
    createdBy: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    updatedBy: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    publishedCounter: number
    version: number
    publishedBy: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    urn: string
  }
  fields: {
    companyName: string
    companyLogo?: {
      sys: {
        type: string
        linkType: string
        id: string
      }
      fields: {
        file: {
          url: string
        }
      }
    }
    aboutCompany?: string
    email?: string
    contactPerson?: string
    phoneNumber?: string
    shortDescription?: string
    contactCompanyInfo?: string
    aboutUs?: {
      content: Array<{
        nodeType: string
        content: Array<{
          nodeType: string
          value: string
          marks: Array<{
            type: string
          }>
        }>
      }>
    }
  }

}

export type PhotoGallery = {
  sys: {
    id: string
    createdAt: string
    updatedAt: string
    environment: {
      sys: {
        id: string
        type: string
        linkType: string
      }
    }
    publishedVersion: number
    publishedAt: string
    firstPublishedAt: string
    createdBy: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    updatedBy: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    publishedCounter: number
    version: number
    publishedBy: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    urn: string
  }
  fields: {
    title: string
    gallery?: GalleryItem[]
  }
}
