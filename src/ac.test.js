import * as actions from './ac'

describe('actions', () => {
  it('win action', () => {
    const deck = [{card: 'Joker'}, {card: 'King'}, {card: 'Queen'}];
    const count = 123;
    const expectedAction = {
      type: 'ROUND_WIN',
      deck,
      count
    }
    expect(actions.win(count, deck)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('lose action', () => {
    const count = 123;
    const expectedAction = {
      type: 'ROUND_LOSE',
      count
    }
    expect(actions.lose(count)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('select action', () => {
    const selectedCards = [{card: 'Joker'}, {card: 'King'}];
    const expectedAction = {
      type: 'SELECT',
      selectedCards
    }
    expect(actions.select(selectedCards)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('filter action', () => {
    const cardsInGame = [{card: 'Joker'}, {card: 'King'}];
    const expectedAction = {
      type: 'FILTER',
      cardsInGame
    }
    expect(actions.filter(cardsInGame)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('clear action', () => {
    const expectedAction = {
      type: 'CLEAR',
      selectedCards: [] 
    }
    expect(actions.clear()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('flag action', () => {
    const flag = true;
    const expectedAction = {
      type: 'SELECT_FLAG',
      flag
    }
    expect(actions.flag(true)).toEqual(expectedAction)
  })
})

//Как проверить если Initializator возвращает постоянно рандомное значение?
// describe('actions', () => {
//   it('restart action', () => {
//     const expectedAction = {
//       type: 'RESTART',
//       deck: new Initializator().getDeck(),
//       count: 0
//     }
//     expect(actions.restart()).toEqual(expectedAction)
//   })
// })

describe('actions', () => {
  it('click action', () => {
    const flipped = false;
    const expectedAction = {
      type: 'CLICK',
      flipped
    }
    expect(actions.click(false)).toEqual(expectedAction)
  })
})
