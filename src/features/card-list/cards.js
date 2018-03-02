import React from 'react'
import { CardListView } from '../../ui/atoms/card-list-view'
import { Card } from '../../ui/molecules/Card'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { win, lose, select, filter, clear, flag } from './action-creator'

class CardList extends React.Component {

  select = e => {
    if(this.props.flag){
      if (e.target.parentElement) {
        this.props.dispatch(select({
          name: e.target.parentElement.getAttribute("data-name"),
          id: e.target.parentElement.getAttribute("data-id")
        }))
      }
    }
  };
  
  selectFlag = () => {
    this.props.dispatch(flag(false))
    setTimeout(() => {
      this.props.dispatch(flag(true))
    }, 300)
  }
  
  compare = e => {
    if (this.props.selectedCards.length === 2) {
      this.selectFlag();
      console.log('fe')
      let firstCard = this.props.selectedCards[0];
      let secondCard = this.props.selectedCards[1];
      let winRound = firstCard.name === secondCard.name && firstCard.id !== secondCard.id;
      let loseRound = firstCard.name !== secondCard.name;
      switch (true) {
        case winRound:
        this.cardFilter();
        setTimeout(() => {
          this.win();
        },300)
        break;
        case loseRound:
        setTimeout(() => {
          this.lose();
        },300)
        break;
        default:
        this.props.dispatch(clear());
      }
    }
  };
  
  cardFilter = () => {
    let cardsInGame = this.props.deck.filter(item => {
      let cardName = `${item.rank}${item.suit}`;
      return (
        cardName !== this.props.selectedCards[0].name &&
        cardName !== this.props.selectedCards[1].name
      );
    });
    this.props.dispatch(filter(cardsInGame))
  }
  
  openedCards = 0;
  win = () => {
    this.openedCards += 1;
    let countPlus = (this.props.cardsInGame.length / 2) * 42;
    setTimeout(() => {
      let count = this.props.count + countPlus;
      this.props.dispatch(win(count, this.props.cardsInGame))
    }, 300)
    this.props.dispatch(clear());
  };
  
  lose = () => {
    let countMinus = this.props.count;
    if (countMinus > 0) {
      countMinus = countMinus - this.props.openedCards * 42;
      setTimeout(() => {
        this.props.dispatch(lose(countMinus))
      }, 300);
    } else {
      setTimeout(() => {
        this.forceUpdate();
      }, 300)
    }
    this.props.dispatch(clear());
  };
  
  handleDeck = node => {
    this.node = node;
  }

  componentDidMount(){
    this.node.addEventListener("click", this.onClick);
  }

  onClick = ev => {
    this.select(ev);
    this.compare(ev);
  };

  render(){
    const isGameOver = this.props.deck.length === 0;
    if(isGameOver) {
      <Redirect to='/end' />
    }
    const items = this.props.deck.map((item, index) => {
      const name = `${item.rank}${item.suit}`;
      return (
        <Card
          key={item.id}
          id={index}
          name={name}
          image={item.image}
          position={item.id}
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

const mapStateToProps = (state) => {
  return {
    deck: state.deck,
    count: state.count,
    selectedCards: state.selectedCards,
    openedCards: state.openedCards,
    cardsInGame: state.cardsInGame,
    flag: state.flag
  }
}

export const Cards = connect(mapStateToProps)(CardList);

