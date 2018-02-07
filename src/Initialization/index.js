import ranks from './Data/ranks.js'
import suits from './Data/suits.js'
import Card from './Data/card.js'
import images from './Data/images.js'
import cloneDeep from 'lodash.clonedeep'


class Initializator {
  constructor(){
    
    let increment = (function(n) {
      return function() {
          n += 1;
          return n;
      }
    }(-1));
    
    let incrementForID = (function(n) {
      return function() {
          n += 1;
          return n;
      }
    }(-1));
    
    let fullCards = this.fullinit(ranks, suits, Card, images, increment);
    this.cards = this.initForGame(fullCards);
    this.cards.forEach((item) => {
      item.id = incrementForID();
    });
  }

  fullinit(ranks, suits, Card, images, increment){
    let cards = [];
    ranks.forEach((itemRank) => {
      suits.forEach((itemSuit) => {
          cards.push(new Card(itemRank, itemSuit, images[increment()]))
      })
    });
    return cards;
  }

  initForGame(deck){
    let temp = new Set();
    while(temp.size !== 9){
        temp.add(this.getRandomCard(deck))
    }
    let cloneTemp = cloneDeep(temp);
    let newDeck = [...temp, ...cloneTemp];
    newDeck.sort(this.shuffle);
    return newDeck
  }

  getRandomCard(deck){
    return deck[Math.floor(Math.random()*deck.length)]
  }

  shuffle(a, b) {
    return Math.random() - 0.5;
  }
  
  getDeck(){
    return this.cards;
  }
}

export default Initializator;