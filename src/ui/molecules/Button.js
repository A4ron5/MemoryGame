import styled from 'styled-components'
import { PureButton, TextButton } from '../atoms'
import PropTypes from 'prop-types'

export const Button = ({name}) => {
  <PureButton>
    <TextButton>{name}</TextButton>
  </PureButton>
}

Button.PropTypes = {
  name: PropTypes.string
}
