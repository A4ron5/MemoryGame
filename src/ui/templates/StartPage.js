import React from 'react'
import styled from 'styled-components'
//import { Logo, TextName, Container} from '../atoms'
import {Logo} from '../atoms/Logo'
import {TextName} from '../atoms/TextName'
import {Container} from '../atoms/Container'
import { Button } from '../molecules/Button'

const Page = styled.div`
  margin-top: 200px;
`

export const StartPage = ({logo, title, name}) => (
  <Page>
    <Container>
      <Logo src={logo} />
      <TextName> {title} </TextName>
      <Button name={name} />
    </Container>
  </Page>
)