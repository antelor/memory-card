import React, { useState, useEffect } from "react";

const Scoreboard = ( {score, hiscore} ) => {

    return (
      
        <div>
            Score: {score}
            Hiscore: {hiscore}
        </div>
  );
}

export default Scoreboard;
