
import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const {
    currAttempt,
    gameOver,
    correctWord,
  } = useContext(AppContext);

  function Reload() {
    window.location.reload()
  }
  
  return (
    <div className="gameOver">
      <h3>
        {gameOver.guessedWord
          ? "Oh, wow, cool you guessed the Wordle"
          : "You Failed SOOOOO Hard"}
      </h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
      
      <button type="button" onClick={Reload}>New Game</button>
    </div>
    
  );
}

export default GameOver;