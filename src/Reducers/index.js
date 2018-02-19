import Initializator from '../Initialization/index'

let defaultState = {
  deck: Initializator.getDeck(),
  count: 0,
  isOpen: false,
  cards: {
    selectedCards: [],
    openedCards: [],
    cardsInGame: [],
  },
  flag: true
}

export default function game(state = defaultState, action){
  if(action.type === RESTART_GAME){
    state = {
      deck: Initializator.getDeck(),
      count: 0,
      isOpen: false,
      cards: {
        selectedCards: [],
        openedCards: [],
        cardsInGame: [],
      },
      flag: true
    };
  }
  switch(action.type) {
    case 'CLICK':
      return Object.assign({}, state, {
        isOpen: !isOpen
      })
    case 'WIN_ROUND':
      return Object.assign({}, state, {
        
      })
    case 'LOSE_ROUND':
  }
}