import { useState } from "react";
import Game from "./Game";
import "./Start.css";
const Start = () => {
  const [isClick, setClick] = useState(false);

  const clickChangeHandler = () => {
    setClick(true);
  };

  const cancelGame = () => {
    setClick(false);
  };
  return (
    <div className="start">
      {!isClick && (
        <div>
          <h1>Increment Game</h1>
          <button type="button" onClick={clickChangeHandler}>
            Start
          </button>
        </div>
      )}
      {isClick && <Game cancelGame={cancelGame} />}
    </div>
  );
};

export default Start;
