import React from "react";
import Card from "../Card/Card.js";
import './CardList.css'
//TODO: Разобраться с перевортом карт PS поменять классы в css
class CardList extends React.Component {
  
  state = {
    isOpen: this.props.test
  }

  //TODO: ПЕРЕДАЛТЬ ВСЕЕЕЕЕЕЕЕ

  

  handleDeck = node => {
    this.node = node;
  };
  
  
  
  componentDidMount(){
    this.node.addEventListener("click", this.props.onDeckClick);
    // setTimeout(()=> {
    //   this.setState({isOpen: !this.state.isOpen})
    // },1000)
    // setTimeout(()=> {
    //   this.setState({isOpen: !this.state.isOpen})
    // },5000)
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
          test={this.state.isOpen}
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
