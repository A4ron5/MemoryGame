import styled from 'styled-components'
import { PureButton, TextButton } from '../atoms'
import PropTypes from 'prop-types'

export const Button = ({text}) => {
  <PureButton>
    <TextButton>{text}</TextButton>
  </PureButton>
}

Button.PropTypes = {
  text: PropTypes.string
}
