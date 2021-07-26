import React, { useState, useEffect } from "react";

const Card = ({ cid, cimg, cclicked }) => {
    const [id, setId] = useState(cid);
    const [img, setImg] = useState(cimg);
    const [clicked, setClicked] = useState(cclicked);

    return (
        <div>
            id: {id} , img: {img}
        </div>
  );
}

export default Card;
