import React, { useState, useEffect } from "react";
import './styles/App.css';
import Scoreboard from './components/Scoreboard.js';
import Gameboard from './components/Gameboard.js';

const App = (props) => {
  const [score, setScore] = useState('0');
  const [hiscore, setHiscore] = useState('0');
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
    }
  ]);

  return (
    <div>
      <Scoreboard score={score} hiscore={hiscore} />
      <Gameboard cards={cards}/>
    </div>
  );
}

export default App;
