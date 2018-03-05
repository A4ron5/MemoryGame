import React from 'react'
import { HeaderView } from '../../ui/molecules/HeaderView'
import { restart, openClose } from '../../ac'
import { connect } from 'react-redux'

class HeaderTemp extends React.Component {

  res = () => {
    this.props.dispatch(restart())
    this.props.dispatch(openClose());
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