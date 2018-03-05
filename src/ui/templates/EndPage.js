import React from 'react'
import styled from 'styled-components'
import { Logo } from '../atoms/logo'
import { Text } from '../atoms/text'
import { Container } from '../atoms/container'
import { Button } from '../molecules/button'
import { withRouter } from 'react-router'

const Page = styled.div`
  margin-top: 70px;
`

const EndPageTemp = ({logo, text, name, count, history}) => (
  <Page>
    <Container>
      <Logo src={logo} />
      <Text> {text} </Text>
      <Text> {count} </Text>
      <Button 
        name={name} 
        onClick={() => { history.replace('/game') }} 
        data="EndGame-retryGame"
      />
    </Container>
  </Page>
)

export const EndPage = withRouter(EndPageTemp);