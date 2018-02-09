import React from 'react'
import Header from '../Component/Header/Header'
import Initializator from '../Initialization/index'

const wrapHOC = (CardList) => {
  class Wrapper extends React.PureComponent {

		state = {
			deck: new Initializator().getDeck(),
			count: 0,
			isOpen: false
		};
		
		selectedCards = [];
		openedCards = 0;
		cardsInGame = [];
		
		restart = () => {
			let cards = new Initializator();
			this.setState({
				deck: cards.getDeck(),
				count: 0,
				isOpen: false
			});
		}

		select = e => {
			if (e.target.parentNode.parentNode) {
				this.selectedCards.push({
					name: e.target.parentNode.parentNode.getAttribute("data-name"),
					id: e.target.parentNode.parentNode.getAttribute("data-id")
				});
			}
		};

		compare = e => {
			if (this.selectedCards.length === 2) {
				let firstCard = this.selectedCards[0];
				let secondCard = this.selectedCards[1];
				switch (true) {
					case firstCard.name === secondCard.name && firstCard.id !== secondCard.id:
						this.cardFilter();
						setTimeout(() => {
							this.win();
						},800)
						break;
					case firstCard.id !== secondCard.id:
						setTimeout(() => {
							this.lose();
						},800)
						break;
					default:
						this.clear();
				}
			}
		};
		
		cardFilter = () => {
			this.cardsInGame = this.state.deck.filter(item => {
				let cardName = `${item.rank}${item.suit}`;
				return (
					cardName !== this.selectedCards[0].name &&
					cardName !== this.selectedCards[1].name
				);
			});
		}

		win = () => {
			this.openedCards += 1;
			let countPlus = (this.cardsInGame.length / 2) * 42;
				setTimeout(() => {
					this.setState({ 
						count: this.state.count + countPlus, 
						deck: this.cardsInGame
					})
				}, 800)
			this.clear();
		};

		lose = () => {
			let countMinus = this.state.count;
			if (countMinus > 0) {
				countMinus = countMinus - this.openedCards * 42;
				setTimeout(() => {
					this.setState({ count: countMinus })
				}, 800);
			}
			this.clear();
		};

		clear = () => {
			this.selectedCards = [];
		}

		onDeckClick = ev => {
			this.select(ev);
			this.compare(ev);
		};

    render() {
      return (
        <div>
          <Header count={this.state.count} restart={this.restart}/>
          <CardList deck={this.state.deck} isOpen={this.state.isOpen} onClick={this.onDeckClick}/>
        </div>
      );
    }  
  }
  return Wrapper;
}

export default wrapHOC;