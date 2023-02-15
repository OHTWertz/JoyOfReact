import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

import Guess from "./Guess";

function GuessList({ guessesList, answer }) {
  const numGuess = guessesList.length;
  return (
    <div className="guess-results">
      {guessesList.map((guess, index) => {
        return <Guess key={index} guessString={guess} answer={answer} />;
      })}
      {range(NUM_OF_GUESSES_ALLOWED - numGuess).map((row, index) => {
        return (
          <Guess
            key={index}
            guessString=""
            guessId={Math.random()}
            answer={answer}
          />
        );
      })}
    </div>
  );
}

export default GuessList;
