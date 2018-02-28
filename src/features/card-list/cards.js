import React from 'react'
import { CardListView, Card } from 'ui'

class CardList extends React.Component {

  handleDeck = node => {
    this.node = node;
  }

  componentDidMount(){
    this.node.addEventListener("click", this.props.onClick);
  }

  //TODO: метод исфлиппед

  render(){
    const items = deck.map((item, index) => {
      const name = `${item.rank}${item.suit}`;
      return (
        //TODO: изменить значения 
        <Card
          key={item.id}
          id={index}
          name={name}
          image={item.image}
          position={item.id}
          //TODO: исопен на флиппед
          isOpen={this.state.isOpen}
          flag={this.props.flag}
        /> 
      )
    })
    
    return (
      <CardListView innerRef={this.handleDeck}>
        {items}
      </CardListView>
    )
  }

}