import React from 'react'
import './StartPage.css'
import Logo from '../Component/Logo/Logo'
import TextLine from '../Component/TextLine/TextLine'
import Button from '../Component/Button/Button'
import StartGameLogo from '../Component/Logo/StartGame.png'
import {Link} from 'react-router-dom'

const StartPage = (props) => {
  return(
    <div className='start-page container'>
      <Logo img={StartGameLogo}/>
      <TextLine>MEMORY GAME</TextLine>
      <Link to='/game' style={{textDecoration: 'none'}}>
        <Button>Начать игру</Button>
      </Link>
    </div>
  )
}

export default StartPage;