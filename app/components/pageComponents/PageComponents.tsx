'use client'
import styled from 'styled-components'
import { theme } from '@/app/utils/appSettings/theme'
import { H2 } from '../fontComponents/fonts'

type Props = {
  text: string
}

const TestSection = styled.section`
  background: ${theme.style.colors.secondary};
`
export const TestComponent = ({ text }: Props) => {
  return (
    <TestSection>
      <H2>{text}</H2>
    </TestSection>
  )
}
