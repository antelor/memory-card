import React, { useState, useEffect } from "react";
import '../styles/Scoreboard.css';

const Scoreboard = ({ score, hiscore }) => {
    
    return (
        <div className="scoreboard">
            Score: {score} -
            Hi score: {hiscore}
        </div>
  );
}

export default Scoreboard;
