import React, { useState, useEffect } from "react";
import './styles/App.css';
import Scoreboard from './components/Scoreboard.js';
import Gameboard from './components/Gameboard.js';

const App = (props) => {
  const [score, setScore] = useState(0);
  const [hiscore, setHiscore] = useState(0);
  const [cards, setCards] = useState([
    {
      id: 0,
      img: 'a',
      clicked: false,
    },
    {
      id: 1,
      img: 'b',
      clicked: false,
    },
    {
      id: 2,
      img: 'c',
      clicked: false,
    },
    {
      id: 3,
      img: 'c',
      clicked: false,
    }
  ]);

  let clickCard = (e) => {
    let newCards = cards;

    playCheck(newCards, e.target.id);

    winCheck(newCards);
    
  }
  
  let lose = () => {
    console.log('perdiste');
  }

  let playCheck = (newCards, id) => {
    for (let i = 0; i < newCards.length; i++) {
      //si la carta es la que clickeamos
      if (newCards[i].id == id) {
        //la carta ya habia sido clickeada
        if (newCards[i].clicked == true) {
          setScore(0);

          lose();
          break;
        }
        //la carta no habia sido clickeada
        if (newCards[i].clicked == false) {
          newCards[i].clicked = true;

          setScore(score => score + 1);
          setHiscore(score => score + 1);

          setCards([...newCards]);
          break;
        }
      }
    }
  }

  let win = () => {
    console.log('ganaste');
  }

  let winCheck = (newCards) => {
    let clickCount = 0;
    //si todas las cartas fueron clickeadas
    for (let i = 0; i < newCards.length; i++) {
      if (newCards[i].clicked == true) {
        clickCount++;
      }
    }
    
    if (clickCount == newCards.length) {
      setScore(0);
      win();
    }
  }

  useEffect(() => {
      setScore(score);
  }, [score]);

  return (
    <div>
      <div class="title">
        Memory Game
      </div>
      <Scoreboard score={score} hiscore={hiscore}/>
      <Gameboard cards={cards} clickCard={clickCard} setCards={setCards}/>
    </div>
  );
}

export default App;
