import Initializator from '../../../Initialization/index'

const initialState = {
  deck: new Initializator().getDeck(),
  count: 0,
  selectedCards: [],
  openedCards: 0,
  cardsInGame:[],
  flag: true
}

export function logic(state = initialState, action) {
  switch(action.type) {
    case 'ROUND_WIN':
      return {
        ...state,
        deck: action.deck,
        count: action.count
      }
    case 'ROUND_LOSE':
      return {
        ...state,
        count: action.count
      }
    case 'SELECT':
      return {
        ...state,
        selectedCards: [...state.selectedCards, action.selectedCards]
      }
    case 'COMPARE':
      return {
        ...state,
        selectedCards: action.selectedCards
      }
    case 'FILTER':
      return {
        ...state,
        cardsInGame: action.cardsInGame
      }
    case 'CLEAR':
      return {
        ...state,
        selectedCards: action.selectedCards
      }
    case 'SELECT_FLAG':
      return {
        ...state,
        flag: action.flag
      }
    default: 
      return state;
  }
}