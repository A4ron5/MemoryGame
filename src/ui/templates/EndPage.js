import React from 'react'
import styled from 'styled-components'
import { Logo } from '../atoms/logo'
import { Text } from '../atoms/text'
import { Container } from '../atoms/container'
import { Button } from '../molecules/button'

const Page = styled.div`
  margin-top: 70px;
`

export const EndPage = ({logo, text, name, count}) => (
  <Page>
    <Container>
      <Logo src={logo} />
      <Text> {text} </Text>
      <Text> {count} </Text>
      <Button name={name} data-tid="EndGame-retryGame"/>
    </Container>
  </Page>
)