import React from 'react'
import styled from 'styled-components'
import { Logo } from '../atoms/logo'
import { Title } from '../atoms/title'
import { Container } from '../atoms/container'
import { Button } from '../molecules/button'
import {history} from '../../routes'

const Page = styled.div`
  margin-top: 90px;
`

// export const StartPage = ({logo, title, name, count}) => (
//   <Page>
//     <Container>
//       <Logo src={logo} />
//       <Title> {title} {count} </Title>
//       <Button name={name} onClick={() => { history.replace('/game') }}/>
//     </Container>
//   </Page>
// )

export class StartPage extends React.Component {


  click = () => {
    history.replace('/game')
  }

  render() {
    return(
      <Page>
        <Container>
          <Logo src={this.props.logo} />
          <Title> {this.props.title} </Title>
          <Button name={this.props.name} onClick={() => { this.click }}/>
        </Container>
      </Page>
    )
  }
}