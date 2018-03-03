import React from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/container'

const Page = styled.div`
  position: relative;
`

export const GamePage = ({children}) => (
  <Page>
    <Container>
      {children}
    </Container>
  </Page>
)

