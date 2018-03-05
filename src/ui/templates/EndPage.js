import React from 'react'
import styled from 'styled-components'
import { Logo } from '../atoms/logo'
import { Text } from '../atoms/text'
import { Container } from '../atoms/container'
import { Button } from '../molecules/button'
import { withRouter } from 'react-router'
import { TextCongrats } from '../atoms/TextCongrats';

const Page = styled.div`
  margin-top: 70px;
`

const EndPageTemp = ({logo, text, name, count, history, textCongr}) => (
  <Page>
    <Container>
      <Logo src={logo} />
      <TextCongrats> {text} </TextCongrats>
      <Text margin> {textCongr} {count} </Text> 
      <Button 
        name={name} 
        onClick={() => { history.replace('/game') }} 
        data="EndGame-retryGame"
      />
    </Container>
  </Page>
)

export const EndPage = withRouter(EndPageTemp);