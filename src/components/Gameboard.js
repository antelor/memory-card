import React, { useState, useEffect } from "react";
import Card from './Card.js';

const Gameboard = ({ cards, clickCard, setCards }) => {

    return (
        <div>
            Cancha:
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
