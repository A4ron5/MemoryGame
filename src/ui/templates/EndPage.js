import styled from 'styled-components'
import { Logo, TextCongrats, Container } from '../atoms'
import { Button } from '../molecules'
const Page = styled.div`
  margin-top: 200px;
`

export const EndPage = ({logo, text, name}) => {
  <Page>
    <Container>
      <Logo src={logo} />
      <TextCongrats> {text} </TextCongrats>
      <Button name={name} />
    </Container>
  </Page>
}