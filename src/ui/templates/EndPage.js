import React from 'react'
import styled from 'styled-components'
import { Logo } from '../atoms/Logo'
import { TextCongrats } from '../atoms/TextCongrats'
import { Container } from '../atoms/Container'
import { Button } from '../molecules/Button'

const Page = styled.div`
  margin-top: 70px;
`

export const EndPage = ({logo, text, name, count}) => (
  <Page>
    <Container>
      <Logo src={logo} />
      <TextCongrats> {text} </TextCongrats>
      <TextCongrats> {count} </TextCongrats>
      <Button name={name} />
    </Container>
  </Page>
)