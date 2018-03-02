import React from 'react'
import styled from 'styled-components'
import { Container } from '../atoms/Container'
import { Cards } from '../../features/card-list/cards'
import { Header } from '../../features/header/header'

const Page = styled.div`
  position: relative;
`

export const GamePage = () => (
  <Page>
    <Container>
      <Header/>
      <Cards/>
    </Container>
  </Page>
)

