import React, { useState } from "react";
import "./Toggle.css";

const Toggle = () => {
  const [isColor, setColor] = useState(false);

  const togglrHandle = () => {
    setColor(!isColor);
  };
  const styles = {
    backgroundColor: isColor ? 'black' : 'white',
    color: isColor ? 'white': 'black',
  }
  return (
    <div style={styles}>
      <div className="main-container">
          <button onClick={togglrHandle}>switch Theame</button>
      </div>

      <div className="toogle-container">
        <h1>Wellcome to the Theame Swither App!</h1>
        <p>This is the content area. The theame is currently {!isColor? "white": "black"}</p>
      </div>
    </div>
  );
};

export default Toggle;
