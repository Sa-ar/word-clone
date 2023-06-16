import React from "react";
import { NUM_OF_LETTERS_ALLOWED } from "../../constants";

function GuessMonitor({ addGuess, isGameOver, tentativeGuess }) {
  const className = isGameOver
    ? "guess-monitor-wrapper dangerous-hidden"
    : "guess-monitor-wrapper";

  function handleSubmit(event) {
    event.preventDefault();
    addGuess();
  }

  return (
    <div className={className}>
      <div className="guess-monitor-field">
        <span
          className="guess-monitor"
          title={`${NUM_OF_LETTERS_ALLOWED} letters guess`}
        >
          {tentativeGuess}
        </span>
        <button
          type="submit"
          className="button"
          onClick={handleSubmit}
          disabled={
            isGameOver || tentativeGuess.length !== NUM_OF_LETTERS_ALLOWED
          }
        >
          Guess
        </button>
      </div>
    </div>
  );
}

export default GuessMonitor;
