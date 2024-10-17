import {
  MainWithPaddingTop,
  FlexContainer,
  FadeSection
} from './components/baseComponents/base'
import { AppButton } from './components/buttonComponents/ButtonComponents'
import { DisplayH1, P } from './components/fontComponents/fonts'

const NotFound = async () => {
  return (
    <MainWithPaddingTop>
      <FadeSection>
        <FlexContainer>
          <DisplayH1>404</DisplayH1>
        </FlexContainer>

        <FlexContainer>
          <P>Oops! Sidan hittades inte</P>
          <br></br>
          {/* <ArrowButton href="/" title="Tillbaka till startsidan" /> */}
          <AppButton href="/" title="Till start" />
        </FlexContainer>
      </FadeSection>
    </MainWithPaddingTop>
  )
}

export default NotFound
