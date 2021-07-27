import React, { useState, useEffect } from "react";
import Card from './Card.js';
import '../styles/Gameboard.css';

const Gameboard = ({ cards, clickCard, setCards }) => {

    return (
        <div class="gameboard">
            {cards
                //shuffle
                .map((value) => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
                //mapeo para display
                .map((item, index, arr) =>
                <Card cid={item.id} cimg={item.img} cclicked={item.clicked} clickCard={clickCard}/>
            )}
        </div>
  );
}

export default Gameboard;
