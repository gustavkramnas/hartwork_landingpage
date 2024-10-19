'use client'
import styled from 'styled-components'
import { Loader } from './components/baseComponents/base'

const Main = styled.main`
  position: relative;
  min-height: 80vh;
`

const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default function Loading() {
  return (
    <Main>
      <Section>
        <Loader />
      </Section>
    </Main>
  )
}
