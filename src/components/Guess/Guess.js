import React from "react";
import { NUM_OF_LETTERS_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ value, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{value}</span>;
}

function Guess({ value, answer }) {
  const checkedGuess = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(NUM_OF_LETTERS_ALLOWED).map((spot) => (
        <Cell
          key={spot}
          status={checkedGuess?.[spot]?.status}
          value={checkedGuess?.[spot]?.letter}
        />
      ))}
    </p>
  );
}

export default Guess;
