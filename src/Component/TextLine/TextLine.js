import React from 'react'
import './TextLine.css'

const TextLine = (props) => {
  return(
    <p className='page-text'>{props.children}</p>
  )
}

export default TextLine;