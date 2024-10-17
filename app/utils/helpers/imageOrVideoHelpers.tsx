export const isImageFile = (url: string) => {
  return url.match(/\.(jpeg|jpg|gif|png|svg)$/i)
}

export const isVideoFile = (url: string) => {
  return url.match(/\.(mp4|webm|ogg)$/i)
}
