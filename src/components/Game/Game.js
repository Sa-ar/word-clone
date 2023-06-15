import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessesHistory from "../GuessesHistory";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import LostBanner from "../LostBanner/LostBanner";
import WonBanner from "../WonBanner/WonBanner";
import GameStatistics from "../GameStatistics/GameStatistics";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");
  const [results, setResults] = useState({ won: 0, lost: 0, total: 0 });

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

  const resetGame = () => {
    if (gameStatus === "won") {
      setResults({
        ...results,
        won: results.won + 1,
        total: results.total + 1,
      });
    } else {
      setResults({
        ...results,
        lost: results.lost + 1,
        total: results.total + 1,
      });
    }
    setGuesses([]);
    setGameStatus("running");
  };

  return (
    <>
      <GameStatistics
        results={results}
        resetGame={resetGame}
        isStart={guesses.length === 0}
      />
      <GuessesHistory guesses={guesses} answer={answer} />
      <GuessInput gameStatus={gameStatus} addGuess={addGuess} />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
