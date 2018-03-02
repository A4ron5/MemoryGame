import React from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/Container'
import { Cards } from '../../features/card-list/cards'

const Page = styled.div`
  position: relative;
`

export const GamePage = () => (
  <Page>
    <Container>
      <Cards/>
    </Container>
  </Page>
)

