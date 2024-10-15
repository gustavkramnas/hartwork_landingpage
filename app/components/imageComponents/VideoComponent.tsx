type Props = {
  url: string
}

export const VideoComponent = ({ url }: Props) => {
  return (
    <video width="100%" height="auto" src={url} autoPlay loop muted controls controlsList="nodownload" >
      Your browser does not support the video tag.
    </video>
  )
}
