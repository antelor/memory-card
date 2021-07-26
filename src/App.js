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
    }
  ]);

  let clickCard = (e) => {
    let newCards = cards;
    for (let i = 0; i < newCards.length; i++){
      if (newCards[i].id == e.target.id) {
        newCards[i].clicked = true;
        newCards[i].id = '5';
      }
    }

    setCards([...newCards]);
    console.log(cards);
  }
  
  

  return (
    <div>
      <Scoreboard score={score} hiscore={hiscore} />
      <Gameboard cards={cards} clickCard={clickCard} setCards={setCards}/>
    </div>
  );
}

export default App;
