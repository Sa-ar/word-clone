import React from "react";
import { NUM_OF_LETTERS_ALLOWED } from "../../constants";

function GuessInput({
  addGuess,
  isGameOver,
  tentativeGuess,
  setTentativeGuess,
}) {
  const lettersUsedRef = React.useRef(new Set());

  const className = isGameOver
    ? "guess-input-wrapper dangerous-hidden"
    : "guess-input-wrapper";

  function handleChange(event) {
    const nextGuess = event.target.value.toUpperCase();
    setTentativeGuess(nextGuess);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (tentativeGuess.length !== NUM_OF_LETTERS_ALLOWED) {
      alert(`Please enter ${NUM_OF_LETTERS_ALLOWED} letters`);
      return;
    }

    tentativeGuess
      .toUpperCase()
      .split("")
      .forEach((letter) => lettersUsedRef.current.add(letter));
    addGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <div className="guess-input-field">
        <input
          required
          disabled={isGameOver}
          readOnly
          autoFocus
          id="guess-input"
          type="text"
          value={tentativeGuess}
          onChange={handleChange}
          pattern={`[a-zA-Z]{${NUM_OF_LETTERS_ALLOWED}}`}
          title={`${NUM_OF_LETTERS_ALLOWED} letters guess`}
        />
        <button type="submit" className="button">
          Guess
        </button>
      </div>
    </form>
  );
}

export default GuessInput;
