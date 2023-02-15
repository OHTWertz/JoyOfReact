import React from "react";
import GuessBox from "../Guess/GuessBox";
import GuessList from "../Guess/GuessList";
import GameOver from "../GameOver";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);

  function submitGuess(guess) {
    console.info({ guess: guess });

    const newGuesses = [...guesses, guess];

    setGuesses(newGuesses);

    if (guess === answer || (guess !== answer && newGuesses.length >= 6)) {
      setGameOver(true);
    }
  }

  return (
    <>
      <GuessList guessesList={guesses} answer={answer} />
      <GuessBox submitGuess={submitGuess} disabled={gameOver} />
      {gameOver && (
        <GameOver gameOver={gameOver} guesses={guesses} answer={answer} />
      )}
    </>
  );
}

export default Game;
