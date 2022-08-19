import { useState } from "react";
import "./Game.css";
const Game = (props) => {
  const [increment, setIncrement] = useState(0);
  const [isMultiple, setMultiple] = useState(1);

  const clickIncrementHandler = () => {
    console.log("click");
    setIncrement(increment + isMultiple);
  };

  const clickDecrementHandler = () => {
    setIncrement(increment - isMultiple);
  };

  const setMultipleHandler = () => {
    setMultiple(isMultiple + 1);
  };

  const setResetHandler = () => {
    setMultiple(1);
  };
  return (
    <div className="Game-Card">
      <div className="Scoreboard">{increment}</div>
      <div className="buttons">
        <button type="button" className="btn" onClick={clickDecrementHandler}>
          -
        </button>
        <button type="button" className="btn" onClick={setMultipleHandler}>
          x{isMultiple}
        </button>
        <button type="button" className="btn" onClick={clickIncrementHandler}>
          +
        </button>
      </div>
      <button type="button" className="btn reset-btn" onClick={setResetHandler}>
        Reset
      </button>
      <br />
      <button type="button" onClick={props.cancelGame}>
        Cancel
      </button>
    </div>
  );
};

export default Game;
