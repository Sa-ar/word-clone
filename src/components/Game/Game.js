import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessesHistory from "../GuessesHistory/GuessesHistory";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function addGuess(guessText) {
    const newGuess = {
      id: crypto.randomUUID(),
      guess: guessText,
    };

    // @ts-ignore
    setGuesses((prevGuesses) => [...prevGuesses, newGuess]);
  }

  return (
    <>
      <GuessesHistory guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
