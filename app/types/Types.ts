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
