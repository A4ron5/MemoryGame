import React from 'react'
import './StartPage.css'

const StartPage = (props) => {
  return(
    <div className='start-page container'>
      {props.children}
    </div>
  )
}

export default StartPage;