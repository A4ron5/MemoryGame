import React, { Component } from 'react';
import './App.css';

import StartPage from './Component/StartPage/StartPage.js'
import StartGameLogo from './Component/Logo/StartGame.png'
import Logo from './Component/Logo/Logo.js'
import TextLine from './Component/TextLine/TextLine.js'
import Button from './Component/Button/Button.js'

import Initializator from './Initialization/index.js'
import GamePage from './Component/GamePage/GamePage.js'
import Header from './Component/Header/Header.js'
import CardList from './Component/CardList/CardList.js'

import EndPage from './Component/EndPage/EndPage.js'
import EndGameLogo from './Component/Logo/EndGame.png'
import Count from './Component/Count/Count.js'

//TODO: СДЕЛАТЬ НОРМАЛЬНЫЕ РАЗМЕРЫ ВАЖНО!!!!!!!!!!!!!!!!!!!!!!!
//TODO: СДЕЛАТЬ ЧТО ТО С ЗАДЕРЖКОЙ
//TODO: Сделать в родителе метод, который на вход принимает это значение и передать ребенку этот метод
// ПОХОДУ БЕЗ РЕДАКСА НЕ РЕШИТЬ ПРОБЛЕМУ С ОТКРЫТИЕМ И ЗАКРЫТИЕМ КАРТ
class App extends Component {


  state = {
    gameDeck: new Initializator().getDeck(),
    count: 0,
    isOpenAll: false
  };


  restart = () => {
    let cards = new Initializator();
    this.setState({
      gameDeck: cards.getDeck(),
      count: 0,
      isOpenAll: false
    });
  }
  
  selectedCards = [];
  openedCards = 0;
  cardsInGame = [];

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
    this.cardsInGame = this.state.gameDeck.filter(item => {
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
      this.setState({ 
        count: this.state.count + countPlus, 
        gameDeck: this.cardsInGame
      })
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

  onDeckClcikWrapper = (ev) => {
    setTimeout(this.onDeckClick(ev), 1000)
  }

  render() {
    return (
      <div className="App">
        {/* <StartPage>
          <Logo img={StartGameLogo}/>
          <TextLine>MEMORY GAME</TextLine>
          <Button>Начать игру</Button>
        </StartPage> */}
        <GamePage>
          <Header count={this.state.count} restart={this.restart}/>
          <CardList 
          gameDeck={this.state.gameDeck} 
          onDeckClick={this.onDeckClick}
          isOpenAll={this.state.isOpenAll} 
          />
        </GamePage>
        {/* <EndPage>
          <Logo img={EndGameLogo}/>
          <TextLine>Поздавляём!</TextLine>
          <Count count={this.state.count}>Ваш итоговый счет:</Count>
          <Button>Еще раз</Button>
        </EndPage> */}
      </div>
    );
  }
}




export default App;

