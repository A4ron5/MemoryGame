import React from 'react'
import styled from 'styled-components'
import { Logo } from '../atoms/logo'
import { Title } from '../atoms/title'
import { Container } from '../atoms/container'
import { Button } from '../molecules/button'
import { withRouter } from 'react-router'

const Page = styled.div`
  margin-top: 90px;
`

const StarPageTemp = ({logo, title, name, count, history}) => (
  <Page>
    <Container>
      <Logo src={logo} />
      <Title> {title} {count} </Title>
      <Button 
        name={name} 
        onClick={() => { history.replace('/game') }}
        data="NewGame-startGame"  
      />
    </Container>
  </Page>
)

export const StartPage = withRouter(StarPageTemp);