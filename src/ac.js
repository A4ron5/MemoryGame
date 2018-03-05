import Init from './Initialization/index'

export const win = (count, deck) => ({
  type: 'ROUND_WIN',
  deck,
  count
})

export const lose = (count) => ({
  type: 'ROUND_LOSE',
  count
})

export const select = (selectedCards) => ({
  type: 'SELECT',
  selectedCards
})

export const filter = (cardsInGame) => ({
  type: 'FILTER',
  cardsInGame
})

export const clear = () => ({
  type: 'CLEAR',
  selectedCards: [] 
})

export const flag = (flag) => ({
  type: 'SELECT_FLAG',
  flag
})

export const restart = () => ({
	type: 'RESTART',
  deck: new Init().getDeck(),
  count: 0
})

export const click = (flipped) => ({
  type: 'CLICK',
  flipped
})

export const compare = () => (dispatch, getState) => {
  comparelogic(dispatch, getState)
}

const comparelogic = (dispatch, getState) => {
  let isTwoCards = getState().selectedCards.length === 2;
  if (isTwoCards) {
    let firstCard = getState().selectedCards[0];
    let secondCard = getState().selectedCards[1];
    let winRoundvar = firstCard.name === secondCard.name && firstCard.id !== secondCard.id;
    let loseRoundvar = firstCard.name !== secondCard.name;
    switch (true) {
      case winRoundvar:
      cardFilter(dispatch, getState);
      roundWin(dispatch, getState);
      break;
      case loseRoundvar:
      roundLose(dispatch, getState);
      selectFlag(dispatch)
      break;
      default:
      dispatch(clear());
    }
  }
}

const selectFlag = (dispatch) => {
  dispatch(flag(true))
  setTimeout(() => {
    dispatch(flag(false))
  }, 0)
}

const cardFilter = (dispatch, getState) => {
  let cardsInGame = getState().deck.filter(item => {
    let cardName = `${item.rank}${item.suit}`;
    return (
      cardName !== getState().selectedCards[0].name &&
      cardName !== getState().selectedCards[1].name
    );
  });
  dispatch(filter(cardsInGame))
}

const roundWin = (dispatch, getState) => {
  let countPlus = (getState().cardsInGame.length / 2) * 42;
  setTimeout(() => {
    let count = getState().count + countPlus;
    dispatch(win(count, getState().cardsInGame, 1))
  }, 500)
  dispatch(clear());
};

const roundLose = (dispatch, getState) => {
  let countMinus = getState().count;
  if (countMinus > 0) {
    let count = countMinus - getState().openedCards * 42;
    setTimeout(() => {
      dispatch(lose(count))
    }, 500);
  }
  dispatch(click(true))
  dispatch(clear());
};
