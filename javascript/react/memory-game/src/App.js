import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard.js';


function generateDeck(){
  var symbols = ['∆', 'ß', '£', '§', '•', '$', '÷', 'Ø'];
  var deck = [];
  for (let x = 0; x < 16; x++){
    deck.push(
      {isFlipped: false,
       symbol: symbols[x % 8]
    });
  }
  shuffle(deck);
  return deck;
}


function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


class App extends Component {
  constructor(){
    super();
    this.deck = [];
    this.state = {pickedCards: []};
    this.state = {deck: generateDeck()};
  }

  pickCard(cardIndex){
    let newDeck = this.state.deck.map(card => {
      return {...card}
    });
    newDeck[cardIndex].isFlipped = true;
  }

  render() {
    var cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard key = {index} symbol = {card.symbol} isFlipped = {card.isFlipped}/>
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <h3>Match Cards To Win</h3>
        </header>
        
        <div>
          {cardsJSX.slice(0,4)}
        </div>

        <div>
          {cardsJSX.slice(4,8)}
        </div>  
        <div>
          {cardsJSX.slice(8,12)}
        </div>

        <div>
          {cardsJSX.slice(12,16)}
        </div>
      </div>
    );
  }
}

export default App;
