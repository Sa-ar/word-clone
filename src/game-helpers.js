export function checkGuess(guess, answer) {
  if (!guess) {
    return null;
  }
  const guessChars = guess.toUpperCase().split("");
  const answerChars = answer.split("");

  const result = guessChars.map((letter) => ({ letter, status: "incorrect" }));

  // Check for correct characters first, and remove matches from the answer
  guessChars.forEach((letter, index) => {
    if (letter !== answerChars[index]) {
      return letter;
    }

    result[index].status = "correct";
    answerChars[index] = null;
    return null;
  });

  // Check for misplaced letters from the remaining characters
  guessChars.map((letter, index) => {
    if (!letter) return null;

    const misplacedIndex = answerChars.findIndex((char) => letter === char);
    if (misplacedIndex >= 0) {
      result[index].status = "misplaced";
      answerChars[misplacedIndex] = null;
    }
    return null;
  });

  return result;
}
