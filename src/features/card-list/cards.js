import React from 'react'
import { CardListView, Card } from 'ui'
class CardList extends React.Component {

  handleDeck = node => {
    this.node = node;
  }

  componentDidMount(){
    this.node.addEventListener("click", this.props.onClick);
  }

  render(){
    return (
      <CardListView innerRef={this.handleDeck}>
        <Card/>
      </CardListView>
    )
  }

}