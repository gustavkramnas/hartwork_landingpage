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

export type OnePost = {
  title: string
  thumbnailUrl?: string
  slug?: string
}
