import React from 'react'
import {history} from '../../routes'
import {PureButton} from '../atoms/PureButton'
import {TextButton} from '../atoms/TextButton'

export const Button = ({name}) => (
    <PureButton data-tid="NewGame-startGame">
      <TextButton>{name}</TextButton>
    </PureButton>
)
