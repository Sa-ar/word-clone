import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessesHistory from "../GuessesHistory";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  const addGuess = (guessText) => {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      return;
    }
    // @ts-ignore
    setGuesses((prevGuesses) => [...prevGuesses, guessText]);
  };

  return (
    <>
      <GuessesHistory guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
