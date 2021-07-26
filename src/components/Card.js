import React, { useState, useEffect } from "react";

const Card = ( {id, img, clicked} ) => {
    return (
        <div>
            id: {id}, img: {img}, {clicked}
        </div>
  );
}

export default Card;
