import React from 'react'
import './Logo.css'


const Logo = (props) => {
  return(
    <img className='page-logo' src={props.img} alt='Logo'/> 
  )
}

export default Logo;