import {
  MainWithPaddingTop,
  Container,
  FlexContainer,
  FadeSection
} from './components/baseComponents/base'
import { DisplayH1 } from './components/fontComponents/fonts'

const NotFound = async () => {
  return (
    <MainWithPaddingTop>
      <FadeSection>
        <FlexContainer>
          <DisplayH1>404</DisplayH1>
        </FlexContainer>
        <Container></Container>
      </FadeSection>
    </MainWithPaddingTop>
  )
}

export default NotFound
