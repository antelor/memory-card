import React, { useState, useEffect } from "react";
import Card from './Card.js';

const Gameboard = ( {cards} ) => {
    return (
        <div>
            Cancha:
            {cards.map( (item, index, arr) => 
                <Card id={item.id} img={item.img} clicked={item.clicked} />
            )}
        </div>
  );
}

export default Gameboard;
