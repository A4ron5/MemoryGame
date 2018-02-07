import React from 'react'
import './EndPage.css'

const EndPage = (props) => {
    return(
      <div className='end-page container'>
        {props.children}
      </div>
    )
  }
  
  export default EndPage;