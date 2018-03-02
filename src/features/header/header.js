import React from 'react'
import { HeaderView } from '../../ui/molecules/HeaderView'
import { restart } from './action-creator'
import { connect } from 'react-redux'

const HeaderTemp = (props) => (
  <HeaderView
    //onClick={ props.dispatch(restart()) }
    count={ props.count }
  />
)

const mapStateToProps = (state) => {
  return {
    deck: state.deck,
    count: state.count
  }
}

export const Header = connect(mapStateToProps)(HeaderTemp)