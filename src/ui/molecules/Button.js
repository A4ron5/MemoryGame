import React from 'react'
import {PureButton} from '../atoms/PureButton'
import {TextButton} from '../atoms/TextButton'

export const Button = ({name}) => (
    <PureButton>
      <a href='/game' style={{textDecoration: 'none'}}>
        <TextButton>{name}</TextButton>
      </a>
    </PureButton>
)
