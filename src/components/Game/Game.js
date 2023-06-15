import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessesHistory from "../GuessesHistory";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import LostBanner from "../LostBanner/LostBanner";
import WonBanner from "../WonBanner/WonBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  const addGuess = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess];
    // @ts-ignore
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <GuessesHistory guesses={guesses} answer={answer} />
      {/* {gameStatus === "running" && ( */}
      <GuessInput gameStatus={gameStatus} addGuess={addGuess} />
      {/* )} */}
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
