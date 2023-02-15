import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guessString, answer }) {
  const lettersChecked = checkGuess(guessString, answer);

  return (
    <p className="guess">
      {lettersChecked &&
        lettersChecked.map(({ letter, status }, index) => (
          <span key={index} className={`cell ${status}`}>
            {letter}
          </span>
        ))}
      {!lettersChecked &&
        range(5).map((cell, index) => (
          <span key={index} className="cell">
            &nbsp;
          </span>
        ))}
    </p>
  );
}

export default Guess;
