import React from "react";
import useOnKeyPressed from "../../hooks/useOnKeyPressed";

const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  validatedGuesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

const Keyboard = ({
  validatedGuesses,
  addLetter,
  deleteLastLetter,
  deletable,
  disabled,
  isGameOver,
}) => {
  const className = isGameOver ? "keyboard dangerous-hidden" : "keyboard";
  let statusByLetter = getStatusByLetter(validatedGuesses);

  useOnKeyPressed(({ key }) => {
    if (key === "Backspace") {
      deleteLastLetter();
    } else if (key.length === 1) {
      addLetter(key.toUpperCase());
    }
  });

  return (
    <div className={className}>
      {ROWS.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter) => (
            <button
              key={letter}
              onClick={() => addLetter(letter)}
              disabled={
                ["correct", "incorrect"].includes(statusByLetter[letter]) ||
                disabled
              }
              className={`letter ${statusByLetter[letter] || ""}`}
            >
              {letter}
            </button>
          ))}
          {index === ROWS.length - 1 && (
            <button
              onClick={() => deleteLastLetter(" ")}
              className="letter delete"
              disabled={!deletable}
            >
              Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
