import React from 'react'
import { CardListView } from '../../ui/atoms/card-list-view'
import { Card } from './card'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { select, compare } from '../../ac'

/**
 * В этом коде проблема с ре-рендером. Происходит он из за того, что
 * когда диспачатся action'ы, они меняют данные в сторе, соответсвенно
 * mapStateToProps постоянно получает новые данные и ре-рендерит компонент.
 * Нужно вынести все диспачи из этого кода либо в thunk, либо еще куда-то.
 * По этой же причине анимация переворта карты в card.js не работает корректно, поскольку
 * при каждом клике в этом компоненте диспачится action и меняет данные в сторе. Соответсвенно
 * также в card.js mapStateToProps обновляется посятонно и ре-рендерится. Не хватило времени её 
 * решить. UPDATE: Частично решил проблему, вынес логику в ac.js, теперь ре-рендоров нету.
 */

class CardList extends React.Component {

  select = e => {
    if(true){
      if (e.target.parentElement) {
        this.props.dispatch(select({
          name: e.target.parentElement.getAttribute("data-name"),
          id: e.target.parentElement.getAttribute("data-id")
        }))
      }
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
  deck: state.deck  
})

export const Cards = withRouter(connect(mapStateToProps)(CardList));

