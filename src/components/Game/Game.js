import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessesHistory from "../GuessesHistory";
import {
  NUM_OF_GUESSES_ALLOWED,
  NUM_OF_LETTERS_ALLOWED,
} from "../../constants";
import LostBanner from "../LostBanner/LostBanner";
import WonBanner from "../WonBanner/WonBanner";
import GameStatistics from "../GameStatistics/GameStatistics";
import { checkGuess } from "../../game-helpers";
import Keyboard from "../Keyboard/Keyboard";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");
  const [results, setResults] = useState({ won: 0, lost: 0, total: 0 });
  const [tentativeGuess, setTentativeGuess] = useState("");

  const addGuess = () => {
    if (tentativeGuess.length !== NUM_OF_LETTERS_ALLOWED) return;
    const nextGuesses = [...guesses, tentativeGuess];
    // @ts-ignore
    setGuesses(nextGuesses);

    setTentativeGuess("");

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  const addLetter = (letter) => {
    if (tentativeGuess.length >= NUM_OF_LETTERS_ALLOWED) return;

    setTentativeGuess((prevGuess) => prevGuess + letter);
  };

  const deleteLastLetter = () => {
    setTentativeGuess((prevGuess) => prevGuess.slice(0, prevGuess.length - 1));
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
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus("running");
  };
  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GameStatistics
        results={results}
        resetGame={resetGame}
        isStart={guesses.length === 0}
      />
      <GuessesHistory validatedGuesses={validatedGuesses} answer={answer} />
      <GuessInput
        isGameOver={gameStatus !== "running"}
        addGuess={addGuess}
        tentativeGuess={tentativeGuess}
        setTentativeGuess={setTentativeGuess}
      />
      <Keyboard
        validatedGuesses={validatedGuesses}
        addLetter={addLetter}
        deleteLastLetter={deleteLastLetter}
        disabled={tentativeGuess.length >= NUM_OF_LETTERS_ALLOWED}
        isGameOver={gameStatus !== "running"}
        deletable={tentativeGuess.length > 0}
        submitWord={addGuess}
      />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
