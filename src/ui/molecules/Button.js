import React from 'react'
import {PureButton} from '../atoms/PureButton'
import {TextButton} from '../atoms/TextButton'
import {Link} from 'react-router-dom'

export const Button = ({name}) => (
  <Link to='/game' style={{textDecoration: 'none'}}>
    <PureButton>
      <TextButton>{name}</TextButton>
    </PureButton>
  </Link>
)
