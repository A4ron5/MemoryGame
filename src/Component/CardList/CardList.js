import React from "react";
import Card from "../Card/Card.js";
import './CardList.css'
//TODO: Разобраться с перевортом карт PS поменять классы в css
class CardList extends React.Component {
  
  state = {
    isOpen: this.props.isOpen
  }

  //TODO: ПЕРЕДАЛТЬ ВСЕЕЕЕЕЕЕЕ

  

  handleDeck = node => {
    this.node = node;
  };
  
  
  
  componentDidMount(){
    this.node.addEventListener("click", this.props.onDeckClick);
  }

  render() {
    
    const deck = this.props.gameDeck;
    const items = deck.map((item, index) => {
      let name = `${item.rank}${item.suit}`;
      return (
        <Card
          key={item.id}
          id={index}
          name={name}
          image={item.image}
          position={item.id}
          isOpen={this.state.isOpen}
        />
      );
    });
    return (
      <div className="deck" ref={this.handleDeck}>
        {items}
      </div>
    );
  }
}

export default CardList;
