import React from 'react'
import { CardListView } from '../../ui/atoms/card-list-view'
import { Card } from './card'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { select, compare, openClose } from '../../ac'

class CardList extends React.Component {

  select = e => {
    if (e.target.parentElement) {
      this.props.dispatch(select({
        name: e.target.parentElement.getAttribute("data-name"),
        id: e.target.parentElement.getAttribute("data-id")
      }))
    }
  };
  
  toEndPage = () => {
    this.props.history.replace('/end')
  }

  handleDeck = node => {
    this.node = node;
  }

  componentDidMount(){
    this.node.addEventListener("click", this.onClick);
    this.props.dispatch(openClose())
  }

  componentWillUnmount(){
    this.node.removeEventListener("click", this.onClick);
  }

  onClick = ev => {
    this.select(ev);
    this.props.dispatch(compare());
    this.forceUpdate()
  };

  render(){
    const isGameOver = this.props.deck.length === 0;
    if(isGameOver) {
      this.toEndPage();
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

const mapStateToProps = (state) => ({
  deck: state.deck,
  flipped: state.flipped 
})

export const Cards = withRouter(connect(mapStateToProps)(CardList));

