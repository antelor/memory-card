import React, { useState, useEffect } from "react";

const Card = ({ cid, cimg, cclicked, clickCard }) => {
    const [id, setId] = useState(cid);
    const [img, setImg] = useState(cimg);
    const [clicked, setClicked] = useState(cclicked);

    /*This option is equal to a componentDidMount lifecycle method, 
    meaning the hook runs one time when the component mounts (is inserted in the DOM tree)*/
    useEffect(() => {
        // listener
        window.addEventListener("click", clickCard);
        setId(cid);

        return () => {
            window.removeEventListener("click", clickCard);
        };
    }, [cid]);

    return (
        <div>
            <button id={id}>{id}</button>
        </div>
  );
}

export default Card;
