import React, { useState } from "react";
import { NUM_OF_LETTERS_ALLOWED } from "../../constants";

function GuessInput({ addGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = useState("");
  const className =
    gameStatus !== "running"
      ? "guess-input-wrapper dangerous-hidden"
      : "guess-input-wrapper";

  function handleChange(event) {
    const nextGuess = event.target.value.toUpperCase();
    setTentativeGuess(nextGuess);
  }

  function handleSubmit(event) {
    event.preventDefault();

    addGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={handleChange}
        pattern={`[a-zA-Z]{${NUM_OF_LETTERS_ALLOWED}}`}
        title={`${NUM_OF_LETTERS_ALLOWED} letters guess`}
      />
    </form>
  );
}

export default GuessInput;
