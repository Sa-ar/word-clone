import React, { useState } from "react";

function GuessInput() {
  const [guess, setGuess] = useState("");

  function handleChange(event) {
    const nextGuess = event.target.value.toUpperCase();
    setGuess(nextGuess);
  }

  function handleInvalid({ target }) {
    if (target.validity.typeMismatch) {
      target.setCustomValidity("Expected to be 5 letters word.");
    } else {
      target.setCustomValidity("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== 5) {
      if (event.target.validity.typeMismatch) {
        event.target.setCustomValidity("Expected to be 5 letters word.");
      } else {
        event.target.setCustomValidity("");
      }
      return;
    }

    console.log(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        onInvalid={handleInvalid}
        pattern="[a-zA-Z]{5}"
      />
    </form>
  );
}

export default GuessInput;
