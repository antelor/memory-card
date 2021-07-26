import React, { useState, useEffect } from "react";
import Card from './Card.js';

const Gameboard = ({ cards, clickCard, setCards }) => {

    useEffect(() => {
        setCards(cards);
    }, [cards]);

    return (
        <div>
            Cancha:
            {cards.map((item, index, arr) =>
                <Card cid={item.id} cimg={item.img} cclicked={item.clicked} clickCard={clickCard}/>
            )}
        </div>
  );
}

export default Gameboard;
