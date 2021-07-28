import React, { useState, useEffect } from "react";
import '../styles/Card.css';

const Card = ({ cid, cimg, cclicked, cname, clickCard }) => {
    const [id, setId] = useState(cid);
    const [img, setImg] = useState( require("" + cimg) );
    const [clicked, setClicked] = useState(cclicked);
    const [name, setName] = useState(cname);

    useEffect(() => {
        window.addEventListener("click", clickCard);
        setClicked(cclicked);

        return () => {
            window.removeEventListener("click", clickCard);
        };
    }, [cclicked]);

    return (
        <div className="card"> 
            <img id={id} src={img.default} />
            <div class="nameDiv">
                {name}
            </div>
        </div>
  );
}

export default Card;
