type Props = {
  url: string
}

export const VideoComponent = ({ url }: Props) => {
  return (
    <video controls width="100%" height="auto" src={url} autoPlay loop muted>
      Your browser does not support the video tag.
    </video>
  )
}
