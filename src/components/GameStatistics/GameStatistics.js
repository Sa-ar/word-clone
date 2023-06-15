import React from "react";

function GameStatistics({ results, resetGame, isStart }) {
  return (
    <div className="game-statistics">
      <p>
        Won: {results.won} Lost: {results.lost} Total: {results.total}
      </p>
      <button className="button" onClick={resetGame} disabled={isStart}>
        Reset Game
      </button>
    </div>
  );
}

export default GameStatistics;
