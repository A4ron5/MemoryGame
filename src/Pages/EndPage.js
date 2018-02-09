import React from 'react'
import './EndPage.css'
import Logo from '../Component/Logo/Logo'
import TextLine from '../Component/TextLine/TextLine'
import Count from '../Component/Count/Count'
import Button from '../Component/Button/Button'
import EndGameLogo from '../Component/Logo/EndGame.png'
import {Link} from 'react-router-dom'

const EndPage = (props) => {
    return(
      <div className='end-page container'>
        <Logo img={EndGameLogo}/>
        <TextLine>Поздавляём!</TextLine>
        <Count>Ваш итоговый счет:</Count>
        <Link to='/game'>
          <Button>Еще раз</Button>
        </Link>
      </div>
    )
  }
  
  export default EndPage;