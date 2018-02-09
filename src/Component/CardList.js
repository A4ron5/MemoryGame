import React from "react";
import Card from "./Card/Card";
import './CardList.css'
import wrapHOC from '../HOC/GamePageHOC'

class CardList extends React.Component {
  
  state = {
    isOpen: this.props.isOpen
  };

  handleDeck = node => {
    this.node = node;
  };
  
  componentDidMount(){
    this.node.addEventListener("click", this.props.onClick);
  }

  render() {
    const gamedeck = this.props.deck;
    const items = gamedeck.map((item, index) => {
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

export default wrapHOC(CardList);
