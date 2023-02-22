import React from "react";
import { range } from "../../utils";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessesHistory({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((spot) => (
        <Guess key={spot} value={guesses[spot] ?? ""} answer={answer} />
      ))}
    </div>
  );
}

export default GuessesHistory;
