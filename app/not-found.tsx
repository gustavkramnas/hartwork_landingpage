import {
  MainWithPaddingTop,
  Container,
  FlexContainer,
  FadeSection
} from './components/baseComponents/base'
import { ArrowButton } from './components/buttonComponents/ButtonComponents'
import { DisplayH1, P } from './components/fontComponents/fonts'

const NotFound = async () => {
  return (
    <MainWithPaddingTop>
      <FadeSection>
        <FlexContainer>
          <DisplayH1>404</DisplayH1>
        </FlexContainer>
        <Container>
          <P>Oops! Sidan hittades inte</P>
          <ArrowButton href="/" title="Tillbaka till startsidan" />
        </Container>
      </FadeSection>
    </MainWithPaddingTop>
  )
}

export default NotFound
