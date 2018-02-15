import Initializator from '../Initialization/index'

let defaultState = {
  deck: Initializator.getDeck(),
  count: 0,
  isOpen: false,
  selectedCards: [],
  openedCardCards: [],
  cardsInGame: [],
  flag: true
}

export default function game(state = defaultState, action){
  if(action.type === RESTART_GAME){
    state = {
      deck: Initializator.getDeck(),
      count: 0,
      isOpen: false,
      selectedCards: [],
      openedCardCards: [],
      cardsInGame: [],
      flag: true
    };
  }
  
}