import React, { useState, useEffect } from "react";

const Card = ({ cid, cimg, cclicked, clickCard }) => {
    const [id, setId] = useState(cid);
    const [img, setImg] = useState( require("" + cimg) );
    const [clicked, setClicked] = useState(cclicked);

    useEffect(() => {
        window.addEventListener("click", clickCard);

        return () => {
            window.removeEventListener("click", clickCard);
        };
    });

    return (
        <div>
            <img id={id} src={img.default} width='100px'/>
        </div>
  );
}

export default Card;
