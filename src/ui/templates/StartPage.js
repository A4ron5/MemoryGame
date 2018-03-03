import React from 'react'
import styled from 'styled-components'
import { Logo } from '../atoms/logo'
import { Title } from '../atoms/title'
import { Container } from '../atoms/container'
import { Button } from '../molecules/button'

const Page = styled.div`
  margin-top: 90px;
`

export const StartPage = ({logo, title, name, count}) => (
  <Page>
    <Container>
      <Logo src={logo} />
      <Title> {title} {count} </Title>
      <Button name={name} />
    </Container>
  </Page>
)