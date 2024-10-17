import {
  FlexContainer,
  Loader,
  MainWithPaddingTop,
  Section
} from './components/baseComponents/base'

export default function Loading() {
  return (
    <MainWithPaddingTop>
      <Section>
        <FlexContainer>
          <Loader />
        </FlexContainer>
      </Section>
    </MainWithPaddingTop>
  )
}
