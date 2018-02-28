
export function logic(state = defaultState, action) {
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
        card: action.card
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
        //TODO: СДЕЛАТЬ clear
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