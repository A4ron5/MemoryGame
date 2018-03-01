import styled from 'styled-components'
import { Logo, TextName, Container} from '../atoms'
import { Button } from '../molecules'

const Page = styled.div`
  margin-top: 200px;
`

export const StartPage = ({logo, title, name}) => {
  <Page>
    <Container>
      <Logo src={logo} />
      <TextName> {title} </TextName>
      <Button name={name} />
    </Container>
  </Page>
}