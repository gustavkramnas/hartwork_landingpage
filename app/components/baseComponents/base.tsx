import { theme } from '@/app/utils/appSettings/theme'
import styled from 'styled-components'


export const BaseMain = styled.main`
  margin: 0 auto;
`
export const Container = styled.section`
  max-width: ${theme.style.layout.sizes.maxWidth};
`

export const BaseSection = styled(Container)`

`
