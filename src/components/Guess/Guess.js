import React from "react";
import { NUM_OF_LETTERS_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(NUM_OF_LETTERS_ALLOWED).map((spot) => (
        <span key={spot} className="cell">
          {value[spot]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
