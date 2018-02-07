import React from 'react'
import './Button.css'


const Button = (props) => {
  return(
    <div className='page-button'>
      <p>{props.children}</p>
    </div>
  )
}

export default Button;