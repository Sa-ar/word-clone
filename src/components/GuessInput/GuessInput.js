import React, { useState } from "react";

function GuessInput({ addGuess }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

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
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={handleChange}
        pattern="[a-zA-Z]{5}"
        title="5 letters guess"
      />
    </form>
  );
}

export default GuessInput;
