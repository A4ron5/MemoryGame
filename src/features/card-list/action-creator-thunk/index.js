import { win, lose, select, compare, filter, clear, flag } from '../action'

export const logic = (card, ) => (dispatch, getState) => {
  if(getState.flag) {
    dispatch(select(card))
  }
  if(getState.selectedCards.length == 2) {
    //TODO: Сделать selectedFlag ...

    let firstCard = getState.selectedCards[0];
    let secondCard = getState.selectedCards[1];
    let winRound = firstCard.name === secondCard.name && firstCard.id !== secondCard.id;
    let loseRound = firstCard.name !== secondCard.name; 

    switch (true) {
      case winRound:
        this.cardFilter();
        setTimeout(() => {
          this.win();
        },800)
        break;
      case loseRound:
        setTimeout(() => {
          this.lose();
        },800)
        break;
      default:
        dispatch(clear)
    }
  }
}