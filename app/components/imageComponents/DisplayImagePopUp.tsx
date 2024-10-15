import styled from 'styled-components'
import { ImageComponent } from './ImageComponent'

//
type Props = {
  src: string
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const DisplayPhotoGalleryObject = ({ src }: Props) => {
  return (
    <Wrapper>
      <ImageComponent url={src} />
    </Wrapper>
  )
}
