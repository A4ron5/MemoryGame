import React from 'react'
import {PureButton} from '../atoms/PureButton'
import {TextButton} from '../atoms/TextButton'

export const Button = ({name, onClick, data}) => (
    <PureButton onClick={onClick} data-tid={data}>
      <TextButton>{name}</TextButton>
    </PureButton>
)
