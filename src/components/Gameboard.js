import React, { useState, useEffect } from "react";
import Card from './Card.js';

const Gameboard = ( {cards} ) => {
    return (
        <div>
            Cancha:
            {cards.map((item, index, arr) =>
                <Card cid={item.id} cimg={item.img} cclicked={item.clicked} />
            )}
        </div>
  );
}

export default Gameboard;
