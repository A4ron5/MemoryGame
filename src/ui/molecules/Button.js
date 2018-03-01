import React from 'react'
//import { PureButton, TextButton } from '../atoms'
import {PureButton} from '../atoms/PureButton'
import {TextButton} from '../atoms/TextButton'
import PropTypes from 'prop-types'

export const Button = ({name}) => (
  <PureButton>
    <TextButton>{name}</TextButton>
  </PureButton>
)

Button.PropTypes = {
  name: PropTypes.string
}
