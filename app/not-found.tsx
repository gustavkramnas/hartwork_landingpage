import {
  MainWithPaddingTop,
  Section,
  Container,
  FlexContainer
} from './components/baseComponents/base'
import { DisplayH1 } from './components/fontComponents/fonts'

const NotFound = async () => {
  return (
    <MainWithPaddingTop>
      <Section>
        <FlexContainer>
          <DisplayH1>404</DisplayH1>
        </FlexContainer>
        <Container></Container>
      </Section>
    </MainWithPaddingTop>
  )
}

export default NotFound
