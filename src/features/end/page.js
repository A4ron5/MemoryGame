import React from 'react'
import { EndPage } from '../../ui/templates/EndPage'
import { connect } from 'react-redux'
import logo from './EndGame.png'

const endTemp = (props) => (
  <EndPage 
    logo={logo}
    text='Поздравляем! Ваш итоговый счет:'
    count={props.count}
    name='Еще раз'
  />
)

const mapStateToProps = (state) => ({
  count: state.count
})

export const end = connect(mapStateToProps)(endTemp);