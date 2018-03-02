import Initializator from '../../../Initialization';

const initialState = {
  deck: new Initializator().getDeck(),
  count: 0,
  selectedCards: [],
  openedCards: 0,
  cardsInGame:[],
  flag: true
}

export function restart(state, action) {
  switch(action.type) {
    case 'RESTART':
      return {
        ...state,
        deck: new Initializator().getDeck()
      }
    default:
      return state
  }
}