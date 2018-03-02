import React from 'react'
import { HeaderView } from '../../ui/molecules/HeaderView'
import { restart } from './action-creator'
import { connect } from 'react-redux'

class HeaderTemp extends React.Component {

  res = () => {
    this.props.dispatch(restart())
  }

  render() {
    return (
      <HeaderView
        onClick={ this.res }
        count={ this.props.count }
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    deck: state.deck,
    count: state.count
  }
}

export const Header = connect(mapStateToProps)(HeaderTemp)